import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';
import { QuestionModule } from './question/question.module';
import { UserResponseModule } from './userResponse/userResponse.module';
import { RatingModule } from './rating/rating.module';
import { QuestionGroupModule } from './questionGroup/questionGroup.module';
import { ClassModule } from './class/class.module';
import { SemesterModule } from './semester/semester.module';
import { SubjectModule } from './subject/subject.module';
import { DisciplineModule } from './discipline/discipline.module';


@Module({
  imports: [
    PrismaService,
    UserModule,
    AuthModule,
    QuestionModule,
    UserResponseModule,
    RatingModule,
    QuestionGroupModule,
    ClassModule,
    SemesterModule,
    SubjectModule,
    DisciplineModule,
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
