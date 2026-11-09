import React, { useState } from 'react';
import { Calendar, MapPin, Image as ImageIcon, Video, ArrowUpRight } from 'lucide-react';
import { EventItem, EventCategory } from '../../types';
import { resolveImageUrl, isVideoUrl } from '../../data/events';

interface EventCardProps {
  event: EventItem;
  onSelectEvent?: (event: EventItem) => void;
}

// Category color mappings matching GEOVERSED colorful yet professional design language
const CATEGORY_COLORS: Record<EventCategory, { bg: string; text: string; border: string; dot: string }> = {
  Training: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-700',
    border: 'border-emerald-500/20',
    dot: 'bg-emerald-500',
  },
  Workshop: {
    bg: 'bg-sky-500/10',
    text: 'text-sky-700',
    border: 'border-sky-500/20',
    dot: 'bg-sky-500',
  },
  MoU: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-700',
    border: 'border-purple-500/20',
    dot: 'bg-purple-500',
  },
  Meeting: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-700',
    border: 'border-amber-500/20',
    dot: 'bg-amber-500',
  },
  'Field Visit': {
    bg: 'bg-blue-500/10',
    text: 'text-blue-700',
    border: 'border-blue-500/20',
    dot: 'bg-blue-500',
  },
  'Guest Lecture': {
    bg: 'bg-violet-500/10',
    text: 'text-violet-700',
    border: 'border-violet-500/20',
    dot: 'bg-violet-500',
  },
};

export const EventCard: React.FC<EventCardProps> = ({ event, onSelectEvent }) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const colors = CATEGORY_COLORS[event.category] || {
    bg: 'bg-blue-500/10',
    text: 'text-blue-700',
    border: 'border-blue-500/20',
    dot: 'bg-blue-500',
  };

  // Format date nicely (e.g. Nov 18, 2024)
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  // Optimized grid thumbnail URL (600x400 for high density and fast loading)
  const thumbnailUrl = resolveImageUrl(event.cover, 'thumb');

  const handleClick = (e: React.MouseEvent) => {
    if (onSelectEvent) {
      e.preventDefault();
      onSelectEvent(event);
    }
  };

  const photoCount = event.photos?.length || 0;
  const videoCount = event.videos?.length || 0;

  return (
    <a
      href={`#events/${event.id}`}
      onClick={handleClick}
      className="group relative flex flex-col bg-white/80 hover:bg-white backdrop-blur-md rounded-2xl border border-slate-200/80 hover:border-blue-400/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`View details for ${event.title}`}
    >
      {/* Cover Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        {/* Skeleton loader */}
        {!isImgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
        )}

        {isVideoUrl(thumbnailUrl) ? (
          <video
            src={thumbnailUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setIsImgLoaded(true)}
            onCanPlay={() => setIsImgLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              isImgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <img
            src={thumbnailUrl}
            alt={event.title}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsImgLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              isImgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Liquid Glass Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Floating Badge Bar */}
        <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none">
          {/* Category Chip */}
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border shadow-xs ${colors.bg} ${colors.text} ${colors.border} bg-white/90`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
            {event.category}
          </span>

          {/* Media Count Pill (Liquid Glass) */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-[11px] font-medium border border-white/20 shadow-xs">
            {photoCount > 0 && (
              <span className="flex items-center gap-1">
                <ImageIcon className="w-3 h-3 text-sky-400" />
                {photoCount}
              </span>
            )}
            {photoCount > 0 && videoCount > 0 && (
              <span className="text-white/40">·</span>
            )}
            {videoCount > 0 && (
              <span className="flex items-center gap-1">
                <Video className="w-3 h-3 text-red-400" />
                {videoCount}
              </span>
            )}
          </div>
        </div>

        {/* Arrow Lift Icon Indicator on hover */}
        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 group-hover:bg-blue-600 text-slate-700 group-hover:text-white flex items-center justify-center shadow-md transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-0 group-hover:opacity-100">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between text-left">
        <div>
          {/* Date & Location Metas */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-500 mb-2.5">
            <span className="inline-flex items-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              {formatDate(event.date)}
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1 truncate max-w-[190px]">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {event.location}
            </span>
          </div>

          {/* Event Title */}
          <h3 className="text-base sm:text-lg font-bold text-[#0F2042] group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug font-['Poppins'] mb-2">
            {event.title}
          </h3>

          {/* Event Summary */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {event.summary}
          </p>
        </div>

        {/* Bottom Micro Footer */}
        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
          <span className="font-['Poppins'] tracking-wide">
            {photoCount} Photos · {videoCount} {videoCount === 1 ? 'Video' : 'Videos'}
          </span>
          <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Gallery &amp; Details →
          </span>
        </div>
      </div>
    </a>
  );
};
