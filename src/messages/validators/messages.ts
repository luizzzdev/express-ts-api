import joi from 'joi';

export const MessageValidation = {
  store: {
    body: {
      message: joi.string().required(),
    },
  },
};
