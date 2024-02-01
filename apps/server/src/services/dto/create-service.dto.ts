import { Administrator } from 'src/acounts/administrators/entities/administrator.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Image } from '../entities/image.entity';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  addedBy: Administrator;
  @ApiProperty()
  category: Category;
  @ApiProperty()
  images: Image[];
  @ApiProperty()
  reservations: Reservation[];
}