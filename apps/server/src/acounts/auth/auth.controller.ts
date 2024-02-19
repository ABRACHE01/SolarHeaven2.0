import { Body, Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto'; 
import { AuthService } from './auth.service';
import { UserService } from '../users/users.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth.guard';
import { Role } from './enums/role.enum';
import { Roles } from './decorators/roles.decorator';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express'; 
import { GoogleOAuthGuard } from './guards/google-oauth.guard';

@ApiTags('auth')     
@Controller('api/auth')
export class AuthController {

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  //google auth

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req : any) {}

  
  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req:any) {
  }


  //simple auth 
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any, @Res() res: Response) {
    try {
      const message = await this.authService.login(req.user, res);
      return res.status(200).json({ message });
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ message: 'An error occurred during login.' });
    }
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

