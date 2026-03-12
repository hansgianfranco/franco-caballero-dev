import type { Meta } from "@/types/ui";

export default function Footer({ meta}: {meta: Meta}) {

    return (
    <footer className="border-t border-outline py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row font-mono justify-between items-center text-sm text-accent">
          <p>{meta?.footer}</p>

          <a
            href="#main"
            className="mt-4 md:mt-0 hover:text-primary transition-colors"
          >
            ↑ Top
          </a>
        </div>
      </footer>
    );
}