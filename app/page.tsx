"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { 
  Mail, 
  Phone, 
  Globe, 
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
  Instagram,
  Facebook
} from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="bg-[#232323] text-[#bbb] relative" id="tc-main">
      <LanguageSwitcher />
      
      {/* About Start*/}
      <section className="py-[100px]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-1 pl-2">
              <div className="rounded-lg overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
                <Image src="/images/profile.png" alt="Franco Caballero" width={200} height={200} className="w-full" />
              </div>
            </div>
            <div className="md:col-span-3 pl-2">
              <div className="h-[45px]"></div>
              <div>
                <div className="mb-2">
                  <h3 className="text-[42px] leading-none text-[#bbb]">{t("name")}</h3>
                </div>
                <div className="mb-2 relative">
                  <p className="text-[20px] text-[#bbb] font-['Roboto'] relative before:content-[''] before:absolute before:h-px before:w-20 before:bg-white/70 before:top-1/2 before:-left-[87px] before:-translate-y-1/2">{t("title")}</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="h-[45px]"></div>
              <ul className="list-none m-0 p-0 text-[#bbb]">
                <li className="pb-[10px] mb-[10px] border-b border-[rgba(255,255,255,0.1)] flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#bbb]" />
                  <a href="mailto:hansgianfranco@gmail.com" className="text-[#bbb] no-underline">
                    {t("email")}
                  </a>
                </li>
                <li className="pb-[10px] mb-[10px] border-b border-[rgba(255,255,255,0.1)] flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#bbb]" />
                  <span>{t("phone")}</span>
                </li>
                <li className="flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-[#bbb]" />
                  <span className="text-[#bbb]">{t("age")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* About End*/}

      {/* Introduction Start */}
      <section className="py-[100px] bg-[rgba(255,255,255,0.03)]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h3 className="text-4xl tracking-wide mb-[25px] relative inline-block text-[#bbb] after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("professional_profile_title")}
                </h3>
                <span className="block absolute top-0 text-7xl font-bold text-[rgba(255,255,255,0.2)] opacity-80">01</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div>
                <p className="text-[16px] text-[#bbb] font-['Roboto'] leading-[26px] mb-[30px] flex items-start">
                  <span>{t("professional_profile_desc1")}</span>
                </p>
                <p className="text-[16px] text-[#bbb] font-['Roboto'] leading-[26px] mb-[30px] flex items-start">
                  <span>{t("professional_profile_desc2")}</span>
                </p>
                <p className="text-[18px] font-bold text-[#bbb] mb-3 flex items-center">
                  {t("focus_title")}
                </p>
                <ul className="text-[16px] text-[#bbb] font-['Roboto'] leading-[26px] list-none pl-0 mb-[30px]">
                  <li className="flex items-start mb-2">
                    <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                    <span>{t("focus_item1")}</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                    <span>{t("focus_item2")}</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                    <span>{t("focus_item3")}</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                    <span>{t("focus_item4")}</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                    <span>{t("focus_item5")}</span>
                  </li>
                </ul>
                <p className="text-[16px] text-[#bbb] font-['Roboto'] leading-[26px] italic border-l-4 border-[#777] pl-4 flex items-start">
                  <span>{t("goal")}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction End */}

      {/* Work Start - Experiencia */}
      <section className="py-[100px]">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <div className="relative">
                <h3 className="text-4xl tracking-wide mb-[25px] relative inline-block text-[#bbb] after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("experience_title")}
                </h3>
                <span className="block absolute top-0 text-7xl font-bold text-[rgba(255,255,255,0.2)] opacity-80">02</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-5">
                {/* Trabajo 1 */}
                <div className="mb-[45px] pb-[45px] border-b border-[rgba(255,255,255,0.1)] last:border-0 last:mb-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 mb-2 text-[#bbb]" />
                    <p className="mb-[5px] text-[#bbb]">{t("job1_period")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <h3 className="text-[28px] mb-2 text-[#bbb]">{t("job1_position")}</h3>
                      <p className="text-[18px] text-[#bbb] mb-4">{t("job1_company")}</p>
                      <p className="text-[16px] text-[#bbb] font-['Roboto'] leading-[26px] flex items-start">
                        <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                        <span>{t("job1_desc")}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trabajo 2 */}
                <div className="mb-[45px] pb-[45px] border-b border-[rgba(255,255,255,0.1)] last:border-0 last:mb-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 mb-2 text-[#bbb]" />
                    <p className="mb-[5px] text-[#bbb]">{t("job2_period")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <h3 className="text-[28px] mb-2 text-[#bbb]">{t("job2_position")}</h3>
                      <p className="text-[18px] text-[#bbb] mb-4">{t("job2_company")}</p>
                      <p className="text-[16px] text-[#bbb] font-['Roboto'] leading-[26px] flex items-start">
                        <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                        <span>{t("job2_desc")}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trabajo 3 */}
                <div className="mb-[45px] pb-[45px] border-b border-[rgba(255,255,255,0.1)] last:border-0 last:mb-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 mb-2 text-[#bbb]" />
                    <p className="mb-[5px] text-[#bbb]">{t("job3_period")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <h3 className="text-[28px] mb-2 text-[#bbb]">{t("job3_position")}</h3>
                      <p className="text-[18px] text-[#bbb] mb-4">{t("job3_company")}</p>
                      <p className="text-[16px] text-[#bbb] font-['Roboto'] leading-[26px] flex items-start">
                        <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                        <span>{t("job3_desc")}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trabajo 4 */}
                <div className="mb-[45px] pb-[45px] border-b border-[rgba(255,255,255,0.1)] last:border-0 last:mb-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 mb-2 text-[#bbb]" />
                    <p className="mb-[5px] text-[#bbb]">{t("job4_period")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <h3 className="text-[28px] mb-2 text-[#bbb]">{t("job4_position")}</h3>
                      <p className="text-[18px] text-[#bbb] mb-4">{t("job4_company")}</p>
                      <p className="text-[16px] text-[#bbb] font-['Roboto'] leading-[26px] flex items-start">
                        <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                        <span>{t("job4_desc")}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trabajo 5 */}
                <div className="mb-[45px] pb-[45px] border-b border-[rgba(255,255,255,0.1)] last:border-0 last:mb-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 mb-2 text-[#bbb]" />
                    <p className="mb-[5px] text-[#bbb]">{t("job5_period")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <h3 className="text-[28px] mb-2 text-[#bbb]">{t("job5_position")}</h3>
                      <p className="text-[18px] text-[#bbb] mb-4">{t("job5_company")}</p>
                      <p className="text-[16px] text-[#bbb] font-['Roboto'] leading-[26px] mb-2">{t("job5_desc")}</p>
                      <ul className="text-[16px] leading-7 text-[#bbb] list-none pl-0">
                        <li className="flex items-start">
                          <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                          <span>{t("job5_list1")}</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                          <span>{t("job5_list2")}</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                          <span>{t("job5_list3")}</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                          <span>{t("job5_list4")}</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                          <span>{t("job5_list5")}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Trabajo 6 */}
                <div className="mb-[45px] pb-[45px] border-b border-[rgba(255,255,255,0.1)] last:border-0 last:mb-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 mb-2 text-[#bbb]" />
                    <p className="mb-[5px] text-[#bbb]">{t("job6_period")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <h3 className="text-[28px] mb-2 text-[#bbb]">{t("job6_position")}</h3>
                      <p className="text-[18px] text-[#bbb] mb-4">{t("job6_company")}</p>
                      <ul className="text-[16px] leading-7 text-[#bbb] list-none pl-0">
                        <li className="flex items-start">
                          <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                          <span>{t("job6_list1")}</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                          <span>{t("job6_list2")}</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                          <span>{t("job6_list3")}</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 mr-2 text-[#bbb] mt-1 flex-shrink-0" />
                          <span>{t("job6_list4")}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                <h3 className="text-4xl tracking-wide mb-[25px] relative inline-block text-[#bbb] after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("skills_title")}
                </h3>
                <span className="block absolute top-0 text-7xl font-bold text-[rgba(255,255,255,0.2)] opacity-80">03</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-[#bbb] mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-[#bbb]" />
                    {t("frontend_skills")}
                  </h4>
                  <p className="text-[15px] text-[#bbb] font-['Roboto'] leading-[26px]">
                    Angular, NodeJS, React, NextJs, Express, Gatsby, TypeScript, CSS3, HTML5, Stylus, Less, Pug, Sass, TailWind, Webpack,
                    BEM, Bootstrap, Redux, Responsive Design, Mobile First, Banners, JavaScript, Vue.js, Cross-Browsing, NPM
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#bbb] mb-4 flex items-center">
                    <Server className="w-5 h-5 mr-2 text-[#bbb]" />
                    {t("backend_skills")}
                  </h4>
                  <p className="text-[15px] text-[#bbb] font-['Roboto'] leading-[26px]">
                    Node, PHP, Laravel, Codeigniter, Django, Lumen, Spring Boot, Nginx, Apache.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#bbb] mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-[#bbb]" />
                    {t("database_skills")}
                  </h4>
                  <p className="text-[15px] text-[#bbb] font-['Roboto'] leading-[26px]">
                    GraphQL, MySQL, Firebase, SQLite, PostgreSQL, Oracle, SQL, MongoDB.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#bbb] mb-4 flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2 text-[#bbb]" />
                    {t("cms_tools")}
                  </h4>
                  <p className="text-[15px] text-[#bbb] font-['Roboto'] leading-[26px]">
                    Shopify, VTEX, Wordpress, Prestashop, Drupal, Magento, Moodle.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-xl font-bold text-[#bbb] mb-4 flex items-center">
                    <Wrench className="w-5 h-5 mr-2 text-[#bbb]" />
                    {t("general_skills")}
                  </h4>
                  <p className="text-[15px] text-[#bbb] font-['Roboto'] leading-[26px]">
                    SEO, GIT, API REST, OOP, Scrum, Google Analytics, Google Tag Manager, Google Webmaster Tools, Amazon Web Services
                    (EC2, S3, Lambda, SQS, SNS), Sketch, Semantics, Schema, Sonarqube, UX, Gitflow, PageRank, Mercurial, Jenkins,
                    Codeanywhere, VPS (Linode, Amazon, Digitalocean), SSL, RUP, Adobe Illustrator, Adobe Photoshop.
                  </p>
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
                <h3 className="text-4xl tracking-wide mb-[25px] relative inline-block text-[#bbb] after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("education_title")}
                </h3>
                <span className="block absolute top-0 text-7xl font-bold text-[rgba(255,255,255,0.2)] opacity-80">04</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="mb-[45px] pb-[45px] border-b border-[rgba(255,255,255,0.1)] last:border-0 last:mb-0 last:pb-0">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 mb-2 text-[#bbb]" />
                  <p className="mb-[5px] text-[#bbb]">{t("edu_period")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div>
                    <h3 className="text-[28px] mb-2 leading-none text-[#bbb]">{t("university")}</h3>
                    <p className="text-[18px] text-[#bbb] mb-2">{t("degree")}</p>
                    <p className="text-[16px] text-[#bbb]">{t("faculty")}</p>
                  </div>
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
                <h3 className="text-4xl tracking-wide mb-[25px] relative inline-block text-[#bbb] after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("certifications_title")}
                </h3>
                <span className="block absolute top-0 text-7xl font-bold text-[rgba(255,255,255,0.2)] opacity-80">05</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <ul className="text-[16px] leading-7 text-[#bbb] list-none pl-0">
                <li className="flex items-start mb-3">
                  <CheckCircle className="w-4 h-4 mr-3 text-[#bbb] mt-1 flex-shrink-0" />
                  <span>{t("cert1")}</span>
                </li>
                <li className="flex items-start mb-3">
                  <CheckCircle className="w-4 h-4 mr-3 text-[#bbb] mt-1 flex-shrink-0" />
                  <span>{t("cert2")}</span>
                </li>
                <li className="flex items-start mb-3">
                  <CheckCircle className="w-4 h-4 mr-3 text-[#bbb] mt-1 flex-shrink-0" />
                  <span>{t("cert3")}</span>
                </li>
                <li className="flex items-start mb-3">
                  <CheckCircle className="w-4 h-4 mr-3 text-[#bbb] mt-1 flex-shrink-0" />
                  <span>{t("cert4")}</span>
                </li>
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
                <h3 className="text-4xl tracking-wide mb-[25px] relative inline-block text-[#bbb] after:content-[''] after:absolute after:right-0 after:h-px after:w-5 after:bg-[rgba(255,255,255,0.7)] after:top-0">
                  {t("social_title")}
                </h3>
                <span className="block absolute top-0 text-7xl font-bold text-[rgba(255,255,255,0.2)] opacity-80">07</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <ul className="list-none p-0 text-right">
                <li className="inline-block m-2">
                  <a href="#" className="block relative group">
                    <span className="absolute -top-[38px] left-0 px-[10px] py-[9px] bg-black/65 text-white text-xs tracking-wide min-w-[120px] rounded text-center invisible opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:-top-[46px] after:content-[''] after:absolute after:left-5 after:border-6 after:border-transparent after:border-t-black/65 after:-bottom-3">
                      {t("soc1_label")}
                    </span>
                    <i className="flex h-[100px] w-[100px] items-center justify-center rounded-full text-[#999] bg-black/10 transition-colors duration-300 group-hover:bg-black/70 group-hover:text-white">
                      <Linkedin className="w-[34px] h-[34px]" />
                    </i>
                  </a>
                </li>
                <li className="inline-block m-2">
                  <a href="#" className="block relative group">
                    <span className="absolute -top-[38px] left-0 px-[10px] py-[9px] bg-black/65 text-white text-xs tracking-wide min-w-[120px] rounded text-center invisible opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:-top-[46px] after:content-[''] after:absolute after:left-5 after:border-6 after:border-transparent after:border-t-black/65 after:-bottom-3">
                      {t("soc2_label")}
                    </span>
                    <i className="flex h-[100px] w-[100px] items-center justify-center rounded-full text-[#999] bg-black/10 transition-colors duration-300 group-hover:bg-black/70 group-hover:text-white">
                      <Instagram className="w-[34px] h-[34px]" />
                    </i>
                  </a>
                </li>
                <li className="inline-block m-2">
                  <a href="#" className="block relative group">
                    <span className="absolute -top-[38px] left-0 px-[10px] py-[9px] bg-black/65 text-white text-xs tracking-wide min-w-[120px] rounded text-center invisible opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:-top-[46px] after:content-[''] after:absolute after:left-5 after:border-6 after:border-transparent after:border-t-black/65 after:-bottom-3">
                      {t("soc3_label")}
                    </span>
                    <i className="flex h-[100px] w-[100px] items-center justify-center rounded-full text-[#999] bg-black/10 transition-colors duration-300 group-hover:bg-black/70 group-hover:text-white">
                      <Facebook className="w-[34px] h-[34px]" />
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
              <div className="text-[#999] flex items-center">
                {t("footer")} {new Date().getFullYear()}
              </div>
            </div>
            <div className="md:col-span-1 relative text-right">
              <a
                href="#tc-main"
                className="absolute z-10 top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 h-9 w-9 leading-9 text-center rounded-full bg-black/10 text-[#999] no-underline transition-all duration-300 hover:bg-[#222] hover:text-white flex items-center justify-center"
                title={t("go_top")}
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