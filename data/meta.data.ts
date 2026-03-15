import { SITE } from "@/constants/site";
import type { Meta } from "@/types/ui";

const year = new Date().getFullYear();

export const metaData: Record<string, Meta> = {
  es: {
    footer: `© ${year} ${SITE.name} - Desarrollador Fullstack Senior`,
    scroll_top_label: "Volver arriba",
    
    contact: {
      title: "Construyamos Algo Juntos",
      subtitle: "¿Tienes un proyecto en mente o necesitas un desarrollador? Envíame un mensaje y te responderé pronto.",

      fields: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje"
      },

      placeholders: {
        name: "Juan Pérez",
        email: "juan@ejemplo.com",
        message: "Cuéntame sobre tu proyecto..."
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
    footer: `© ${year} ${SITE.name} - Senior Fullstack Developer`,
    scroll_top_label: "Go to top",

    contact: {
      title: "Let's Build Something Together",
      subtitle: "Have a project in mind or need a developer? Send me a message and I'll get back to you soon.",

      fields: {
        name: "Name",
        email: "Email",
        message: "Message"
      },

      placeholders: {
        name: "John Doe",
        email: "john@example.com",
        message: "Tell me about your project..."
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