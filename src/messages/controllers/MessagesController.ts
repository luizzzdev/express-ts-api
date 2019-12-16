import { Request, Response, NextFunction } from 'express';
import { MessagesService } from '../services/MessagesService';
import { Message } from '../repositories/models/Message';

export const MessagesController = {
  async index(request: Request, response: Response, next: NextFunction) {
    return response.json({ data: await new MessagesService().findAll() });
  },

  async delete(request: Request, response: Response, next: NextFunction) {
    const id = +request.params.id;
    return response.json({ data: await new MessagesService().deleteByPk(id) });
  },

  async save(request: Request, response: Response, next: NextFunction) {
    const payload = request.body;
    return response
      .status(201)
      .json({ data: await new MessagesService().save(payload) });
  },

  async findById(request: Request, response: Response, next: NextFunction) {
    const id = +request.params.id;
    return response.json({ data: await new MessagesService().findById(id) });
  },

  async update(request: Request, response: Response, next: NextFunction) {
    const id = +request.params.id;
    const payload: Partial<Message> = request.body;
    return response.json({
      data: await new MessagesService().update(id, payload),
    });
  },
};
