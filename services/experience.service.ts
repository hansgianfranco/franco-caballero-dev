import { experienceData } from "@/data/experience.data";
import { resolveLang } from "./language.service";

export function getExperience(lang?: string) {
  const locale = resolveLang(lang);
  return experienceData[locale] || experienceData["en"];
}