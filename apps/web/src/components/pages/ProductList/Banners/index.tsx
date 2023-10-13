import React from 'react';

import {getLazyFC} from '@hom/lazy';
import {Media} from '@hom/theme';

import {BuildYourOwnBanner} from '../BuildYourOwnBanner';
import {LoyaltyCard} from '../LoyaltyCard';

export const Banners = getLazyFC(({View}) => {
  const BannersView = View`
    display: flex;
    flex-direction: column;
    
    ${Media.C(900)`
      flex-direction: row;
    `}
  `;

  return () => {
    return (
      <BannersView>
        <BuildYourOwnBanner />
        <LoyaltyCard />
      </BannersView>
    );
  };
});
