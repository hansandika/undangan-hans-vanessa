import { wedding } from '../data/wedding'
import { useI18n } from '../i18n/LocaleContext'
import { formatWeddingDate } from '../i18n/locale'
import { GlassIcon, HappinessDivider, RingsIcon, SectionKicker } from './Ornaments'
import { Reveal } from './Reveal'

export function Events() {
  const { locale, t } = useI18n()

  return (
    <section id="acara" className="px-5 py-12">
      <Reveal>
        <SectionKicker>{t.events.kicker}</SectionKicker>
        <h2 className="mt-2 text-center font-display text-4xl text-ink sm:text-5xl">{t.events.title}</h2>
        <HappinessDivider className="mt-4" />
        <p className="mx-auto mt-4 max-w-md text-center text-sm text-ink-soft">{t.events.note}</p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-2">
        {wedding.events.map((event, index) => {
          const copy = t.events[event.id]
          return (
            <Reveal key={event.id} delayMs={index * 100}>
              <article className="relative overflow-hidden rounded-[1.75rem] border border-gold/35 bg-paper px-6 py-8 text-center shadow-sm">
                <div className="pointer-events-none absolute inset-0 lattice-wash opacity-30" />
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center text-cinnabar">
                  {event.id === 'akad' ? <RingsIcon /> : <GlassIcon />}
                </div>
                <h3 className="relative mt-3 font-display text-3xl text-ink">{copy.title}</h3>
                <p className="relative mt-1 text-xs tracking-[0.16em] text-gold-deep">{copy.subtitle}</p>
                <div className="gold-rule relative mx-auto my-5 w-20" />
                <p className="relative font-display text-lg text-ink">
                  {formatWeddingDate(wedding.weddingDate, locale)}
                </p>
                <p className="relative mt-1 text-sm text-ink-soft">{copy.time}</p>
                <p className="relative mt-4 font-medium text-ink">{copy.venue}</p>
                <p className="relative mt-1 text-sm leading-relaxed text-ink-soft">{copy.address}</p>
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn-outline-gold relative mt-6 inline-flex rounded-full px-5 py-2.5 text-[11px] font-medium transition ${
                    locale === 'zh' ? 'tracking-[0.14em]' : 'uppercase tracking-[0.2em]'
                  }`}
                >
                  {t.events.maps}
                </a>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
