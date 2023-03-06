import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginUsername(loginDto: LoginDto) {
    const user = await this.usersService.findOne(loginDto.username);
    if (user && (await bcrypt.compare(loginDto.password, user.password))) {
      const { password, ...result } = user;

      const payload = {
        id: result.id,
      };

      return {
        accessToken: this.jwtService.sign(payload),
      };
    }
    throw new BadRequestException("Invalid username or email / password.");
  }

  async loginEmail(loginDto: LoginDto) {
    const user = await this.usersService.findOnewithEmail(loginDto.email);
    if (user && (await bcrypt.compare(loginDto.password, user.password))) {
      const { password, ...result } = user;

      const payload = {
        id: result.id,
      };

      return {
        accessToken: this.jwtService.sign(payload),
      };
    }
    throw new BadRequestException("Invalid username or email / password.");
  }
}
