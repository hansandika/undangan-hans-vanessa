import { useI18n } from '../i18n/LocaleContext'
import { DoubleHappiness } from './Ornaments'
import { Reveal } from './Reveal'

export function Verse() {
  const { t } = useI18n()

  return (
    <section className="px-5 py-10">
      <Reveal className="relative mx-auto max-w-lg overflow-hidden rounded-[2rem] border border-gold/35 bg-paper/80 px-6 py-8 text-center shadow-sm">
        <DoubleHappiness className="pointer-events-none absolute -right-2 -top-3 text-7xl text-cinnabar/10" />
        <p className="relative font-display text-xl leading-relaxed text-ink italic sm:text-2xl">
          {t.verse.text}
        </p>
        <p className="relative mt-4 text-[11px] tracking-[0.16em] text-gold-deep">{t.verse.source}</p>
      </Reveal>
    </section>
  )
}
