import React, {RefObject, useState} from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {ColorName} from '@hoagies-on-main/shared';

import {Font, SettingType} from '@hom/types';
import {BreakpointSize, Media, Theme} from '@hom/theme';
import {unpackAsset} from '@hom/utils';
import {newsletter} from '@hom/assets';
import {Input, Typography} from '@hom/common';
import {useApp} from '@hom/context';
import {LocaleKey} from '@hom/locale';
import {getLazyFC} from '@hom/lazy';

import {Send} from './Send';

type SubscribeProps<T> = {
  viewRef?: RefObject<T>;
  onPositionChange?: (y: number) => void;
};

const MD_BREAKPOINT = 750;
const LG_BREAKPOINT = 1024;

export const Subscribe = getLazyFC<SubscribeProps<View>>(({View}) => {
  const SubscribeView = View`
    display: flex;
    background: ${Theme.colors[ColorName.Linen]};
    flex-direction: column;
    min-height: 460px;
    padding: 15px 15px 0 15px;
    width: calc(100% - 30px);
    flex: 1;
    
    ${Media.C(MD_BREAKPOINT)`
      align-items: center;
      flex-direction: row;

      &.subscribe-view > div:first-child {
        width: 35%;
        height: 50%;
      }
    `}
  `;

  const SubscribeColumn = View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  const NewsletterImage = styled.Image`
    display: flex;
    margin-bottom: 20px;
    margin-top: 15px;
    width: 100%;
    height: 35%;
  `;

  const InputField = View`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 20px;
    width: 90%;
    
    ${Media.C(MD_BREAKPOINT)`
      flex-direction: row;
    `}
    
    ${Media.C(LG_BREAKPOINT)`
      width: 100%;
    `}
  `;

  const SendButton = View`
    display: flex;
    margin: 0;
    
    ${Media.C(MD_BREAKPOINT)`
      margin: 0 0 0 8px;
    `}
  `;

  return ({onPositionChange, viewRef}: SubscribeProps<View>) => {
    const {appWidth, getSetting} = useApp();
    const [phoneNo] = useState<string | null>(
      getSetting(SettingType.PhoneNumber),
    );
    const {t} = useTranslation();

    const onLayout = (event: {nativeEvent: {layout: {y: number}}}) => {
      const y = event?.nativeEvent?.layout?.y;
      if (onPositionChange) {
        onPositionChange(y);
      }
    };

    return (
      <SubscribeView
        ref={viewRef}
        onLayout={onLayout}
        className="subscribe-view"
      >
        <NewsletterImage
          resizeMode="contain"
          source={unpackAsset(newsletter)}
        />
        <SubscribeColumn>
          <Typography
            font={Font.NunitoBlack}
            color={ColorName.SpaceCadet}
            textCenter={
              typeof appWidth === 'number' && appWidth <= LG_BREAKPOINT
            }
          >
            {t(LocaleKey.SubscribeParagraph, {phoneNo})}
          </Typography>
          <InputField>
            <Input
              placeholder={t(LocaleKey.EmailInputPlaceholder)}
              noMargin={
                typeof appWidth === 'number' && appWidth >= MD_BREAKPOINT
              }
            />
            <SendButton>
              <Send />
            </SendButton>
          </InputField>
        </SubscribeColumn>
      </SubscribeView>
    );
  };
});
