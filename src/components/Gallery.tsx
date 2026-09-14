import { useEffect, useState } from 'react'
import { wedding } from '../data/wedding'
import { useI18n } from '../i18n/LocaleContext'
import { HappinessDivider, SectionKicker } from './Ornaments'
import { Reveal } from './Reveal'

export function Gallery() {
  const { locale, t } = useI18n()
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') {
        setActive((i) => (i === null ? i : (i + 1) % wedding.gallery.length))
      }
      if (event.key === 'ArrowLeft') {
        setActive((i) =>
          i === null ? i : (i - 1 + wedding.gallery.length) % wedding.gallery.length,
        )
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section id="galeri" className="px-5 py-12">
      <Reveal>
        <SectionKicker>{t.gallery.kicker}</SectionKicker>
        <h2 className="mt-2 text-center font-display text-4xl text-ink sm:text-5xl">{t.gallery.title}</h2>
        <HappinessDivider className="mt-4" />
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {wedding.gallery.map((src, index) => {
          const item = t.gallery.items[index]
          return (
            <Reveal
              key={src}
              delayMs={index * 70}
              className={index === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : ''}
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group relative block w-full overflow-hidden rounded-[1.4rem] border border-gold/30 bg-cream text-left shadow-sm"
              >
                <img
                  src={src}
                  alt={item.alt}
                  className={`w-full object-cover transition duration-700 group-hover:scale-[1.03] ${
                    index === 0 ? 'aspect-[4/5] max-h-[560px] md:aspect-[4/5]' : 'aspect-[4/5]'
                  }`}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cinnabar-deep/80 via-ink/25 to-transparent px-3 py-3 font-display text-sm text-ivory">
                  {item.caption}
                </span>
              </button>
            </Reveal>
          )
        })}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.dialog}
        >
          <figure className="relative max-h-[90vh] max-w-lg" onClick={(event) => event.stopPropagation()}>
            <img
              src={wedding.gallery[active]}
              alt={t.gallery.items[active].alt}
              className="max-h-[80vh] w-full rounded-[1.5rem] object-contain"
            />
            <figcaption className="mt-3 text-center font-display text-lg text-ivory">
              {t.gallery.items[active].caption}
            </figcaption>
            <button
              type="button"
              onClick={() => setActive(null)}
              className={`absolute -right-1 -top-3 rounded-full bg-ivory px-3 py-1 text-xs text-ink ${
                locale === 'zh' ? 'tracking-[0.1em]' : 'uppercase tracking-[0.16em]'
              }`}
            >
              {t.gallery.close}
            </button>
          </figure>
        </div>
      ) : null}
    </section>
  )
}
