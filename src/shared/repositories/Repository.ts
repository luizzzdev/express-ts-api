import { Sequelize } from '../services/sequelize';
import { RecordNotFoundError } from '../errors/RecordNotFound';
import { Model, Transaction } from 'sequelize';

export abstract class Repository<T extends Model> {
  abstract getTableName(): string;
  protected transaction: Transaction = null;

  constructor(transaction = null) {
    this.transaction = transaction;
  }

  public findAll(): Promise<Array<T>> {
    return this.getModel().findAll();
  }

  async findById(id): Promise<T> {
    const record = await this.findByPkOrThrow(id);
    return record.toJSON() as T;
  }

  public async deleteByPk(id) {
    const record = await this.findByPkOrThrow(id);
    await record.destroy();
    return true;
  }

  public async save(record: Partial<T>): Promise<T> {
    const newRecord = await this.getModel().create(record);
    return newRecord.toJSON();
  }

  public async update(id, payload: Partial<T>) {
    let record = await this.findByPkOrThrow(id);
    return record.update(payload);
  }

  private getModel() {
    const modelName = this.getTableName();
    return Sequelize.models[modelName];
  }

  private async findByPkOrThrow(id): Promise<T> {
    let record: T = await this.getModel().findByPk(id);
    if (!record) {
      throw new RecordNotFoundError(`Record not found, id: ${id}`);
    }
    return record;
  }
}
