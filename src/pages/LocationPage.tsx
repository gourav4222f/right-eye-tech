import React from 'react';
import { ThemeMode, LocationItem } from '../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/siteData';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Star,
  ArrowRight,
  Navigation,
  Globe,
} from 'lucide-react';

interface LocationPageProps {
  location: LocationItem;
  theme: ThemeMode;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({
  location,
  theme,
  onNavigate,
  onOpenAudit,
}) => {
  const isDark = theme === 'dark';

  return (
    <div className="relative pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <button onClick={() => onNavigate('/')} className="hover:text-[#01BDFC]">
          Home
        </button>
        <span>/</span>
        <button onClick={() => onNavigate('/digital-marketing-agency-delhi')} className="hover:text-[#01BDFC]">
          NCR Hubs
        </button>
        <span>/</span>
        <span className="text-[#01BDFC]">{location.city}</span>
      </nav>

      {/* Location Hero */}
      <div className="max-w-4xl space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#01BDFC]/40 bg-[#01BDFC]/10 text-[#01BDFC] text-xs font-mono">
          <Navigation className="w-3.5 h-3.5" />
          <span>REGIONAL CORRIDOR // {location.city.toUpperCase()}</span>
        </div>

        {/* H1 with exact primary keyword */}
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
          {location.title}
        </h1>

        <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          {location.metaDesc} RIGHT EYE Technology provides institutional-grade digital marketing, rapid Next.js web development, local SEO 3-pack dominance, and high-ROAS paid media across {location.city} and surrounding commercial corridors.
        </p>

        <div className="pt-2 flex flex-wrap gap-4">
          <button
            onClick={onOpenAudit}
            className="px-6 py-3 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-sm tracking-wide hover:brightness-110 shadow-[0_0_20px_rgba(1,189,252,0.4)] cursor-pointer"
          >
            Get {location.city} Growth Audit &rarr;
          </button>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className={`px-5 py-3 rounded-xl border text-xs font-mono flex items-center gap-2 transition-colors ${
              isDark ? 'border-[#01BDFC]/40 text-[#01BDFC] hover:bg-[#01BDFC]/10' : 'border-slate-300 hover:bg-slate-100'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>Call Regional Desk: {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Embedded Interactive Map & Verified NAP Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
        {/* Map Embed Container */}
        <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#01BDFC]/30 min-h-[350px] relative">
          <iframe
            title={`RIGHT EYE Technology ${location.city} Map`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.423984639462!2d77.06721131508687!3d28.718815982384784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0684fb65a95f%3A0x6a2c2069e8b0a99c!2sSector%2020%2C%20Rohini%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
            className="w-full h-full min-h-[350px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-3 left-3 bg-[#00091B]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#01BDFC]/40 text-xs font-mono text-[#01BDFC]">
            HQ TELEMETRY: 28.7188° N, 77.0694° E
          </div>
        </div>

        {/* Dedicated Verified NAP Card */}
        <div className="lg:col-span-5">
          <div
            className={`p-6 rounded-2xl border h-full flex flex-col justify-between ${
              isDark ? 'bg-[#021630] border-[#01BDFC]/30' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 text-[#01BDFC] font-mono text-xs mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>OFFICIAL NAP (LOCALBUSINESS)</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-4">
                {BUSINESS_INFO.name}
              </h3>

              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#01BDFC] shrink-0 mt-0.5" />
                  <span>
                    <strong className="block text-slate-900 dark:text-white font-sans font-semibold">
                      Registered Address:
                    </strong>
                    {BUSINESS_INFO.address}, India
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#01BDFC] shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white font-sans font-semibold mr-1">
                      Direct Hotline:
                    </strong>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-[#01BDFC] font-bold underline">
                      {BUSINESS_INFO.phone}
                    </a>
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#01BDFC] shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white font-sans font-semibold mr-1">
                      Official Email:
                    </strong>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#01BDFC] underline">
                      {BUSINESS_INFO.email}
                    </a>
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#01BDFC] shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white font-sans font-semibold mr-1">
                      Website:
                    </strong>
                    righteyetechnology.com
                  </span>
                </div>
              </div>

              {/* Coverage Areas */}
              <div className="mt-6 pt-4 border-t border-slate-700/20">
                <span className="text-[11px] font-mono text-slate-400 block mb-2">
                  COVERAGE NODES IN {location.city.toUpperCase()}:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {location.coverageAreas.map((area) => (
                    <span
                      key={area}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        isDark
                          ? 'bg-[#00091B] border-[#01BDFC]/20 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={onOpenAudit}
              className="mt-6 w-full py-2.5 rounded-lg bg-[#01BDFC] text-[#00091B] text-xs font-display font-bold hover:brightness-110 text-center cursor-pointer shadow-[0_0_15px_rgba(1,189,252,0.3)]"
            >
              Book On-Site Consultation in {location.city}
            </button>
          </div>
        </div>
      </div>

      {/* Location-Specific Verified Client Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-display font-bold mb-6">
          Verified Client Reviews in {location.city}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {location.testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border ${
                isDark ? 'bg-[#021630]/70 border-[#01BDFC]/20' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed mb-4 italic ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                "{t.quote}"
              </p>
              <div className="text-xs font-mono">
                <strong className="block text-white dark:text-white">{t.client}</strong>
                <span className="text-[#01BDFC]">{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Relevant Services Internal Links (Rule: link to /services + top 3-4 services) */}
      <div className="pt-8 border-t border-slate-700/30">
        <h3 className="font-display font-bold text-lg mb-4">
          Core Capabilities Deployed in {location.city}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES_DATA.slice(0, 4).map((srv) => (
            <button
              key={srv.slug}
              onClick={() => onNavigate(`/services/${srv.slug}`)}
              className={`p-4 rounded-xl border text-left transition-all group cursor-pointer ${
                isDark
                  ? 'bg-[#021630] border-[#01BDFC]/20 hover:border-[#01BDFC]'
                  : 'bg-white border-slate-200 hover:border-[#01BDFC]'
              }`}
            >
              <div className="font-display font-bold text-xs group-hover:text-[#01BDFC] flex items-center justify-between">
                <span>{srv.title}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-1">
                {srv.primaryKeyword}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
