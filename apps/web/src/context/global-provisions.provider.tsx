import React, { FC } from 'react';

import { AppProvider } from './app.provider';
import { CartProvider } from './cart.provider';

export type GlobalProvisionsProviderProps = {
  children?: React.ReactElement;
}

export const GlobalProvisionsProvider: FC<GlobalProvisionsProviderProps> = ({ children }) => {
  return (
    <AppProvider>
      <CartProvider>
        {children || <></>}
      </CartProvider>
    </AppProvider>
  )
}