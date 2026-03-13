import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import StructuredData from "@/components/StructuredData";
import { normalizeLang } from "@/helpers/normalizeLang";
import { getResumeData } from "@/services/resume.service";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lang } = await params;
  const meta = {
    es: {
      title: "Franco Caballero | Desarrollador Fullstack Senior",
      description:
        "Desarrollador fullstack especializado en Next.js, Laravel y WordPress.",
    },
    en: {
      title: "Franco Caballero | Senior Fullstack Developer",
      description:
        "Senior Fullstack Developer specialized in Next.js, Laravel and cloud solutions.",
    },
  }
  const locale = normalizeLang(lang);
  const data = meta[locale];
  return {
    title: data.title,
    description: data.description,

    alternates: {
      canonical: `https://francocaballero.dev/${locale}`,
      languages: {
        es: "https://francocaballero.dev/es",
        en: "https://francocaballero.dev/en",
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang } = await params;
  const resume = await getResumeData(lang);
  const locale = normalizeLang(lang);

  return (
    <LanguageProvider lang={locale}>
      {children}
      <StructuredData resume={resume} />
    </LanguageProvider>
  );
}