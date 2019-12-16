import { NextFunction, Request, Response } from 'express';

export const RunRequestInsideTryCatch = callback => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      await callback(request, response, next);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
};
