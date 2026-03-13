import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedBots = ["Googlebot", "Bingbot"];

export function proxy(req: NextRequest) {
  const ua = req.headers.get("user-agent") || "";
  const { pathname } = req.nextUrl;

  // Bloquear bots no permitidos
  if (/bot|crawl|spider|scraper/i.test(ua) && !allowedBots.some(bot => ua.includes(bot))) {
    return new NextResponse("Access denied", { status: 403 });
  }

  // Redirigir la raíz según el idioma del navegador
  if (pathname === "/") {
    const acceptLanguage = req.headers.get("accept-language") || "en";
    const lang = acceptLanguage.startsWith("es") ? "es" : "en";

    const url = new URL(`/${lang}`, req.url);

    req.nextUrl.searchParams.forEach((value, key) => {
      url.searchParams.set(key, value);
    });

    return NextResponse.redirect(url, 308); // redirección permanente
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
};