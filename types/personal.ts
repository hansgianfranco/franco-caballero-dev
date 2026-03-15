import { SocialAccount } from "./shared";

export interface Contact {
  email: string;
  address: string;
  country: string;
  remote: boolean;
  remote_label: string;
}

export interface Resume {
  title: string;
  file: string;
}

export interface Personal {
  name: string;
  title: string;
  description: string;
  website: string;
  contact: Contact;
  resume: Resume;
  summary: string[];
  accounts?: SocialAccount[];
}