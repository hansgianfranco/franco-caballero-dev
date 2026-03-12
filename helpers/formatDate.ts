export function formatDate(date: string, lang: string) {
  return new Date(date).toLocaleDateString(
    lang === "es" ? "es-ES" : "en-US",
    { month: "short", year: "numeric" }
  );
}