import { Module } from '@nestjs/common';
import { SemesterController } from './semester.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { SemesterService } from '../semester/semester.service';

@Module({
  imports: [],
  controllers: [SemesterController],
  providers: [    
    PrismaService, 
    SemesterService
  ],
  exports: [
    SemesterService
  ]
})
export class SemesterModule {}
