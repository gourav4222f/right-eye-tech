import React from 'react';
import { ThemeMode, ServiceItem } from '../types';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/siteData';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  Layers,
  Phone,
  MessageCircle,
  TrendingUp,
  Globe,
} from 'lucide-react';

interface ServicePageProps {
  service: ServiceItem;
  theme: ThemeMode;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  service,
  theme,
  onNavigate,
  onOpenAudit,
}) => {
  const isDark = theme === 'dark';

  // Find parent service if this is a subservice
  const parentService = service.parentServiceSlug
    ? SERVICES_DATA.find((s) => s.slug === service.parentServiceSlug)
    : null;

  return (
    <div className="relative pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs (SEO & Internal Linking) */}
      <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <button onClick={() => onNavigate('/')} className="hover:text-[#01BDFC] cursor-pointer">
          Home
        </button>
        <span>/</span>
        <button onClick={() => onNavigate('/services')} className="hover:text-[#01BDFC] cursor-pointer">
          Services
        </button>
        {parentService && (
          <>
            <span>/</span>
            <button
              onClick={() => onNavigate(`/services/${parentService.slug}`)}
              className="hover:text-[#01BDFC] cursor-pointer"
            >
              {parentService.title}
            </button>
          </>
        )}
        <span>/</span>
        <span className="text-[#01BDFC] truncate">{service.title}</span>
      </nav>

      {/* Service Hero Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#01BDFC]/40 bg-[#01BDFC]/10 text-[#01BDFC] text-xs font-mono">
            <span>CORE SERVICE // {service.category.toUpperCase()}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
            {service.title} —{' '}
            <span className="text-[#01BDFC]">
              {service.primaryKeyword.charAt(0).toUpperCase() + service.primaryKeyword.slice(1)}
            </span>
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {service.fullDesc}
          </p>

          {/* Key Client Business Benefit Highlight */}
          <div
            className={`p-5 rounded-2xl border ${
              isDark ? 'bg-[#00091B] border-[#01BDFC]/40 text-slate-200' : 'bg-sky-50 border-sky-200 text-sky-950'
            }`}
          >
            <div className="flex items-center gap-2 font-display font-bold text-sm text-[#01BDFC] mb-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>KEY CLIENT BUSINESS BENEFIT</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              {service.businessBenefits}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={onOpenAudit}
              className="px-6 py-3 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-sm tracking-wide hover:brightness-110 shadow-[0_0_20px_rgba(1,189,252,0.4)] cursor-pointer"
            >
              Get Free Consultation & Quote &rarr;
            </button>
            <a
              href={`https://wa.me/918700275224?text=Hi%20RIGHT%20EYE%20Technology,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(service.title)}%20for%20my%20business.`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-mono text-xs flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className={`px-5 py-3 rounded-xl border text-xs font-mono flex items-center gap-2 transition-colors ${
                isDark ? 'border-[#01BDFC]/40 text-[#01BDFC] hover:bg-[#01BDFC]/10' : 'border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Telemetry Card */}
        <div className="lg:col-span-4">
          <div
            className={`p-6 rounded-2xl border ${
              isDark ? 'bg-[#021630] border-[#01BDFC]/30' : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}
          >
            <div className="text-xs font-mono text-[#01BDFC] mb-4 flex items-center justify-between">
              <span>PROVEN PERFORMANCE METRICS</span>
              <Zap className="w-3.5 h-3.5" />
            </div>

            <div className="space-y-4">
              {service.metrics.map((metric, i) => (
                <div key={i} className="flex items-center justify-between pb-3 border-b border-slate-700/20">
                  <span className="text-xs text-slate-400 font-mono">{metric.label}</span>
                  <span className="text-xl font-display font-bold text-[#01BDFC]">{metric.value}</span>
                </div>
              ))}
              <div className="pt-2 text-[11px] text-slate-400 leading-relaxed font-mono">
                Validated across 50+ enterprise and SME clients across India, including Delhi NCR, Mumbai, Bengaluru, and Pune.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {/* Section: Features & Capabilities */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#01BDFC]" />
              <span>Service Capabilities & Execution Standards</span>
            </h2>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              RIGHT EYE Technology approaches {service.primaryKeyword} with commercial discipline. We eliminate guesswork, apply industry-leading web standards, and build transparent pipelines that directly benefit your bottom line.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex items-start gap-3 ${
                    isDark ? 'bg-[#00091B]/60 border-[#01BDFC]/20' : 'bg-white border-slate-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#01BDFC] shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed font-sans">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Guaranteed Deliverables */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#01BDFC]" />
              <span>Included Deliverables & Scope</span>
            </h2>
            <div
              className={`p-6 rounded-2xl border space-y-3 ${
                isDark ? 'bg-[#021630]/60 border-[#01BDFC]/25' : 'bg-slate-50 border-slate-200'
              }`}
            >
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#01BDFC] shrink-0" />
                  <span className={`font-mono ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Pan-India Business Context & ROI */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-4">
              Strategic Value for Indian Businesses
            </h2>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              The competitive commercial landscape across India demands high speed and credible digital authority. Whether you are targeting local customers in Delhi NCR or expanding across Mumbai, Bengaluru, Hyderabad, and tier-2 markets, our {service.title} protocols ensure you stay ahead of competitors, lower your customer acquisition costs, and maximize your returns.
            </p>
          </div>

          {/* Section: Frequently Asked Questions */}
          {service.faq && service.faq.length > 0 && (
            <div>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#01BDFC]" />
                <span>Service Inquiries & FAQs</span>
              </h2>
              <div className="space-y-4">
                {service.faq.map((faqItem, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-xl border ${
                      isDark ? 'bg-[#021630]/60 border-slate-700/40' : 'bg-white border-slate-200 shadow-sm'
                    }`}
                  >
                    <h3 className="font-display font-bold text-sm mb-2 text-[#01BDFC]">
                      {faqItem.question}
                    </h3>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {faqItem.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Sub Services */}
          {service.subServices && service.subServices.length > 0 && (
            <div
              className={`p-6 rounded-2xl border ${
                isDark ? 'bg-[#021630] border-[#01BDFC]/30' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-[#01BDFC]">
                Related Capabilities
              </h3>
              <div className="flex flex-col gap-2">
                {service.subServices.map((sub) => (
                  <button
                    key={sub.slug}
                    onClick={() => onNavigate(`/services/${sub.slug}`)}
                    className={`p-3 rounded-lg border text-left text-xs transition-colors flex items-center justify-between group cursor-pointer ${
                      isDark
                        ? 'border-transparent hover:border-[#01BDFC]/40 hover:bg-[#00091B]'
                        : 'border-transparent hover:border-[#01BDFC]/30 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-medium group-hover:text-[#01BDFC]">{sub.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Pan-India Client Service Anchor Card */}
          <div
            className={`p-6 rounded-2xl border ${
              isDark ? 'bg-[#00091B] border-[#01BDFC]/30' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-mono text-[#01BDFC] mb-2">
              <Globe className="w-4 h-4" />
              <span>PAN-INDIA CLIENT SUPPORT</span>
            </div>
            <h4 className="font-display font-bold text-sm mb-2">
              Serving Clients Nationwide
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              We manage campaigns and development sprints for clients throughout India with seamless remote collaboration, weekly video calls, and dedicated WhatsApp support.
            </p>
            <div className="text-xs font-mono space-y-1 mb-4 text-slate-300">
              <div>REGISTERED HQ: {BUSINESS_INFO.address}</div>
              <div>DIRECT LINE: {BUSINESS_INFO.phone}</div>
              <div>COVERAGE: Pan-India Delivery</div>
            </div>
            <button
              onClick={onOpenAudit}
              className="w-full py-2.5 rounded-lg bg-[#01BDFC] text-[#00091B] text-xs font-display font-bold hover:brightness-110 text-center cursor-pointer"
            >
              Get Free Consultation & Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
