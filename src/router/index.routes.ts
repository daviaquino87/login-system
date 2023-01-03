import { Router } from "express";
import { userRouter } from "./users.routes";

export const indexRouter = Router();
indexRouter.use("/users", userRouter);

indexRouter.get("/", (request, response) => {
  return response.send();
});
