import {Platform} from 'react-native';
import styled from 'styled-components/native';
import React, {FC} from 'react';

import 'google-map-react';
// import 'react-native-maps';

import {OS} from '@hom/types';

const LATITUDE = 40.303922470598586;
const LONGITUDE = -76.60372882072272;
const ZOOM = 18.5;

const WebView = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
`;

type PinProps = {
  text: string;
  lat: number;
  lng: number;
};
const Pin: FC<PinProps> = ({text}) => <div>{text}</div>;

export const MapProvider = React.lazy(async (): Promise<{default: FC}> => {
  if (Platform.OS === OS.web) {
    const {default: WebMap} = await import('google-map-react');
    return {
      default: () => (
        <WebView>
          <WebMap
            bootstrapURLKeys={{key: 'AIzaSyBqHFBrfGh4hJsjwAglXuRaff8Xa_YeYQc'}}
            center={{lat: LATITUDE, lng: LONGITUDE}}
            zoom={ZOOM}
            options={{
              gestureHandling: 'none',
              zoomControl: true,
            }}
          >
            <Pin lat={LATITUDE} lng={LONGITUDE} text="Hoagies on Main" />
          </WebMap>
        </WebView>
      ),
    };
  }
  return null;
  // const {default: MapView, PROVIDER_GOOGLE} = await import('react-native-maps');
  // return Promise.resolve({
  //   default: () => (
  //     <WebView>
  //       <MapView
  //         provider={PROVIDER_GOOGLE}
  //         scrollEnabled={false}
  //         zoomControlEnabled
  //         camera={{
  //           zoom: 16.5,
  //           center: {latitude: 40.303922470598586, longitude: -76.60372882072272},
  //           altitude: 0,
  //           heading: 0,
  //           pitch: 0,
  //         }}
  //         style={{width: '100%', height: '100%'}}
  //       />
  //     </WebView>
  //   ),
  // });
});
