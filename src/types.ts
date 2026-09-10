export type ThemeMode = 'dark' | 'light';

export interface BusinessInfo {
  name: string;
  tagline?: string;
  email: string;
  phone: string;
  whatsapp?: string;
  address: string;
  city: string;
  region: string;
  country: string;
  website: string;
  coverage?: string;
  majorHubs?: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ServiceItem {
  slug: string;
  title: string;
  category: 'SEO' | 'Website Design' | 'Website Development' | 'Paid Ads' | 'Google Business Profile' | 'Graphic Design' | string;
  primaryKeyword: string;
  shortDesc: string;
  fullDesc: string;
  businessBenefits?: string[];
  features: string[];
  deliverables: string[];
  subServices?: { name: string; slug: string }[];
  parentServiceSlug?: string;
  metrics: { label: string; value: string }[];
  faq: { question: string; answer: string }[];
}

export interface IndustryItem {
  slug: string;
  title: string;
  primaryKeyword: string;
  tagline: string;
  challenges: string[];
  solutions: string[];
  caseStudy: {
    client: string;
    metrics: string;
    summary: string;
  };
  recommendedServices: { title: string; slug: string }[];
}

export interface LocationItem {
  slug: string;
  city: string;
  title: string;
  primaryKeyword: string;
  metaDesc: string;
  landmarks: string[];
  address: string;
  phone: string;
  coverageAreas: string[];
  testimonials: {
    client: string;
    company: string;
    quote: string;
    rating: number;
  }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  client: string;
  impact: string;
  summary: string;
  tags: string[];
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  description: string;
  badge?: string;
  features: string[];
  idealFor: string;
}
