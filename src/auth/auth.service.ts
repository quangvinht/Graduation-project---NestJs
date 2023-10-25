/* eslint-disable prettier/prettier */

import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

//import { UserService } from "src/users/users.service";
import { LoginDto } from "./dto/login-dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    // @InjectModel(User.name) private UserModel: Model<UserDocument>,
    //private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // async signUp(SignUpDto: SignUpDto) {
  //   const { userName, email, password } = SignUpDto;
  //   //hash a password :
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   const newUser = await this.userService.create({
  //     userName,
  //     email,
  //     password: hashedPassword,
  //     identifyCard: "",
  //     birthDate: "",
  //     phoneNumber: "",

  //     avatarUrl: "",
  //   });
  //   return newUser;
  // }

  // async validateUser(email: string, pass: string): Promise<any> {
  //   const user = await this.userService.findByEmail(email);

  //   if (user && user.password === pass) {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     const { password, ...result } = user;
  //     return user;
  //     // return result['_doc'];
  //   }
  //   return null;
  // }
  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
