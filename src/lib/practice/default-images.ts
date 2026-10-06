export const DEFAULT_DIALOGUE_IMAGE = {
  url: "/images/practice/dialogue-default.png",
  alt: "Hai người đang trò chuyện",
} as const;

export function resolveDialogueImage(image?: { url: string; alt: string }) {
  return image ?? DEFAULT_DIALOGUE_IMAGE;
}
