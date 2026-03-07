import { NextResponse } from "next/server";
import { getSkills } from "@/services/skills.service";

export async function GET() {

  const data = getSkills();

  return NextResponse.json(data);

}