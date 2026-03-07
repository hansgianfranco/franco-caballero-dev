"use client";

import { useFetch } from "./useFetch";
import { Social } from "@/types/resume";
import { useLanguage } from "@/contexts/LanguageContext";

export function useSocial() {

  const { language } = useLanguage();

  return useFetch<Social>(`/api/social?lang=${language}`);
}