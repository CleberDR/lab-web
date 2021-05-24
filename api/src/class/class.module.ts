import { Module } from '@nestjs/common';
import { ClassController } from './class.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { ClassService } from '../class/class.service';

@Module({
  imports: [],
  controllers: [ClassController],
  providers: [    
    PrismaService, 
    ClassService
  ],
  exports: [
    ClassService
  ]
})
export class ClassModule {}
