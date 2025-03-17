import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CourseService } from "./course.service";
import { CreateCourseDto } from "./dto/create-course.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";

@Controller("course")
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  findAllCourses() {
    return this.courseService.findAll();
  }
  @Get(":id")
  findById(@Param("id") id: number) {
    return this.courseService.findById(id);
  }
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.createCourse(createCourseDto);
  }
  @Patch(":id")
  update(@Param("id") id: number, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.updateCourse(id, updateCourseDto);
  }
  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.courseService.deleteCourse(id);
  }
}