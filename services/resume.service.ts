import { getPersonal } from "./personal.service";
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
    projects,
    experience,
    skills,
    nav,
    sections,
    meta
  ] = await Promise.all([
    getPersonal(lang),
    getProjects(lang),
    getExperience(lang),
    getSkills(),
    getNav(lang),
    getSections(lang),
    getMeta(lang)
  ]);

  return {
    personal,
    projects,
    experience,
    skills,
    nav,
    sections,
    meta
  } as ResumeData;
}