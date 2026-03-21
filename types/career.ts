import { DateString } from "./shared";

export interface Experience {
  company: string;
  location: string;
  position: string;
  website?: string;
  start_date: DateString;
  end_date?: DateString;
  description: string;
}

export interface Education {
  institution: string;
  location: string;

  degree: string;
  thesis?: string;

  start_date: DateString;
  end_date?: DateString;

  url?: string;
  details: string[];
}

export interface Certification {
  name: string;
  issuer: string;

  date: DateString;
  url?: string;
}

export interface Skill {
  frontend: string[];
  backend: string[];
  dataAndApi: string[];
  infrastructure: string[];
  cmsEcommerce: string[];
}