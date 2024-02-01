import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TechniciansService } from './technicians.service';
import { CreateTechnicianDto } from './dto/create-technician.dto';
import { UpdateTechnicianDto } from './dto/update-technician.dto';
import { Technician } from './entities/technician.entity';
import { FindOneOptions } from 'typeorm';

@Controller('technicians')
export class TechniciansController {
  constructor(private readonly techniciansService: TechniciansService) {}

  @Post()
  create(@Body() createTechnicianDto: CreateTechnicianDto) {
    return this.techniciansService.create(createTechnicianDto);
  }

  @Get('all')
  getAll() {
    return this.techniciansService.findAll();
  }

  @Get()
  findUntrashed() {
    const options: FindOneOptions<Technician> = { where: { isDeleted: false } };
    return this.techniciansService.find(options); 
  }

  @Get('trash')
  findTrashed(){
    const options: FindOneOptions<Technician> = { where: { isDeleted: true } };
    return this.techniciansService.find(options);  
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    const options: FindOneOptions<Technician> = { where: { id: id , isDeleted: false } };
    return this.techniciansService.find(options);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTechnicianDto: UpdateTechnicianDto) {
    return this.techniciansService.update({ where: { id: id  } }, updateTechnicianDto);
  }
  
  @Delete(':id')
  trash(@Param('id') id: string) {
    return this.techniciansService.softDelete(id);
  }

  @Delete('forcedelete/:id')
  forceDelete(@Param('id') id: string) {
    return this.techniciansService.forceDelete(id);
  }
}
