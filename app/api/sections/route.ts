import { NextRequest, NextResponse } from "next/server";
import { detectLang } from "@/utils/detectLang";
import { getSections } from "@/services/sections.service";

export async function GET(req: NextRequest) {

  const lang = detectLang(req);
  const data = getSections(lang);

  return NextResponse.json(data);
}