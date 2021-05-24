import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { QuestionService } from '../question/question.service';

@Module({
  imports: [],
  controllers: [QuestionController],
  providers: [    
    PrismaService, 
    QuestionService
  ],
  exports: [
    QuestionService
  ]
})
export class QuestionModule {}
