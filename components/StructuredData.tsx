"use client";

import Script from "next/script";
import { generateSchema } from "@/helpers/generateSchema";
import { useResume } from "@/hooks/useResume";
import { ResumeData } from "@/types/resume";

export default function StructuredData() {

  const { data: resume } = useResume();

  if (!resume) return null;

  const schema = generateSchema({
    personal: resume.personal,
    profile: resume.profile,
    education: resume.education,
    skills: resume.skills,
    social: resume.social,
    projects: resume.projects,
    experience: resume.experience,
    certification: resume.certification
  } as ResumeData);

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}