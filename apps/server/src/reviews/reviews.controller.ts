import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { FindOneOptions } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('reviews')     
@Controller('api/reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}
  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get('all')
  getAll() {
    return this.reviewsService.findAll();
  }

  @Get()
  findUntrashed() {
    const options: FindOneOptions<Review> = { where: { isDeleted: false } };
    return this.reviewsService.find(options); 
  }

  @Get('trash')
  findTrashed(){
    const options: FindOneOptions<Review> = { where: { isDeleted: true } };
    return this.reviewsService.find(options);  
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    const options: FindOneOptions<Review> = { where: { id: id , isDeleted: false } };
    return this.reviewsService.find(options);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update({ where: { id: id  } }, updateReviewDto);
  }
  
  @Delete(':id')
  trash(@Param('id') id: string) {
    return this.reviewsService.softDelete(id);
  }

  @Delete('forcedelete/:id')
  forceDelete(@Param('id') id: string) {
    return this.reviewsService.forceDelete(id);
  }
}
