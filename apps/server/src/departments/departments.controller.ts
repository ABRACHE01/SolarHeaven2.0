import { Controller, Get, Post, Body ,Param, Delete, ValidationPipe, UsePipes, HttpCode, Res, NotFoundException, Put  } from '@nestjs/common';
import { Response } from 'express';


import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

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

  @Get()
  @HttpCode(200)
  async getAllDepartments(@Res() res:Response) {
    const Departments = await this.departmentsService.findAll();
    return res.json({
      message: 'All Departments',
      Departments: Departments,
    });
  }

  @Get(':DepartmentId')
  @HttpCode(200)
  async findOneDepartment(
    @Res() res:Response,
    @Param('DepartmentId') DepartmentId: string,
  ): Promise<any> {
    const Department = await this.departmentsService.findOne(DepartmentId);
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
    @Param('DepartmentId') DepartmentId:string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<any> {
    const updatedDepartment = await this.departmentsService.update(
      DepartmentId,
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
    const Department = await this.departmentsService.findOne(DepartmentId);

    if (!Department) {
      throw new NotFoundException('Department does not exist!');
    }
    await this.departmentsService.softDelete(DepartmentId);
    return res.json({
      message: 'Department has been trashed successfully',
      Department: Department,
    });
  }
}
