import React from 'react';
import { ThemeMode } from '../types';
import { BUSINESS_INFO } from '../data/siteData';
import { Eye, Shield, Target, Award, MapPin, Phone, Mail } from 'lucide-react';

interface AboutPageProps {
  theme: ThemeMode;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ theme, onNavigate, onOpenAudit }) => {
  const isDark = theme === 'dark';

  return (
    <div className="relative pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#01BDFC]/40 bg-[#01BDFC]/10 text-[#01BDFC] text-xs font-mono">
          <Eye className="w-3.5 h-3.5" />
          <span>OUR IDENTITY & DOCTRINE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
          About RIGHT EYE Technology —{' '}
          <span className="text-[#01BDFC]">Perception, Precision, Dominance</span>
        </h1>
        <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          We are not a generic digital agency. The name RIGHT EYE is grounded in a singular purpose: seeing what competitors, generic templates, and automated tools completely miss in Delhi’s high-velocity commercial landscape.
        </p>
      </div>

      {/* Philosophy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div
          className={`p-6 rounded-2xl border ${
            isDark ? 'bg-[#021630] border-[#01BDFC]/20' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-[#01BDFC]/10 border border-[#01BDFC]/30 flex items-center justify-center text-[#01BDFC] mb-4">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-display font-bold mb-2">Optical Perception</h2>
          <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Most companies burn marketing budgets guessing what audiences respond to. We track behavioral telemetry, search intent signals, and conversion friction with surgical clarity before writing a line of code or deploying ad spend.
          </p>
        </div>

        <div
          className={`p-6 rounded-2xl border ${
            isDark ? 'bg-[#021630] border-[#01BDFC]/20' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-[#01BDFC]/10 border border-[#01BDFC]/30 flex items-center justify-center text-[#01BDFC] mb-4">
            <Shield className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-display font-bold mb-2">Engineering Integrity</h2>
          <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            No WordPress bloat. No sluggish pre-made themes that take 5 seconds to hydrate. We construct native Next.js, React, and TypeScript systems with sub-second Core Web Vitals to guarantee top-tier organic indexing.
          </p>
        </div>

        <div
          className={`p-6 rounded-2xl border ${
            isDark ? 'bg-[#021630] border-[#01BDFC]/20' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-[#01BDFC]/10 border border-[#01BDFC]/30 flex items-center justify-center text-[#01BDFC] mb-4">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-display font-bold mb-2">Delhi NCR Roots</h2>
          <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Headquartered in Sector 20, Rohini, Delhi, we understand the nuances of the North Indian enterprise corridor. From local clinic footfall to Cyber City enterprise tech deals, our regional insight gives clients an unfair advantage.
          </p>
        </div>
      </div>

      {/* Detailed Story & HQ Facility */}
      <div
        className={`p-8 md:p-12 rounded-3xl border mb-20 ${
          isDark ? 'bg-[#021630]/70 border-[#01BDFC]/30' : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-[#01BDFC]">ROHINI OPERATIONS FACILITY</div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              Engineering Digital Dominance in North Delhi
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              RIGHT EYE Technology was founded by senior web architects and performance media specialists who recognized that Indian businesses were being shortchanged by outdated agency models. Retainers were paid for vague "impressions" while websites lagged behind global standards.
            </p>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Today, our facility at B-4/250, Sector-20, Rohini serves as a quantitative growth engine. We combine software development, video production suites, and dedicated ad buying terminals to deliver full-funnel dominance.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div
              className={`p-6 rounded-2xl border ${
                isDark ? 'bg-[#00091B] border-[#01BDFC]/40' : 'bg-white border-slate-300 shadow-md'
              }`}
            >
              <h3 className="font-display font-bold text-sm mb-4 text-[#01BDFC]">
                OFFICIAL FACILITY METRICS
              </h3>
              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#01BDFC] shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.address}, Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#01BDFC] shrink-0" />
                  <span>{BUSINESS_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#01BDFC] shrink-0" />
                  <span>{BUSINESS_INFO.email}</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('/contact')}
                className="w-full mt-6 py-2.5 rounded-lg bg-[#01BDFC] text-[#00091B] text-xs font-display font-bold hover:brightness-110"
              >
                Plan An Office Visit &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
