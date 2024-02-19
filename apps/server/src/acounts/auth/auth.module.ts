import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local-strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { JwtStrategy } from './strategies/jwt-strategy';
import { RefreshJwtStrategy } from './strategies/refreshToken.strategy';
import { RolesGuard } from './guards/roles.guard';
import { GoogleStrategy } from './strategies/google-strategy';
import { Customer } from '../customers/entities/customer.entity';
import { Administrator } from '../administrators/entities/administrator.entity';
import { Technician } from '../technicians/entities/technician.entity';


@Module({
  providers: [
    AuthService,
    UserService,
    LocalStrategy,
    JwtStrategy,
    RefreshJwtStrategy,
    UserService,
    RolesGuard,
    GoogleStrategy
  ],
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Customer]),
    TypeOrmModule.forFeature([Administrator]),
    TypeOrmModule.forFeature([Technician]),

    JwtModule.register({
      secret: `${process.env.jwt_secret}`,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  exports: [JwtStrategy , RolesGuard  ],

})
export class AuthModule {}
