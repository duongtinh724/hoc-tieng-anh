export const DEFAULT_PRACTICE_SCENE_IMAGE = {
  url: "/images/practice/dialogue-default.png",
  alt: "Hai người đang trò chuyện",
} as const;

/** @deprecated Use DEFAULT_PRACTICE_SCENE_IMAGE */
export const DEFAULT_DIALOGUE_IMAGE = DEFAULT_PRACTICE_SCENE_IMAGE;

export function resolvePracticeSceneImage(
  image?: { url: string; alt: string },
  useDefaultFallback = false,
) {
  if (image) return image;
  if (useDefaultFallback) return DEFAULT_PRACTICE_SCENE_IMAGE;
  return null;
}

/** @deprecated Use resolvePracticeSceneImage */
export function resolveDialogueImage(image?: { url: string; alt: string }) {
  return resolvePracticeSceneImage(image, true);
}
