import { User } from "src/acounts/users/entities/user.entity";
import { Department } from "src/departments/entities/department.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
import {  Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('technicians')
export class Technician extends User {

    @ManyToOne(() => Department, department => department.technicians)
    department: Department;

    @OneToMany(() => Reservation, reservation => reservation.technician)
    reservations: Reservation[];
    
    
    @Column({
        comment: 'the technician years Of Experience',
        type: 'varchar',
        nullable: true,
    })
    yearsOfExperience: number;
    
}
