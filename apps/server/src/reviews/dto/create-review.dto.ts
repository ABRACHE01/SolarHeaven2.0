import { ApiProperty } from "@nestjs/swagger";
import { Reservation } from "src/reservations/entities/reservation.entity";

export class CreateReviewDto {
  @ApiProperty()
  rating: number;
  @ApiProperty()
  content: string;
  @ApiProperty()
  reservation: Reservation;
}