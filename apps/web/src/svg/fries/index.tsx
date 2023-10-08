import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

import {Theme} from '@hom/theme';

const Fries = (props: SvgProps) => {
  const friesFill = props.fill || Theme.colors.davysGrey;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={80}
      height={79.956}
      {...props}
    >
      <G data-name="Group 841">
        <G data-name="Group 840" fill={friesFill}>
          <Path
            data-name="Path 4988"
            d="M79.733 45.839a1.333 1.333 0 0 0-1.066-.533h-3.188l4.415-19.81a2.744 2.744 0 0 0-.393-2.112 2.574 2.574 0 0 0-1.707-1.126l-5.143-.9a2.506 2.506 0 0 0-.689-.013V9.553a2.9 2.9 0 0 0-.8-2.1 2.548 2.548 0 0 0-1.839-.795h-5.21a2.711 2.711 0 0 0-2.639 2.705l-.1 3.264-2.412-.565a2.66 2.66 0 0 0-3.225 2.121l-.324 1.743a2.738 2.738 0 0 0-.5-.135l-5.713-.95.054-1.415a2.664 2.664 0 0 0-2.662-2.768H45.3l1.669-5.543a2.689 2.689 0 0 0-.19-2.078 2.622 2.622 0 0 0-1.559-1.3L40.132.126a2.65 2.65 0 0 0-3.35 1.778l-3.3 10.991-.127-3.663a2.658 2.658 0 0 0-2.673-2.574h-5.357a2.667 2.667 0 0 0-2.669 2.758l.279 8.058-6.032.991a2.673 2.673 0 0 0-2.233 2.853h-4.01a2.669 2.669 0 0 0-2.665 2.665v8.209l-1.4-1.029a2.561 2.561 0 0 0-1.934-.484 2.63 2.63 0 0 0-1.75 1.079L.523 35.11a2.762 2.762 0 0 0 .5 3.764l6.969 5.352v1.081H1.373a1.333 1.333 0 0 0-1.28 1.705l6.949 23.821A12.736 12.736 0 0 0 19.2 79.958h41.636A12.736 12.736 0 0 0 73 70.833l6.947-23.821a1.333 1.333 0 0 0-.214-1.173Zm-7.8-20.79h.034v-.138l.226-.93 5.1.936-4.544 20.389H67Zm-7.791-15.6c0-.072.026-.118 0-.126l5.109-.021c.012.01.052.066.048.208v15.4l-3.211 12.987-2.73-3.317L66.4 16.397a2.683 2.683 0 0 0-2.021-3.066l-.354-.083Zm-5.784 5.209 4 .932 1.417.362-2.66 15.9-2.915-3.535a2.755 2.755 0 0 0-1.959-.992c-.081-.005-.161.008-.242.01Zm-2.349 15.35h.135l9.146 11.114-1.034 4.184H62.41l-7.952-9.493-2.035-2.382Zm2.844 15.2-.015.094H53.5l.76-5.576ZM49.1 17.526l5.378.9-1.292 9.5-.016.087-.017.124-.009.038v.018l-.012.052-.2 1.023-2.35 2.243a2.6 2.6 0 0 0-.2 3.6l1.208 1.441-1.653 8.764h-1.908Zm-2.505-4.2-1.23 31.984H40.03l1.23-31.984h5.332ZM39.322 2.665l5.1 1.664-1.909 6.329h-1.252a2.659 2.659 0 0 0-2.661 2.561l-.058 1.439h-2.81ZM38.44 17.32l-1.077 27.986H34.6l-.97-27.986h4.81Zm-7.758-8 1.253 35.982h-5.37l-1.24-35.978h5.357Zm-7.654 10.838.872 25.148h-4.118l-2.446-24.21ZM10.66 23.984h4.277L16.4 38.351l-5.736-4.2V23.984ZM2.683 36.67l2.324-3.362 11.75 8.614.344 3.385h-3.319Zm67.758 33.417a10.055 10.055 0 0 1-9.6 7.2H19.2a10.056 10.056 0 0 1-9.6-7.2L3.149 47.972h73.742Z"
          />
          <Path
            data-name="Path 4989"
            d="M14.771 67.636a6.038 6.038 0 0 0 5.767 4.323h7.445a1.333 1.333 0 1 0 0-2.665h-7.445a3.35 3.35 0 0 1-3.2-2.378l-2.684-9.958a1.333 1.333 0 1 0-2.574.694Z"
          />
          <Path
            data-name="Path 4990"
            d="M33.315 71.96h1.333a1.333 1.333 0 1 0 0-2.665h-1.333a1.333 1.333 0 1 0 0 2.665Z"
          />
        </G>
      </G>
    </Svg>
  );
};

export {Fries};
