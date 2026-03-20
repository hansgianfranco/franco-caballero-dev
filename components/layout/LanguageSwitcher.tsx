"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = pathname.startsWith("/en") ? "en" : "es";

  function changeLang(lang: "es" | "en") {
    if (lang === currentLang) return;
    if (!pathname) return;
    const newPath = pathname.replace(/^\/(es|en)/, `/${lang}`);
    router.replace(newPath);
  }

  const buttonBase = "px-3 py-1 text-xs rounded-md transition-all border cursor-pointer";

  return (
    <div className="flex items-center gap-2 bg-card font-mono border border-outline hover:border-primary rounded-lg p-1 transition-all ease-in">
      <button
        onClick={() => changeLang("es")}
        aria-pressed={currentLang === "es"}
        aria-label="Cambiar idioma a español"
        className={`${buttonBase} ${currentLang === "es"
          ? "bg-linear-to-r from-secondary to-primary text-background hover:from-primary hover:to-secondary transition-colors ease-in"
          : "text-[#9aa5ce] border-transparent hover:text-foreground"
          }`}
      >
        ES
      </button>

      <button
        onClick={() => changeLang("en")}
        aria-pressed={currentLang === "en"}
        aria-label="Change language to English"
        className={`${buttonBase} ${currentLang === "en"
          ? "bg-linear-to-r from-secondary to-primary text-background hover:from-primary hover:to-secondary transition-colors ease-in"
          : "text-[#9aa5ce] border-transparent hover:text-foreground"
          }`}
      >
        EN
      </button>
    </div>
  );
}