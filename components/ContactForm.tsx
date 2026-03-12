"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactForm() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const field = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 }
    }
  };

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
      sending: "Enviando...",
      success: "Mensaje enviado correctamente.",
      error: "Ocurrió un error al enviar."
    },
    en: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
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

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error();

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
    <motion.form
      onSubmit={handleSubmit}
      className="mt-8 space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={field}>
          <label htmlFor="name" className="block text-sm text-[#C0CAF5] mb-2">
            {t.name}
          </label>

          <input
            id="name"
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-[#1f1f2e] border border-[#33467C] rounded-lg px-4 py-3 text-[#C0CAF5] focus:outline-none focus:border-[#9e68ff] transition-colors"
          />
        </motion.div>

        <motion.div variants={field}>
          <label htmlFor="email" className="block text-sm text-[#C0CAF5] mb-2">
            {t.email}
          </label>

          <input
            id="email"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full bg-[#1f1f2e] border border-[#33467C] rounded-lg px-4 py-3 text-[#C0CAF5] focus:outline-none focus:border-[#9e68ff] transition-colors"
          />
        </motion.div>
      </motion.div>

      <motion.div variants={field}>
        <label htmlFor="message" className="block text-sm text-[#C0CAF5] mb-2">
          {t.message}
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-[#1f1f2e] border border-[#33467C] rounded-lg px-4 py-3 text-[#C0CAF5] focus:outline-none focus:border-[#9e68ff] transition-colors resize-none"
        />
      </motion.div>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#1f1f2e] border border-[#33467C] hover:bg-[#33467C] text-[#C0CAF5] px-6 py-3 rounded-lg transition-all duration-300"
      >
        {t.send}
      </motion.button>

      <AnimatePresence mode="wait">
        {status === "loading" && (
          <motion.p
            key="loading"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-[#7aa2f7] text-sm"
          >
            {t.sending}
          </motion.p>
        )}

        {status === "success" && (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-[#9ece6a] text-sm"
          >
            {t.success}
          </motion.p>
        )}

        {status === "error" && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-[#f7768e] text-sm"
          >
            {t.error}
          </motion.p>
        )}
      </AnimatePresence>

    </motion.form>
  );
}