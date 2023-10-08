import React, {FC, useEffect, useState} from 'react';
import {Asset} from 'expo-asset';

import {useCustomFonts} from '@hom/hooks';
import {useAuthLoader} from '@hom/hooks';
import {useApp} from '@hom/context';
import {noop} from '@hom/utils';

import AnimatedSplashScreen from '../AnimatedSplashScreen';

type AnimatedAppLoaderProps = {
  children: React.ReactElement;
  image?: {uri: string};
};

const AnimatedAppLoader: FC<AnimatedAppLoaderProps> = ({children, image}) => {
  const [isSplashReady, setSplashReady] = useState<boolean>(false);
  const [isAppReady, setAppReady] = useState<boolean>(false);
  const [fontsLoaded] = useCustomFonts();
  const {hasSettingsLoaded} = useApp();
  const {isAuthReady} = useAuthLoader();

  useEffect(() => {
    console.log(isSplashReady, fontsLoaded, hasSettingsLoaded, isAuthReady);
    if (isSplashReady && fontsLoaded && hasSettingsLoaded && isAuthReady) {
      setAppReady(true);
    }
  }, [isAuthReady, isSplashReady, fontsLoaded, hasSettingsLoaded]);

  useEffect(() => {
    (async () => {
      async function prepare() {
        if (image?.uri) {
          await Asset.fromURI(image.uri)
            .downloadAsync()
            .finally(() => setSplashReady(true))
            .catch(noop);
        } else {
          setSplashReady(true);
        }
      }
      await prepare();
    })();
  }, [image]);

  if (!isAppReady) {
    return null;
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
};

export default AnimatedAppLoader;
