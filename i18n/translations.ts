import es from './locales/es.json';
import en from './locales/en.json';

export const translations = {
  es,
  en
};

export type Language = keyof typeof translations;
export type TranslationKey = string;