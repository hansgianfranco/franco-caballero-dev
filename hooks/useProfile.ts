"use client";

import type { Profile } from "@/types/resume";
import { useFetch } from "./useFetch";
import { useLanguage } from "@/contexts/LanguageContext";

export function useProfile() {

  const { language } = useLanguage();

  return useFetch<Profile>(`/api/profile?lang=${language}`);
}