import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "modules/user/entities/User";
import { WhiteToken } from "modules/user/entities/WhiteTokens";

const port = Number(process.env.DB_PORT);

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, WhiteToken],
  migrations: ["src/database/migrations/*.{ts,js}"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Created connection");
  })
  .catch((e) => {
    console.log("Failed to create connection: " + e);
  });
