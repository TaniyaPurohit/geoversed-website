import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, Sparkles, RefreshCw, ChevronDown } from 'lucide-react';
import { EventCard } from './EventCard';
import { getAllEvents, getEventYears, EVENT_CATEGORIES } from '../../data/events';
import { EventItem, EventCategory } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';

interface EventsPageProps {
  onSelectEvent: (event: EventItem) => void;
  onNavigateHome: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onSelectEvent, onNavigateHome }) => {
  const { t } = useLanguage();
  const allEvents = useMemo(() => getAllEvents(), []);
  const availableYears = useMemo(() => getEventYears(), []);

  // Filter and search states
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(9);

  // Filter logic
  const filteredEvents = useMemo(() => {
    return allEvents.filter((ev) => {
      // Category filter
      if (selectedCategory !== 'All' && ev.category !== selectedCategory) {
        return false;
      }
      // Year filter
      if (selectedYear !== 'All') {
        const evYear = new Date(ev.date).getFullYear().toString();
        if (evYear !== selectedYear) {
          return false;
        }
      }
      // Search query (title and location)
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = ev.title.toLowerCase().includes(q);
        const matchesLocation = ev.location.toLowerCase().includes(q);
        const matchesSummary = ev.summary.toLowerCase().includes(q);
        if (!matchesTitle && !matchesLocation && !matchesSummary) {
          return false;
        }
      }
      return true;
    });
  }, [allEvents, selectedCategory, selectedYear, searchQuery]);

  const displayedEvents = useMemo(() => {
    return filteredEvents.slice(0, visibleCount);
  }, [filteredEvents, visibleCount]);

  const hasMore = visibleCount < filteredEvents.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedYear('All');
    setSearchQuery('');
    setVisibleCount(9);
  };

  return (
    <div className="w-full min-h-screen bg-slate-50/60 pb-24">
      {/* 1. Hero Header with Liquid Glassmorphism Styling */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1226] via-[#0F2042] to-[#1E3A8A] text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Breadcrumb back to Home */}
          <div className="inline-flex items-center gap-2 text-xs text-sky-300/80 mb-4 font-medium">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t('nav.home')}
            </button>
            <span>/</span>
            <span className="text-white font-semibold">{t('nav.events')}</span>
          </div>

          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>{t('events.badge')}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-['Poppins'] drop-shadow-md">
            {t('events.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            {t('events.subtitle')}
          </p>
        </div>
      </section>

      {/* 2. Floating Filter & Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-200/90 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(9);
              }}
              placeholder={t('events.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50/50 hover:bg-white"
              aria-label="Search events"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Year Dropdown Filter */}
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="flex items-center gap-2 pl-3.5 pr-8 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 bg-slate-50/50 hover:bg-white transition-all cursor-pointer">
                <Calendar className="w-4 h-4 text-blue-600" />
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    setSelectedYear(e.target.value);
                    setVisibleCount(9);
                  }}
                  className="bg-transparent focus:outline-none cursor-pointer pr-2 appearance-none text-slate-800"
                  aria-label="Filter events by year"
                >
                  <option value="All">{t('events.allYears')}</option>
                  {availableYears.map((yr) => (
                    <option key={yr} value={yr.toString()}>
                      {yr}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Clear All Filters Button (if active) */}
            {(selectedCategory !== 'All' || selectedYear !== 'All' || searchQuery !== '') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 text-xs font-semibold transition-colors cursor-pointer shrink-0"
                title="Reset all filters"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips Bar */}
        <div className="flex items-center gap-2 overflow-x-auto py-5 no-scrollbar">
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setVisibleCount(9);
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer shadow-2xs ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-400/40'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80 hover:text-slate-900'
            }`}
          >
            {t('events.all')} ({allEvents.length})
          </button>

          {EVENT_CATEGORIES.map((cat) => {
            const count = allEvents.filter((e) => e.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(9);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer shadow-2xs ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-400/40'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80 hover:text-slate-900'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Event Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Showing <span className="font-bold text-slate-900">{displayedEvents.length}</span> of{' '}
            <span className="font-bold text-slate-900">{filteredEvents.length}</span> events
          </p>
        </div>

        {filteredEvents.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-sm max-w-lg mx-auto my-12">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2 font-['Poppins']">
              {t('events.noResults')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Try adjusting your category selection, year filter, or keywords.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer shadow-md shadow-blue-500/25"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          /* Responsive Glassmorphism Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onSelectEvent={onSelectEvent}
              />
            ))}
          </div>
        )}

        {/* 4. Load More Button (9 items at a time) */}
        {hasMore && (
          <div className="text-center mt-12 sm:mt-16">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-blue-600 text-slate-800 hover:text-white font-semibold text-sm sm:text-base border border-slate-200/90 hover:border-transparent shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer font-['Poppins']"
            >
              <span>{t('events.loadMore')}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 group-hover:bg-blue-500 text-slate-600 group-hover:text-white font-mono">
                +{Math.min(9, filteredEvents.length - visibleCount)}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
