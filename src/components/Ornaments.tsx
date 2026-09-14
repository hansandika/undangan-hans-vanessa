import { useI18n } from '../i18n/LocaleContext'

type IconProps = {
  className?: string
}

export function DoubleHappiness({ className = '' }: IconProps) {
  return (
    <span className={`font-display leading-none select-none ${className}`} aria-hidden>
      囍
    </span>
  )
}

export function HappinessDivider({ className = '' }: IconProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden>
      <span className="gold-rule w-14 sm:w-20" />
      <DoubleHappiness className="text-2xl text-cinnabar" />
      <span className="gold-rule w-14 sm:w-20" />
    </div>
  )
}

export function CloudMark({ className = 'h-8 w-16' }: IconProps) {
  return (
    <svg viewBox="0 0 80 32" className={className} fill="currentColor" aria-hidden>
      <path
        d="M8 20c0-5 4-9 10-9 1.2-4.5 5.4-8 10.6-8 4.4 0 8.2 2.5 10 6.2C41 6.5 45 4 50 4c6.6 0 12 5 12.8 11.4 5 .6 8.2 4.8 8.2 9.6 0 5.5-4.5 10-10 10H16C10.5 35 6 30.5 6 25c0-1.8.7-3.5 2-5Z"
        opacity="0.85"
      />
    </svg>
  )
}

export function LatticeCorner({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 72 72" className={className} fill="none" aria-hidden>
      <path d="M8 8h40M8 8v40" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 20h20V8M20 8v28h-12" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      <path d="M14 14h14v14H14Z" stroke="currentColor" strokeWidth="0.7" opacity="0.55" />
      <circle cx="21" cy="21" r="3.2" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  )
}

export function SectionKicker({ children }: { children: string }) {
  const { locale } = useI18n()
  return (
    <p
      className={`text-center text-[11px] font-medium text-gold-deep ${
        locale === 'zh' ? 'tracking-[0.28em]' : 'uppercase tracking-[0.32em]'
      }`}
    >
      {children}
    </p>
  )
}

export function RingsIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="20" cy="24" r="10" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="28" cy="24" r="10" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function GlassIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M14 10h20l-3.2 16.4A8 8 0 0 1 23 34h-2a8 8 0 0 1-7.8-7.6L14 10Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M24 34v6M18 40h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
