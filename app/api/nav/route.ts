import { NextRequest, NextResponse } from "next/server";
import { detectLang } from "@/utils/detectLang";
import { getNav } from "@/services/nav.service";

export async function GET(req: NextRequest) {

  const url = new URL(req.url);
  const langParam = url.searchParams.get("lang");

  const lang = langParam || detectLang(req);

  const data = getNav(lang);

  return NextResponse.json(data);
}