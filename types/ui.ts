export interface Sections {
  about: string;
  experience: string;
  projects: string;
  skills: string;
  contact: string;
}

export interface Nav {
  about: string;
  experience: string;
  projects: string;
  skills: string;
  contact: string;
}

export interface Meta {
  footer: string;
  scroll_top_label: string;

  contact: {
    title: string;
    subtitle: string;

    fields: {
      name: string;
      email: string;
      message: string;
    };

    placeholders: {
      name: string;
      email: string;
      message: string;
    };

    actions: {
      send: string;
      sending: string;
    };

    status: {
      success: string;
      error: string;
    };
  };
}