import { Project } from "@/types/resume";

export const projectsData: Record<string, Project[]> = {
  es: [
    {
      name: "Plataforma Web & API Darshana",
      url: "https://darshana.ai",
      period: "Abr 2025 – Presente",
      technologies: ["Next.js", "NestJS", "TypeScript", "Sequelize", "AWS Cognito"],
      description:
        "Automatizó la verificación de estudios y emisión de credenciales digitales en 23+ países."
    },
    {
      name: "Plataforma Web & API Mazatlán FC",
      url: "https://mazatlanfc.com",
      period: "Nov 2023 – Jul 2024",
      technologies: ["Next.js", "Express", "TypeScript", "AWS Lambda", "Serverless"],
      description:
        "Sitio web y panel administrativo con API serverless entregando datos de partidos en tiempo real."
    }
  ],

  en: [
    {
      name: "Darshana Web & API Platform",
      url: "https://darshana.ai",
      period: "Apr 2025 – Present",
      technologies: ["Next.js", "NestJS", "TypeScript", "Sequelize", "AWS Cognito"],
      description:
        "Automated career verification and digital credential issuance across 23+ countries."
    },
    {
      name: "Mazatlán FC Web & API Platform",
      url: "https://mazatlanfc.com",
      period: "Nov 2023 – Jul 2024",
      technologies: ["Next.js", "Express", "TypeScript", "AWS Lambda", "Serverless"],
      description:
        "Built website and admin panel with serverless API delivering real-time match data."
    }
  ]
};