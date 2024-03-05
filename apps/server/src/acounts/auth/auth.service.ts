import { Injectable, Res } from '@nestjs/common';
import { UserService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { Response } from 'express';



@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
 
  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneWithEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User, @Res({ passthrough: true }) res: Response){
    try {
        const payload = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
        };
        
        const accessToken = this.jwtService.sign(payload);
        const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
        
        // Set cookies
        res.cookie('access_token', accessToken);
        res.cookie('refresh_token', refreshToken);
        
        return {  mesg:'User logged in successfully.' , user };
    } catch (error) {
        console.error('Error during login:', error);
        throw new Error('An error occurred during login.');
    }
  }
  
  async refreshToken(user: User) {
    const payload = {
      email: user.email,
      sub: {
        firstName: user.firstName ,
        lastName: user.lastName
      },
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
  
}
