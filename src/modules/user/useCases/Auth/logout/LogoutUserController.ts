import { Request, Response } from "express";
import { LogoutUserUseCase } from "./LogoutUserUseCase";

export class LogoutuserController {
  constructor(private logoutUserUseCase: LogoutUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { authorization } = request.headers;
    const array = authorization.split(" ");
    await this.logoutUserUseCase.execute(array[1]);

    return response.send();
  }
}
