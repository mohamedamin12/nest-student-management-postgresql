import { IsEmail, IsEnum, IsNumber, IsString } from "class-validator";
import { Role } from "src/auth/interface/role.interface";

export class CreateUserDto {
  @IsString()
  readonly username: string;
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly password: string;
  @IsEnum(Role)
  readonly role:Role

}