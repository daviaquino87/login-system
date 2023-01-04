import { UserRepository } from "../../../../modules/user/repositories/UserRepository";
import { GetProfileController } from "./GetProfileController";
import { GetProfileUseCase } from "./GetProfileUseCase";

const userRepository = new UserRepository();
const getProfileUseCase = new GetProfileUseCase(userRepository);
export const getProfileController = new GetProfileController(getProfileUseCase);
