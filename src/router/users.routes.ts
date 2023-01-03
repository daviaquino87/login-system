import { request, Router } from "express";
import { createUserController } from "../modules/user/useCases/createUser";

export const userRouter = Router();

userRouter.post("/", (request, response) => {
  return createUserController.handle(request, response);
});
