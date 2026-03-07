export interface Personal {
  name: string;
  title: string;
  contact: Contact;
  resume: Resume;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  remote: boolean;
  remote_label: string;
}

export interface Resume {
  title: string;
  file: string;
}

export interface Sections {
  experience: string;
  projects: string;
  skills: string;
  contact: string;
}

export interface Profile {
  summary: string[];
  core_strengths: string[];
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  url: string;
  period: string;
  technologies: string[];
  description: string;
}

export interface Certification {
  name: string;
  year: string;
  issuer: string;
}

export interface Social {
  title: string;
  accounts: SocialAccount[];
}

export interface SocialAccount {
  id: string;
  title: string;
  url: string;
}

export interface Meta {
  footer: string;
  scroll_top_label: string;
}

export interface Nav {
  about: string;
  experience: string;
  projects: string;
  skills: string;
  contact: string;
}

export interface ResumeData {
  personal: Personal;
  nav: Nav;
  sections: Sections;
  profile: Profile;
  experience: Experience[];
  projects: Project[];
  skills: string[];
  social: Social;
  meta: Meta;
}