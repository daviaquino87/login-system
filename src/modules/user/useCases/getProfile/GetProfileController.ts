import { Request, Response } from "express";
import { GetProfileUseCase } from "./GetProfileUseCase";

export class GetProfileController {
  constructor(private getProfileUseCase: GetProfileUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const data = {
      id: request.user.id,
      name: request.user.name,
      email: request.user.email,
      cpf: request.user.cpf,
    };

    const userInfoProfile = await this.getProfileUseCase.execute(data);

    return response.send(userInfoProfile);
  }
}
