import { User } from "src/acounts/users/entities/user.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
import {  Column, Entity, OneToMany } from 'typeorm';

@Entity('customers')
export class Customer extends User {
    
    @OneToMany(() => Reservation, reservation => reservation.customer)
    reservations: Reservation[];
    
}
