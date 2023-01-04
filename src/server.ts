import "express-async-errors";

import "reflect-metadata";
import "./database";
import { indexRouter } from "./router/index.routes";
import express from "express";
import { errorValidator } from "./middlewares/errorValidator";

const app = express();

app.use(express.json());

app.use(indexRouter);

app.use(errorValidator);
app.listen(process.env.PORT || 3000, () => {
  console.log("application running");
});
