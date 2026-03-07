"use client";

import { useFetch } from "./useFetch";
import { Personal } from "@/types/resume";
import { useLanguage } from "@/contexts/LanguageContext";

export function usePersonal() {

  const { language } = useLanguage();

  return useFetch<Personal>(`/api/personal?lang=${language}`);
}