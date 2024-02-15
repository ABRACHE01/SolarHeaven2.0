import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from './config/configuration';
import { DatabaseConfig } from './config/database.config';

import { DepartmentsModule } from './departments/departments.module';
import { ServicesModule } from './services/services.module';
import { ReservationsModule } from './reservations/reservations.module';
import { CategoriesModule } from './categories/categories.module';
import { CustomersModule } from './acounts/customers/customers.module';
import { TechniciansModule } from './acounts/technicians/technicians.module';
import { AdministratorsModule } from './acounts/administrators/administrators.module';
import { UserModule } from './acounts/users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { AuthModule } from './acounts/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './acounts/auth/guards/roles.guard';
import { JwtGuard } from './acounts/auth/guards/jwt-auth.guard';



@Module({
  imports: [ 
    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
    load: [configuration],
  }),

  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useClass: DatabaseConfig,
  }),DepartmentsModule, ServicesModule, ReservationsModule, CategoriesModule, CustomersModule, TechniciansModule, AdministratorsModule, UserModule , ReviewsModule, AuthModule ],
})
export class AppModule {}
