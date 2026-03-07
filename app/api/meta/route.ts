import { NextRequest, NextResponse } from "next/server";
import { detectLang } from "@/utils/detectLang";
import { getMeta } from "@/services/meta.service";

export async function GET(req: NextRequest) {

  const lang = detectLang(req);

  const data = getMeta(lang);

  return NextResponse.json(data);

}