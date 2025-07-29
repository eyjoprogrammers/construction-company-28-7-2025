// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationAR from './locales/ar/translation.json';
import translationEN from './locales/en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: translationAR },
      en: { translation: translationEN },
    },
    lng: 'ar', // أو 'en' كقيمة افتراضية
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
