import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from './config/configuration';
import { DatabaseConfig } from './config/database.config';

import { DepartmentsModule } from './departments/departments.module';
import { ServicesModule } from './services/services.module';
import { ReservationsModule } from './reservations/reservations.module';
import { CategoriesModule } from './categories/categories.module';
import { CustomersModule } from './customers/customers.module';
import { TechniciansModule } from './technicians/technicians.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { UsersModule } from './users/users.module';


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
  }),DepartmentsModule, ServicesModule, ReservationsModule, CategoriesModule, CustomersModule, TechniciansModule, AdministratorsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
