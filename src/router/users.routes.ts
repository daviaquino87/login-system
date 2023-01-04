import { Router } from "express";
import { createUserController } from "../modules/user/useCases/createUser";
import { loginUserController } from "../modules/user/useCases/Auth/login";

export const userRouter = Router();

userRouter.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

userRouter.post("/login", (request, response) => {
  return loginUserController.handle(request, response);
});
