"use client";

import { Card } from "antd";
import { resolvePracticeSceneImage } from "@/lib/practice/default-images";

interface PracticeSceneImageProps {
  image?: { url: string; alt: string };
  /** Chỉ bật ở hội thoại — không có ảnh riêng thì dùng dialogue-default.png */
  useDefaultFallback?: boolean;
}

export function PracticeSceneImage({
  image,
  useDefaultFallback = false,
}: PracticeSceneImageProps) {
  const scene = resolvePracticeSceneImage(image, useDefaultFallback);
  if (!scene) return null;

  return (
    <Card size="small" className="practice-panel-card practice-scene-image-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={scene.url} alt={scene.alt} />
    </Card>
  );
}
