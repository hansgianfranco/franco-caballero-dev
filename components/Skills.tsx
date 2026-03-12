import { Sections } from "@/types/ui";
import { motion } from "framer-motion";

export default function Skills({ skills, sections }: { skills: string[], sections: Sections}) {
  
  return (
    <section id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="mb-6 text-muted font-mono before:content-['//_'] before:text-muted">
        {sections?.skills}
      </h2>

      <ul className="flex flex-wrap gap-2">
        {skills?.map((skill: string, i: number) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: i * 0.04 }}
            viewport={{ once: true }}
            className="px-3 py-1 text-sm rounded-full border border-outline bg-surface text-secondary
            hover:bg-primary hover:text-surface transition-colors duration-300"
          >
            <span>{skill}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}