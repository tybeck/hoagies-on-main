import {LocaleKey} from './locale';

export type Translations = {
  [keyof in keyof typeof LocaleKey | string]: string;
}

export enum LanguageCode {
  German = 'de',
  English = 'en',
  Spanish = 'es',
}