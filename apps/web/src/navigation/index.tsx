import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MainNavigation} from '@hom/navigation-types';
import {Header} from '@hom/layout';

import {DrawerNavigator} from './Drawer';

const RootStack = createStackNavigator();

function Navigation() {
  return (
    <RootStack.Navigator
      initialRouteName={MainNavigation.Main}
      screenOptions={{header: Header, headerMode: 'float'}}
    >
      <RootStack.Screen
        name={MainNavigation.Main}
        component={DrawerNavigator}
      />
    </RootStack.Navigator>
  );
}

export {Navigation};
