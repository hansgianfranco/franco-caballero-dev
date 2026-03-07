"use client";

import { useSocial } from "@/hooks/useSocial";
import { useSections } from "@/hooks/useSections";
import ContactForm from "./ContactForm";

export default function Contact() {

  const { data: sections } = useSections();
  const { data: social } = useSocial();
  return (
    <section id="contact" className=" space-y-6">
      <p className="text-[#565f89]">&#47;&#47; {sections?.contact}</p>
      <h2 className="text-2xl text-[#9e68ff]">
        {social?.title}
      </h2>
      <ContactForm />
    </section>
  );
}