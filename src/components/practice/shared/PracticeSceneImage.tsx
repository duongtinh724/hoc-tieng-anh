"use client";

import { Card } from "antd";
import { resolveDialogueImage } from "@/lib/practice/default-images";

interface PracticeSceneImageProps {
  image?: { url: string; alt: string };
}

export function PracticeSceneImage({ image }: PracticeSceneImageProps) {
  const scene = resolveDialogueImage(image);

  return (
    <Card size="small" className="practice-panel-card practice-scene-image-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={scene.url} alt={scene.alt} />
    </Card>
  );
}
