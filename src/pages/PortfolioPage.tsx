import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { PORTFOLIO_DATA } from '../data/siteData';
import { Trophy, ArrowRight, ExternalLink } from 'lucide-react';

interface PortfolioPageProps {
  theme: ThemeMode;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  theme,
  onNavigate,
  onOpenAudit,
}) => {
  const isDark = theme === 'dark';
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Local SEO & Web Architecture', 'Real Estate Performance Media', 'Ecommerce & Growth Marketing', 'Travel CRM & Inbound Funnels', 'Restaurant Marketing & Direct Loyalty', 'B2B Enterprise Portal & SEO'];

  const filteredProjects =
    activeFilter === 'All'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.category === activeFilter);

  return (
    <div className="relative pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#01BDFC]/40 bg-[#01BDFC]/10 text-[#01BDFC] text-xs font-mono">
          <Trophy className="w-3.5 h-3.5" />
          <span>VERIFIED COMMERCIAL RESULTS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
          Digital Marketing Portfolio Delhi —{' '}
          <span className="text-[#01BDFC]">Proven Growth Telemetry</span>
        </h1>
        <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          Every case study in the RIGHT EYE archive is backed by unassailable data: tracked Google analytics, verified ROAS figures, and qualified commercial pipelines delivered for Delhi NCR and national enterprises.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeFilter === filter
                ? 'bg-[#01BDFC] text-[#00091B] font-bold shadow-[0_0_15px_rgba(1,189,252,0.4)]'
                : isDark
                ? 'bg-[#021630] text-slate-300 hover:bg-[#01BDFC]/10 hover:text-white border border-[#01BDFC]/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all group ${
              isDark
                ? 'bg-[#021630] border-[#01BDFC]/20 hover:border-[#01BDFC]/60'
                : 'bg-white border-slate-200 hover:border-[#01BDFC]/60 shadow-sm'
            }`}
          >
            <div>
              <div className="relative aspect-video overflow-hidden">
                {/* STOCK PLACEHOLDER - replace with client asset */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#00091B]/85 backdrop-blur-md text-[10px] font-mono text-[#01BDFC] border border-[#01BDFC]/30">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-mono text-slate-400 mb-1">CLIENT: {project.client}</div>
                <h2 className="font-display font-bold text-lg mb-2 group-hover:text-[#01BDFC] transition-colors">
                  {project.title}
                </h2>
                <div className="text-xs font-mono text-[#01BDFC] font-bold mb-3 p-2 rounded bg-[#01BDFC]/10 border border-[#01BDFC]/20">
                  {project.impact}
                </div>
                <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-700/20">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isDark ? 'bg-[#00091B] text-slate-300' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={onOpenAudit}
                className="w-full py-2.5 rounded-lg border border-[#01BDFC]/40 text-[#01BDFC] hover:bg-[#01BDFC] hover:text-[#00091B] text-xs font-display font-semibold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Replicate These Results</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Footer */}
      <div
        className={`p-8 rounded-2xl border text-center ${
          isDark ? 'bg-[#00091B] border-[#01BDFC]/30' : 'bg-slate-50 border-slate-200'
        }`}
      >
        <h3 className="text-xl font-display font-bold mb-2">
          Want a Custom Case Study in Your Industry?
        </h3>
        <p className="text-xs text-slate-400 max-w-lg mx-auto mb-6">
          We hold NDA-protected benchmarks for healthcare clinics, retail brands, real estate firms, and travel tour operators in Delhi NCR.
        </p>
        <button
          onClick={onOpenAudit}
          className="px-6 py-3 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-xs hover:brightness-110 shadow-[0_0_15px_rgba(1,189,252,0.3)]"
        >
          Request Sector Telemetry &rarr;
        </button>
      </div>
    </div>
  );
};
