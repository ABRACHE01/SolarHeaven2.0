import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { FindOneOptions } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('reservations')     
@Controller('api/reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
  }

  @Get('all')
  getAll() {
    return this.reservationsService.findAll();
  }

  @Get()
  findUntrashed(){
    const options: FindOneOptions<Reservation> = { where: { isDeleted: false } };
    return this.reservationsService.find(options); 
  }

  @Get('trash')
  findTrashed(){
    const options: FindOneOptions<Reservation> = { where: { isDeleted: true } };
    return this.reservationsService.find(options);  
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    const options: FindOneOptions<Reservation> = { where: { id: id , isDeleted: false } };
    return this.reservationsService.find(options);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return this.reservationsService.update({ where: { id: id  } }, updateReservationDto);
  }
  
  @Delete(':id')
  trash(@Param('id') id: string) {
    return this.reservationsService.softDelete(id);
  }

  @Delete('forcedelete/:id')
  forceDelete(@Param('id') id: string) {
    return this.reservationsService.forceDelete(id);
  }

}
