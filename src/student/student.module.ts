import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "./entities/student.entity";
import { StudentController } from "./student.controller";
import { StudentService } from "./student.service";
import { Course } from "src/course/entities/course.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Student, Course])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
