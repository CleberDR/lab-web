import { Module } from '@nestjs/common';
import { UserResponseController } from './userResponse.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { UserResponseService } from '../userResponse/userResponse.service';

@Module({
  imports: [],
  controllers: [UserResponseController],
  providers: [    
    PrismaService, 
    UserResponseService
  ],
  exports: [
    UserResponseService
  ]
})
export class UserResponseModule {}
