import { WhiteTokenRepository } from "../../../../../modules/user/repositories/WhiteTokensRepository";
import { LogoutuserController } from "./LogoutUserController";
import { LogoutUserUseCase } from "./LogoutUserUseCase";

const tokenRepository = new WhiteTokenRepository();
const logoutUserUseCase = new LogoutUserUseCase(tokenRepository);
export const logoutUserController = new LogoutuserController(logoutUserUseCase);
