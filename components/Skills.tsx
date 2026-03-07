"use client";

import { useSections } from "@/hooks/useSections";
import { useSkills } from "@/hooks/useSkills";

export default function Skills() {

  const { data: sections } = useSections();
  const { data: skills } = useSkills();

  return (
    <section id="skills">
      <p className="text-[#565f89] mb-6">&#47;&#47; {sections?.skills}</p>
      <div className="flex flex-wrap gap-2">
        {skills?.map((skill: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 text-sm rounded-full border border-[#33467C] bg-[#16161F] text-[#9ece6a] 
                            hover:bg-[#9e68ff] hover:text-[#16161F] transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}