import {Module} from '@nestjs/common';

import {DbModule} from '@hom-api/shared-db-module';
import {ModelsModule} from '@hom-api/shared-models-module';
import {SharedAuthModule} from '@hom-api/shared-auth-module';

// controllers
import {AuthController} from './auth.controller';

@Module({
  imports: [
    DbModule,
    ModelsModule,
    SharedAuthModule,
  ],
  controllers: [
    AuthController,
  ],
  providers: [],
})
export class AuthModule {}
