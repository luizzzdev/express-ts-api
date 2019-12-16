import { GenericError } from './GenericError';

export class ValidationError extends GenericError {
  public message: string;
  readonly status: number = 400;

  constructor(message) {
    super();
    this.message = message;
  }
}
