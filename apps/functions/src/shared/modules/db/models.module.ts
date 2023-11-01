import {MongooseModule} from '@nestjs/mongoose';

import {getModelDefinition} from '@hom-api/shared-utils';
import {
  Category,
  CategorySchema,
  Customer,
  CustomerSchema,
  FbPost,
  FbPostSchema,
  FbReview,
  FbReviewSchema,
  Product,
  ProductSchema,
  Setting,
  SettingSchema
} from '@hom-api/models';

export const ModelsModule =     MongooseModule.forFeature([
  {
    ...getModelDefinition(Setting),
    schema: SettingSchema,
  },
  {
    ...getModelDefinition(Category),
    schema: CategorySchema,
  },
  {
    ...getModelDefinition(FbReview),
    schema: FbReviewSchema,
  },
  {
    ...getModelDefinition(FbPost),
    schema: FbPostSchema,
  },
  {
    ...getModelDefinition(Product),
    schema: ProductSchema,
  },
  {
    ...getModelDefinition(Customer),
    schema: CustomerSchema,
  },
]);
