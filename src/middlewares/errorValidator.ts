import { NextFunction, Request, Response } from "express";
import { ErrorPrivate } from "../helpers/ErrorPrivate";

export function errorValidator(
  error: Error & Partial<ErrorPrivate>,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const statusCode = error.statusCode ?? 500;
  const messageError = error.message ?? "Internal error server!";

  if (error instanceof ErrorPrivate) {
    return response.status(statusCode).json({ error: messageError });
  }

  console.log(error.message);
  return response.status(500).json({ info: "Internal error server!" });
}
