import {Inject, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, Types} from 'mongoose';

import {
  Category,
  Cheese,
  Condiment,
  IProduct,
  Meat,
  Product,
  ProductDocument,
  ProductSchema,
  VirtualizedProduct,
} from '@hom-api/models';
import {getCollectionName} from '@hom-api/shared-utils';
import {S3Service} from '@hom-api/s3';

type Options = {
  categories?: {
    $in: Types.ObjectId[];
  };
};

@Injectable()
export class ProductService {
  static IGNORED_VIRTUALS = ['id'];

  constructor(
    @InjectModel(Product.name) private product: Model<ProductDocument>,
    @Inject(S3Service) private s3: S3Service,
  ) {}

  async getProducts(options: {categories?: string[]}): Promise<IProduct[]> {
    const {categories} = options;
    const opts: Options = {};
    if (categories && categories.length) {
      opts.categories = {
        $in: (categories || []).map((category) => new Types.ObjectId(category)),
      };
    }
    const products = await this.product
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
    const virtuals = Object.keys(ProductSchema.virtuals).filter(
      (name) => !ProductService.IGNORED_VIRTUALS.includes(name),
    );
    const hydratedProducts: VirtualizedProduct[] = products.map((product) =>
      this.product.hydrate(product),
    );
    const promises = await Promise.all(
      hydratedProducts.map(async (hydratedProduct) => {
        const p: Array<Promise<any>> = [];
        for (const virtual of virtuals) {
          if (hydratedProduct[virtual] instanceof Promise) {
            p.push(
              new Promise(async (resolve) => {
                const id = hydratedProduct._id.toString();
                resolve({
                  [id]: {
                    [virtual]: await hydratedProduct[virtual],
                  },
                });
              }),
            );
          }
        }
        return p;
      }),
    );
    const values = await Promise.all(promises.flat());
    return products.map((product) => {
      const id = product._id.toString();
      const virtuals = Object.assign(
        {},
        ...values
          .filter((value) => {
            const keys = Object.keys(value);
            return keys.includes(id);
          })
          .map((virtuals) => virtuals[id]),
      );
      return {
        ...product,
        ...virtuals,
      };
    });
  }
}
