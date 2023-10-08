import {Args, Query, Resolver} from '@nestjs/graphql';
import {forwardRef, Inject} from '@nestjs/common';

import {AuthTokenEntityResponse} from '@hom-api/entities-response';
import {AuthService} from '@hom-api-fn/graphql-providers';

@Resolver(() => AuthTokenEntityResponse)
export class AuthResolver {
  constructor(
    @Inject(forwardRef(() => AuthService)) private auth: AuthService,
  ) {}

  @Query(() => AuthTokenEntityResponse)
  async isValidToken(
    @Args('token') token: string,
  ): Promise<AuthTokenEntityResponse> {
    return this.auth.isValidToken(token);
  }
}
