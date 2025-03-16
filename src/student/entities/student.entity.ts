import { Course } from "src/course/entities/course.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Student {
  @Column()
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  age: number;
  @Column()
  major: string;
  @JoinTable()
  @ManyToMany((type) => Course, (course) => course.students, { cascade: true })
  courses: Course[];
}