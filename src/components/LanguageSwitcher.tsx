import { localeLabels } from '../i18n/copy'
import { useI18n } from '../i18n/LocaleContext'
import { LOCALES } from '../i18n/types'

type LanguageSwitcherProps = {
  variant?: 'light' | 'dark'
}

export function LanguageSwitcher({ variant = 'light' }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useI18n()
  const dark = variant === 'dark'

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={`inline-flex items-center rounded-full border px-1 py-1 text-[11px] tracking-[0.12em] backdrop-blur-md ${
        dark
          ? 'border-gold/40 bg-ink/35 text-ivory'
          : 'border-gold/35 bg-ivory/90 text-ink-soft shadow-sm'
      }`}
    >
      {LOCALES.map((code) => {
        const active = locale === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 font-medium transition ${
              active
                ? dark
                  ? 'bg-cinnabar text-ivory'
                  : 'bg-cinnabar text-ivory'
                : dark
                  ? 'text-ivory/75 hover:text-ivory'
                  : 'text-ink-soft hover:text-ink'
            }`}
          >
            {localeLabels[code]}
          </button>
        )
      })}
    </div>
  )
}
