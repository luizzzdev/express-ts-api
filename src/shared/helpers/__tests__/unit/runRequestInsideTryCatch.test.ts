import { RunRequestInsideTryCatch } from '../../RunRequestInsideTryCatch';
import { Request, Response } from 'express';

describe('Run request inside try catch', () => {
  it('should call next when an error is thrown', async () => {
    const next = jest.fn();

    const middleware = RunRequestInsideTryCatch((request, response, next) => {
      throw new Error('my happy error');
    });

    await middleware({} as Request, {} as Response, next);

    expect(next).toHaveBeenCalled();
    expect(next.mock.calls.length).toBe(1);
  });

  it('should not call next when no error is thrown', async () => {
    const next = jest.fn();

    const middleware = RunRequestInsideTryCatch((request, response, next) => {
      return [];
    });

    await middleware({} as Request, {} as Response, next);

    expect(next).not.toHaveBeenCalled();
    expect(next.mock.calls.length).toBe(0);
  });
});
