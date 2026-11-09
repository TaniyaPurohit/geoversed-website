import React from 'react';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';
import { PROJECTS_DATA } from '../data/servicesData';
import { useLanguage } from '../i18n/LanguageContext';

interface InsightsSectionProps {
  onReadInsight?: (title: string) => void;
  onOpenQuote?: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onOpenQuote }) => {
  const { t } = useLanguage();
  // First three project research reports moved from section#projects into section#insights
  const researchReports = PROJECTS_DATA.slice(0, 3);

  return (
    <section id="insights" className="py-20 lg:py-24 bg-[#E6F8F6] border-t border-teal-200/70">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-semibold tracking-wider uppercase mb-3 font-['Poppins']">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t('insights.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Poppins'] tracking-tight">
              {t('insights.title')}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              {t('insights.subtitle')}
            </p>
          </div>
        </div>

        {/* 📄 The Official Research DPRs & Technical Reports */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-3 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider font-['Poppins']">
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span>Official Technical Reports &amp; DPRs</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Poppins'] mt-1">
                {t('insights.dprHeading')}
              </h3>
            </div>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 self-start sm:self-auto font-['Poppins']">
              {t('insights.dprBadge')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {researchReports.map((item) => (
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
                        <span>{t('insights.openReport')}</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-70 group-hover/btn:opacity-100" />
                      </a>
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-slate-900 font-['Poppins'] mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5 text-xs">
                  <span className="text-slate-400 font-medium">{item.tag}</span>
                  {onOpenQuote && (
                    <button
                      onClick={onOpenQuote}
                      className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer transition-colors ml-auto"
                    >
                      <span>{t('projects.inquireBtn')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
