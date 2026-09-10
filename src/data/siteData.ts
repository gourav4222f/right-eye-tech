import { BusinessInfo, ServiceItem, IndustryItem, LocationItem, PortfolioProject, PricingPlan } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'RIGHT EYE Technology',
  tagline: 'Premier Pan-India Digital Marketing & Web Development Agency',
  email: 'info@righteyetechnology.com',
  phone: '8700275224',
  whatsapp: '918700275224',
  address: 'B-4/250, Sector-20, Rohini, Delhi 110086 (Corporate Office) | Serving Clients Pan-India',
  city: 'Delhi & Pan-India',
  region: 'Pan-India',
  country: 'India',
  website: 'https://righteyetechnology.com',
  coverage: 'Serving Businesses Across All Indian States & Union Territories',
  majorHubs: [
    'Pan-India',
    'Delhi NCR',
    'Mumbai',
    'Bengaluru',
    'Hyderabad',
    'Pune',
    'Chennai',
    'Kolkata',
    'Ahmedabad',
    'Jaipur',
    'Chandigarh',
    'Lucknow',
    'Indore',
    'Surat',
    'Kochi',
  ],
  coordinates: {
    lat: 28.7188,
    lng: 77.0694,
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  // 1. Search Engine Optimization (SEO)
  {
    slug: 'seo-services',
    title: 'Search Engine Optimization (SEO)',
    category: 'SEO',
    primaryKeyword: 'best seo company in India',
    shortDesc: 'Rank on page 1 of Google, attract high-intent buyers, and generate consistent organic inquiries across India without paying for every click.',
    fullDesc: 'Search Engine Optimization (SEO) is the most sustainable, high-ROI customer acquisition engine for modern businesses. At RIGHT EYE Technology, we help companies across India dominate Google search results through comprehensive technical audits, commercial keyword research, on-page optimization, content strategy, and authoritative backlink building. We ensure your business appears right when prospective buyers are actively searching for what you offer.',
    businessBenefits: [
      'First-Page Google Rankings: Capture qualified buyers actively searching for your services across India.',
      'Zero Cost-Per-Click: Organic traffic delivers continuous inbound inquiries 24/7 without recurring ad spend.',
      'High Brand Credibility: Ranking at the top of Google establishes immediate market trust and industry authority.',
      'Compounding Long-Term Growth: Strong search rankings sustain lead flow and revenue for months and years.',
    ],
    features: [
      'Comprehensive technical site audit (Core Web Vitals, mobile speed, crawlability & indexing)',
      'High-intent commercial keyword mapping for national and regional Indian markets',
      'On-page SEO optimization (meta tags, headings, semantic schema, image alt attributes)',
      'Conversion-focused content strategy, blog optimization, and search intent targeting',
      'White-hat contextual backlink acquisition and domain authority enhancement',
    ],
    deliverables: [
      'Detailed monthly keyword ranking report with transparent Google position tracking',
      'Complete on-page technical fixes implemented directly on your website',
      'Quality backlink acquisition logs and monthly competitor gap analysis',
      'Dedicated SEO strategist with regular strategy review calls',
    ],
    metrics: [
      { label: 'Organic Traffic Lift', value: '+380%' },
      { label: 'Page 1 Keyword Ratio', value: '88%' },
      { label: 'Inbound Inquiries', value: '4.5x' },
    ],
    subServices: [
      { name: 'Local SEO India', slug: 'local-seo-india' },
      { name: 'E-commerce SEO', slug: 'ecommerce-seo' },
      { name: 'Technical SEO Audit', slug: 'technical-seo' },
    ],
    faq: [
      {
        question: 'How long does it take to see results from SEO in India?',
        answer: 'Technical fixes and initial rank improvements typically reflect within 4 to 8 weeks. Substantial first-page Google rankings and steady organic lead generation generally mature between 3 to 6 months depending on keyword competition.',
      },
      {
        question: 'Do you provide SEO services for businesses located outside Delhi NCR?',
        answer: 'Yes, absolutely. We serve clients across all of India including Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata, and tier-2 business hubs with custom national and regional SEO strategies.',
      },
      {
        question: 'What is the difference between Local SEO and National SEO?',
        answer: 'Local SEO focuses on ranking in Google Maps 3-Pack and city-specific searches for local footfall and service inquiries, while National SEO targets high-volume commercial keywords across India for nationwide e-commerce, B2B, or multi-location companies.',
      },
    ],
  },

  // 2. Website Design
  {
    slug: 'website-design',
    title: 'Website Design (UI/UX)',
    category: 'Website Design',
    primaryKeyword: 'website design company in India',
    shortDesc: 'Modern, mobile-responsive, and intuitive website designs that captivate visitors, establish immediate brand trust, and convert visits into sales.',
    fullDesc: 'Your website is the digital storefront of your business. At RIGHT EYE Technology, we create bespoke, high-converting website designs that make a powerful first impression within 50 milliseconds. We combine user psychology, clean visual aesthetics, intuitive navigation, and mobile-first design principles to build websites that not only look impressive but guide prospects directly toward taking action.',
    businessBenefits: [
      'High-Converting User Journeys: Intuitive layouts designed to guide visitors effortlessly toward booking calls and submitting inquiries.',
      '100% Mobile Responsive: Flawless browsing experience across smartphones, tablets, laptops, and wide desktop screens.',
      'Distinctive Brand Identity: Premium visual styling that differentiates your business from generic template competitors.',
      'Reduced Bounce Rates: Engaging visuals, crisp typography, and fast-loading aesthetic interfaces keep prospects on your site.',
    ],
    features: [
      'Custom UI/UX wireframing and interactive Figma design prototypes',
      'Modern design systems with tailored color palettes, iconography, and typography',
      'Conversion Rate Optimization (CRO) focused call-to-action (CTA) placements',
      'User journey mapping and intuitive navigation architecture',
      'High-converting landing page layouts for digital marketing campaigns',
    ],
    deliverables: [
      'Full interactive Figma design source files and UI component library',
      'Mobile, tablet, and desktop UI mockups with developer-ready asset exports',
      'Brand style guide including typography hierarchy and color token specifications',
    ],
    metrics: [
      { label: 'Bounce Rate Reduction', value: '-42%' },
      { label: 'Session Duration', value: '+175%' },
      { label: 'Conversion Lift', value: '+54%' },
    ],
    subServices: [
      { name: 'Landing Page Design', slug: 'landing-page-design' },
      { name: 'Corporate UI/UX Design', slug: 'corporate-ui-ux' },
      { name: 'E-commerce Store Design', slug: 'ecommerce-design' },
    ],
    faq: [
      {
        question: 'Do you create custom website designs or use pre-made templates?',
        answer: 'We craft 100% bespoke, custom UI/UX designs tailored to your unique brand identity, target audience, and business objectives. We do not use bloated pre-made templates.',
      },
      {
        question: 'Will my website design look good on mobile phones?',
        answer: 'Yes! Over 75% of Indian internet users browse on mobile devices. Every design we create is strictly mobile-first, ensuring smooth thumb navigation, legible typography, and quick touch targets.',
      },
    ],
  },

  // 3. Website Development
  {
    slug: 'web-development',
    title: 'Website Development',
    category: 'Website Development',
    primaryKeyword: 'website development company in India',
    shortDesc: 'Fast, secure, and custom-coded websites built with modern technologies for sub-second loading speed, seamless functionality, and effortless lead capture.',
    fullDesc: 'A slow or buggy website actively loses you revenue. RIGHT EYE Technology develops high-performance, secure, and scalable websites tailored for modern Indian businesses. Whether you need a corporate business portal, a lead generation website, an e-commerce storefront, or a custom web application, our developers engineer solutions with clean code, sub-second speeds, robust security, and seamless lead capture integrations.',
    businessBenefits: [
      'Sub-Second Loading Speed: Blazing-fast page loads that keep visitors engaged and improve Google organic search ranking.',
      'Lead Capture & Automation: Built-in inquiry forms, click-to-WhatsApp buttons, and seamless CRM lead routing.',
      'Zero Technical Headaches: Clean, modern code that does not break with plugin updates or security vulnerabilities.',
      '100% Code Ownership: You receive full access to your source code, hosting, and assets with zero agency lock-in.',
    ],
    features: [
      'Custom full-stack web development using Next.js, React, TypeScript, Tailwind CSS, or WordPress',
      'E-commerce storefronts with Razorpay, Cashfree, UPI, and credit card payment gateways',
      'Easy-to-use Content Management System (CMS) for effortless text, image, and blog updates',
      'Google Analytics 4 (GA4), Google Tag Manager, and Meta Pixel event tracking setup',
      'Enterprise-grade SSL security, speed optimization, and 99.98% uptime architecture',
    ],
    deliverables: [
      'Complete production-ready website deployed on high-speed cloud hosting',
      '100% client-owned source code repository and administrative credentials',
      'Speed compliance with Google Core Web Vitals (90+ score on mobile and desktop)',
      '30-day post-launch technical warranty and maintenance support',
    ],
    metrics: [
      { label: 'Avg Page Load Speed', value: '0.8s' },
      { label: 'Google Speed Score', value: '98/100' },
      { label: 'Uptime Reliability', value: '99.98%' },
    ],
    subServices: [
      { name: 'Custom React & Next.js Apps', slug: 'custom-web-apps' },
      { name: 'E-commerce Development', slug: 'ecommerce-development' },
      { name: 'CMS & WordPress Development', slug: 'wordpress-development' },
    ],
    faq: [
      {
        question: 'Can I easily update text and images myself after the website is launched?',
        answer: 'Yes. We provide an intuitive, user-friendly admin dashboard and short video walkthroughs so you and your team can update content, products, or blog posts effortlessly.',
      },
      {
        question: 'Do you integrate Indian payment gateways like Razorpay, PhonePe, and UPI?',
        answer: 'Yes, we integrate all standard Indian payment gateways including Razorpay, Cashfree, PayU, PhonePe, and instant QR/UPI methods with automated GST-compliant invoicing.',
      },
    ],
  },

  // 4. Google Ads / Paid Ads
  {
    slug: 'google-ads',
    title: 'Google Ads & Paid Advertising (PPC)',
    category: 'Paid Ads',
    primaryKeyword: 'google ads agency in India',
    shortDesc: 'Target customers actively searching for your services with high-ROI Google Search, Display, YouTube, and Meta ad campaigns that deliver immediate leads.',
    fullDesc: 'Paid advertising is the fastest way to put your offerings in front of ready-to-buy customers. RIGHT EYE Technology manages high-performance pay-per-click (PPC) and digital advertising campaigns on Google Search, YouTube, and Meta (Facebook & Instagram). We eliminate wasted ad spend through granular audience targeting, continuous keyword pruning, persuasive ad copywriting, and conversion-optimized landing pages.',
    businessBenefits: [
      'Immediate Inbound Leads: Put your business at the very top of Google Search within 24 to 48 hours.',
      'Zero Wasted Ad Spend: Strict negative keyword filtering and laser-focused audience targeting ensure every rupee counts.',
      'Measurable Return on Ad Spend (ROAS): Track every inquiry, phone call, and purchase directly to your ad spend.',
      'Scalable Growth Engine: Easily scale up your ad budget as your customer acquisition costs prove profitable.',
    ],
    features: [
      'Google Search Ads targeting high-intent commercial keywords across India',
      'Google Performance Max (PMax) and Display remarketing campaigns',
      'Meta (Facebook & Instagram) lead generation and conversion campaigns',
      'Negative keyword shielding to block junk clicks and protect your budget',
      'Server-side conversion tracking setup (Google Tag Manager, Enhanced Conversions, Meta CAPI)',
    ],
    deliverables: [
      'Fully configured Google Ads & Meta advertising accounts with proper conversion tracking',
      'Persuasive ad copywriting, high-CTR headlines, and responsive creative variations',
      'Real-time performance dashboard with weekly lead volume and cost-per-lead analysis',
      'Weekly bid adjustments, keyword optimization, and budget pacing',
    ],
    metrics: [
      { label: 'Average ROAS', value: '5.2x' },
      { label: 'Cost Per Lead Drop', value: '-34%' },
      { label: 'Ad Capital Managed', value: '₹12Cr+' },
    ],
    subServices: [
      { name: 'Google Search Ads', slug: 'google-search-ads' },
      { name: 'Meta Ads (FB & Insta)', slug: 'meta-ads' },
      { name: 'YouTube Video Ads', slug: 'youtube-ads' },
    ],
    faq: [
      {
        question: 'What is the minimum recommended advertising budget?',
        answer: 'We generally advise a minimum monthly ad spend of ₹25,000 to ₹50,000 for local or regional campaigns, and ₹1 Lakh+ for pan-India targeting. This ensures sufficient data volume for algorithmic bid optimization.',
      },
      {
        question: 'How do you prevent money from being wasted on irrelevant clicks?',
        answer: 'We build rigorous negative keyword lists, geo-target specific profitable pin codes and cities, use exact and phrase match types, and implement server-side conversion tracking so you only pay for genuine commercial prospects.',
      },
    ],
  },

  // 5. Google My Business (GMB) / Google Business Profile
  {
    slug: 'google-my-business-gmb',
    title: 'Google My Business (GMB) Optimization',
    category: 'Google Business Profile',
    primaryKeyword: 'google my business optimization services India',
    shortDesc: 'Dominate local Google Maps 3-Pack rankings, generate daily phone calls, store visits, and build 5-star customer credibility in any Indian city.',
    fullDesc: 'When prospective clients in your city search for services "near me" or in their locality, your Google Business Profile is the first thing they see. RIGHT EYE Technology optimizes your Google My Business listing to secure top spots in the coveted Google Maps 3-Pack. We optimize categories, geo-tag photos, build local business citations, manage customer reviews, and post consistent updates that turn local searches into direct phone calls and walk-ins.',
    businessBenefits: [
      'Top Google Maps 3-Pack Rankings: Appear in the top 3 map results when nearby customers search for your services.',
      'Surge in Inbound Phone Calls: Direct click-to-call buttons drive urgent customer inquiries straight to your phone.',
      '5-Star Trust & Credibility: Verified customer reviews and prompt responses convince prospects to choose you over competitors.',
      'Local Footfall & Direction Requests: Drive physical customer visits to your retail store, clinic, office, or showroom.',
    ],
    features: [
      'Complete Google Business Profile setup, verification, and category optimization',
      'Geo-tagged photo uploads and business service profile optimization',
      'Local citation building across 40+ trusted Indian business directories',
      'Weekly GMB posts, updates, product/service showcases, and promotional offers',
      'Review management strategy to generate verified 5-star Google reviews',
    ],
    deliverables: [
      'Fully optimized, verified, and active Google Business Profile',
      'Consistent weekly posts, updates, and geotagged photo uploads',
      'Monthly local map ranking reports tracking call volume and direction requests',
      'Local citation audit and NAP (Name, Address, Phone) consistency synchronization',
    ],
    metrics: [
      { label: 'Google Maps Rank Lift', value: '#1-3 Spot' },
      { label: 'Phone Call Inquiries', value: '+280%' },
      { label: 'Local Search Views', value: '4.8x' },
    ],
    subServices: [
      { name: 'GMB Setup & Verification', slug: 'gmb-setup' },
      { name: 'Local 3-Pack Ranking', slug: 'local-3-pack' },
      { name: 'Review & Reputation Management', slug: 'review-management' },
    ],
    faq: [
      {
        question: 'Can GMB help service-based businesses that do not have a physical retail storefront?',
        answer: 'Yes! Google Business Profile allows service-area businesses (consultants, repair services, agencies, real estate firms) to specify service areas across specific cities or states without publicly exposing a home address.',
      },
      {
        question: 'How do you help us get more positive Google reviews?',
        answer: 'We provide automated review collection funnels, custom QR code review stands, and WhatsApp follow-up templates that make it effortless for satisfied clients to leave 5-star feedback.',
      },
    ],
  },

  // 6. Graphic Design
  {
    slug: 'graphic-design',
    title: 'Graphic Design & Creative Branding',
    category: 'Graphic Design',
    primaryKeyword: 'graphic design company in India',
    shortDesc: 'High-impact corporate logos, social media creatives, brochures, banners, and marketing collaterals that make your brand stand out and be remembered.',
    fullDesc: 'Strong visual design builds instant trust and separates market leaders from also-rans. RIGHT EYE Technology delivers creative, brand-aligned graphic design solutions for businesses across India. From memorable corporate logos and brand guideline books to high-engagement social media posts, promotional brochures, product packaging, and high-CTR digital ad banners, our designers make your brand visually unforgettable.',
    businessBenefits: [
      'Professional Brand Perception: Polished, premium visual assets that make your business look established and trustworthy.',
      'Higher Social Media Engagement: Scroll-stopping graphics that generate likes, comments, shares, and direct inquiries.',
      'Better Ad Click-Through Rates (CTR): Eye-catching ad creatives that lower customer acquisition costs.',
      'Consistent Brand Identity: Cohesive visual style across your website, social media channels, packaging, and print media.',
    ],
    features: [
      'Custom corporate logo design and complete brand identity guidelines',
      'High-engagement social media post designs, carousels, and stories (Instagram, LinkedIn, Facebook)',
      'Marketing collaterals: brochures, company profiles, catalogs, business cards, and pitch decks',
      'High-CTR digital ad banner designs for Google Display Network and Meta advertising',
      'Packaging design, event banners, and print-ready graphic assets',
    ],
    deliverables: [
      'High-resolution vector files (AI, EPS, SVG, PDF) and web formats (PNG, JPG, WebP)',
      'Ready-to-post social media assets formatted for Instagram, LinkedIn, and Facebook',
      'Print-ready CMYK files with proper bleed and crop marks for commercial printing',
      'Full commercial copyright and intellectual property ownership',
    ],
    metrics: [
      { label: 'Ad CTR Improvement', value: '+75%' },
      { label: 'Social Engagement Lift', value: '3.2x' },
      { label: 'Client Satisfaction', value: '99%' },
    ],
    subServices: [
      { name: 'Logo & Brand Identity', slug: 'logo-brand-identity' },
      { name: 'Social Media Creatives', slug: 'social-media-creatives' },
      { name: 'Brochures & Catalogs', slug: 'brochures-catalogs' },
    ],
    faq: [
      {
        question: 'Do you provide editable source files for the graphic designs?',
        answer: 'Yes, we provide all raw, editable source files (Adobe Illustrator, Photoshop, or Figma) along with high-res PNG, JPG, and vector formats for complete design freedom.',
      },
      {
        question: 'How many revisions do we get during the design process?',
        answer: 'We offer iterative design feedback loops with concept variations and revisions until you are completely satisfied with the visual outcome.',
      },
    ],
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    slug: 'healthcare',
    title: 'Healthcare, Clinics & Hospitals',
    primaryKeyword: 'digital marketing for doctors India',
    tagline: 'Ethical, high-trust patient appointment funnels, local Google Maps authority, and specialist website design.',
    challenges: [
      'High competition for local clinic and doctor searches in major Indian metros',
      'Patient hesitation requiring deep clinical credibility and verified testimonials',
      'Appointment no-shows and fragmented booking workflows',
    ],
    solutions: [
      'Dominant Google Business Profile rankings for clinic and hospital specialties',
      'High-speed patient appointment portals with instant WhatsApp booking confirmations',
      'Educational social media graphics and search engine visibility for treatments',
    ],
    caseStudy: {
      client: 'Apex Healthcare & Orthopedic Center',
      metrics: '320+ Monthly Patient Inquiries | #1 Google Map Rank',
      summary: 'Secured first-page Google Maps rankings across multiple specialties and rebuilt clinic appointment portal, quadrupling patient inquiries.',
    },
    recommendedServices: [
      { title: 'Google My Business (GMB) Optimization', slug: 'google-my-business-gmb' },
      { title: 'Search Engine Optimization (SEO)', slug: 'seo-services' },
      { title: 'Website Development', slug: 'web-development' },
    ],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & Infrastructure',
    primaryKeyword: 'digital marketing for real estate India',
    tagline: 'Pre-qualified buyer lead generation for luxury residential and commercial property developments across India.',
    challenges: [
      'Large influx of fake or low-budget property inquiries wasting sales bandwidth',
      'Long sales cycles requiring structured lead nurturing and trust building',
      'High cost-per-lead on generic real estate portals',
    ],
    solutions: [
      'High-converting property project landing pages with interactive floor plans',
      'Laser-targeted Google Search & Meta ad campaigns reaching high-net-worth investors',
      'Automated WhatsApp brochure delivery and instant sales alert routing',
    ],
    caseStudy: {
      client: 'Skyline Capital Developers',
      metrics: '₹42Cr Inventory Sold | 4.8x Meta & Google ROAS',
      summary: 'Generated 240+ verified high-intent buyer inquiries through custom project landing pages and targeted search ad funnels.',
    },
    recommendedServices: [
      { title: 'Google Ads & Paid Advertising', slug: 'google-ads' },
      { title: 'Website Design (UI/UX)', slug: 'website-design' },
      { title: 'Graphic Design & Creative Branding', slug: 'graphic-design' },
    ],
  },
  {
    slug: 'retail-ecommerce',
    title: 'Retail & D2C E-commerce',
    primaryKeyword: 'ecommerce marketing agency India',
    tagline: 'High-velocity customer acquisition, fast storefronts, and profitable return on ad spend for consumer brands.',
    challenges: [
      'Rising customer acquisition costs on paid social platforms',
      'Cart abandonment rates exceeding 70%',
      'Slow mobile website loading speeds killing sales conversions',
    ],
    solutions: [
      'Custom sub-second e-commerce stores with 1-click checkout and UPI integration',
      'High-CTR graphic ad creatives and carousel ads that stop the social media scroll',
      'Targeted Google Shopping and Meta conversion campaigns with server-side tracking',
    ],
    caseStudy: {
      client: 'Luxe Organics India',
      metrics: '5.2x Blended ROAS | 48% Checkout Lift',
      summary: 'Redesigned mobile storefront for 0.8s load speed and deployed high-converting graphic ad sets, doubling monthly order volume.',
    },
    recommendedServices: [
      { title: 'Website Development', slug: 'web-development' },
      { title: 'Google Ads & Paid Advertising', slug: 'google-ads' },
      { title: 'Graphic Design & Creative Branding', slug: 'graphic-design' },
    ],
  },
  {
    slug: 'travel-tourism',
    title: 'Travel & Hospitality',
    primaryKeyword: 'digital marketing for travel agency India',
    tagline: 'High-converting holiday package inquiry funnels and booking portals for travel operators.',
    challenges: [
      'High cost-per-lead on generic holiday search terms',
      'Slow quote turnaround times causing potential travelers to book elsewhere',
      'Seasonal booking slumps and intense online OTA competition',
    ],
    solutions: [
      'Destination-specific landing pages with instant WhatsApp quote requests',
      'Targeted Google Search campaigns capturing users searching for customized tour packages',
      'Vibrant social media creatives showcasing verified customer holiday experiences',
    ],
    caseStudy: {
      client: 'Vagabond Holidays India',
      metrics: '420+ Monthly Tour Bookings | 4.6x Ad ROAS',
      summary: 'Built high-converting travel package landing pages and Google Ads campaigns, reducing cost per qualified holiday inquiry by 40%.',
    },
    recommendedServices: [
      { title: 'Website Design (UI/UX)', slug: 'website-design' },
      { title: 'Google Ads & Paid Advertising', slug: 'google-ads' },
      { title: 'Search Engine Optimization (SEO)', slug: 'seo-services' },
    ],
  },
  {
    slug: 'education',
    title: 'Education & Coaching Institutes',
    primaryKeyword: 'digital marketing for coaching institute India',
    tagline: 'Predictable student admission pipelines and demo class registration funnels for schools and institutes.',
    challenges: [
      'Intense local competition for competitive exam and tutoring coaching',
      'Tight seasonal admission windows requiring immediate lead generation',
      'Skeptical parents needing verified proof of academic results',
    ],
    solutions: [
      'Dedicated demo class registration landing pages with automated SMS/WhatsApp alerts',
      'Google Maps 3-Pack domination for local neighborhood educational searches',
      'Social media creatives featuring top-ranker student achievements and testimonials',
    ],
    caseStudy: {
      client: 'Target Academy India',
      metrics: '850+ Demo Registrations | 34% Direct Enrollment',
      summary: 'Implemented a localized lead generation campaign with automated WhatsApp counseling reminders, beating the target batch size early.',
    },
    recommendedServices: [
      { title: 'Google My Business (GMB) Optimization', slug: 'google-my-business-gmb' },
      { title: 'Google Ads & Paid Advertising', slug: 'google-ads' },
      { title: 'Graphic Design & Creative Branding', slug: 'graphic-design' },
    ],
  },
  {
    slug: 'b2b-services',
    title: 'B2B & Professional Services',
    primaryKeyword: 'b2b digital marketing agency India',
    tagline: 'Consistent pipeline of qualified corporate decision-makers, consultants, and enterprise contracts.',
    challenges: [
      'Long corporate evaluation cycles and high-value deal sizes',
      'Difficulty reaching key C-level decision-makers directly',
      'Outdated corporate websites that do not convey credibility',
    ],
    solutions: [
      'Authority-building SEO targeting commercial B2B procurement search terms',
      'Modern corporate website design with comprehensive case studies and whitepapers',
      'Professional graphic collateral, pitch decks, and brand identity kits',
    ],
    caseStudy: {
      client: 'Veritas Tech Consulting',
      metrics: '+340% Enterprise Inquiries | 99.98% SLA',
      summary: 'Rebuilt corporate web platform with technical SEO architecture, generating verified enterprise client contracts across India.',
    },
    recommendedServices: [
      { title: 'Search Engine Optimization (SEO)', slug: 'seo-services' },
      { title: 'Website Development', slug: 'web-development' },
      { title: 'Website Design (UI/UX)', slug: 'website-design' },
    ],
  },
];

