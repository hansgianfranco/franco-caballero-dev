import { Personal } from "./personal";
import { Experience, Education, Certification } from "./career";
import { Project } from "./projects";
import { Nav, Sections, Meta } from "./ui";

export interface Profile {
  summary: string[];
  core_strengths: string[];
}

export interface ResumeData {
  personal: Personal;
  profile: Profile;

  experience: Experience[];
  education: Education[];
  certification: Certification[];

  projects: Project[];
  skills: string[];

  nav: Nav;
  sections: Sections;
  meta: Meta;
}