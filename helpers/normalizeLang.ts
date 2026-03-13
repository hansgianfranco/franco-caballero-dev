export type Language = "es" | "en";

export function normalizeLang(lang: string): Language {
    return lang === "es" ? "es" : "en";
}