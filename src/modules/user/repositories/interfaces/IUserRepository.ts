import { User } from "modules/user/entities/User";
import { IUserDto } from "../Dtos/IUserDTO";

export interface IUserRepository {
  create({ id, name, email, cpf, password }: IUserDto): Promise<void>;
  veryfyData(email: string, cpf: string): Promise<User>;
}
