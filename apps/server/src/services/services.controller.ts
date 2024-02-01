import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { FindOneOptions } from 'typeorm';
import { Service } from './entities/service.entity';


@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Get('all')
  getAll() {
    return this.servicesService.findAll();
  }

  @Get()
  findUntrashed() {
    const options: FindOneOptions<Service> = { where: { isDeleted: false } };
    return this.servicesService.find(options); 
  }

  @Get('trash')
  findTrashed(){
    const options: FindOneOptions<Service> = { where: { isDeleted: true } };
    return this.servicesService.find(options);  
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    const options: FindOneOptions<Service> = { where: { id: id , isDeleted: false } };
    return this.servicesService.find(options);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.servicesService.update({ where: { id: id  } }, updateServiceDto);
  }
  
  @Delete(':id')
  trash(@Param('id') id: string) {
    return this.servicesService.softDelete(id);
  }

  @Delete('forcedelete/:id')
  forceDelete(@Param('id') id: string) {
    return this.servicesService.forceDelete(id);
  }

}
