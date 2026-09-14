import type { ReactNode } from "react";

type CloudProps = {
  className?: string;
};

export function CloudMotif({ className = "h-8 w-24 text-gold/70" }: CloudProps) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 22c6-10 14-14 22-8 4-10 16-12 22-4 8-8 22-6 26 4 10-6 24 0 26 10H8z"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="currentColor"
        fillOpacity="0.06"
      />
    </svg>
  );
}

export function SealXi({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <rect
        x="6"
        y="6"
        width="68"
        height="68"
        rx="4"
        fill="#c41e3a"
        stroke="#e8d5a3"
        strokeWidth="2"
      />
      <rect x="11" y="11" width="58" height="58" rx="2" fill="none" stroke="#f0e2b6" strokeWidth="0.8" />
      <text
        x="40"
        y="54"
        textAnchor="middle"
        fontSize="36"
        fill="#f6efe2"
        fontFamily="Noto Serif SC, serif"
      >
        囍
      </text>
    </svg>
  );
}

export function SectionHeading({
  kicker = "囍",
  title,
}: {
  kicker?: string;
  title: string;
}) {
  return (
    <header className="mb-8 flex flex-col items-center text-center">
      <CloudMotif className="mb-2 h-7 w-20 text-gold/80" />
      <p className="font-cjk text-sm tracking-[0.55em] text-gold">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl text-cinnabar-deep sm:text-4xl">
        {title}
      </h2>
      <div className="gold-rule mt-4 w-28" />
    </header>
  );
}

export function GoldCornerFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative px-4 py-5">
      <span className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l border-t border-gold/70" />
      <span className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-r border-t border-gold/70" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 border-b border-l border-gold/70" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b border-r border-gold/70" />
      {children}
    </div>
  );
}
