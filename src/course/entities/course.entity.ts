import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "src/student/entities/student.entity";
@Entity()
export class Course {
  @Column()
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @ManyToMany((type) => Student, (student) => student.courses)
  students: Student[];
}