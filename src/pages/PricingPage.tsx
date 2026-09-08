import React from 'react';
import { ThemeMode } from '../types';
import { PRICING_PACKAGES, BUSINESS_INFO } from '../data/siteData';
import { Check, ShieldCheck, Zap, Phone } from 'lucide-react';

interface PricingPageProps {
  theme: ThemeMode;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  theme,
  onNavigate,
  onOpenAudit,
}) => {
  const isDark = theme === 'dark';

  return (
    <div className="relative pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4 mb-16 text-center mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#01BDFC]/40 bg-[#01BDFC]/10 text-[#01BDFC] text-xs font-mono">
          <Zap className="w-3.5 h-3.5" />
          <span>TRANSPARENT VALUE MATRICES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
          Digital Marketing Packages India —{' '}
          <span className="text-[#01BDFC]">Zero Retainer Fluff</span>
        </h1>
        <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          Engineered for businesses that demand high accountability. Transparent monthly deliverables, verified pipeline reporting, and institutional execution from Rohini, Delhi.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
        {PRICING_PACKAGES.map((plan) => {
          const isPopular = plan.badge !== undefined;
          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 border flex flex-col justify-between relative transition-all duration-300 ${
                isPopular
                  ? isDark
                    ? 'bg-[#021630] border-[#01BDFC] shadow-[0_0_35px_rgba(1,189,252,0.25)] ring-1 ring-[#01BDFC]'
                    : 'bg-white border-[#01BDFC] shadow-xl ring-1 ring-[#01BDFC]'
                  : isDark
                  ? 'bg-[#00091B]/80 border-[#01BDFC]/20 hover:border-[#01BDFC]/50'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#01BDFC] text-[#00091B] font-mono text-[10px] font-bold tracking-widest uppercase shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="font-mono text-xs text-[#01BDFC] mb-2">{plan.idealFor}</div>
                <h2 className="text-xl font-display font-bold mb-2">{plan.name}</h2>
                <p className={`text-xs leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-slate-700/20">
                  <span className="text-4xl font-display font-extrabold text-[#01BDFC]">{plan.price}</span>
                  <span className="text-xs font-mono text-slate-400">{plan.billingPeriod}</span>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    SCOPE DELIVERABLES:
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs leading-relaxed">
                      <Check className="w-4 h-4 text-[#01BDFC] shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-700/20">
                <button
                  onClick={onOpenAudit}
                  className={`w-full py-3 rounded-xl font-display font-bold text-xs tracking-wide transition-all cursor-pointer ${
                    isPopular
                      ? 'bg-[#01BDFC] text-[#00091B] hover:brightness-110 shadow-[0_0_20px_rgba(1,189,252,0.4)]'
                      : isDark
                      ? 'border border-[#01BDFC]/40 text-[#01BDFC] hover:bg-[#01BDFC]/10'
                      : 'border border-slate-300 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  Deploy Package Scope &rarr;
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Package FAQ & Confidence Guarantee */}
      <div
        className={`p-8 rounded-3xl border mb-16 ${
          isDark ? 'bg-[#021630]/60 border-[#01BDFC]/20' : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2 text-[#01BDFC] font-mono text-xs mb-3">
          <ShieldCheck className="w-4 h-4" />
          <span>INSTITUTIONAL SERVICE GUARANTEE</span>
        </div>
        <h3 className="text-2xl font-display font-bold mb-4">
          No Long-Term Lock-Ins. Performance-First Agility.
        </h3>
        <p className={`text-sm leading-relaxed max-w-3xl mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          We operate on transparent 30-day billing milestones. If our engineered digital marketing packages in India do not produce documented traction, ranking improvements, and pipeline lift within the first cycle, you can terminate with zero friction.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="text-[#01BDFC] font-bold hover:underline flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            Speak Directly with Package Director: {BUSINESS_INFO.phone}
          </a>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="text-slate-400">Custom Enterprise Contracts Available on Request</span>
        </div>
      </div>
    </div>
  );
};
