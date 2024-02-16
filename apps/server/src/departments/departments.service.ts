import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { BaseService } from 'src/base/base.service';



@Injectable()
export class DepartmentsService extends BaseService <Department> {

  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {
    super(departmentRepository);
  }



}
