"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Mail, Github, Linkedin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

type ExperienceItem = {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
};

type Education = {
  institution: string;
  degree: string;
  period: string;
};

type Certification = {
  name: string;
  issuer: string;
  year: string;
};

/* type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  live?: string;
  repo?: string;
}; */

export default function Home() {
  const { t } = useLanguage();

  const skills = t<any>("skills", { returnObjects: true }) || {};
  const experience: ExperienceItem[] =
    t<any[]>("experience", { returnObjects: true }) || [];

  /* const projects = Array.isArray(
    t<any>("projects", { returnObjects: true })
  )
    ? t<any>("projects", { returnObjects: true })
    : []; */

  const education: Education =
  t<any>("education", { returnObjects: true }) || {};

  const certifications: Certification[] =
    Array.isArray(t<any>("certifications", { returnObjects: true }))
      ? t<any>("certifications", { returnObjects: true })
      : [];

  const summary =
    t<any>("profile.summary", { returnObjects: true }) || [];

  const social =
    t<any>("social.accounts", { returnObjects: true }) || [];

  const email = atob(t("personal.contact.email"));

  return (
    <main className="min-h-screen bg-[#16161F] text-[#C0CAF5] font-mono">

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-[#16161F]/70 border-b border-[#2a2a3a]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-[#9e68ff]">
              {t("nav.about")}
            </a>
            {/* <a href="#projects" className="hover:text-[#9e68ff]">
              {t("nav.projects")}
            </a> */}
            <a href="#experience" className="hover:text-[#9e68ff]">
              {t("nav.experience")}
            </a>
            <a href="#skills" className="hover:text-[#9e68ff]">
              {t("nav.skills")}
            </a>
            <a href="#contact" className="hover:text-[#9e68ff]">
              {t("nav.contact")}
            </a>
          </nav>
          <LanguageSwitcher />
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        {/* HERO */}
        <section className="space-y-6">
          <h1 className="text-5xl font-bold text-[#9e68ff]">
            {t("personal.name")}
          </h1>
          <h2 className="text-2xl text-[#9ece6a]">
            {t("personal.title")}
          </h2>
          <p className="text-[#9cdcfe] max-w-2xl">
            {t("personal.specialization")}
          </p>
          <div className="mt-6 max-w-3xl space-y-3 text-[#C0CAF5]">
            {summary.map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href={t("personal.resume.file")}
              download
              className="px-6 py-3 bg-[#1f1f2e] border border-[#33467C] rounded-lg hover:bg-[#33467C]"
            >
              {t("personal.resume.title")}
            </a>
            {/* <a
              href="#projects"
              className="px-6 py-3 border border-[#33467C] rounded-lg hover:border-[#9e68ff]"
            >
              View Work
            </a> */}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <p className="text-[#565f89] mb-4">// developer.ts</p>
          <div className="bg-[#1f1f2e] border border-[#33467C] rounded-lg p-6 overflow-x-auto">
            <pre>
              <code>
              <span className="text-[#7aa2f7]">export const</span> developer = {'{'}
              {"\n"}  name: <span className="text-[#9ece6a]">"{t("personal.name")}"</span>,
              {"\n"}  role: <span className="text-[#9ece6a]">"{t("personal.title")}"</span>,
              {"\n"}  location: <span className="text-[#9ece6a]">"{t("personal.contact.location")}"</span>,
              {"\n"}  remote: <span className="text-[#f7768e]">{t("personal.contact.remote") ? "true" : "false"}</span>,
              {"\n"}  stack: [
              {"\n"}    &quot;Next.js&quot;,
              {"\n"}    &quot;React&quot;,
              {"\n"}    &quot;Node.js&quot;,
              {"\n"}    &quot;PostgreSQL&quot;,
              {"\n"}    &quot;AWS&quot;
              {"\n"}  ]
              {"\n"}{'}'}
              </code>
            </pre>
          </div>
        </section>

        {/* PROJECTS */}
        {/* <section id="projects">
          <p className="text-[#565f89] mb-6">// Featured Projects</p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project: ProjectItem, i: number) => (
              <div
                key={i}
                className="bg-[#1f1f2e] border border-[#33467C] p-6 rounded-lg hover:border-[#9e68ff] transition"
              >
                <h3 className="text-[#9e68ff] text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm mt-2 text-[#C0CAF5]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-[#16161F] border border-[#33467C] rounded-full text-[#9ece6a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-5 text-sm">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-1 hover:text-[#9e68ff]"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      className="flex items-center gap-1 hover:text-[#9e68ff]"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* EXPERIENCE */}
        <section id="experience">
          <p className="text-[#565f89] mb-6">// Experience</p>
          <div className="relative border-l border-[#33467C] pl-8 space-y-10">
            {experience.map((job, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-10 top-1 w-4 h-4 bg-[#9e68ff] rounded-full"></span>
                <h3 className="text-[#9e68ff] text-lg">
                  {job.position}
                </h3>
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
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <p className="text-[#565f89] mb-6">// Tech Stack</p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills)
              .filter(([k]) => k !== "titles")
              .map(([key, value]: any) => (
                <div
                  key={key}
                  className="bg-[#1f1f2e] border border-[#33467C] p-5 rounded-lg"
                >
                  <h3 className="text-[#9e68ff] mb-4">
                    {skills.titles?.[key]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {value.map((skill: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full border border-[#33467C] bg-[#16161F] text-[#9ece6a]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section>
          <p className="text-[#565f89]">// Education</p>

          <div className="bg-[#1f1f2e] border border-[#33467C] rounded-lg p-6 mt-4">

        <pre>
        <code>
        {"{"}
        {"\n"}  degree: <span className="text-[#9ece6a]">"{education.degree}"</span>,
        {"\n"}  university: <span className="text-[#9ece6a]">"{education.institution}"</span>,
        {"\n"}  period: <span className="text-[#9ece6a]">"{education.period}"</span>
        {"\n"}{"}"}
        </code>
        </pre>

          </div>
        </section>

        {/* CERTIFICATION */}
        <section>
          <p className="text-[#565f89]">// {t("sections.certifications")}</p>

          <div className="flex flex-wrap gap-3 mt-4">

            {certifications.map((cert, i) => (

              <div
                key={i}
                className="px-4 py-2 rounded-lg border border-[#33467C] bg-[#1f1f2e] text-sm"
              >

                <span className="text-[#9e68ff]">
                  {cert.name}
                </span>

                <span className="text-[#565f89]">
                  {" "}— {cert.issuer}
                </span>

                <span className="text-[#9ece6a] ml-2">
                  {cert.year}
                </span>

              </div>

            ))}

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className=" space-y-6">
          <p className="text-[#565f89]">// Contact</p>
          <h2 className="text-2xl text-[#9e68ff]">
            {t("social.title")}
          </h2>
          <ContactForm />
          <div className="flex justify-start gap-6 pt-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-[#9e68ff]"
            >
              <Mail size={18} /> Email
            </a>
            {social.map((account: any, i: number) => {
              if (account.id === "github") {
                return (
                  <a
                    key={i}
                    href={account.url}
                    target="_blank"
                    className="flex items-center gap-2 hover:text-[#9e68ff]"
                  >
                    <Github size={18} /> Github
                  </a>
                );
              }
              if (account.id === "linkedin") {
                return (
                  <a
                    key={i}
                    href={account.url}
                    target="_blank"
                    className="flex items-center gap-2 hover:text-[#9e68ff]"
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a>
                );
              }
              return null;
            })}
          </div>
        </section>

      </div>
    </main>
  );
}