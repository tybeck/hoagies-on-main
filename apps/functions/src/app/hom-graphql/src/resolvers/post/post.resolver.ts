import { Query, Resolver } from '@nestjs/graphql';
import { forwardRef, Inject } from '@nestjs/common';

import { FbPost, IPost } from '@hom-api/models';

import { PostService } from '../../providers/post/post.service';

@Resolver(() => FbPost)
export class PostResolver {
  constructor(
    @Inject(forwardRef(() => PostService)) private post: PostService
  ) {}

  @Query(() => [FbPost])
  async getPosts(): Promise<Pick<IPost[], keyof Array<IPost>>> {
    return this.post.getPosts();
  }
}
