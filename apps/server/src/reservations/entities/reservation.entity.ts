import { Customer } from "src/acounts/customers/entities/customer.entity";
import { Technician } from "src/acounts/technicians/entities/technician.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Service } from "src/services/entities/service.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

enum ReservationStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
  }

@Entity('reservations')
export class Reservation extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string ; 

    @Column({ type: 'date' })
    date: Date;

    @Column({ type: 'enum', enum: ReservationStatus, default: ReservationStatus.PENDING })
    status: ReservationStatus;

    @Column({
        comment: 'the address',
        type: 'varchar',
    })
    address: string;

    @ManyToOne(() => Service, service => service.reservations)
    service: Service;

    @ManyToOne(() => Customer, customer => customer.reservations)
    customer: Customer;

    @ManyToOne(() => Technician, technician => technician.reservations)
    technician: Technician;

    @OneToMany(() => Review, review => review.reservation)
    reviews: Review[];
    
    @Column({
        comment: 'is deleted',
        type: 'boolean',
        default: false,
    })
    isDeleted: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

}
