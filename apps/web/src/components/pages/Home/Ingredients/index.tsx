import React from 'react';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';
import {css} from 'styled-components';

import {ColorName} from '@hoagies-on-main/shared';

import {Media, Theme} from '@hom/theme';
import {
  basketOfGoods,
  carrotsMeat,
  hoagieRoll,
  sausageChicken,
} from '@hom/assets';
import {getLazyFC} from '@hom/lazy';
import {Font, Sizing} from '@hom/types';
import {unpackAsset} from '@hom/utils';
import {Heading, Typography} from '@hom/common';
import {LocaleKey} from '@hom/locale';

import {BulletedItem} from './BulletedItem';

export const Ingredients = getLazyFC(({View}) => {
  const IngredientView = View`
     flex-direction: column;
     display: flex;
     background: ${Theme.colors.linen};
     flex-wrap: wrap;
     padding: 40px 20px 55px;
  `;

  const IngredientsWrapper = View`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    
    ${Media.C(550)`
      flex: 1;
    `}
  `;

  const IngredientColumn = View<{last?: boolean}>`
    margin-bottom: 12px;
    padding: 0;
  
    ${Media.C(550)`
      margin-bottom: 12px;
      margin-bottom: 0;
      padding: 0 15px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      
      ${(props: {last: boolean}) =>
        props.last &&
        css`
          align-items: flex-end;
        `}
    `}
  `;

  const IngredientsContent = View`
    display: flex;
    flex-direction: column;
    
    ${Media.C(550)`
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex: 1;
    `}
  `;

  const IngredientImagery = View`
    display: none;
    
    ${Media.C(550)`
      justify-content: center;
      display: flex;
      height: 300px;
    `}
  `;

  const IngredientImage = styled.Image`
    flex: 1;
    height: unset;
    width: unset;
    max-width: 250px;
  `;

  const Disclaimer = View`
    flex-direction: column;  
    margin-top: 15px;
    display: flex;
  `;

  const IngredientHeading = styled(Typography)``;

  return () => {
    const {t} = useTranslation();
    return (
      <IngredientView>
        <Heading textCenter>{t(LocaleKey.IngredientsHeading)}</Heading>
        <IngredientsWrapper>
          <IngredientsContent>
            <IngredientColumn>
              <IngredientHeading
                font={Font.LithosProBlack}
                color={ColorName.CyanCornflowerBlue}
                size={Sizing.Xmedium}
              >
                {t(LocaleKey.FreshProductsHeading)}
              </IngredientHeading>
              <BulletedItem>{t(LocaleKey.MadeFreshBullet)}</BulletedItem>
              <BulletedItem>{t(LocaleKey.HandTossedBullet)}</BulletedItem>
            </IngredientColumn>
            <IngredientColumn last>
              <IngredientHeading
                font={Font.LithosProBlack}
                color={ColorName.CyanCornflowerBlue}
                size={Sizing.Xmedium}
              >
                {t(LocaleKey.GroundBeefHeading)}
              </IngredientHeading>
              <BulletedItem>{t(LocaleKey.SignatureBeefBullet)}</BulletedItem>
              <BulletedItem>{t(LocaleKey.NeverFrozenBullet)}</BulletedItem>
            </IngredientColumn>
          </IngredientsContent>
          <IngredientImagery>
            <IngredientImage
              resizeMode="contain"
              source={unpackAsset(basketOfGoods)}
            />
            <IngredientImage
              resizeMode="contain"
              source={unpackAsset(sausageChicken)}
            />
            <IngredientImage
              resizeMode="contain"
              source={unpackAsset(hoagieRoll)}
            />
            <IngredientImage
              resizeMode="contain"
              source={unpackAsset(carrotsMeat)}
            />
          </IngredientImagery>
          <IngredientsContent>
            <IngredientColumn>
              <IngredientHeading
                font={Font.LithosProBlack}
                color={ColorName.CyanCornflowerBlue}
                size={Sizing.Xmedium}
              >
                {t(LocaleKey.GroundTurkeyHeading)}
              </IngredientHeading>
              <BulletedItem>{t(LocaleKey.GroundFreshBullet)}</BulletedItem>
              <BulletedItem>{t(LocaleKey.NeverFrozenBullet)}</BulletedItem>
            </IngredientColumn>
            <IngredientColumn last>
              <IngredientHeading
                font={Font.LithosProBlack}
                color={ColorName.CyanCornflowerBlue}
                size={Sizing.Xmedium}
              >
                {t(LocaleKey.ArtisanBunsHeading)}
              </IngredientHeading>
              <BulletedItem>
                {t(LocaleKey.AvailableGlutenFreeBullet)}
              </BulletedItem>
              <BulletedItem>{t(LocaleKey.CustomRecipeBullet)}</BulletedItem>
            </IngredientColumn>
          </IngredientsContent>
        </IngredientsWrapper>
        <Disclaimer>
          <Typography
            font={Font.LithosProBlack}
            color={ColorName.CyanCornflowerBlue}
            textCenter
          >
            {t(LocaleKey.DisclaimerPartOne)}
          </Typography>
          <Typography
            font={Font.LithosProBlack}
            color={ColorName.CyanCornflowerBlue}
            textCenter
          >
            {t(LocaleKey.DisclaimerPartTwo)}
          </Typography>
        </Disclaimer>
      </IngredientView>
    );
  };
});
