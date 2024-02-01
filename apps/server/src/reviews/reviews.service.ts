import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { BaseService } from 'src/base/base.service';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReviewsService extends BaseService<Review>  {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {
    super(reviewRepository);
  }
}

