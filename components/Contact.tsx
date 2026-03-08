import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import type { Sections, Social } from "@/types/resume";

export default function Contact({ social, sections }: { social: Social, sections: Sections}) {
  
  return (
    <motion.section
      id="contact"
      className="space-y-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-[#565f89]">&#47;&#47; {sections?.contact}</p>
      <h2 className="text-2xl text-[#9e68ff]">
        {social?.title}
      </h2>
      <ContactForm />
    </motion.section>
  );
}