import { certificationData } from "@/data/certification.data";
import { resolveLang } from "./language.service";

export function getCertification(lang?: string) {
  const locale = resolveLang(lang);
  return certificationData[locale] || certificationData["en"];
}