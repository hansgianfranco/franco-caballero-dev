export function resolveLang(lang?: string) {
  if (!lang) return "en";
  const normalized = lang.toLowerCase().slice(0, 2);
  if (normalized === "es") return "es";
  return "en";
}