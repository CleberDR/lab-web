import { Module } from '@nestjs/common';
import { QuestionGroupController } from './questionGroup.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { QuestionGroupService } from '../questionGroup/questionGroup.service';

@Module({
  imports: [],
  controllers: [QuestionGroupController],
  providers: [    
    PrismaService, 
    QuestionGroupService
  ],
  exports: [
    QuestionGroupService
  ]
})
export class QuestionGroupModule {}
