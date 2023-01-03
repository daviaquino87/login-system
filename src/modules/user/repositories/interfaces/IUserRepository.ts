import { IUserDto } from "../Dtos/IUserDTO";

export interface IUserRepository {
  create({ id, name, email, cpf, password }: IUserDto): Promise<void>;
}
