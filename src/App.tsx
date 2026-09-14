import { useEffect, useRef, useState } from 'react'
import { Cover } from './components/Cover'
import { Couple } from './components/Couple'
import { Events } from './components/Events'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Gift } from './components/Gift'
import { Hero } from './components/Hero'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { MusicToggle } from './components/MusicToggle'
import { Rsvp } from './components/Rsvp'
import { Verse } from './components/Verse'
import { wedding } from './data/wedding'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  function playMusic() {
    const audio = audioRef.current
    if (!audio) return
    void audio.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    )
  }

  function openInvitation() {
    if (leaving || opened) return
    setLeaving(true)
    playMusic()
    window.setTimeout(() => {
      setOpened(true)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 720)
  }

  function toggleMusic() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
      return
    }
    playMusic()
  }

  return (
    <div className="paper-bg min-h-dvh">
      <audio ref={audioRef} src={wedding.music.src} loop preload="auto" />

      {!opened ? (
        <div
          className={`fixed inset-0 z-30 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            leaving ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          <Cover onOpen={openInvitation} />
        </div>
      ) : null}

      <main className={opened ? 'opacity-100' : 'pointer-events-none select-none'}>
        <Hero />
        <Verse />
        <Couple />
        <Events />
        <Gallery />
        <Rsvp />
        <Gift />
        <Footer />
      </main>

      {opened ? (
        <>
          <div className="fixed right-4 top-4 z-40 sm:right-5">
            <LanguageSwitcher />
          </div>
          <MusicToggle playing={playing} onToggle={toggleMusic} />
        </>
      ) : null}
    </div>
  )
}
