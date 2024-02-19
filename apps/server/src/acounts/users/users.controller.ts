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

@ApiTags('users')     
@Controller('api/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}


}
