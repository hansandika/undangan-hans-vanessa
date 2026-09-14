const PENTATONIC = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33];
const MELODY = [0, 2, 4, 2, 5, 4, 3, 2, 0, 1, 2, 4, 3, 1, 0, 0];

type MusicHandle = {
  stop: () => void;
};

function playAmbient(volume = 0.08): MusicHandle {
  const ctx = new AudioContext();
  const master = ctx.createGain();
  master.gain.value = volume;
  master.connect(ctx.destination);

  const delay = ctx.createDelay();
  delay.delayTime.value = 0.42;
  const feedback = ctx.createGain();
  feedback.gain.value = 0.28;
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(master);

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 1400;
  filter.connect(delay);
  filter.connect(master);

  let step = 0;
  let stopped = false;

  const pluck = () => {
    if (stopped) return;
    const freq = PENTATONIC[MELODY[step % MELODY.length]]!;
    step += 1;

    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = freq;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.22, ctx.currentTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.6);

    osc.connect(gain);
    gain.connect(filter);
    osc.start();
    osc.stop(ctx.currentTime + 1.7);
  };

  pluck();
  const timer = window.setInterval(pluck, 900);

  return {
    stop: () => {
      stopped = true;
      window.clearInterval(timer);
      master.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
      window.setTimeout(() => {
        void ctx.close();
      }, 400);
    },
  };
}

export function createMusicController(src: string) {
  let audio: HTMLAudioElement | null = null;
  let ambient: MusicHandle | null = null;
  let usingFile = false;

  const stopAmbient = () => {
    ambient?.stop();
    ambient = null;
  };

  const playFile = async () => {
    if (!audio) {
      audio = new Audio(src);
      audio.loop = true;
      audio.volume = 0.38;
    }
    try {
      await audio.play();
      usingFile = true;
      return true;
    } catch {
      usingFile = false;
      return false;
    }
  };

  return {
    async play() {
      stopAmbient();
      const ok = await playFile();
      if (!ok) {
        if (audio) {
          audio.pause();
        }
        ambient = playAmbient();
      }
    },
    pause() {
      if (usingFile && audio) audio.pause();
      stopAmbient();
    },
    isFile() {
      return usingFile;
    },
  };
}
