import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { CategoryService } from './providers/category/category.service';
import { CategoryResolver } from './resolvers/category/category.resolver';

import {
  Setting,
  SettingSchema,
  Category,
  CategorySchema,
} from '@hom-api/models';

import { SettingResolver } from './resolvers/setting/setting.resolver';
import { SettingService } from './providers/setting/setting.service';

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
    // resolvers
    SettingResolver,
    CategoryResolver,
  ],
})
export class GraphqlModule {}
