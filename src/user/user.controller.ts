import {
  Body,
  Controller,
  Get,
  Post,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginDto } from "./dto/login.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAllUser() {
    return this.userService.findAll();
  }
  @Post('signup')
  signup(@Body() createUserDto:CreateUserDto) {
    return this.userService.signup(createUserDto);
  }
  @Post('login')
  login(@Body() loginDto:LoginDto) {
    return this.userService.login(loginDto);
  }
}
