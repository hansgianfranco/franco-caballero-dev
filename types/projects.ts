import { DateString } from "./shared";

export interface Project {
  name: string;
  description: string;

  url: string;

  start_date: DateString;
  end_date?: DateString;

  technologies: string[];
}