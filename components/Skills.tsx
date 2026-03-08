import type { Sections } from "@/types/resume";
import { motion } from "framer-motion";

export default function Skills({ skills, sections }: { skills: string[], sections: Sections}) {
  
  return (
    <section id="skills">
      <p className="text-[#565f89] mb-6">&#47;&#47; {sections?.skills}</p>
      <div className="flex flex-wrap gap-2">
        {skills?.map((skill: string, i: number) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: i * 0.04 }}
            viewport={{ once: true }}
            className="px-3 py-1 text-sm rounded-full border border-[#33467C] bg-[#16161F] text-[#9ece6a]
            hover:bg-[#9e68ff] hover:text-[#16161F] transition-colors duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}