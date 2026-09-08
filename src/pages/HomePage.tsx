import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { HeroEyeScanner } from '../components/HeroEyeScanner';
import { RightEyeLogo } from '../components/RightEyeLogo';
import { SERVICES_DATA, PORTFOLIO_DATA, BUSINESS_INFO, TESTIMONIALS_DATA } from '../data/siteData';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  TrendingUp,
  Cpu,
  Zap,
  CheckCircle,
  BarChart3,
  MapPin,
  Phone,
  ShieldCheck,
  Eye,
  Sliders,
  ChevronDown,
  ChevronUp,
  Layers,
  Activity,
  Sparkles,
  Star,
  Award,
  Code2,
  Gauge,
  Clock,
  Lock,
  ExternalLink,
  Filter,
} from 'lucide-react';

interface HomePageProps {
  theme: ThemeMode;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ theme, onNavigate, onOpenAudit }) => {
  const isDark = theme === 'dark';

  // Category Filter for Capabilities
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Interactive Vision ROI Diagnostic State
  const [selectedIndustry, setSelectedIndustry] = useState('Healthcare & Clinics');
  const [currentRevenue, setCurrentRevenue] = useState(15); // in Lakhs/mo

  // Active FAQ accordion item
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Active Protocol Step
  const [activeProtocolStep, setActiveProtocolStep] = useState<number>(0);

  // Calculate simulated missed opportunity based on typical Delhi NCR digital maturity
  const missedInquiries = Math.round(currentRevenue * 4.2);
  const potentialRevenueLift = Math.round(currentRevenue * 0.45 * 10) / 10;
  const searchVisibilityIndex = Math.min(88, Math.round(18 + currentRevenue * 0.7));

  // Filtered services
  const filteredServices = SERVICES_DATA.filter((srv) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'web') return srv.category === 'Web & CRM';
    if (activeCategory === 'growth') return srv.category === 'SEO' || srv.category === 'Digital Marketing';
    if (activeCategory === 'ads') return srv.category === 'Video & Paid Ads';
    return true;
  });

  // 4-Stage Operational Protocol Data
  const PROTOCOL_STEPS = [
    {
      num: '01',
      phase: 'RECONNAISSANCE & CODE AUDIT',
      title: 'Full Spectrum Digital Telemetry',
      duration: 'Week 1',
      desc: 'We reverse-engineer your current web speed, Google Search ranking footprint, Meta Pixel conversion loss, and Delhi NCR competitor bidding strategies.',
      deliverables: [
        'Lighthouse 6-factor Core Web Vitals diagnostic',
        'Competitor search footprint & keyword gap analysis',
        'Ad spend attribution & conversion leakage audit',
        'Actionable 90-day technical sprint roadmap',
      ],
    },
    {
      num: '02',
      phase: 'ARCHITECTURE & SPRINT',
      title: 'Next.js Precision Re-engineering',
      duration: 'Weeks 2-3',
      desc: 'We construct high-velocity web platforms using Next.js 15, TypeScript, Tailwind CSS, and headless database structures, guaranteeing sub-0.8s load times.',
      deliverables: [
        'Production-grade SSR/SSG Next.js codebase',
        'Mobile-first responsive UX with 98+ Lighthouse scores',
        'Deep Schema.org JSON-LD structured data integration',
        'Meta Conversions API & GA4 Server-Side pipelines',
      ],
    },
    {
      num: '03',
      phase: 'ALGORITHMIC CALIBRATION',
      title: 'Search Dominance & Media Buying',
      duration: 'Weeks 3-5',
      desc: 'We deploy localized Delhi NCR SEO citation hubs and high-intent Google Search & Meta Performance Max campaigns engineered with strict negative keyword shields.',
      deliverables: [
        'Delhi, Noida & Gurgaon localized landing page hubs',
        'Google Ads Search & Performance Max campaigns with 5x+ ROAS focus',
        'Meta ad creative sprint with dynamic retargeting funnels',
        'Real-time automated conversion telemetry dashboard',
      ],
    },
    {
      num: '04',
      phase: 'COMPOUNDING SCALE',
      title: 'Conversion Rate Optimization & Revenue Ramp',
      duration: 'Ongoing',
      desc: 'We continuously A/B test conversion triggers, refine ad bidding algorithms, and scale qualified monthly inquiries without linear budget inflation.',
      deliverables: [
        'Bi-weekly conversion rate optimization (CRO) sprints',
        'Automated CRM lead routing & WhatsApp webhook pipelines',
        'Monthly executive performance review with senior leadership',
        'Guaranteed 99.98% high-availability SLA uptime support',
      ],
    },
  ];

  // Traditional Agency vs RIGHT EYE Comparison Points
  const COMPARISON_ROWS = [
    {
      feature: 'Core Technology Stack',
      traditional: 'Bloated WordPress themes, slow Elementor builders, 35+ unsecured plugins',
      rightEye: 'Custom Next.js 15, TypeScript, Tailwind CSS, server-side rendering',
      status: 'Superior Code',
    },
    {
      feature: 'Page Speed & Web Vitals',
      traditional: '3.8s - 6.2s load time; red Lighthouse scores (32 - 58)',
      rightEye: 'Sub-0.8s First Contentful Paint; 98+ Lighthouse on mobile & desktop',
      status: 'Sub-Second Speed',
    },
    {
      feature: 'Search Engine Architecture',
      traditional: 'Basic Yoast plugin tags, repetitive keyword stuffing, slow crawl times',
      rightEye: 'Deep JSON-LD Schema.org, Entity SEO, dynamic localized corridor hubs',
      status: 'Algorithmic Rank',
    },
    {
      feature: 'Paid Media Attribution',
      traditional: 'Blind "Boost Post" buttons, unverified leads, untracked phone calls',
      rightEye: 'Server-Side Meta Conversions API + Google Enhanced Conversions (5.2x ROAS avg)',
      status: 'Verified Attribution',
    },
    {
      feature: 'Intellectual Property & Code',
      traditional: 'Proprietary lock-in, recurring monthly license fees, inaccessible code',
      rightEye: '100% Client Git Ownership, zero licensing lock-in, clean documented code',
      status: 'Complete Ownership',
    },
    {
      feature: 'Commercial Accountability',
      traditional: 'Vanity metrics (impressions, clicks, arbitrary reach counts)',
      rightEye: 'Contracted revenue SLAs, verified phone inquiries, direct CRM lead sync',
      status: 'Revenue Driven',
    },
  ];

  // Engineering Tech Stack Items
  const TECH_STACK = [
    { name: 'Next.js 15', role: 'Server-Side Rendering & ISR', tag: 'Core Web Engine' },
    { name: 'TypeScript', role: 'Strict Type-Safe Systems', tag: 'Architecture' },
    { name: 'Tailwind CSS', role: 'Zero-Runtime CSS Engine', tag: 'Interface' },
    { name: 'Meta CAPI', role: 'Server-Side Event Tracking', tag: 'Ad Tech' },
    { name: 'Google Ads API', role: 'Enhanced Conversion Sync', tag: 'Acquisition' },
    { name: 'D3.js', role: 'Custom Telemetry Engines', tag: 'Visuals' },
    { name: 'PostgreSQL', role: 'Relational High-Yield DB', tag: 'Data' },
    { name: 'Cloudflare Edge', role: 'Sub-30ms Regional CDN', tag: 'Infrastructure' },
  ];

  // Sector Endorsement Ticker Items
  const SECTOR_MARQUEE = [
    'MULTISPECIALTY HEALTHCARE // ROHINI',
    'LUXURY REAL ESTATE // GURGAON CYBER CITY',
    'HIGH-AOV ECOMMERCE // NOIDA EXP',
    'HERITAGE HOSPITALITY // CONNAUGHT PLACE',
    'B2B CORPORATE LEGAL // NEW DELHI',
    'TECH EDTECH ACADEMIES // NORTH CAMPUS',
    'DIRECT-TO-CONSUMER // DELHI NCR',
  ];

  // FAQ Items
  const FAQS = [
    {
      q: 'Why does RIGHT EYE Technology build custom code instead of WordPress or Shopify templates?',
      a: 'In competitive Delhi NCR search queries, page speed is the #1 organic ranking and ad conversion factor. Pre-built WordPress and Shopify themes carry megabytes of redundant CSS, jQuery, and unoptimized plugins that degrade mobile load times above 3.5 seconds. Our custom Next.js 15 platforms load in under 0.8 seconds, immediately boosting Google organic rankings and slashing your cost-per-lead by 30% to 50%.',
    },
    {
      q: 'How quickly can we expect to see tangible organic search lift in Delhi NCR?',
      a: 'With our precision JSON-LD Schema.org markup and localized regional corridor hubs (Delhi, Rohini, Noida, Gurgaon), technical Google indexing occurs within 72 hours. Measurable keyword rank improvements in Google Maps 3-Pack and organic search typically register within 3 to 6 weeks.',
    },
    {
      q: 'What minimum advertising budget is recommended for Google and Meta campaigns?',
      a: 'We generally advise a baseline ad capital of ₹35,000 to ₹75,000/month for localized Delhi NCR campaigns, and ₹1.5 Lakhs+/month for pan-India or multi-location scaling. Our algorithmic bidding models and negative keyword shields ensure zero ad spend is wasted on accidental or unqualified clicks.',
    },
    {
      q: 'Do we own the website code, intellectual property, and advertising accounts?',
      a: 'Yes, 100%. Unlike conventional agencies that hold client assets hostage, RIGHT EYE Technology hands over all Git repositories, production builds, and advertising assets directly to your company. You retain complete, unrestricted ownership of your digital assets.',
    },
    {
      q: 'Can we schedule an in-person strategy consultation at your Rohini, Delhi headquarters?',
      a: 'Absolutely. We actively welcome business owners and corporate leadership to our registered headquarters at B-4/250, Sector-20, Rohini, Delhi. You can meet directly with our senior technology and digital marketing directors to review live code and revenue models.',
    },
    {
      q: 'What ongoing maintenance and SLA support do you provide post-deployment?',
      a: 'Every production deployment includes dedicated 30-day post-launch telemetry, continuous Core Web Vitals monitoring, and a 99.98% high-availability SLA uptime guarantee. Extended monthly optimization and conversion maintenance agreements are also available.',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background HUD Matrix Grid */}
      <div className="absolute inset-0 bg-hud-grid pointer-events-none opacity-45 z-0" />

      {/* 1. HERO SECTION: Optical Precision & Telemetry */}
      <section className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Brand Trust Emblem Stamp */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#01BDFC]/40 bg-[#01BDFC]/10 text-[#01BDFC] text-xs font-mono tracking-wider backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#01BDFC] animate-ping" />
            <span>DELHI NCR’S PREMIER GROWTH & TECH AGENCY</span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <RightEyeLogo theme={theme} variant="emblem" size="sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Vision Statement & Technical Value */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.08]">
              See what others miss.{' '}
              <span className="text-[#01BDFC] block">
                Engineered for market dominance.
              </span>
            </h1>

            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              RIGHT EYE Technology operates as an optical intelligence and full-stack digital execution agency in Delhi NCR. We synthesize high-velocity Next.js web architectures, algorithmic search ranking, and high-yield media buying to transform passive digital visitors into paying commercial clients.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenAudit}
                className="px-6 py-3.5 rounded-xl font-display font-bold text-sm tracking-wide bg-[#01BDFC] text-[#00091B] hover:brightness-110 transition-all shadow-[0_0_25px_rgba(1,189,252,0.45)] flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request Optical Growth Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('/services')}
                className={`px-6 py-3.5 rounded-xl font-display font-medium text-sm border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isDark
                    ? 'border-[#01BDFC]/35 hover:border-[#01BDFC] text-white hover:bg-[#01BDFC]/10 shadow-[0_0_15px_rgba(1,189,252,0.1)]'
                    : 'border-slate-300 hover:border-[#01BDFC] text-[#021630] hover:bg-slate-50'
                }`}
              >
                <span>Explore 20+ Systems</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className={`px-4 py-3.5 rounded-xl font-mono text-xs border transition-all flex items-center justify-center gap-2 ${
                  isDark
                    ? 'border-slate-800 text-slate-300 hover:text-[#01BDFC] hover:border-[#01BDFC]/40'
                    : 'border-slate-200 text-slate-700 hover:text-[#01BDFC] hover:border-[#01BDFC]'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-[#01BDFC]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* 5 Real-Time Telemetry Metrics Ribbon */}
            <div className="pt-6 border-t border-slate-700/20 grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs font-mono">
              <div className="p-2.5 rounded-lg border border-[#01BDFC]/15 bg-[#01BDFC]/5">
                <div className="text-xl sm:text-2xl font-display font-bold text-[#01BDFC]">0.8s</div>
                <div className={isDark ? 'text-slate-400' : 'text-slate-600'}>Avg Page LCP</div>
              </div>

              <div className="p-2.5 rounded-lg border border-[#01BDFC]/15 bg-[#01BDFC]/5">
                <div className="text-xl sm:text-2xl font-display font-bold text-[#01BDFC]">5.2x</div>
                <div className={isDark ? 'text-slate-400' : 'text-slate-600'}>Blended ROAS</div>
              </div>

              <div className="p-2.5 rounded-lg border border-[#01BDFC]/15 bg-[#01BDFC]/5">
                <div className="text-xl sm:text-2xl font-display font-bold text-[#01BDFC]">480%</div>
                <div className={isDark ? 'text-slate-400' : 'text-slate-600'}>Organic Lift</div>
              </div>

              <div className="p-2.5 rounded-lg border border-[#01BDFC]/15 bg-[#01BDFC]/5">
                <div className="text-xl sm:text-2xl font-display font-bold text-[#01BDFC]">₹5Cr+</div>
                <div className={isDark ? 'text-slate-400' : 'text-slate-600'}>Ad Capital Scaled</div>
              </div>

              <div className="p-2.5 rounded-lg border border-[#01BDFC]/15 bg-[#01BDFC]/5 col-span-2 sm:col-span-1">
                <div className="text-xl sm:text-2xl font-display font-bold text-[#01BDFC]">99.98%</div>
                <div className={isDark ? 'text-slate-400' : 'text-slate-600'}>Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Biometric Eye Scanner & HUD Reticle */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroEyeScanner theme={theme} />
          </div>
        </div>
      </section>

      {/* 2. LIVE DELHI NCR SECTOR TICKER / MARQUEE */}
      <div className={`py-3.5 border-y font-mono text-xs overflow-hidden ${
        isDark ? 'bg-[#00091B]/90 border-[#01BDFC]/20 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
      }`}>
        <div className="flex gap-8 whitespace-nowrap animate-[marquee_28s_linear_infinite]">
          {SECTOR_MARQUEE.concat(SECTOR_MARQUEE).map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#01BDFC]" />
              <span className="tracking-widest">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CAPABILITIES / 7 PRIMARY MODULAR SYSTEMS (with Category Filter) */}
      <section className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#01BDFC] uppercase mb-1">
              OPTICAL SYSTEMS // PRIMARY PILLARS
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
              Specialized Digital Capabilities
            </h2>
            <p className={`text-xs sm:text-sm mt-1 max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Every service is engineered as a precision optical module — designed to integrate natively into your revenue pipeline.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mt-4 md:mt-0 p-1 rounded-xl border text-xs font-mono">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#01BDFC] text-[#00091B] font-bold shadow-[0_0_10px_rgba(1,189,252,0.3)]'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-[#021630]'
              }`}
            >
              All Systems ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'web'
                  ? 'bg-[#01BDFC] text-[#00091B] font-bold shadow-[0_0_10px_rgba(1,189,252,0.3)]'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-[#021630]'
              }`}
            >
              Web & CRM
            </button>
            <button
              onClick={() => setActiveCategory('growth')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'growth'
                  ? 'bg-[#01BDFC] text-[#00091B] font-bold shadow-[0_0_10px_rgba(1,189,252,0.3)]'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-[#021630]'
              }`}
            >
              SEO & Ads
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.slug}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                isDark
                  ? 'bg-[#021630]/75 border-[#01BDFC]/20 hover:border-[#01BDFC]/60 hover:bg-[#021630] shadow-[0_0_20px_rgba(1,189,252,0.06)]'
                  : 'bg-white border-slate-200 hover:border-[#01BDFC]/60 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-[#01BDFC] px-2.5 py-0.5 rounded bg-[#01BDFC]/10 border border-[#01BDFC]/20 font-bold">
                    SYS.0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-[#01BDFC] transition-colors">
                  {service.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {service.shortDesc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-1.5 mb-6 text-[11px]">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#01BDFC] shrink-0" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-700/20 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs font-mono">
                    {service.metrics.slice(0, 2).map((m, i) => (
                      <span key={i} className="text-[#01BDFC]">
                        {m.label}: <strong>{m.value}</strong>
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="text-xs font-display font-semibold text-[#01BDFC] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BRAND EMBLEM & OPTICAL IDENTITY SPOTLIGHT */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 md:p-12 rounded-3xl border relative overflow-hidden ${
            isDark
              ? 'bg-gradient-to-r from-[#00091B] via-[#021630] to-[#00091B] border-[#01BDFC]/30 shadow-[0_0_40px_rgba(1,189,252,0.12)]'
              : 'bg-white border-slate-200 shadow-lg'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl border border-[#01BDFC]/20 bg-[#00091B]/60 text-center">
              <RightEyeLogo theme={theme} variant="mark" size="xl" />
              <div className="mt-4">
                <span className="font-display font-extrabold text-2xl tracking-wider text-white">
                  RIGHT<span className="text-[#01BDFC] ml-1">EYE</span>
                </span>
                <div className="font-mono text-xs tracking-[0.28em] text-[#01BDFC] uppercase mt-0.5">
                  TECHNOLOGY
                </div>
              </div>
              <div className="mt-3 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>OFFICIAL LOGO EMBLEM</span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#01BDFC]">
                <Eye className="w-4 h-4" />
                <span>OPTICAL PHILOSOPHY & BRAND ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold">
                Why "Right Eye"? The Science of Focused Optical Dominance
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                In human neuroscience, the right eye is dominant in approximately 70% of the population — it controls spatial depth perception, rapid visual fixation, and decisive impulse.
              </p>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                At RIGHT EYE Technology, we translate this physiological principle into commercial engineering. While competing agencies build generic templates, our optical systems establish instant focal lock on your high-intent prospects, channeling them directly down your revenue conversion pipeline.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl border border-[#01BDFC]/20 bg-[#01BDFC]/5 text-xs font-mono">
                  <div className="text-[#01BDFC] font-bold">#01BDFC ELECTRIC CYAN</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Targeting & Focal Reticle</div>
                </div>
                <div className="p-3 rounded-xl border border-[#01BDFC]/20 bg-[#01BDFC]/5 text-xs font-mono">
                  <div className="text-[#01BDFC] font-bold">#00091B DEEP NAVY</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">High-Contrast Foundation</div>
                </div>
                <div className="p-3 rounded-xl border border-[#01BDFC]/20 bg-[#01BDFC]/5 text-xs font-mono">
                  <div className="text-[#01BDFC] font-bold">28.7188° N, 77.0694° E</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Registered Rohini Delhi HQ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE GROWTH VISION DIAGNOSTIC (High-Utility Calculator) */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 md:p-12 rounded-3xl border ${
            isDark
              ? 'bg-[#021630]/90 border-[#01BDFC]/35 shadow-[0_0_40px_rgba(1,189,252,0.15)]'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-[#01BDFC] font-mono text-xs tracking-wider">
                <Sliders className="w-4 h-4" />
                <span>INTERACTIVE REVENUE SIMULATOR</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold">
                Calculate Missed Market Opportunities in Delhi NCR
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Most businesses in Delhi capture less than 18% of available search and social intent due to slow web code, poor local citations, and untracked ad leaks. Calibrate your parameters below:
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-mono mb-1.5 text-slate-400">SELECT YOUR SECTOR</label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className={`w-full p-2.5 rounded-lg border text-xs font-sans ${
                      isDark
                        ? 'bg-[#00091B] border-[#01BDFC]/40 text-white'
                        : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  >
                    <option>Healthcare & Clinics</option>
                    <option>Travel & Tourism</option>
                    <option>Real Estate & Properties</option>
                    <option>Restaurants & Dining</option>
                    <option>Retail & D2C Brands</option>
                    <option>Education & Coaching</option>
                    <option>B2B SaaS & Tech</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-400">CURRENT MONTHLY TURNOVER</span>
                    <span className="text-[#01BDFC] font-bold">₹{currentRevenue} Lakhs / mo</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="100"
                    step="1"
                    value={currentRevenue}
                    onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                    className="w-full accent-[#01BDFC] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>₹2 Lakhs</span>
                    <span>₹50 Lakhs</span>
                    <span>₹1 Crore+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnostic Output Display Panel */}
            <div className="lg:col-span-7">
              <div
                className={`p-6 rounded-2xl border ${
                  isDark ? 'bg-[#00091B] border-[#01BDFC]/30' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-700/30 pb-3 mb-4 text-xs font-mono">
                  <span className="text-slate-400">DIAGNOSTIC PROJECTION // DELHI NCR</span>
                  <span className="text-[#01BDFC] flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> CONFIDENCE 94%
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className={`p-4 rounded-xl border ${isDark ? 'border-slate-800 bg-[#021630]/50' : 'border-slate-200 bg-white'}`}>
                    <div className="text-xs text-slate-400 font-mono">Missed High-Intent Leads</div>
                    <div className="text-3xl font-display font-bold text-amber-400 mt-1">
                      ~{missedInquiries}+ <span className="text-xs font-normal text-slate-400">inquiries/mo</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Lost to faster competitors in Delhi search results
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl border ${isDark ? 'border-slate-800 bg-[#021630]/50' : 'border-slate-200 bg-white'}`}>
                    <div className="text-xs text-slate-400 font-mono">Recoverable Monthly Revenue</div>
                    <div className="text-3xl font-display font-bold text-[#01BDFC] mt-1">
                      +₹{potentialRevenueLift}L <span className="text-xs font-normal text-slate-400">incremental</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Via high-conversion Next.js site + Meta/Google ads
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-[#01BDFC]/20 bg-[#01BDFC]/5 text-xs font-mono flex items-center justify-between mb-4">
                  <span>SEARCH OPPORTUNITY INDEX:</span>
                  <strong className="text-[#01BDFC]">{searchVisibilityIndex}% UNEXPLOITED INTENT</strong>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-slate-400">
                    Target Sector Strategy: <strong className={isDark ? 'text-white' : 'text-slate-900'}>{selectedIndustry}</strong>
                  </div>
                  <button
                    onClick={onOpenAudit}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#01BDFC] text-[#00091B] font-display font-bold text-xs hover:brightness-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(1,189,252,0.3)]"
                  >
                    Unlock My Complete Growth Blueprint &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPARISON MATRIX: Traditional Agencies vs. RIGHT EYE Optical Engineering */}
      <section className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono tracking-widest text-[#01BDFC] uppercase mb-1">
            TECHNICAL DISCRIMINATION MATRIX
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
            Traditional Agencies vs. RIGHT EYE Optical Engineering
          </h2>
          <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Why standard marketing agencies fail to drive compounded enterprise value in competitive markets.
          </p>
        </div>

        <div className={`rounded-2xl border overflow-hidden ${
          isDark ? 'bg-[#021630]/60 border-[#01BDFC]/25' : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className={`border-b font-mono ${isDark ? 'border-slate-800 bg-[#00091B]/80 text-[#01BDFC]' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                  <th className="p-4 sm:px-6 w-1/4">EVALUATION CRITERIA</th>
                  <th className="p-4 sm:px-6 w-3/8 text-rose-400">TRADITIONAL AGENCIES</th>
                  <th className="p-4 sm:px-6 w-3/8 text-[#01BDFC]">RIGHT EYE TECHNOLOGY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/20">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className={`transition-colors ${isDark ? 'hover:bg-[#00091B]/40' : 'hover:bg-slate-50'}`}>
                    <td className="p-4 sm:px-6 font-display font-bold text-sm">
                      {row.feature}
                      <span className="block text-[10px] font-mono text-[#01BDFC] font-normal mt-0.5">
                        {row.status}
                      </span>
                    </td>
                    <td className={`p-4 sm:px-6 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span className="text-rose-400 font-bold mr-1.5">✕</span>
                      {row.traditional}
                    </td>
                    <td className={`p-4 sm:px-6 leading-relaxed font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      <span className="text-[#01BDFC] font-bold mr-1.5">✓</span>
                      {row.rightEye}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. THE 4-STAGE OPTICAL EXECUTION PROTOCOL (Interactive Roadmap) */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-mono tracking-widest text-[#01BDFC] uppercase mb-1">
            OPERATIONAL METHODOLOGY
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
            The 4-Stage Optical Execution Protocol
          </h2>
          <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            How we take businesses from unverified digital noise to predictable, high-margin market command.
          </p>
        </div>

        {/* Step Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {PROTOCOL_STEPS.map((step, idx) => (
            <button
              key={step.num}
              onClick={() => setActiveProtocolStep(idx)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                activeProtocolStep === idx
                  ? isDark
                    ? 'border-[#01BDFC] bg-[#021630] shadow-[0_0_20px_rgba(1,189,252,0.2)]'
                    : 'border-[#01BDFC] bg-slate-50 shadow-sm'
                  : isDark
                  ? 'border-slate-800 bg-[#00091B]/60 hover:border-slate-700'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono text-[#01BDFC] font-bold">{step.num}</span>
                <span className="text-[10px] font-mono text-slate-500">{step.duration}</span>
              </div>
              <div className="font-display font-bold text-xs truncate">{step.title}</div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className={`p-8 rounded-3xl border ${
          isDark ? 'bg-[#021630]/90 border-[#01BDFC]/35' : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono text-[#01BDFC] tracking-wider">
                STAGE {PROTOCOL_STEPS[activeProtocolStep].num} // {PROTOCOL_STEPS[activeProtocolStep].phase}
              </div>
              <h3 className="text-2xl font-display font-bold">
                {PROTOCOL_STEPS[activeProtocolStep].title}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {PROTOCOL_STEPS[activeProtocolStep].desc}
              </p>
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 block mb-2">SPRINT DURATION:</span>
                <span className="px-3 py-1 rounded-full border border-[#01BDFC]/30 bg-[#01BDFC]/10 text-xs font-mono text-[#01BDFC]">
                  {PROTOCOL_STEPS[activeProtocolStep].duration} Target Window
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-[#00091B] border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
                  VERIFIED DELIVERABLES:
                </div>
                <div className="space-y-2.5">
                  {PROTOCOL_STEPS[activeProtocolStep].deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle className="w-4 h-4 text-[#01BDFC] shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ENGINEERING SPECIFICATIONS & TECH STACK GRID */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-mono tracking-widest text-[#01BDFC] uppercase mb-1">
            ZERO-BLOAT PRODUCTION ARCHITECTURE
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
            Engineered on Modern Infrastructure
          </h2>
          <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            We do not deploy slow page builders or template themes. Every platform is built natively.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {TECH_STACK.map((tech, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all ${
                isDark
                  ? 'bg-[#021630]/60 border-slate-800 hover:border-[#01BDFC]/40'
                  : 'bg-white border-slate-200 hover:border-[#01BDFC]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Code2 className="w-4 h-4 text-[#01BDFC]" />
                <span className="text-[10px] font-mono text-slate-500">{tech.tag}</span>
              </div>
              <div className="font-display font-bold text-sm">{tech.name}</div>
              <div className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {tech.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FEATURED CASE ARCHIVE / MEASURABLE RESULTS */}
      <section className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#01BDFC] uppercase mb-1">
              FIELD VALIDATION // CASE ARCHIVE
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
              Measurable Performance Outcomes
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/portfolio')}
            className="text-xs font-mono text-[#01BDFC] hover:underline flex items-center gap-1 mt-3 md:mt-0"
          >
            <span>View All Realized Engagements</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border overflow-hidden transition-all group ${
                isDark ? 'bg-[#021630] border-[#01BDFC]/20 hover:border-[#01BDFC]/50' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#00091B]/80 backdrop-blur-md text-[10px] font-mono text-[#01BDFC] border border-[#01BDFC]/30">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-base mb-1 group-hover:text-[#01BDFC] transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-[#01BDFC] font-semibold mb-3">
                  {project.impact}
                </div>
                <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
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
          ))}
        </div>
      </section>

      {/* 10. LOCAL DELHI NCR DOMINANCE & VERIFIED BUSINESS PROFILE */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 rounded-3xl border ${
            isDark ? 'bg-[#021630]/60 border-[#01BDFC]/25' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono text-[#01BDFC] tracking-wider">
                REGIONAL HEADQUARTERS // ROHINI, DELHI
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold">
                Delhi NCR’s Local Market Authority
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Operating out of Sector 20, Rohini, RIGHT EYE Technology actively deploys technical marketing infrastructures across Delhi, Noida, and Gurgaon. Whether you are targeting local footfall in Pitampura or Cyber City B2B procurement, our systems dominate local Google search.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/digital-marketing-agency-delhi')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isDark ? 'border-[#01BDFC]/20 hover:border-[#01BDFC] bg-[#00091B]' : 'border-slate-300 hover:border-[#01BDFC] bg-white'
                  }`}
                >
                  <div className="font-display font-bold text-sm">Delhi Corridor</div>
                  <div className="text-[11px] text-[#01BDFC] font-mono mt-0.5">Rohini, CP, West Delhi</div>
                </button>

                <button
                  onClick={() => onNavigate('/digital-marketing-agency-noida')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isDark ? 'border-[#01BDFC]/20 hover:border-[#01BDFC] bg-[#00091B]' : 'border-slate-300 hover:border-[#01BDFC] bg-white'
                  }`}
                >
                  <div className="font-display font-bold text-sm">Noida Corridor</div>
                  <div className="text-[11px] text-[#01BDFC] font-mono mt-0.5">Sector 62, Expressway</div>
                </button>

                <button
                  onClick={() => onNavigate('/digital-marketing-agency-gurgaon')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isDark ? 'border-[#01BDFC]/20 hover:border-[#01BDFC] bg-[#00091B]' : 'border-slate-300 hover:border-[#01BDFC] bg-white'
                  }`}
                >
                  <div className="font-display font-bold text-sm">Gurgaon Corridor</div>
                  <div className="text-[11px] text-[#01BDFC] font-mono mt-0.5">Cyber City, Golf Course</div>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className={`p-6 rounded-2xl border ${
                  isDark ? 'bg-[#00091B] border-[#01BDFC]/40' : 'bg-white border-slate-300 shadow-md'
                }`}
              >
                <div className="flex items-center gap-2 mb-4 text-[#01BDFC] font-mono text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>VERIFIED LOCAL BUSINESS PROFILE</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 block font-mono text-[10px]">REGISTERED ENTITY:</span>
                    <strong className="text-sm font-display text-white dark:text-white">RIGHT EYE Technology</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono text-[10px]">ADDRESS:</span>
                    <span>{BUSINESS_INFO.address}, Delhi, India</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-700/30">
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px]">HOTLINE:</span>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="text-[#01BDFC] font-bold">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px]">HOURS:</span>
                      <span>Mon - Sat: 9:30 AM - 7:30 PM</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('/contact')}
                  className="w-full mt-5 py-2.5 rounded-lg border border-[#01BDFC] text-[#01BDFC] hover:bg-[#01BDFC]/10 text-xs font-display font-semibold transition-colors text-center block cursor-pointer"
                >
                  Schedule Office Consultation &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CLIENT TESTIMONIALS */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-mono tracking-widest text-[#01BDFC] uppercase mb-1">
            CLIENT ENDORSEMENTS
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
            Validated by Delhi NCR Enterprise Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border flex flex-col justify-between ${
                isDark ? 'bg-[#021630]/70 border-[#01BDFC]/20' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className={`text-xs leading-relaxed italic mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/20">
                <div className="font-display font-bold text-xs">{item.author}</div>
                <div className="text-[11px] text-slate-500 font-mono">{item.role}, {item.company}</div>
                <div className="text-[10px] text-[#01BDFC] font-mono mt-0.5">{item.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS (Accordion) */}
      <section className="relative z-10 py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs font-mono tracking-widest text-[#01BDFC] uppercase mb-1">
            COMMON INQUIRIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all ${
                  isDark
                    ? 'bg-[#021630]/70 border-[#01BDFC]/20'
                    : 'bg-white border-slate-200'
                }`}
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display font-semibold text-sm">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#01BDFC] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className={`px-4 pb-4 pt-1 text-xs leading-relaxed border-t border-slate-700/20 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 13. FINAL HIGH-CONVERSION BANNER */}
      <section className="relative z-10 py-20 max-w-5xl mx-auto px-4 text-center">
        <div
          className={`p-10 md:p-14 rounded-3xl border relative overflow-hidden ${
            isDark
              ? 'bg-gradient-to-b from-[#021630] to-[#00091B] border-[#01BDFC]/40 shadow-[0_0_50px_rgba(1,189,252,0.25)]'
              : 'bg-slate-900 text-white border-slate-800'
          }`}
        >
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#01BDFC]/20 border border-[#01BDFC] flex items-center justify-center text-[#01BDFC]">
            <RightEyeLogo theme="dark" variant="mark" size="sm" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-extrabold max-w-xl mx-auto leading-tight mb-4 text-white">
            Ready to perceive your full growth potential?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-8">
            Connect directly with our senior technology and digital marketing directors in Delhi NCR. Get a comprehensive site architecture and revenue growth blueprint at zero cost.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-sm tracking-wide hover:brightness-110 transition-all shadow-[0_0_25px_rgba(1,189,252,0.4)] cursor-pointer"
            >
              Get Free Digital Audit
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-[#01BDFC]/40 text-[#01BDFC] hover:bg-[#01BDFC]/10 font-mono text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

