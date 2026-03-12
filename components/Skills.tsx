import type { Sections } from "@/types/resume";
import { motion } from "framer-motion";

export default function Skills({ skills, sections }: { skills: string[], sections: Sections}) {
  
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <h2
        id="skills-title"
        className="mb-6 text-[#565f89] font-mono before:content-['//_'] before:text-[#565f89]"
        itemProp="name"
      >
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
            className="px-3 py-1 text-sm rounded-full border border-[#33467C] bg-[#16161F] text-[#9ece6a]
            hover:bg-[#9e68ff] hover:text-[#16161F] transition-colors duration-300"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/DefinedTerm"
          >
            <span itemProp="name">{skill}</span>
            <meta itemProp="position" content={String(i + 1)} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}