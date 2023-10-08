import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

import {Theme} from '@hom/theme';

const Kids = (props: SvgProps) => {
  const kidsFill = props.fill || Theme.colors.davysGrey;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={79.998}
      height={80}
      {...props}
    >
      <G data-name="002---Bear" fill={kidsFill}>
        <Path d="M30.666 21.335a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-5.333a1.333 1.333 0 1 1-1.333 1.333 1.333 1.333 0 0 1 1.333-1.333Z" />
        <Path
          data-name="Shape"
          d="M49.332 21.335a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-5.333a1.333 1.333 0 1 1-1.333 1.333 1.333 1.333 0 0 1 1.333-1.333Z"
        />
        <Path
          data-name="Shape"
          d="M72 52.001a8.813 8.813 0 0 0-1.027.061 26.162 26.162 0 0 0-13.798-13.661 7.333 7.333 0 0 0-1.825-3.8A17.754 17.754 0 0 0 60 22.668c0-.563-.037-1.117-.091-1.668A10.656 10.656 0 1 0 47.986 5.564a21.19 21.19 0 0 0-15.973 0A10.654 10.654 0 1 0 20.09 21.001c-.053.549-.09 1.1-.09 1.667a17.758 17.758 0 0 0 4.649 11.933 7.333 7.333 0 0 0-1.825 3.8 26.157 26.157 0 0 0-13.8 13.661A8.814 8.814 0 0 0 8 52.001c-8 0-8 10.407-8 16 0 5.536 2.8 12 10.666 12 5.316 0 13.066-1.768 18.066-6.66A23.667 23.667 0 0 0 40 76.001a23.668 23.668 0 0 0 11.266-2.66c5 4.892 12.75 6.66 18.066 6.66 7.873 0 10.668-6.465 10.668-12 0-5.592 0-16-8-16Zm-3.623.8a11.014 11.014 0 0 0-5.307 6.724l-3.17-1.258c.057-.767.1-1.553.1-2.387a31.847 31.847 0 0 0-2.973-13.629 7.965 7.965 0 0 0 .2-.917 23.746 23.746 0 0 1 11.149 11.467Zm-43.044-12.8c0-.183.012-.364.024-.533a4.573 4.573 0 0 1 1.693-3.467c5.131.064 7.42 1.409 8.377 2.3a4.193 4.193 0 0 0-.761 2.367 4.089 4.089 0 0 0 .283 1.428c-1.177.859-3.485 1.848-7.9 1.9a4.267 4.267 0 0 1-1.419-2.048 5.948 5.948 0 0 1-.3-1.949Zm12 .667c0-1.084 1.221-2 2.667-2s2.667.916 2.667 2-1.221 2-2.667 2-2.667-.916-2.667-2Zm7.238-2.367c.957-.891 3.245-2.236 8.376-2.3a4.585 4.585 0 0 1 1.695 3.467c.012.172.024.353.024.533a5.96 5.96 0 0 1-.3 1.957 4.213 4.213 0 0 1-1.418 2.043c-4.413-.053-6.72-1.043-7.9-1.9a4.089 4.089 0 0 0 .283-1.431 4.193 4.193 0 0 0-.761-2.364Zm12.718-24.967a18.822 18.822 0 0 0-2.55-3.233 2.667 2.667 0 1 1 2.593 3.235Zm.043-10.666a7.981 7.981 0 0 1 2.105 15.685 17.625 17.625 0 0 0-.845-2.519 5.323 5.323 0 1 0-5.957-7.621 20.166 20.166 0 0 0-2.267-1.475 8.049 8.049 0 0 1 6.964-4.071Zm-42.666 8a8 8 0 0 1 14.961-3.929 20.166 20.166 0 0 0-2.267 1.475 5.315 5.315 0 1 0-5.96 7.62 17.625 17.625 0 0 0-.845 2.519 7.953 7.953 0 0 1-5.892-7.685Zm8.042 2.667h-.043a2.667 2.667 0 1 1 2.593-3.239 18.822 18.822 0 0 0-2.551 3.239ZM40 6.668c9.557 0 17.333 7.177 17.333 16a15.184 15.184 0 0 1-4.461 10.677c-6.085.088-9 1.849-10.352 3.236a5.764 5.764 0 0 0-5.04 0c-1.349-1.387-4.267-3.148-10.352-3.236a15.184 15.184 0 0 1-4.461-10.677c0-8.822 7.776-16 17.333-16ZM22.768 41.334a8.279 8.279 0 0 0 .2.917A31.835 31.835 0 0 0 20 55.88c0 .833.039 1.62.1 2.387l-3.167 1.261a11.014 11.014 0 0 0-5.311-6.727 23.746 23.746 0 0 1 11.146-11.467Zm-12.1 36c-5.9 0-8-4.821-8-9.333a34.533 34.533 0 0 1 .887-9.285c2.827.255 5.78 1.7 5.78 6.645v6.64a1.333 1.333 0 0 0 2.665 0v-6.64c0-6.653-4.251-8.6-7.213-9.148A3.9 3.9 0 0 1 8 54.667c5.441 0 6.637 6.608 6.685 6.887a1.333 1.333 0 0 0 1.808 1.019l3.939-1.572a17.058 17.058 0 0 0 6.029 10.813c-4.195 3.8-10.789 5.517-15.794 5.517Zm12-21.453a29.563 29.563 0 0 1 1.9-10.569 5.805 5.805 0 0 0 1.5 1.213 1.333 1.333 0 0 0 .6.143c5.212 0 8.2-1.192 9.905-2.455a5.8 5.8 0 0 0 6.856 0c1.7 1.263 4.693 2.455 9.905 2.455a1.333 1.333 0 0 0 .6-.143 5.8 5.8 0 0 0 1.5-1.212 29.551 29.551 0 0 1 1.9 10.568C57.332 70.301 47.907 73.333 40 73.333S22.666 70.301 22.666 55.88Zm46.664 21.452c-5.005 0-11.593-1.72-15.794-5.517a17.058 17.058 0 0 0 6.029-10.815l3.939 1.569a1.333 1.333 0 0 0 1.808-1.016c.048-.281 1.244-6.889 6.685-6.889a3.9 3.9 0 0 1 3.213 1.545C72.249 56.763 68 58.707 68 65.36v6.641a1.333 1.333 0 0 0 2.667 0v-6.64c0-4.947 2.953-6.391 5.78-6.645a34.533 34.533 0 0 1 .885 9.285c0 4.512-2.1 9.333-8 9.333Z"
        />
        <Path
          data-name="Shape"
          d="M39.999 48.001a1.333 1.333 0 0 0-1.333 1.333v1.333a1.333 1.333 0 0 0 2.667 0v-1.333a1.333 1.333 0 0 0-1.334-1.333ZM39.999 54.667A1.333 1.333 0 0 0 38.666 56v1.333a1.333 1.333 0 0 0 2.667 0V56a1.333 1.333 0 0 0-1.334-1.333ZM39.999 61.334a1.333 1.333 0 0 0-1.333 1.333V64a1.333 1.333 0 0 0 2.667 0v-1.333a1.333 1.333 0 0 0-1.334-1.333ZM39.999 68a1.333 1.333 0 0 0-1.333 1.333v1.333a1.333 1.333 0 0 0 2.667 0v-1.333A1.333 1.333 0 0 0 39.999 68ZM31.999 26.668c0 3.676 3.588 6.667 8 6.667s8-2.991 8-6.667-3.588-6.667-8-6.667-8 2.991-8 6.667Zm9.333-2.667a1.333 1.333 0 1 1-1.333-1.333 1.333 1.333 0 0 1 1.333 1.333Zm-5.333.045a4 4 0 0 0 7.992 0 3.481 3.481 0 0 1 1.341 2.621c0 2.205-2.392 4-5.333 4s-5.333-1.795-5.333-4a3.481 3.481 0 0 1 1.333-2.621Z"
        />
      </G>
    </Svg>
  );
};

export {Kids};
