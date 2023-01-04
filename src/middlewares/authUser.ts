import { NextFunction, Request, Response } from "express";
import { ErrorPrivate } from "../helpers/ErrorPrivate";
import { AppDataSource } from "../database/data-source";
import jwt from "jsonwebtoken";
import { User } from "../modules/user/entities/User";
import { WhiteToken } from "../modules/user/entities/WhiteTokens";
import { UserRepository } from "../modules/user/repositories/UserRepository";

type JwtPayload = {
  id: string;
};

export interface IuserResponse {
  user: Partial<User>;
}

export const authUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { authorization } = request.headers;
  const userRepository = new UserRepository();
  const tokenRepository = AppDataSource.getRepository(WhiteToken);

  if (!authorization) {
    throw new ErrorPrivate("Unauthorized", 401);
  }

  const arrayToken = authorization.split(" ");

  if (arrayToken[0] != "Bearer") {
    throw new ErrorPrivate("Unauthorized", 401);
  }
  const verifyToken = await tokenRepository.findOneBy({ token: arrayToken[1] });

  if (!verifyToken) {
    throw new ErrorPrivate("Unauthorized", 401);
  }
  const { id } = jwt.verify(arrayToken[1], process.env.JWT_PASS) as JwtPayload;

  const user = await userRepository.getProfileInfo(id);

  const userProfileInfo: Partial<User> = {
    id: user.id,
    name: user.name,
    email: user.email,
    cpf: user.cpf,
  };

  request.user = userProfileInfo;

  next();
};
