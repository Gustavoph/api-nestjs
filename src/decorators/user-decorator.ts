import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export enum Filter {
  ID = 'id',
  NAME = 'name',
  EMAIL = 'email',
  CREATED_AT = 'createdAt',
}

export const User = createParamDecorator(
  (filter: Filter, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    if (filter) {
      return request.user[filter];
    }
    return request.user;
  },
);
