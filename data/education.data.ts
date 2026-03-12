import { Education } from "@/types/resume";

export const educationData: Record<string, Education[]> = {
  es: [
    {
      institution: "Universidad César Vallejo (UCV)",
      location: "Lima, Perú",
      degree: "Ingeniería de Sistemas",
      thesis: "Sistema Web para el Proceso de Evaluación de Simulacros",
      start_date: "2009-03",
      end_date: "2015-12",
      url: "https://hdl.handle.net/20.500.12692/61205",
      details: [
        "Desarrollé un sistema web usando OOHDM para automatizar la evaluación de simulacros.",
        "Mejoré la eficiencia en la calificación diaria de 69% a 82%.",
        "Reduje el tiempo de preparación de exámenes de 38% a 23%.",
        "Tesis publicada en el repositorio institucional."
      ]
    }
  ],

  en: [
    {
      institution: "César Vallejo University (UCV)",
      location: "Lima, Peru",
      degree: "B.S. in Systems Engineering",
      thesis: "Web System for the Evaluation Process of Mock Exams",
      start_date: "2009-03",
      end_date: "2015-12",
      url: "https://hdl.handle.net/20.500.12692/61205",
      details: [
        "Developed a web-based system using OOHDM to automate mock exam evaluation.",
        "Improved daily grading efficiency from 69% to 82%.",
        "Reduced exam preparation time from 38% to 23%.",
        "Thesis published in the institutional repository."
      ]
    }
  ]
};