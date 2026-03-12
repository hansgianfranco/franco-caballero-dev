import { educationData } from "@/data/education.data";
import { resolveLang } from "./language.service";

export function getEducation(lang?: string) {
  const locale = resolveLang(lang);
  return educationData[locale] || educationData["en"];
}