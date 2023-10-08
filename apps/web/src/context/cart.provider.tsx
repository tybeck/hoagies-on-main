import React, {createContext, FC, useContext} from 'react';

// import { Product } from '@hom/queries';
// any === Product

interface ICartContext {
  add: (product: any) => void;
}

export const CartContext = createContext({
  add: (product: any) => {},
} as ICartContext);

export type CartProviderProps = {
  children: React.ReactElement;
};

export const CartProvider: FC<CartProviderProps> = ({children}) => {
  const add = (product: any) => {
    console.log('product', product);
  };

  return <CartContext.Provider value={{add}}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
