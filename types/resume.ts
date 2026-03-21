import { Personal } from "./personal";
import { Experience, Education, Certification, Skill } from "./career";
import { Project } from "./projects";
import { Nav, Sections, Meta } from "./ui";

export interface ResumeData {
  personal: Personal;
  
  experience: Experience[];
  education: Education[];
  certification: Certification[];

  projects: Project[];
  skills: Skill[];

  nav: Nav;
  sections: Sections;
  meta: Meta;
}