import {Module} from '@nestjs/common';

import {ModelsModule} from '@hom-api/shared-models-module';

import {JwtStrategy, FacebookStrategy, GoogleStrategy, TwitterStrategy} from './strategies';
import {AuthService} from './services';

@Module({
  imports: [
    ModelsModule,
  ],
  controllers: [],
  providers: [
    AuthService,
    JwtStrategy,
    FacebookStrategy,
    GoogleStrategy,
    TwitterStrategy,
  ],
  exports: [
    AuthService,
    JwtStrategy,
    FacebookStrategy,
    GoogleStrategy,
    TwitterStrategy,
  ]
})
export class SharedAuthModule {}
