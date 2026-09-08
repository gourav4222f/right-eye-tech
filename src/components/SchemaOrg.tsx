import React from 'react';
import { BUSINESS_INFO } from '../data/siteData';

interface SchemaOrgProps {
  pageType?: 'home' | 'service' | 'location' | 'contact';
  title?: string;
  description?: string;
  url?: string;
}

export const SchemaOrg: React.FC<SchemaOrgProps> = ({
  pageType = 'home',
  title = 'RIGHT EYE Technology | Digital Marketing Agency Delhi',
  description = 'Delhi NCR premier digital marketing, web development, SEO and CRM solutions agency.',
  url = 'https://righteyetechnology.com',
}) => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_INFO.name,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    '@id': BUSINESS_INFO.website,
    url: BUSINESS_INFO.website,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'B-4/250, Sector-20',
      addressLocality: 'Rohini',
      addressRegion: 'Delhi',
      postalCode: '110086',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.coordinates.lat,
      longitude: BUSINESS_INFO.coordinates.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '19:30',
    },
    sameAs: [
      'https://www.facebook.com/righteyetechnology',
      'https://www.instagram.com/righteyetechnology',
      'https://www.linkedin.com/company/right-eye-technology',
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: title,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'B-4/250, Sector-20, Rohini',
        addressLocality: 'Delhi',
        addressRegion: 'Delhi',
        postalCode: '110086',
        addressCountry: 'IN',
      },
    },
    description: description,
    areaServed: {
      '@type': 'City',
      name: 'Delhi NCR',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(pageType === 'service' ? serviceSchema : localBusinessSchema),
      }}
    />
  );
};
