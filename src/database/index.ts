import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Created connection");
  })
  .catch((e) => {
    console.log("Failed to create connection: " + e);
  });
