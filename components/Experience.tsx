"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { formatDate } from "@/helpers/formatDate";
import type { Sections } from "@/types/ui";
import type { Experience } from "@/types/career";
import { motion } from "framer-motion";

export default function Experience({
  experience,
  sections
}: {
  experience: Experience[];
  sections: Sections;
}) {
  const { language } = useLanguage();

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mt-20"
    >
      {/* Title */}
      <h2
        id="experience-title"
        className="mb-10 text-muted font-mono before:content-['//_'] before:text-muted"
      >
        {sections?.experience}
      </h2>

      {/* Timeline */}
      <div className="relative border-l border-outline pl-8 space-y-12">

        {experience?.map((job, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="relative group"
          >

            {/* Timeline dot */}
            <span
              className="
              absolute
              -left-10
              top-2
              w-4
              h-4
              bg-primary
              rounded-full
              border-4
              border-background
              transition
              group-hover:scale-125
              "
            />

            {/* Card */}
            <div
              className="
              bg-card
              border border-outline
              rounded-lg
              p-5
              transition
              hover:border-primary/40
              hover:bg-surface
              "
            >

              {/* Position */}
              <h3 className="text-primary text-lg font-semibold">
                {job.position}
              </h3>

              {/* Company + date */}
              <p className="text-sm text-secondary mt-1">
                <span className="font-medium">{job.company}</span>

                <span className="mx-2">•</span>

                <time dateTime={job.start_date}>
                  {formatDate(job.start_date, language)}
                </time>

                {" – "}

                {job.end_date ? (
                  <time dateTime={job.end_date}>
                    {formatDate(job.end_date, language)}
                  </time>
                ) : (
                  language === "es" ? "Presente" : "Present"
                )}
              </p>

              {/* Responsibilities */}
              <ul className="mt-4 space-y-2 text-foreground text-sm leading-relaxed">
                {job.responsibilities.map((r, index) => (
                  <li
                    key={index}
                    className="flex gap-2"
                  >
                    <span className="text-primary">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

            </div>

          </motion.article>
        ))}
      </div>
    </section>
  );
}