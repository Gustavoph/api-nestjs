import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  async canActivate(ctx: ExecutionContext) {
    const request = ctx.switchToHttp().getRequest();
    const { authorization } = request.headers;

    const token = authorization && authorization.split(' ')[1];
    try {
      const data = this.authService.checkToken(token);

      const user = await this.userService.listOne(data.id);
      request.user = user;

      return true;
    } catch (e) {
      return false;
    }
  }
}
