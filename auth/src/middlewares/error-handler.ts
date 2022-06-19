import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";

/**
 * This is for parsing errors to improve frontend error handling,
 * so we are sure about errors structure.
 * @param err
 * @param req
 * @param res
 * @param next
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    errors: [{ message: err.message }],
  });
};
