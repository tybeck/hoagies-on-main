import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {
  DrawerNavigation,
  MainNavigation,
  MainScreenProps,
} from '@hom/navigation-types';
import {FontAwesomeIcon, isElectron} from '@hom/support';
import {ButtonComponent} from '@hom/svg';
import {Fonts} from '@hom/fonts';
import {useApp} from '@hom/context';
import {Theme} from '@hom/theme';
import {LocaleKey} from '@hom/locale';

const AccountText = styled.Text`
  position: relative;
  z-index: 2;
  font-family: '${Fonts.NunitoBlack}';
  font-size: 18px;
  text-transform: uppercase;
  margin-right: 5px;
`;

const ButtonView = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  padding: 8px 24px;
  width: ${() => (isElectron() ? 'calc(100% + 1px)' : '100%')};
`;

const MyAccount: FC = () => {
  const {isLoggedIn} = useApp();
  const {navigate} = useNavigation<MainScreenProps>();
  const {t} = useTranslation();

  const onSignInNavigate = () => {
    if (!isLoggedIn) {
      navigate(MainNavigation.Main, {screen: DrawerNavigation.SignIn});
    }
  }

  return (
    <Pressable onPress={onSignInNavigate}>
      <View>
        <ButtonComponent
          iosAdjustWidthBy={1}
          fill={Theme.colors.white}
          autoSize
        >
          <ButtonView>
            <AccountText>
              {!isLoggedIn ? t(LocaleKey.SignIn) : t(LocaleKey.MyAccount)}
            </AccountText>
            {isLoggedIn && <FontAwesomeIcon icon="angle-down" />}
          </ButtonView>
        </ButtonComponent>
      </View>
    </Pressable>
  );
};

export {MyAccount};
