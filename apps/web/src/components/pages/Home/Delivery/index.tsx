import React from 'react';
import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';
import {useTranslation} from 'react-i18next';

import {ColorName} from '@hoagies-on-main/shared';

import {unpackAsset} from '@hom/utils';
import {Font, OS} from '@hom/types';
import {Media, Theme} from '@hom/theme';
import {LocaleKey} from '@hom/locale';
import {Typography, Heading, Button} from '@hom/common';
import {getView} from '@hom/common';

export const Delivery = React.lazy(async () => {
  const View = await getView();

  const DeliveryView = View`
    ${css`
      flex-direction: column;
      align-items: center;
      display: flex;
      width: 100%;
      height: 100%;
      min-height: 450px;
      max-height: 650px;
      background: ${Theme.colors.linen};
      padding-top: 85px;
    
      ${Media.C(800)`
        flex-direction: row;
      `}
    `}
  `;

  const DeliveryImageContent = View`
    ${css`
      justify-content: center;
      width: 100%;
      flex: 1;
      height: 1.5vw;
      min-height: 150px;
      margin-bottom: 25px;
    `}
    
    ${Media.C(800)`
      min-height: 275px;
    `}
  `;

  const DeliveryImage = styled.Image`
    ${css`
      align-self: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    `}
  `;

  const DeliveryContent = View`
    ${css`
      justify-content: flex-start;
      flex: 1;

      ${Platform.OS === OS.web &&
        css`
          justify-content: center;
        `}
    `}
  `;

  const DeliveryContentPadded = View`
    ${css`
      justify-content: center;
      text-align: center;
      height: 80%;
      width: 100%;
    `}
  `;

  const HeadingWrapper = View`
    padding: 0 ${Theme.spaceSize.xmedium}px;
  `;

  const Buttons = View`
    ${css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
    `}
    
    ${Media.Sm`
      flex-direction: row;
      margin-bottom: 20px;
    `}
    
    ${Media.C(800)`
      flex-direction: column;
      margin-bottom: 0;
    `}
    
    ${Media.Lg`
      flex-direction: row;
    `}
  `;

  const DoordashButton = View`
    ${css`
      margin-bottom: 15px;
    `}
    
    ${Media.Sm`
      margin-bottom: 0;
      margin-right: 10px;
    `}
    
     ${Media.C(800)`
      margin-bottom: 25px;
      margin-right: 0;
    `}
    
    ${Media.Lg`
      margin-right: 10px;
    `}    
  `;
  const GrubHubButton = View`
    ${css`
      margin-bottom: 25px;
    `}  
    
    ${Media.Sm`
      margin-bottom: 0;
      margin-left: 10px;
    `}
    
    ${Media.C(800)`
      margin-bottom: 25px;
      margin-left: 0;
    `}
  `;

  const Content = View`
    ${css`
      margin: 15px 0 0;
      padding: 0 ${Theme.spaceSize.xmedium}px;
    `}
  `;

  return {
    default: () => {
      const {t} = useTranslation();

      return (
        <DeliveryView>
          <DeliveryImageContent>
            <DeliveryImage
              source={unpackAsset(require('../../../../../assets/delivery.png'))}
              resizeMode="contain"
            />
          </DeliveryImageContent>
          <DeliveryContent>
            <DeliveryContentPadded>
              <HeadingWrapper>
                <Heading>
                  {t(LocaleKey.DeliveryTitle)}
                </Heading>
              </HeadingWrapper>
              <Content>
                <Typography
                  text={t(LocaleKey.Delivery)}
                  color={ColorName.DavysGrey}
                />
              </Content>
              <Buttons>
                <DoordashButton>
                  <Button
                    text={t(LocaleKey.OrderButtonDoorDash)}
                    fill={ColorName.CyanCornflowerBlue}
                    typographyProps={{
                      font: Font.NunitoBlack,
                      color: ColorName.White,
                    }}
                  />
                </DoordashButton>
                <GrubHubButton>
                  <Button
                    text={t(LocaleKey.OrderButtonGrubHub)}
                    fill={ColorName.CyanCornflowerBlue}
                    typographyProps={{
                      font: Font.NunitoBlack,
                      color: ColorName.White,
                    }}
                  />
                </GrubHubButton>
              </Buttons>
            </DeliveryContentPadded>
          </DeliveryContent>
        </DeliveryView>
      );
    }
  }
});
