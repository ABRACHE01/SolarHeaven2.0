import { Controller, Get, Post, Body , Param, Delete, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FindOneOptions } from 'typeorm';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get('all')
  getAll() {
    return this.categoriesService.findAll();
  }

  @Get()
  findUntrashed() {
    const options: FindOneOptions<Category> = { where: { isDeleted: false } };
    return this.categoriesService.find(options); 
  }

  @Get('trash')
  findTrashed(){
    const options: FindOneOptions<Category> = { where: { isDeleted: true } };
    return this.categoriesService.find(options);  
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    const options: FindOneOptions<Category> = { where: { id: id , isDeleted: false } };
    return this.categoriesService.find(options);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update({ where: { id: id  } }, updateCategoryDto);
  }
  
  @Delete(':id')
  trash(@Param('id') id: string) {
    return this.categoriesService.softDelete(id);
  }

  @Delete('forcedelete/:id')
  forceDelete(@Param('id') id: string) {
    return this.categoriesService.forceDelete(id);
  }
}
