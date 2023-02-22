import { Controller, Post, Body } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() loginDto: LoginDto) {
    const user = new User();
    user.username = loginDto.username;
    user.password = loginDto.password;

    return this.authService.login(user);
  }
}
