import { useState } from 'react'
import { wedding } from '../data/wedding'
import { useI18n } from '../i18n/LocaleContext'
import { HappinessDivider, SectionKicker } from './Ornaments'
import { Reveal } from './Reveal'

export function Gift() {
  const { locale, t } = useI18n()
  const [copied, setCopied] = useState<string | null>(null)

  async function copyNumber(number: string) {
    try {
      await navigator.clipboard.writeText(number)
      setCopied(number)
      window.setTimeout(() => setCopied(null), 2200)
    } catch {
      setCopied('error')
      window.setTimeout(() => setCopied(null), 2200)
    }
  }

  return (
    <section id="hadiah" className="px-5 py-12">
      <Reveal>
        <SectionKicker>{t.gift.kicker}</SectionKicker>
        <h2 className="mt-2 text-center font-display text-4xl text-ink sm:text-5xl">{t.gift.title}</h2>
        <HappinessDivider className="mt-4" />
        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-ink-soft">
          {t.gift.intro}
        </p>
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-lg gap-4">
        {wedding.gift.accounts.map((account, index) => (
          <Reveal key={`${account.bankKey}-${account.number}`} delayMs={index * 80}>
            <article className="relative overflow-hidden rounded-[1.6rem] border border-gold/35 bg-paper px-6 py-6 text-center shadow-sm">
              <div className="seal-stamp pointer-events-none absolute -right-2 -top-1 text-lg font-display">
                囍
              </div>
              <p
                className={`text-[11px] text-cinnabar ${
                  locale === 'zh' ? 'tracking-[0.16em]' : 'uppercase tracking-[0.22em]'
                }`}
              >
                {t.gift.banks[account.bankKey]}
              </p>
              <p className="mt-3 font-display text-3xl tracking-wide text-ink">{account.number}</p>
              <p className="mt-1 text-sm text-ink-soft">
                {t.gift.accountOf} {account.name}
              </p>
              <button
                type="button"
                onClick={() => void copyNumber(account.number)}
                className={`btn-outline-gold mt-5 rounded-full px-5 py-2.5 text-[11px] font-medium transition ${
                  locale === 'zh' ? 'tracking-[0.14em]' : 'uppercase tracking-[0.2em]'
                }`}
              >
                {copied === account.number ? t.gift.copied : t.gift.copy}
              </button>
            </article>
          </Reveal>
        ))}
      </div>
      {copied === 'error' ? (
        <p className="mt-3 text-center text-sm text-ink-soft">{t.gift.copyError}</p>
      ) : null}
    </section>
  )
}
