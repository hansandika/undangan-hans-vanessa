import { useState } from "react";
import { useLocale } from "../context/LocaleContext";
import { wedding } from "../data/wedding";
import { SectionHeading } from "./Ornaments";

export function Gallery() {
  const { locale, t } = useLocale();
  const [active, setActive] = useState<number | null>(null);
  const photos = wedding.photos;

  return (
    <section className="fade-up px-6 py-12">
      <SectionHeading title={t.gallery.title} />
      <div className="grid grid-cols-2 gap-3">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(index)}
            className={`overflow-hidden rounded-[1.4rem] border border-gold/35 shadow-sm ${
              index === 0 ? "col-span-2" : ""
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt[locale]}
              className={`w-full object-cover ${index === 0 ? "aspect-[4/5]" : "aspect-square"}`}
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-cinnabar-ink/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.title}
          onClick={() => setActive(null)}
        >
          <img
            src={photos[active].src}
            alt={photos[active].alt[locale]}
            className="photo-arch max-h-[82vh] max-w-full"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-gold-soft px-3 py-1 text-sm text-ivory"
            onClick={() => setActive(null)}
          >
            {t.gallery.close}
          </button>
        </div>
      )}
    </section>
  );
}
