import React from 'react';
import { ArrowRight, Sparkles, Calendar, ArrowUpRight } from 'lucide-react';
import { getLatestEvents } from '../../data/events';
import { EventCard } from './EventCard';
import { EventItem } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';

interface LatestEventsSectionProps {
  onViewAllEvents: () => void;
  onSelectEvent: (event: EventItem) => void;
}

export const LatestEventsSection: React.FC<LatestEventsSectionProps> = ({
  onViewAllEvents,
  onSelectEvent,
}) => {
  const { t } = useLanguage();
  const latestEvents = getLatestEvents(3);

  if (latestEvents.length === 0) return null;

  return (
    <section
      id="events"
      className="relative py-20 bg-gradient-to-b from-white via-slate-50/70 to-white overflow-hidden border-t border-slate-100"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs sm:text-sm font-semibold mb-3.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>{t('events.badge')}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2042] tracking-tight font-['Poppins'] mb-3">
              {t('events.latestTitle')}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {t('events.latestSubtitle')}
            </p>
          </div>

          {/* "View All Events" Button (Desktop / Tablet) */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={onViewAllEvents}
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer font-['Poppins']"
            >
              <span>{t('events.viewAll')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {latestEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelectEvent={onSelectEvent}
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <button
            type="button"
            onClick={onViewAllEvents}
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-md transition-all cursor-pointer font-['Poppins']"
          >
            <span>{t('events.viewAll')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
