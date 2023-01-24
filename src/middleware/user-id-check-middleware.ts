import { BadRequestException, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class UserIdCheckMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    if (isNaN(Number(req.params.id)) || Number(req.params.id) <= 0) {
      throw new BadRequestException('Id inválido');
    }

    next();
  }
}
