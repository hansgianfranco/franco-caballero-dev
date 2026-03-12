import { Personal } from "@/types/resume";

export const personalData: Record<string, Personal> = {
  es: {
    name: "Franco Caballero",
    title: "Desarrollador Fullstack Senior",
    contact: {
      email: "aGFuc2dpYW5mcmFuY29AZ21haWwuY29t",
      phone: "+51 945122683",
      location: "Lima, Perú",
      remote: true,
      remote_label: "Trabajo Remoto"
    },
    resume: {
      title: "Descargar CV",
      file: "/resources/FC_CV_ES.pdf"
    },
    website: 'https://francocaballero.dev',
  },

  en: {
    name: "Franco Caballero",
    title: "Senior Fullstack Developer",
    contact: {
      email: "aGFuc2dpYW5mcmFuY29AZ21haWwuY29t",
      phone: "+51 945122683",
      location: "Lima, Peru",
      remote: true,
      remote_label: "Remote OK"
    },
    resume: {
      title: "Download Resume",
      file: "/resources/FC_RESUME_EN.pdf"
    },
    website: 'https://francocaballero.dev',
  }
};