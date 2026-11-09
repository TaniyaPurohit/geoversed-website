import React, { useState } from 'react';
import { ExternalLink, FileText, FolderKanban } from 'lucide-react';
import { PROJECTS_DATA } from '../data/servicesData';
import { useLanguage } from '../i18n/LanguageContext';

interface ProjectsSectionProps {
  onOpenQuote: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenQuote }) => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');

  // The first three project divs were moved to section#insights (Knowledge Hub / Publications)
  const remainingProjects = PROJECTS_DATA.slice(3);

  const filteredProjects =
    activeFilter === 'All'
      ? remainingProjects
      : remainingProjects.filter((p) => p.category === activeFilter);

  const filterCategories = [
    { key: 'All', labelEn: 'All', labelHi: 'सभी' },
    { key: 'Infrastructure', labelEn: 'Infrastructure', labelHi: 'बुनियादी ढाँचा' },
    { key: 'Hydrology', labelEn: 'Hydrology', labelHi: 'जल विज्ञान' },
    { key: 'Environment', labelEn: 'Environment', labelHi: 'पर्यावरण' },
  ];

  return (
    <section id="projects" className="py-20 lg:py-24 bg-[#F5E4E4] border-t border-[#800000]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-semibold tracking-wider uppercase mb-3 font-['Poppins']">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>{t('projects.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Poppins'] tracking-tight">
              {t('projects.title')}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {filterCategories.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {language === 'hi' ? filter.labelHi : filter.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              id={`project-card-${item.id}`}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group hover:border-blue-300 scroll-mt-24 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-3">
                  <span className="uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60 font-semibold">
                    {item.category}
                  </span>
                  <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200 text-slate-500 font-medium">
                    {item.region}
                  </span>
                </div>

                {item.reportUrl && (
                  <div className="mb-3">
                    <a
                      id={`project-report-btn-${item.id}`}
                      href={item.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-semibold text-xs transition-all duration-200 border border-blue-200 shadow-2xs cursor-pointer group/btn"
                      title="Open Technical Research Report (PDF)"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{t('projects.reportBtn')}</span>
                    </a>
                  </div>
                )}

                <h3 className="text-lg font-bold text-slate-900 font-['Poppins'] mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5 text-xs">
                <span className="text-slate-400 font-medium">{item.tag}</span>
                <button
                  onClick={onOpenQuote}
                  className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer transition-colors ml-auto"
                >
                  <span>{t('projects.inquireBtn')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
