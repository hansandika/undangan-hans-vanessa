import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { copy, type Copy } from "../i18n/copy";
import {
  detectLocale,
  guestNameFromSearch,
  storeLocale,
} from "../i18n/locale";
import type { Locale } from "../data/wedding";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Copy;
  guestName: string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectLocale());
  const [guestName] = useState(() =>
    typeof window === "undefined" ? "" : guestNameFromSearch(),
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = copy[locale].documentTitle;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    storeLocale(next);
  };

  const value = useMemo(
    () => ({ locale, setLocale, t: copy[locale], guestName }),
    [locale, guestName],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
