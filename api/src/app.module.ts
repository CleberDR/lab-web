import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    PrismaService,
    UserModule,
    AuthModule,
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
