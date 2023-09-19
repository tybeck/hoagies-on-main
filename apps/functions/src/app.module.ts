import { Module } from '@nestjs/common';

import { GraphqlModule } from '@hom-api/graphql-module';

@Module({
  imports: [
    GraphqlModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
