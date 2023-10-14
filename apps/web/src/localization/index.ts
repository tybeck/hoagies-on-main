import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import * as languages from './languages';
import {LanguageCode, Translations} from './types';

const configureResources = (languages: {[key: string]: Translations}) => {
  const allLanguages = Object.keys(languages).map((language) => ({
    [language]: {
      translation: {
        ...languages[language],
      },
    },
  }));
  return Object.assign({}, ...allLanguages);
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: configureResources(languages),
    fallbackLng: LanguageCode.English,
    detection: {
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
      ],
      lookupQuerystring: 'lng',
      caches: ['localStorage'],
    },
  });

export default i18n;
