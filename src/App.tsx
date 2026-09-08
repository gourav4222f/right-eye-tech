import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { SchemaOrg } from './components/SchemaOrg';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { ServicePage } from './pages/ServicePage';
import { IndustryPage } from './pages/IndustryPage';
import { LocationPage } from './pages/LocationPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

import { SERVICES_DATA, INDUSTRIES_DATA, LOCATIONS_DATA } from './data/siteData';

export default function App() {
  // Theme State: Default to dark (the native mode for RIGHT EYE Technology) or localStorage / system preference
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ret_theme_mode') as ThemeMode | null;
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  // Client-side router path state (supports browser history & direct clicks)
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  // Free Digital Growth Audit Modal state
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  // Sync theme changes to <html> classList and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('ret_theme_mode', theme);
  }, [theme]);

  // Handle browser popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Resolve Route
  const renderCurrentPage = () => {
    // 1. Homepage
    if (currentPath === '/' || currentPath === '') {
      return (
        <>
          <SchemaOrg pageType="home" />
          <HomePage
            theme={theme}
            onNavigate={navigate}
            onOpenAudit={() => setAuditModalOpen(true)}
          />
        </>
      );
    }

    // 2. Core Pages
    if (currentPath === '/about') {
      return (
        <>
          <SchemaOrg pageType="home" title="About RIGHT EYE Technology" />
          <AboutPage
            theme={theme}
            onNavigate={navigate}
            onOpenAudit={() => setAuditModalOpen(true)}
          />
        </>
      );
    }

    if (currentPath === '/services') {
      return (
        <>
          <SchemaOrg pageType="service" title="Digital Agency Services Delhi" />
          <ServicesHubPage
            theme={theme}
            onNavigate={navigate}
            onOpenAudit={() => setAuditModalOpen(true)}
          />
        </>
      );
    }

    if (currentPath === '/portfolio') {
      return (
        <>
          <SchemaOrg pageType="home" title="Digital Marketing Portfolio Delhi" />
          <PortfolioPage
            theme={theme}
            onNavigate={navigate}
            onOpenAudit={() => setAuditModalOpen(true)}
          />
        </>
      );
    }

    if (currentPath === '/pricing') {
      return (
        <>
          <SchemaOrg pageType="home" title="Digital Marketing Packages India" />
          <PricingPage
            theme={theme}
            onNavigate={navigate}
            onOpenAudit={() => setAuditModalOpen(true)}
          />
        </>
      );
    }

    if (currentPath === '/contact') {
      return (
        <>
          <SchemaOrg pageType="contact" title="Contact Digital Marketing Agency Delhi" />
          <ContactPage theme={theme} onNavigate={navigate} />
        </>
      );
    }

    // 3. Service Pages (/services/:slug)
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').replace(/\/$/, '');
      const matchedService = SERVICES_DATA.find((s) => s.slug === slug);
      if (matchedService) {
        return (
          <>
            <SchemaOrg
              pageType="service"
              title={`${matchedService.title} - ${matchedService.primaryKeyword}`}
              description={matchedService.shortDesc}
            />
            <ServicePage
              service={matchedService}
              theme={theme}
              onNavigate={navigate}
              onOpenAudit={() => setAuditModalOpen(true)}
            />
          </>
        );
      }
    }

    // 4. Industry Pages (/industries/:slug)
    if (currentPath.startsWith('/industries/')) {
      const slug = currentPath.replace('/industries/', '').replace(/\/$/, '');
      const matchedIndustry = INDUSTRIES_DATA.find((ind) => ind.slug === slug);
      if (matchedIndustry) {
        return (
          <>
            <SchemaOrg
              pageType="service"
              title={`${matchedIndustry.title} - ${matchedIndustry.primaryKeyword}`}
              description={matchedIndustry.tagline}
            />
            <IndustryPage
              industry={matchedIndustry}
              theme={theme}
              onNavigate={navigate}
              onOpenAudit={() => setAuditModalOpen(true)}
            />
          </>
        );
      }
    }

    // 5. Location Pages (e.g. /digital-marketing-agency-delhi, /digital-marketing-agency-noida, etc.)
    const cleanLocationSlug = currentPath.replace(/^\//, '').replace(/\/$/, '');
    const matchedLocation = LOCATIONS_DATA.find((loc) => loc.slug === cleanLocationSlug);
    if (matchedLocation) {
      return (
        <>
          <SchemaOrg
            pageType="location"
            title={matchedLocation.title}
            description={matchedLocation.metaDesc}
          />
          <LocationPage
            location={matchedLocation}
            theme={theme}
            onNavigate={navigate}
            onOpenAudit={() => setAuditModalOpen(true)}
          />
        </>
      );
    }

    // Fallback: Default to Homepage
    return (
      <>
        <SchemaOrg pageType="home" />
        <HomePage
          theme={theme}
          onNavigate={navigate}
          onOpenAudit={() => setAuditModalOpen(true)}
        />
      </>
    );
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        theme === 'dark' ? 'bg-[#00091B] text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Primary Navigation Bar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      {/* Main Viewport Container */}
      <main className="flex-grow">{renderCurrentPage()}</main>

      {/* Global Verified Footer */}
      <Footer theme={theme} onNavigate={navigate} />

      {/* Global Interactive Audit Consultation Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        theme={theme}
      />
    </div>
  );
}
