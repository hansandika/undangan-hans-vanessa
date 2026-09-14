import { useLocale } from "../context/LocaleContext";
import { wedding } from "../data/wedding";
import { SealXi } from "./Ornaments";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="fade-up px-8 pb-24 pt-8 text-center">
      <div className="gold-rule mx-auto mb-6 w-20" />
      <div className="mx-auto mb-4 flex justify-center">
        <SealXi className="h-12 w-12" />
      </div>
      <p className="text-sm leading-relaxed text-ink-soft">{t.footer.thanks}</p>
      <p className="mt-3 font-display text-xl italic text-cinnabar-deep">
        {t.footer.closing}
      </p>
      <p className="mt-8 font-display text-sm tracking-[0.2em] text-gold">
        {t.footer.madeWith}
      </p>
      <p className="mt-1 text-[11px] text-ink-soft/70">{wedding.couple.hashtag}</p>
    </footer>
  );
}
