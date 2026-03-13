import { getPersonal } from "./personal.service";
import { getProfile } from "./profile.service";
import { getProjects } from "./projects.service";
import { getExperience } from "./experience.service";
import { getSkills } from "./skills.service";
import { getNav } from "./nav.service";
import { getSections } from "./sections.service";
import { getMeta } from "./meta.service";

import type { ResumeData } from "@/types/resume";

export async function getResumeData(lang: string): Promise<ResumeData> {
  const [
    personal,
    profile,
    projects,
    experience,
    skills,
    nav,
    sections,
    meta
  ] = await Promise.all([
    getPersonal(lang),
    getProfile(lang),
    getProjects(lang),
    getExperience(lang),
    getSkills(),
    getNav(lang),
    getSections(lang),
    getMeta(lang)
  ]);

  return {
    personal,
    profile,
    projects,
    experience,
    skills,
    nav,
    sections,
    meta
  } as ResumeData;
}