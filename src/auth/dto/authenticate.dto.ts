import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AuthenticateDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;
  @IsEmail()
  @IsOptional()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}