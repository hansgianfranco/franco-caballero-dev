"use client";

import { useFetch } from "./useFetch";
import { Nav } from "@/types/resume";
import { useLanguage } from "@/contexts/LanguageContext";

export function useNav() {

  const { language } = useLanguage();

  const url = `/api/nav?lang=${language}`;

  return useFetch<Nav>(url);
}