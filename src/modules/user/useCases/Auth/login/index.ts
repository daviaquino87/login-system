import { UserRepository } from "../../../../../modules/user/repositories/UserRepository";
import { LoginUserController } from "./LoginUserController";
import { LoginUserUseCase } from "./LoginUserUseCase";

const userRepository = new UserRepository();
const loginUserUseCase = new LoginUserUseCase(userRepository);
export const loginUserController = new LoginUserController(loginUserUseCase);
