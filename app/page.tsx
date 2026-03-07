"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#16161F] text-[#C0CAF5] font-mono">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}