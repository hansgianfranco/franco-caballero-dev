import { SocialAccount } from "./shared";

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

export interface Personal {
  name: string;
  title: string;
  website: string;
  contact: Contact;
  resume: Resume;
  summary: string[];
  accounts?: SocialAccount[];
}