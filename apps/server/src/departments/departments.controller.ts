import { Controller, Get, Post, Body ,Param, Delete, ValidationPipe, UsePipes, HttpCode, Res, NotFoundException, Put  } from '@nestjs/common';
import { Response } from 'express';


import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindOneOptions } from 'typeorm';
import { Department } from './entities/department.entity';

@ApiTags('departments')  
@Controller('api/departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async create(@Res() res:Response, @Body() createDepartmentDto: CreateDepartmentDto) {
    const newDepartment = await this.departmentsService.create(createDepartmentDto);
    return res.json({
      message: 'Department has been submitted successfully!',
      Department: newDepartment,
    });
  }

  @Get('all')
  @HttpCode(200)
  async getAll(@Res() res:Response) {
    const Departments = await this.departmentsService.findAll();
    return res.json({
      message: 'All Departments',
      Departments: Departments,
    });
  }

  @Get()
  findUntrashed(){
    const options: FindOneOptions<Department> = { where: { isDeleted: false } };
    return this.departmentsService.find(options); 
  }

  @Get('trash')
  findTrashed(){
    const options: FindOneOptions<Department> = { where: { isDeleted: true } };
    return this.departmentsService.find(options);  
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(
    @Res() res:Response,
    @Param('id') id: string,
  ): Promise<any> {
    const options: FindOneOptions<Department> = { where: { id: id , isDeleted: false } };
    const Department = await this.departmentsService.find(options);
    if (!Department) {
      throw new NotFoundException('Department does not exist!');
    }
    return res.json({
      message: 'Department details',
      DepartmentId: Department,
    });
  }


  @Put(':DepartmentId')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async updateDepartment(
    @Res() res:Response,
    @Param('id') id:string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<any> {
    const updatedDepartment = await this.departmentsService.update(
      { where: { id: id  } },
      updateDepartmentDto,
    );
    if (!updatedDepartment) {
      throw new NotFoundException('Department does not exist!');
    }
    return res.json({
      message: 'Department has been successfully updated',
      updatedDepartment: updatedDepartment,
    });
  }

  @Delete(':DepartmentId')
  @HttpCode(200)
  async delete(
    @Res() res:Response,
    @Param('DepartmentId') DepartmentId: string,
  ): Promise<any> {
    const Department = await this.departmentsService.find({ where: { id: DepartmentId  } });

    if (!Department) {
      throw new NotFoundException('Department does not exist!');
    }
    await this.departmentsService.softDelete(DepartmentId);
    return res.json({
      message: 'Department has been trashed successfully',
      Department: Department,
    });
  }

  @Delete('forcedelete/:id')
  forceDelete(@Param('id') id: string) {
    return this.departmentsService.forceDelete(id);
  }

}
