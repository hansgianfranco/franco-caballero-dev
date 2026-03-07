import { Experience } from "@/types/resume";

export const experienceData: Record<string, Experience[]> = {
  es: [
    {
      company: "10Pearls",
      location: "Lima, Perú",
      position: "Desarrollador Fullstack Senior",
      period: "Ene 2021 – Presente",
      responsibilities: [
        "Lideré aplicaciones escalables con React y Node.js.",
        "Diseñé APIs RESTful para miles de usuarios.",
        "Optimicé despliegues y rendimiento del sistema."
      ]
    },
    {
      company: "Innova Schools",
      location: "Lima, Perú",
      position: "Desarrollador Fullstack",
      period: "Nov 2018 – Dic 2020",
      responsibilities: [
        "Construí plataformas educativas para 10,000+ usuarios.",
        "Mejoré eficiencia de bases de datos y rendimiento del sistema."
      ]
    }
  ],

  en: [
    {
      company: "10Pearls",
      location: "Lima, Peru",
      position: "Senior Fullstack Developer",
      period: "Jan 2021 – Present",
      responsibilities: [
        "Led scalable React & Node.js applications.",
        "Designed RESTful APIs serving thousands of users.",
        "Optimized deployment workflows & system performance."
      ]
    },
    {
      company: "Innova Schools",
      location: "Lima, Peru",
      position: "Fullstack Developer",
      period: "Nov 2018 – Dec 2020",
      responsibilities: [
        "Built educational platforms for 10,000+ users.",
        "Improved database efficiency & system performance."
      ]
    }
  ]
};