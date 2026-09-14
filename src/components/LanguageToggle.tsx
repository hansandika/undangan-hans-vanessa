import { LOCALES } from "../i18n/locale";
import { useLocale } from "../context/LocaleContext";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={`inline-flex overflow-hidden rounded-full border border-gold/50 bg-ivory/90 text-[11px] tracking-[0.18em] shadow-sm backdrop-blur ${className}`}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`px-2.5 py-1.5 transition ${
            locale === code
              ? "bg-cinnabar text-ivory"
              : "text-ink-soft hover:bg-gold-soft/40"
          }`}
          aria-pressed={locale === code}
        >
          {t.lang[code]}
        </button>
      ))}
    </div>
  );
}
