import { DateString } from "./shared";

export interface Experience {
  company: string;
  location: string;
  position: string;

  start_date: DateString;
  end_date: DateString | null;

  responsibilities: string[];
}

export interface Education {
  institution: string;
  location: string;

  degree: string;
  thesis?: string;

  start_date: DateString;
  end_date: DateString | null;

  url?: string;
  details: string[];
}

export interface Certification {
  name: string;
  issuer: string;

  date: DateString;
  url: string | null;
}