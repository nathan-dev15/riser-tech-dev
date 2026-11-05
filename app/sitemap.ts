import { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/constants';
import { PRODUCT_CATEGORIES } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://risertech.in';
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // SEO keyword landing pages
    {
      url: `${baseUrl}/sprinkler-dealer-in-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/sprinkler-distributor-in-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/authorized-sprinkler-distributor-in-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/esfr-sprinkler-dealer-in-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fire-sprinkler-system-dealers-in-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    // Location-based landing pages
    {
      url: `${baseUrl}/sprinkler-dealer-in-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sprinkler-dealer-in-coimbatore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fire-sprinkler-supplier-india`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/sprinkler-dealer-in-hyderabad`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sprinkler-dealer-in-mumbai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Reliable brand-specific landing pages
    {
      url: `${baseUrl}/reliable-sprinkler-dealers-in-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/reliable-sprinkler-dealers-india`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/reliable-sprinkler-dealers-in-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reliable-sprinkler-dealers-in-hyderabad`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reliable-sprinkler-dealers-in-coimbatore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Reliable product & distributor specific pages
    {
      url: `${baseUrl}/reliable-automatic-sprinkler-distributor-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/reliable-esfr-sprinkler-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reliable-concealed-sprinkler-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reliable-sprinkler-dealer-tamil-nadu`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/reliable-sprinkler-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/pre-action-sprinkler-system-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    // Generic sprinkler keyword pages
    {
      url: `${baseUrl}/sprinkler-system-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/automatic-sprinkler-system-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/fire-fighting-sprinklers-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sprinkler-alarm-installation-service-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // City expansion pages
    {
      url: `${baseUrl}/sprinkler-system-delhi`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sprinkler-system-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sprinkler-system-hyderabad`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Pre-action system pages
    {
      url: `${baseUrl}/reliable-preaction-system-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/reliable-double-interlock-preaction-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reliable-single-interlock-preaction-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Reliable valves pages
    {
      url: `${baseUrl}/reliable-system-valves-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    // Hydrant & extinguisher pages
    {
      url: `${baseUrl}/fire-hydrant-system-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/fire-extinguisher-dealer-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Fire suppression system pages
    {
      url: `${baseUrl}/reliable-fire-suppression-system-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/reliable-deluge-system-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/fire-suppression-system-dealer-chennai`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Product category pages
  const productCategoryPages: MetadataRoute.Sitemap = PRODUCT_CATEGORIES.map((category) => ({
    url: `${baseUrl}/products/${category.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Product detail pages
  const productPages: MetadataRoute.Sitemap = PRODUCT_CATEGORIES.flatMap((category) =>
    category.products.map((product) => ({
      url: `${baseUrl}/products/${category.slug}/${product.id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  );

  return [...staticPages, ...servicePages, ...productCategoryPages, ...productPages];
}



