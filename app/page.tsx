"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useResume } from "@/hooks/useResume";

export default function Home() {
   const { data: resume, loading } = useResume();

  if (loading || !resume) return null;

  return (
    <>
      <Navbar nav={resume.nav}/>
      <main id="main" className="min-h-screen relative text-foreground font-mono max-w-6xl mx-auto px-6 py-20 space-y-20" role="main">
          <Hero personal={resume.personal} profile={resume.profile} social={resume.social}/>
          <Projects projects={resume.projects} sections={resume.sections}/>
          <Experience experience={resume.experience} sections={resume.sections} />
          <Skills skills={resume.skills} sections={resume.sections}/>
          <Contact sections={resume.sections}/>
      </main>
      <Footer meta={resume.meta}/>
      <div className="stars-layer" aria-hidden="true"></div>
    </>
  );
}