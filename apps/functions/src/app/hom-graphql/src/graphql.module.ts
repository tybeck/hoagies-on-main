import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

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
} from '@hom-api/models';

import { CategoryService } from './providers/category/category.service';
import { CategoryResolver } from './resolvers/category/category.resolver';

import { SettingResolver } from './resolvers/setting/setting.resolver';
import { SettingService } from './providers/setting/setting.service';

import { ReviewService } from './providers/review/review.service';
import { ReviewResolver } from './resolvers/review/review.resolver';

import { PostService } from './providers/post/post.service';
import { PostResolver } from './resolvers/post/post.resolver';

import { ProductService } from './providers/product/product.service';
import { ProductResolver } from './resolvers/product/product.resolver';

import { DbModule } from './db.module';

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
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: '/tmp/schema.gql',
      driver: ApolloDriver,
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
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
  ],
})
export class GraphqlModule {}
