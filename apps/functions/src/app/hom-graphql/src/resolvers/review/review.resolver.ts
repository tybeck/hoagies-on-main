import { Query, Resolver } from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';

import { FbReview, IReview } from '@hom-api/models';

import { ReviewService } from '../../providers/review/review.service';

@Resolver(() => FbReview)
export class ReviewResolver {
  constructor(
    @Inject(forwardRef(() => ReviewService)) private review: ReviewService
  ) {}

  @Query(() => [FbReview])
  async getReviews(): Promise<Pick<IReview[], keyof Array<IReview>>> {
    return this.review.getReviews();
  }
}
