import { nav } from "@/data/nav.data";
import type { Nav } from "@/types/ui";

export function getNav(lang: string): Nav {
  return nav[lang] || nav.en;
}