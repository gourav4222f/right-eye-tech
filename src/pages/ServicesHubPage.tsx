import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { SERVICES_DATA } from '../data/siteData';
import { ArrowRight, Layers, CheckCircle2, Zap } from 'lucide-react';

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

  const categories = ['All', 'Web & CRM', 'Digital Marketing', 'SEO', 'Video & Paid Ads'];

  const filteredServices =
    selectedCategory === 'All'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <div className="relative pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#01BDFC]/40 bg-[#01BDFC]/10 text-[#01BDFC] text-xs font-mono">
          <Layers className="w-3.5 h-3.5" />
          <span>FULL-SPECTRUM OPTICAL CAPABILITIES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
          Digital Agency Services Delhi —{' '}
          <span className="text-[#01BDFC]">Architected for Speed & Revenue</span>
        </h1>
        <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          RIGHT EYE Technology deploys 20+ specialized technical and performance disciplines. Every service is calibrated to solve real commercial growth barriers, eliminate ad waste, and guarantee search dominance across Delhi NCR and pan-India.
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
            {cat} {cat === 'All' ? `(${SERVICES_DATA.length})` : ''}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredServices.map((service, idx) => (
          <div
            key={service.slug}
            className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
              isDark
                ? 'bg-[#021630]/70 border-[#01BDFC]/20 hover:border-[#01BDFC]/60 hover:bg-[#021630]'
                : 'bg-white border-slate-200 hover:border-[#01BDFC]/60 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[#01BDFC] px-2 py-0.5 rounded bg-[#01BDFC]/10 border border-[#01BDFC]/20">
                  {service.category}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  REF.0{idx + 1}
                </span>
              </div>

              <h2 className="text-lg font-display font-bold mb-2 group-hover:text-[#01BDFC] transition-colors">
                {service.title}
              </h2>
              <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {service.shortDesc}
              </p>

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

              <button
                onClick={() => onNavigate(`/services/${service.slug}`)}
                className="text-xs font-display font-semibold text-[#01BDFC] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Full Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className={`p-8 rounded-2xl border text-center ${
          isDark ? 'bg-[#00091B] border-[#01BDFC]/30' : 'bg-slate-50 border-slate-200'
        }`}
      >
        <h3 className="text-xl font-display font-bold mb-2">
          Require a Customized Technical Stack?
        </h3>
        <p className="text-xs text-slate-400 max-w-lg mx-auto mb-6">
          We bundle web architectures, performance SEO, and automated CRM pipelines into tailored enterprise packages.
        </p>
        <button
          onClick={onOpenAudit}
          className="px-6 py-3 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-xs hover:brightness-110 shadow-[0_0_15px_rgba(1,189,252,0.3)]"
        >
          Request Custom Proposal &rarr;
        </button>
      </div>
    </div>
  );
};
