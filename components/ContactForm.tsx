"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { language } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const text = {
    es: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar mensaje",
      success: "Mensaje enviado correctamente.",
      error: "Ocurrió un error al enviar."
    },
    en: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      success: "Message sent successfully.",
      error: "Something went wrong."
    }
  };

  const t = text[language];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setStatus("loading");

      // Simulación de envío
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-6 max-w-xl"
    >
      {/* Nombre */}
      <div>
        <label className="block text-sm text-[#C0CAF5] mb-2">
          {t.name}
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full bg-[#1f1f2e] border border-[#33467C] rounded-lg px-4 py-3 text-[#C0CAF5] focus:outline-none focus:border-[#9e68ff] transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-[#C0CAF5] mb-2">
          {t.email}
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full bg-[#1f1f2e] border border-[#33467C] rounded-lg px-4 py-3 text-[#C0CAF5] focus:outline-none focus:border-[#9e68ff] transition-colors"
        />
      </div>

      {/* Mensaje */}
      <div>
        <label className="block text-sm text-[#C0CAF5] mb-2">
          {t.message}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-[#1f1f2e] border border-[#33467C] rounded-lg px-4 py-3 text-[#C0CAF5] focus:outline-none focus:border-[#9e68ff] transition-colors resize-none"
        />
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="bg-[#1f1f2e] border border-[#33467C] hover:bg-[#33467C] text-[#C0CAF5] px-6 py-3 rounded-lg transition-all duration-300"
      >
        {t.send}
      </button>

      {/* Mensajes de estado */}
      {status === "success" && (
        <p className="text-[#9ece6a] text-sm">{t.success}</p>
      )}

      {status === "error" && (
        <p className="text-[#f7768e] text-sm">{t.error}</p>
      )}
    </form>
  );
}