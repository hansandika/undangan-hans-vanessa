import { useLocale } from "../context/LocaleContext";
import { wedding } from "../data/wedding";
import { GoldCornerFrame, SectionHeading } from "./Ornaments";

function EventCard({
  title,
  time,
  venue,
  address,
  mapsUrl,
  mapLabel,
  mapNote,
}: {
  title: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  mapLabel: string;
  mapNote: string;
}) {
  return (
    <article className="rounded-xl border border-gold/30 bg-ivory/70">
      <GoldCornerFrame>
        <p className="text-[11px] uppercase tracking-[0.35em] text-gold">{title}</p>
        <p className="mt-2 font-display text-2xl text-cinnabar-deep">{time}</p>
        <p className="mt-3 font-display text-lg text-ink">{venue}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{address}</p>
        <div className="mt-4 rounded-lg border border-dashed border-gold/40 bg-ivory-deep/60 px-3 py-6 text-center">
          <p className="text-xs leading-relaxed text-ink-soft">{mapNote}</p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block rounded-full border border-cinnabar px-4 py-1.5 text-sm text-cinnabar transition hover:bg-cinnabar hover:text-ivory"
          >
            {mapLabel}
          </a>
        </div>
      </GoldCornerFrame>
    </article>
  );
}

export function Events() {
  const { locale, t } = useLocale();
  const { akad, resepsi, dressCode } = wedding.events;

  return (
    <section className="fade-up px-6 py-12">
      <SectionHeading title={t.events.title} />
      <div className="space-y-6">
        <EventCard
          title={t.events.akad}
          time={akad.time[locale]}
          venue={akad.venue}
          address={akad.address}
          mapsUrl={akad.mapsUrl}
          mapLabel={t.events.map}
          mapNote={t.events.mapPlaceholder}
        />
        <EventCard
          title={t.events.resepsi}
          time={resepsi.time[locale]}
          venue={resepsi.venue}
          address={resepsi.address}
          mapsUrl={resepsi.mapsUrl}
          mapLabel={t.events.map}
          mapNote={t.events.mapPlaceholder}
        />
      </div>
      <p className="mt-6 text-center text-sm text-ink-soft">
        {t.events.dressCode}: {dressCode[locale]}
      </p>
    </section>
  );
}
