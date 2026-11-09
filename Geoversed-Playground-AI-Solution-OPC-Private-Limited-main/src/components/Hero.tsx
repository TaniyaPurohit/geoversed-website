import React, { useState } from 'react';
import { ChevronRight, Layers, MapPin, Sparkles, ShieldCheck, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import heroBgWebp from '../assets/images/himalayan_peaks_sharp_1789732575223.webp';
import heroBgJpg from '../assets/images/himalayan_peaks_sharp_1789732575223.jpg';

interface HeroProps {
  onExploreServices: () => void;
  onViewProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onViewProjects }) => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[600px] md:min-h-[680px] lg:min-h-[740px] flex flex-col justify-between overflow-hidden"
    >
      {/* Background Image: Snow-capped Himalayan Mountain Peaks */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={heroBgWebp} type="image/webp" />
          <source srcSet={heroBgJpg} type="image/jpeg" />
          <img
            src={heroBgWebp}
            alt="Snow-capped Himalayan mountain peaks with pine trees"
            className={`w-full h-full object-cover object-center brightness-[0.82] transition-opacity duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            referrerPolicy="no-referrer"
          />
        </picture>
        {/* Subtle Darkening Scrim */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 text-center flex flex-col items-center flex-1 justify-center">
        {/* Subtle Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium mb-5 tracking-wide shadow-xs">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>{t('hero.badge')}</span>
        </div>

        {/* Main Heading (H1) with vibrant Cyan / Sky highlight */}
        <h1
          id="hero-main-heading"
          className="text-white font-bold text-lg sm:text-2xl md:text-3xl lg:text-[38px] xl:text-[42px] tracking-tight leading-[1.25] sm:leading-[1.28] w-full max-w-5xl mb-8 font-['Poppins'] text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
        >
          <span className="block mb-1 whitespace-nowrap">
            {t('hero.heading1')}
          </span>
          <span className="block text-white font-extrabold whitespace-nowrap">
            {t('hero.heading2')}
          </span>
        </h1>

        {/* CTA Buttons: Side-by-side on tablet/desktop */}
        <div
          id="hero-cta-group"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md sm:max-w-none mb-10 sm:mb-12"
        >
          {/* Primary Action Button (Blue Pill) */}
          <button
            id="hero-explore-services-btn"
            onClick={onExploreServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer font-['Poppins']"
          >
            <span>{t('hero.exploreServices')}</span>
            <ChevronRight className="w-4 h-4 text-white" />
          </button>

          {/* Secondary Action Button (Frosted Translucent Glass Pill) */}
          <button
            id="hero-view-projects-btn"
            onClick={onViewProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base px-8 py-3 rounded-full border border-white/30 backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:-translate-y-0.5 cursor-pointer font-['Poppins']"
          >
            <span>{t('hero.viewProjects')}</span>
          </button>
        </div>

        {/* Floating 3-Card Glassmorphism Stats Bar */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-left">
          {/* Stat 1: Clickable link to Uttarakhand Geo Portal */}
          <a
            href="https://uttarakhand-geo-portal.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Uttarakhand Geo Portal (External Link)"
            className="group block bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-md border border-white/20 hover:border-sky-400/50 rounded-2xl p-4 sm:p-4.5 transition-all duration-300 shadow-lg hover:shadow-sky-500/10 hover:-translate-y-0.5 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-['Poppins']">13</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-white/50 group-hover:text-sky-300 transition-colors" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-sky-200 transition-colors">Districts Covered</div>
            <div className="text-[11px] text-slate-200">Uttarakhand Himalayan Field Atlas ↗</div>
          </a>

          {/* Stat 2: Clickable link to Core Capabilities / Services section */}
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              onExploreServices();
            }}
            title="Explore 12 Core Capabilities & Services"
            className="group block bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-md border border-white/20 hover:border-indigo-400/50 rounded-2xl p-4 sm:p-4.5 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-0.5 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-['Poppins']">12</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-white/50 group-hover:text-indigo-300 group-hover:translate-x-0.5 transition-all" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-indigo-200 transition-colors">Core Capabilities</div>
            <div className="text-[11px] text-slate-200">Geoscience, AI &amp; GIS Intelligence ↓</div>
          </a>

          {/* Stat 3: Clickable link to MOA-INC-33 Document */}
          <a
            href="/assets/aistudio/MOA-INC-33_GEOVERSED_d7b64cd7.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="View Official MCA Form INC-33 e-MOA Document (PDF)"
            className="group block bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-md border border-white/20 hover:border-emerald-400/50 rounded-2xl p-4 sm:p-4.5 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-0.5 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xl sm:text-2xl font-extrabold text-white font-['Poppins']">INC-33</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-white/50 group-hover:text-emerald-300 transition-colors" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-200 transition-colors">MCA Statutory Registered</div>
            <div className="text-[11px] text-slate-200 group-hover:text-white transition-colors">View Form INC-33 e-MOA ↗</div>
          </a>
        </div>
      </div>

      {/* Decorative Wave Transition Divider into White Page Body */}
      <div className="relative z-10 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-8 sm:h-12 text-[#EBF5FE]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
