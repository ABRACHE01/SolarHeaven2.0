import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { FindOneOptions } from 'typeorm';
import { Administrator } from './entities/administrator.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('administrators')     
@Controller('api/administrators')
export class AdministratorsController {
  constructor(private readonly administratorsService: AdministratorsService) {}

  @Post()
  create(@Body() createAdministratorDto: CreateAdministratorDto) {
    return this.administratorsService.create(createAdministratorDto);
  }
  
  @Get('all')
  getAll() {
    return this.administratorsService.findAll();
  }
  
  @Get()
  findUntrashed() {
    const options: FindOneOptions<Administrator> = { where: { isDeleted: false } };
    return this.administratorsService.find(options); 
  }
  
  @Get('trash')
  findTrashed(){
    const options: FindOneOptions<Administrator> = { where: { isDeleted: true } };
    return this.administratorsService.find(options);  
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    const options: FindOneOptions<Administrator> = { where: { id: id , isDeleted: false } };
    return this.administratorsService.find(options);
  }
  
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAdministratorDto: UpdateAdministratorDto) {
    return this.administratorsService.update({ where: { id: id  } }, updateAdministratorDto);
  }
  
  @Delete(':id')
  trash(@Param('id') id: string) {
    return this.administratorsService.softDelete(id);
  }
  
  @Delete('forcedelete/:id')
  forceDelete(@Param('id') id: string) {
    return this.administratorsService.forceDelete(id);
  }
}
