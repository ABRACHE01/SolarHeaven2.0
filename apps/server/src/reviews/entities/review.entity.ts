import { Reservation } from "src/reservations/entities/reservation.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('reviews')
export class Review extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string ; 

    @Column({ type: 'integer'})
    rating: number;
    
    @Column({ type: 'text' })
    content: string;

    @ManyToOne(() => Reservation, reservation => reservation.reviews)
    reservation: Reservation;

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
