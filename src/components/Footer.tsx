import React from 'react';
import { RightEyeLogo } from './RightEyeLogo';
import { ThemeMode } from '../types';
import { BUSINESS_INFO, SERVICES_DATA, INDUSTRIES_DATA, LOCATIONS_DATA } from '../data/siteData';
import { Phone, Mail, MapPin, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react';

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
      {/* Pan-India Operational Bar */}
      <div
        className={`border-b py-2 px-4 text-center font-mono text-[11px] tracking-widest ${
          isDark
            ? 'bg-[#021630]/60 border-[#01BDFC]/15 text-[#01BDFC]'
            : 'bg-slate-100 border-slate-200 text-[#021630]'
        }`}
      >
        <span>STATUS: PAN-INDIA SERVICE ACTIVE</span>
        <span className="mx-3 text-slate-500">|</span>
        <span>SERVING CLIENTS ACROSS ALL 28 INDIAN STATES & MAJOR METROS</span>
        <span className="mx-3 text-slate-500">|</span>
        <span>DIRECT HOTLINE: {BUSINESS_INFO.phone}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Verified NAP Block */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <button
              onClick={() => onNavigate('/')}
              className="text-left focus:outline-none cursor-pointer w-fit"
            >
              <RightEyeLogo theme={theme} size="lg" showTagline={true} />
            </button>

            <p className="text-sm leading-relaxed max-w-sm mt-1">
              RIGHT EYE Technology is a premier Pan-India digital marketing and web development agency. We empower businesses across India with results-driven SEO, modern website design, custom web development, Google Ads, Google Business Profile (GMB) optimization, and graphic branding.
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
                    Headquarters & Pan-India Desk:
                  </strong>
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#01BDFC] shrink-0" />
                <span>
                  <strong className="text-slate-900 dark:text-white font-sans font-semibold mr-1">
                    Call / WhatsApp:
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
                    Email Inquiries:
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
                    Official Website:
                  </strong>
                  righteyetechnology.com
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: 6 Core Services */}
          <div>
            <h4
              className={`font-display font-semibold text-sm tracking-wide mb-4 ${
                isDark ? 'text-white' : 'text-[#021630]'
              }`}
            >
              Our Core Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.slug}>
                  <button
                    onClick={() => onNavigate(`/services/${srv.slug}`)}
                    className="hover:text-[#01BDFC] transition-colors text-left flex items-center gap-1 group cursor-pointer"
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#01BDFC]" />
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="text-[#01BDFC] font-semibold hover:underline mt-1 inline-block cursor-pointer"
                >
                  View All Core Services &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries & Company */}
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
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#01BDFC]" />
                  </button>
                </li>
              ))}
            </ul>

            <h4
              className={`font-display font-semibold text-sm tracking-wide mt-6 mb-3 ${
                isDark ? 'text-white' : 'text-[#021630]'
              }`}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-[#01BDFC] cursor-pointer">
                  About Our Agency
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/portfolio')} className="hover:text-[#01BDFC] cursor-pointer">
                  Case Studies & Work
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/pricing')} className="hover:text-[#01BDFC] cursor-pointer">
                  Packages & Pricing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-[#01BDFC] cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Pan-India Service Hubs */}
          <div>
            <h4
              className={`font-display font-semibold text-sm tracking-wide mb-4 ${
                isDark ? 'text-white' : 'text-[#021630]'
              }`}
            >
              Pan-India Locations
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              {LOCATIONS_DATA.map((loc) => (
                <li key={loc.slug}>
                  <button
                    onClick={() => onNavigate(`/${loc.slug}`)}
                    className="hover:text-[#01BDFC] transition-colors text-left flex items-center gap-1 group cursor-pointer"
                  >
                    <span>{loc.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#01BDFC]" />
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
                <ShieldCheck className="w-4 h-4" />
                <span>Pan-India Delivery</span>
              </div>
              <p className="text-slate-400">
                Serving clients across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, and all Indian states with dedicated account managers and GST invoicing.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Rights */}
        <div className="mt-12 pt-6 border-t border-slate-700/20 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} RIGHT EYE Technology. All rights reserved. Pan-India Digital Marketing & Web Development Agency.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>PAN-INDIA REACH</span>
            <span>GST COMPLIANT</span>
            <span>100% IP OWNERSHIP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
