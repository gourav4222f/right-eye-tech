import React from 'react';
import { ThemeMode, IndustryItem } from '../types';
import { BUSINESS_INFO } from '../data/siteData';
import {
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Trophy,
  Phone,
  Layers,
} from 'lucide-react';

interface IndustryPageProps {
  industry: IndustryItem;
  theme: ThemeMode;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const IndustryPage: React.FC<IndustryPageProps> = ({
  industry,
  theme,
  onNavigate,
  onOpenAudit,
}) => {
  const isDark = theme === 'dark';

  return (
    <div className="relative pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
        <button onClick={() => onNavigate('/')} className="hover:text-[#01BDFC]">
          Home
        </button>
        <span>/</span>
        <button onClick={() => onNavigate('/industries/travel-tourism')} className="hover:text-[#01BDFC]">
          Industries
        </button>
        <span>/</span>
        <span className="text-[#01BDFC]">{industry.title}</span>
      </nav>

      {/* Hero Header */}
      <div className="max-w-4xl space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#01BDFC]/40 bg-[#01BDFC]/10 text-[#01BDFC] text-xs font-mono">
          <span>VERTICAL SPECIALIZATION // SECTOR 0{industry.slug.length % 5 + 1}</span>
        </div>

        {/* H1 containing primary keyword */}
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
          {industry.title} —{' '}
          <span className="text-[#01BDFC]">
            {industry.primaryKeyword.charAt(0).toUpperCase() + industry.primaryKeyword.slice(1)}
          </span>
        </h1>

        <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          {industry.tagline} RIGHT EYE Technology engineers high-conversion acquisition funnels, customized CRM architectures, and algorithmic search dominance specifically structured for {industry.title.toLowerCase()} operating across Delhi NCR and India.
        </p>

        <div className="pt-2 flex flex-wrap gap-4">
          <button
            onClick={onOpenAudit}
            className="px-6 py-3 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-sm tracking-wide hover:brightness-110 shadow-[0_0_20px_rgba(1,189,252,0.4)] cursor-pointer"
          >
            Request Industry Growth Plan &rarr;
          </button>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className={`px-5 py-3 rounded-xl border text-xs font-mono flex items-center gap-2 transition-colors ${
              isDark ? 'border-[#01BDFC]/40 text-[#01BDFC] hover:bg-[#01BDFC]/10' : 'border-slate-300 hover:bg-slate-100'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>Direct Desk: {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Challenges vs Engineered Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Pain Points Solved */}
        <div
          className={`p-6 rounded-2xl border ${
            isDark ? 'bg-[#021630]/60 border-red-500/20' : 'bg-red-50/50 border-red-200'
          }`}
        >
          <h2 className="text-lg font-display font-bold mb-4 flex items-center gap-2 text-red-400">
            <AlertCircle className="w-5 h-5" />
            <span>Current Sector Bottlenecks</span>
          </h2>
          <ul className="space-y-3">
            {industry.challenges.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tailored Solutions */}
        <div
          className={`p-6 rounded-2xl border ${
            isDark ? 'bg-[#021630]/60 border-[#01BDFC]/30' : 'bg-white border-[#01BDFC]/30 shadow-sm'
          }`}
        >
          <h2 className="text-lg font-display font-bold mb-4 flex items-center gap-2 text-[#01BDFC]">
            <CheckCircle2 className="w-5 h-5" />
            <span>RIGHT EYE Architectural Fixes</span>
          </h2>
          <ul className="space-y-3">
            {industry.solutions.map((s, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#01BDFC] shrink-0 mt-0.5" />
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Featured Sector Case Study */}
      <div
        className={`p-8 rounded-3xl border mb-16 ${
          isDark ? 'bg-[#021630] border-[#01BDFC]/40 shadow-[0_0_30px_rgba(1,189,252,0.15)]' : 'bg-slate-50 border-slate-200 shadow-md'
        }`}
      >
        <div className="flex items-center gap-2 text-[#01BDFC] font-mono text-xs mb-2">
          <Trophy className="w-4 h-4" />
          <span>PROVEN CLIENT RESULT // {industry.caseStudy.client}</span>
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-2">
          {industry.caseStudy.metrics}
        </h3>
        <p className={`text-sm leading-relaxed max-w-3xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {industry.caseStudy.summary}
        </p>
      </div>

      {/* Recommended Service Deployments (Internal Linking Rule) */}
      <div className="mb-16">
        <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#01BDFC]" />
          <span>Recommended Technical Modules for {industry.title}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industry.recommendedServices.map((srv) => (
            <button
              key={srv.slug}
              onClick={() => onNavigate(`/services/${srv.slug}`)}
              className={`p-4 rounded-xl border text-left transition-all group cursor-pointer ${
                isDark
                  ? 'bg-[#00091B] border-[#01BDFC]/20 hover:border-[#01BDFC] hover:bg-[#021630]'
                  : 'bg-white border-slate-200 hover:border-[#01BDFC] hover:bg-slate-50'
              }`}
            >
              <div className="text-xs font-display font-bold group-hover:text-[#01BDFC] flex items-center justify-between">
                <span>{srv.title}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-1">
                View Specialized Scope &rarr;
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Bridges to Portfolio, Pricing & Contact */}
      <div className="pt-8 border-t border-slate-700/30 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('/portfolio')} className="text-[#01BDFC] hover:underline">
            &larr; Explore Full Portfolio
          </button>
          <span>|</span>
          <button onClick={() => onNavigate('/pricing')} className="text-[#01BDFC] hover:underline">
            View Pricing Packages
          </button>
        </div>
        <button
          onClick={() => onNavigate('/contact')}
          className="px-4 py-2 rounded-lg bg-[#01BDFC] text-[#00091B] font-display font-bold hover:brightness-110"
        >
          Consult Sector Specialist &rarr;
        </button>
      </div>
    </div>
  );
};
