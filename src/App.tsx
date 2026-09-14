import { useMemo, useState } from "react";
import { CoverGate } from "./components/CoverGate";
import { Couple } from "./components/Couple";
import { Events } from "./components/Events";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Gift } from "./components/Gift";
import { Hero } from "./components/Hero";
import { LanguageToggle } from "./components/LanguageToggle";
import { MusicToggle } from "./components/MusicToggle";
import { Rsvp } from "./components/Rsvp";
import { wedding } from "./data/wedding";
import { createMusicController } from "./lib/music";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const music = useMemo(
    () => createMusicController(wedding.music.src),
    [],
  );

  const play = async () => {
    await music.play();
    setPlaying(true);
  };

  const pause = () => {
    music.pause();
    setPlaying(false);
  };

  const openInvitation = async () => {
    setOpened(true);
    await play();
  };

  return (
    <div className="min-h-screen bg-cinnabar-ink">
      <CoverGate open={opened} onOpen={() => void openInvitation()} />

      <div
        className={`paper-bg relative mx-auto min-h-screen w-full max-w-[430px] shadow-[0_0_80px_rgba(0,0,0,0.45)] ${
          opened ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="lattice-overlay pointer-events-none absolute inset-0 opacity-40" />
        {opened && (
          <div className="sticky top-3 z-30 flex justify-end px-4">
            <LanguageToggle />
          </div>
        )}
        <main>
          <Hero />
          <Couple />
          <Events />
          <Gallery />
          <Rsvp />
          <Gift />
          <Footer />
        </main>
        {opened && (
          <MusicToggle
            playing={playing}
            onToggle={() => void (playing ? pause() : play())}
          />
        )}
      </div>
    </div>
  );
}
