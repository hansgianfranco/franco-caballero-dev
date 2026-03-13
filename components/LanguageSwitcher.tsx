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

  const buttonBase =
    "px-3 py-1 text-xs rounded-md transition-colors border";

  return (
    <div className="flex items-center gap-2 bg-card font-mono border border-outline rounded-lg p-1">
      <button
        onClick={() => changeLang("es")}
        aria-pressed={currentLang === "es"}
        className={`${buttonBase} ${currentLang === "es"
          ? "bg-outline text-foreground border-outline"
          : "text-[#9aa5ce] border-transparent hover:text-foreground"
          }`}
      >
        ES
      </button>

      <button
        onClick={() => changeLang("en")}
        aria-pressed={currentLang === "en"}
        className={`${buttonBase} ${currentLang === "en"
          ? "bg-outline text-foreground border-outline"
          : "text-[#9aa5ce] border-transparent hover:text-foreground"
          }`}
      >
        EN
      </button>
    </div>
  );
}