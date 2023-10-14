import React from 'react';

import {ColorName} from '@hoagies-on-main/shared';

import {Media, Theme} from '@hom/theme';
import {usePostQuery} from '@hom/queries';
import {Typography, Heading} from '@hom/common';
import {getLazyFC} from '@hom/lazy';

type PostProps = Record<string, unknown>;

export const Posts = getLazyFC<PostProps>(({View}) => {
  const PostContainer = View`
    display: flex;
    background: ${Theme.colors[ColorName.White]};
    flex-direction: column;
    position: relative;
    padding: 15px;
  `;

  const SlicedPosts = View`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    ${Media.Md`
      flex-direction: row;
    `}    
  `;

  const Post = View`
    display: flex;
    background: ${Theme.colors[ColorName.Linen]};
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    width: calc(100% - 40px);
    margin: 7px 0 7px 0;
    padding: 20px;
    min-height: auto;
    
    ${Media.Sm`
      width: calc(90% - 40px);
      max-width: 625px;
    `}
    
    ${Media.Md`
      min-height: 350px;
      margin: 2.5%;
      width: 28.33%;
      padding: 2.5%;
    `}
  `;

  return () => {
    const {data} = usePostQuery();
    const posts = data?.getPosts || [];

    if (!posts.length) {
      return null;
    }

    return (
      <PostContainer style={{position: 'relative'}}>
        <Heading textCenter>#hoagiesonmain</Heading>
        <SlicedPosts>
          {posts.length &&
            posts.slice(0, 3).map((post) => (
              <Post key={post._id}>
                <Typography color={ColorName.SpaceCadet} fullWidth>
                  {post.message}
                </Typography>
              </Post>
            ))}
        </SlicedPosts>
      </PostContainer>
    );
  };
});
