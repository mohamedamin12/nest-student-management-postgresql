import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class Profile {
  @IsNotEmpty()
  @IsString()
  readonly username: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
  @IsNotEmpty()
  @IsString()
  readonly role: string;
  @IsString()
  @IsOptional()
  readonly avatar:string
}
