import { useLocale } from "../context/LocaleContext";

type MusicToggleProps = {
  playing: boolean;
  onToggle: () => void;
};

export function MusicToggle({ playing, onToggle }: MusicToggleProps) {
  const { t } = useLocale();

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={playing ? t.music.pause : t.music.play}
      className="fixed bottom-5 right-[max(1.25rem,calc(50%-215px+1.25rem))] z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-cinnabar text-ivory shadow-lg"
    >
      {playing ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <rect x="6" y="5" width="4" height="14" rx="1" />
          <rect x="14" y="5" width="4" height="14" rx="1" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M9 5v14l11-7L9 5z" />
        </svg>
      )}
    </button>
  );
}
