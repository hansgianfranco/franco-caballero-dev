import { useLanguage } from "@/contexts/LanguageContext";
import { formatDate } from "@/helpers/formatDate";
import type { Project, Sections } from "@/types/resume";
import { motion } from "framer-motion";

export default function Projects({ projects, sections }: { projects: Project[], sections: Sections }) {
    const { language } = useLanguage();

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const card = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" aria-labelledby="projects-title">
            <h2 id="projects-title" className="mb-6 text-muted font-mono before:content-['//_'] before:text-muted">
                {sections?.projects}
            </h2>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6"
            >
                {projects?.map((project, i) => (
                    <motion.article
                        key={i}
                        variants={card}
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.3 }}
                        className="bg-card border border-outline p-6 rounded-lg hover:border-primary"
                    >
                        <h3 className="text-primary text-lg font-semibold">
                            {project.name}
                        </h3>
                        <p className="text-sm capitalize text-gray-400">
                            <time dateTime={project.start_date}>
                                {formatDate(project.start_date, language)}
                            </time>
                            {" – "}
                            {project.end_date ? (
                                <time dateTime={project.end_date}>
                                    {formatDate(project.end_date, language)}
                                </time>
                            ) : (
                                language === "es" ? "Presente" : "Present"
                            )}
                        </p>
                        <p className="text-sm mt-2 text-foreground">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies.map((tech: string, id: number) => (
                                <span
                                    key={id}
                                    className="text-xs px-3 py-1 bg-surface border border-outline rounded-full text-secondary"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-sm hover:text-primary"
                            >
                                View Project
                            </a>
                        )}
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}