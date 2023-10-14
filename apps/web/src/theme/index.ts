import {Platform} from 'react-native';
import {css} from 'styled-components/native';

import {SharedTheme} from '@hoagies-on-main/shared';

import {ITheme} from '@hom/types';

import {normalize} from './normalize';

export const Theme: ITheme = {
  ...SharedTheme,
  colors: {
    ...SharedTheme.colors,
    blueJeans: '#54ACEE',
    bdazzledBlue: '#365C98',
    cinnabar: '#E34A34',
  },
  fontSize: {
    mini: normalize(4),
    xsmall: normalize(5),
    small: normalize(6),
    medium: normalize(8),
    xmedium: normalize(13),
    large: normalize(16),
    xlarge: normalize(19),
    xxlarge: normalize(22),
    ...Platform.select({
      ios: {
        medium: normalize(4),
        xmedium: normalize(7.5),
        large: normalize(7.5),
        xlarge: normalize(13),
        xxlarge: normalize(16),
      },
    }),
  },
  spaceSize: {
    mini: normalize(2.25),
    xsmall: normalize(2.5),
    small: normalize(3),
    medium: normalize(3.75),
    xmedium: normalize(6.5),
    large: normalize(11),
    xlarge: normalize(13),
    xxlarge: normalize(16),
  },
};

export enum BreakpointSize {
  Xs = 400,
  Sm = 600,
  Md = 900,
  Lg = 1280,
  Xl = 1440,
  Xxl = 1920,
}

export enum Breakpoint {
  Xs = `${BreakpointSize.Xs}px`,
  Sm = `${BreakpointSize.Sm}px`,
  Md = `${BreakpointSize.Md}px`,
  Lg = `${BreakpointSize.Lg}px`,
  Xl = `${BreakpointSize.Xl}px`,
  Xxl = `${BreakpointSize.Xxl}px`,
}

const toCss: any = css;

export class Media {
  static Xs = (...args: any[]) => css`
    @media (min-width: ${Breakpoint.Xs}) {
      ${toCss.call(undefined, ...args)};
    }
  `;

  static Sm = (...args: any[]) => css`
    @media (min-width: ${Breakpoint.Sm}) {
      ${toCss.call(undefined, ...args)};
    }
  `;

  static Md = (...args: any[]): any => css`
    @media (min-width: ${Breakpoint.Md}) {
      ${toCss.call(undefined, ...args)};
    }
  `;

  static Lg = (...args: any[]) => css`
    @media (min-width: ${Breakpoint.Lg}) {
      ${toCss.call(undefined, ...args)};
    }
  `;

  static Xl = (...args: any[]) => css`
    @media (min-width: ${Breakpoint.Xl}) {
      ${toCss.call(undefined, ...args)};
    }
  `;

  static Xxl = (...args: any[]) => css`
    @media (min-width: ${Breakpoint.Xxl}) {
      ${toCss.call(undefined, ...args)};
    }
  `;

  /**
   * @method C
   * For a more refined component, we may need to specify sizes within the
   * breakpoints to allow the style to truly feel responsive.
   * @param size
   * @constructor
   */
  static C =
    (size: number) =>
    (...args: any[]) => css`
      @media (min-width: ${size}px) {
        ${toCss.call(undefined, ...args)};
      }
    `;
}
