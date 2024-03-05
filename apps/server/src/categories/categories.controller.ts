import { Controller, Get, Post, Body , Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FindOneOptions } from 'typeorm';
import { Category } from './entities/category.entity';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/acounts/auth/decorators/roles.decorator';
import { JwtGuard } from 'src/acounts/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/acounts/auth/guards/roles.guard';
import { Role } from 'src/acounts/auth/enums/role.enum';

@ApiTags('categories')     
@Controller('api/categories')
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
  @UseGuards(JwtGuard)
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
