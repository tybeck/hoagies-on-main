import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IReview, FbReview, FbReviewDocument } from '@hom-api/models';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(FbReview.name) private review: Model<FbReviewDocument>
  ) {}

  async getReviews(): Promise<IReview[]> {
    return this.review.find().lean<IReview[]>().exec();
  }
}
