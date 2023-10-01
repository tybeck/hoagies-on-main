import React, {FC} from 'react';
import styled from 'styled-components/native';

import {useApp} from '@hom/context';
import {Content} from '@hom/types';
// import {Fold} from '@hom/common';

import {Delivery} from './Delivery';
import {Categories} from './Categories';
import {Ingredients} from './Ingredients';
import {Reviews} from './Reviews';
import {Posts} from './Posts';
import {Subscribe} from './Subscribe';

const HomeView = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
`;

type HomeProps = {
  children?: React.ReactElement;
}

const Home: FC<HomeProps> = ({children}): React.ReactElement => {
  const {setComponentPositionY} = useApp();

  const onSubscribePositionChange = (value) => setComponentPositionY(Content.HomeContactUs, value);

  return (
    <HomeView>
      {/*<Fold />*/}
      <Delivery />
      <Categories />
      <Ingredients />
      <Reviews />
      <Posts />
      <Subscribe onPositionChange={onSubscribePositionChange} />
      {children && children}
    </HomeView>
  );
};

export {Home};
