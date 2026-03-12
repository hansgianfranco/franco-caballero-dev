import { ResumeData } from "@/types/resume";

export function generateSchema({
  personal,
  profile,
  skills,
  social,
  projects,
  experience
}: ResumeData) {

  const email = personal?.contact?.email
    ? atob(personal.contact.email)
    : "";

  return {
    "@context": "https://schema.org",
    "@type": "Person",

    name: personal?.name,
    jobTitle: personal?.title,
    description: profile?.summary?.join(" "),
    email: email,
    url: personal?.website,
    address: personal?.contact?.location,
    sameAs: social?.accounts?.map(a => a.url),
    knowsAbout: skills,
    subjectOf: projects?.map(project => ({
      "@type": "SoftwareSourceCode",
      name: project.name,
      description: project.description,
      codeRepository: project.url,
      programmingLanguage: project.technologies,
      dateCreated: project.start_date,
      dateModified: project.end_date || undefined
    })),

    hasOccupation: experience?.map(job => ({
      "@type": "Role",
      roleName: job.position,
      startDate: job.start_date,
      endDate: job.end_date || undefined,
      worksFor: {
        "@type": "Organization",
        name: job.company
      }
    }))
  };
}