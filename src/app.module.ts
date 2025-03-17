import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentModule } from "./student/student.module";
import { CourseModule } from "./course/course.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./auth/jwt.strategy";
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        port: configService.get<number>("PG_PORT"),
        username: configService.get<string>("PG_USERNAME"),
        password: configService.get<string>("PG_PASSWORD"),
        database: configService.get<string>("PG_DATABASE"),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    CourseModule,
    StudentModule,
    AuthModule,
    PassportModule,
    JwtModule.register({ secret: "secrete", signOptions: { expiresIn: "1h" } }),
    UserModule,
  ],
  providers:[JwtStrategy]
})
export class AppModule {}
