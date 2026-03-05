"use client";

import React, { createContext, useContext, useState } from "react";
import { translations, Language } from "@/i18n/translations";

interface TranslateOptions {
  returnObjects?: boolean;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T = string>(key: string, options?: TranslateOptions) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function getNestedValue<T = unknown>(obj: unknown, path: string): T | undefined {
  return path.split(".").reduce<unknown>((current, key) => {
    if (
      current &&
      typeof current === "object" &&
      key in (current as Record<string, unknown>)
    ) {
      return (current as Record<string, unknown>)[key];
    }

    return undefined;
  }, obj) as T | undefined;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  function t<T = string>(key: string, options?: TranslateOptions): T {
    const translation = getNestedValue<T>(translations[language], key);

    if (translation === undefined) {
      return key as T;
    }

    if (options?.returnObjects && typeof translation === "object") {
      return translation;
    }

    if (typeof translation === "object") {
      console.warn(
        `La key "${key}" es un objeto. Usa returnObjects: true para acceder a él.`
      );
      return "" as T;
    }

    return translation;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}