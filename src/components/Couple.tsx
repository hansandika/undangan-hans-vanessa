import { wedding } from '../data/wedding'
import { useI18n } from '../i18n/LocaleContext'
import { HappinessDivider, SectionKicker } from './Ornaments'
import { Reveal } from './Reveal'

export function Couple() {
  const { t } = useI18n()
  const people = [
    { person: wedding.couple.groom, copy: t.couple.groom },
    { person: wedding.couple.bride, copy: t.couple.bride },
  ]

  return (
    <section id="mempelai" className="px-5 py-12">
      <Reveal>
        <SectionKicker>{t.couple.kicker}</SectionKicker>
        <h2 className="mt-2 text-center font-display text-4xl text-ink sm:text-5xl">{t.couple.title}</h2>
        <HappinessDivider className="mt-4" />
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-3xl gap-12 md:grid-cols-2 md:gap-8">
        {people.map(({ person, copy }, index) => (
          <Reveal key={person.name} delayMs={index * 120}>
            <article className="flex flex-col items-center text-center">
              <div className="arch-frame h-72 w-52 sm:h-80 sm:w-56">
                <img
                  src={person.photo}
                  alt={person.name}
                  style={{ objectPosition: person.photoPosition }}
                />
              </div>
              <p className="mt-6 text-[11px] tracking-[0.28em] text-cinnabar">{copy.role}</p>
              <h3 className="mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl">{person.name}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">{copy.parents}</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">{copy.bio}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
