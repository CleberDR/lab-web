import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GroupModule } from './group/group.module';
import { QuestionModule } from './question/question.module';
import { RatingModule } from './rating/rating.module';
import { TermsAcceptanceModule } from './terms-acceptance/terms-acceptance.module';
import { ResponseModule } from './response/response.module';
import { ClassroomModule } from './classroom/classroom.module';
import { DisciplineModule } from './discipline/discipline.module';
import { CourseModule } from './course/course.module';
import { SemesterModule } from './semester/semester.module';

@Module({
  imports: [UsersModule, GroupModule, QuestionModule, RatingModule, TermsAcceptanceModule, ResponseModule, ClassroomModule, DisciplineModule, CourseModule, SemesterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
