import { AppDataSource } from "../../../database/data-source";
import { User } from "../entities/User";
import { IUserDto } from "./Dtos/IUserDTO";
import { IUserRepository } from "./interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  private repository = AppDataSource.getRepository(User);
  async create({ id, name, email, cpf, password }: IUserDto): Promise<void> {
    const user = await this.repository.create({
      id,
      name,
      email,
      cpf,
      password,
    });

    await this.repository.save(user);
  }
}
