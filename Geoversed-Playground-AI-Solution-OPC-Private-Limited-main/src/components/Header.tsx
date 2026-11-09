import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Eye, Target, ShieldCheck, Layers, FolderKanban, BookOpen, FileText, Newspaper, Compass, Share2 } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS, CORE_SERVICES, PROJECTS_DATA, INSIGHTS_ARTICLES, PUBLISHED_REPORTS } from '../data/servicesData';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  onOpenQuote: () => void;
  onOpenSitemap?: () => void;
  onOpenShare?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, onOpenSitemap, onOpenShare }) => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [isInsightsDropdownOpen, setIsInsightsDropdownOpen] = useState(false);
  const [isMobileInsightsOpen, setIsMobileInsightsOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const projectsDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const insightsDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getNavLabel = (label: string) => {
    switch (label) {
      case 'Home': return t('nav.home');
      case 'About': return t('nav.about');
      case 'Services': return t('nav.services');
      case 'Projects': return t('nav.projects');
      case 'Insights': return t('nav.insights');
      case 'Events': return t('nav.events');
      case 'Contact': return t('nav.contact');
      default: return label;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 150);
  };

  const handleServicesMouseEnter = () => {
    if (servicesDropdownTimeoutRef.current) {
      clearTimeout(servicesDropdownTimeoutRef.current);
      servicesDropdownTimeoutRef.current = null;
    }
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesDropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
  };

  const handleProjectsMouseEnter = () => {
    if (projectsDropdownTimeoutRef.current) {
      clearTimeout(projectsDropdownTimeoutRef.current);
      projectsDropdownTimeoutRef.current = null;
    }
    setIsProjectsDropdownOpen(true);
  };

  const handleProjectsMouseLeave = () => {
    projectsDropdownTimeoutRef.current = setTimeout(() => {
      setIsProjectsDropdownOpen(false);
    }, 150);
  };

  const handleInsightsMouseEnter = () => {
    if (insightsDropdownTimeoutRef.current) {
      clearTimeout(insightsDropdownTimeoutRef.current);
      insightsDropdownTimeoutRef.current = null;
    }
    setIsInsightsDropdownOpen(true);
  };

  const handleInsightsMouseLeave = () => {
    insightsDropdownTimeoutRef.current = setTimeout(() => {
      setIsInsightsDropdownOpen(false);
    }, 150);
  };

  // Close mobile menu when clicking a link
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsProjectsDropdownOpen(false);
    setIsInsightsDropdownOpen(false);
    if (href.startsWith('#')) {
      window.location.hash = href;
      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0F1D]/95 backdrop-blur-md shadow-xs py-3 border-b border-slate-800/80'
          : 'bg-[#0A0F1D] py-4 border-b border-slate-800/80'
      }`}
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-[52px]">
        {/* Left Section: Logo & Brand Name */}
        <a
          href="#home"
          id="nav-brand-link"
          className="relative z-10 flex items-center group transition-transform hover:opacity-95"
        >
          <Logo variant="light" size="md" subtitleColor="#D4A76A" />
        </a>

        {/* Center Section: Horizontal Flex Navigation Menu (Centered in Header) */}
        <nav
          id="desktop-navigation-menu"
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-1 lg:space-x-3 px-5 lg:px-6 py-1.5 rounded-full border border-teal-300/60 bg-[#5EEAD4] z-10 shadow-sm shadow-teal-500/15"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((item) => {
            if (item.label === 'About') {
              return (
                <div
                  key={item.label}
                  className="relative py-1"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    id={`nav-link-${item.label.toLowerCase()}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[#0F2042] hover:text-[#0F2042] hover:bg-white/40 font-['Poppins'] font-semibold text-sm lg:text-[15px] px-3 py-1.5 rounded-full transition-all duration-200 relative inline-flex items-center gap-1.5 tracking-normal cursor-pointer select-none group/about"
                  >
                    <span>{getNavLabel(item.label)}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 text-[#0F2042]/70 group-hover/about:text-[#0F2042] ${
                        isAboutDropdownOpen ? 'rotate-180 text-[#0F2042]' : ''
                      }`}
                    />
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0F2042] scale-x-0 group-hover/about:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                  </a>

                  {/* Dropdown Menu for Vision, Mission and Objective */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-64 z-50 transition-all duration-200 ${
                      isAboutDropdownOpen
                        ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                        : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-slate-200/90 p-2 overflow-hidden">
                      <div className="px-3 py-1.5 mb-1 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider font-['Poppins']">
                          Corporate Mandate
                        </span>
                        <span className="text-[10px] font-medium text-slate-400">Clause 3(a)</span>
                      </div>

                      {/* Vision Option */}
                      <a
                        href="#vision"
                        onClick={(e) => handleNavClick(e, '#vision')}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#0F2042]/5 group-hover/item:bg-[#0F2042] text-[#0F2042] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5">
                          <Eye className="w-4 h-4 text-blue-600 group-hover/item:text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#0F2042] font-['Poppins'] group-hover/item:text-blue-600 transition-colors flex items-center gap-1.5">
                            <span>Vision</span>
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Category-defining global technology enterprise
                          </div>
                        </div>
                      </a>

                      {/* Mission Option */}
                      <a
                        href="#mission"
                        onClick={(e) => handleNavClick(e, '#mission')}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#0F2042]/5 group-hover/item:bg-[#0F2042] text-[#0F2042] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5">
                          <Target className="w-4 h-4 text-blue-600 group-hover/item:text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#0F2042] font-['Poppins'] group-hover/item:text-blue-600 transition-colors flex items-center gap-1.5">
                            <span>Mission</span>
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Transforming e-Governance into intelligent g-Governance
                          </div>
                        </div>
                      </a>

                      {/* Objective Option */}
                      <a
                        href="#objective"
                        onClick={(e) => handleNavClick(e, '#objective')}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#0F2042]/5 group-hover/item:bg-[#0F2042] text-[#0F2042] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5">
                          <ShieldCheck className="w-4 h-4 text-blue-600 group-hover/item:text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#0F2042] font-['Poppins'] group-hover/item:text-blue-600 transition-colors flex items-center gap-1.5">
                            <span>Objective</span>
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight">
                            Main Objects & matters for furtherance
                          </div>
                        </div>
                      </a>

                      {/* View Complete About Section */}
                      <div className="mt-1 pt-1.5 border-t border-slate-100">
                        <a
                          href="#about"
                          onClick={(e) => handleNavClick(e, '#about')}
                          className="flex items-center justify-between px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-[#0F2042] hover:bg-slate-50 rounded-md transition-colors font-['Poppins']"
                        >
                          <span>Overview & Profile</span>
                          <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (item.label === 'Services') {
              return (
                <div
                  key={item.label}
                  className="relative py-1"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <a
                    id={`nav-link-${item.label.toLowerCase()}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[#0F2042] hover:text-[#0F2042] hover:bg-white/40 font-['Poppins'] font-semibold text-sm lg:text-[15px] px-3 py-1.5 rounded-full transition-all duration-200 relative inline-flex items-center gap-1.5 tracking-normal cursor-pointer select-none group/services"
                  >
                    <span>{getNavLabel(item.label)}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 text-[#0F2042]/70 group-hover/services:text-[#0F2042] ${
                        isServicesDropdownOpen ? 'rotate-180 text-[#0F2042]' : ''
                      }`}
                    />
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0F2042] scale-x-0 group-hover/services:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                  </a>

                  {/* Mega Dropdown Menu for 12 Services */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[640px] lg:w-[720px] z-50 transition-all duration-200 ${
                      isServicesDropdownOpen
                        ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                        : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-2xl border border-slate-200/90 overflow-hidden text-left">
                      <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-blue-600" />
                          <span className="text-[11px] font-bold text-[#0F2042] uppercase tracking-wider font-['Poppins']">
                            12 Core Geospatial &amp; Geoscience Services
                          </span>
                        </div>
                        <span className="text-[10px] font-semibold text-blue-600 bg-blue-600/10 px-2.5 py-0.5 rounded-full border border-[#B3864B]/20">
                          Himalayan &amp; AI-Driven
                        </span>
                      </div>

                      {/* 2-column grid of 12 services */}
                      <div className="grid grid-cols-2 gap-1 p-2.5 max-h-[420px] overflow-y-auto">
                        {CORE_SERVICES.map((srv) => (
                          <a
                            key={srv.id}
                            id={`dropdown-service-link-${srv.id}`}
                            href={`#service-card-${srv.id}`}
                            onClick={(e) => handleNavClick(e, `#service-card-${srv.id}`)}
                            className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all duration-200 group/srv"
                          >
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#0F2042]/5 group-hover/srv:bg-[#0F2042] text-[#0F2042] group-hover/srv:text-white font-bold text-[11px] font-['Poppins'] shrink-0 transition-colors mt-0.5">
                              {srv.id}
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-semibold text-[#0F2042] group-hover/srv:text-blue-600 transition-colors leading-tight line-clamp-1 font-['Poppins']">
                                {srv.title}
                              </div>
                              <div className="text-[10px] text-slate-400 uppercase tracking-wider truncate mt-0.5 font-medium">
                                {srv.category}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>

                      {/* Bottom Footer */}
                      <div className="px-4 py-2.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Precision surveys, GIS platforms &amp; environmental studies
                        </span>
                        <a
                          href="#services"
                          onClick={(e) => handleNavClick(e, '#services')}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-[#0F2042] transition-colors font-['Poppins']"
                        >
                          <span>Explore All 12 Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (item.label === 'Projects') {
              return (
                <div
                  key={item.label}
                  className="relative py-1"
                  onMouseEnter={handleProjectsMouseEnter}
                  onMouseLeave={handleProjectsMouseLeave}
                >
                  <a
                    id={`nav-link-${item.label.toLowerCase()}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[#0F2042] hover:text-[#0F2042] hover:bg-white/40 font-['Poppins'] font-semibold text-sm lg:text-[15px] px-3 py-1.5 rounded-full transition-all duration-200 relative inline-flex items-center gap-1.5 tracking-normal cursor-pointer select-none group/projects"
                  >
                    <span>{getNavLabel(item.label)}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 text-[#0F2042]/70 group-hover/projects:text-[#0F2042] ${
                        isProjectsDropdownOpen ? 'rotate-180 text-[#0F2042]' : ''
                      }`}
                    />
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0F2042] scale-x-0 group-hover/projects:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                  </a>

                  {/* Mega Dropdown Menu for Projects */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[580px] lg:w-[640px] z-50 transition-all duration-200 ${
                      isProjectsDropdownOpen
                        ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                        : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-2xl border border-slate-200/90 overflow-hidden text-left">
                      <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FolderKanban className="w-4 h-4 text-blue-600" />
                          <span className="text-[11px] font-bold text-[#0F2042] uppercase tracking-wider font-['Poppins']">
                            Featured Geoscience &amp; GIS Projects
                          </span>
                        </div>
                        <span className="text-[10px] font-semibold text-blue-600 bg-blue-600/10 px-2.5 py-0.5 rounded-full border border-[#B3864B]/20">
                          Himalayan &amp; National Initiatives
                        </span>
                      </div>

                      {/* 2-column grid of projects */}
                      <div className="grid grid-cols-2 gap-1.5 p-3 max-h-[380px] overflow-y-auto">
                        {PROJECTS_DATA.map((proj) => (
                          <a
                            key={proj.id}
                            id={`dropdown-project-link-${proj.id}`}
                            href={`#project-card-${proj.id}`}
                            onClick={(e) => handleNavClick(e, `#project-card-${proj.id}`)}
                            className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all duration-200 group/proj"
                          >
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#0F2042]/5 group-hover/proj:bg-[#0F2042] text-[#0F2042] group-hover/proj:text-white font-bold text-[11px] font-['Poppins'] shrink-0 transition-colors mt-0.5">
                              0{proj.id}
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-semibold text-[#0F2042] group-hover/proj:text-blue-600 transition-colors leading-tight line-clamp-1 font-['Poppins']">
                                {proj.title}
                              </div>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-[10px] text-blue-600 font-semibold uppercase tracking-wider">
                                  {proj.category}
                                </span>
                                <span className="text-[10px] text-slate-300">•</span>
                                <span className="text-[10px] text-slate-400 truncate">
                                  {proj.region}
                                </span>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>

                      {/* Bottom Footer */}
                      <div className="px-4 py-2.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Custom DPRs, field surveys &amp; spatial analytics
                        </span>
                        <a
                          href="#projects"
                          onClick={(e) => handleNavClick(e, '#projects')}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-[#0F2042] transition-colors font-['Poppins']"
                        >
                          <span>Explore All Projects</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (item.label === 'Insights') {
              return (
                <div
                  key={item.label}
                  className="relative py-1"
                  onMouseEnter={handleInsightsMouseEnter}
                  onMouseLeave={handleInsightsMouseLeave}
                >
                  <a
                    id={`nav-link-${item.label.toLowerCase()}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[#0F2042] hover:text-[#0F2042] hover:bg-white/40 font-['Poppins'] font-semibold text-sm lg:text-[15px] px-3 py-1.5 rounded-full transition-all duration-200 relative inline-flex items-center gap-1.5 tracking-normal cursor-pointer select-none group/insights"
                  >
                    <span>{getNavLabel(item.label)}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 text-[#0F2042]/70 group-hover/insights:text-[#0F2042] ${
                        isInsightsDropdownOpen ? 'rotate-180 text-[#0F2042]' : ''
                      }`}
                    />
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0F2042] scale-x-0 group-hover/insights:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                  </a>

                  {/* Dropdown Menu for Insights & Publications */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[520px] lg:w-[580px] z-50 transition-all duration-200 ${
                      isInsightsDropdownOpen
                        ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                        : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-2xl border border-slate-200/90 overflow-hidden text-left">
                      {/* Dropdown Header */}
                      <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          <span className="text-[11px] font-bold text-[#0F2042] uppercase tracking-wider font-['Poppins']">
                            Geoscience Insights &amp; Publications
                          </span>
                        </div>
                        <span className="text-[10px] font-semibold text-blue-600 bg-blue-600/10 px-2.5 py-0.5 rounded-full border border-[#B3864B]/20">
                          Knowledge Hub
                        </span>
                      </div>

                      {/* Research Articles & Papers */}
                      <div className="p-3 space-y-1.5 max-h-[300px] overflow-y-auto">
                        <div className="px-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Research Articles &amp; Whitepapers
                        </div>
                        {INSIGHTS_ARTICLES.map((article) => (
                          <a
                            key={article.id}
                            id={`dropdown-insight-link-${article.id}`}
                            href={`#insight-article-${article.id}`}
                            onClick={(e) => handleNavClick(e, `#insight-article-${article.id}`)}
                            className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all duration-200 group/art"
                          >
                            <div className="w-7 h-7 rounded-md bg-[#0F2042]/5 group-hover/art:bg-[#0F2042] text-[#0F2042] group-hover/art:text-blue-600 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                              <Newspaper className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-semibold text-[#0F2042] group-hover/art:text-blue-600 transition-colors leading-tight font-['Poppins']">
                                {article.title}
                              </div>
                              <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-400">
                                <span className="font-semibold text-blue-600">{article.category}</span>
                                <span>•</span>
                                <span>{article.date}</span>
                                <span>•</span>
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>

                      {/* Published Technical Research Reports (PDF Direct Links) */}
                      <div className="px-3.5 py-2.5 bg-slate-50/80 border-t border-slate-100">
                        <div className="text-[10px] font-bold text-[#0F2042] uppercase tracking-wider mb-2 flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-slate-600">
                            <FileText className="w-3.5 h-3.5 text-blue-600" />
                            Official Technical Reports (PDF)
                          </span>
                          <span className="text-[10px] text-blue-600 font-semibold">Towards Aviral Ganga</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {PUBLISHED_REPORTS.map((rep, rIdx) => (
                            <a
                              key={rIdx}
                              href={rep.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start gap-2 p-2 rounded-lg bg-white hover:bg-slate-100/80 border border-slate-200/70 hover:border-[#B3864B]/40 transition-all group/rep shadow-2xs"
                              title={`Download ${rep.title}`}
                            >
                              <FileText className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                              <div className="min-w-0 flex-1">
                                <div className="text-[11px] font-semibold text-[#0F2042] group-hover/rep:text-blue-600 transition-colors truncate font-['Poppins']">
                                  {rep.shortTitle}
                                </div>
                                <div className="text-[10px] text-slate-400 truncate">
                                  {rep.region}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Dropdown Footer */}
                      <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Peer-reviewed publications &amp; watershed models
                        </span>
                        <a
                          href="#insights"
                          onClick={(e) => handleNavClick(e, '#insights')}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-[#0F2042] transition-colors font-['Poppins']"
                        >
                          <span>Explore Knowledge Hub</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.label}
                id={`nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[#0F2042] hover:text-[#0F2042] hover:bg-white/40 font-['Poppins'] font-semibold text-sm lg:text-[15px] px-3 py-1.5 rounded-full transition-all duration-200 relative group tracking-normal cursor-pointer select-none"
              >
                {getNavLabel(item.label)}
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0F2042] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
              </a>
            );
          })}
        </nav>

        {/* Right Section: Language Selector, Site Map Button, CTA Button & Mobile Menu Toggle */}
        <div className="relative z-10 flex items-center space-x-1.5 sm:space-x-2.5">
          {/* I18n Language Selector */}
          <LanguageSelector variant="footer" />

          <button
            id="header-sitemap-btn"
            type="button"
            onClick={() => {
              if (onOpenSitemap) {
                onOpenSitemap();
              } else {
                window.location.hash = '#sitemap';
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white px-3 sm:px-3.5 py-2 rounded-full border border-slate-700/80 hover:border-slate-600 bg-slate-900/80 hover:bg-slate-800 transition-all duration-200 cursor-pointer shadow-2xs"
            title="Open website sitemap and directory"
          >
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>{t('nav.sitemap')}</span>
          </button>

          <button
            id="header-share-btn"
            type="button"
            onClick={() => {
              if (onOpenShare) {
                onOpenShare();
              } else {
                window.location.hash = '#share';
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white px-3 sm:px-3.5 py-2 rounded-full border border-slate-700/80 hover:border-slate-600 bg-slate-900/80 hover:bg-slate-800 transition-all duration-200 cursor-pointer shadow-2xs"
            title="Share website link and social preview"
          >
            <Share2 className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Share</span>
          </button>

          <button
            id="header-get-quote-btn"
            onClick={onOpenQuote}
            className="hidden sm:inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer font-['Poppins']"
          >
            {t('nav.getQuote')}
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      <div
        id="mobile-nav-drawer"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-slate-800 bg-[#0A0F1D] text-white ${
          isMobileMenuOpen ? 'max-h-[640px] opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-3 pb-5 space-y-2 max-w-[1200px] mx-auto">
          {/* Mobile Language Selector */}
          <div className="pb-2 mb-2 border-b border-slate-100">
            <LanguageSelector variant="mobile" />
          </div>

          {NAV_LINKS.map((item) => {
            if (item.label === 'About') {
              return (
                <div key={item.label} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <a
                      id={`mobile-nav-link-${item.label.toLowerCase()}`}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-[#0F2042] hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200"
                    >
                      {getNavLabel(item.label)}
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                      className="p-2 text-slate-500 hover:text-blue-600"
                      aria-label="Toggle About submenu"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileAboutOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {isMobileAboutOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-[#B3864B]/30 ml-3 bg-slate-50/60 rounded-r-lg">
                      <a
                        href="#vision"
                        onClick={(e) => handleNavClick(e, '#vision')}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-white rounded transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-blue-600" />
                        <span>Vision</span>
                      </a>
                      <a
                        href="#mission"
                        onClick={(e) => handleNavClick(e, '#mission')}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-white rounded transition-colors"
                      >
                        <Target className="w-3.5 h-3.5 text-blue-600" />
                        <span>Mission</span>
                      </a>
                      <a
                        href="#objective"
                        onClick={(e) => handleNavClick(e, '#objective')}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-white rounded transition-colors"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                        <span>Objective</span>
                      </a>
                    </div>
                  )}
                </div>
              );
            }

            if (item.label === 'Services') {
              return (
                <div key={item.label} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <a
                      id={`mobile-nav-link-${item.label.toLowerCase()}`}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-[#0F2042] hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200"
                    >
                      {getNavLabel(item.label)}
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="p-2 text-slate-500 hover:text-blue-600"
                      aria-label="Toggle Services submenu"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileServicesOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {isMobileServicesOpen && (
                    <div className="pl-3 pr-2 py-2 space-y-1 border-l-2 border-[#B3864B]/30 ml-3 bg-slate-50/60 rounded-r-lg max-h-64 overflow-y-auto">
                      {CORE_SERVICES.map((srv) => (
                        <a
                          key={srv.id}
                          href={`#service-card-${srv.id}`}
                          onClick={(e) => handleNavClick(e, `#service-card-${srv.id}`)}
                          className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-white rounded transition-colors"
                        >
                          <span className="font-bold text-blue-600 text-[10px] w-4 shrink-0 font-['Poppins']">
                            {srv.id}
                          </span>
                          <span className="truncate">{srv.title}</span>
                        </a>
                      ))}
                      <a
                        href="#services"
                        onClick={(e) => handleNavClick(e, '#services')}
                        className="flex items-center justify-between px-2.5 py-2 text-xs font-semibold text-blue-600 hover:text-[#0F2042] pt-2 border-t border-slate-200/60 mt-1"
                      >
                        <span>{t('nav.all12Services')}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              );
            }

            if (item.label === 'Projects') {
              return (
                <div key={item.label} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <a
                      id={`mobile-nav-link-${item.label.toLowerCase()}`}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-[#0F2042] hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200"
                    >
                      {getNavLabel(item.label)}
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                      className="p-2 text-slate-500 hover:text-blue-600"
                      aria-label="Toggle Projects submenu"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileProjectsOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {isMobileProjectsOpen && (
                    <div className="pl-3 pr-2 py-2 space-y-1 border-l-2 border-[#B3864B]/30 ml-3 bg-slate-50/60 rounded-r-lg max-h-64 overflow-y-auto">
                      {PROJECTS_DATA.map((proj) => (
                        <a
                          key={proj.id}
                          href={`#project-card-${proj.id}`}
                          onClick={(e) => handleNavClick(e, `#project-card-${proj.id}`)}
                          className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-white rounded transition-colors"
                        >
                          <span className="font-bold text-blue-600 text-[10px] w-4 shrink-0 font-['Poppins']">
                            0{proj.id}
                          </span>
                          <span className="truncate">{proj.title}</span>
                        </a>
                      ))}
                      <a
                        href="#projects"
                        onClick={(e) => handleNavClick(e, '#projects')}
                        className="flex items-center justify-between px-2.5 py-2 text-xs font-semibold text-blue-600 hover:text-[#0F2042] pt-2 border-t border-slate-200/60 mt-1"
                      >
                        <span>{t('nav.featuredProjects')}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              );
            }

            if (item.label === 'Insights') {
              return (
                <div key={item.label} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <a
                      id={`mobile-nav-link-${item.label.toLowerCase()}`}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-[#0F2042] hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200"
                    >
                      {getNavLabel(item.label)}
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsMobileInsightsOpen(!isMobileInsightsOpen)}
                      className="p-2 text-slate-500 hover:text-blue-600"
                      aria-label="Toggle Insights submenu"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileInsightsOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {isMobileInsightsOpen && (
                    <div className="pl-3 pr-2 py-2 space-y-2 border-l-2 border-[#B3864B]/30 ml-3 bg-slate-50/60 rounded-r-lg">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
                        Articles &amp; Papers
                      </div>
                      {INSIGHTS_ARTICLES.map((article) => (
                        <a
                          key={article.id}
                          href={`#insight-article-${article.id}`}
                          onClick={(e) => handleNavClick(e, `#insight-article-${article.id}`)}
                          className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-white rounded transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{article.title}</span>
                        </a>
                      ))}

                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1 pt-1 border-t border-slate-200/60">
                        {t('nav.reportsPdf')}
                      </div>
                      {PUBLISHED_REPORTS.map((rep, rIdx) => (
                        <a
                          key={rIdx}
                          href={rep.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-white rounded transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{rep.shortTitle}</span>
                        </a>
                      ))}

                      <a
                        href="#insights"
                        onClick={(e) => handleNavClick(e, '#insights')}
                        className="flex items-center justify-between px-2.5 py-2 text-xs font-semibold text-blue-600 hover:text-[#0F2042] pt-2 border-t border-slate-200/60 mt-1"
                      >
                        <span>{t('nav.knowledgeHub')}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.label}
                id={`mobile-nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#0F2042] hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200"
              >
                {getNavLabel(item.label)}
              </a>
            );
          })}
          <div className="pt-2 space-y-2">
            <button
              id="mobile-menu-sitemap-btn"
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onOpenSitemap) {
                  onOpenSitemap();
                } else {
                  window.location.hash = '#sitemap';
                }
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0F2042] text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer border border-slate-200"
            >
              <Compass className="w-4 h-4 text-blue-600" />
              <span>{t('nav.sitemap')}</span>
            </button>
            <button
              id="mobile-menu-get-quote-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-[#9c733d] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm"
            >
              <span>{t('nav.getQuote')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
