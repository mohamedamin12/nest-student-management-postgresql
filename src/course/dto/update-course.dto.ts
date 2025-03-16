import { IsNumber, IsOptional, IsString, IsArray } from "class-validator";

export class UpdateCourseDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsArray()
  @IsNumber({}, { each: true })
  readonly studentIds?: number[];
}
