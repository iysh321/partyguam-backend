import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const CurrentUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest();
  return request.user;
});

export type CurrentUserType = { id: number | null };
export type CurrentSignupType = { oauthId: number; email: string; image: string };
