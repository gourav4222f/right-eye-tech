import React from 'react';
import { ThemeMode, ServiceItem } from '../types';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/siteData';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  Clock,
  Layers,
  Phone,
  BarChart,
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
        <button onClick={() => onNavigate('/')} className="hover:text-[#01BDFC]">
          Home
        </button>
        <span>/</span>
        <button onClick={() => onNavigate('/services')} className="hover:text-[#01BDFC]">
          Services
        </button>
        {parentService && (
          <>
            <span>/</span>
            <button
              onClick={() => onNavigate(`/services/${parentService.slug}`)}
              className="hover:text-[#01BDFC]"
            >
              {parentService.title}
            </button>
          </>
        )}
        <span>/</span>
        <span className="text-[#01BDFC] truncate">{service.title}</span>
      </nav>

      {/* Service Hero Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#01BDFC]/40 bg-[#01BDFC]/10 text-[#01BDFC] text-xs font-mono">
            <span>PILLAR CAPABILITY // {service.category}</span>
          </div>

          {/* Exact H1 for SEO Target Keyword */}
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
            {service.title} —{' '}
            <span className="text-[#01BDFC]">
              {service.primaryKeyword.charAt(0).toUpperCase() + service.primaryKeyword.slice(1)}
            </span>
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {service.fullDesc}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onOpenAudit}
              className="px-6 py-3 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-sm tracking-wide hover:brightness-110 shadow-[0_0_20px_rgba(1,189,252,0.4)] cursor-pointer"
            >
              Request Scoped Proposal &rarr;
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className={`px-5 py-3 rounded-xl border text-xs font-mono flex items-center gap-2 transition-colors ${
                isDark ? 'border-[#01BDFC]/40 text-[#01BDFC] hover:bg-[#01BDFC]/10' : 'border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Discuss Scope: {BUSINESS_INFO.phone}</span>
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
              <span>BENCHMARK TELEMETRY</span>
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
                Validated across 50+ enterprise and SME deployments in Delhi, Gurgaon, and Noida.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Content Section (800+ Words Depth Requirement) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {/* Section: Architectural Advantages */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#01BDFC]" />
              <span>Engineered Core Specifications</span>
            </h2>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              In contrast to generic Delhi agencies that rely on pre-fabricated templates and third-party plugin bloat, RIGHT EYE Technology approaches {service.primaryKeyword} as an exact discipline. We eliminate latency, enforce programmatic accessibility, and synchronize server telemetry with Google’s core evaluation bots.
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
              <span>Guaranteed Technical Deliverables</span>
            </h2>
            <div
              className={`p-6 rounded-2xl border space-y-3 ${
                isDark ? 'bg-[#021630]/60 border-[#01BDFC]/25' : 'bg-slate-50 border-slate-200'
              }`}
            >
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#01BDFC] shrink-0" />
                  <span className="font-mono text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Delhi NCR Market Context & ROI */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-4">
              Strategic Value for Delhi NCR Enterprises
            </h2>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              The competitive commercial landscape in Delhi NCR demands ruthless speed and unassailable authority. A delay of 500 milliseconds in page load or a weak presence on Google's local pack immediately forfeits transactions to competitors. By deploying our {service.title} protocols, your business secures an algorithmic moat that continuously lowers customer acquisition costs while boosting gross profit margins.
            </p>
          </div>

          {/* Section: Frequently Asked Questions (Schema Compliant) */}
          {service.faq && service.faq.length > 0 && (
            <div>
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#01BDFC]" />
                <span>Technical Inquiries & FAQs</span>
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

        {/* Sidebar: Sub-services (Pillar to Cluster Linking) & Regional Anchor */}
        <div className="lg:col-span-4 space-y-8">
          {/* Cluster Linking: Sub Services */}
          {service.subServices && service.subServices.length > 0 && (
            <div
              className={`p-6 rounded-2xl border ${
                isDark ? 'bg-[#021630] border-[#01BDFC]/30' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-[#01BDFC]">
                Connected Sub-Capabilities
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

          {/* Regional Delhi NCR Anchor Card */}
          <div
            className={`p-6 rounded-2xl border ${
              isDark ? 'bg-[#00091B] border-[#01BDFC]/30' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="text-xs font-mono text-[#01BDFC] mb-2">LOCAL BUSINESS ACCREDITATION</div>
            <h4 className="font-display font-bold text-sm mb-2">
              Serving Delhi NCR from Rohini HQ
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Every system is calibrated for Delhi’s unique commercial velocity. Meet our engineers at our Sector 20 Rohini facility or connect via encrypted video link.
            </p>
            <div className="text-xs font-mono space-y-1 mb-4 text-slate-300">
              <div>HQ: {BUSINESS_INFO.address}</div>
              <div>TEL: {BUSINESS_INFO.phone}</div>
            </div>
            <button
              onClick={onOpenAudit}
              className="w-full py-2.5 rounded-lg bg-[#01BDFC] text-[#00091B] text-xs font-display font-bold hover:brightness-110 text-center"
            >
              Schedule Scoping Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
