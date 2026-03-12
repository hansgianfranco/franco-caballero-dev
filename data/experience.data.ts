import { Experience } from "@/types/resume";

export const experienceData: Record<string, Experience[]> = {
  es: [
    {
      company: "10Pearls",
      location: "Lima, Perú",
      position: "Desarrollador Fullstack Senior",
      start_date: "2021-01",
      end_date: null,
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
      start_date: "2018-11",
      end_date: "2020-12",
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
      start_date: "2021-01",
      end_date: null,
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
      start_date: "2018-11",
      end_date: "2020-12",
      responsibilities: [
        "Built educational platforms for 10,000+ users.",
        "Improved database efficiency & system performance."
      ]
    }
  ]
};