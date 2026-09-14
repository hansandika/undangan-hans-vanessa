import { useLocale } from "../context/LocaleContext";
import { greet } from "../i18n/copy";
import { wedding } from "../data/wedding";
import { GoldCornerFrame, SealXi } from "./Ornaments";
import { LanguageToggle } from "./LanguageToggle";

type CoverGateProps = {
  open: boolean;
  onOpen: () => void;
};

export function CoverGate({ open, onOpen }: CoverGateProps) {
  const { locale, t, guestName } = useLocale();
  const greeting = greet(locale, guestName || undefined);

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center overflow-y-auto transition-all duration-700 ${
        open
          ? "pointer-events-none -translate-y-6 opacity-0"
          : "opacity-100"
      }`}
      aria-hidden={open}
    >
      <div className="paper-bg relative flex min-h-full w-full max-w-[430px] flex-col items-center justify-center px-6 py-10 text-center">
        <div className="lattice-overlay pointer-events-none absolute inset-0 opacity-70" />
        <div className="absolute right-4 top-4 z-10">
          <LanguageToggle />
        </div>

        <GoldCornerFrame>
          <p className="font-display text-[11px] uppercase tracking-[0.45em] text-gold">
            {t.cover.kicker}
          </p>
          <div className="mx-auto mt-5 seal-in">
            <SealXi className="h-[4.5rem] w-[4.5rem]" />
          </div>
          <h1 className="mt-6 font-display text-5xl text-cinnabar-deep">
            {wedding.couple.groom.givenName}
            <span className="mx-2 font-cjk text-3xl text-gold">囍</span>
            {wedding.couple.bride.givenName}
          </h1>
          <p className="mt-3 font-display text-lg italic text-ink-soft">
            {wedding.date.display[locale]}
          </p>
          <div className="gold-rule mx-auto mt-6 w-24" />
          <p className="mt-6 font-display text-lg text-cinnabar">{greeting}</p>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
            {t.cover.invite}
          </p>
        </GoldCornerFrame>

        <button
          type="button"
          onClick={onOpen}
          className="pulse-gold mt-10 rounded-full border border-gold bg-cinnabar px-8 py-3 font-display text-lg tracking-wide text-ivory shadow-md transition hover:bg-cinnabar-deep"
        >
          {t.cover.open}
        </button>
        <p className="mt-3 text-[11px] tracking-[0.25em] text-ink-soft/80">
          {t.cover.scrollHint}
        </p>
      </div>
    </div>
  );
}
