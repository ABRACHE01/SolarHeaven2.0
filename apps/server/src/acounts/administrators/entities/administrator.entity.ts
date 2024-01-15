import { User } from "src/acounts/users/entities/user.entity";
import { Department } from "src/departments/entities/department.entity";
import { Service } from "src/services/entities/service.entity";
import {  Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('administrators')
export class Administrator extends User {

    @ManyToOne(() => Department, department => department.administrators)
    department: Department;

    @OneToMany(() => Service, service => service.addedBy)
    services: Service[];

}
