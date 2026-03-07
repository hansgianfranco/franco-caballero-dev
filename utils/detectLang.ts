import { NextRequest } from "next/server";

export function detectLang(req: NextRequest): string {

  const paramLang = req.nextUrl.searchParams.get("lang");

  if (paramLang) {
    return normalizeLang(paramLang);
  }

  const header = req.headers.get("accept-language");

  if (header) {
    const browserLang = header.split(",")[0];
    return normalizeLang(browserLang);
  }

  return "en";
}

function normalizeLang(lang: string): string {

  const locale = lang.toLowerCase().slice(0, 2);

  if (locale === "es") return "es";

  return "en";

}