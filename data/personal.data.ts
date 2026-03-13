import type { Personal } from "@/types/personal";

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
      file: "/resources/Franco_Caballero_CV.pdf"
    },
    website: 'https://francocaballero.dev',
    summary: [
      "Desarrollador <strong class='font-semibold'>Fullstack Senior</strong> con más de <strong class='font-semibold'>10 años</strong> construyendo <strong class='font-semibold'>aplicaciones web escalables</strong> y <strong class='font-semibold'>orientadas a resultados</strong>.",
      "Especializado en <strong class='font-semibold'>React</strong>, <strong class='font-semibold'>Next.js</strong>, <strong class='font-semibold'>Node.js</strong> y arquitecturas <strong class='font-semibold'>backend de alto rendimiento</strong>.",
      "Experiencia entregando <strong class='font-semibold'>plataformas educativas</strong>, <strong class='font-semibold'>APIs</strong>, <strong class='font-semibold'>sistemas internos</strong> y soluciones de <strong class='font-semibold'>e-commerce</strong>."
    ],
    accounts: [
      {
        id: "linkedin",
        title: "LinkedIn",
        url: "https://linkedin.com/in/francocaballero"
      },
      {
        id: "github",
        title: "Github",
        url: "https://github.com/hansgianfranco"
      }
    ]
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
      file: "/resources/Franco_Caballero_Resume.pdf"
    },
    website: 'https://francocaballero.dev',
    summary: [
      "Senior <strong class='font-semibold'>Fullstack Developer</strong> with <strong class='font-semibold'>10+ years</strong> building <strong class='font-semibold'>scalable</strong>, <strong class='font-semibold'>business-driven</strong> web applications.",
      "Specialized in <strong class='font-semibold'>React</strong>, <strong class='font-semibold'>Next.js</strong>, <strong class='font-semibold'>Node.js</strong>, and <strong class='font-semibold'>high-performance backend architectures</strong>.",
      "Experienced delivering <strong class='font-semibold'>educational platforms</strong>, <strong class='font-semibold'>APIs</strong>, <strong class='font-semibold'>internal systems</strong>, and <strong class='font-semibold'>e-commerce solutions</strong>."
    ],
    accounts: [
      {
        id: "linkedin",
        title: "LinkedIn",
        url: "https://linkedin.com/in/francocaballero"
      },
      {
        id: "github",
        title: "Github",
        url: "https://github.com/hansgianfranco"
      }
    ]
  }
};