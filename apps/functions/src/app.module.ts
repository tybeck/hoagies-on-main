import {Module} from '@nestjs/common';

import {GlobalModule} from '@hom-api/modules';
import {GraphqlModule} from '@hom-api/graphql-module';

@Module({
  imports: [
    GlobalModule,
    GraphqlModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
