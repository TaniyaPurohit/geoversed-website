import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS, COMPANY_INFO } from '../data/servicesData';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenSitemap?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenSitemap }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      window.location.hash = href;
      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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

  return (
    <footer id="main-footer" className="bg-[#0A0F1D] text-white w-full border-t border-slate-800/80">
      {/* Main Footer Row */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start">
          
          {/* Column 1 (Brand): Company logo graphic, title text, and small tagline */}
          <div id="footer-brand-column" className="space-y-4">
            <a href="#home" className="inline-block transition-opacity hover:opacity-95">
              <Logo variant="light" size="md" textColor="text-white" subtitleColor="#87A9FF" />
            </a>
            <p
              id="footer-tagline"
              className="text-slate-300 text-sm leading-relaxed max-w-sm font-normal"
            >
              {t('footer.tagline')}
            </p>
            <div className="text-xs text-sky-400/90 pt-1 font-medium">
              Registered Geospatial &amp; Geoscience Technical Consultancy
            </div>
          </div>

          {/* Column 2 (Quick Links): Clean list of text links mirroring main header menu */}
          <div id="footer-links-column" className="md:px-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-4 font-['Poppins']">
              {t('footer.quickLinks')}
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-y-2.5 gap-x-6 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    id={`footer-link-${link.label.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-300 hover:text-white hover:underline transition-colors duration-200 inline-block py-0.5"
                  >
                    {getNavLabel(link.label)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  id="footer-quicklink-sitemap"
                  href="#sitemap"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenSitemap?.();
                  }}
                  className="text-sky-400 hover:text-white hover:underline transition-colors duration-200 inline-block py-0.5 font-medium"
                >
                  {t('nav.sitemap')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 (Contact Us): Aligned to the right with icon placeholders */}
          <div id="footer-contact-column" className="md:text-right space-y-3.5 flex flex-col md:items-end">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-1 font-['Poppins']">
              {t('footer.contactUs')}
            </h4>

            {/* 📍 Location text: Almora, Uttarakhand, India */}
            <div className="flex items-start md:justify-end gap-2.5 text-sm text-slate-200">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span id="footer-location-text">{COMPANY_INFO.location}</span>
            </div>

            {/* ✉️ Email link text: geoversedmailbox@gmail.com */}
            <div className="flex items-center md:justify-end gap-2.5 text-sm text-slate-200">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <a
                id="footer-email-link"
                href={`mailto:${COMPANY_INFO.email}`}
                className="hover:text-white hover:underline transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>

            {/* 📞 Phone link text: Ph: 8273753398 / 7533983533 */}
            <div className="flex items-start md:justify-end gap-2.5 text-sm text-slate-200">
              <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div className="flex flex-col md:items-end space-y-0.5">
                <a
                  id="footer-phone-link"
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <a
                  id="footer-phone-link-2"
                  href={`tel:${COMPANY_INFO.phone2}`}
                  className="hover:text-white hover:underline transition-colors text-xs text-slate-300"
                >
                  {COMPANY_INFO.phone2Display}
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. {t('footer.rights')}</p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6">
            <LanguageSelector variant="footer" />
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                onOpenPrivacy?.();
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t('footer.privacy')}
            </a>
            <a
              id="footer-terms-link"
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                onOpenTerms?.();
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t('footer.terms')}
            </a>
            <a
              id="footer-sitemap-link"
              href="#sitemap"
              onClick={(e) => {
                e.preventDefault();
                onOpenSitemap?.();
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t('nav.sitemap')}
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Back to top"
            >
              <span>{t('footer.backToTop')}</span>
              <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
