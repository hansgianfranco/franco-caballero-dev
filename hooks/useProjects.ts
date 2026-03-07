"use client";

import { useFetch } from "./useFetch";
import { Project } from "@/types/resume";
import { useLanguage } from "@/contexts/LanguageContext";

export function useProjects() {

  const { language } = useLanguage();

  return useFetch<Project[]>(`/api/projects?lang=${language}`);
}