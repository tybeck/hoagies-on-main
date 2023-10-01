import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Platform, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import * as Updates from 'expo-updates';

import {getLinkingOptions} from '@hom/navigation-linking-options';
import {Navigation} from '@hom/navigation';
import {OS} from '@hom/types';
// import {Typography} from "@hom/common";

const RootView = styled(SafeAreaView)`
  flex: 1;
`;

function MainScreen() {
  // TODO: Implement "update" logic?
  const onReloadPress = useCallback(() => {
    if (Platform.OS === OS.web) {
      location.reload();
    } else {
      Updates.reloadAsync();
    }
  }, []);

  return (
    <RootView>
      <NavigationContainer linking={getLinkingOptions()}>
        <Navigation />
      </NavigationContainer>
    </RootView>
  );
}

export default MainScreen;
