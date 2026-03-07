import { NextRequest, NextResponse } from "next/server";
import { detectLang } from "@/utils/detectLang";
import { getProfile } from "@/services/profile.service";

export async function GET(req: NextRequest) {

  const lang = detectLang(req);

  const data = getProfile(lang);

  return NextResponse.json(data);

}