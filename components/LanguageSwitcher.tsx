"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const buttonBase =
    "px-3 py-1 text-xs rounded-md transition-colors border";

  return (
    <div className="flex items-center gap-2 bg-card font-mono border border-outline rounded-lg p-1">
      <button
        onClick={() => setLanguage("es")}
        className={`${buttonBase} ${
          language === "es"
            ? "bg-outline text-foreground border-outline"
            : "text-[#9aa5ce] border-transparent hover:text-foreground"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`${buttonBase} ${
          language === "en"
            ? "bg-outline text-foreground border-outline"
            : "text-[#9aa5ce] border-transparent hover:text-foreground"
        }`}
      >
        EN
      </button>

    </div>
  );
}