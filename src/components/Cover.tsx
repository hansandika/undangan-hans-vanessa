import { wedding, getGuestName } from '../data/wedding'
import { useI18n } from '../i18n/LocaleContext'
import { formatWeddingDate } from '../i18n/locale'
import { CloudMark, DoubleHappiness, HappinessDivider, LatticeCorner } from './Ornaments'
import { LanguageSwitcher } from './LanguageSwitcher'

type CoverProps = {
  onOpen: () => void
}

export function Cover({ onOpen }: CoverProps) {
  const { locale, t } = useI18n()
  const guestName = getGuestName(t.cover.defaultGuest)

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 py-10">
      <img
        src={wedding.cover.photo}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cinnabar-deep/75 via-ink/50 to-ink/80" />
      <div className="lattice-wash absolute inset-0 opacity-40 mix-blend-soft-light" />

      <LatticeCorner className="absolute left-4 top-4 h-16 w-16 text-gold/70" />
      <LatticeCorner className="absolute right-4 top-4 h-16 w-16 rotate-90 text-gold/70" />
      <LatticeCorner className="absolute bottom-4 left-4 h-16 w-16 -rotate-90 text-gold/50" />
      <LatticeCorner className="absolute bottom-4 right-4 h-16 w-16 rotate-180 text-gold/50" />

      <div className="absolute right-4 top-5 z-20 sm:right-6">
        <LanguageSwitcher variant="dark" />
      </div>

      <div className="cover-enter relative z-10 flex w-full max-w-md flex-col items-center text-center text-ivory">
        <CloudMark className="mb-2 h-7 w-16 text-gold/70" />
        <p
          className={`text-[11px] font-medium text-gold ${
            locale === 'zh' ? 'tracking-[0.28em]' : 'uppercase tracking-[0.38em]'
          }`}
        >
          {t.cover.kicker}
        </p>
        <DoubleHappiness className="mt-3 text-5xl text-gold drop-shadow-sm" />
        <HappinessDivider className="mt-2" />
        <h1 className="mt-2 font-script text-[4.2rem] leading-none text-[#f6ead4] drop-shadow-sm sm:text-8xl">
          {wedding.couple.displayNames}
        </h1>
        <p className="mt-3 font-display text-lg italic text-cream/90 sm:text-xl">
          {formatWeddingDate(wedding.weddingDate, locale)}
        </p>
        <p
          className={`mt-1 text-[10px] text-gold/80 ${
            locale === 'zh' ? 'tracking-[0.12em]' : 'uppercase tracking-[0.2em]'
          }`}
        >
          {t.cover.dateNote}
        </p>

        <div className="mt-8 w-full max-w-xs rounded-[1.75rem] border border-gold/40 bg-cinnabar-deep/25 px-6 py-5 backdrop-blur-md">
          <p
            className={`text-[10px] text-gold ${
              locale === 'zh' ? 'tracking-[0.2em]' : 'uppercase tracking-[0.28em]'
            }`}
          >
            {t.cover.guestPrefix}
          </p>
          <p className="mt-2 font-display text-2xl text-ivory">{guestName}</p>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className={`btn-cinnabar mt-8 rounded-full px-9 py-3.5 text-xs font-medium transition ${
            locale === 'zh' ? 'tracking-[0.2em]' : 'uppercase tracking-[0.28em]'
          }`}
        >
          {t.cover.openLabel}
        </button>
      </div>
    </section>
  )
}
