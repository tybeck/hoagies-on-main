import React, {FC, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import {Animated, Pressable} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {SvgProps} from 'react-native-svg';

import {ColorName} from '@hoagies-on-main/shared';

import {Burger, Chicken, Fries, Hoagie, Kids, Meatball} from '@hom/svg';
import {Category as ICategory} from '@hom/queries';
import {Category, Font, Sizing} from '@hom/types';
import {Typography} from '@hom/common';
import {Media, Theme} from '@hom/theme';
import {useProductList} from '@hom/context';
import {getLazyFC} from '@hom/lazy';

const getCategoryIcon = (category: Category): FC<SvgProps> => {
  switch (category) {
    case Category.Hoagies:
      return Hoagie;
    case Category.CheesesteaksAndMeatballs:
      return Meatball;
    case Category.Chicken:
      return Chicken;
    case Category.AppetizersAndSides:
      return Fries;
    case Category.KidsMenu:
      return Kids;
    default:
      return Burger;
  }
};

interface FilterProps {
  index: number;
  total: number;
  category: ICategory;
}

type ParamList = {
  Categories: {
    categories: string;
  };
};

export const Filter = getLazyFC<FilterProps>(({View}) => {
  //   ${({index}) =>
  //     index === 0 &&
  //     css`
  //       margin-left: 0;
  //     `}
  //
  //       ${({index, total}) =>
  //     index === total - 1 &&
  //     css`
  //       margin-right: 0;
  //     `}
  // margin: 0 0.5%;
  const FilterView = View<{index: number; total: number}>`
    display: flex;
    width: 33.33%; 
    
    > div:first-child {
      width: calc(100% - 10px);
      margin: 5px;
    }
    
    ${Media.Md`
      width: 15.66%;
      margin: 10px 0.5%;
    `}
  `;

  const PressableView = View`
    display: flex;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    height: 75px;
    
    ${Media.Lg`
      height: 110px;
    `}
  `;

  const AnimatedView = styled(Animated.View)`
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 8px;
    justify-content: center;
    flex: 1;
  `;

  const IconView = View`
    height: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    
    svg {
      transform: scale(0.5);
    }
  `;

  const TypographyView = View`
    display: none;
    
    ${Media.Lg`
      display: flex;
    `}
  `;

  return ({index, category, total}) => {
    const {selectedCategories, setSelectedCategories} = useProductList();
    const route = useRoute<RouteProp<ParamList, 'Categories'>>();
    const key = category.key as Category;
    const selected = selectedCategories.includes(key);
    const Icon = getCategoryIcon(key);
    const animated = useRef(new Animated.Value(0)).current;

    const onPress = (key: Category) => {
      return () => {
        const selected = selectedCategories.includes(key);
        let categories = [...selectedCategories, key];
        if (selected) {
          categories = selectedCategories.filter(
            (categoryKey) => categoryKey !== key,
          );
        }
        setSelectedCategories(categories);
        if ('URLSearchParams' in window) {
          const searchParams = new URLSearchParams(window.location.search);
          searchParams.set(
            'categories',
            categories.filter((categories) => categories.length).join(','),
          );
          const newRelativePathQuery =
            window.location.pathname +
            '?' +
            decodeURIComponent(searchParams.toString());
          history.pushState(null, '', newRelativePathQuery);
        }
        Animated.timing(animated, {
          toValue: selected ? 0 : 100,
          duration: 250,
          useNativeDriver: true,
        }).start();
      };
    };

    useEffect(() => {
      const categoriesInRoute = (route?.params?.categories || '').split(',');
      if (categoriesInRoute.includes(key)) {
        animated.setValue(100);
      }
    }, []);

    const fillInterpolation = animated.interpolate({
      inputRange: [0, 100],
      outputRange: [Theme.colors.cultured, Theme.colors.cyanCornflowerBlue],
    });

    return (
      <FilterView index={index} total={total}>
        <Pressable onPress={onPress(key)}>
          <PressableView>
            <AnimatedView
              style={{
                backgroundColor: fillInterpolation,
              }}
            >
              <IconView>
                <Icon
                  fill={selected ? Theme.colors.white : Theme.colors.davysGrey}
                />
              </IconView>
              <TypographyView>
                <Typography
                  font={Font.NunitoBlack}
                  color={selected ? ColorName.White : ColorName.DavysGrey}
                  size={Sizing.Small}
                  textCenter
                  uppercase
                >
                  {category.name}
                </Typography>
              </TypographyView>
            </AnimatedView>
          </PressableView>
        </Pressable>
      </FilterView>
    );
  };
});
