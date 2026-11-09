import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { ServiceItem } from '../types';
import { CORE_SERVICES } from '../data/servicesData';
import { useLanguage } from '../i18n/LanguageContext';

interface CoreServicesProps {
  onSelectServiceForQuote: (service: ServiceItem) => void;
  onOpenDetails: (service: ServiceItem) => void;
}

// Distinct colorful badge styling per service id matching the reference design
const SERVICE_THEMES: Record<string, { badgeBg: string; pillBg: string; borderHover: string }> = {
  '01': { badgeBg: 'bg-cyan-600', pillBg: 'bg-cyan-50 text-cyan-700 border-cyan-200/80', borderHover: 'hover:border-cyan-300' },
  '02': { badgeBg: 'bg-sky-600', pillBg: 'bg-sky-50 text-sky-700 border-sky-200/80', borderHover: 'hover:border-sky-300' },
  '03': { badgeBg: 'bg-indigo-600', pillBg: 'bg-indigo-50 text-indigo-700 border-indigo-200/80', borderHover: 'hover:border-indigo-300' },
  '04': { badgeBg: 'bg-blue-600', pillBg: 'bg-blue-50 text-blue-700 border-blue-200/80', borderHover: 'hover:border-blue-300' },
  '05': { badgeBg: 'bg-teal-600', pillBg: 'bg-teal-50 text-teal-700 border-teal-200/80', borderHover: 'hover:border-teal-300' },
  '06': { badgeBg: 'bg-emerald-600', pillBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/80', borderHover: 'hover:border-emerald-300' },
  '07': { badgeBg: 'bg-amber-600', pillBg: 'bg-amber-50 text-amber-800 border-amber-200/80', borderHover: 'hover:border-amber-300' },
  '08': { badgeBg: 'bg-orange-600', pillBg: 'bg-orange-50 text-orange-700 border-orange-200/80', borderHover: 'hover:border-orange-300' },
  '09': { badgeBg: 'bg-rose-600', pillBg: 'bg-rose-50 text-rose-700 border-rose-200/80', borderHover: 'hover:border-rose-300' },
  '10': { badgeBg: 'bg-purple-600', pillBg: 'bg-purple-50 text-purple-700 border-purple-200/80', borderHover: 'hover:border-purple-300' },
  '11': { badgeBg: 'bg-fuchsia-600', pillBg: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200/80', borderHover: 'hover:border-fuchsia-300' },
  '12': { badgeBg: 'bg-blue-700', pillBg: 'bg-blue-50 text-blue-700 border-blue-200/80', borderHover: 'hover:border-blue-300' },
};

export const CoreServices: React.FC<CoreServicesProps> = ({
  onSelectServiceForQuote,
  onOpenDetails,
}) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    {
      key: 'All',
      label: {
        en: 'All (12)',
        hi: 'सभी 12 सेवाएँ',
        te: 'అన్నీ (12)',
        mr: 'सर्व (12)',
        bn: 'সমস্ত (১২)',
      },
    },
    {
      key: 'Digital Geospatial',
      label: {
        en: 'Digital Geospatial',
        hi: 'डिजिटल भू-स्थानिक',
        te: 'డిజిటల్ జియోస్పేషియల్',
        mr: 'डिजिटल भू-स्थानिक',
        bn: 'ডিজিটাল ভূ-स्थानিক',
      },
    },
    {
      key: 'Planning & Governance',
      label: {
        en: 'Planning & Governance',
        hi: 'नियोजन व जी-गवर्नेंस',
        te: 'ప్లానింగ్ & పాలన',
        mr: 'नियोजन व प्रशासन',
        bn: 'পরিকল্পনা ও প্রশাসন',
      },
    },
    {
      key: 'Hydrology & Environment',
      label: {
        en: 'Hydrology & Environment',
        hi: 'जल विज्ञान व पर्यावरण',
        te: 'హైడ్రాలజీ & పర్యావరణం',
        mr: 'जलविज्ञान व पर्यावरण',
      bn: 'জলবিজ্ঞান ও পরিবেশ',
      },
    },
    {
      key: 'Climate & Settlements',
      label: {
        en: 'Climate & Settlements',
        hi: 'जलवायु व बस्तियाँ',
        te: 'వాతావరణం & నివాసాలు',
        mr: 'हवामान व वसाहती',
        bn: 'জলবায়ু ও জনবসতি',
      },
    },
    {
      key: 'AI & Capacity Building',
      label: {
        en: 'AI & Capacity Building',
        hi: 'एआई व क्षमता निर्माण',
        te: 'AI & సామర్థ్య పెంపు',
        mr: 'एआय व क्षमता बांधणी',
        bn: 'এআই ও সক্ষমতা বৃদ্ধি',
      },
    },
  ];

  // Filter logic based on category
  const filteredServices = CORE_SERVICES.filter((service) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Digital Geospatial') {
      return ['01', '02', '03'].includes(service.id);
    }
    if (selectedCategory === 'Planning & Governance') {
      return ['03', '04'].includes(service.id);
    }
    if (selectedCategory === 'Hydrology & Environment') {
      return ['05', '06', '07'].includes(service.id);
    }
    if (selectedCategory === 'Climate & Settlements') {
      return ['07', '08', '09'].includes(service.id);
    }
    if (selectedCategory === 'AI & Capacity Building') {
      return ['10', '11', '12'].includes(service.id);
    }
    return true;
  });

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#F5E4E4] border-t border-[#800000]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-semibold tracking-wider uppercase mb-3 font-['Poppins']">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('services.badge')}</span>
          </div>
          <h2
            id="services-section-heading"
            className="text-slate-900 font-bold text-3xl sm:text-4xl md:text-[40px] tracking-tight font-['Poppins'] mb-4"
          >
            {t('services.title')}
          </h2>
          <p
            id="services-section-subtext"
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal"
          >
            {t('services.subtitle')}
          </p>
        </div>

        {/* Category Badges Toolbar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto w-full py-1 mb-12 pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-2xs'
              }`}
            >
              {cat.label[language] || cat.label.en}
            </button>
          ))}
        </div>

        {/* Grid Layout: Responsive 3-column CSS Grid matching the reference design */}
        <div
          id="services-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredServices.map((service) => {
            const theme = SERVICE_THEMES[service.id] || {
              badgeBg: 'bg-blue-600',
              pillBg: 'bg-blue-50 text-blue-700 border-blue-200',
              borderHover: 'hover:border-blue-300',
            };

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group bg-white rounded-2xl p-7 border border-slate-200/80 ${theme.borderHover} shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden scroll-mt-28`}
              >
                <div>
                  {/* Top Badge: Number and Category Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div
                        id={`badge-service-${service.id}`}
                        className={`inline-flex items-center justify-center ${theme.badgeBg} text-white font-bold text-xs tracking-wider px-2.5 py-1 rounded-md shadow-2xs font-['Poppins']`}
                      >
                        {service.id}
                      </div>

                      {service.category && (
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${theme.pillBg} uppercase tracking-wider`}
                        >
                          {service.category}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bold Card Title */}
                  <h3
                    id={`service-title-${service.id}`}
                    className="font-bold text-lg sm:text-xl text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug font-['Poppins']"
                  >
                    {service.title}
                  </h3>

                  {/* Short Text Description Block */}
                  <p
                    id={`service-desc-${service.id}`}
                    className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4"
                  >
                    {service.description}
                  </p>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto gap-2">
                  <button
                    id={`service-about-btn-${service.id}`}
                    onClick={() => onOpenDetails(service)}
                    className="text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer py-1.5 px-3 rounded-lg border border-slate-200/80 inline-flex items-center gap-1.5"
                  >
                    <span>{t('services.viewSpecifications')}</span>
                  </button>

                  <button
                    id={`service-quote-btn-${service.id}`}
                    onClick={() => onSelectServiceForQuote(service)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group/btn cursor-pointer py-1.5 px-2"
                  >
                    <span>{t('services.requestQuote')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No services found in this category.
            <button
              onClick={() => setSelectedCategory('All')}
              className="ml-2 text-blue-600 font-semibold underline cursor-pointer"
            >
              Show all services
            </button>
          </div>
        )}

        {/* Bottom Banner: Royal Indigo CTA Banner matching reference */}
        <div className="mt-16 bg-[#1E1B4B] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-white">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase mb-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              Tailored Himalayan Solutions
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-['Poppins'] text-white">
              Need a customized geospatial, geomorphological or geographical survey?
            </h4>
            <p className="text-indigo-200 text-sm mt-2 leading-relaxed">
              Our multidisciplinary team delivers precision mapping, field data acquisition, and spatial analytics for public agencies and research institutions.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForQuote(CORE_SERVICES[0])}
            className="shrink-0 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-sky-500/25 hover:-translate-y-0.5 cursor-pointer font-['Poppins']"
          >
            Consult With Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};
