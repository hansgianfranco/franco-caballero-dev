"use client";

import { useFetch } from "./useFetch";
import { ResumeData } from "@/types/resume";
import { useLanguage } from "@/contexts/LanguageContext";

export function useResume() {

  const { language } = useLanguage();

  const { data, loading, error } = useFetch<ResumeData>(
    `/api/resume?lang=${language}`
  );

  return {
    data,
    loading,
    error
  };
}