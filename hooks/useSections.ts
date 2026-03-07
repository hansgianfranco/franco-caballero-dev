"use client";

import { useFetch } from "./useFetch";
import { Sections } from "@/types/resume";
import { useLanguage } from "@/contexts/LanguageContext";

export function useSections() {

  const { language } = useLanguage();

  return useFetch<Sections>(`/api/sections?lang=${language}`);
}