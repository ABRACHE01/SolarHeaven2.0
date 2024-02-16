import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { BaseService } from 'src/base/base.service';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomersService extends BaseService<Customer>  {
  constructor(
    @InjectRepository(Customer)
    private CustomerRepository: Repository<Customer>,
  ) {
    super(CustomerRepository);
  }
}


