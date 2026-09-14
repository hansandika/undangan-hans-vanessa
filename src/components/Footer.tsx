import { wedding } from '../data/wedding'
import { useI18n } from '../i18n/LocaleContext'
import { HappinessDivider } from './Ornaments'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="px-5 pb-20 pt-8">
      <div className="mx-auto max-w-lg text-center">
        <HappinessDivider />
        <p className="mt-6 font-display text-lg leading-relaxed text-ink-soft italic">{t.footer.thankYou}</p>
        <p className="mt-6 text-[11px] tracking-[0.28em] text-cinnabar">{t.footer.closing}</p>
        <p className="mt-2 font-script text-5xl text-ink">{wedding.couple.displayNames}</p>
        <p className="mt-6 text-[11px] text-ink-soft/70">{t.footer.musicCredit}</p>
      </div>
    </footer>
  )
}
