import * as React from 'react';
import Svg, {SvgProps, G, Path, Circle} from 'react-native-svg';

import {Theme} from '@hom/theme';

const Chicken = (props: SvgProps) => {
  const chickenFill = props.fill || Theme.colors.davysGrey;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={59.997}
      height={59}
      {...props}
    >
      <G
        data-name="018---Chicken"
        fill={chickenFill}
        transform="translate(-.003)"
      >
        <Path d="M42.172 7.378a10.37 10.37 0 0 1 4.087.442.979.979 0 0 0 .3.048 1 1 0 0 0 .3-1.953A12.343 12.343 0 0 0 42 5.386a1 1 0 0 0 .176 1.992Z" />
        <Path
          data-name="Shape"
          d="M31.676 14.2A1 1 0 0 0 33 13.71a10.926 10.926 0 0 1 4.762-5.022 1 1 0 1 0-.946-1.763 12.946 12.946 0 0 0-5.634 5.95 1 1 0 0 0 .494 1.325ZM30.943 19.19a1 1 0 1 0-.59-1.285 1 1 0 0 0 .59 1.285ZM36.43 15.89a1 1 0 1 0-.52.562 1 1 0 0 0 .52-.562ZM38.757 12.487a1 1 0 1 0-.59-1.285 1 1 0 0 0 .59 1.285Z"
        />
        <Circle cx={1} cy={1} r={1} transform="translate(38.834 17.217)" />
        <Path
          data-name="Shape"
          d="M45.182 9.534a1 1 0 1 0 .562.52 1 1 0 0 0-.562-.52ZM44.384 14.57a1 1 0 1 0 .59 1.285 1 1 0 0 0-.59-1.285ZM37.508 21.621a1 1 0 1 0-.52.562 1 1 0 0 0 .52-.562ZM32.958 25.268a1 1 0 1 0 .562.52 1 1 0 0 0-.562-.52ZM38.341 25.129a1 1 0 1 0 .562.52 1 1 0 0 0-.562-.52ZM41.606 22.072a1 1 0 1 0 .59 1.285 1 1 0 0 0-.59-1.285Z"
        />
        <Path
          data-name="Shape"
          d="M.053 43.293a17.188 17.188 0 0 0 16.068 15.686q.435.021.868.021a16.843 16.843 0 0 0 8.6-2.34l.014.007a3.978 3.978 0 0 0 3.285-.228 4 4 0 1 0 6.012-4.726l2.692-7.273a12.99 12.99 0 0 0 12.857-8.815c.065-.189.124-.378.179-.568a4.726 4.726 0 0 1 1.862-2.629 17 17 0 0 0-4.425-30.334 17.2 17.2 0 0 0-20.517 9.125 17.144 17.144 0 0 0-1.541 7.433A12.669 12.669 0 0 0 21 15.629V7.874a4 4 0 1 0-4-6.517 4 4 0 1 0-4 6.517v7.779A12.908 12.908 0 0 0 4 28c0 .273.01.546.021.835a4.944 4.944 0 0 1-.866 3.285 17.041 17.041 0 0 0-3.1 11.173ZM32.747 52.6a1 1 0 0 0 .562.52 2 2 0 1 1-2.572 1.18 1 1 0 1 0-1.875-.7 2 2 0 1 1-1.18-2.569 1 1 0 0 0 1.284-.591l2.834-7.648a13.278 13.278 0 0 0 3.749 1.4l-2.832 7.65a1 1 0 0 0 .03.758Zm-3.381-40.55A15.209 15.209 0 0 1 43.12 3.34a14.515 14.515 0 0 1 4.346.66 15 15 0 0 1 3.905 26.766A6.725 6.725 0 0 0 48.7 34.5a9.238 9.238 0 0 1-.149.475 11 11 0 1 1-20.735-7.347q.124-.336.268-.659a7.01 7.01 0 0 0 .432-4.722 14.865 14.865 0 0 1 .85-10.2ZM14 6a2 2 0 1 1 2-2 1 1 0 0 0 2 0 2 2 0 1 1 2 2 1 1 0 0 0-1 1v8.156a13.274 13.274 0 0 0-4 .009V7a1 1 0 0 0-1-1ZM4.779 33.288a6.9 6.9 0 0 0 1.24-4.557C6.01 28.494 6 28.247 6 28a11.009 11.009 0 0 1 12.842-10.853 10.834 10.834 0 0 1 7.7 5.419c.018.07.029.142.048.211a5.035 5.035 0 0 1-.33 3.385c-.111.252-.216.509-.315.774A12.911 12.911 0 0 0 30.1 41.64l-2.7 7.3a3.988 3.988 0 0 0-3.565 6.414 14.992 14.992 0 0 1-21.788-12.21 14.832 14.832 0 0 1 2.732-9.856Z"
        />
        <Path
          data-name="Shape"
          d="M8.938 27.992a.884.884 0 0 0 .125.008 1 1 0 0 0 .992-.875 6.977 6.977 0 0 1 2.409-4.458A6.9 6.9 0 0 1 17 21a1 1 0 0 0 0-2 8.871 8.871 0 0 0-5.828 2.145 8.984 8.984 0 0 0-3.1 5.731 1 1 0 0 0 .866 1.116Z"
        />
        <Circle
          data-name="Oval"
          cx={1}
          cy={1}
          r={1}
          transform="translate(5 37)"
        />
        <Circle
          data-name="Oval"
          cx={1}
          cy={1}
          r={1}
          transform="translate(8 41)"
        />
        <Circle
          data-name="Oval"
          cx={1}
          cy={1}
          r={1}
          transform="translate(5 45)"
        />
        <Circle
          data-name="Oval"
          cx={1}
          cy={1}
          r={1}
          transform="translate(9 47)"
        />
        <Circle
          data-name="Oval"
          cx={1}
          cy={1}
          r={1}
          transform="translate(11 51)"
        />
        <Circle
          data-name="Oval"
          cx={1}
          cy={1}
          r={1}
          transform="translate(13 40)"
        />
        <Circle
          data-name="Oval"
          cx={1}
          cy={1}
          r={1}
          transform="translate(15 49)"
        />
        <Circle
          data-name="Oval"
          cx={1}
          cy={1}
          r={1}
          transform="translate(14 45)"
        />
        <Circle
          data-name="Oval"
          cx={1}
          cy={1}
          r={1}
          transform="translate(10 35)"
        />
        <Circle
          data-name="Oval"
          cx={1}
          cy={1}
          r={1}
          transform="translate(8 30)"
        />
        <Circle
          data-name="Oval"
          cx={1}
          cy={1}
          r={1}
          transform="translate(14 32)"
        />
        <Circle
          data-name="Oval"
          cx={1}
          cy={1}
          r={1}
          transform="translate(16 36)"
        />
      </G>
    </Svg>
  );
};

export {Chicken};
