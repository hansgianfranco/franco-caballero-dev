import { sectionsData } from "@/data/sections.data";
import { resolveLang } from "./language.service";

export function getSections(lang?: string) {

  const locale = resolveLang(lang);
   return sectionsData[locale] || sectionsData["en"];
}