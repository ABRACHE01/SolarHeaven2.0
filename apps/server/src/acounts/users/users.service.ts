

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/acounts/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from '../auth/enums/role.enum';
import { Customer } from '../customers/entities/customer.entity';
import { Technician } from '../technicians/entities/technician.entity';
import { Administrator } from '../administrators/entities/administrator.entity';
@Injectable()
export class UserService{
  constructor(
    @InjectRepository(Customer) private readonly customerRepository: Repository<Customer>,
    @InjectRepository(Administrator) private readonly adminRepository: Repository<Administrator>,
    @InjectRepository(Technician) private readonly technicianRepository: Repository<Technician>,  ) {

}
  
  async findOneWithEmail(email: string) {
    let user;

    user = await this.customerRepository.findOne({ where: { email: email } });
    if (user) return user;

    user = await this.adminRepository.findOne({ where: { email: email } });
    if (user) return user;

    user = await this.technicianRepository.findOne({ where: { email: email } });
    return user;
  }

  async createUser(createUserDto: CreateUserDto) {
    const { role, ...userData } = createUserDto;

    switch (role) {
      case Role.CUSTOMER:
        const customer = this.customerRepository.create({ ...userData, role });
        await this.customerRepository.save(customer);
        return customer;
      case Role.ADMIN:
        const admin = this.adminRepository.create({ ...userData, role });
        await this.adminRepository.save(admin);
        return admin;
      case Role.TECHNICIAN:
        const technician = this.technicianRepository.create({ ...userData, role });
        await this.technicianRepository.save(technician);
        return technician;
      default:
        throw new Error('Invalid role');
    }
  }
  
}

