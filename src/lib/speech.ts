export function isSpeechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function pickVoice(langPrefix: string): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  const prefix = langPrefix.toLowerCase();
  return (
    voices.find((voice) => voice.lang.toLowerCase().startsWith(prefix)) ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith(prefix.slice(0, 2)))
  );
}

function makeUtterance(text: string, lang: string, rate: number): SpeechSynthesisUtterance {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate;
  const voice = pickVoice(lang);
  if (voice) utterance.voice = voice;
  return utterance;
}

export function speakEnglish(text: string, options?: { rate?: number }): boolean {
  if (!isSpeechSupported() || !text.trim()) return false;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(makeUtterance(text, "en-US", options?.rate ?? 0.85));
  return true;
}
