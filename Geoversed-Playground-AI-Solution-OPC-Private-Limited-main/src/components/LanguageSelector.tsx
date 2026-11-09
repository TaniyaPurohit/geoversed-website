import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage, SupportedLanguage } from '../i18n/LanguageContext';

interface LanguageSelectorProps {
  variant?: 'header' | 'footer' | 'mobile';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'header',
  className = '',
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages: { code: SupportedLanguage; label: string; nativeName: string; flag: string }[] = [
    { code: 'en', label: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'hi', label: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'te', label: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
    { code: 'mr', label: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
    { code: 'bn', label: 'Bangla', nativeName: 'বাংলা', flag: '🇮🇳' },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  if (variant === 'mobile') {
    return (
      <div className={`flex flex-col gap-2 p-2.5 rounded-xl bg-slate-100 border border-slate-200 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2042]">
          <Globe className="w-4 h-4 text-[#B3864B]" />
          <span>{t('lang.selectorLabel')}</span>
        </div>
        <div className="grid grid-cols-5 gap-1 p-1 bg-white rounded-lg border border-slate-200">
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLanguage(l.code)}
              className={`px-1 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer text-center truncate ${
                language === l.code
                  ? 'bg-[#0F2042] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-[#0F2042]'
              }`}
              title={l.label}
            >
              {l.nativeName}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const isDark = variant === 'footer';

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
          isDark
            ? 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            : 'bg-slate-50 hover:bg-white text-[#0F2042] hover:text-[#B3864B] border border-slate-200 hover:border-[#B3864B]/40 shadow-2xs'
        }`}
      >
        <Globe className={`w-3.5 h-3.5 ${isDark ? 'text-[#D4A366]' : 'text-[#B3864B]'}`} />
        <span className="font-['Poppins'] font-medium">{currentLang.nativeName}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          } ${isDark ? 'text-slate-300' : 'text-slate-400'}`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            variant === 'footer' ? 'bottom-full mb-2 left-0 sm:right-0 sm:left-auto' : 'top-full mt-1.5 right-0'
          } w-44 rounded-xl shadow-xl border border-slate-200 bg-white p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150`}
        >
          <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider font-['Poppins']">
            {t('lang.selectorLabel')}
          </div>
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLanguage(l.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer text-left ${
                language === l.code
                  ? 'bg-[#0F2042] text-white'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-[#0F2042]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{l.flag}</span>
                <span className="font-['Poppins']">{l.nativeName}</span>
                <span className="text-[10px] opacity-60">({l.label})</span>
              </div>
              {language === l.code && <Check className="w-3.5 h-3.5 text-[#B3864B]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
