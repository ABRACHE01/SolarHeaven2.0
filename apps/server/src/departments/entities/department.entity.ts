import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity('departments')
export class Department extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column({
        comment: 'the department name',
        type: 'varchar',
    })
    name: string;

    @Column({
        comment: 'department description',
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

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

}
