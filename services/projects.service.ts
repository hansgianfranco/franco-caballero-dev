import { projectsData } from "@/data/projects.data";
import { resolveLang } from "./language.service";

export function getProjects(lang?: string) {

  const locale = resolveLang(lang);

  return projectsData[locale] || projectsData["en"];
}