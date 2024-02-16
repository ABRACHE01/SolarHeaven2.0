import { Injectable } from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { BaseService } from 'src/base/base.service';
import { Administrator } from './entities/administrator.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdministratorsService extends BaseService<Administrator>  {
  constructor(
    @InjectRepository(Administrator)
    private AdministratorRepository: Repository<Administrator>,
  ) {
    super(AdministratorRepository);
  }
}