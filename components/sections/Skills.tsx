'use client'

import { skillsData } from "@/data/skills.data";
import { motion } from "framer-motion";

const categoryColors: Record<string, string> = {
  frontend: 'hover:bg-blue-400 hover:border-blue-400 focus:ring-blue-400',
  backend: 'hover:bg-purple-400 hover:border-purple-400 focus:ring-purple-400',
  dataAndApi: 'hover:bg-green-400 hover:border-green-400 focus:ring-green-400',
  infrastructure: 'hover:bg-orange-400 hover:border-orange-400 focus:ring-orange-400',
  cmsEcommerce: 'hover:bg-gray-400 hover:border-gray-400 focus:ring-gray-400',
};

export default function Skills({ title }: { title: string }) {
  const allSkills = Object.entries(skillsData).flatMap(([category, skills]) =>
    skills.map((skill: string) => ({ skill, category }))
  );

  return (
    <section id="skills" aria-labelledby="skills-title">
      <h2
        id="skills-title"
        className="mb-6 text-muted font-mono before:content-['//_'] before:text-muted"
      >
        {title}
      </h2>

      <ul className="flex flex-wrap gap-2">
        {allSkills.map(({ skill, category }, i) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
            viewport={{ once: true }}
            className={`
              inline-block px-3 py-1 bg-surface border border-outline rounded-full text-secondary
              hover:text-background ${categoryColors[category]}
              transition-colors ease-in cursor-pointer text-sm
              focus:outline-none focus:ring-2
            `}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}