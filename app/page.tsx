"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  Mail,
  Phone,
  Code,
  Check,
  Calendar,
  Server,
  Database,
  ShoppingCart,
  CheckCircle,
  Linkedin,
  ChevronUp,
  Wrench,
  PinIcon,
  Globe,
  Github,
  Download,
} from "lucide-react";
import { useEffect } from "react";
import { Certification, Contact, Education, Experience, Skills, SkillsTitles, Social, SocialAccount } from "@/types/resume";

interface SocialConfigItem {
  icon: React.ElementType;
  hoverBg: string;
}

type TFunction = <T = string>(
  key: string,
  options?: { returnObjects?: boolean }
) => T;

interface PersonalInfoProps {
  t: TFunction;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ t }) => {
  
  useEffect(() => {
    const el = document.getElementById("email");
    if (el) {
      const encoded = el.getAttribute("data-email");
      if (encoded) {
        const decoded = atob(encoded);
        el.textContent = decoded;
        el.setAttribute("href", `mailto:${decoded}`);
      }
    }
  }, []);

  const contact: Contact = t("personal.contact", { returnObjects: true });

  if (!contact) return null;

  return (
    <ul className="list-none m-0 p-0 text-[#777] dark:text-[#bbb]">
      <li className="pb-2.5 mb-2.5 border-b border-[rgba(255,255,255,0.1)] flex items-center">
        <Mail className="w-4 h-4 mr-2 text-[#777] dark:text-[#bbb]" />
        <a
          id="email"
          data-email={contact.email}
          className="text-[#777] dark:text-[#bbb] no-underline hover:text-white transition-colors"
        >
          ...
        </a>
      </li>
      <li className="pb-2.5 mb-2.5 border-b border-[rgba(255,255,255,0.1)] flex items-center">
        <Phone className="w-4 h-4 mr-2 text-[#777] dark:text-[#bbb]" />
        <span>{contact.phone}</span>
      </li>
      <li className="pb-2.5 mb-2.5 border-b border-[rgba(255,255,255,0.1)] flex items-center">
        <PinIcon className="w-4 h-4 mr-2 text-[#777] dark:text-[#bbb]" />
        <span>{contact.location}</span>
      </li>
      {contact.remote && (
        <li className="flex items-center">
          <Globe className="w-4 h-4 mr-2 text-[#777] dark:text-[#bbb]" />
          <span>{contact.remote_label || "Remote OK"}</span>
        </li>
      )}
      
    </ul>
  );
};

