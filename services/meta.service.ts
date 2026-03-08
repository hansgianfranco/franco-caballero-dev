import { metaData } from "@/data/meta.data";
import { resolveLang } from "./language.service";

export function getMeta(lang?: string) {
  const locale = resolveLang(lang);
  return metaData[locale] || metaData["en"];
}