import type { Meta } from "@/types/resume";

export default function Footer({ meta}: {meta: Meta}) {

    return (
    <footer className="border-t border-[#33467C] py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row font-mono justify-between items-center text-sm text-[#7aa2f7]">
          <p>{meta?.footer}</p>

          <a
            href="#main"
            className="mt-4 md:mt-0 hover:text-[#9e68ff] transition-colors"
          >
            ↑ Top
          </a>
        </div>
      </footer>
    );
}