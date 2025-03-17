import { Module } from "@nestjs/common";
import { CourseService } from "./course.service";
import { CourseController } from "./course.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from "src/course/entities/course.entity";
import { Student } from "src/student/entities/student.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Course, Student])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
