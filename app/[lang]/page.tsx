import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

import { ResumeData } from "@/types/resume";
import { getResumeData } from "@/services/resume.service";

const Hero = dynamic(() => import("@/components/Hero"));
const Projects = dynamic(() => import("@/components/Projects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Skills = dynamic(() => import("@/components/Skills"));
const Contact = dynamic(() => import("@/components/Contact"));

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
      <main
        id="main"
        className="min-h-screen relative text-foreground font-mono max-w-6xl mx-auto px-6 py-20 space-y-20"
        role="main"
      >
        <Hero personal={resume.personal} profile={resume.profile} meta={resume.meta} />
        <Projects projects={resume.projects} sections={resume.sections} />
        <Experience experience={resume.experience} sections={resume.sections} />
        <Skills skills={resume.skills} sections={resume.sections} />
        <Contact meta={resume.meta} sections={resume.sections} />
      </main>
      <Footer meta={resume.meta} />
      <div className="stars-layer" aria-hidden="true"></div>
    </>
  );
}