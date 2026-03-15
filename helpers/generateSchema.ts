import type { ResumeData } from "@/types/resume";

export function generateSchema({
  personal,
  education,
  skills,
  projects,
  experience,
  certification
}: ResumeData) {

  const email = personal?.contact?.email
    ? atob(personal.contact.email)
    : "";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: personal?.name,
    jobTitle: personal?.title,
    description: personal?.description,
    email,
    url: personal?.website,

    knowsLanguage: ["Spanish", "English"],

    address: personal?.contact?.address
      ? {
        "@type": "PostalAddress",
        addressLocality: personal.contact.address,
        addressCountry: "PE"
      }
      : undefined,

    sameAs: personal?.accounts?.map(a => a.url),
    
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": personal?.website
    },

    knowsAbout: skills,

    subjectOf: projects?.map(project => ({
      "@type": "SoftwareSourceCode",
      name: project.name,
      description: project.description,
      codeRepository: project.url,
      programmingLanguage: project.technologies,
      dateCreated: project.start_date,
      dateModified: project.end_date
    })),

    worksFor: experience?.map(job => ({
      "@type": "Organization",
      name: job.company,
      url: job.website
    })),

    hasOccupation: experience?.map(job => ({
      "@type": "EmployeeRole",
      roleName: job.position,
      startDate: job.start_date,
      endDate: job.end_date
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