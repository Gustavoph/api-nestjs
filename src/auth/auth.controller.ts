import { User } from '../decorators/user-decorator';
import { AuthGuard } from '../guards/auth-guards';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { AuthForgetDto } from './dtos/forget-dto';
import { AuthLoginDto } from './dtos/login-dto';
import { AuthRegisterDto } from './dtos/register-dto';
import { AuthResetDto } from './dtos/reset-dto';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() body: AuthLoginDto) {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDto) {
    return this.userService.create(body);
  }

  @Post('forget')
  async forget(@Body() body: AuthForgetDto) {
    return this.authService.forget(body.email);
  }

  @Post('reset')
  async reset(@Body() body: AuthResetDto) {
    return this.authService.reset(body.password, body.token);
  }

  @UseGuards(AuthGuard)
  @Post('me')
  async me(@User() user) {
    return { me: 'ok', name: user.name, id: user.id };
  }
}
