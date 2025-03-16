import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCourseDto {
  @IsString()
  readonly name: string;
  @IsNumber()
  @IsOptional()
  readonly studentId: number;
}