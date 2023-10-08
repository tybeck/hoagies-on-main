import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

import {IPost, FbPost, FbPostDocument} from '@hom-api/models';

@Injectable()
export class PostService {
  constructor(@InjectModel(FbPost.name) private post: Model<FbPostDocument>) {}

  async getPosts(): Promise<IPost[]> {
    return this.post.find().lean<IPost[]>().exec();
  }
}
