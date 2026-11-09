import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Video,
  Share2,
  Check,
  Maximize2,
} from 'lucide-react';
import { EventItem, EventCategory } from '../../types';
import { getAllEvents, resolveImageUrl, isVideoUrl } from '../../data/events';
import { YouTubeFacade } from './YouTubeFacade';
import { EventLightbox } from './EventLightbox';
import { useLanguage } from '../../i18n/LanguageContext';

interface EventDetailModalProps {
  event: EventItem;
  isOpen: boolean;
  onClose: () => void;
  onSelectEvent: (event: EventItem) => void;
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

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  isOpen,
  onClose,
  onSelectEvent,
}) => {
  const { t } = useLanguage();
  const allEvents = getAllEvents();

  // Find previous and next events
  const currentIndex = allEvents.findIndex(
    (e) => e.id.toLowerCase() === event.id.toLowerCase()
  );
  const prevEvent = currentIndex > 0 ? allEvents[currentIndex - 1] : null;
  const nextEvent =
    currentIndex < allEvents.length - 1 ? allEvents[currentIndex + 1] : null;

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

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !lightboxOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, lightboxOpen]);

  useEffect(() => {
    setBannerLoaded(false);
  }, [event.id]);

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}#events/${event.id}`;
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

  if (!isOpen) return null;

  const categoryStyle = CATEGORY_COLORS[event.category] || {
    bg: 'bg-blue-500/10',
    text: 'text-blue-700',
    border: 'border-blue-500/20',
    dot: 'bg-blue-500',
  };

  const photos = event.photos || [];
  const videos = event.videos || [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={event.title}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md p-3 sm:p-6 lg:p-10 flex items-start justify-center animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden my-auto text-left">
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 px-5 sm:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider font-['Poppins']">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>GEOVERSED Event Dossier</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Share Button */}
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white shadow-2xs transition-colors cursor-pointer"
              title="Copy event direct link"
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

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close event modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero Cover Banner */}
        <div className="relative w-full max-h-[420px] h-[300px] sm:h-[380px] bg-slate-950 overflow-hidden">
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
              src={resolveImageUrl(event.cover, 'full')}
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

          {/* Banner Details */}
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 lg:p-10 text-white">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              {/* Category Badge */}
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white text-slate-900 border border-white/40 shadow-xs">
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

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-['Poppins'] leading-tight drop-shadow-md">
              {event.title}
            </h1>

            {/* Metas */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-200 mt-3.5">
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

        {/* Main Content Body */}
        <div className="p-5 sm:p-8 lg:p-10 space-y-10">
          {/* Executive Summary */}
          <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/80">
            <h2 className="text-xs uppercase tracking-wider font-bold text-blue-600 mb-2 font-['Poppins']">
              Executive Summary
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              {event.summary}
            </p>
          </div>

          {/* Detailed Proceedings */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-bold text-slate-900 mb-3 font-['Poppins']">
              Detailed Proceedings &amp; Field Scope
            </h3>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line space-y-4">
              {event.description}
            </div>
          </div>

          {/* Videos Section */}
          {videos.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Poppins']">
                    {t('events.videosSection')}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Click any thumbnail to load and play the video session
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {videos.map((vid, idx) => (
                  <YouTubeFacade
                    key={idx}
                    youtubeId={vid.youtubeId}
                    videoUrl={vid.videoUrl}
                    title={vid.title}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Photos Gallery & Sliding Gallery */}
          {photos.length > 0 && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Poppins']">
                      {t('events.photosSection')}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {photos.length} captured moments • Click any photo below to scroll to and slide into view
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full font-mono">
                    Slide {activePhotoIndex + 1} of {photos.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 text-xs font-semibold text-slate-700 hover:text-blue-600 border border-slate-200/80 transition-colors cursor-pointer"
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
                className="scroll-mt-20 relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[480px] rounded-3xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-200/80 group focus:outline-none focus:ring-2 focus:ring-blue-500 select-none"
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
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 font-['Poppins']">
                    All Photos ({photos.length}) — Click thumbnail to scroll to sliding gallery
                  </h4>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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
                        className={`group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                          isActive
                            ? 'ring-3 ring-blue-600 shadow-lg scale-[1.02]'
                            : 'shadow-2xs hover:shadow-md'
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
            </div>
          )}

          {/* Previous / Next Event Switcher */}
          <div className="pt-6 border-t border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {prevEvent ? (
                <button
                  type="button"
                  onClick={() => onSelectEvent(prevEvent)}
                  className="group flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all text-left cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-blue-600 text-slate-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                    <ChevronLeft className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
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

              {nextEvent ? (
                <button
                  type="button"
                  onClick={() => onSelectEvent(nextEvent)}
                  className="group flex items-center justify-end gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all text-right cursor-pointer"
                >
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {t('events.next')}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 line-clamp-1 font-['Poppins'] transition-colors">
                      {nextEvent.title}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-blue-600 text-slate-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ) : (
                <div className="hidden sm:block" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
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
