import type { Experience, Sections } from "@/types/resume";
import { motion } from "framer-motion";

export default function Experience({ experience, sections }: { experience: Experience[], sections: Sections}) {

    return (
        <section id="experience">
            <p className="text-[#565f89] mb-6">&#47;&#47; {sections?.experience}</p>
            <div className="relative border-l border-[#33467C] pl-8 space-y-10">
                {experience?.map((job, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <span className="absolute -left-10 top-1 w-4 h-4 bg-[#9e68ff] rounded-full transition-transform transform group-hover:scale-150 duration-300"></span>
                        <h3 className="text-[#9e68ff] text-lg">{job.position}</h3>
                        <p className="text-sm text-[#9ece6a]">
                            {job.company} • {job.period}
                        </p>
                        <ul className="mt-3 space-y-1 text-[#C0CAF5]">
                            {job.responsibilities.map((r, index) => (
                                <li key={index} className="text-[#C0CAF5]">
                                    - {r}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}