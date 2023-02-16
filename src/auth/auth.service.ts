import { Injectable } from "@nestjs/common";
import { UserService } from "src/users/users.service";
import { LoginDto } from "./dto/login-dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(loginDtoEmail: LoginDto["email"], loginDtoPass: LoginDto["password"]): Promise<any> {
    const user = await this.userService.findByEmail(loginDtoEmail);
    if (user && user.password === loginDtoPass) {
      const { password, ...result } = user;
      return result;
      // return result['_doc'];
    }
    return null;
  }
  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
