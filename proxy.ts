import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedBots = ["Googlebot", "Bingbot"];

export function proxy(req: NextRequest) {
  const ua = req.headers.get("user-agent") || "";

  if (/bot|crawl|spider|scraper/i.test(ua) && !allowedBots.some(bot => ua.includes(bot))) {
    return new NextResponse("Access denied", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api).*)"],
};