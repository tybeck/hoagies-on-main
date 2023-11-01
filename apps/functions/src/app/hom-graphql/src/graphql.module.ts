import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver} from '@nestjs/apollo';
import {ApolloServerPluginLandingPageLocalDefault} from '@apollo/server/plugin/landingPage/default';
import {join} from 'path';

import {ConfigModule, ConfigService, Environment} from '@hom-api/config';
import {DbModule} from '@hom-api/shared-db-module';
import {ModelsModule} from '@hom-api/shared-models-module';
import {SharedAuthModule} from '@hom-api/shared-auth-module';
import {
  CategoryService,
  SettingService,
  ReviewService,
  PostService,
  ProductService,
} from '@hom-api-fn/graphql-providers';
import {
  CategoryResolver,
  SettingResolver,
  ReviewResolver,
  PostResolver,
  ProductResolver,
  AuthResolver,
} from '@hom-api-fn/graphql-resolvers';

@Module({
  imports: [
    DbModule,
    ModelsModule,
    SharedAuthModule,
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: async (config: ConfigService) => {
        const local = config.get<boolean>(Environment.Local);
        return {
          sortSchema: true,
          playground: false,
          plugins: [ApolloServerPluginLandingPageLocalDefault()],
          autoSchemaFile: local
            ? join(process.cwd(), 'schema.gql')
            : '/tmp/schema.gql',
        };
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [
    // services
    SettingService,
    CategoryService,
    ReviewService,
    PostService,
    ProductService,
    // resolvers
    SettingResolver,
    CategoryResolver,
    ReviewResolver,
    PostResolver,
    ProductResolver,
    AuthResolver,
  ],
})
export class GraphqlModule {}
