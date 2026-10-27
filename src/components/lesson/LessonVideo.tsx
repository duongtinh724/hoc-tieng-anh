import type { LessonVideo as LessonVideoData } from "@/types/lesson";

export function LessonVideo({ video }: { video: LessonVideoData }) {
  const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <section className="lesson-video">
      <div className="lesson-video-frame">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <a href={watchUrl} target="_blank" rel="noreferrer">
        Mở trên YouTube
      </a>
    </section>
  );
}
