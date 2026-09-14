import { useState } from "react";
import { useLocale } from "../context/LocaleContext";
import { wedding } from "../data/wedding";
import { GoldCornerFrame, SectionHeading } from "./Ornaments";

export function Gift() {
  const { t } = useLocale();
  const [copied, setCopied] = useState<string | null>(null);

  const copyNumber = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      window.setTimeout(() => setCopied(null), 3500);
    } catch {
      const field = document.createElement("textarea");
      field.value = value;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
      setCopied(value);
      window.setTimeout(() => setCopied(null), 3500);
    }
  };

  return (
    <section className="fade-up px-6 py-12">
      <SectionHeading title={t.gift.title} />
      <p className="mb-6 text-center text-sm leading-relaxed text-ink-soft">
        {t.gift.subtitle}
      </p>
      <div className="space-y-4">
        {wedding.gifts.map((gift) => (
          <article
            key={`${gift.bank}-${gift.accountNumber}`}
            className="rounded-xl border border-gold/30 bg-ivory/80"
          >
            <GoldCornerFrame>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                {gift.bank}
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                {t.gift.accountName} {gift.accountName}
              </p>
              <p className="mt-1 font-display text-xl tracking-wide text-cinnabar-deep">
                {gift.accountNumber}
              </p>
              <button
                type="button"
                onClick={() => copyNumber(gift.accountNumber)}
                aria-live="polite"
                className={`mt-3 min-w-[6.5rem] rounded-full border px-4 py-1.5 text-sm transition ${
                  copied === gift.accountNumber
                    ? "border-cinnabar bg-cinnabar text-ivory"
                    : "border-cinnabar bg-transparent text-cinnabar hover:bg-cinnabar hover:text-ivory"
                }`}
              >
                {copied === gift.accountNumber ? t.gift.copied : t.gift.copy}
              </button>
            </GoldCornerFrame>
          </article>
        ))}
      </div>
    </section>
  );
}
