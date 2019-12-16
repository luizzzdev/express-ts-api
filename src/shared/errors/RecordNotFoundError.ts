import { GenericError } from './GenericError';

export class RecordNotFoundError extends GenericError {
  public message: string;
  readonly status: number = 404;

  constructor(message) {
    super();
    this.message = message;
  }
}
