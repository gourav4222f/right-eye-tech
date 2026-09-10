import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { HeroEyeScanner } from '../components/HeroEyeScanner';
import { RightEyeLogo } from '../components/RightEyeLogo';
import { SERVICES_DATA, PORTFOLIO_DATA, BUSINESS_INFO, TESTIMONIALS_DATA, LOCATIONS_DATA } from '../data/siteData';
import {
  ArrowRight,
  Zap,
  CheckCircle,
  MapPin,
  Phone,
  ShieldCheck,
  Eye,
  Sliders,
  ChevronDown,
  ChevronUp,
  Star,
  Code2,
  Globe,
  Sparkles,
  TrendingUp,
  MessageCircle,
} from 'lucide-react';

interface HomePageProps {
  theme: ThemeMode;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ theme, onNavigate, onOpenAudit }) => {
  const isDark = theme === 'dark';

  // Category Filter for 6 Core Services
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Interactive Vision ROI Diagnostic State
  const [selectedIndustry, setSelectedIndustry] = useState('Healthcare & Clinics');
  const [selectedRegion, setSelectedRegion] = useState('Pan-India');
  const [currentRevenue, setCurrentRevenue] = useState(15); // in Lakhs/mo

  // Active FAQ accordion item
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Active Protocol Step
  const [activeProtocolStep, setActiveProtocolStep] = useState<number>(0);

  // Calculate simulated opportunity based on digital maturity
  const missedInquiries = Math.round(currentRevenue * 4.2);
  const potentialRevenueLift = Math.round(currentRevenue * 0.45 * 10) / 10;
  const searchVisibilityIndex = Math.min(88, Math.round(18 + currentRevenue * 0.7));

  // Filtered services
  const filteredServices = SERVICES_DATA.filter((srv) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'seo') return srv.slug === 'seo' || srv.slug === 'google-my-business';
    if (activeCategory === 'web') return srv.slug === 'website-design' || srv.slug === 'website-development';
    if (activeCategory === 'ads') return srv.slug === 'google-ads-paid-ads';
    if (activeCategory === 'design') return srv.slug === 'graphic-design';
    return true;
  });

  // 4-Stage Operational Protocol Data
  const PROTOCOL_STEPS = [
    {
      num: '01',
      phase: 'DISCOVERY & TECHNICAL AUDIT',
      title: 'Full-Spectrum Digital Telemetry',
      duration: 'Week 1',
      desc: 'We reverse-engineer your existing search presence, website speed bottlenecks, Google Maps ranking signals, and competitor keyword positioning across your target Indian markets.',
      deliverables: [
        'Lighthouse 6-factor Core Web Vitals diagnostic',
        'Competitor keyword gap & search volume analysis',
        'Google Ads & Meta ad spend leakage audit',
        'Custom 90-day digital growth sprint blueprint',
      ],
    },
    {
      num: '02',
      phase: 'DESIGN & ARCHITECTURE',
      title: 'Modern Web & Creative Sprint',
      duration: 'Weeks 2-3',
      desc: 'We engineer responsive, fast-loading website designs and clean front-end architectures with mobile-first conversion flows, high-trust visual branding, and clean code.',
      deliverables: [
        'Modern, mobile-responsive UI/UX website designs',
        'Sub-second load times with 95+ Google PageSpeed score',
        'Deep Schema.org JSON-LD structured data integration',
        'Custom conversion forms & direct WhatsApp routing',
      ],
    },
    {
      num: '03',
      phase: 'CAMPAIGN ACTIVATION',
      title: 'Search Dominance & High-ROI Ads',
      duration: 'Weeks 3-5',
      desc: 'We launch targeted Google Search & Paid Ad campaigns with strict negative keywords alongside complete Google My Business local citation pipelines to drive verified phone and form inquiries.',
      deliverables: [
        'Google Ads Search campaigns configured for maximum ROAS',
        'Complete Google Business Profile (GMB) optimization',
        'High-converting landing page variants with speed tracking',
        'Weekly conversion telemetry & transparent lead logging',
      ],
    },
    {
      num: '04',
      phase: 'COMPOUNDING GROWTH',
      title: 'Ongoing Optimization & Scale',
      duration: 'Ongoing',
      desc: 'We continuously refine SEO backlink profiles, conduct A/B tests on conversion funnels, and expand keyword reach across pan-India metros and regional growth centers.',
      deliverables: [
        'Ongoing technical SEO & high-authority link acquisition',
        'Bi-weekly conversion rate optimization (CRO) improvements',
        'Dedicated account manager with transparent monthly reviews',
        '100% intellectual property & code ownership transfer',
      ],
    },
  ];

  // Traditional Agency vs RIGHT EYE Comparison Points
  const COMPARISON_ROWS = [
    {
      feature: 'Service Focus & Transparency',
      traditional: 'Over-bloated 30+ confusing service packages with hidden markups and vague deliverables',
      rightEye: 'Focused 6 core services with transparent scopes, clear client business benefits, and direct SLAs',
      status: 'Targeted Execution',
    },
    {
      feature: 'Website Code & Performance',
      traditional: 'Bloated WordPress themes, heavy drag-and-drop builders, and 4+ second slow load times',
      rightEye: 'Clean modern code, sub-second First Contentful Paint, and 95+ Lighthouse mobile speed',
      status: 'Sub-Second Speed',
    },
    {
      feature: 'Search Engine Architecture (SEO)',
      traditional: 'Surface-level Yoast plugin tags, repetitive keyword stuffing, and outdated backlink tactics',
      rightEye: 'Comprehensive Entity SEO, JSON-LD Schema markup, and Google Maps 3-Pack optimization',
      status: 'High Organic Rank',
    },
    {
      feature: 'Paid Media & Google Ads (PPC)',
      traditional: 'Blind broad-match budgets, unverified clicks, and untracked customer acquisition costs',
      rightEye: 'High-intent search keyword architecture, negative keyword shields, and verified ROAS tracking',
      status: 'Maximum Ad ROAS',
    },
    {
      feature: 'National Indian Market Reach',
      traditional: 'Restricted single-city knowledge with poor remote communication and delayed reporting',
      rightEye: 'Proven nationwide execution across Delhi NCR, Mumbai, Bengaluru, and emerging tier-2 hubs',
      status: 'Pan-India Reach',
    },
    {
      feature: 'Asset & IP Ownership',
      traditional: 'Proprietary lock-in, recurring license fees, and withheld ad accounts or website files',
      rightEye: '100% client ownership of all code, graphic source files, and advertising accounts from day one',
      status: '100% Client IP',
    },
  ];

  // Engineering Tech Stack Items
  const TECH_STACK = [
    { name: 'Modern React & Next.js', role: 'Fast Web Development', tag: 'Web Engine' },
    { name: 'Google Ads API', role: 'Search & Performance Max', tag: 'Paid Ads' },
    { name: 'Google Search Console', role: 'Organic Indexing & Crawl', tag: 'SEO Core' },
    { name: 'Google Business Profile', role: 'Local 3-Pack Map Dominance', tag: 'Local GMB' },
    { name: 'Tailwind CSS', role: 'Responsive Modern Interfaces', tag: 'UI/UX' },
    { name: 'Figma & Adobe CC', role: 'Brand & Graphic Systems', tag: 'Branding' },
    { name: 'GA4 & Enhanced Conv.', role: 'Accurate Lead Attribution', tag: 'Analytics' },
    { name: 'Cloudflare CDN', role: 'High-Speed Edge Delivery', tag: 'Infrastructure' },
  ];

  // Sector Endorsement Ticker Items
  const SECTOR_MARQUEE = [
    'DELHI NCR CORRIDORS',
    'MUMBAI FINANCIAL CAPITAL',
    'BENGALURU TECH HUBS',
    'HYDERABAD PHARMA & IT',
    'PUNE INDUSTRIAL HUBS',
    'CHENNAI AUTOMOTIVE & EXPORTS',
    'AHMEDABAD COMMERCIAL DISTRICTS',
    'KOLKATA COMMERCE',
    'JAIPUR & RAJASTHAN',
    'CHANDIGARH TRICITY',
    'PAN-INDIA DIGITAL GROWTH',
  ];

  // FAQ Items
  const FAQS = [
    {
      q: 'Does RIGHT EYE Technology serve businesses outside Delhi NCR?',
      a: 'Yes, absolutely. While our registered headquarters is located in Rohini, Delhi, our digital marketing, SEO, website design, and web development services cater to clients across all of India. We manage active client engagements in Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Kolkata, and multiple tier-2 commercial cities through seamless remote onboarding, dedicated WhatsApp coordination, and scheduled sprint calls.',
    },
    {
      q: 'Which 6 core digital services does RIGHT EYE Technology offer?',
      a: 'We deliberately focus on the 6 most impactful digital capabilities for business growth: (1) Search Engine Optimization (SEO), (2) Website Design (UI/UX), (3) Website Development, (4) Google Ads & Paid Advertising, (5) Google My Business (GMB) Optimization, and (6) Graphic Design & Branding. This focused approach ensures maximum quality, transparent pricing, and measurable business benefits.',
    },
    {
      q: 'What business benefits can we expect from your SEO and GMB services?',
      a: 'Our SEO and Google Business Profile optimization strategies are designed to deliver consistent, qualified organic inquiries without paying for every click. By improving your rankings on high-intent Google search terms and Google Maps local 3-pack results, your business gains trusted visibility right when prospects in your target city or across India are ready to purchase.',
    },
    {
      q: 'How do you structure Google Ads campaigns to prevent wasted ad spend?',
      a: 'We build Google Ads campaigns around tight, high-intent exact and phrase match keywords, rigorous negative keyword lists (to block irrelevant search queries), and conversion-optimized landing pages. Every inquiry is tracked via Google Enhanced Conversions and GA4 so you know exactly which keywords generate paying customers.',
    },
    {
      q: 'Do we own the website code, graphic files, and Google Ads accounts?',
      a: 'Yes, 100%. From the moment we begin, all code repositories, website hosting credentials, Figma/graphic design source files, and advertising accounts belong entirely to your business. We never lock you into proprietary hosting or withhold access.',
    },
    {
      q: 'How do we get started with a consultation or project quote?',
      a: 'Getting started is simple. You can submit our quick consultation form, call us directly at +91 87002 75224, or send us a WhatsApp message. Our senior digital strategists will review your existing website and Google presence and provide a clear, no-obligation growth roadmap within 24 hours.',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background HUD Matrix Grid */}
      <div className="absolute inset-0 bg-hud-grid pointer-events-none opacity-45 z-0" />

      {/* 1. HERO SECTION: Pan-India Digital Growth */}
      <section className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Brand Trust Emblem Stamp */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#01BDFC]/40 bg-[#01BDFC]/10 text-[#01BDFC] text-xs font-mono tracking-wider backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#01BDFC] animate-ping" />
            <span>PAN-INDIA DIGITAL MARKETING & WEB AGENCY</span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <RightEyeLogo theme={theme} variant="emblem" size="sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Vision Statement & Technical Value */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.08]">
              Accelerate your business growth{' '}
              <span className="text-[#01BDFC] block">
                across India.
              </span>
            </h1>

            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              RIGHT EYE Technology is a trusted digital marketing and web services agency serving clients nationwide. We specialize in high-impact SEO, modern website design, robust web development, high-ROI Google Ads, Google Business Profile (GMB) optimization, and graphic branding to generate verified leads and scale your revenue.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenAudit}
                className="px-6 py-3.5 rounded-xl font-display font-bold text-sm tracking-wide bg-[#01BDFC] text-[#00091B] hover:brightness-110 transition-all shadow-[0_0_25px_rgba(1,189,252,0.45)] flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Get a Free Consultation</span>
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
                <span>Explore 6 Core Services</span>
              </button>

              <a
                href="https://wa.me/918700275224?text=Hi%20RIGHT%20EYE%20Technology,%20I%20would%20like%20a%20free%20consultation%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-xl font-mono text-xs border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

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
                <div className={isDark ? 'text-slate-400' : 'text-slate-600'}>Fast Web Speed</div>
              </div>

              <div className="p-2.5 rounded-lg border border-[#01BDFC]/15 bg-[#01BDFC]/5">
                <div className="text-xl sm:text-2xl font-display font-bold text-[#01BDFC]">5.2x</div>
                <div className={isDark ? 'text-slate-400' : 'text-slate-600'}>Avg Ad ROAS</div>
              </div>

              <div className="p-2.5 rounded-lg border border-[#01BDFC]/15 bg-[#01BDFC]/5">
                <div className="text-xl sm:text-2xl font-display font-bold text-[#01BDFC]">480%</div>
                <div className={isDark ? 'text-slate-400' : 'text-slate-600'}>Organic Search Lift</div>
              </div>

              <div className="p-2.5 rounded-lg border border-[#01BDFC]/15 bg-[#01BDFC]/5">
                <div className="text-xl sm:text-2xl font-display font-bold text-[#01BDFC]">₹5Cr+</div>
                <div className={isDark ? 'text-slate-400' : 'text-slate-600'}>Ad Capital Scaled</div>
              </div>

              <div className="p-2.5 rounded-lg border border-[#01BDFC]/15 bg-[#01BDFC]/5 col-span-2 sm:col-span-1">
                <div className="text-xl sm:text-2xl font-display font-bold text-[#01BDFC]">Pan-India</div>
                <div className={isDark ? 'text-slate-400' : 'text-slate-600'}>Nationwide Reach</div>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Biometric Eye Scanner & HUD Reticle */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroEyeScanner theme={theme} />
          </div>
        </div>
      </section>

      {/* 2. LIVE PAN-INDIA TICKER / MARQUEE */}
      <div className={`py-3.5 border-y font-mono text-xs overflow-hidden ${
        isDark ? 'bg-[#00091B]/90 border-[#01BDFC]/20 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
      }`}>
        <div className="flex gap-8 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {SECTOR_MARQUEE.concat(SECTOR_MARQUEE).map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#01BDFC]" />
              <span className="tracking-widest">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CAPABILITIES: THE 6 CORE SERVICES WITH CLEAR CLIENT BUSINESS BENEFITS */}
      <section className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#01BDFC] uppercase mb-1">
              CORE SERVICES // BUSINESS GROWTH SOLUTIONS
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
              Our 6 Core Digital Services
            </h2>
            <p className={`text-xs sm:text-sm mt-1 max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Focused, results-oriented digital solutions engineered to deliver clear business benefits, attract high-intent leads, and maximize your return on investment.
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
              All Services ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setActiveCategory('seo')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'seo'
                  ? 'bg-[#01BDFC] text-[#00091B] font-bold shadow-[0_0_10px_rgba(1,189,252,0.3)]'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-[#021630]'
              }`}
            >
              SEO & GMB
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'web'
                  ? 'bg-[#01BDFC] text-[#00091B] font-bold shadow-[0_0_10px_rgba(1,189,252,0.3)]'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-[#021630]'
              }`}
            >
              Web Design & Dev
            </button>
            <button
              onClick={() => setActiveCategory('ads')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'ads'
                  ? 'bg-[#01BDFC] text-[#00091B] font-bold shadow-[0_0_10px_rgba(1,189,252,0.3)]'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-[#021630]'
              }`}
            >
              Google Ads
            </button>
            <button
              onClick={() => setActiveCategory('design')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeCategory === 'design'
                  ? 'bg-[#01BDFC] text-[#00091B] font-bold shadow-[0_0_10px_rgba(1,189,252,0.3)]'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-[#021630]'
              }`}
            >
              Graphic Design
            </button>
          </div>
        </div>

        {/* 6 Services Grid */}
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
                    SERVICE 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-[#01BDFC] transition-colors">
                  {service.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {service.shortDesc}
                </p>

                {/* Highlighted Business Benefit Box */}
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
                      <CheckCircle className="w-3.5 h-3.5 text-[#01BDFC] shrink-0" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-700/20 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs font-mono">
                    {service.metrics.slice(0, 1).map((m, i) => (
                      <span key={i} className="text-[#01BDFC]">
                        {m.label}: <strong>{m.value}</strong>
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="text-xs font-display font-semibold text-[#01BDFC] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BRAND EMBLEM & CORE VALUES */}
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
                <span>SERVING CLIENTS NATIONWIDE</span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#01BDFC]">
                <Eye className="w-4 h-4" />
                <span>OUR CORE PROMISE & AGENCY PHILOSOPHY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold">
                Why Partner With RIGHT EYE Technology?
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                In today’s crowded digital landscape, generic templates and unfocused marketing campaigns waste precious time and capital. At RIGHT EYE Technology, we act as an extension of your growth team.
              </p>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                We engineer lightning-fast websites that turn visitors into inquiries, deploy SEO strategies that help you dominate high-intent Google rankings, and run Google Ads with pinpoint attribution. Whether you need a local presence in Delhi NCR or nationwide customer acquisition across India, our campaigns are built to deliver ROI.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl border border-[#01BDFC]/20 bg-[#01BDFC]/5 text-xs font-mono">
                  <div className="text-[#01BDFC] font-bold">100% IP OWNERSHIP</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">You own all code & ad assets</div>
                </div>
                <div className="p-3 rounded-xl border border-[#01BDFC]/20 bg-[#01BDFC]/5 text-xs font-mono">
                  <div className="text-[#01BDFC] font-bold">PAN-INDIA DELIVERY</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Seamless remote onboarding</div>
                </div>
                <div className="p-3 rounded-xl border border-[#01BDFC]/20 bg-[#01BDFC]/5 text-xs font-mono">
                  <div className="text-[#01BDFC] font-bold">GST INVOICE READY</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Registered commercial billing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE GROWTH SIMULATOR (Pan-India) */}
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
                <span>INTERACTIVE OPPORTUNITY CALCULATOR</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold">
                Calculate Untapped Digital Revenue
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Most businesses in India capture less than 20% of their potential search and digital demand due to slow websites, incomplete local SEO profiles, or untracked ad budgets. Select your parameters below:
              </p>

              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono mb-1.5 text-slate-400">TARGET REGION</label>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className={`w-full p-2.5 rounded-lg border text-xs font-sans ${
                        isDark
                          ? 'bg-[#00091B] border-[#01BDFC]/40 text-white'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    >
                      <option>Pan-India (Nationwide)</option>
                      <option>Delhi NCR Metro</option>
                      <option>Mumbai & MMR</option>
                      <option>Bengaluru / South</option>
                      <option>Hyderabad & Telangana</option>
                      <option>Pune & Maharashtra</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono mb-1.5 text-slate-400">BUSINESS SECTOR</label>
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
                      <option>Real Estate & Infra</option>
                      <option>E-commerce & Retail</option>
                      <option>Education & Academies</option>
                      <option>B2B Corporate Services</option>
                      <option>Manufacturing & Exports</option>
                      <option>Hospitality & Tourism</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-slate-400">ESTIMATED MONTHLY REVENUE</span>
                    <span className="text-[#01BDFC] font-bold">₹{currentRevenue} Lakhs / month</span>
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
                  <span className="text-slate-400">PROJECTION: {selectedRegion.toUpperCase()}</span>
                  <span className="text-[#01BDFC] flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> PROVEN BENCHMARKS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className={`p-4 rounded-xl border ${isDark ? 'border-slate-800 bg-[#021630]/50' : 'border-slate-200 bg-white'}`}>
                    <div className="text-xs text-slate-400 font-mono">Missed High-Intent Leads</div>
                    <div className="text-3xl font-display font-bold text-amber-400 mt-1">
                      ~{missedInquiries}+ <span className="text-xs font-normal text-slate-400">inquiries/mo</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Lost to faster competitors in Google search & Maps
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl border ${isDark ? 'border-slate-800 bg-[#021630]/50' : 'border-slate-200 bg-white'}`}>
                    <div className="text-xs text-slate-400 font-mono">Recoverable Monthly Revenue</div>
                    <div className="text-3xl font-display font-bold text-[#01BDFC] mt-1">
                      +₹{potentialRevenueLift}L <span className="text-xs font-normal text-slate-400">incremental</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Via high-converting website + Google SEO & Ads
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-[#01BDFC]/20 bg-[#01BDFC]/5 text-xs font-mono flex items-center justify-between mb-4">
                  <span>UNEXPLOITED MARKET CAPACITY:</span>
                  <strong className="text-[#01BDFC]">{searchVisibilityIndex}% READY BUYERS</strong>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-slate-400">
                    Industry Strategy: <strong className={isDark ? 'text-white' : 'text-slate-900'}>{selectedIndustry}</strong>
                  </div>
                  <button
                    onClick={onOpenAudit}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#01BDFC] text-[#00091B] font-display font-bold text-xs hover:brightness-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(1,189,252,0.3)]"
                  >
                    Request Custom Growth Blueprint &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPARISON MATRIX: Traditional Agencies vs. RIGHT EYE */}
      <section className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono tracking-widest text-[#01BDFC] uppercase mb-1">
            AGENCY DIFFERENTIATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
            Traditional Agencies vs. RIGHT EYE Technology
          </h2>
          <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            How our transparent, performance-driven digital model outperforms conventional marketing agencies.
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

      {/* 7. THE 4-STAGE EXECUTION PROTOCOL */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-mono tracking-widest text-[#01BDFC] uppercase mb-1">
            METHODOLOGY
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
            Our 4-Stage Execution Roadmap
          </h2>
          <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A structured, repeatable process to take your business from fragmented digital efforts to reliable lead generation.
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
                <span className="text-xs font-mono text-slate-400 block mb-2">TYPICAL TIMEFRAME:</span>
                <span className="px-3 py-1 rounded-full border border-[#01BDFC]/30 bg-[#01BDFC]/10 text-xs font-mono text-[#01BDFC]">
                  {PROTOCOL_STEPS[activeProtocolStep].duration}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-[#00091B] border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
                  KEY DELIVERABLES:
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
            TECHNOLOGY & TOOLS
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
            Built on Industry-Standard Technologies
          </h2>
          <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            We implement modern web frameworks, verified ad platforms, and reliable tracking tools for your peace of mind.
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
              PROVEN RESULTS // CASE STUDIES
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
              Real Impact for Businesses Across India
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/portfolio')}
            className="text-xs font-mono text-[#01BDFC] hover:underline flex items-center gap-1 mt-3 md:mt-0 cursor-pointer"
          >
            <span>View All Client Work</span>
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

      {/* 10. PAN-INDIA REACH & REGIONAL HUBS */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 rounded-3xl border ${
            isDark ? 'bg-[#021630]/60 border-[#01BDFC]/25' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono text-[#01BDFC] tracking-wider">
                NATIONWIDE COVERAGE // ALL INDIAN METROS & STATES
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold">
                Serving Clients Across All of India
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                While our registered headquarters is based in Delhi NCR, RIGHT EYE Technology actively delivers digital marketing, SEO, web design, and Google Ads management to companies across Mumbai, Bengaluru, Hyderabad, Pune, and all 28 Indian states. Explore our regional hubs below:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {LOCATIONS_DATA.map((loc) => (
                  <button
                    key={loc.slug}
                    onClick={() => onNavigate(`/${loc.slug}`)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isDark ? 'border-[#01BDFC]/20 hover:border-[#01BDFC] bg-[#00091B]' : 'border-slate-300 hover:border-[#01BDFC] bg-white'
                    }`}
                  >
                    <div className="font-display font-bold text-xs">{loc.city}</div>
                    <div className="text-[10px] text-[#01BDFC] font-mono mt-0.5 truncate">{loc.primaryKeyword}</div>
                  </button>
                ))}
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
                  <span>REGISTERED COMMERCIAL ENTITY</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 block font-mono text-[10px]">AGENCY NAME:</span>
                    <strong className="text-sm font-display text-white dark:text-white">RIGHT EYE Technology</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono text-[10px]">HEADQUARTERS:</span>
                    <span>{BUSINESS_INFO.address}, India</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-mono text-[10px]">COVERAGE:</span>
                    <span>Pan-India (Remote Delivery + On-Site Consultation)</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-700/30">
                    <div>
                      <span className="text-slate-400 block font-mono text-[10px]">DIRECT HOTLINE:</span>
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
                  Contact Our Team &rarr;
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
            CLIENT EXPERIENCES
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">
            Trusted by Business Leaders Across India
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
            HELP & ANSWERS
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
            Ready to expand your digital reach across India?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-8">
            Connect directly with our digital marketing directors. Get a comprehensive website audit, competitor review, and customized proposal at zero cost.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#01BDFC] text-[#00091B] font-display font-bold text-sm tracking-wide hover:brightness-110 transition-all shadow-[0_0_25px_rgba(1,189,252,0.4)] cursor-pointer"
            >
              Get a Free Consultation & Quote
            </button>
            <a
              href="https://wa.me/918700275224?text=Hi%20RIGHT%20EYE%20Technology,%20I%20would%20like%20to%20discuss%20digital%20services%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-mono text-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
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
