import { NextFunction, Request, Response } from 'express';
import { GenericError } from '../errors/GenericError';

export const ErrorHandler = (
  error: GenericError,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let message = 'Algum erro desconhecido ocorreu.';
  let code = 500;

  if (error instanceof GenericError) {
    code = error.status;
    message = error.message;
  }

  response.status(code).json({ error: message });
};
