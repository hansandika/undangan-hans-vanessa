import type { Locale } from "../data/wedding";

const STORAGE_KEY = "hans-vanessa-locale";

export const LOCALES: Locale[] = ["id", "en", "zh"];

export function isLocale(value: string | null): value is Locale {
  return value === "id" || value === "en" || value === "zh";
}

/** Map navigator.language prefixes: id* / en* / zh*. */
export function localeFromNavigator(language: string): Locale {
  const tag = language.toLowerCase();
  if (tag.startsWith("zh")) return "zh";
  if (tag.startsWith("en")) return "en";
  if (tag.startsWith("id")) return "id";
  return "id";
}

export function readStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function storeLocale(locale: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* private mode */
  }
}

export function detectLocale(): Locale {
  const stored = readStoredLocale();
  if (stored) return stored;
  if (typeof navigator === "undefined") return "id";
  return localeFromNavigator(navigator.language || "id");
}

export function guestNameFromSearch(search = window.location.search): string {
  const raw = new URLSearchParams(search).get("to");
  if (!raw) return "";
  return decodeURIComponent(raw.replace(/\+/g, " ")).trim();
}
