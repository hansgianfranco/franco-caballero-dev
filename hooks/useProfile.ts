"use client";

import { useFetch } from "./useFetch";
import { Profile } from "@/types/resume";
import { useLanguage } from "@/contexts/LanguageContext";

export function useProfile() {

  const { language } = useLanguage();

  return useFetch<Profile>(`/api/profile?lang=${language}`);
}