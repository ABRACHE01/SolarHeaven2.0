import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto'; 
import { AuthService } from './auth.service';
import { UserService } from '../users/users.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth.guard';
import { Role } from './enums/role.enum';
import { Roles } from './decorators/roles.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')     
@Controller('api/auth')
export class AuthController {

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req : any) {
    return await this.authService.login(req.user);
  }


  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }


  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refrshToken(@Request() req : any ) {
    
    return this.authService.refreshToken(req.user);
  }
  
 
}

