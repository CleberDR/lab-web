import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../user/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [    
    PrismaService, 
    UserService
  ]
})
export class UserModule {}
