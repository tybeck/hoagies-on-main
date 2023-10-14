import React from 'react';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {
  DrawerNavigation,
  MainNavigation,
  MainScreenProps,
} from '@hom/navigation-types';
import {Content, Font, HomScroll} from '@hom/types';
import {Link, LinkTypography} from '@hom/common';
import {LocaleKey} from '@hom/locale';

export const NavListItem = styled.View`
  margin: 0 1rem;
`;

export const NavListView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  text-transform: uppercase;
  margin: 0 1rem;
`;

type ChildRoute = {
  history: {
    key: string;
  }[];
  routes: {
    name: string;
  }[];
};

function NavList() {
  const {t} = useTranslation();
  const navigation = useNavigation<MainScreenProps>();
  const route = useRoute();

  const getContentAreaFromPage = (page: DrawerNavigation) => {
    switch (page) {
      case DrawerNavigation.ContactUs:
        return Content.HomeContactUs;
      case DrawerNavigation.Location:
        return Content.Bottom;
      default:
        return Content.Top;
    }
  };

  const navigate = (screen: DrawerNavigation) => {
    return () => {
      const whitelistedPages = [
        DrawerNavigation.Home,
        DrawerNavigation.Location,
        DrawerNavigation.ContactUs,
      ];
      let isDifferentPage = false;
      const childSymbol = Object.getOwnPropertySymbols(route)?.[0];
      const child: ChildRoute = (route as any)[childSymbol] as ChildRoute;
      if (child) {
        const routeName = child.routes?.[0]?.name ?? '';
        const history = child.history ?? [];
        if (history && history.length) {
          const historicRoute =
            history[history.length - 1]?.key?.split('-')?.[0];
          if (
            historicRoute &&
            !whitelistedPages.includes(historicRoute as DrawerNavigation)
          ) {
            isDifferentPage = true;
          }
        } else if (
          routeName &&
          !whitelistedPages.includes(routeName as DrawerNavigation)
        ) {
          isDifferentPage = true;
        }
      }
      if (whitelistedPages.includes(screen) && !isDifferentPage) {
        return globalThis.dispatchEvent(
          new CustomEvent(HomScroll, {detail: getContentAreaFromPage(screen)}),
        );
      }
      return navigation.navigate(MainNavigation.Main, {screen});
    };
  };
  const typography: LinkTypography = {
    font: Font.NunitoBlack,
  };

  return (
    <NavListView>
      <NavListItem>
        <Link
          text={t(LocaleKey.HeadingHome)}
          typography={typography}
          onPress={navigate(DrawerNavigation.Home)}
        />
      </NavListItem>
      <NavListItem>
        <Link
          text={t(LocaleKey.HeadingMenu)}
          typography={typography}
          onPress={navigate(DrawerNavigation.Products)}
        />
      </NavListItem>
      <NavListItem>
        <Link
          text={t(LocaleKey.HeadingLocation)}
          typography={typography}
          onPress={navigate(DrawerNavigation.Location)}
        />
      </NavListItem>
      <NavListItem>
        <Link
          text={t(LocaleKey.HeadingContactUs)}
          typography={typography}
          onPress={navigate(DrawerNavigation.ContactUs)}
        />
      </NavListItem>
    </NavListView>
  );
}

export {NavList};
