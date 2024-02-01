import { Injectable } from '@nestjs/common';
import { CreateTechnicianDto } from './dto/create-technician.dto';
import { UpdateTechnicianDto } from './dto/update-technician.dto';
import { Technician } from './entities/technician.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/base/base.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TechniciansService extends BaseService<Technician>  {
  constructor(
    @InjectRepository(Technician)
    private categoryRepository: Repository<Technician>,
  ) {
    super(categoryRepository);
  }
}

