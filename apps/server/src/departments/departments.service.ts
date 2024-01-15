import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';



@Injectable()
export class DepartmentsService {

  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    return await this.departmentRepository.save(createDepartmentDto);
  }


  async findAll(): Promise<Department[]> {
    return await this.departmentRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: string) {
    return this.departmentRepository.findOne({ where: { id , isDeleted: false } });
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    await this.departmentRepository.update(id, updateDepartmentDto);
    return this.departmentRepository.findOne({ where: { id , isDeleted: false } });
  }

  async delete(id: string): Promise<void> {
    await this.departmentRepository.delete(id);
  }

  async softDelete(id: string): Promise<void> {
    const department = await this.departmentRepository.findOne({ where: { id ,  isDeleted: false } });
    if (!department) {
      throw new NotFoundException('department not found');
    }
    department.isDeleted = true;  
    await this.departmentRepository.save(department);
  }

}
