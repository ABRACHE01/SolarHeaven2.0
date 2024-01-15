import { Technician } from 'src/acounts/technicians/entities/technician.entity';
import { Administrator } from 'src/acounts/administrators/entities/administrator.entity';
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

    @OneToMany(() => Administrator, administrator => administrator.department)
    administrators: Administrator[];

    @OneToMany(() => Technician, technician => technician.department)
    technicians: Technician[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

}
