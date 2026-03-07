import type { Project, Sections } from "@/types/resume";

export default function Projects({ projects, sections }: { projects: Project[], sections: Sections}) {

    return (
        <section id="projects">
            <p className="text-[#565f89] mb-6">&#47;&#47; {sections?.projects}</p>
            <div className="grid md:grid-cols-2 gap-6">
                {projects?.map((project, i) => (
                    <div key={i} className="bg-[#1f1f2e] border border-[#33467C] p-6 rounded-lg hover:border-[#9e68ff] duration-300">
                        <h3 className="text-[#9e68ff] text-lg font-semibold">{project.name}</h3>
                        <p className="text-sm mt-2 text-[#C0CAF5]">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies.map((tech: string, id: number) => (
                                <span key={id} className="text-xs px-3 py-1 bg-[#16161F] border border-[#33467C] rounded-full text-[#9ece6a]">{tech}</span>
                            ))}
                        </div>
                        {project.url && (
                            <a href={project.url} target="_blank" className="mt-4 inline-block text-sm hover:text-[#9e68ff]">Live</a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}