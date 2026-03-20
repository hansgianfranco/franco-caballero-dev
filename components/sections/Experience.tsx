"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { formatDate } from "@/helpers/formatDate";
import type { Experience } from "@/types/career";
import { motion } from "framer-motion";

export default function Experience({ experience, title }: { experience: Experience[]; title: string; }) {
  const { language } = useLanguage();

  return (
    <section id="experience" aria-labelledby="experience-title" className="mt-20">
      <h2 id="experience-title" className="mb-10 text-muted font-mono before:content-['//_'] before:text-muted">
        {title}
      </h2>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 h-full w-[2px] bg-card md:-translate-x-1/2"></div>

        <div className="space-y-12">

          {experience?.map((job, i) => {
            const left = i % 2 === 0;

            const marginTopClass = i === 0 ? "md:mt-0" : "md:-mt-25";

            return (
              <div
                key={i}
                className={`grid md:grid-cols-[1fr_auto_1fr] items-start ${marginTopClass}`}
              >
                <motion.a
                  href={job.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: left ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className={`
                  group relative
                  ${left ? "md:col-start-1" : "md:col-start-3"}
                `}
                >
                  <span className={`absolute top-4 w-4 h-4 bg-secondary rounded-full 
                    border-4 border-outline transition-all ease-in 
                  group-hover:border-primary group-hover:scale-150 md:top-6
                    ${left ? "md:-right-2" : "md:-left-2"}`}
                  />
                  <motion.article
                    className={`
                      bg-card relative border border-outline rounded-lg p-6 
                      group-hover:border-primary transition-colors ease-in
                      after:w-px after:absolute after:h-[16px] after:bg-card mt-2 ml-10  
                      after:top-[17px] after:z-10 
                      ${left
                        ? "md:text-right md:after:-right-px md:mr-10 md:ml-0"
                        : "md:text-left after:-left-px"
                      }
                    `}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className={`
                      absolute -top-[1px]
                      ${left
                          ? "-left-[27px] -rotate-90 md:-right-[27px] md:left-auto md:scale-x-[-1] md:rotate-90"
                          : "-left-[27px] -rotate-90"
                        }
                    `}
                      width="50"
                      height="20"
                      viewBox="0 0 50 20"
                    >
                      <path
                        d="M0 12 L9 0 L18 12"
                        fill="var(--color-card)"
                        stroke="var(--color-outline)"
                        strokeWidth="1"
                        className="transition-colors ease-in group-hover:stroke-primary"
                      />
                    </svg>
                    <h3 className="text-primary text-lg font-semibold inline-block">{job.position}</h3>
                    <p className="text-sm text-gray-400">
                      <span className="font-medium">{job.company}</span>
                      <span className="mx-2">•</span>
                      <time dateTime={job.start_date}>{formatDate(job.start_date, language)}</time>
                      {" – "}
                      {job.end_date ? <time dateTime={job.end_date}>{formatDate(job.end_date, language)}</time> : language === "es" ? "Presente" : "Present"}
                    </p>
                    <p className="mt-2 text-sm text-foreground leading-relaxed">{job.description}</p>
                  </motion.article>
                </motion.a>
              </div>
            );
          })}


        </div>
      </div>
    </section>
  );
}