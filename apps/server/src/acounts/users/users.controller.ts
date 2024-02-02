import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto'; 
import { UserService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { Role } from '../auth/enums/role.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

@ApiTags('users')     
@Controller('api/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}


  @Get(':id')
  @UseGuards(JwtGuard , RolesGuard)
  @Roles(Role.ADMIN)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

}
