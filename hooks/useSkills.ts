"use client";

import { useFetch } from "./useFetch";
import { useLanguage } from "@/contexts/LanguageContext";

export function useSkills() {

  const { language } = useLanguage();

  return useFetch<string[]>(`/api/skills?lang=${language}`);
}