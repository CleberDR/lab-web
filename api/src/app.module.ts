import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';


@Module({
  imports: [
    PrismaService,
    UserModule,
  ],
  controllers: [
    AppController, 
    UserController
  ],
  providers: [
    AppService, 
    PrismaService,
    UserService,
  ],
})
export class AppModule {}
