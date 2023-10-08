import {JwtService} from '@nestjs/jwt';
import {
  ExecutionContext,
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import {CACHE_MANAGER} from '@nestjs/cache-manager';
import {AuthGuard} from '@nestjs/passport';
import {Observable} from 'rxjs';
import Express from 'express';

import {Customer} from '@hom-api/models';
import {RedisClient, StrategyType} from '@hom-api/types';

@Injectable()
export class HomAuthGuard extends AuthGuard(StrategyType.Hom) {
  constructor(
    @Inject(forwardRef(() => JwtService)) private readonly jwt: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: RedisClient,
  ) {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Express.Request = context.switchToHttp().getRequest();
    const token = request.header('Authorization')?.replace('Bearer ', '');
    try {
      this.jwt.verify(token, {secret: process.env.JWT_SECRET});

      const customer: Customer = this.jwt.decode(token) as Customer;
      const strategies = customer.strategies.map(
        ({id, type}) => `${id}:${type}`,
      );
      const cachedTokens = Promise.all(
        strategies.map((tokenStrategy) =>
          this.cacheManager.getAsync(tokenStrategy),
        ),
      );

      return cachedTokens.then((tokens) =>
        tokens.some((thisToken) => thisToken === token),
      );
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
