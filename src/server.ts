require("dotenv").config();
import "reflect-metadata";
import "./database";
import { indexRouter } from "./router/index.routes";
import express from "express";

const app = express();
app.use(express.json());
app.use(indexRouter);
app.listen(process.env.PORT || 3000, () => {
  console.log("application running");
});
