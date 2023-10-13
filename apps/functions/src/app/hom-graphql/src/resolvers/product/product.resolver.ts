import {Args, Query, Resolver} from '@nestjs/graphql';
import {forwardRef, Inject} from '@nestjs/common';

import {VirtualizedProduct, ProductDocument} from '@hom-api/models';
import {ProductService} from '@hom-api-fn/graphql-providers';

@Resolver(() => VirtualizedProduct)
export class ProductResolver {
  constructor(
    @Inject(forwardRef(() => ProductService)) private product: ProductService,
  ) {}

  @Query(() => [VirtualizedProduct])
  async getProducts(
    @Args('categories', {nullable: true, type: () => [String]})
    categories: string[],
  ): Promise<Pick<ProductDocument[], keyof Array<ProductDocument>>> {
    return this.product.getProducts({categories});
  }
}
