import { Repository } from '../repositories/Repository';
import { Model } from 'sequelize';

export abstract class Service<T extends Model> {
  abstract getRepository(): Repository<T>;

  findAll(): Promise<Array<T>> {
    return this.getRepository().findAll();
  }

  async deleteByPk(id: number) {
    return this.getRepository().deleteByPk(id);
  }

  save(record: Partial<T>): Promise<T> {
    return this.getRepository().save(record);
  }

  findById(id: number): Promise<T> {
    return this.getRepository().findById(id);
  }

  async update(id, payload): Promise<T> {
    return this.getRepository().update(id, payload);
  }
}
