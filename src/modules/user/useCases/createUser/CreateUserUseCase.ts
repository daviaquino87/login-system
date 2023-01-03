import { ErrorPrivate } from "../../../../helpers/ErrorPrivate";
import { IUserRepository } from "../../../../modules/user/repositories/interfaces/IUserRepository";
import { randomUUID } from "node:crypto";

interface IRequest {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute({ name, cpf, email, password }: IRequest): Promise<void> {
    const user = {
      id: randomUUID(),
      name,
      cpf,
      email,
      password,
    };

    const verifyUser = await this.userRepository.veryfyData(email, cpf);

    if (verifyUser) {
      throw new ErrorPrivate("Invalid data");
    }
    await this.userRepository.create(user);
  }
}
