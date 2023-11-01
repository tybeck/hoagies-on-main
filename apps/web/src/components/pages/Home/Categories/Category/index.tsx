import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Platform, Pressable} from 'react-native';
import {css} from 'styled-components';
import {useTranslation} from 'react-i18next';

import {Category as TCategory, Maybe} from '@hom/queries';
import {ColorName} from '@hoagies-on-main/shared';
import {getView, Heading, Typography} from '@hom/common';
import {unpackAsset} from '@hom/utils';
import {Theme} from '@hom/theme';
import {useApp} from '@hom/context';

type ContainerProps = {
  color?: Maybe<string> | undefined;
};

const CategoryImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: -50%;
  z-index: 1;
  pointer-events: none;

  ${Platform.select({
    ios: css`
      right: -75%;
      height: 150%;
      width: 150%;
      top: 25%;
    `,
  })}
`;

const CategoryPress = styled(Pressable)<{appWidth?: number | null}>`
  background: white;
  overflow: hidden;
  height: ${Math.floor(920 / 6)}px;

  ${(props) =>
    props.appWidth &&
    props.appWidth >= 800 &&
    css`
      height: ${Math.floor(920 / 2)}px;
    `}

  ${Platform.select({
    ios: css`
      min-height: 150px;
      max-height: 150px;
    `,
  })}
`;

type Props = {
  headingColor?: ColorName | null;
  category: Partial<TCategory>;
  image?: any;
};

export const Category = React.lazy(async () => {
  const View = await getView();

  const CategoryView = View<ContainerProps>`
    background-color: ${(props) =>
      props.color ? Theme.colors[props.color as never] : 'unset'};

    ${css`
      flex-direction: row;
      padding: 40px 20px;
      display: flex;
      height: 100%;
      width: 100%;
      position: unset;
      align-self: center;
      justify-content: center;
      transition: 1000ms all ease;
    `}
  `;

  const Content = View`
    ${css`
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-self: center;
      padding-left: ${Theme.spaceSize.xmedium}px;
      width: 100%;
      z-index: 1;
    `}
  `;

  return {
    default: ({category, image, headingColor}: Props) => {
      const {appWidth} = useApp();
      const {t} = useTranslation();

      return (
        <CategoryPress onPress={() => console.log('test')} appWidth={appWidth}>
          <CategoryView color={category.color}>
            {image && (
              <CategoryImage resizeMode="contain" source={unpackAsset(image)} />
            )}
            <Content>
              <Heading color={headingColor || ColorName.White}>
                {t(category.name ?? '')}
              </Heading>
              <Typography text="[Placeholder]" />
            </Content>
          </CategoryView>
        </CategoryPress>
      );
    },
  };
});
