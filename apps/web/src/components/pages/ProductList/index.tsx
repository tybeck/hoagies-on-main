import React, {FC} from 'react';
import styled from 'styled-components/native';

import {ProductListProvider} from '@hom/context';

import {Banners} from './Banners';
import {Filters} from './Filters';
import {Products} from './Products';

const ProductListView = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 75px;
  margin: 0;
`;

type ProductListProps = {
  children?: React.ReactElement;
}

const ProductList: FC<ProductListProps> = ({children}) => {
  return (
    <ProductListProvider>
      <ProductListView>
        <Banners />
        <Filters />
        <Products />
        {children}
      </ProductListView>
    </ProductListProvider>
  );
};

export {ProductList};
