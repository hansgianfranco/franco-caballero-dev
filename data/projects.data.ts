import type { Project } from "@/types/projects";

export const projectsData: Record<string, Project[]> = {
  es: [
    {
      name: "Plataforma Web & API Darshana",
      url: "https://darshana.ai",
      start_date: "2025-04",
      technologies: ["Next.js", "NestJS", "TypeScript", "Sequelize", "AWS Cognito"],
      description:
        "Automatizó la verificación de estudios y emisión de credenciales digitales en 23+ países."
    },
    {
      name: "The List – Social Discovery Platform",
      url: "https://listsocialapp.com",
      start_date: "2024-07",
      end_date: "2025-02",
      technologies: ["Express", "TypeScript", "Sequelize", "MySQL", "Socket.io"],
      description:
        "Plataforma de descubrimiento social con mensajería y actualizaciones de ubicación en tiempo real."
    },
    {
      name: "Plataforma Web & API Mazatlán FC",
      url: "https://mazatlanfc.com",
      start_date: "2023-11",
      end_date: "2024-07",
      technologies: ["Next.js", "Express", "TypeScript", "AWS Lambda", "Serverless"],
      description:
        "Sitio web y panel administrativo con API serverless entregando datos de partidos en tiempo real."
    },
    {
      name: "Plataforma Web & API The Calling Move",
      url: "https://movetuvocacion.com",
      start_date: "2023-04",
      end_date: "2024-06",
      technologies: ["React", "Express", "TypeScript", "Sequelize", "MySQL", "GCP"],
      description:
        "Plataforma de orientación vocacional con pasos gamificados y seguimiento de progreso de usuarios."
    }
  ],

  en: [
    {
      name: "Darshana Web & API Platform",
      url: "https://darshana.ai",
      start_date: "2025-04",
      technologies: ["Next.js", "NestJS", "TypeScript", "Sequelize", "AWS Cognito"],
      description:
        "Automated career verification and digital credential issuance across 23+ countries."
    },
    {
      name: "The List – Social Discovery Platform",
      url: "https://listsocialapp.com",
      start_date: "2024-07",
      end_date: "2025-02",
      technologies: ["Express", "TypeScript", "Sequelize", "MySQL", "Socket.io"],
      description:
        "Social discovery platform with real-time messaging and location updates using Socket.io."
    },
    {
      name: "Mazatlán FC Web & API Platform",
      url: "https://mazatlanfc.com",
      start_date: "2023-11",
      end_date: "2024-07",
      technologies: ["Next.js", "Express", "TypeScript", "AWS Lambda", "Serverless"],
      description:
        "Built website and admin panel with serverless API delivering real-time match data."
    },
    {
      name: "The Calling Move Web & API Platform",
      url: "https://movetuvocacion.com",
      start_date: "2023-04",
      end_date: "2024-06",
      technologies: ["React", "Express", "TypeScript", "Sequelize", "MySQL", "GCP"],
      description:
        "Career discovery platform with gamified steps and user progress tracking."
    }
  ]
};