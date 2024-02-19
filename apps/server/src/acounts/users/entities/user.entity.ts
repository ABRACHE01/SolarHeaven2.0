import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany, BeforeInsert, TableInheritance } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/acounts/auth/enums/role.enum';

export abstract class User extends BaseEntity  {

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
        comment: 'the person role',
        type: 'enum',
        enum: Role,
        default: Role.CUSTOMER,
      })
    role: Role;

    @Column({ nullable: false })
    password: string;

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

    @BeforeInsert()
    async hashPasword() {
      this.password = await bcrypt.hash(this.password, 10);
    }

}
