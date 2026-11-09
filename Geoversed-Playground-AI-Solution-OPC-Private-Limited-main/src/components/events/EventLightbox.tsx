import React, { useEffect, useState, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn } from 'lucide-react';
import { resolveImageUrl } from '../../data/events';

interface EventLightboxProps {
  isOpen: boolean;
  photos: string[];
  initialIndex?: number;
  eventTitle: string;
  onClose: () => void;
}

export const EventLightbox: React.FC<EventLightboxProps> = ({
  isOpen,
  photos,
  initialIndex = 0,
  eventTitle,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoaded, setIsLoaded] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  // Reset loading state on photo change
  useEffect(() => {
    setIsLoaded(false);
  }, [currentIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  }, [photos.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  }, [photos.length]);

  // Keyboard navigation: Left/Right arrows, Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while lightbox is active
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, goToPrevious, goToNext]);

  // Mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    const diffY = touchStartYRef.current - e.changedTouches[0].clientY;

    // Ensure horizontal swipe is dominant and exceeds threshold (50px)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        goToNext(); // Swiped left -> next
      } else {
        goToPrevious(); // Swiped right -> prev
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];

  // Helper to ensure full-size image is loaded in lightbox (if using picsum.photos, upscale to 1600x1000)
  const fullSizeUrl = resolveImageUrl(currentPhoto, 'full');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${eventTitle} Photo Gallery`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-md select-none transition-opacity duration-300 animate-in fade-in"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={(e) => {
        // Close if clicking outside the image container
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Top Header Bar */}
      <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        {/* Event Title & Counter */}
        <div className="text-white">
          <p className="text-xs sm:text-sm font-semibold truncate max-w-[240px] sm:max-w-md drop-shadow font-['Poppins']">
            {eventTitle}
          </p>
          <div className="inline-flex items-center gap-2 mt-0.5">
            <span className="text-xs text-sky-400 font-mono font-medium">
              {currentIndex + 1} / {photos.length}
            </span>
            <span className="text-[10px] text-slate-400 hidden sm:inline">
              (Use ← → arrow keys or swipe)
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={fullSizeUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open original high-res image"
            className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15 cursor-pointer"
            aria-label="View original image in new tab"
          >
            <ZoomIn className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-white/15 hover:bg-red-500/80 text-white transition-colors border border-white/20 cursor-pointer shadow-lg"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport */}
      <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-16 md:px-24 py-16 sm:py-20">
        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="w-full max-w-4xl max-h-[75vh] aspect-[16/10] bg-slate-800/80 rounded-2xl animate-pulse flex items-center justify-center text-slate-400">
            <span className="text-xs tracking-wider uppercase font-semibold animate-pulse">Loading high-resolution photo...</span>
          </div>
        )}

        <img
          key={fullSizeUrl}
          src={fullSizeUrl}
          alt={`${eventTitle} - Photo ${currentIndex + 1}`}
          loading="eager"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`max-w-full max-h-[82vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-300 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />
      </div>

      {/* Left Navigation Arrow */}
      {photos.length > 1 && (
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Previous photo"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-white/25 text-white transition-all backdrop-blur-md border border-white/20 shadow-xl cursor-pointer hover:scale-110 active:scale-95 group"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* Right Navigation Arrow */}
      {photos.length > 1 && (
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next photo"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-white/25 text-white transition-all backdrop-blur-md border border-white/20 shadow-xl cursor-pointer hover:scale-110 active:scale-95 group"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* Bottom Thumbnail Strip */}
      <div className="absolute bottom-3 inset-x-0 flex justify-center items-center gap-1.5 sm:gap-2 px-4 overflow-x-auto max-w-2xl mx-auto py-2">
        {photos.map((photo, idx) => {
          const thumbUrl = resolveImageUrl(photo, 'thumb');
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-md overflow-hidden shrink-0 w-12 h-8 sm:w-16 sm:h-10 transition-all border-2 cursor-pointer ${
                idx === currentIndex
                  ? 'border-sky-400 scale-105 shadow-md shadow-sky-500/40 ring-1 ring-sky-300'
                  : 'border-transparent opacity-50 hover:opacity-100'
              }`}
              aria-label={`Jump to photo ${idx + 1}`}
            >
              <img
                src={thumbUrl}
                alt={`Thumbnail ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
