import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { Module } from '@nestjs/common';
import { Customer } from '../customers/entities/customer.entity';
import { Administrator } from '../administrators/entities/administrator.entity';
import { Technician } from '../technicians/entities/technician.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Administrator]), 
    TypeOrmModule.forFeature([Customer]), 
    TypeOrmModule.forFeature([Technician]), 
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
