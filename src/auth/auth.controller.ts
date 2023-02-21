/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "src/auth/auth.service";
import { LoginDto } from "./dto/login-dto";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  // @Post("login")
  // async login(@Body() loginDto: LoginDto): Promise<any> {
  //   return this.authService.validateUser(loginDto.email, loginDto.password);
  // }
  // async login(@Request() req: any) {
  //   return this.authService.login(req.user);
  // }
}
