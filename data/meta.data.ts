import { Meta } from "@/types/resume";

const year = new Date().getFullYear();

export const metaData: Record<string, Meta> = {
  es: {
    footer: `© ${year} Franco Caballero - Desarrollador Fullstack Senior`,
    scroll_top_label: "Volver arriba"
  },

  en: {
    footer: `© ${year} Franco Caballero - Senior Fullstack Developer`,
    scroll_top_label: "Go to top"
  }
};