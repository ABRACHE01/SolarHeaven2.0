

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
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
      default:
        throw new Error('Invalid role');
    }
  }
  
}

