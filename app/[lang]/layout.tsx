import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { normalizeLang } from "@/helpers/normalizeLang";
import { getResumeData } from "@/services/resume.service";
import StructuredData from "@/components/seo/StructuredData";
import { SITE } from "@/constants/site";
import { Poppins, Roboto } from "next/font/google";
import '../globals.css';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

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
      description: "Desarrollador fullstack especializado en Next.js, Laravel y WordPress.",
    },
    en: {
      title: "Franco Caballero | Senior Fullstack Developer",
      description: "Senior Fullstack Developer specialized in Next.js, Laravel and cloud solutions.",
    },
  }
  const locale = normalizeLang(lang);
  const data = meta[locale];
  const base_url = SITE.url;
  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `${base_url}/${locale}`,
      languages: {
        es: `${base_url}/es`,
        en: `${base_url}/en`,
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
    <html lang={locale} className={`${poppins.variable} ${roboto.variable}`}>
      <body className="antialiased">
        <LanguageProvider lang={locale}>
          {children}
          <StructuredData resume={resume} />
        </LanguageProvider>
      </body>
    </html>
  );
}