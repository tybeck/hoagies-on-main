import React from 'react';
import styled from 'styled-components/native';

import {ColorName} from '@hoagies-on-main/shared';

import {Media, Theme} from '@hom/theme';
import {buildYourOwnBanner as BuildYourOwnBannerImage} from '@hom/assets';
import {Button, Typography} from '@hom/common';
import {Font, Sizing} from '@hom/types';
import {unpackAsset} from '@hom/utils';
import {getLazyFC} from '@hom/lazy';

export const BuildYourOwnBanner = getLazyFC(({View}) => {
  const BuildYourOwnView = View`
    display: flex;
    flex-direction: column;
    background-color: ${Theme.colors.deepSaffron};
    justify-content: center;
    padding: 20px;
    margin: 20px;
    height: 325px;
    
    ${Media.C(650)`
      flex-direction: row;
    `}
    
    ${Media.C(900)`
      flex: 0.6;
    `}
  `;

  const BuildYourOwnImage = styled.Image`
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
    height: 21.5vw;
  `;

  const TextView = View`
    display: flex;
    margin: 5px 0 15px;
  `;

  const TextColumn = View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    ${Media.C(650)`
      flex: 0.6;    
    `}
  `;

  const BottomView = View`
    display: flex;
    flex-direction: column-reverse;
    
    ${Media.C(650)`
      justify-content: center;
      flex: 0.4;    
    `}    
  `;

  const ButtonView = View`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    
    ${Media.C(650)`
      display: none;
    `}
  `;

  const ButtonLeftView = View`
    display: none;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    
    ${Media.C(650)`
      display: flex;
    `}    
  `;

  const getButton = () => (
    <Button
      text="Get Started"
      fill={ColorName.SpaceCadet}
      typographyProps={{
        font: Font.LithosProBlack,
        color: ColorName.White,
      }}
      onPress={() => console.log('get started.')}
    />
  );

  return () => {
    return (
      <BuildYourOwnView>
        <TextColumn>
          <Typography
            font={Font.LithosProBlack}
            size={Sizing.Large}
            color={ColorName.White}
            textCenter
          >
            Build your own hoagie
          </Typography>
          <TextView>
            <Typography color={ColorName.White} textCenter>
              Make a hoagie to your own liking! Add your meats, cheeses,
              condiments and more in our custom hoagie builder.
            </Typography>
          </TextView>
          <ButtonLeftView>
            {getButton()}
          </ButtonLeftView>
        </TextColumn>
        <BottomView>
          <ButtonView>
            {getButton()}
          </ButtonView>
          <BuildYourOwnImage
            resizeMode="contain"
            source={unpackAsset(BuildYourOwnBannerImage)}
          />
        </BottomView>
      </BuildYourOwnView>
    );
  };
});
