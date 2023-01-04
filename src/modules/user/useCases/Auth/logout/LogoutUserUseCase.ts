import { ErrorPrivate } from "../../../../../helpers/ErrorPrivate";
import { IWhiteTokenRepository } from "../../../../../modules/user/repositories/interfaces/IWhiteTokenRepository";
import { AppDataSource } from "../../../../../database/data-source";
import { WhiteToken } from "../../../../../modules/user/entities/WhiteTokens";

export class LogoutUserUseCase {
  constructor(private whiteTokenRepository: IWhiteTokenRepository) {}

  async execute(token: string): Promise<void> {
    const Mytoken = await this.whiteTokenRepository.findToken(token);
    if (!Mytoken) {
      throw new ErrorPrivate("Unauthorized", 401);
    }
    await this.whiteTokenRepository.delete(token);
  }
}
