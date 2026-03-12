import type { Personal, Profile, Social, SocialAccount } from "@/types/resume";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero({ personal, profile, social }: { personal: Personal, profile: Profile, social: Social }) {

    const email = personal?.contact?.email
        ? atob(personal.contact.email)
        : "";

    const summary = profile?.summary || [];

    return (
        <section id="about" className="flex flex-col md:flex-row items-start gap-10" aria-labelledby="about-title">
            <h2 id="about-title" className="sr-only">About</h2>
            <motion.div
                className="flex-1 space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-5xl font-bold text-[#9e68ff]">
                    {personal?.name}
                </h1>
                <h2 className="text-2xl text-[#9ece6a]">
                    {personal?.title}
                </h2>
                <address 
                    className="flex justify-start gap-6"
                    itemProp="contactPoint" 
                    itemScope 
                    itemType="https://schema.org/ContactPoint"
                >
                    <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-2 hover:text-[#9e68ff]"
                        itemProp="email"
                    >
                        <Mail size={18} /> Email
                    </a>
                    {social?.accounts?.map((account: SocialAccount, i: number) => {
                        if (account.id === "github")
                            return (
                                <a
                                    key={i}
                                    href={account.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-[#9e68ff]"
                                >
                                    <Github size={18} /> Github
                                </a>
                            );
                        if (account.id === "linkedin")
                            return (
                                <a
                                    key={i}
                                    href={account.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-[#9e68ff]"
                                >
                                    <Linkedin size={18} /> LinkedIn
                                </a>
                            );
                        return null;
                    })}
                </address>
                <div className="mt-6 max-w-3xl space-y-3 text-[#C0CAF5]">
                    {summary.slice(0, 3).map((paragraph: string, i: number) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
                <div className="flex gap-4 pt-4">
                    {personal?.resume?.file && (
                        <a
                            href={personal.resume.file}
                            download
                            className="px-6 py-3 bg-[#1f1f2e] border border-[#33467C] rounded-lg hover:bg-[#33467C]"
                        >
                            {personal.resume?.title}
                        </a>
                    )}
                </div>
            </motion.div>
            <motion.div
                className="w-full md:w-1/2 shrink-0"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className="bg-[#1f1f2e] border border-[#33467C] rounded-lg p-6">
                    <pre className="whitespace-pre-wrap break-words text-sm sm:text-base">
                        <code>
                        <span className="text-[#7aa2f7]">export const</span> developer = {"{"}
                        {"\n"}  name: <span className="text-[#9ece6a]">&quot;{personal?.name}&quot;</span>,
                        {"\n"}  role: <span className="text-[#9ece6a]">&quot;{personal?.title}&quot;</span>,
                        {"\n"}  location: <span className="text-[#9ece6a]">&quot;{personal?.contact?.location}&quot;</span>,
                        {"\n"}  remote: <span className="text-[#f7768e]">
                            {personal?.contact?.remote ? "true" : "false"}
                        </span>,
                        {"\n"}  stack: [
                        {"\n"}    &quot;Next.js&quot;,
                        {"\n"}    &quot;React&quot;,
                        {"\n"}    &quot;Node.js&quot;,
                        {"\n"}    &quot;PostgreSQL&quot;,
                        {"\n"}    &quot;AWS&quot;
                        {"\n"}  ]
                        {"\n"}{"}"}
                        </code>
                    </pre>
                    </div>
            </motion.div>
        </section>
    );
}