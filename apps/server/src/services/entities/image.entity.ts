
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from './service.entity';

@Entity('images')
export class Image extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        comment: 'the image URL',
        type: 'varchar',
    })
    url: string;

    @ManyToOne(() => Service, service => service.images)
    service: Service;
    

}