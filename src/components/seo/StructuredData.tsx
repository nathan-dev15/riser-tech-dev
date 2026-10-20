/**
 * Structured Data (Schema.org) Components
 * For better SEO and rich snippets in search results
 */

import { COMPANY_INFO } from '@/lib/constants';
import { Product, ProductCategory } from '@/lib/products';

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Organization Schema
 * For homepage and general site information
 */
export function OrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Leading fire safety solutions provider in Chennai. Expert fire alarm installation, fire extinguishers, emergency lighting & fire protection services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.split(',')[0],
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+91${COMPANY_INFO.phone}`,
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: 'English',
    },
    sameAs: [
      // Add your social media URLs here
      // 'https://www.facebook.com/risertech',
      // 'https://www.linkedin.com/company/risertech',
    ],
  };

  return <StructuredData data={schema} />;
}

/**
 * LocalBusiness Schema
 * For local SEO in Chennai
 */
export function LocalBusinessSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    description: 'Reliable Authorized Dealer in Chennai, Tamil Nadu — Riser Technologies is the official authorized dealer and distributor for Reliable Automatic Sprinkler Co. (USA) in India. Top Sprinkler Dealer supplying ESFR, Pendent, Upright, Horizontal Sidewall, Concealed, and K5.6 Sprinklers at best price. UL Listed, FM Approved, LPCB certified. Temperature ratings 57°C–140°C, 12-bar working pressure. Brass sprinkler heads, flexible hose connections. Fire Extinguisher dealer, Wet Riser System dealers, Fire Fighting Equipment Supplier in Chennai. Design and technical assistance provided. Genuine Reliable solutions direct from manufacturer partnership.',
    image: `${baseUrl}/logo.png`,
    '@id': baseUrl,
    url: baseUrl,
    telephone: `+91${COMPANY_INFO.phone}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.split(',')[0],
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0827,
      longitude: 80.2707,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    areaServed: [
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'State', name: 'Tamil Nadu' },
      { '@type': 'Country', name: 'India' },
    ],
    knowsAbout: [
      'Reliable Authorized Dealer in Chennai',
      'Reliable Dealer in Chennai',
      'Reliable Fire Safety Equipment Dealers in Chennai',
      'Reliable Fire Sprinkler Systems Authorized Dealers in Chennai',
      'Reliable Fire System',
      'Reliable Fire and Safety',
      'Authorized Dealer for Reliable Sprinklers India',
      'Fire Sprinkler Systems',
      'Sprinkler Systems in Chennai',
      'Top Fire Sprinkler System in Chennai',
      'Sprinkler Dealer in Chennai',
      'Sprinkler Supplier in Chennai',
      'Sprinkler Distributor in Chennai',
      'Authorized Sprinkler Distributor in Chennai',
      'Fire Sprinkler Distributor in Chennai',
      'ESFR Sprinkler Supplier in Chennai',
      'ESFR Sprinklers',
      'Pendent Sprinkler Dealers in Chennai',
      'Upright Sprinkler Dealers in Chennai',
      'Concealed Sprinkler Dealer in Chennai',
      'Horizontal Sidewall Sprinkler Dealer in Chennai',
      'Extended Coverage Sprinklers Dealer in Chennai',
      'Fire Sprinklers K5.6 Distributor in Chennai',
      'K5.6 Sprinkler Supplier India',
      'Automatic Fire Sprinkler System Chennai',
      'Brass Sprinkler Heads Chennai',
      'Pendent Type Fire Sprinkler Heads',
      'Flexible Hose Connections Fire Sprinkler',
      'Water Sprinklers in Chennai',
      'Fire Sprinkler System Wholesalers and Distributors in Chennai',
      'Pendent Sprinkler Wholesalers and Distributors in Chennai',
      'Commercial Sprinkler Solutions',
      'Fire Extinguisher Dealers in Chennai',
      'Fire Fighting Equipment Supplier',
      'Wet Riser System Dealers in Chennai',
      'Fire Sprinkler System in Chennai',
      'Fire Sprinkler In Chennai Tamil Nadu At Best Price',
      'Sprinkler System in Chennai Tamil Nadu at Best Price',
      'Pre-Action Fire Systems',
      'Kitchen Fire Suppression',
      'Gas Suppression Systems',
      'UL Listed FM Approved Sprinklers',
      'Reliable Fire Sprinklers',
      'Design and Technical Assistance Fire Sprinkler',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fire Sprinkler Systems & Equipment Chennai',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'ESFR Sprinkler in Chennai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Pendent Sprinkler Chennai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Upright Sprinkler Chennai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Concealed Sprinkler Chennai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Fire Extinguisher Chennai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wet Riser System Installation Chennai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fire Sprinkler System Installation Chennai' } },
      ],
    },
    sameAs: [
      'https://www.reliablesprinkler.com/products/sprinklers/',
    ],
  };

  return <StructuredData data={schema} />;
}

/**
 * Product Schema
 * For individual product pages
 */
export function ProductSchema({ product, category }: { product: Product; category: ProductCategory }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const productUrl = `${baseUrl}/products/${category.slug}/${product.id}`;
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.title} - ${product.category} in Chennai`,
    description: `${product.description} Available in Chennai, Tamil Nadu. Expert installation and support by Riser Technologies.`,
    image: `${baseUrl}/images/products/${category.slug}/${product.id}.jpg`,
    sku: product.id,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: COMPANY_INFO.name,
    },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      seller: {
        '@type': 'Organization',
        name: COMPANY_INFO.name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
    },
    additionalProperty: product.features.map((feature) => ({
      '@type': 'PropertyValue',
      name: 'Feature',
      value: feature,
    })),
  };

  return <StructuredData data={schema} />;
}

/**
 * BreadcrumbList Schema
 * For navigation and SEO
 */
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };

  return <StructuredData data={schema} />;
}

/**
 * Service Schema
 * For service pages
 */
export function ServiceSchema({ 
  name, 
  description, 
  serviceUrl 
}: { 
  name: string; 
  description: string; 
  serviceUrl: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${name} in Chennai`,
    description: `${description} Available in Chennai, Tamil Nadu. Expert service by Riser Technologies.`,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Chennai',
    },
    url: serviceUrl.startsWith('http') ? serviceUrl : `${baseUrl}${serviceUrl}`,
  };

  return <StructuredData data={schema} />;
}

/**
 * FAQPage Schema
 * For FAQ sections
 */
export function FAQPageSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <StructuredData data={schema} />;
}

