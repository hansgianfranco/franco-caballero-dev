"use client";

import { Nav } from "@/types/ui";
import { useFetch } from "./useFetch";
import { useLanguage } from "@/contexts/LanguageContext";

export function useNav() {

  const { language } = useLanguage();

  const url = `/api/nav?lang=${language}`;

  return useFetch<Nav>(url);
}