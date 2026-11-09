import React, { useEffect } from 'react';
import {
  X,
  MapPin,
  ExternalLink,
  FileCode,
  FileText,
  Compass,
  Layers,
  ShieldCheck,
  Landmark,
  ArrowRight,
  BookOpen,
  Phone,
  Mail,
  Cpu,
} from 'lucide-react';
import { CORE_SERVICES, COMPANY_INFO, NAV_LINKS, RESEARCH_REPORTS } from '../data/servicesData';
import { ServiceItem } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService?: (service: ServiceItem) => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenQuote?: (service?: ServiceItem) => void;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
  onOpenPrivacy,
  onOpenTerms,
  onOpenQuote,
}) => {
  const { t } = useLanguage();

  const getNavLabel = (label: string): string => {
    switch (label) {
      case 'Home':
        return t('nav.home');
      case 'About':
        return t('nav.about');
      case 'Services':
        return t('nav.services');
      case 'Projects':
        return t('nav.projects');
      case 'Insights':
        return t('nav.insights');
      case 'Events':
        return t('nav.events');
      case 'Contact':
        return t('nav.contact');
      default:
        return label;
    }
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavigate = (href: string) => {
    onClose();
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sitemap-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0F2042] text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close sitemap dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#B3864B] text-xs font-semibold uppercase tracking-wider mb-1 font-['Poppins']">
            <Compass className="w-4 h-4" />
            <span>Complete Architectural Index</span>
          </div>
          <h2 id="sitemap-modal-title" className="text-2xl font-bold font-['Poppins']">
            Website Sitemap &amp; Directory
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Index of all pages, 12 core geoscience services, official technical research publications (PDFs), statutory charters, and administrative contact channels.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2.5 pt-3 border-t border-white/10">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#B3864B] hover:bg-[#9c733d] text-white font-semibold text-xs transition-colors shadow-xs"
              title="Open standard XML sitemap for search crawlers"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>View XML Sitemap (/sitemap.xml)</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white font-medium text-xs transition-colors border border-white/10"
              title="Open robots.txt configuration"
            >
              <FileText className="w-3.5 h-3.5 text-[#B3864B]" />
              <span>View robots.txt</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-8 flex-1 text-slate-700">
          
          {/* Section 1: Main Landmark Sections */}
          <div>
            <div className="flex items-center gap-2 pb-2 mb-3 border-b border-slate-200">
              <Compass className="w-4 h-4 text-[#B3864B]" />
              <h3 className="font-bold text-sm sm:text-base text-[#0F2042] font-['Poppins'] uppercase tracking-wider">
                1. Main Website Sections
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavigate(link.href)}
                  className="p-3 bg-[#F8F9FA] hover:bg-white border border-slate-200/80 hover:border-[#B3864B] rounded-xl text-left transition-all duration-200 group cursor-pointer shadow-2xs"
                >
                  <div className="text-xs text-slate-400 group-hover:text-[#B3864B] font-mono">
                    {link.href}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#0F2042] group-hover:text-[#B3864B] font-['Poppins'] mt-0.5 flex items-center justify-between">
                    <span>{getNavLabel(link.label)}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: 12 Core Geospatial Services */}
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#B3864B]" />
                <h3 className="font-bold text-sm sm:text-base text-[#0F2042] font-['Poppins'] uppercase tracking-wider">
                  2. Core Geoscience &amp; GIS Services (12 Domains)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => handleNavigate('#services')}
                className="text-xs font-semibold text-[#B3864B] hover:underline cursor-pointer"
              >
                View Full Grid →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {CORE_SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  className="p-3.5 bg-slate-50/70 hover:bg-white rounded-xl border border-slate-200/80 hover:border-[#B3864B]/50 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-bold text-[#B3864B] font-mono">SERVICE {srv.id}</span>
                      <span className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {srv.category}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F2042] font-['Poppins'] leading-snug group-hover:text-[#B3864B] transition-colors">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-2.5 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectService?.(srv);
                      }}
                      className="text-[#0F2042] hover:text-[#B3864B] font-semibold text-[11px] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenQuote?.(srv);
                      }}
                      className="text-[#B3864B] hover:text-[#9c733d] font-semibold text-[11px] cursor-pointer"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Publications & Technical Research Reports */}
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#B3864B]" />
                <h3 className="font-bold text-sm sm:text-base text-[#0F2042] font-['Poppins'] uppercase tracking-wider">
                  3. Published Technical Research DPRs &amp; Documents
                </h3>
              </div>
              <span className="text-xs text-slate-500">Official PDFs</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {RESEARCH_REPORTS.map((rep, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-[#B3864B] text-[11px]">{rep.region}</span>
                      <span className="text-[10px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200 font-medium">
                        Verified PDF
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F2042] font-['Poppins'] leading-snug">
                      {rep.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Authors / Issuing Body: <strong>{rep.authors}</strong>
                    </p>
                  </div>

                  <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono truncate max-w-[200px]">
                      {rep.pdfUrl}
                    </span>
                    <a
                      href={rep.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0F2042] hover:bg-[#162c5c] text-white text-xs font-semibold transition-colors shadow-2xs"
                    >
                      <FileText className="w-3 h-3 text-[#B3864B]" />
                      <span>Open PDF</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Corporate Objects & Governance Mandate */}
          <div>
            <div className="flex items-center gap-2 pb-2 mb-3 border-b border-slate-200">
              <Landmark className="w-4 h-4 text-[#B3864B]" />
              <h3 className="font-bold text-sm sm:text-base text-[#0F2042] font-['Poppins'] uppercase tracking-wider">
                4. Statutory Charters &amp; Corporate Objects (INC-33 / INC-34)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="font-bold text-[#0F2042] font-['Poppins'] mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B3864B]" />
                  <span>Main Objects 3(a)</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  9 statutory business objects: SaaS Platforms, AI/ML spatial systems, Remote Sensing, Drone &amp; LiDAR surveying, Web-GIS, IT Consulting, and DPR preparation.
                </p>
                <button
                  type="button"
                  onClick={() => handleNavigate('#objective')}
                  className="mt-2 text-[#B3864B] font-semibold hover:underline block cursor-pointer"
                >
                  View 9 Clauses →
                </button>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="font-bold text-[#0F2042] font-['Poppins'] mb-1 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#B3864B]" />
                  <span>National Missions 3(a)(10)</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Chartered consulting and implementing partner for PM Gati-Shakti, Jal Jeevan Mission, Namami Gange, SARRA, CAMPA, MGNREGA, Smart Cities, and Disaster Management.
                </p>
                <button
                  type="button"
                  onClick={() => handleNavigate('#about')}
                  className="mt-2 text-[#B3864B] font-semibold hover:underline block cursor-pointer"
                >
                  View National Missions →
                </button>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="font-bold text-[#0F2042] font-['Poppins'] mb-1 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#B3864B]" />
                  <span>Furtherance Objects 3(b)</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  6 incidental clauses including establishing R&amp;D centers, training institutes, university curriculum accreditations, and intellectual property development.
                </p>
                <button
                  type="button"
                  onClick={() => handleNavigate('#objective')}
                  className="mt-2 text-[#B3864B] font-semibold hover:underline block cursor-pointer"
                >
                  View Furtherance Mandate →
                </button>
              </div>
            </div>
          </div>

          {/* Section 5: Legal & Contact */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-[#0F2042] font-['Poppins'] uppercase tracking-wider mb-1">
                Legal &amp; Regulatory Compliance
              </div>
              <p className="text-xs text-slate-500">
                {COMPANY_INFO.name} • Almora, Uttarakhand 263601, India
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenPrivacy?.();
                }}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-400 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenTerms?.();
                }}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-400 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100/80 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B3864B]" />
              {COMPANY_INFO.location}
            </span>
            <span className="hidden md:inline">•</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden md:flex items-center gap-1.5 text-slate-600 hover:text-[#B3864B] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#B3864B]" />
              {COMPANY_INFO.email}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#0F2042] hover:bg-[#162c5c] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Close Sitemap
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
