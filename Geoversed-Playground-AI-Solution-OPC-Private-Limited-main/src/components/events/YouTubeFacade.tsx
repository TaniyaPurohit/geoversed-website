import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  youtubeId?: string;
  videoUrl?: string;
  title: string;
  className?: string;
}

export function extractYouTubeId(url?: string): string | undefined {
  if (!url) return undefined;
  // If it's already an 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(url.trim())) {
    return url.trim();
  }
  const match = url.match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+?&v=|shorts\/|live\/))([\w-]{11})/i
  );
  return match ? match[1] : undefined;
}

export const YouTubeFacade: React.FC<YouTubeFacadeProps> = ({
  youtubeId,
  videoUrl,
  title,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Determine if this is a YouTube video or a direct video file
  const extractedId = extractYouTubeId(videoUrl) || extractYouTubeId(youtubeId);
  const effectiveYoutubeId = extractedId || (youtubeId && youtubeId.length === 11 ? youtubeId : undefined);

  // If it's a YouTube video, effectiveVideoUrl must be undefined so it doesn't render HTML5 video
  const isYouTube = Boolean(effectiveYoutubeId);
  const effectiveVideoUrl = isYouTube ? undefined : videoUrl;

  // If playing, render YouTube iframe or local HTML5 video
  if (isPlaying) {
    if (effectiveYoutubeId) {
      const embedUrl = `https://www.youtube-nocookie.com/embed/${effectiveYoutubeId}?autoplay=1&rel=0&modestbranding=1`;
      return (
        <div className={`relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg border border-slate-700/50 ${className}`}>
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      );
    }

    if (effectiveVideoUrl) {
      return (
        <div className={`relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg border border-slate-700/50 ${className}`}>
          <video
            src={effectiveVideoUrl}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
  }

  // High quality thumbnail URL from YouTube if available
  const thumbnailUrl = effectiveYoutubeId
    ? `https://img.youtube.com/vi/${effectiveYoutubeId}/hqdefault.jpg`
    : undefined;

  return (
    <div
      className={`relative aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 group cursor-pointer border border-white/20 shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
      onClick={() => setIsPlaying(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsPlaying(true);
        }
      }}
      aria-label={`Play video: ${title}`}
    >
      {/* Background for YouTube vs Local Video */}
      {thumbnailUrl ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse" />
          )}
          <img
            src={thumbnailUrl}
            alt={title}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              isLoaded ? 'opacity-90 group-hover:opacity-100' : 'opacity-0'
            }`}
          />
        </>
      ) : effectiveVideoUrl ? (
        <video
          src={effectiveVideoUrl}
          preload="metadata"
          className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
        />
      ) : (
        <div className="w-full h-full bg-slate-900" />
      )}

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-black/30 to-transparent group-hover:from-slate-950/70 transition-colors" />

      {/* Liquid glassmorphism Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl shadow-red-600/40 backdrop-blur-md border border-white/40 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600">
          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
        </div>
      </div>

      {/* Video title caption bar */}
      <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 text-left pointer-events-none">
        <p className="text-white text-xs sm:text-sm font-semibold line-clamp-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-['Poppins']">
          {title}
        </p>
        <span className="inline-block mt-1 text-[10px] sm:text-xs text-sky-300 font-medium tracking-wide">
          {effectiveYoutubeId ? 'Click to stream YouTube video' : 'Click to play HD video recording'}
        </span>
      </div>
    </div>
  );
};
