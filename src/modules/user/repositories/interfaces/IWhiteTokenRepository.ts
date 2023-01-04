import { WhiteToken } from "../../../../modules/user/entities/WhiteTokens";

export interface IWhiteTokenRepository {
  create(user: string, token: string): Promise<void>;
  findToken(token: string): Promise<WhiteToken>;
  delete(token: string): Promise<void>;
}
