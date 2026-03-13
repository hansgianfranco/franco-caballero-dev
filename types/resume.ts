import { Personal } from "./personal";
import { Experience, Education, Certification } from "./career";
import { Project } from "./projects";
import { Nav, Sections, Meta } from "./ui";

export interface ResumeData {
  personal: Personal;
  
  experience: Experience[];
  education: Education[];
  certification: Certification[];

  projects: Project[];
  skills: string[];

  nav: Nav;
  sections: Sections;
  meta: Meta;
}