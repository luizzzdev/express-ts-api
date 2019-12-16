import { Router, Request, Response } from 'express';
import MessagesRoutes from './messages/routes';

export default () => {
  const router = Router();

  /**
   * Import here another modules router
   */
  router.use('/hello', (request: Request, response: Response) => {
    response.send('hello world');
  });

  router.use('/messages', MessagesRoutes());

  return router;
};
