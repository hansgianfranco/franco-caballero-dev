import { NextRequest, NextResponse } from "next/server";
import { detectLang } from "@/utils/detectLang";
import { getExperience } from "@/services/experience.service";

export async function GET(req: NextRequest) {

  const lang = detectLang(req);

  const data = getExperience(lang);

  return NextResponse.json(data);

}