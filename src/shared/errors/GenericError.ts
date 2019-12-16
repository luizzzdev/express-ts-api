export abstract class GenericError extends Error {
  public abstract readonly status: number;
  public abstract readonly message: string;

  //@ts-ignore
  constructor() {}
}
