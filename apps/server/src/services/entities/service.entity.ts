import { Administrator } from 'src/acounts/administrators/entities/administrator.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';


@Entity('services')
export class Service extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        comment: 'the service name',
        type: 'varchar',
    })
    name: string;

    @Column({
        comment: 'service description',
        type: 'varchar',
        nullable: true,
    })
    description: string;

    @Column({
        comment: 'is deleted',
        type: 'boolean',
        default: false,
    })
    isDeleted: boolean;

    @ManyToOne(() => Administrator, administrator => administrator.services)
    addedBy: Administrator;

    @ManyToOne(() => Category, category => category.services)
    category: Category;

    @OneToMany(() => Reservation, reservation => reservation.service)
    reservations: Reservation[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

}
