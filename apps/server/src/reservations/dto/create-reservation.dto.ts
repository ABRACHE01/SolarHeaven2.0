import { ApiProperty } from "@nestjs/swagger";
import { Customer } from "src/acounts/customers/entities/customer.entity";
import { Technician } from "src/acounts/technicians/entities/technician.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Service } from "src/services/entities/service.entity";

enum ReservationStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

export class CreateReservationDto {
  @ApiProperty()
  date: Date;
  @ApiProperty()
  status: ReservationStatus;
  @ApiProperty()
  address: string;
  @ApiProperty()
  service: Service;
  @ApiProperty()
  customer: Customer;
  @ApiProperty()
  technician: Technician;
  @ApiProperty()
  reviews: Review[];
}