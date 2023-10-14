import {View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {css} from 'styled-components';

import {MyAccount, OrderNowButton} from '@hom/common';
import {useApp} from '@hom/context';
import {Media} from '@hom/theme';
import {getLazyFC} from '@hom/lazy';

import {BurgerMenuButton} from '../Drawer/BurgerMenuButton';
import {NavList} from '../NavList';
import {Logo} from '../Logo';
import {PhoneNumber} from '../PhoneNumber';

type LayoutEvent = {
  nativeEvent: {
    layout: {
      height: number;
    };
  };
};

type HeaderViewProps = {
  bg?: boolean;
};

type HeaderContainerProps = Record<string, unknown>;

export const HeaderContainer = getLazyFC<HeaderContainerProps>(({View}) => {
  const HeaderView = View<HeaderViewProps>`
    ${css`
      position: absolute;
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      padding: 0 2.5%;
      width: 95%;
      transition: 250ms all ease;
    `}

    ${({bg}) =>
      bg &&
      css`
        background: rgba(255, 255, 255, 0.85);
        box-shadow: rgba(0, 0, 0, 0.3) 0 4px 8px;
      `}
  `;

  const LeftView = View`
    ${css`
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      flex: 1;
    `}
  `;

  const LogoView = View`
    ${css`
      flex: 1;
    `}
    
    ${Media.Lg`
      flex: 0;
    `}
  `;

  const BurgerMenuButtonView = View`
    ${css`
      margin-right: 15px;
    `}  
    
    ${Media.Md`
      display: none;
    `}
  `;

  const PhoneView = View`
    ${css`
      margin-right: 25px;
      display: none;

      ${Media.Lg`
        display: flex;
      `}
    `}
  `;

  const MyAccountView = View`
    ${css`
      display: none;

      ${Media.Md`
        display: flex;
      `}
    `}  
  `;

  const NavListView = View`
    ${css`
      display: none;

      ${Media.Md`
        display: flex;
      `}
    `}
  `;

  const OrderNowButtonContainer = View`
    ${css`
      display: none;

      ${Media.Lg`
        display: flex;
      `}
    `}
  `;

  return () => {
    const [showBg, setShowBg] = useState<boolean>(false);
    const {scroll, setHeaderHeight, headerHeight} = useApp();
    const headerRef = useRef<View>(null);

    useEffect(() => {
      const element = headerRef?.current;
      if (headerHeight !== null) {
        if (element) {
          if (scroll > headerHeight) {
            if (!showBg) {
              setShowBg(true);
            }
            return;
          }
          if (showBg) {
            setShowBg(false);
          }
        }
      }
    }, [headerHeight, scroll]);

    const onLayout = ({
      nativeEvent: {
        layout: {height},
      },
    }: LayoutEvent) => {
      setHeaderHeight(height);
    };

    return (
      <HeaderView onLayout={onLayout} ref={headerRef} bg={showBg}>
        <LeftView>
          <LogoView>
            <Logo />
          </LogoView>
          <BurgerMenuButtonView>
            <BurgerMenuButton />
          </BurgerMenuButtonView>
          <NavListView>
            <NavList />
          </NavListView>
          <OrderNowButtonContainer>
            <OrderNowButton />
          </OrderNowButtonContainer>
        </LeftView>
        <PhoneView>
          <PhoneNumber />
        </PhoneView>
        <MyAccountView>
          <MyAccount />
        </MyAccountView>
      </HeaderView>
    );
  };
});

export const Header = () => {
  return <HeaderContainer />;
};
