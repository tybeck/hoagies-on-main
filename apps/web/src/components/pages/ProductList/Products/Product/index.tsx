import React from 'react';
import styled from 'styled-components/native';

import {VirtualizedProduct as IProduct} from '@hom/queries';
import {Typography, AddToCart, AddToFavorites} from '@hom/common';
import {useCart} from '@hom/context';
import {Font, Sizing} from '@hom/types';
import {Media, Theme} from '@hom/theme';

import {ColorName} from '@hoagies-on-main/shared';
import {FontAwesomeIcon} from "@hom/support";
import {getLazyFC} from "@hom/lazy";

interface ProductProps {
  product: IProduct;
  index: number;
}

export const Product = getLazyFC<ProductProps>( ({View}) => {
  const ProductView = View`
    height: 375px;
    border: 1px solid #000;
    border-radius: 8px;
    width: calc(100% - 15px);
    margin: 6.5px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0;
    display: flex;
    cursor: pointer;
    
    ${Media.Md`
      width: calc(50% - 15px);
    `}
    
    ${Media.Lg`
      width: calc(25% - 15px);
    `}

    .product-image-view {
      > div div:first-child {
        transition: 500ms all ease;
        opacity: 0.7;
      }
      img {
        opacity: 0;
      }
    }
    
    &:hover {
      .product-image-view {
        > div div:first-child {
          opacity: 1;
        }
      }
    }
  `;

  const Ingredients = View`
    display: flex;
    padding: 7.5px;
  `;

  const Price = View`
    display: flex;
    padding-bottom: 7.5px;
  `;

  const ProductImage = styled.Image`
    min-width: calc(100% - 40px);
    max-height: 180px;
    border-radius: 8px;
    display: flex;
    margin: 20px;
    flex: 1;
  `;

  const NoImageAvailableYetView = View`
    min-width: calc(100% - 40px);
    margin: 20px;
    max-height: 180px;
    border-radius: 8px;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    border: 1px solid ${Theme.colors.darkSilver};
    flex-direction: column;
  `;

  const IconView = View`
    display: flex;
    margin-top: ${Theme.spaceSize.small}px;
    
    & path {
      fill: rgba(255, 0, 0, .65);
    }
  `;

  const ProductImageView = View`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  `;

  return ({product, index}) => {
    const {add} = useCart();
    const ingredientNames = [
      ...product.meats,
      ...product.cheeses,
      ...product.condiments,
    ]
      .map((ingredient) => ingredient.name)
      .join(', ');

    const getImage = () => {
      if (product.images && product.images.length) {
        return (
          <ProductImageView className="product-image-view">
            <ProductImage resizeMode="cover" source={{uri: product.images[0] }} />
          </ProductImageView>
        );
      }
      return (
        <NoImageAvailableYetView>
          <Typography font={Font.NunitoBlack}>No Image Available Yet!</Typography>
          <IconView>
            <FontAwesomeIcon icon="xmark" iconWidth={48} iconHeight={48} />
          </IconView>
        </NoImageAvailableYetView>
      );
    };

    return (
      <ProductView>
        {/*<AddToFavorites />*/}
        {getImage()}
        <Typography font={Font.NunitoBlack}>{product.name}</Typography>
        <Ingredients>
          <Typography size={Sizing.Xsmall} textCenter color={ColorName.DarkSilver}>{ingredientNames}</Typography>
        </Ingredients>
        <Price>
          <Typography font={Font.NunitoBlack}>
            ${(product.price / 100).toFixed(2)}
          </Typography>
        </Price>
        {/*<AddToCart />*/}
      </ProductView>
    );
  };
});
