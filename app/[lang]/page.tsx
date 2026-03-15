import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

import { ResumeData } from "@/types/resume";
import { getResumeData } from "@/services/resume.service";

const Hero = dynamic(() => import("@/components/sections/Hero"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const resume: ResumeData = await getResumeData(lang);
  return (
    <>
      <Navbar nav={resume.nav} />
      <main id="main" className="min-h-screen relative text-foreground font-mono max-w-6xl mx-auto px-6 py-20 space-y-20" role="main">
        <Hero personal={resume.personal} />
        <Projects projects={resume.projects} title={resume.sections.projects} />
        <Experience experience={resume.experience} title={resume.sections.experience} />
        <Skills skills={resume.skills} title={resume.sections.skills} />
        <Contact meta={resume.meta} title={resume.sections.contact} />
      </main>
      <Footer meta={resume.meta} />
      <div className="stars-layer" aria-hidden="true"></div>
    </>
  );
}