/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Course } from "./entities/course.entity";
import { Repository } from "typeorm";
import { UpdateCourseDto } from "./dto/update-course.dto";
import { CreateCourseDto } from "./dto/create-course.dto";
import { Student } from "src/student/entities/student.entity";

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async findAll() {
    return this.courseRepository.find({ relations: ["students"] });
  }

  async findById(id: number) {
    const course = await this.courseRepository.findOneBy({ id });
    if (!course) {
      throw new NotFoundException(`not found course for this id : ${id}`);
    }
    return course;
  }

  async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    const { name, studentId } = createCourseDto;
    const course = await this.courseRepository.save({ name });
    if (studentId) {
      const student = await this.studentRepository.findOneBy({ id: studentId });
      if (!student) {
        throw new NotFoundException(`Student with id ${studentId} not found`);
      }
      course.students = [student];
    }
    return this.courseRepository.save(course);
  }

  async updateCourse(id: number, updateCourseDto: UpdateCourseDto) {
    const { name, studentIds } = updateCourseDto;
    const courseToUpdate = await this.courseRepository.findOne({
      where: { id },
      relations: ["students"],
    });
    if (!courseToUpdate) {
      throw new NotFoundException(`Not found course for this id :  ${id}`);
    }
    if (studentIds && studentIds.length > 0) {
      const students = await this.studentRepository.findByIds(studentIds);

      if (students.length !== studentIds.length) {
        throw new NotFoundException(`One or more students not found`);
      }

      courseToUpdate.students = students;
    }
    // 2) update the element
    if (name) {
      courseToUpdate.name = name;
    }
    return this.courseRepository.save(courseToUpdate);
  }

  async deleteCourse(id: number) {
    await this.courseRepository.delete({ id });
  }
}
