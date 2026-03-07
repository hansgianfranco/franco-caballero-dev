"use client";

import { useFetch } from "./useFetch";
import { Experience } from "@/types/resume";
import { useLanguage } from "@/contexts/LanguageContext";

export function useExperience() {
  const { language } = useLanguage();
  return useFetch<Experience[]>(`/api/experience?lang=${language}`);
}