import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User extends BaseEntity  {


    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ type: 'varchar', nullable: true })
    image: string; 

    @Column({
        comment: 'the person firstName',
        type: 'varchar',
    })
    firstName: string;

    @Column({
        comment: 'the person lastName',
        type: 'varchar',
    })
    lastName: string;

    @Column({
        comment: 'the person email',
        type: 'varchar',
        unique: true,
    })
    email: string;

    @Column({
        comment: 'the person phone number',
        type: 'varchar',
        nullable: true,
    })
    phoneNumber: string;

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
