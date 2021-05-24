import { Module } from '@nestjs/common';
import { SubjectController } from './subject.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { SubjectService } from '../subject/subject.service';

@Module({
  imports: [],
  controllers: [SubjectController],
  providers: [    
    PrismaService, 
    SubjectService
  ],
  exports: [
    SubjectService
  ]
})
export class SubjectModule {}
