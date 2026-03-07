import { personalData } from "@/data/personal.data";
import { resolveLang } from "./language.service";

export function getPersonal(lang?: string) {

  const locale = resolveLang(lang);

  return personalData[locale] || personalData["en"];
}