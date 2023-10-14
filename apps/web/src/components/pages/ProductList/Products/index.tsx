import React, {Suspense, FC, useCallback, useEffect} from 'react';
import styled from 'styled-components/native';
import {useLazyQuery} from '@apollo/client';

import {ProductsDocument, VirtualizedProduct as IProduct} from '@hom/queries';
import {useApp, useProductList} from '@hom/context';

import {Product} from './Product';

const Container = styled.View`
  padding: 0 20px 20px 20px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const TestView = styled.View``;

export const Products: FC = () => {
  const {categories} = useApp();
  const [getProducts, {data}] = useLazyQuery(ProductsDocument);
  const {selectedCategories} = useProductList();
  const products: IProduct[] = data?.getProducts || [];

  const getProductsQuery = useCallback(() => {
    const ids = selectedCategories.map(
      (key) => categories.find((category) => category.key === key)?._id,
    );
    getProducts({variables: {categories: ids}});
  }, [selectedCategories]);

  useEffect(() => {
    getProductsQuery();
  }, [selectedCategories]);

  if (!Array.isArray(products)) {
    return null;
  }

  return (
    <Container>
      {products.map((product, index) => {
        return (
          <Suspense key={product._id}>
            <Product product={product} index={index} />
          </Suspense>
        );
      })}
    </Container>
  );
};
