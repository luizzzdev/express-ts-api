import joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import { ValidationError } from '../errors/ValidationError';

const extractPayloadToValidate = (source, fields) => {
  return fields.reduce((resp, field) => {
    resp[field] = source[field];
    return resp;
  }, {});
};

const extractErrorMessage = joiError => {
  return joiError.details[0].message;
};

export default validationSchema => {
  return (request: Request, response: Response, next: NextFunction) => {
    const payloadToValidate = extractPayloadToValidate(
      request,
      Object.keys(validationSchema)
    );

    const validation = joi.validate(payloadToValidate, validationSchema);

    if (validation.error !== null) {
      throw new ValidationError(extractErrorMessage(validation.error));
    }

    next();
  };
};