export default function Home() {
  const { t } = useLanguage();

  const profileSummary: string[] = t("profile.summary", { returnObjects: true }) || [];
  const coreStrengths: string[] = t("profile.core_strengths", { returnObjects: true }) || [];
  const experienceList: Experience[] = t("experience", { returnObjects: true }) || [];
  const skillsData: Skills = t("skills", { returnObjects: true }) || {};
  const skillsTitles: SkillsTitles = skillsData.titles || {};
  const certificationsList: Certification[] = t("certifications", { returnObjects: true }) || [];
  const education: Education = t("education", { returnObjects: true }) || {};
  const social: Social = t("social", { returnObjects: true }) || {};

  const socialConfig: Record<string, SocialConfigItem> = {
    LinkedIn: {
      icon: Linkedin,
      hoverBg: "group-hover:bg-[#0077b5]"
    },
    Github: {
      icon: Github,
      hoverBg: "group-hover:bg-[#333]"
    }
  }
  
  return (
    <main className="bg-white dark:bg-[#232323] text-[#777] dark:text-[#bbb] relative" id="tc-main">
      <LanguageSwitcher />

      {/* About Start */}
      <section className="bg-[url('/images/bg1.png')] bg-cover dark:bg-none py-25">
        <div className="container max-w-300 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-1 pl-2">
              <div className="rounded-lg overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
                <Image 
                  src="/images/profile.png" 
                  alt={t("personal.name")} 
                  width={200} 
                  height={200} 
                  className="w-full hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>
            <div className="md:col-span-3 pl-2">
              <div className="h-11,25"></div>
              <div>
                <div className="mb-2">
                  <h1 className="text-[42px] leading-none text-green-400 font-bold">{t("personal.name")}</h1>
                </div>
                <div className="mb-2 relative">
                  <p className="text-[20px] text-[#777] dark:text-[#bbb] font-['Roboto'] relative before:content-[''] before:absolute before:h-px before:w-20 before:bg-white/70 before:top-1/2 before:-left-21.75 before:-translate-y-1/2">
                    {t("personal.title")}
                  </p>
                </div>
                <p className="text-md text-[#999] mt-2">{t("personal.specialization")}</p>
                <div className="mt-6">
                  <a
                    href={t("personal.resume.file")}
                    download
                    className="inline-flex items-center px-3 py-3 bg-[#0077b5] text-white font-semibold rounded-xl shadow hover:bg-[#005f8d] transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2 text-white shrink-0" />
                    {t("personal.resume.title")}
                  </a>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="h-11.25"></div>
              <PersonalInfo t={t} />
            </div>
          </div>
        </div>
      </section>
      {/* About End */}

      {/* Introduction Start */}
      <section className="py-25 bg-[#f9f9f9] dark:bg-[rgba(255,255,255,0.03)]">
        <div className="max-w-300 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h2 className="text-4xl text-blue-400 tracking-wide mb-6.25 relative inline-block after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("sections.profile")}
                </h2>
                <span className="block absolute top-0 text-7xl leading-3.5 font-bold text-[rgba(68,68,68,0.1)] dark:text-[rgba(255,255,255,0.2)]  opacity-80">01</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div>
                {profileSummary.map((paragraph: string, index: number) => (
                  <p key={index} className="text-[16px] text-[#777] dark:text-[#bbb] font-['Roboto'] leading-6.5 mb-7.5">
                    {paragraph}
                  </p>
                ))}

                <h3 className="text-[18px] font-bold text-[#777] dark:text-[#bbb] mb-3 flex items-center">
                  {t("sections.strengths_title")}
                </h3>
                <ul className="text-[16px] text-[#777] dark:text-[#bbb] font-['Roboto'] leading-6.5 list-none pl-0 mb-7.5">
                  {coreStrengths.map((strength: string, index: number) => (
                    <li key={index} className="flex items-start mb-2">
                      <Check className="w-4 h-4 mr-2 text-[#777] dark:text-[#bbb] mt-1 shrink-0" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[16px] text-[#777] dark:text-[#bbb] font-['Roboto'] leading-6.5 italic border-l-4 border-[#777] pl-4">
                  {t("profile.career_goal")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction End */}

      {/* Work Start */}
      <section className="py-25">
        <div className="container max-w-300 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h2 className="text-4xl text-red-400 tracking-wide mb-6.25 relative inline-block after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("sections.experience")}
                </h2>
                <span className="block absolute top-0 text-7xl leading-3.5 font-bold text-[rgba(68,68,68,0.1)] dark:text-[rgba(255,255,255,0.2)]  opacity-80">02</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-5">
                {experienceList.map((job: Experience, index: number) => (
                  <div key={index} className="mb-11.25 pb-11.25 border-b border-[rgba(255,255,255,0.1)] last:border-0 last:mb-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-[#777] dark:text-[#bbb]" />
                      <p className="text-[#777] dark:text-[#bbb]">{job.period}</p>
                    </div>
                    <div>
                      <h3 className="text-[28px] mb-2 text-[#777] dark:text-[#bbb] font-bold">{job.position}</h3>
                      <p className="text-[18px] text-[#777] dark:text-[#bbb] mb-4">
                        {job.company} {job.location && <span className="text-[#999]">• {job.location}</span>}
                      </p>
                      {job.responsibilities.map((resp, idx) => (
                        <p key={idx} className="text-[16px] text-[#777] dark:text-[#bbb] font-['Roboto'] leading-6.5 flex items-start mb-2">
                          <Check className="w-4 h-4 mr-2 text-[#777] dark:text-[#bbb] mt-1 shrink-0" />
                          <span>{resp}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work End */}

      {/* Skills Start */}
      <section className="py-25 bg-[#f9f9f9] dark:bg-[rgba(255,255,255,0.03)]">
        <div className="container max-w-300 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h2 className="text-4xl text-lime-400 tracking-wide mb-6.5 relative inline-block after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("sections.skills")}
                </h2>
                <span className="block absolute top-0 text-7xl leading-3.5 font-bold text-[rgba(68,68,68,0.1)] dark:text-[rgba(255,255,255,0.2)]  opacity-80">03</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#777] dark:text-[#bbb] mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-[#777] dark:text-[#bbb]" />
                    {skillsTitles.frontend}
                  </h3>
                  <ul className="text-[15px] text-[#777] dark:text-[#bbb] font-['Roboto'] leading-6.5 list-disc pl-5">
                    {skillsData.frontend?.map((skill: string, index: number) => (
                      <li key={index} className="mb-1">{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#777] dark:text-[#bbb] mb-4 flex items-center">
                    <Server className="w-5 h-5 mr-2 text-[#777] dark:text-[#bbb]" />
                    {skillsTitles.backend}
                  </h3>
                  <ul className="text-[15px] text-[#777] dark:text-[#bbb] font-['Roboto'] leading-6.5 list-disc pl-5">
                    {skillsData.backend?.map((skill: string, index: number) => (
                      <li key={index} className="mb-1">{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#777] dark:text-[#bbb] mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-[#777] dark:text-[#bbb]" />
                    {skillsTitles.databases}
                  </h3>
                  <ul className="text-[15px] text-[#777] dark:text-[#bbb] font-['Roboto'] leading-6.5 list-disc pl-5">
                    {skillsData.databases?.map((skill: string, index: number) => (
                      <li key={index} className="mb-1">{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#777] dark:text-[#bbb] mb-4 flex items-center">
                    <Wrench className="w-5 h-5 mr-2 text-[#777] dark:text-[#bbb]" />
                    {skillsTitles.cloud_infrastructure}
                  </h3>
                  <ul className="text-[15px] text-[#777] dark:text-[#bbb] font-['Roboto'] leading-6.5 list-disc pl-5">
                    {skillsData.cloud_infrastructure?.map((skill: string, index: number) => (
                      <li key={index} className="mb-1">{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#777] dark:text-[#bbb] mb-4 flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2 text-[#777] dark:text-[#bbb]" />
                    {skillsTitles.cms_ecommerce}
                  </h3>
                  <ul className="text-[15px] text-[#777] dark:text-[#bbb] font-['Roboto'] leading-6.5 list-disc pl-5">
                    {skillsData.cms_ecommerce?.map((skill: string, index: number) => (
                      <li key={index} className="mb-1">{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#777] dark:text-[#bbb] mb-4 flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2 text-[#777] dark:text-[#bbb]" />
                    {skillsTitles.tools_methodologies}
                  </h3>
                  <ul className="text-[15px] text-[#777] dark:text-[#bbb] font-['Roboto'] leading-6.5 list-disc pl-5">
                    {skillsData.tools_methodologies?.map((skill: string, index: number) => (
                      <li key={index} className="mb-1">{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills End */}

      {/* Education Start */}
      <section className="py-25">
        <div className="container max-w-300 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h2 className="text-4xl text-indigo-400 tracking-wide mb-6.25 relative inline-block after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("sections.education")}
                </h2>
                <span className="block absolute top-0 text-7xl leading-3.5 font-bold text-[rgba(68,68,68,0.1)] dark:text-[rgba(255,255,255,0.2)]  opacity-80">04</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="mb-11.25 pb-11.25 border-b border-[rgba(255,255,255,0.1)] last:border-0 last:mb-0 last:pb-0">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-[#777] dark:text-[#bbb]" />
                  <p className="text-[#777] dark:text-[#bbb]">{education.period}</p>
                </div>
                <div>
                  <h3 className="text-[28px] mb-2 leading-none text-[#777] dark:text-[#bbb] font-bold">{education.university}</h3>
                  <p className="text-[18px] text-[#777] dark:text-[#bbb] mb-2">{education.degree}</p>
                  <p className="text-[16px] text-[#999]">{education.faculty}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education End */}

      {/* Certifications Start */}
      <section className="py-25 bg-[#f9f9f9] dark:bg-[rgba(255,255,255,0.03)]">
        <div className="container max-w-300 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h2 className="text-4xl text-amber-400 tracking-wide mb-6.25 relative inline-block after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("sections.certifications")}
                </h2>
                <span className="block absolute top-0 text-7xl leading-3.5 font-bold text-[rgba(68,68,68,0.1)] dark:text-[rgba(255,255,255,0.2)]  opacity-80">05</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <ul className="text-[16px] leading-7 text-[#777] dark:text-[#bbb] list-none pl-0 grid grid-cols-1 md:grid-cols-2 gap-3">
                {certificationsList.map((cert: Certification, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-3 text-[#777] dark:text-[#bbb] mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold">{cert.name}</span>
                      <br />
                      <span className="text-[#999] text-sm">{cert.issuer} • {cert.year}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Certifications End */}

      {/* Social Media Start */}
      <section className="py-25">
        <div className="container max-w-300 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h2 className="text-4xl text-rose-400 tracking-wide mb-6.25 relative inline-block after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {social.title || t("sections.social")}
                </h2>
                <span className="block absolute top-0 text-7xl leading-3.5 font-bold text-[rgba(68,68,68,0.1)] dark:text-[rgba(255,255,255,0.2)]  opacity-80">06</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <ul className="list-none p-0 flex flex-wrap justify-end gap-4">
                {social.accounts.map((account: SocialAccount, index: number) => {
                  const config = socialConfig[account.title]
                  const Icon = config?.icon
                  return (
                    <li key={index}>
                      <a
                        href={account.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative group"
                      >
                        <span className="absolute -top-9.5 left-1/2 -translate-x-1/2 px-2.5 py-2.25 bg-black/65 text-white text-xs tracking-wide min-w-30 rounded text-center invisible opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:-top-11.5 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:border-6 after:border-transparent after:border-t-black/65 after:-bottom-3">
                          {account.title}
                        </span>

                        <i
                          className={`flex h-25 w-25 items-center justify-center rounded-full text-[#999] bg-black/10 transition-all duration-300 group-hover:text-white hover:scale-110 ${config?.hoverBg}`}
                        >
                          {Icon && <Icon className="w-8.5 h-8.5" />}
                        </i>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Social Media End */}

      {/* Footer Start */}
      <footer className="relative py-10 text-[13px] bg-[#f9f9f9] dark:bg-[rgba(255,255,255,0.03)]">
        <div className="container max-w-300 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <div className="text-[#999]">
                {t("meta.footer")} {new Date().getFullYear()}
              </div>
            </div>
            <div className="md:col-span-1 relative text-right">
              <a
                href="#tc-main"
                className="absolute z-10 top-1/2 right-0 -translate-y-1/2 h-9 w-9 leading-9 text-center rounded-full bg-black/10 text-[#999] no-underline transition-all duration-300 hover:bg-[#222] hover:text-white flex items-center justify-center"
                title={t("meta.scroll_top_label")}
              >
                <ChevronUp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </main>
  );
}