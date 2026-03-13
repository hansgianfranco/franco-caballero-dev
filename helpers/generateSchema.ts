import type { ResumeData } from "@/types/resume";

export function generateSchema({
  personal,
  education,
  skills,
  projects,
  experience,
  certification,
  meta
}: ResumeData) {

  const email = personal?.contact?.email
    ? atob(personal.contact.email)
    : "";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: personal?.name,
    jobTitle: personal?.title,
    description: personal?.summary?.join(" "),
    email,
    url: personal?.website,

    knowsLanguage: ["Spanish", "English"],

    address: personal?.contact?.location
      ? {
        "@type": "PostalAddress",
        addressLocality: personal.contact.location,
        addressCountry: "PE"
      }
      : undefined,

    sameAs: personal?.accounts?.map(a => a.url),

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
      endDate: job.end_date || undefined
    })),

    alumniOf: education?.map(ed => ({
      "@type": "CollegeOrUniversity",
      name: ed.institution,
      sameAs: ed.url,
      location: {
        "@type": "Place",
        name: ed.location
      },
      department: {
        "@type": "EducationalOrganization",
        name: ed.degree
      }
    })),

    hasCredential: certification?.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: "Professional Certification",
      recognizedBy: {
        "@type": "Organization",
        name: cert.issuer
      },
      dateCreated: cert.date,
      url: cert.url
    }))
  };

  return schema;
}