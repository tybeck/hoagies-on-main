import {Query, Resolver} from '@nestjs/graphql';
import {forwardRef, Inject} from '@nestjs/common';

import {Category, CategoryDocument} from '@hom-api/models';
import {CategoryService} from '@hom-api-fn/graphql-providers';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    @Inject(forwardRef(() => CategoryService))
    private category: CategoryService,
  ) {}

  @Query(() => [Category])
  async getCategories(): Promise<
    Pick<CategoryDocument[], keyof Array<CategoryDocument>>
  > {
    return this.category.getCategories();
  }
}
