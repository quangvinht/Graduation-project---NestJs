/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
//import { UserModule } from "src/users/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./jwt.strategy";
import { MongooseModule } from "@nestjs/mongoose";
//import { User, UserSchema } from "./../users/schemas/users.schema";
//import { UserService } from "src/users/users.service";

@Module({
  controllers: [AuthController],
  imports: [
    //UserModule,

    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      //3 day to expire:
      signOptions: { expiresIn: "3600s" },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
