import { User } from "../../../../modules/user/entities/User";
import { IUserRepository } from "../../../../modules/user/repositories/interfaces/IUserRepository";
import jwt from "jsonwebtoken";
import { ErrorPrivate } from "../../../../helpers/ErrorPrivate";

type JwtPayload = {
  id: string;
};
export interface IuserResponse {
  user: Partial<User>;
}

type Irequest = {
  id: string;
  name: string;
  email: string;
  cpf: string;
};

export class GetProfileUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id, name, email, cpf }: Irequest): Promise<IuserResponse> {
    const userLoged: IuserResponse = {
      user: {
        id,
        name,
        email,
        cpf,
      },
    };
    return userLoged;
  }
}
