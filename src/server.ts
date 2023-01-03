require("dotenv").config();
import "reflect-metadata";
import "./database/data-source";
import express from "express";

const app = express();
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
  console.log("application running");
});
