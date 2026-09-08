import React from 'react';
import { RightEyeLogo } from './RightEyeLogo';
import { ThemeMode } from '../types';
import { BUSINESS_INFO, SERVICES_DATA, INDUSTRIES_DATA, LOCATIONS_DATA } from '../data/siteData';
import { Phone, Mail, MapPin, Globe, Shield, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  theme: ThemeMode;
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onNavigate }) => {
  const isDark = theme === 'dark';

  return (
    <footer
      className={`border-t transition-colors ${
        isDark
          ? 'bg-[#00091B] border-[#01BDFC]/20 text-slate-300'
          : 'bg-slate-50 border-slate-200 text-slate-700'
      }`}
    >
      {/* HUD Telemetry Coordinate Bar */}
      <div
        className={`border-b py-2 px-4 text-center font-mono text-[11px] tracking-widest ${
          isDark
            ? 'bg-[#021630]/60 border-[#01BDFC]/15 text-[#01BDFC]'
            : 'bg-slate-100 border-slate-200 text-[#021630]'
        }`}
      >
        <span>SYS.STATUS: OPERATIONAL</span>
        <span className="mx-3 text-slate-500">|</span>
        <span>HQ COORDINATES: 28.7188° N, 77.0694° E</span>
        <span className="mx-3 text-slate-500">|</span>
        <span>DELHI NCR REGIONAL OPERATIONS</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Verified NAP Block */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <button
              onClick={() => onNavigate('/')}
              className="text-left focus:outline-none cursor-pointer w-fit"
            >
              <RightEyeLogo theme={theme} size="lg" />
            </button>

            <p className="text-sm leading-relaxed max-w-sm mt-1">
              RIGHT EYE Technology is Delhi NCR’s futuristic growth agency. We perceive, track, and architect market dominance through ultra-fast web systems, algorithmic SEO, and high-converting performance media.
            </p>

            {/* Official NAP (Name, Address, Phone) Section */}
            <div
              className={`p-4 rounded-xl border mt-2 flex flex-col gap-2.5 text-xs font-mono ${
                isDark ? 'bg-[#021630]/80 border-[#01BDFC]/25' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#01BDFC] shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-slate-900 dark:text-white font-sans font-semibold">
                    Headquarters:
                  </strong>
                  {BUSINESS_INFO.address}, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#01BDFC] shrink-0" />
                <span>
                  <strong className="text-slate-900 dark:text-white font-sans font-semibold mr-1">
                    Direct Line:
                  </strong>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#01BDFC] underline">
                    {BUSINESS_INFO.phone}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#01BDFC] shrink-0" />
                <span>
                  <strong className="text-slate-900 dark:text-white font-sans font-semibold mr-1">
                    Inquiries:
                  </strong>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#01BDFC] underline">
                    {BUSINESS_INFO.email}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#01BDFC] shrink-0" />
                <span>
                  <strong className="text-slate-900 dark:text-white font-sans font-semibold mr-1">
                    Domain:
                  </strong>
                  righteyetechnology.com
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Core & Web Services */}
          <div>
            <h4
              className={`font-display font-semibold text-sm tracking-wide mb-4 ${
                isDark ? 'text-white' : 'text-[#021630]'
              }`}
            >
              Web & Growth Systems
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <li key={srv.slug}>
                  <button
                    onClick={() => onNavigate(`/services/${srv.slug}`)}
                    className="hover:text-[#01BDFC] transition-colors text-left flex items-center gap-1 group cursor-pointer"
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="text-[#01BDFC] font-semibold hover:underline mt-1 inline-block cursor-pointer"
                >
                  Explore All Capabilities &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Industry Solutions */}
          <div>
            <h4
              className={`font-display font-semibold text-sm tracking-wide mb-4 ${
                isDark ? 'text-white' : 'text-[#021630]'
              }`}
            >
              Industries Served
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              {INDUSTRIES_DATA.map((ind) => (
                <li key={ind.slug}>
                  <button
                    onClick={() => onNavigate(`/industries/${ind.slug}`)}
                    className="hover:text-[#01BDFC] transition-colors text-left flex items-center gap-1 group cursor-pointer"
                  >
                    <span>{ind.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>

            <h4
              className={`font-display font-semibold text-sm tracking-wide mt-6 mb-3 ${
                isDark ? 'text-white' : 'text-[#021630]'
              }`}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-[#01BDFC]">
                  About RIGHT EYE
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/portfolio')} className="hover:text-[#01BDFC]">
                  Case Studies & Work
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/pricing')} className="hover:text-[#01BDFC]">
                  Pricing Packages India
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-[#01BDFC]">
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Delhi NCR Location Corridors */}
          <div>
            <h4
              className={`font-display font-semibold text-sm tracking-wide mb-4 ${
                isDark ? 'text-white' : 'text-[#021630]'
              }`}
            >
              Delhi NCR Hubs
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              {LOCATIONS_DATA.map((loc) => (
                <li key={loc.slug}>
                  <button
                    onClick={() => onNavigate(`/${loc.slug}`)}
                    className="hover:text-[#01BDFC] transition-colors text-left flex items-center gap-1 group cursor-pointer"
                  >
                    <span>{loc.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>

            <div
              className={`mt-6 p-3 rounded-lg border text-[11px] leading-relaxed ${
                isDark ? 'bg-[#00091B] border-[#01BDFC]/20' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center gap-1.5 text-[#01BDFC] font-semibold mb-1">
                <Shield className="w-3.5 h-3.5" />
                <span>Verified Local Agency</span>
              </div>
              <p className="text-slate-400">
                Operating directly from Rohini Sector 20 with registered Delhi commercial presence.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Rights */}
        <div className="mt-12 pt-6 border-t border-slate-700/20 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} RIGHT EYE Technology. All rights reserved. Registered in Delhi, India.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>CONFIDENTIAL ARCHITECTURE</span>
            <span>WCAG 2.1 AA COMPLIANT</span>
            <span>SSL 256-BIT ENCRYPTED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
