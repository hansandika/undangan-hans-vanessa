import { wedding } from '../data/wedding'
import { useCountdown } from '../hooks/useCountdown'
import { useI18n } from '../i18n/LocaleContext'
import { formatWeddingDate } from '../i18n/locale'
import { HappinessDivider, SectionKicker } from './Ornaments'
import { Reveal } from './Reveal'

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

export function Hero() {
  const { locale, t } = useI18n()
  const countdown = useCountdown(wedding.weddingDate)

  return (
    <section className="px-5 pb-6 pt-16 sm:pt-20">
      <Reveal>
        <SectionKicker>{t.hero.kicker}</SectionKicker>
        <h2 className="mt-2 text-center font-display text-5xl text-ink sm:text-6xl">
          {wedding.couple.displayNames}
        </h2>
        <HappinessDivider className="mt-4" />
        <p className="mx-auto mt-6 max-w-md text-center font-display text-lg leading-relaxed text-ink-soft italic sm:text-xl">
          {t.hero.poetic}
        </p>
      </Reveal>

      <Reveal delayMs={120} className="mx-auto mt-10 max-w-[280px] sm:max-w-[320px]">
        <div className="arch-frame float-soft aspect-[3/4]">
          <img src={wedding.hero.photo} alt={wedding.couple.displayNames} />
        </div>
      </Reveal>

      <Reveal delayMs={180} className="mt-12">
        {countdown.completed ? (
          <p className="text-center font-display text-2xl text-cinnabar">{t.hero.completed}</p>
        ) : (
          <>
            <p
              className={`text-center text-[11px] text-ink-soft ${
                locale === 'zh' ? 'tracking-[0.2em]' : 'uppercase tracking-[0.28em]'
              }`}
            >
              {t.hero.countdownLabel}
            </p>
            <div className="mx-auto mt-4 grid max-w-md grid-cols-4 gap-2 sm:gap-3">
              {[
                { label: t.hero.day, value: countdown.days, raw: true },
                { label: t.hero.hour, value: countdown.hours },
                { label: t.hero.minute, value: countdown.minutes },
                { label: t.hero.second, value: countdown.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-gold/40 bg-paper/90 px-1 py-3 text-center shadow-sm"
                >
                  <div className="font-display text-2xl font-semibold text-cinnabar-deep sm:text-3xl">
                    {item.raw ? item.value : pad(item.value)}
                  </div>
                  <div
                    className={`mt-1 text-[10px] text-ink-soft ${
                      locale === 'zh' ? 'tracking-[0.1em]' : 'uppercase tracking-[0.18em]'
                    }`}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center font-display text-base text-ink-soft">
              {formatWeddingDate(wedding.weddingDate, locale)}
            </p>
          </>
        )}
      </Reveal>
    </section>
  )
}
