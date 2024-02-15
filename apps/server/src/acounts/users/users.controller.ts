import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto'; 
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { Role } from '../auth/enums/role.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { FindOneOptions } from 'typeorm';
import { User } from './entities/user.entity';

@ApiTags('users')     
@Controller('api/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get('all')
  getAll() {
    return this.userService.findAll();
  }

  @Get()
  findUntrashed() {
    const options: FindOneOptions<User> = { where: { isDeleted: false } };
    return this.userService.find(options); 
  }

  @Get('trash')
  findTrashed(){
    const options: FindOneOptions<User> = { where: { isDeleted: true } };
    return this.userService.find(options);  
  }
  

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update({ where: { id: id  } }, updateUserDto);
  }
  

  @Get(':id')
  @UseGuards(JwtGuard , RolesGuard)
  @Roles(Role.ADMIN)
  findOne(@Param('id') id: string) {
    const options: FindOneOptions<User> = { where: { id: id , isDeleted: false } };
    return this.userService.find(options);
  }

  @Delete(':id')
  trash(@Param('id') id: string) {
    return this.userService.softDelete(id);
  }

  @Delete('forcedelete/:id')
  forceDelete(@Param('id') id: string) {
    return this.userService.forceDelete(id);
  }

}
