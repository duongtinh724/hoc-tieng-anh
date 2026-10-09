let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Context = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Context) return null;
  if (!audioContext) audioContext = new Context();
  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }
  return audioContext;
}

function tone(
  context: AudioContext,
  frequency: number,
  start: number,
  duration: number,
  volume: number,
) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

/** Short low tone when an answer is wrong. */
export function playWrongSound(): void {
  const context = getAudioContext();
  if (!context) return;
  const now = context.currentTime;
  tone(context, 330, now, 0.1, 0.06);
  tone(context, 196, now + 0.09, 0.18, 0.07);
}

/** Soft two-note chime when a practice screen is correct. */
export function playCorrectSound(): void {
  const context = getAudioContext();
  if (!context) return;
  const now = context.currentTime;
  tone(context, 784, now, 0.12, 0.08);
  tone(context, 1046, now + 0.1, 0.18, 0.07);
}

/** Slightly longer chime when the last screen is submitted. */
export function playCompleteSound(): void {
  const context = getAudioContext();
  if (!context) return;
  const now = context.currentTime;
  tone(context, 784, now, 0.12, 0.07);
  tone(context, 988, now + 0.1, 0.12, 0.07);
  tone(context, 1318, now + 0.2, 0.28, 0.08);
}
