import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { FindOneOptions } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('customers')     
@Controller('api/customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }
  
  @Get('all')
  getAll() {
    return this.customersService.findAll();
  }
  
  @Get()
  findUntrashed() {
    const options: FindOneOptions<Customer> = { where: { isDeleted: false } };
    return this.customersService.find(options); 
  }
  
  @Get('trash')
  findTrashed(){
    const options: FindOneOptions<Customer> = { where: { isDeleted: true } };
    return this.customersService.find(options);  
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    const options: FindOneOptions<Customer> = { where: { id: id , isDeleted: false } };
    return this.customersService.find(options);
  }
  
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update({ where: { id: id  } }, updateCustomerDto);
  }
  
  @Delete(':id')
  trash(@Param('id') id: string) {
    return this.customersService.softDelete(id);
  }
  
  @Delete('forcedelete/:id')
  forceDelete(@Param('id') id: string) {
    return this.customersService.forceDelete(id);
  }
}
