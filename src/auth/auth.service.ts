/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { IAuthenticate, Role } from "./interface/role.interface";
import { AuthenticateDto } from "./dto/authenticate.dto";
import { sign } from "jsonwebtoken";

@Injectable()
export class AuthService {
  users = [
    {
      username: "ahmed",
      password: "1234",
      role: Role.User,
      avatar: "vsrvsv",
    },
    {
      username: "ali",
      password: "12345",
      role: Role.User,
      avatar: "vsrvsv",
    },
    {
      username: "mohamed",
      password: "123456",
      role: Role.Admin,
      avatar: "vsrvsv",
    },
  ];

  auth(authenticateDto: AuthenticateDto): IAuthenticate {
    const user = this.users.find(
      (u) =>
        u.username == authenticateDto.username &&
        u.password == authenticateDto.password,
    );
    if (!user) {
      throw new NotFoundException("invalid credentials");
    }
    const token = sign({ ...user }, "secret");
    return { user, token };
  }
}
