import {FontSource} from 'expo-font';

const lithosPro = require('./lithos-pro.ttf');
const lithosProBlack = require('./lithos-pro-black.ttf');
const nunito = require('./nunito.ttf');
const nunitoBlack = require('./nunito-black.ttf');

export enum Fonts {
  LithosPro= 'LithosPro',
  LithosProBlack = 'LithosProBlack',
  Nunito = 'Nunito',
  NunitoBlack = 'NunitoBlack',
}
export type FontSourceMap = {
  [key in keyof typeof Fonts]: FontSource;
};

const fonts: FontSourceMap = {
  LithosPro: lithosPro,
  LithosProBlack: lithosProBlack,
  Nunito: nunito,
  NunitoBlack: nunitoBlack,
};

const Font: FontSourceMap = {
  ...Object.assign(
    ...(Object.keys(fonts).map((font) => ({[font]: font})) as [FontSourceMap]),
  ),
};

export {fonts, Font, FontSource};
