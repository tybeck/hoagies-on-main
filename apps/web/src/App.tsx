import 'react-native-gesture-handler';

import { Text } from 'react-native';
import Constants from 'expo-constants';
import React, { Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';

import { Theme } from '@hom/theme';
import { store } from '@hom/store';
import { client } from '@hom/apollo';
import { GlobalProvisionsProvider } from '@hom/context';
import { noop } from '@hom/utils';

import AnimatedAppLoader from './components/preload/AnimatedAppLoader';
import MainScreen from './components/main-screen';

import './utils/font-awesome';

SplashScreen
  .preventAutoHideAsync()
  .catch(noop);

export default function App() {
  return (
    <Suspense fallback={<Text>Loading</Text>}>
      <ApolloProvider client={client}>
        <GlobalProvisionsProvider>
          <AnimatedAppLoader image={{ uri: Constants.expoConfig?.splash?.image || '' }}>
            <ThemeProvider theme={Theme}>
              <Provider store={store}>
                <MainScreen />
              </Provider>
            </ThemeProvider>
          </AnimatedAppLoader>
        </GlobalProvisionsProvider>
      </ApolloProvider>
    </Suspense>
  );
}