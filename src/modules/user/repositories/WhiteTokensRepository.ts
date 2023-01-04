import { AppDataSource } from "../../../database/data-source";
import { WhiteToken } from "../entities/WhiteTokens";
import { IWhiteTokenRepository } from "./interfaces/IWhiteTokenRepository";

export class WhiteTokenRepository implements IWhiteTokenRepository {
  private repository = AppDataSource.getRepository(WhiteToken);

  async create(user: string, token: string): Promise<void> {
    const newToken = this.repository.create({
      user_id: user,
      token,
    });

    await this.repository.save(newToken);
  }
  async findToken(token: string): Promise<WhiteToken> {
    return await this.repository.findOneBy({ token });
  }
  async delete(token: string): Promise<void> {
    await this.repository.delete({ token });
  }
}
