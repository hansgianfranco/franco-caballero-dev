import { NextRequest, NextResponse } from "next/server";
import { detectLang } from "@/utils/detectLang";
import { getSocial } from "@/services/social.service";

export async function GET(req: NextRequest) {

  const lang = detectLang(req);

  const data = getSocial(lang);

  return NextResponse.json(data);

}