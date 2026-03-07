import { NextRequest, NextResponse } from "next/server";
import { detectLang } from "@/utils/detectLang";
import { getProjects } from "@/services/projects.service";

export async function GET(req: NextRequest) {

  const lang = detectLang(req);

  const data = getProjects(lang);

  return NextResponse.json(data);

}