import React from 'react';

import {Media} from '@hom/theme';
import {getView} from '@hom/common';

import {OrderAndPickup} from './OrderAndPickup';
import {Map} from './Map';

export const Footer = React.lazy(async () => {
  const View = await getView();

  const FooterView = View`
    display: flex;
    flex-direction: column-reverse;
    min-height: 790px;
    width: 100%;

    ${Media.Md`
      flex-direction: row;
      min-height: 450px;
    `}
  `;

  const FooterColumnView = View`
    display: flex;
    flex-direction: row;
    height: 100%;
    flex: 1;
  `;

  return {
    default: () => {
      const components = [<OrderAndPickup />, <Map />];

      return (
        <FooterView>
          {components.map((component, index) => (
            <FooterColumnView key={index}>{component}</FooterColumnView>
          ))}
        </FooterView>
      );
    },
  };
});