export const LOCATIONS_DATA: LocationItem[] = [
  {
    slug: 'digital-marketing-agency-india',
    city: 'Pan-India',
    title: 'Pan-India Digital Marketing & Web Agency',
    primaryKeyword: 'digital marketing agency in India',
    metaDesc: 'Leading Pan-India digital marketing and web development agency. We empower businesses across India with SEO, Website Design, Web Development, Google Ads, GMB & Graphic Design.',
    landmarks: ['Mumbai', 'Bengaluru', 'Delhi NCR', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur'],
    address: 'Serving Clients Across All 28 States & UTs in India | Corporate Office: Rohini, Delhi',
    phone: '8700275224',
    coverageAreas: ['North India', 'South India', 'West India', 'East India', 'Central India'],
    testimonials: [
      {
        client: 'Rahul Kulkarni',
        company: 'CloudMatrix Technologies, Bengaluru',
        quote: 'Working with RIGHT EYE Technology has been seamless despite being in different cities. Their SEO and web development teams deliver fast, transparent, and high-impact results.',
        rating: 5,
      },
      {
        client: 'Ananya Deshmukh',
        company: 'Verve Retail & D2C, Mumbai',
        quote: 'They scaled our Google Ads and rebuilt our storefront with incredible precision. Our monthly customer acquisition cost dropped by 32% in 60 days.',
        rating: 5,
      },
    ],
  },
  {
    slug: 'digital-marketing-agency-delhi',
    city: 'Delhi NCR',
    title: 'Digital Marketing Agency in Delhi NCR',
    primaryKeyword: 'digital marketing agency in Delhi',
    metaDesc: 'Premier digital marketing, web design, and SEO agency in Delhi NCR. Accelerate qualified business inquiries with RIGHT EYE Technology.',
    landmarks: ['Rohini Sector 20 (Corporate HQ)', 'Pitampura', 'Connaught Place', 'Noida Expressway', 'Cyber City Gurgaon'],
    address: 'B-4/250, Sector-20, Rohini, Delhi 110086 | Phone: 8700275224',
    phone: '8700275224',
    coverageAreas: ['North Delhi', 'West Delhi', 'South Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'Ghaziabad'],
    testimonials: [
      {
        client: 'Dr. Vikram Malhotra',
        company: 'Apex Healthcare, Delhi',
        quote: 'RIGHT EYE took our Google Business Profile and local website to #1 in North Delhi. Patient inquiries have quadrupled within 3 months.',
        rating: 5,
      },
      {
        client: 'Siddharth Oberoi',
        company: 'Aura Living Real Estate, Gurgaon',
        quote: 'Their Google Ads management and landing page designs deliver verified luxury apartment buyers at an outstanding 5.2x ROAS.',
        rating: 5,
      },
    ],
  },
  {
    slug: 'digital-marketing-agency-mumbai',
    city: 'Mumbai',
    title: 'Digital Marketing Agency in Mumbai',
    primaryKeyword: 'digital marketing agency in Mumbai',
    metaDesc: 'Top digital marketing agency serving businesses in Mumbai and Maharashtra. Custom websites, high-ROI Google Ads, SEO, and graphic branding.',
    landmarks: ['Bandra Kurla Complex (BKC)', 'Andheri East', 'Lower Parel', 'Nariman Point', 'Navi Mumbai'],
    address: 'Serving Mumbai & Western Region | Hotline: 8700275224',
    phone: '8700275224',
    coverageAreas: ['BKC', 'South Mumbai', 'Western Suburbs', 'Thane', 'Navi Mumbai'],
    testimonials: [
      {
        client: 'Karan Shah',
        company: 'FinBridge Capital Advisors, Mumbai',
        quote: 'Their expertise in Google Ads and custom landing page development gave our financial advisory firm a consistent stream of corporate clients.',
        rating: 5,
      },
    ],
  },
  {
    slug: 'digital-marketing-agency-bengaluru',
    city: 'Bengaluru',
    title: 'Digital Marketing Agency in Bengaluru',
    primaryKeyword: 'digital marketing agency in Bengaluru',
    metaDesc: 'Performance digital marketing and full-stack web development agency in Bengaluru for startups, tech firms, and expanding Indian brands.',
    landmarks: ['Koramangala', 'Indiranagar', 'HSR Layout', 'Whitefield', 'Electronic City'],
    address: 'Serving Bengaluru & Karnataka Startups & Enterprises | Phone: 8700275224',
    phone: '8700275224',
    coverageAreas: ['Koramangala', 'Indiranagar', 'HSR Layout', 'Whitefield', 'CBD'],
    testimonials: [
      {
        client: 'Priya Narayanan',
        company: 'InnoHealth AI, Bengaluru',
        quote: 'RIGHT EYE built our web application with modern React and ranked us on page 1 of Google for our target enterprise software keywords.',
        rating: 5,
      },
    ],
  },
  {
    slug: 'digital-marketing-agency-hyderabad',
    city: 'Hyderabad',
    title: 'Digital Marketing Agency in Hyderabad',
    primaryKeyword: 'digital marketing agency in Hyderabad',
    metaDesc: 'Results-driven digital marketing agency serving Hyderabad and Telangana businesses with SEO, Web Development, Google Ads, and GMB optimization.',
    landmarks: ['HITEC City', 'Gachibowli', 'Madhapur', 'Banjara Hills', 'Jubilee Hills'],
    address: 'Serving Hyderabad & Telangana Region | Hotline: 8700275224',
    phone: '8700275224',
    coverageAreas: ['HITEC City', 'Gachibowli', 'Banjara Hills', 'Secunderabad', 'Financial District'],
    testimonials: [
      {
        client: 'Suresh Reddy',
        company: 'Apex Infrastructure, Hyderabad',
        quote: 'Outstanding graphic design and Google Ads performance. Their team is proactive, professional, and transparent with every rupee spent.',
        rating: 5,
      },
    ],
  },
  {
    slug: 'digital-marketing-agency-pune',
    city: 'Pune',
    title: 'Digital Marketing Agency in Pune',
    primaryKeyword: 'digital marketing agency in Pune',
    metaDesc: 'Comprehensive digital agency in Pune delivering fast websites, local Google Maps domination, paid advertising, and high-impact graphic design.',
    landmarks: ['Hinjewadi IT Park', 'Koregaon Park', 'Viman Nagar', 'Baner', 'Shivajinagar'],
    address: 'Serving Pune & Maharashtra Commercial Corridors | Phone: 8700275224',
    phone: '8700275224',
    coverageAreas: ['Hinjewadi', 'Koregaon Park', 'Viman Nagar', 'Kothrud', 'Magarpatta'],
    testimonials: [
      {
        client: 'Deepak Joshi',
        company: 'Precision Engineering Tools, Pune',
        quote: 'Our previous agency promised results but gave only excuses. RIGHT EYE delivered real inbound B2B inquiries and a lightning-fast catalog website.',
        rating: 5,
      },
    ],
  },
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    id: 'p1',
    title: 'Apex Orthopedic & Healthcare Center',
    category: 'Local SEO & Web Development',
    client: 'Apex Healthcare India',
    impact: '+520% Google Maps Views | #1 Local Rank',
    summary: 'Optimized Google Business Profile and constructed an ultra-fast patient appointment portal with complete local schema markup.',
    tags: ['Google Business Profile', 'SEO', 'Website Development', 'Lead Capture'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p2',
    title: 'Skyline Luxury Residences',
    category: 'Google Ads & Paid Marketing',
    client: 'Skyline Capital Developers',
    impact: '₹42Cr Inventory Sold | 5.2x Ad ROAS',
    summary: 'Targeted high-net-worth real estate buyers across India through laser-targeted Google Search Ads and interactive project landing pages.',
    tags: ['Google Ads', 'PPC', 'Website Design', 'Landing Page'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p3',
    title: 'Luxe Organics D2C Skincare',
    category: 'Website Design & Paid Media',
    client: 'Luxe Organics India',
    impact: '5.2x Blended ROAS | 48% Conversion Lift',
    summary: 'Created a modern mobile-first e-commerce design with sub-second page speeds, integrated UPI checkout, and graphic ad sets.',
    tags: ['Website Design', 'E-commerce', 'Paid Ads', 'Graphic Design'],
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p4',
    title: 'Vagabond Holidays India',
    category: 'Website Development & Google Ads',
    client: 'Vagabond Holidays',
    impact: '420+ Monthly Tour Bookings | -38% Cost Per Lead',
    summary: 'Developed a high-speed travel package portal with click-to-WhatsApp quote generators and high-converting Google Search campaigns.',
    tags: ['Website Development', 'Google Ads', 'Graphic Design', 'CRO'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p5',
    title: 'CloudMatrix Technologies',
    category: 'National SEO & Brand Identity',
    client: 'CloudMatrix B2B Tech',
    impact: '+340% Organic Traffic | Page 1 for 45+ Keywords',
    summary: 'Executed complete technical SEO, commercial keyword mapping, and crafted corporate branding collaterals for a fast-scaling tech brand.',
    tags: ['SEO', 'Graphic Design', 'Website Design', 'Brand Identity'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p6',
    title: 'Spice Garden Bistro Chain',
    category: 'Google My Business & Graphic Design',
    client: 'Spice Garden Hospitality',
    impact: '+62% Direct Table Bookings | 2,800+ Monthly Calls',
    summary: 'Optimized Google Business Profiles across multiple city locations, created weekly promo graphics, and deployed local review funnels.',
    tags: ['Google Business Profile', 'Graphic Design', 'Local SEO', 'Reputation'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  },
];

export const PRICING_PACKAGES: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Business Package',
    price: '₹19,999',
    billingPeriod: '/month',
    description: 'Perfect for local businesses, clinics, and professional service providers wanting steady inbound inquiries and local dominance.',
    features: [
      'Complete Google My Business (GMB) 3-Pack setup & optimization',
      'Local citation submissions across 35+ verified Indian business directories',
      'On-page SEO optimization for up to 10 local commercial keywords',
      'Google Ads or Meta Ads campaign setup & management (up to ₹30k spend)',
      'High-speed 5-page responsive website design audit & basic fixes',
      'Monthly performance report & dedicated account manager',
    ],
    idealFor: 'Local businesses, clinics, and service providers across India',
  },
  {
    id: 'growth',
    name: 'Growth Acceleration Package',
    price: '₹39,999',
    billingPeriod: '/month',
    badge: 'MOST POPULAR',
    description: 'Designed for scaling companies, e-commerce stores, and multi-location businesses seeking aggressive lead growth.',
    features: [
      'Comprehensive National & Local SEO for up to 25 primary keywords',
      'Full technical website audit and Core Web Vitals speed optimization',
      'Google Ads + Meta Ads campaign management (up to ₹1 Lakh ad spend)',
      '12 custom graphic design creatives (social posts, banners & ads) per month',
      'Google Business Profile active management, weekly posts & review strategy',
      'Conversion Rate Optimization (CRO) and WhatsApp lead funnel integration',
      'Bi-weekly strategy calls and real-time performance tracking dashboard',
    ],
    idealFor: 'Growing MSMEs, D2C brands, and competitive service businesses',
  },
  {
    id: 'enterprise',
    name: 'Pan-India Market Dominance',
    price: '₹79,999',
    billingPeriod: '/month',
    description: 'Complete end-to-end digital growth partnership for established enterprises, hospital chains, and nationwide brands.',
    features: [
      'Custom bespoke website development or full redesign on Next.js/React',
      'Advanced Pan-India SEO covering unlimited commercial keyword clusters',
      'Omnichannel paid advertising management across Google, Meta, and YouTube',
      '24+ premium graphic design assets, corporate brochures, and ad sets per month',
      'Multi-location Google Business Profile management and review automation',
      'Dedicated digital marketing strategist with weekly performance reviews',
      'Server-side conversion tracking (Google Tag Manager & Meta CAPI)',
      'Direct WhatsApp VIP channel for priority support and instant turnarounds',
    ],
    idealFor: 'Enterprises, nationwide brands, real estate firms & hospital chains',
  },
];

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    author: 'Dr. Vikram Malhotra',
    role: 'Medical Director',
    company: 'Apex Healthcare & Orthopedic Center',
    location: 'Delhi NCR',
    quote: 'RIGHT EYE transformed our Google Business Profile and clinic website. We went from low local visibility to holding the #1 spot on Google Maps. Patient inquiries have quadrupled, and their team is always available.',
    rating: 5,
  },
  {
    id: 't2',
    author: 'Rahul Kulkarni',
    role: 'Founder & CEO',
    company: 'CloudMatrix Technologies',
    location: 'Bengaluru, Karnataka',
    quote: 'We hired RIGHT EYE Technology for both web development and national SEO. They delivered an ultra-fast, modern website that ranks on page 1 for our key software terms. Seamless communication despite our team being in Bangalore.',
    rating: 5,
  },
  {
    id: 't3',
    author: 'Ananya Deshmukh',
    role: 'Managing Partner',
    company: 'Verve Retail & D2C Brands',
    location: 'Mumbai, Maharashtra',
    quote: 'Their Google Ads management and graphic design creatives slashed our customer acquisition cost by 34%. They provide clear, transparent weekly reports without any confusing marketing jargon.',
    rating: 5,
  },
  {
    id: 't4',
    author: 'Siddharth Oberoi',
    role: 'Managing Director',
    company: 'Aura Living Real Estate',
    location: 'Gurgaon & Pan-India',
    quote: 'The quality of leads from their Google Ads and project landing pages has been phenomenal. We closed multiple premium property deals with a documented 5.2x return on ad spend.',
    rating: 5,
  },
];
