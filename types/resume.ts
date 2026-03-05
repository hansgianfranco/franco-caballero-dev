export interface Personal {
  name: string;
  title: string;
  specialization: string;
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
  profile: string;
  experience: string;
  skills: string;
  education: string;
  certifications: string;
  social: string;
  strengths_title: string;
}

export interface Profile {
  summary: string[];
  core_strengths: string[];
  career_goal: string;
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  responsibilities: string[];
}

export interface Skills {
  titles: SkillsTitles;
  frontend: string[];
  backend: string[];
  databases: string[];
  cloud_infrastructure: string[];
  cms_ecommerce: string[];
  tools_methodologies: string[];
}

export interface SkillsTitles {
  frontend: string;
  backend: string;
  databases: string;
  cloud_infrastructure: string;
  cms_ecommerce: string;
  tools_methodologies: string;
}

export interface Education {
  university: string;
  degree: string;
  faculty: string;
  period: string;
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

export interface ResumeData {
  personal: Personal;
  sections: Sections;
  profile: Profile;
  experience: Experience[];
  skills: Skills;
  education: Education;
  certifications: Certification[];
  social: Social;
  meta: Meta;
}