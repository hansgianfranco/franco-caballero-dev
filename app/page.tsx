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
} from "lucide-react";

const PersonalInfo = ({ t }) => {
  const contact = t("personal.contact", { returnObjects: true });

  if (!contact) return null;

  return (
    <ul className="list-none m-0 p-0 text-[#bbb]">
      <li className="pb-[10px] mb-[10px] border-b border-[rgba(255,255,255,0.1)] flex items-center">
        <Mail className="w-4 h-4 mr-2 text-[#bbb]" />
        <a href={`mailto:${contact.email}`} className="text-[#bbb] no-underline hover:text-white transition-colors">
          {contact.email}
        </a>
      </li>
      <li className="pb-[10px] mb-[10px] border-b border-[rgba(255,255,255,0.1)] flex items-center">
        <Phone className="w-4 h-4 mr-2 text-[#bbb]" />
        <span>{contact.phone}</span>
      </li>
      <li className="pb-[10px] mb-[10px] border-b border-[rgba(255,255,255,0.1)] flex items-center">
        <PinIcon className="w-4 h-4 mr-2 text-[#bbb]" />
        <span>{contact.location}</span>
      </li>
      {contact.remote && (
        <li className="flex items-center">
          <Globe className="w-4 h-4 mr-2 text-[#bbb]" />
          <span>{contact.remote_label || "Remote OK"}</span>
        </li>
      )}
    </ul>
  );
};

