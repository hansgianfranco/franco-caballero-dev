import { generateSchema } from "@/helpers/generateSchema";
import type { ResumeData } from "@/types/resume";

interface StructuredDataProps {
  resume: ResumeData;
}

export default function StructuredData({ resume }: StructuredDataProps) {
  if (!resume) return null;

  const schema = generateSchema(resume);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}