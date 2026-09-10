import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/siteData';
import { ArrowRight, CheckCircle2, ShieldCheck, Phone, MessageCircle, Sparkles, TrendingUp } from 'lucide-react';

interface ServicesHubPageProps {
  theme: ThemeMode;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const ServicesHubPage: React.FC<ServicesHubPageProps> = ({
  theme,
  onNavigate,
  onOpenAudit,
}) => {
  const isDark = theme === 'dark';
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'SEO & Local GMB',
    'Web Design & Dev',
    'Paid Ads (PPC)',
    'Graphic Design & Branding',
  ];

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'SEO & Local GMB') return s.slug === 'seo' || s.slug === 'google-my-business';
    if (selectedCategory === 'Web Design & Dev') return s.slug === 'website-design' || s.slug === 'website-development';
    if (selectedCategory === 'Paid Ads (PPC)') return s.slug === 'google-ads-paid-ads';
    if (selectedCategory === 'Graphic Design & Branding') return s.slug === 'graphic-design';
    return true;
  });

  return (
    <div className="relative pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#01BDFC]/40 bg-[#01BDFC]/10 text-[#01BDFC] text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PAN-INDIA DIGITAL SERVICES // 6 CORE CAPABILITIES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
          Results-Driven Digital Services for{' '}
          <span className="text-[#01BDFC]">Businesses Across India</span>
        </h1>
        <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          RIGHT EYE Technology delivers a curated, focused suite of 6 core digital capabilities. We avoid overwhelming service bloat — delivering measurable organic rankings, high-converting modern websites, and profitable paid advertising for clients from Delhi NCR, Mumbai, and Bengaluru to growing regional hubs across all of India.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#01BDFC] text-[#00091B] font-bold shadow-[0_0_15px_rgba(1,189,252,0.4)]'
                : isDark
                ? 'bg-[#021630] text-slate-300 hover:bg-[#01BDFC]/10 hover:text-white border border-[#01BDFC]/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {cat} {cat === 'All' ? `(${SERVICES_DATA.length} Services)` : ''}
          </button>
        ))}
      </div>

      {/* Services Grid (6 Core Services) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredServices.map((service, idx) => (
          <div
            key={service.slug}
            className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
              isDark
                ? 'bg-[#021630]/70 border-[#01BDFC]/20 hover:border-[#01BDFC]/60 hover:bg-[#021630] shadow-[0_0_20px_rgba(1,189,252,0.06)]'
                : 'bg-white border-slate-200 hover:border-[#01BDFC]/60 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[#01BDFC] px-2.5 py-0.5 rounded bg-[#01BDFC]/10 border border-[#01BDFC]/20 font-bold uppercase">
                  {service.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  SERVICE 0{idx + 1}
                </span>
              </div>

              <h2 className="text-xl font-display font-bold mb-2 group-hover:text-[#01BDFC] transition-colors">
                {service.title}
              </h2>
              <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {service.shortDesc}
              </p>

              {/* Highlighted Business Benefit Callout */}
              <div
                className={`p-3 rounded-xl border mb-5 text-xs ${
                  isDark
                    ? 'bg-[#00091B]/80 border-[#01BDFC]/30 text-slate-200'
                    : 'bg-sky-50 border-sky-200 text-sky-950'
                }`}
              >
                <div className="flex items-center gap-1.5 font-semibold text-[#01BDFC] mb-1 font-mono text-[11px]">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>CLIENT BUSINESS BENEFIT</span>
                </div>
                <p className="leading-snug text-[11px]">
                  {service.businessBenefits}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-1.5 mb-6 text-[11px]">
                {service.features.slice(0, 3).map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#01BDFC] shrink-0" />
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/20 flex items-center justify-between">
              <div className="text-xs font-mono text-[#01BDFC]">
                {service.metrics[0]?.label}: <strong>{service.metrics[0]?.value}</strong>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate(`/services/${service.slug}`)}
                  className="text-xs font-display font-semibold text-[#01BDFC] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pan-India Client Assurance Ribbon */}
      <div
        className={`p-8 rounded-2xl border mb-16 ${
          isDark ? 'bg-[#021630]/60 border-[#01BDFC]/25' : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-[#01BDFC] shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold text-sm mb-1">Pan-India Remote Delivery</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Streamlined remote onboarding, dedicated WhatsApp & Google Meet coordination, and scheduled sprint updates for clients in any Indian city.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-[#01BDFC] shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold text-sm mb-1">Clear Commercial Benefits</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every service is directly tied to measurable revenue indicators: top keyword positions, phone calls, form leads, and conversion ROI.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-6 h-6 text-[#01BDFC] shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold text-sm mb-1">Transparent & GST Invoiced</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full 100% intellectual property ownership, zero vendor lock-in, and transparent corporate billing with standard Indian GST invoices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div
        className={`p-10 rounded-3xl border text-center ${
          isDark
            ? 'bg-gradient-to-r from-[#00091B] via-[#021630] to-[#00091B] border-[#01BDFC]/35'
            : 'bg-white border-slate-200 shadow-lg'
        }`}
      >
        <h3 className="text-2xl font-display font-bold mb-2">
          Ready to Grow Your Business Across India?
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
          Schedule a free 30-minute consultation with our digital marketing specialists. We will review your current website, Google presence, or ad campaigns and recommend an actionable growth plan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-xs hover:brightness-110 shadow-[0_0_20px_rgba(1,189,252,0.35)] cursor-pointer"
          >
            Get a Free Consultation & Quote &rarr;
          </button>
          <a
            href={`https://wa.me/918700275224?text=Hi%20RIGHT%20EYE%20Technology,%20I%20am%20interested%20in%20your%20digital%20services.`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-mono text-xs flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[#01BDFC]/30 text-[#01BDFC] hover:bg-[#01BDFC]/10 font-mono text-xs flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
