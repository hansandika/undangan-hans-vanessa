import { useLocale } from "../context/LocaleContext";
import { wedding } from "../data/wedding";
import { SectionHeading } from "./Ornaments";

export function Couple() {
  const { locale, t } = useLocale();
  const { groom, bride } = wedding.couple;

  return (
    <section className="fade-up px-6 py-12">
      <SectionHeading title={t.couple.title} />
      <div className="space-y-10">
        <article className="text-center">
          <div className="mx-auto max-w-[200px]">
            <img
              src={wedding.photos[0].src}
              alt={wedding.photos[0].alt[locale]}
              className="photo-arch aspect-[3/4] w-full"
            />
          </div>
          <p className="mt-5 text-[11px] uppercase tracking-[0.35em] text-gold">
            {t.couple.groom}
          </p>
          <h3 className="mt-1 font-display text-3xl text-cinnabar-deep">
            {groom.fullName}
          </h3>
          <p className="font-cjk mt-1 text-sm text-ink-soft">{groom.nameZh}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {t.couple.sonOf}
            <br />
            {groom.parents.father} {t.couple.and} {groom.parents.mother}
          </p>
        </article>

        <p className="text-center font-cjk text-3xl text-gold">囍</p>

        <article className="text-center">
          <div className="mx-auto max-w-[200px]">
            <img
              src={wedding.photos[4].src}
              alt={wedding.photos[4].alt[locale]}
              className="photo-arch aspect-[3/4] w-full object-top"
            />
          </div>
          <p className="mt-5 text-[11px] uppercase tracking-[0.35em] text-gold">
            {t.couple.bride}
          </p>
          <h3 className="mt-1 font-display text-3xl text-cinnabar-deep">
            {bride.fullName}
          </h3>
          <p className="font-cjk mt-1 text-sm text-ink-soft">{bride.nameZh}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {t.couple.daughterOf}
            <br />
            {bride.parents.father} {t.couple.and} {bride.parents.mother}
          </p>
        </article>
      </div>
    </section>
  );
}
