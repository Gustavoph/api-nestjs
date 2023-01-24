import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ParamId = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    return Number(ctx.switchToHttp().getRequest().params.id);
  },
);
