import React from 'react';
import {Pressable, View} from 'react-native';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';

import {isElectron} from '@hom/support';
import {Fonts} from '@hom/fonts';
import {Theme} from '@hom/theme';
import {ButtonComponent} from '@hom/svg';
import {LocaleKey} from '@hom/locale';

const SendText = styled.Text`
  position: relative;
  z-index: 2;
  color: ${Theme.colors.white};
  font-family: '${Fonts.NunitoBlack}';
  text-transform: uppercase;
  margin-left: 5px;
`;

const ButtonView = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  padding: 8px 24px;
  width: ${() => (isElectron() ? 'calc(100% + 1px)' : '100%')};
`;

function Send() {
  const {t} = useTranslation();

  return (
    <Pressable onPress={() => {}}>
      <View>
        <ButtonComponent
          adjustWidthBy={1}
          fill={Theme.colors.cyanCornflowerBlue}
          autoSize
        >
          <ButtonView>
            <SendText>{t(LocaleKey.EmailInputSend)}</SendText>
          </ButtonView>
        </ButtonComponent>
      </View>
    </Pressable>
  );
}

export {Send};
