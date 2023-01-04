import { Router } from "express";
import { createUserController } from "../modules/user/useCases/createUser";
import { loginUserController } from "../modules/user/useCases/Auth/login";
import { getProfileController } from "../modules/user/useCases/getProfile";
import { logoutUserController } from "../modules/user/useCases/Auth/logout";
import { authUser } from "../middlewares/authUser";

export const userRouter = Router();

userRouter.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

userRouter.post("/login", (request, response) => {
  return loginUserController.handle(request, response);
});

userRouter.use(authUser);
userRouter.get("/getInfoProfile", (request, response) => {
  return getProfileController.handle(request, response);
});

userRouter.post("/logout", (request, response) => {
  return logoutUserController.handle(request, response);
});
