import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthenticateDto } from "./dto/authenticate.dto";
import { JwtAuthGuard } from "./jwt.guard";
import { Roles } from "./roles/roles.decorator";
import { RoleGuard } from "./roles/roles.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("login")
  login(@Res() res, @Body() dto: AuthenticateDto) {
    try {
      const response = this.authService.auth(dto);
      return res.status(HttpStatus.OK).json({ response });
    } catch (error) {
      return res.status(error.status).json(error.message);
    }
  }

  @UseGuards(JwtAuthGuard,RoleGuard)
  @Roles('admin')
  @Get('profile')
  profile(@Req() req, @Res() res) {
    return res.status(HttpStatus.OK).json(req.user);
  }
}
