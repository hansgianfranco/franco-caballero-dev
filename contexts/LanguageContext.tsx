"use client";

import React, { createContext, useContext, useState } from 'react';
import { translations, Language } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: { returnObjects?: boolean }) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string, options?: { returnObjects?: boolean }): any => {
    const translation = getNestedValue(translations[language], key);
    
    if (translation === undefined) {
      return key;
    }

    if (options?.returnObjects && typeof translation === 'object') {
      return translation;
    }

    if (typeof translation === 'object') {
      console.warn(`La key "${key}" es un objeto. Usa returnObjects: true para acceder a él.`);
      return '';
    }

    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}