export default function Home() {
  const { t } = useLanguage();

  const profileSummary = t("profile.summary", { returnObjects: true }) || [];
  const coreStrengths = t("profile.core_strengths", { returnObjects: true }) || [];
  const experienceList = t("experience", { returnObjects: true }) || [];
  const skillsData = t("skills", { returnObjects: true }) || {};
  const skillsTitles = skillsData.titles || {};
  const certificationsList = t("certifications", { returnObjects: true }) || [];
  const education = t("education", { returnObjects: true }) || {};
  const social = t("social", { returnObjects: true }) || {};

  return (
    <main className="bg-[#232323] text-[#bbb] relative" id="tc-main">
      <LanguageSwitcher />

      {/* About Start */}
      <section className="py-[100px]">
        <div className="container max-w-[1200px] mx-auto px-4">
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
              <div className="h-[45px]"></div>
              <div>
                <div className="mb-2">
                  <h1 className="text-[42px] leading-none text-[#bbb] font-bold">{t("personal.name")}</h1>
                </div>
                <div className="mb-2 relative">
                  <p className="text-[20px] text-[#bbb] font-['Roboto'] relative before:content-[''] before:absolute before:h-px before:w-20 before:bg-white/70 before:top-1/2 before:-left-[87px] before:-translate-y-1/2">
                    {t("personal.title")}
                  </p>
                </div>
                <p className="text-md text-[#999] mt-2">{t("personal.specialization")}</p>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="h-[45px]"></div>
              <PersonalInfo t={t} />
            </div>
          </div>
        </div>
      </section>
      {/* About End */}

      {/* Introduction Start */}
      <section className="py-[100px] bg-[rgba(255,255,255,0.03)]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h2 className="text-4xl tracking-wide mb-[25px] relative inline-block text-[#bbb] after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("sections.profile")}
                </h2>
                <span className="block absolute top-0 text-7xl font-bold text-[rgba(255,255,255,0.2)] opacity-80">01</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div>
                {profileSummary.map((paragraph, index) => (
                  <p key={index} className="text-[16px] text-[#bbb] font-['Roboto'] leading-[26px] mb-[30px]">
                    {paragraph}
                  </p>
                ))}

                <h3 className="text-[18px] font-bold text-[#bbb] mb-3 flex items-center">
                  {t("sections.strengths_title")}
                </h3>
                <ul className="text-[16px] text-[#bbb] font-['Roboto'] leading-[26px] list-none pl-0 mb-[30px]">
                  {coreStrengths.map((strength, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[16px] text-[#bbb] font-['Roboto'] leading-[26px] italic border-l-4 border-[#777] pl-4">
                  {t("profile.career_goal")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction End */}

      {/* Work Start */}
      <section className="py-[100px]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h2 className="text-4xl tracking-wide mb-[25px] relative inline-block text-[#bbb] after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("sections.experience")}
                </h2>
                <span className="block absolute top-0 text-7xl font-bold text-[rgba(255,255,255,0.2)] opacity-80">02</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-5">
                {experienceList.map((job, index) => (
                  <div key={index} className="mb-[45px] pb-[45px] border-b border-[rgba(255,255,255,0.1)] last:border-0 last:mb-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-[#bbb]" />
                      <p className="text-[#bbb]">{job.period}</p>
                    </div>
                    <div>
                      <h3 className="text-[28px] mb-2 text-[#bbb] font-bold">{job.position}</h3>
                      <p className="text-[18px] text-[#bbb] mb-4">
                        {job.company} {job.location && <span className="text-[#999]">• {job.location}</span>}
                      </p>
                      {job.responsibilities.map((resp, idx) => (
                        <p key={idx} className="text-[16px] text-[#bbb] font-['Roboto'] leading-[26px] flex items-start mb-2">
                          <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
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
      <section className="py-[100px] bg-[rgba(255,255,255,0.03)]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h2 className="text-4xl tracking-wide mb-[25px] relative inline-block text-[#bbb] after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("sections.skills")}
                </h2>
                <span className="block absolute top-0 text-7xl font-bold text-[rgba(255,255,255,0.2)] opacity-80">03</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#bbb] mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-[#bbb]" />
                    {skillsTitles.frontend || "Frontend"}
                  </h3>
                  <ul className="text-[15px] text-[#bbb] font-['Roboto'] leading-[26px] list-disc pl-5">
                    {skillsData.frontend?.map((skill, index) => (
                      <li key={index} className="mb-1">{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#bbb] mb-4 flex items-center">
                    <Server className="w-5 h-5 mr-2 text-[#bbb]" />
                    {skillsTitles.backend || "Backend"}
                  </h3>
                  <ul className="text-[15px] text-[#bbb] font-['Roboto'] leading-[26px] list-disc pl-5">
                    {skillsData.backend?.map((skill, index) => (
                      <li key={index} className="mb-1">{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#bbb] mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-[#bbb]" />
                    {skillsTitles.databases || "Databases"}
                  </h3>
                  <ul className="text-[15px] text-[#bbb] font-['Roboto'] leading-[26px] list-disc pl-5">
                    {skillsData.databases?.map((skill, index) => (
                      <li key={index} className="mb-1">{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#bbb] mb-4 flex items-center">
                    <Wrench className="w-5 h-5 mr-2 text-[#bbb]" />
                    {skillsTitles.cloud_devops || "Cloud & DevOps"}
                  </h3>
                  <ul className="text-[15px] text-[#bbb] font-['Roboto'] leading-[26px] list-disc pl-5">
                    {skillsData.cloud_devops?.map((skill, index) => (
                      <li key={index} className="mb-1">{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-[#bbb] mb-4 flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2 text-[#bbb]" />
                    {skillsTitles.cms_ecommerce || "CMS & E-commerce"}
                  </h3>
                  <ul className="text-[15px] text-[#bbb] font-['Roboto'] leading-[26px] list-disc pl-5 columns-2">
                    {skillsData.cms_ecommerce?.map((skill, index) => (
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
      <section className="py-[100px]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h2 className="text-4xl tracking-wide mb-[25px] relative inline-block text-[#bbb] after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("sections.education")}
                </h2>
                <span className="block absolute top-0 text-7xl font-bold text-[rgba(255,255,255,0.2)] opacity-80">04</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="mb-[45px] pb-[45px] border-b border-[rgba(255,255,255,0.1)] last:border-0 last:mb-0 last:pb-0">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-[#bbb]" />
                  <p className="text-[#bbb]">{education.period}</p>
                </div>
                <div>
                  <h3 className="text-[28px] mb-2 leading-none text-[#bbb] font-bold">{education.university}</h3>
                  <p className="text-[18px] text-[#bbb] mb-2">{education.degree}</p>
                  <p className="text-[16px] text-[#999]">{education.faculty}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education End */}

      {/* Certifications Start */}
      <section className="py-[100px] bg-[rgba(255,255,255,0.03)]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h2 className="text-4xl tracking-wide mb-[25px] relative inline-block text-[#bbb] after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("sections.certifications")}
                </h2>
                <span className="block absolute top-0 text-7xl font-bold text-[rgba(255,255,255,0.2)] opacity-80">05</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <ul className="text-[16px] leading-7 text-[#bbb] list-none pl-0 grid grid-cols-1 md:grid-cols-2 gap-3">
                {certificationsList.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-3 text-[#bbb] mt-1 flex-shrink-0" />
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
      <section className="py-[100px]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h2 className="text-4xl tracking-wide mb-[25px] relative inline-block text-[#bbb] after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {social.title || t("sections.social")}
                </h2>
                <span className="block absolute top-0 text-7xl font-bold text-[rgba(255,255,255,0.2)] opacity-80">06</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <ul className="list-none p-0 flex flex-wrap justify-end gap-4">
                <li>
                  <a 
                    href="https://linkedin.com/in/francocaballero" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block relative group"
                  >
                    <span className="absolute -top-[38px] left-1/2 -translate-x-1/2 px-[10px] py-[9px] bg-black/65 text-white text-xs tracking-wide min-w-[120px] rounded text-center invisible opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:-top-[46px] after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:border-6 after:border-transparent after:border-t-black/65 after:-bottom-3">
                      {social.linkedin || "LinkedIn"}
                    </span>
                    <i className="flex h-[100px] w-[100px] items-center justify-center rounded-full text-[#999] bg-black/10 transition-all duration-300 group-hover:bg-[#0077b5] group-hover:text-white hover:scale-110">
                      <Linkedin className="w-[34px] h-[34px]" />
                    </i>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/francocaballero" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block relative group"
                  >
                    <span className="absolute -top-[38px] left-1/2 -translate-x-1/2 px-[10px] py-[9px] bg-black/65 text-white text-xs tracking-wide min-w-[120px] rounded text-center invisible opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:-top-[46px] after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:border-6 after:border-transparent after:border-t-black/65 after:-bottom-3">
                      {social.github || "GitHub"}
                    </span>
                    <i className="flex h-[100px] w-[100px] items-center justify-center rounded-full text-[#999] bg-black/10 transition-all duration-300 group-hover:bg-[#333] group-hover:text-white hover:scale-110">
                      <Github className="w-[34px] h-[34px]" />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Social Media End */}

      {/* Footer Start */}
      <footer className="relative py-10 text-[13px] bg-[rgba(255,255,255,0.03)]">
        <div className="container max-w-[1200px] mx-auto px-4">
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