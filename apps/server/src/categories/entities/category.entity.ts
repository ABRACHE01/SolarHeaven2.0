import { Service } from 'src/services/entities/service.entity';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity('categories')
export class Category extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        comment: 'the category name',
        type: 'varchar',
    })
    name: string;

    @Column({
        comment: 'is deleted',
        type: 'boolean',
        default: false,
    })
    isDeleted: boolean;

    @OneToMany(() => Service, service => service.category)
    services: Service[];


    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

}
