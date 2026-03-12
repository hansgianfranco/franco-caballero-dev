import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { Meta, Sections } from "@/types/ui";

export default function Contact({ meta, sections }: { meta: Meta; sections: Sections; }) {
  return (
    <motion.section
      id="contact"
      className="space-y-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title" className="mb-6 text-muted font-mono before:content-['//_'] before:text-muted">
        {sections?.contact}
      </h2>

      <ContactForm contact={meta?.contact} />

    </motion.section>
  );
}