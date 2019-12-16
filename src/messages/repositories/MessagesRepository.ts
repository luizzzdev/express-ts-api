import { Repository } from '../../shared/repositories/Repository';
import { Message } from './models/Message';

export class MessagesRepository extends Repository<Message> {
  getTableName(): string {
    return 'Message';
  }
}
