import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column({select:false})
  password: string;
  @Column()
  role: string;
}