import { profileData } from "@/data/profile.data";
import { resolveLang } from "./language.service";

export function getProfile(lang?: string) {
  const locale = resolveLang(lang);
  return profileData[locale] || profileData["en"];
}