/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { StudentService } from "./student.service";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";

@Controller("student")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAllStudent() {
    return this.studentService.findAll();
  }
  @Get(":id")
  findById(@Param("id") id: number) {
    return this.studentService.findById(id);
  }
  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.createStudent(createStudentDto);
  }
  @Patch(":id")
  update(@Param("id") id: number, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.updateStudent(id,updateStudentDto);
  }
  @Delete(                                                                                                                        
    ":id")
  delete (@Param("id") id: number) {
    return this.studentService.deleteStudent(id);
  }
}
