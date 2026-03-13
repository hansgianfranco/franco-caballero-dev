import type { Meta } from "@/types/ui";

const year = new Date().getFullYear();

export const metaData: Record<string, Meta> = {
  es: {
    footer: `© ${year} Franco Caballero - Desarrollador Fullstack Senior`,
    scroll_top_label: "Volver arriba",
    
    contact: {
      title: "Contacto",
      subtitle: "Si deseas trabajar conmigo, no dudes en enviarme un mensaje.",

      fields: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje"
      },

      actions: {
        send: "Enviar mensaje",
        sending: "Enviando..."
      },

      status: {
        success: "Mensaje enviado correctamente.",
        error: "Ocurrió un error al enviar."
      },
    }
  },

  en: {
    footer: `© ${year} Franco Caballero - Senior Fullstack Developer`,
    scroll_top_label: "Go to top",

    contact: {
      title: "Contact",
      subtitle: "If you'd like to work together, feel free to send me a message.",

      fields: {
        name: "Name",
        email: "Email",
        message: "Message"
      },

      actions: {
        send: "Send message",
        sending: "Sending..."
      },

      status: {
        success: "Message sent successfully.",
        error: "Something went wrong."
      },
    }
  }
};