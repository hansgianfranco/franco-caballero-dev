"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Meta } from "@/types/ui";
import { Send } from "lucide-react";

export default function ContactForm({ contact }: { contact: Meta["contact"] }) {


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

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const isValid =
    form.name.trim() !== "" &&
    form.message.trim() !== "" &&
    form.email.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email);

  const [status, setStatus] = useState<
    "" | "loading" | "success" | "error"
  >("");

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
      className="mt-10 space-y-8 bg-linear-to-br from-card via-card to-secondary/5 border border-outline rounded-xl p-8 shadow-sm hover:border-primary transition-colors ease-in"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="space-y-2">
        <h2 className="font-bold text-xl text-primary">
          {contact?.title}
        </h2>
        <p className="text-foreground">
          {contact?.subtitle}
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={field} className="group">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-muted mb-2 group-focus-within:text-primary transition ease-in"
          >
            {contact.fields.name}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder={contact.placeholders.name}
            value={form.name}
            onChange={handleChange}
            className="w-full bg-surface border border-outline rounded-lg px-4 py-3 text-foreground 
            placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary 
            valid:border-secondary not-placeholder-shown:invalid:border-danger transition ease-in"
          />
        </motion.div>

        <motion.div variants={field} className="group">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-muted mb-2 group-focus-within:text-primary transition ease-in"
          >
            {contact.fields.email}
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder={contact.placeholders.email}
            required
            value={form.email}
            onChange={handleChange}
            className="w-full bg-surface border border-outline rounded-lg px-4 py-3 text-foreground 
            placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary 
            valid:border-secondary not-placeholder-shown:invalid:border-danger transition ease-in"
          />
        </motion.div>
      </motion.div>

      <motion.div variants={field} className="group">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-muted mb-2 group-focus-within:text-primary transition ease-in"
        >
          {contact.fields.message}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={contact.placeholders.message}
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-surface border border-outline rounded-lg px-4 py-3 text-foreground 
          placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary 
          valid:border-secondary not-placeholder-shown:invalid:border-danger resize-none transition ease-in"
        />
      </motion.div>

      <motion.button
        type="submit"
        disabled={!isValid || status === "loading"}
        className={`relative px-6 py-3 rounded-lg font-semibold flex items-center gap-2
          ${status === "loading"
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : !isValid
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : `bg-secondary text-background cursor-pointer
                hover:bg-primary
                transition ease-in`
                }
          focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        `}
      >
        <Send size={18} />
        {status === "loading" ? contact.actions.sending : contact.actions.send}
      </motion.button>

      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-sm px-3 py-2 rounded-md bg-surface border border-secondary text-secondary"
          >
            {contact.status.success}
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-sm px-3 py-2 rounded-md bg-surface border border-danger text-danger"
          >
            {contact.status.error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}