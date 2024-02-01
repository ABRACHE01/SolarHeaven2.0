import { Injectable, NotFoundException } from '@nestjs/common';
import { ObjectLiteral, Repository, FindOneOptions } from 'typeorm';
import { DeepPartial } from 'typeorm/common/DeepPartial';

@Injectable()
export class BaseService<T extends ObjectLiteral> {
  constructor(private repository: Repository<T>) {}

  async create(entity: DeepPartial<T>): Promise<T> {
    return this.repository.save(entity);
  }

  async find(conditions: FindOneOptions<T>): Promise<T | null> {
    return this.repository.findOne(conditions);
  }

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async update(conditions: FindOneOptions<T>, updateData: DeepPartial<T>): Promise<T> {
    const entity = await this.repository.findOne(conditions);
    if (!entity) {
      throw new NotFoundException(`Entity with ID ${conditions} not found`);
    }
    const updatedEntity = { ...entity, ...updateData };
    return this.repository.save(updatedEntity);
  }

  async forceDelete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async softDelete(id: string): Promise<void> {
    const result = await this.repository.update(id, { isDeleted: true } as any);
    if (result.affected === 0) {
      throw new NotFoundException(`Entity with ID ${id} not found`);
    }
  }
}