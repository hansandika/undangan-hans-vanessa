import { useLocale } from "../context/LocaleContext";
import { wedding } from "../data/wedding";
import { useCountdown } from "../lib/useCountdown";

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-[3.4rem] flex-col items-center">
      <span className="font-display text-3xl text-cinnabar-deep">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ink-soft">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const { t } = useLocale();
  const { days, hours, minutes, seconds, ended } = useCountdown();

  if (ended) {
    return (
      <p className="font-display text-lg italic text-cinnabar">{t.countdown.ended}</p>
    );
  }

  return (
    <div className="flex items-end justify-center gap-3 sm:gap-4">
      <Unit value={days} label={t.countdown.days} />
      <span className="mb-5 text-gold">·</span>
      <Unit value={hours} label={t.countdown.hours} />
      <span className="mb-5 text-gold">·</span>
      <Unit value={minutes} label={t.countdown.minutes} />
      <span className="mb-5 text-gold">·</span>
      <Unit value={seconds} label={t.countdown.seconds} />
    </div>
  );
}

export function Hero() {
  const { locale, t } = useLocale();
  const photo = wedding.photos[1];

  return (
    <section className="fade-up px-6 pb-6 pt-12 text-center">
      <p className="text-[11px] uppercase tracking-[0.5em] text-gold">
        {t.hero.kicker}
      </p>
      <h2 className="mt-3 font-display text-2xl italic text-ink-soft">
        {t.hero.weAreGettingMarried}
      </h2>
      <h1 className="mt-2 font-display text-5xl leading-tight text-cinnabar-deep">
        {wedding.couple.groom.givenName}
        <span className="block font-cjk text-2xl text-gold">和</span>
        {wedding.couple.bride.givenName}
      </h1>
      <p className="mt-3 font-cjk text-sm tracking-[0.2em] text-cinnabar">
        {t.hero.blessing}
      </p>
      <p className="mt-2 font-display text-lg text-ink">
        {wedding.date.display[locale]}
      </p>

      <div className="relative mx-auto mt-8 max-w-[260px]">
        <img
          src={photo.src}
          alt={photo.alt[locale]}
          className="photo-arch aspect-[3/4] w-full"
        />
        <span className="font-cjk absolute -right-2 top-6 text-4xl text-cinnabar/20">
          囍
        </span>
      </div>

      <div className="mt-8 rounded-2xl border border-gold/35 bg-ivory-deep/50 px-4 py-5">
        <Countdown />
      </div>
    </section>
  );
}
