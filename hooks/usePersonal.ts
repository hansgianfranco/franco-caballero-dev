"use client";

import type { Personal } from "@/types/personal";
import { useFetch } from "./useFetch";
import { useLanguage } from "@/contexts/LanguageContext";

export function usePersonal() {

  const { language } = useLanguage();

  return useFetch<Personal>(`/api/personal?lang=${language}`);
}