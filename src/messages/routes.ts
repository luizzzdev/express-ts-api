import { Router } from 'express';
import { MessagesController } from './controllers/MessagesController';
import { RunRequestInsideTryCatch } from '../shared/helpers/RunRequestInsideTryCatch';
import Validate from '../shared/services/Validate';
import { MessageValidation } from './validators/messages';

export default (): Router => {
  const router = Router();
  router.get('/', RunRequestInsideTryCatch(MessagesController.index));
  router.get('/:id', RunRequestInsideTryCatch(MessagesController.findById));
  router.put('/:id', RunRequestInsideTryCatch(MessagesController.update));
  router.delete('/:id', RunRequestInsideTryCatch(MessagesController.delete));
  router.post('/', [
    Validate(MessageValidation.store),
    RunRequestInsideTryCatch(MessagesController.save),
  ]);
  return router;
};
