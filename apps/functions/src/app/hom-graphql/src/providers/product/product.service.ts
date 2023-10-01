import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, Types} from 'mongoose';

import {
  Product,
  ProductDocument,
  IProduct,
  Meat,
  Cheese,
  Condiment,
  Category,
} from '@hom-api/models';
import {getCollectionName} from '@hom-api/shared-utils';

type Options = {
  categories?: {
    $in: Types.ObjectId[];
  };
};

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private product: Model<ProductDocument>) {}

  async getProducts(options: {categories?: string[]}): Promise<IProduct[]> {
    const {categories} = options;
    const opts: Options = {};
    if (categories && categories.length) {
      opts.categories = {
        $in: (categories || []).map((category) => new Types.ObjectId(category)),
      };
    }
    return this.product
      .aggregate([
        {$match: opts},
        {
          $lookup: {
            from: getCollectionName(Meat),
            localField: 'meats',
            foreignField: '_id',
            as: 'meats',
          },
        },
        {
          $lookup: {
            from: getCollectionName(Cheese),
            localField: 'cheeses',
            foreignField: '_id',
            as: 'cheeses',
          },
        },
        {
          $lookup: {
            from: getCollectionName(Condiment),
            localField: 'condiments',
            foreignField: '_id',
            as: 'condiments',
          },
        },
        {
          $lookup: {
            from: getCollectionName(Category),
            localField: 'categories',
            foreignField: '_id',
            as: 'categories',
          },
        },
      ])
      .exec();
  }
}