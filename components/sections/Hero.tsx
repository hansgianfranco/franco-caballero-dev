'use client'

import type { Personal } from "@/types/personal";
import type { SocialAccount } from "@/types/shared";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero({ personal, title }: { personal: Personal, title: string }) {

  const email = personal?.contact?.email
    ? atob(personal.contact.email)
    : "";

  const developer = {
    name: personal?.name,
    role: personal?.title,
    location: `${personal?.contact?.address}, ${personal?.contact?.country}`,
    remote: personal?.contact?.remote ?? false,
    language: ["es", "en"],
    stack: ["Next.js", "React", "Node.js"]
  };

  return (
    <section id="about" className="flex flex-col md:flex-row items-start gap-10" aria-labelledby="about-title">
      <h2 id="about-title" className="sr-only">{title}</h2>
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl leading-8 font-bold text-primary">
          {personal?.name}
        </h1>
        <h2 className="text-3xl leading-4 text-secondary">
          {personal?.title}
        </h2>
        <address className="flex justify-start gap-6">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-accent hover:text-primary transition-all ease-in"
          >
            <Mail size={18} /> Email
          </a>
          {personal?.accounts?.map((account: SocialAccount, i: number) => {
            if (account.id === "github")
              return (
                <a
                  key={i}
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-primary transition-all ease-in"
                >
                  <Github size={18} /> Github
                </a>
              );
            if (account.id === "linkedin")
              return (
                <a
                  key={i}
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-primary transition-all ease-in"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              );
            return null;
          })}
        </address>
        <div className="mt-6 max-w-3xl space-y-3 text-foreground">
          {personal.summary.slice(0, 3).map((paragraph: string, i: number) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
        <div className="flex gap-4 pt-4">
          {personal?.resume?.file && (
           <a
              href={personal.resume.file}
              download
              aria-label={`${personal.resume.title} (descarga PDF)`}
              className="
                relative px-4 py-3 rounded-lg
                bg-accent text-background hover:bg-primary 
                transition ease-in
                focus:outline-none 
                focus-visible:ring-2 
                focus-visible:ring-primary 
                focus-visible:ring-offset-2
                flex items-center gap-2
              "
            >
              <Download size={18} />
              {personal.resume.title}
            </a>
          )}
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 shrink-0"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="bg-card border border-outline rounded-lg p-6 hover:border-primary bg-linear-to-br from-card via-card to-secondary/5 transition-colors ease-in">
          <pre className="whitespace-pre-wrap wrap-break-words text-sm sm:text-base">
            <code>
              <span className="text-accent">export const</span> developer = &#123;{"\n"}
              &nbsp;&nbsp;name: <span className="text-secondary">&quot;{developer.name}&quot;</span>,{"\n"}
              &nbsp;&nbsp;role: <span className="text-secondary">&quot;{developer.role}&quot;</span>,{"\n"}
              &nbsp;&nbsp;location: <span className="text-secondary">&quot;{developer.location}&quot;</span>,{"\n"}
              &nbsp;&nbsp;remote: <span className={developer.remote ? "text-danger" : "text-muted"}>
                {developer.remote ? "true" : "false"}
              </span>,{"\n"}
              &nbsp;&nbsp;languages: [ {"\n"}
              {developer.language.map((lang, i) => (
                <span key={i}>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">&quot;{lang}&quot;</span>
                  {i < developer.language.length - 1 ? "," : ""}
                  {"\n"}
                </span>
              ))}
              &nbsp;&nbsp;],{"\n"}
              &nbsp;&nbsp;stack: [ {"\n"}
              {developer.stack.map((tech, i) => (
                <span key={i}>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">&quot;{tech}&quot;</span>
                  {i < developer.stack.length - 1 ? "," : ""}
                  {"\n"}
                </span>
              ))}
              &nbsp;&nbsp;]{"\n"}
              &#125;
            </code>
          </pre>
        </div>
      </motion.div>
    </section>
  );
}