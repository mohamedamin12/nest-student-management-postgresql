/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "./entities/student.entity";
import { Repository } from "typeorm";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async findAll() {
    return this.studentRepository.find({ relations: ["courses"] });
  }

  async findById(id: number) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new NotFoundException(`not found user for this id : ${id}`);
    }
    return student;
  }

  async createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = await this.studentRepository.save(createStudentDto);
    return student;
  }

  async updateStudent(id: number, updateStudentDto: UpdateStudentDto) {
    const studentToUpdate = await this.studentRepository.findOneBy({ id });
    if (!studentToUpdate) {
      throw new NotFoundException(`Not found student for this id :  ${id}`);
    }

    // 2) update the element
    const updatedStudent = { ...studentToUpdate, ...updateStudentDto };

    return this.studentRepository.save(updatedStudent);
  }

  async deleteStudent(id: number) {
    await this.studentRepository.delete({ id });
  }
}
