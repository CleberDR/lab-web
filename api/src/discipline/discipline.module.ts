import { Module } from '@nestjs/common';
import { DisciplineController } from './discipline.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { DisciplineService } from '../discipline/discipline.service';

@Module({
  imports: [],
  controllers: [DisciplineController],
  providers: [    
    PrismaService, 
    DisciplineService
  ],
  exports: [
    DisciplineService
  ]
})
export class DisciplineModule {}
