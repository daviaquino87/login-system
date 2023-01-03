import { Request, Response } from "express";
import { validateCpf } from "../../../../utils/ValidateCpf";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, cpf, password } = request.body;
    if (!name || !email || !cpf || !password) {
      throw new Error("All fields must be filled!");
    }
    const cpfNoMask = validateCpf(cpf);

    await this.createUserUseCase.execute({
      name,
      email,
      cpf: cpfNoMask,
      password,
    });

    return response.status(201).send();
  }
}
