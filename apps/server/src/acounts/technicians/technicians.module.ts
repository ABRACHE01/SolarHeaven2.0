import { Module } from '@nestjs/common';
import { TechniciansService } from './technicians.service';
import { TechniciansController } from './technicians.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Technician } from './entities/technician.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Technician]),
  ],
  controllers: [TechniciansController],
  providers: [TechniciansService],
})
export class TechniciansModule {}
