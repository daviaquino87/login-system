import "dotenv/config";
import { ErrorPrivate } from "../../../../../helpers/ErrorPrivate";
import { User } from "../../../../../modules/user/entities/User";
import { IUserRepository } from "../../../../../modules/user/repositories/interfaces/IUserRepository";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

interface Irequest {
  email: string;
  password: string;
}

interface Iresponse {
  user: Partial<User>;
  token: string;
  authorized: Boolean;
}

export class LoginUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute({ email, password }: Irequest): Promise<Iresponse> {
    const user = await this.userRepository.find(email);

    if (!user) {
      throw new ErrorPrivate("Incorrect email or password.");
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      throw new ErrorPrivate("Incorrect email or password.");
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_PASS ?? "",
      { expiresIn: "1h" }
    );

    const userLoged: Iresponse = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token: token,
      authorized: true,
    };

    return userLoged;
  }
}
