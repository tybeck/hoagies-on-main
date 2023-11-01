import {AuthGuard} from '@nestjs/passport';
import {Controller, forwardRef, Get, Inject, Res, UseGuards} from '@nestjs/common';
import Express from 'express';

import {StrategyType} from '@hom-api/types';
import {User} from '@hom-api/auth-decorators';
import {AuthService} from '@hom-api/auth-services';

// TODO: Legacy implementation from previous version, provide graphql solution.
@Controller('auth')
export class AuthController {
  constructor(
    @Inject(forwardRef(() => AuthService)) private auth: AuthService,
  ) {}

  // Google
  @Get(StrategyType.Google)
  @UseGuards(AuthGuard(StrategyType.Google))
  async googleAuth() {
    //
  }

  @Get(`${StrategyType.Google}/redirect`)
  @UseGuards(AuthGuard(StrategyType.Google))
  googleAuthRedirect(@User() user, @Res({passthrough: true}) res: Express.Response) {
    return this.auth.do(StrategyType.Google, user).then(this.redirect(res));
  }

  // FB
  @Get(StrategyType.Facebook)
  @UseGuards(AuthGuard(StrategyType.Facebook))
  async fbAuth() {
    //
  }

  @Get(`${StrategyType.Facebook}/redirect`)
  @UseGuards(AuthGuard(StrategyType.Facebook))
  fbAuthRedirect(@User() user, @Res({passthrough: true}) res: Express.Response) {
    return this.auth.do(StrategyType.Facebook, user).then(this.redirect(res));
  }

  // Twitter
  @Get(StrategyType.Twitter)
  @UseGuards(AuthGuard(StrategyType.Twitter))
  async twitterAuth() {
    //
  }

  @Get(`${StrategyType.Twitter}/redirect`)
  @UseGuards(AuthGuard(StrategyType.Twitter))
  twitterAuthRedirect(@User() user, @Res({passthrough: true}) res: Express.Response) {
    return this.auth.do(StrategyType.Twitter, user).then(this.redirect(res));
  }

  redirect = (res: Express.Response) => {
    return (token: string) => {
      const params = new URLSearchParams([['token', token]]);
      const url = new URL(process.env.URL);

      url.search = params.toString();

      return res.redirect(url.toString());
    };
  };
}
