import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Calendar,
  MapPin,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Video,
  Share2,
  Check,
  Sparkles,
  ExternalLink,
  Maximize2,
} from 'lucide-react';
import { EventItem, EventCategory } from '../../types';
import { getAllEvents, resolveImageUrl, isVideoUrl } from '../../data/events';
import { YouTubeFacade } from './YouTubeFacade';
import { EventLightbox } from './EventLightbox';
import { useLanguage } from '../../i18n/LanguageContext';

interface EventDetailPageProps {
  eventId: string;
  onBackToEvents: () => void;
  onSelectEvent: (event: EventItem) => void;
  onNavigateHome: () => void;
}

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

export const EventDetailPage: React.FC<EventDetailPageProps> = ({
  eventId,
  onBackToEvents,
  onSelectEvent,
  onNavigateHome,
}) => {
  const { t } = useLanguage();
  const allEvents = useMemo(() => getAllEvents(), []);

  // Find current event
  const currentEventIndex = allEvents.findIndex(
    (e) => e.id.toLowerCase() === eventId.toLowerCase()
  );
  const event = allEvents[currentEventIndex] || allEvents[0];

  // Previous and Next events
  const prevEvent = currentEventIndex > 0 ? allEvents[currentEventIndex - 1] : null;
  const nextEvent =
    currentEventIndex < allEvents.length - 1 ? allEvents[currentEventIndex + 1] : null;

  // Lightbox & Sliding Gallery state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [copiedShare, setCopiedShare] = useState(false);
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const slidingGalleryRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handlePrevSlide = () => {
    setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNextSlide = () => {
    setActivePhotoIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  const handleSelectPhotoThumbnail = (index: number) => {
    setActivePhotoIndex(index);
    if (slidingGalleryRef.current) {
      slidingGalleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSliderTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleSliderTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Scroll to top on mount or when event changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setBannerLoaded(false);
  }, [eventId]);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  if (!event) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Event not found</h2>
        <button
          onClick={onBackToEvents}
          className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700"
        >
          {t('events.backToEvents')}
        </button>
      </div>
    );
  }

  const categoryStyle = CATEGORY_COLORS[event.category] || {
    bg: 'bg-blue-500/10',
    text: 'text-blue-700',
    border: 'border-blue-500/20',
    dot: 'bg-blue-500',
  };

  const photos = event.photos || [];
  const videos = event.videos || [];

  return (
    <div className="w-full min-h-screen bg-slate-50/50 pb-24 text-slate-900">
      {/* 1. Top Sub-Navigation Bar */}
      <div className="bg-white border-b border-slate-200/80 sticky top-[72px] z-30 shadow-2xs backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Back Button */}
          <button
            type="button"
            onClick={onBackToEvents}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{t('events.backToEvents')}</span>
          </button>

          {/* Breadcrumb path */}
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              {t('nav.home')}
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={onBackToEvents}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              {t('nav.events')}
            </button>
            <span>/</span>
            <span className="text-slate-900 font-medium truncate max-w-xs">
              {event.title}
            </span>
          </div>

          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white shadow-2xs transition-colors cursor-pointer"
            title="Copy event link"
          >
            {copiedShare ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-semibold">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. Hero Cover Banner */}
      <div className="relative w-full max-h-[460px] h-[340px] sm:h-[420px] bg-slate-950 overflow-hidden">
        {!bannerLoaded && (
          <div className="absolute inset-0 bg-slate-900 animate-pulse" />
        )}
        {isVideoUrl(event.cover) ? (
          <video
            src={event.cover}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setBannerLoaded(true)}
            onCanPlay={() => setBannerLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${
              bannerLoaded ? 'opacity-70 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        ) : (
          <img
            src={event.cover}
            alt={event.title}
            loading="eager"
            decoding="async"
            onLoad={() => setBannerLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${
              bannerLoaded ? 'opacity-70 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        )}
        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1226] via-[#0A1226]/60 to-transparent" />

        {/* Banner Content Container */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-8 lg:p-12 max-w-6xl mx-auto text-white">
          <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
            {/* Category Badge */}
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-xs bg-white text-slate-900 border border-white/40`}
            >
              <span className={`w-2 h-2 rounded-full ${categoryStyle.dot}`} />
              {event.category}
            </span>

            {/* Media Count Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
              <span className="flex items-center gap-1">
                <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
                {photos.length} Photos
              </span>
              {videos.length > 0 && (
                <>
                  <span className="text-white/40">·</span>
                  <span className="flex items-center gap-1">
                    <Video className="w-3.5 h-3.5 text-red-400" />
                    {videos.length} {videos.length === 1 ? 'Video' : 'Videos'}
                  </span>
                </>
              )}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Poppins'] leading-tight drop-shadow-md max-w-4xl">
            {event.title}
          </h1>

          {/* Event Metas */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-200 mt-4">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-sky-400" />
              {formatDate(event.date)}
            </span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-rose-400" />
              {event.location}
            </span>
          </div>
        </div>
      </div>

      {/* 3. Main Detail Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        {/* Description Glass Container */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 mb-12">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-xs uppercase tracking-wider font-bold text-blue-600 mb-2 font-['Poppins']">
              Executive Summary &amp; Overview
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6">
              {event.summary}
            </p>

            <div className="w-full h-px bg-slate-100 my-6" />

            <h3 className="text-sm uppercase tracking-wider font-bold text-slate-900 mb-3 font-['Poppins']">
              Detailed Proceedings &amp; Scientific Scope
            </h3>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line space-y-4">
              {event.description}
            </div>
          </div>
        </div>

        {/* 4. Videos Section (if any) */}
        {videos.length > 0 && (
          <section className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Poppins']">
                  {t('events.videosSection')}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Click any thumbnail to stream high-definition video session
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((vid, idx) => (
                <YouTubeFacade
                  key={idx}
                  youtubeId={vid.youtubeId}
                  videoUrl={vid.videoUrl}
                  title={vid.title}
                />
              ))}
            </div>
          </section>
        )}

        {/* 5. Photos Gallery & Sliding Gallery */}
        {photos.length > 0 && (
          <section className="mb-16 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Poppins']">
                    {t('events.photosSection')}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {photos.length} captured moments • Click any photo below to scroll to and slide into view
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-full font-mono border border-slate-200">
                  Slide {activePhotoIndex + 1} of {photos.length}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-blue-50 text-xs font-semibold text-slate-700 hover:text-blue-600 border border-slate-200/80 transition-colors cursor-pointer shadow-2xs"
                  title="Open Fullscreen Lightbox"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Fullscreen</span>
                </button>
              </div>
            </div>

            {/* 1. Main Featured Photo Sliding Gallery Viewport */}
            <div
              ref={slidingGalleryRef}
              id="photo-sliding-gallery"
              tabIndex={0}
              role="region"
              aria-label="Photo Sliding Gallery"
              onTouchStart={handleSliderTouchStart}
              onTouchEnd={handleSliderTouchEnd}
              className="scroll-mt-24 relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[520px] rounded-3xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-200/80 group focus:outline-none focus:ring-2 focus:ring-blue-500 select-none"
            >
              {/* Active Photo with smooth fade/scale transition */}
              <img
                key={activePhotoIndex}
                src={resolveImageUrl(photos[activePhotoIndex], 'full')}
                alt={`${event.title} - Slide ${activePhotoIndex + 1}`}
                loading="eager"
                decoding="async"
                onClick={() => setLightboxOpen(true)}
                className="w-full h-full object-contain cursor-zoom-in transition-all duration-300 animate-in fade-in zoom-in-95"
              />

              {/* Subtle dark gradient scrim at top and bottom */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

              {/* Top overlay information */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium border border-white/15">
                  Photo {activePhotoIndex + 1} / {photos.length}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxOpen(true);
                  }}
                  className="pointer-events-auto p-2 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 cursor-pointer shadow-lg"
                  title="Expand to Fullscreen Lightbox"
                  aria-label="Expand image to fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Left Navigation Chevron */}
              {photos.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevSlide();
                  }}
                  aria-label="Previous photo in sliding gallery"
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/45 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Right Navigation Chevron */}
              {photos.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextSlide();
                  }}
                  aria-label="Next photo in sliding gallery"
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/45 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Bottom slide title / tap hint */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white text-xs">
                <span className="truncate max-w-[70%] font-medium drop-shadow-md text-slate-200">
                  {event.title}
                </span>
                <span className="text-[11px] text-white/70 hidden sm:inline drop-shadow">
                  Click to zoom fullscreen • Swipe on mobile
                </span>
              </div>
            </div>

            {/* Dot Indicators */}
            {photos.length > 1 && (
              <div className="flex items-center justify-center gap-1.5 py-1">
                {photos.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => handleSelectPhotoThumbnail(dotIdx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      dotIdx === activePhotoIndex
                        ? 'w-6 bg-blue-600'
                        : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* 2. Responsive Thumbnail Grid - Clicking scrolls to the sliding gallery */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs uppercase tracking-wider font-bold text-slate-500 font-['Poppins']">
                  All Photos ({photos.length}) — Click thumbnail to scroll to sliding gallery
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4.5">
                {photos.map((photoUrl, idx) => {
                  const thumbUrl = resolveImageUrl(photoUrl, 'thumb');
                  const isActive = idx === activePhotoIndex;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectPhotoThumbnail(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleSelectPhotoThumbnail(idx);
                        }
                      }}
                      aria-label={`Select photo ${idx + 1}`}
                      className={`group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 cursor-pointer transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isActive
                          ? 'ring-3 ring-blue-600 shadow-lg scale-[1.02]'
                          : 'shadow-2xs hover:shadow-xl'
                      }`}
                    >
                      <img
                        src={thumbUrl}
                        alt={`${event.title} - Photo ${idx + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-slate-950/70 via-black/10 to-transparent transition-opacity flex items-end p-3 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="text-[11px] text-white font-medium drop-shadow">
                            Photo {idx + 1}
                          </span>
                          {isActive ? (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-600 text-white shadow-xs">
                              Active
                            </span>
                          ) : (
                            <span className="text-[10px] text-white/80 group-hover:text-sky-300 font-medium">
                              Slide ↑
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 6. Previous / Next Event Navigation Footer */}
        <div className="pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Previous Event */}
            {prevEvent ? (
              <button
                type="button"
                onClick={() => onSelectEvent(prevEvent)}
                className="group flex items-center gap-3.5 p-4 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-300/60 shadow-2xs hover:shadow-md transition-all text-left cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-blue-600 text-slate-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    {t('events.previous')}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 line-clamp-1 font-['Poppins'] transition-colors">
                    {prevEvent.title}
                  </span>
                </div>
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}

            {/* Next Event */}
            {nextEvent ? (
              <button
                type="button"
                onClick={() => onSelectEvent(nextEvent)}
                className="group flex items-center justify-end gap-3.5 p-4 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-300/60 shadow-2xs hover:shadow-md transition-all text-right cursor-pointer"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    {t('events.next')}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 line-clamp-1 font-['Poppins'] transition-colors">
                    {nextEvent.title}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-blue-600 text-slate-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <EventLightbox
        isOpen={lightboxOpen}
        photos={photos}
        initialIndex={activePhotoIndex}
        eventTitle={event.title}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};

export default EventDetailPage;
