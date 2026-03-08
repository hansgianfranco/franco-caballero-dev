import { NextRequest, NextResponse } from "next/server";
import { detectLang } from "@/utils/detectLang";

import { getPersonal } from "@/services/personal.service";
import { getProfile } from "@/services/profile.service";
import { getExperience } from "@/services/experience.service";
import { getProjects } from "@/services/projects.service";
import { getSkills } from "@/services/skills.service";
import { getSocial } from "@/services/social.service";
import { getNav } from "@/services/nav.service";
import { getSections } from "@/services/sections.service";
import { getMeta } from "@/services/meta.service";

export async function GET(req: NextRequest) {

  const url = new URL(req.url);
  const langParam = url.searchParams.get("lang");

  const lang = langParam || detectLang(req);

  const data = {
    personal: getPersonal(lang),
    profile: getProfile(lang),
    experience: getExperience(lang),
    projects: getProjects(lang),
    skills: getSkills(),
    social: getSocial(lang),
    nav: getNav(lang),
    sections: getSections(lang),
    meta: getMeta(lang)
  };

  return NextResponse.json(data);
}