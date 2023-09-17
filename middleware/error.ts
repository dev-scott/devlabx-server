import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  // wrong mongodb id error

  if (err.name === "castError") {
    const message = `Ressource not found  Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  if (err.code === 1100) {
    const message = `Duplicate ${Object.keys(err.key6Value)} entered`;
    err = new ErrorHandler(message, 400);
  }

  if (err.name === "JsonWebTokenError") {
    const message = `Json web token is invalid , try again`;
    err = new ErrorHandler(message, 400);
  }

  //jwt expired error
  if (err.name === "TokenExpiredError") {
    const message = `Json web token is expired , try again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    sucess: false,
    message: err.message,
  });
};
