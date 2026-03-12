"use client";

import { Experience } from "@/types/career";
import { useFetch } from "./useFetch";
import { useLanguage } from "@/contexts/LanguageContext";

export function useExperience() {
  const { language } = useLanguage();
  return useFetch<Experience[]>(`/api/experience?lang=${language}`);
}