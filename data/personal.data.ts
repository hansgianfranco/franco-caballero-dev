import { SITE, SOCIALS } from "@/constants/site";
import type { Personal } from "@/types/personal";

export const personalData: Record<string, Personal> = {
  es: {
    name: SITE.name,
    title: "Desarrollador Fullstack Senior",
    description: "Desarrollador Fullstack Senior con +8 años de experiencia, especializado en React, Next.js y Node.js, creando plataformas web, APIs y soluciones e-commerce escalables.",
    contact: {
      email: "aGFuc2dpYW5mcmFuY29AZ21haWwuY29t",
      address: "Lima",
      country: "Peru",
      remote: true,
      remote_label: "Trabajo Remoto"
    },
    resume: {
      title: "Descargar CV",
      file: "/resources/Franco_Caballero_CV.pdf"
    },
    website: SITE.url,
    summary: [
      "Desarrollador <strong class='font-semibold'>Fullstack Senior</strong> con más de <strong class='font-semibold'>8 años</strong> construyendo <strong class='font-semibold'>aplicaciones web escalables</strong> y <strong class='font-semibold'>orientadas a resultados</strong>.",
      "Especializado en <strong class='font-semibold'>React</strong>, <strong class='font-semibold'>Next.js</strong>, <strong class='font-semibold'>Node.js</strong> y arquitecturas <strong class='font-semibold'>backend de alto rendimiento</strong>.",
      "Experiencia entregando <strong class='font-semibold'>plataformas educativas</strong>, <strong class='font-semibold'>APIs</strong>, <strong class='font-semibold'>sistemas internos</strong> y soluciones de <strong class='font-semibold'>e-commerce</strong>."
    ],
    accounts: [
      {
        id: "linkedin",
        title: "LinkedIn",
        url: SOCIALS.linkedin
      },
      {
        id: "github",
        title: "Github",
        url: SOCIALS.github
      }
    ]
  },

  en: {
    name: SITE.name,
    title: "Senior Fullstack Developer",
    description: "Senior Fullstack Developer with 8+ years building scalable, business-driven web applications using React, Next.js, and Node.js, delivering educational platforms, APIs, internal systems, and e-commerce solutions.",
    contact: {
      email: "aGFuc2dpYW5mcmFuY29AZ21haWwuY29t",
      address: "Lima",
      country: "Peru",
      remote: true,
      remote_label: "Remote OK"
    },
    resume: {
      title: "Download Resume",
      file: "/resources/Franco_Caballero_Resume.pdf"
    },
    website: SITE.url,
    summary: [
      "Senior <strong class='font-semibold'>Fullstack Developer</strong> with <strong class='font-semibold'>8+ years</strong> building <strong class='font-semibold'>scalable</strong>, <strong class='font-semibold'>business-driven</strong> web applications.",
      "Specialized in <strong class='font-semibold'>React</strong>, <strong class='font-semibold'>Next.js</strong>, <strong class='font-semibold'>Node.js</strong>, and <strong class='font-semibold'>high-performance backend architectures</strong>.",
      "Experienced delivering <strong class='font-semibold'>educational platforms</strong>, <strong class='font-semibold'>APIs</strong>, <strong class='font-semibold'>internal systems</strong>, and <strong class='font-semibold'>e-commerce solutions</strong>."
    ],
    accounts: [
      {
        id: "linkedin",
        title: "LinkedIn",
        url: SOCIALS.linkedin
      },
      {
        id: "github",
        title: "Github",
        url: SOCIALS.github
      }
    ]
  }
};