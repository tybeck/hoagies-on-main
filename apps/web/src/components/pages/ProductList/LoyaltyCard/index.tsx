import React from 'react';

import {ColorName} from '@hoagies-on-main/shared';

import {LoyaltyCard as Card} from '@hom/svg';
import {Typography} from '@hom/common';
import {Font, Sizing} from '@hom/types';
import {Media, Theme} from '@hom/theme';
import {Logo} from '@hom/layout';
import {getLazyFC} from '@hom/lazy';

export const LoyaltyCard = getLazyFC(({View}) => {
  const CardContent = View`
    padding: 0 25px 0px 25px;
    display: flex;
    
    svg {
      position: absolute;
    }
    
    > div:first-child {
      height: 215px;
      width: 100%;
    }
  `;

  const LoyaltyCardView = View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0.4;
    padding: 20px;
    margin: 0 20px;
    background: ${Theme.colors.cyanCornflowerBlue};
    position: relative;
    
    ${Media.C(900)`
      flex: 0.4;
      margin: 20px;
      height: 325px;
    `}
  `;

  const LoyaltyCardContent = View`
    display: flex;
    position: absolute;
    padding: 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  `;

  return () => {
    return (
      <LoyaltyCardView>
        <Typography
          size={Sizing.Large}
          font={Font.LithosProBlack}
          color={ColorName.White}
          textCenter
        >
          Get Our Loyalty Card
        </Typography>
        <CardContent>
          <Card>
            <LoyaltyCardContent>
              <Logo />
              <Typography font={Font.NunitoBlack} uppercase>
                Loyalty Card
              </Typography>
            </LoyaltyCardContent>
          </Card>
        </CardContent>
      </LoyaltyCardView>
    );
  };
});