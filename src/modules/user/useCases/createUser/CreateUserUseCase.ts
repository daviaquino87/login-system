import { ErrorPrivate } from "../../../../helpers/ErrorPrivate";
import { IUserRepository } from "../../../../modules/user/repositories/interfaces/IUserRepository";
import { v4 as uuidV4 } from "uuid";

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
      id: uuidV4(),
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
