import {Module} from '@nestjs/common';

import {GlobalModule} from '@hom-api/modules';
import {GraphqlModule} from '@hom-api/graphql-module';
import {AuthModule} from '@hom-api/auth-module';

@Module({
  imports: [
    GlobalModule,
    GraphqlModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
