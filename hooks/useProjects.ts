"use client";

import type { Project } from "@/types/projects";
import { useFetch } from "./useFetch";
import { useLanguage } from "@/contexts/LanguageContext";

export function useProjects() {

  const { language } = useLanguage();

  return useFetch<Project[]>(`/api/projects?lang=${language}`);
}