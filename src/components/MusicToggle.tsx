import { useI18n } from '../i18n/LocaleContext'

type MusicToggleProps = {
  playing: boolean
  onToggle: () => void
}

export function MusicToggle({ playing, onToggle }: MusicToggleProps) {
  const { t } = useI18n()

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={playing}
      aria-label={playing ? t.music.pause : t.music.play}
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/45 bg-ivory/92 text-cinnabar shadow-lg backdrop-blur-md"
    >
      {playing ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <rect x="6" y="5" width="4" height="14" rx="1" />
          <rect x="14" y="5" width="4" height="14" rx="1" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M9 6.5v11l9-5.5-9-5.5Z" />
        </svg>
      )}
      <span className="sr-only">{t.footer.musicCredit}</span>
    </button>
  )
}
