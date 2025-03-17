import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, StudentModule, CourseModule, AuthModule],

})
export class AppModule {}
