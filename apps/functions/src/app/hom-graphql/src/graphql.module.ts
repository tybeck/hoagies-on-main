import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {MongooseModule} from '@nestjs/mongoose';
import {ApolloDriver} from '@nestjs/apollo';
import {ApolloServerPluginLandingPageLocalDefault} from '@apollo/server/plugin/landingPage/default';
import {join} from 'path';

import {
  Setting,
  SettingSchema,
  Category,
  CategorySchema,
  FbReview,
  FbReviewSchema,
  FbPost,
  FbPostSchema,
  Product,
  ProductSchema,
  Customer,
  CustomerSchema,
} from '@hom-api/models';
import {ConfigModule, ConfigService, Environment} from '@hom-api/modules';
import {
  CategoryService,
  SettingService,
  ReviewService,
  PostService,
  ProductService,
  AuthService,
} from '@hom-api-fn/graphql-providers';
import {
  CategoryResolver,
  SettingResolver,
  ReviewResolver,
  PostResolver,
  ProductResolver,
  AuthResolver,
} from '@hom-api-fn/graphql-resolvers';

import {DbModule} from './db.module';

@Module({
  imports: [
    DbModule,
    MongooseModule.forFeature([
      {
        name: Setting.name,
        schema: SettingSchema,
        collection: Setting.name.toLowerCase(),
      },
      {
        name: Category.name,
        schema: CategorySchema,
        collection: Category.name.toLowerCase(),
      },
      {
        name: FbReview.name,
        schema: FbReviewSchema,
        collection: FbReview.name.toLowerCase(),
      },
      {
        name: FbPost.name,
        schema: FbPostSchema,
        collection: FbPost.name.toLowerCase(),
      },
      {
        name: Product.name,
        schema: ProductSchema,
        collection: Product.name.toLowerCase(),
      },
      {
        name: Customer.name,
        schema: CustomerSchema,
        collection: Customer.name.toLowerCase(),
      },
    ]),
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
    AuthService,
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
