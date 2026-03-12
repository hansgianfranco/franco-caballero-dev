import { useLanguage } from "@/contexts/LanguageContext";
import { formatDate } from "@/helpers/formatDate";
import type { Experience, Sections } from "@/types/resume";
import { motion } from "framer-motion";

export default function Experience({ experience, sections }: { experience: Experience[], sections: Sections}) {
    const { language } = useLanguage();

    return (
        <section id="experience" aria-labelledby="experience-title">
            <h2
                id="experience-title"
                className="mb-6 text-[#565f89] font-mono before:content-['//_'] before:text-[#565f89]"
            >
                {sections?.experience}
            </h2>
            <div className="relative border-l border-[#33467C] pl-8 space-y-10">
                {experience?.map((job, i) => (
                    <motion.article
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group"
                        itemScope
                        itemType="https://schema.org/Role"
                    >
                        <span className="absolute -left-10 top-1 w-4 h-4 bg-[#9e68ff] rounded-full transition-transform transform group-hover:scale-150 duration-300"></span>
                        <h3
                            className="text-[#9e68ff] text-lg"
                            itemProp="roleName"
                        >
                            {job.position}
                        </h3>
                        <p className="text-sm capitalize text-[#9ece6a]">
                            <span
                                itemProp="worksFor"
                                itemScope
                                itemType="https://schema.org/Organization"
                            >
                                <span itemProp="name">{job.company}</span>
                            </span>
                            {" • "}
                            <time
                                itemProp="startDate"
                                dateTime={job.start_date}
                            >
                                {formatDate(job.start_date, language)}
                            </time>
                            {" – "}
                            {job.end_date ? (
                                <time
                                    itemProp="endDate"
                                    dateTime={job.end_date}
                                >
                                    {formatDate(job.end_date, language)}
                                </time>
                            ) : (
                                language === "es" ? "Presente" : "Present"
                            )}
                        </p>
                        <ul className="mt-3 space-y-1 text-[#C0CAF5]">
                            {job.responsibilities.map((r, index) => (
                                <li key={index}>
                                    - {r}
                                </li>
                            ))}
                        </ul>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}