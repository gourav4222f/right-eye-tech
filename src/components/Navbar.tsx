import React, { useState, useEffect } from 'react';
import { RightEyeLogo } from './RightEyeLogo';
import { ThemeMode } from '../types';
import { SERVICES_DATA, INDUSTRIES_DATA, LOCATIONS_DATA, BUSINESS_INFO } from '../data/siteData';
import { Phone, Sun, Moon, ChevronDown, Menu, X, Eye } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  theme,
  onToggleTheme,
  onOpenAudit,
}) => {
  const isDark = theme === 'dark';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#00091B]/90 backdrop-blur-md border-b border-[#01BDFC]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : isDark
          ? 'bg-transparent border-b border-white/5'
          : 'bg-transparent border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo (Theme aware dual-variant) */}
        <button
          onClick={() => handleNav('/')}
          className="focus:outline-none cursor-pointer flex items-center group text-left"
          id="nav-logo"
        >
          <RightEyeLogo theme={theme} size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-display tracking-tight text-sm">
          <button
            onClick={() => handleNav('/')}
            className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
              currentPath === '/'
                ? 'text-[#01BDFC] font-semibold'
                : isDark
                ? 'text-slate-300 hover:text-white'
                : 'text-slate-700 hover:text-[#021630]'
            }`}
          >
            Home
          </button>

          {/* Services Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNav('/services')}
              className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                currentPath.startsWith('/services')
                  ? 'text-[#01BDFC] font-semibold'
                  : isDark
                  ? 'text-slate-300 hover:text-white'
                  : 'text-slate-700 hover:text-[#021630]'
              }`}
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeDropdown === 'services' && (
              <div
                className={`absolute top-full left-0 w-[560px] p-4 rounded-xl border shadow-2xl grid grid-cols-2 gap-3 transition-all ${
                  isDark
                    ? 'bg-[#021630]/98 border-[#01BDFC]/30 backdrop-blur-xl text-white'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              >
                <div className="col-span-2 pb-2 border-b border-slate-700/30 flex items-center justify-between">
                  <span className="text-xs font-mono tracking-wider text-[#01BDFC]">CORE SERVICES // PAN-INDIA</span>
                  <button
                    onClick={() => handleNav('/services')}
                    className="text-xs text-[#01BDFC] hover:underline cursor-pointer"
                  >
                    View All 6 Core Services
                  </button>
                </div>
                {SERVICES_DATA.map((srv) => (
                  <button
                    key={srv.slug}
                    onClick={() => handleNav(`/services/${srv.slug}`)}
                    className={`text-left p-2.5 rounded-lg border transition-all text-xs group cursor-pointer ${
                      isDark
                        ? 'border-transparent hover:border-[#01BDFC]/40 hover:bg-[#00091B]/60'
                        : 'border-transparent hover:border-[#01BDFC]/30 hover:bg-slate-50'
                    }`}
                  >
                    <div className="font-semibold group-hover:text-[#01BDFC] flex items-center justify-between">
                      <span>{srv.title}</span>
                    </div>
                    <p className={`text-[11px] line-clamp-1 mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {srv.shortDesc}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNav('/industries/healthcare')}
              className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                currentPath.startsWith('/industries')
                  ? 'text-[#01BDFC] font-semibold'
                  : isDark
                  ? 'text-slate-300 hover:text-white'
                  : 'text-slate-700 hover:text-[#021630]'
              }`}
            >
              <span>Industries</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeDropdown === 'industries' && (
              <div
                className={`absolute top-full left-0 w-64 p-3 rounded-xl border shadow-2xl flex flex-col gap-1 ${
                  isDark
                    ? 'bg-[#021630]/98 border-[#01BDFC]/30 backdrop-blur-xl text-white'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              >
                {INDUSTRIES_DATA.map((ind) => (
                  <button
                    key={ind.slug}
                    onClick={() => handleNav(`/industries/${ind.slug}`)}
                    className={`text-left px-3 py-2 rounded-lg text-xs transition-colors hover:text-[#01BDFC] cursor-pointer ${
                      isDark ? 'hover:bg-[#00091B]/70' : 'hover:bg-slate-50'
                    }`}
                  >
                    {ind.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Location Hubs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('locations')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNav('/digital-marketing-agency-india')}
              className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                currentPath.includes('digital-marketing-agency')
                  ? 'text-[#01BDFC] font-semibold'
                  : isDark
                  ? 'text-slate-300 hover:text-white'
                  : 'text-slate-700 hover:text-[#021630]'
              }`}
            >
              <span>Pan-India Reach</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeDropdown === 'locations' && (
              <div
                className={`absolute top-full left-0 w-72 p-3 rounded-xl border shadow-2xl flex flex-col gap-1 ${
                  isDark
                    ? 'bg-[#021630]/98 border-[#01BDFC]/30 backdrop-blur-xl text-white'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              >
                <div className="pb-1.5 mb-1 border-b border-slate-700/30">
                  <span className="text-[11px] font-mono text-[#01BDFC]">SERVICE HUBS NATIONWIDE</span>
                </div>
                {LOCATIONS_DATA.map((loc) => (
                  <button
                    key={loc.slug}
                    onClick={() => handleNav(`/${loc.slug}`)}
                    className={`text-left px-3 py-2 rounded-lg text-xs transition-colors hover:text-[#01BDFC] cursor-pointer flex items-center justify-between ${
                      isDark ? 'hover:bg-[#00091B]/70' : 'hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-medium">{loc.city}</span>
                    <span className="text-[10px] text-slate-400">View Hub</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('/portfolio')}
            className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
              currentPath === '/portfolio'
                ? 'text-[#01BDFC] font-semibold'
                : isDark
                ? 'text-slate-300 hover:text-white'
                : 'text-slate-700 hover:text-[#021630]'
            }`}
          >
            Portfolio
          </button>

          <button
            onClick={() => handleNav('/pricing')}
            className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
              currentPath === '/pricing'
                ? 'text-[#01BDFC] font-semibold'
                : isDark
                ? 'text-slate-300 hover:text-white'
                : 'text-slate-700 hover:text-[#021630]'
            }`}
          >
            Packages
          </button>

          <button
            onClick={() => handleNav('/about')}
            className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
              currentPath === '/about'
                ? 'text-[#01BDFC] font-semibold'
                : isDark
                ? 'text-slate-300 hover:text-white'
                : 'text-slate-700 hover:text-[#021630]'
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleNav('/contact')}
            className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
              currentPath === '/contact'
                ? 'text-[#01BDFC] font-semibold'
                : isDark
                ? 'text-slate-300 hover:text-white'
                : 'text-slate-700 hover:text-[#021630]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Actions: Phone Call + Dark/Light Toggle + Audit Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Phone Call with Indian Phone */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-colors border ${
              isDark
                ? 'border-[#01BDFC]/30 text-[#01BDFC] hover:bg-[#01BDFC]/10'
                : 'border-slate-300 text-[#021630] hover:bg-slate-100'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-[#01BDFC]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          {/* Dark / Light Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme Mode"
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              isDark
                ? 'border-[#01BDFC]/30 text-amber-300 hover:bg-[#01BDFC]/10'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary Action Button (Consultation Request) */}
          <button
            onClick={onOpenAudit}
            className="relative group overflow-hidden px-4 py-2 rounded-lg text-xs font-display font-semibold tracking-wide bg-[#01BDFC] text-[#00091B] hover:brightness-110 transition-all cursor-pointer shadow-[0_0_20px_rgba(1,189,252,0.35)]"
          >
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>Get Free Consultation</span>
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme Mode"
            className={`p-2 rounded-lg border transition-colors ${
              isDark ? 'border-[#01BDFC]/30 text-amber-300' : 'border-slate-300 text-slate-700'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border ${
              isDark ? 'border-[#01BDFC]/30 text-white' : 'border-slate-300 text-slate-800'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto ${
            isDark ? 'bg-[#00091B] border-[#01BDFC]/20 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          <div className="flex flex-col gap-2 font-display text-sm">
            <button
              onClick={() => handleNav('/')}
              className="text-left py-2 px-3 rounded-md hover:bg-[#01BDFC]/10"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('/services')}
              className="text-left py-2 px-3 rounded-md hover:bg-[#01BDFC]/10 font-semibold text-[#01BDFC]"
            >
              Core Services (6)
            </button>
            <div className="pl-4 flex flex-col gap-1 border-l border-[#01BDFC]/20 text-xs">
              {SERVICES_DATA.map((srv) => (
                <button
                  key={srv.slug}
                  onClick={() => handleNav(`/services/${srv.slug}`)}
                  className="text-left py-1.5 opacity-80 hover:opacity-100 hover:text-[#01BDFC]"
                >
                  {srv.title}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNav('/digital-marketing-agency-india')}
              className="text-left py-2 px-3 rounded-md hover:bg-[#01BDFC]/10 font-semibold"
            >
              Pan-India Hubs
            </button>
            <div className="pl-4 flex flex-col gap-1 border-l border-[#01BDFC]/20 text-xs">
              {LOCATIONS_DATA.map((loc) => (
                <button
                  key={loc.slug}
                  onClick={() => handleNav(`/${loc.slug}`)}
                  className="text-left py-1.5 opacity-80 hover:opacity-100 hover:text-[#01BDFC]"
                >
                  {loc.city} ({loc.title.split(' in ')[0]})
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNav('/portfolio')}
              className="text-left py-2 px-3 rounded-md hover:bg-[#01BDFC]/10"
            >
              Portfolio
            </button>
            <button
              onClick={() => handleNav('/pricing')}
              className="text-left py-2 px-3 rounded-md hover:bg-[#01BDFC]/10"
            >
              Packages & Pricing
            </button>
            <button
              onClick={() => handleNav('/about')}
              className="text-left py-2 px-3 rounded-md hover:bg-[#01BDFC]/10"
            >
              About Agency
            </button>
            <button
              onClick={() => handleNav('/contact')}
              className="text-left py-2 px-3 rounded-md hover:bg-[#01BDFC]/10"
            >
              Contact Us
            </button>

            <div className="pt-4 mt-2 border-t border-slate-700/40 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full py-2.5 rounded-lg text-center font-mono text-xs border border-[#01BDFC] text-[#01BDFC]"
              >
                Call Now: {BUSINESS_INFO.phone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full py-2.5 rounded-lg text-center font-semibold text-xs bg-[#01BDFC] text-[#00091B]"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
