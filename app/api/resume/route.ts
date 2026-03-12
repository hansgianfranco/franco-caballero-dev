import { NextRequest, NextResponse } from "next/server";
import { detectLang } from "@/utils/detectLang";

import { getPersonal } from "@/services/personal.service";
import { getProfile } from "@/services/profile.service";
import { getEducation } from "@/services/education.service";
import { getExperience } from "@/services/experience.service";
import { getProjects } from "@/services/projects.service";
import { getSkills } from "@/services/skills.service";
import { getNav } from "@/services/nav.service";
import { getSections } from "@/services/sections.service";
import { getMeta } from "@/services/meta.service";
import { getCertification } from "@/services/certification.service";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const langParam = url.searchParams.get("lang");

  const lang = langParam || detectLang(req);

  const [
    personal,
    profile,
    education,
    experience,
    projects,
    skills,
    certification,
    nav,
    sections,
    meta
  ] = await Promise.all([
    getPersonal(lang),
    getProfile(lang),
    getEducation(lang),
    getExperience(lang),
    getProjects(lang),
    getSkills(),
    getCertification(lang),
    getNav(lang),
    getSections(lang),
    getMeta(lang)
  ]);

  return NextResponse.json({
    personal,
    profile,
    education,
    experience,
    projects,
    skills,
    certification,
    nav,
    sections,
    meta
  });
}