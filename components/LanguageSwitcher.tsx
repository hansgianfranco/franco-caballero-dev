"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const buttonBase =
    "px-3 py-1 text-xs rounded-md transition-colors border";

  return (
    <div className="flex items-center gap-2 bg-[#1f1f2e] border border-[#33467C] rounded-lg p-1">

      <button
        onClick={() => setLanguage("es")}
        className={`${buttonBase} ${
          language === "es"
            ? "bg-[#33467C] text-[#C0CAF5] border-[#33467C]"
            : "text-[#9aa5ce] border-transparent hover:text-[#C0CAF5]"
        }`}
      >
        ES
      </button>

      <button
        onClick={() => setLanguage("en")}
        className={`${buttonBase} ${
          language === "en"
            ? "bg-[#33467C] text-[#C0CAF5] border-[#33467C]"
            : "text-[#9aa5ce] border-transparent hover:text-[#C0CAF5]"
        }`}
      >
        EN
      </button>

    </div>
  );
}