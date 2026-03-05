import es from "./locales/es.json";
import en from "./locales/en.json";
import { ResumeData } from "@/types/resume";

export const translations: Record<Language, ResumeData> = {
  es,
  en
};

export type Language = "es" | "en";

export type TranslationSchema = typeof es;