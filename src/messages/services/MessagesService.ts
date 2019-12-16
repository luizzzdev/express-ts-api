import { Service } from '../../shared/services/Service';
import { Message } from '../repositories/models/Message';
import { MessagesRepository } from '../repositories/MessagesRepository';
import { Repository } from '../../shared/repositories/Repository';

export class MessagesService extends Service<Message> {
  getRepository(): Repository<Message> {
    return new MessagesRepository();
  }
}
