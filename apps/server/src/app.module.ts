import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from './config/configuration';
import { DatabaseConfig } from './config/database.config';

import { DepartmentsModule } from './departments/departments.module';
import { ServicesModule } from './services/services.module';
import { ReservationsModule } from './reservations/reservations.module';
import { CategoriesModule } from './categories/categories.module';


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
  }),DepartmentsModule, ServicesModule, ReservationsModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
