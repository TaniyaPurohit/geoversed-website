import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoreServices } from './components/CoreServices';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InsightsSection } from './components/InsightsSection';
import { EventsSection } from './components/events/EventsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceItem, EventItem } from './types';
import { CORE_SERVICES } from './data/servicesData';
import { getEventById } from './data/events';
import { CertificationsMarquee } from './components/CertificationsMarquee';

// Lazy load modals so heavy assets and videos don't block the initial page render
const QuoteModal = lazy(() =>
  import('./components/QuoteModal').then((m) => ({ default: m.QuoteModal }))
);
const ServiceDetailModal = lazy(() =>
  import('./components/ServiceDetailModal').then((m) => ({
    default: m.ServiceDetailModal,
  }))
);
const PrivacyPolicyModal = lazy(() =>
  import('./components/PrivacyPolicyModal').then((m) => ({
    default: m.PrivacyPolicyModal,
  }))
);
const TermsOfServiceModal = lazy(() =>
  import('./components/TermsOfServiceModal').then((m) => ({
    default: m.TermsOfServiceModal,
  }))
);
const SitemapModal = lazy(() =>
  import('./components/SitemapModal').then((m) => ({
    default: m.SitemapModal,
  }))
);
const EventDetailModal = lazy(() =>
  import('./components/events/EventDetailModal').then((m) => ({
    default: m.EventDetailModal,
  }))
);

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [detailService, setDetailService] = useState<ServiceItem | null>(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);

  // Monitor hash changes for in-page smooth scrolling & modals
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash || '';

      if (hash === '#privacy') {
        setIsPrivacyOpen(true);
      } else if (hash === '#terms') {
        setIsTermsOpen(true);
      } else if (hash === '#sitemap') {
        setIsSitemapOpen(true);
      } else if (hash.startsWith('#events/') || hash.startsWith('#event/')) {
        const slug = hash.replace(/^#(?:events|event)\//, '').trim();
        const found = getEventById(slug);
        if (found) {
          setSelectedEvent(found);
        }
      } else if (hash.startsWith('#')) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Handlers
  const handleOpenQuote = (service?: ServiceItem) => {
    setSelectedService(service || null);
    setIsQuoteOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDetails = (service: ServiceItem) => {
    setDetailService(service);
  };

  const handleSelectEvent = (event: EventItem) => {
    setSelectedEvent(event);
    window.location.hash = `#events/${event.id}`;
  };

  const handleCloseEventModal = () => {
    setSelectedEvent(null);
    window.location.hash = '#events';
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Header / Navigation Bar */}
      <Header
        onOpenQuote={() => handleOpenQuote()}
        onOpenSitemap={() => setIsSitemapOpen(true)}
      />

      {/* Main Single Page Content Area - Fully Scrollable */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreServices={handleExploreServices}
          onViewProjects={handleViewProjects}
        />

        {/* 3. Events Section (Placed directly after Hero image) */}
        <EventsSection
          onSelectEvent={handleSelectEvent}
        />

        {/* 4. Core Services Grid Section */}
        <CoreServices
          onSelectServiceForQuote={(srv) => handleOpenQuote(srv)}
          onOpenDetails={handleOpenDetails}
        />

        {/* 5. About Section */}
        <AboutSection />

        <CertificationsMarquee />

        {/* 6. Projects Section */}
        <ProjectsSection
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 7. Insights Section */}
        <InsightsSection
          onOpenQuote={() => handleOpenQuote()}
          onReadInsight={() => {
            handleOpenDetails(CORE_SERVICES[0]);
          }}
        />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* 9. Footer Section */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenSitemap={() => setIsSitemapOpen(true)}
      />

      {/* Event Detail Modal (Single-page modal with photos, videos, & lightbox) */}
      {selectedEvent && (
        <Suspense fallback={null}>
          <EventDetailModal
            event={selectedEvent}
            isOpen={!!selectedEvent}
            onClose={handleCloseEventModal}
            onSelectEvent={handleSelectEvent}
          />
        </Suspense>
      )}

      {/* Quote Request Modal */}
      {isQuoteOpen && (
        <Suspense fallback={null}>
          <QuoteModal
            isOpen={isQuoteOpen}
            onClose={() => setIsQuoteOpen(false)}
            preselectedService={selectedService}
          />
        </Suspense>
      )}

      {/* Service Detail Modal */}
      {detailService && (
        <Suspense fallback={null}>
          <ServiceDetailModal
            service={detailService}
            onClose={() => setDetailService(null)}
            onRequestQuote={(srv) => handleOpenQuote(srv)}
          />
        </Suspense>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <Suspense fallback={null}>
          <PrivacyPolicyModal
            isOpen={isPrivacyOpen}
            onClose={() => setIsPrivacyOpen(false)}
          />
        </Suspense>
      )}

      {/* Terms of Service Modal */}
      {isTermsOpen && (
        <Suspense fallback={null}>
          <TermsOfServiceModal
            isOpen={isTermsOpen}
            onClose={() => setIsTermsOpen(false)}
          />
        </Suspense>
      )}

      {/* Sitemap Directory Modal */}
      {isSitemapOpen && (
        <Suspense fallback={null}>
          <SitemapModal
            isOpen={isSitemapOpen}
            onClose={() => setIsSitemapOpen(false)}
            onSelectService={handleOpenDetails}
            onOpenPrivacy={() => setIsPrivacyOpen(true)}
            onOpenTerms={() => setIsTermsOpen(true)}
            onOpenQuote={(srv) => handleOpenQuote(srv)}
          />
        </Suspense>
      )}
    </div>
  );
}