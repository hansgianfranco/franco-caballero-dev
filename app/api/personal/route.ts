import { NextRequest, NextResponse } from "next/server";
import { detectLang } from "@/utils/detectLang";
import { getPersonal } from "@/services/personal.service";

export async function GET(req: NextRequest) {

  const lang = detectLang(req);

  const data = getPersonal(lang);

  return NextResponse.json(data);

}