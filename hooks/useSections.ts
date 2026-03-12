"use client";

import { Sections } from "@/types/ui";
import { useFetch } from "./useFetch";
import { useLanguage } from "@/contexts/LanguageContext";

export function useSections() {

  const { language } = useLanguage();

  return useFetch<Sections>(`/api/sections?lang=${language}`);
}