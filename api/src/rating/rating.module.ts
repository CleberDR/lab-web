import { Module } from '@nestjs/common';
import { RatingController } from './rating.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { RatingService } from '../rating/rating.service';

@Module({
  imports: [],
  controllers: [RatingController],
  providers: [    
    PrismaService, 
    RatingService
  ],
  exports: [
    RatingService
  ]
})
export class RatingModule {}
