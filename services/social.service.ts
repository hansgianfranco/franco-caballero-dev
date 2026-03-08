import { socialData } from "@/data/social.data";
import { resolveLang } from "./language.service";

export function getSocial(lang?: string) {
  const locale = resolveLang(lang);
  return socialData[locale] || socialData["en"];
}