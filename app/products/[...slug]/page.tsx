import { getProductBySlug, getCategoryBySlug, PRODUCT_CATEGORIES } from '@/lib/products';
import { Card } from '@/components/ui/Card';
import { Button3D } from '@/components/ui/Button3D';
import { Flame, PanelTop, Droplet, UtensilsCrossed, Building2, Bell, Signpost, CheckCircle, ArrowLeft, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductSchema, BreadcrumbSchema, FAQPageSchema, StructuredData } from '@/components/seo/StructuredData';
import { SprinklerFAQ } from '@/components/sections/SprinklerFAQ';
import { sprinklerFaqs } from '@/lib/sprinkler-faqs';
import type { Metadata } from 'next';

const icons: Record<string, LucideIcon> = {
  flame: Flame,
  panel: PanelTop,
  droplet: Droplet,
  utensils: UtensilsCrossed,
  building: Building2,
  bell: Bell,
  signpost: Signpost,
};

interface ProductPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

// Generate metadata for product pages
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Handle category listing page
  if (slug.length === 1) {
    const category = getCategoryBySlug(slug[0]);
    if (!category) {
      return {
        title: 'Product Category Not Found',
      };
    }

    // Sprinkler-specific SEO override
    if (category.slug === 'sprinklers') {
      return {
        title: 'Reliable Authorized Dealer in Chennai | Sprinkler Dealer at Best Price | Riser Technologies',
        description: 'Reliable Authorized Dealer & Distributor in Chennai. ESFR, Pendent, Upright, Sidewall, Concealed, K5.6 Sprinklers — UL/FM Approved. 57–140°C ratings, 12-bar pressure. Brass sprinkler heads. Design & technical assistance. Best price in Tamil Nadu. Call +91 9787666104.',
        keywords: [
          // Reliable authorized dealer — highest priority
          'Reliable Dealer in Chennai',
          'reliable authorized dealer in chennai',
          'reliable authorised dealer chennai',
          'reliable sprinkler authorized dealer',
          'reliable fire sprinkler authorized dealer chennai',
          'reliable fire safety equipment dealers in chennai',
          'reliable fire safety equipment dealers and contractors in chennai',
          'reliable fire sprinkler systems authorized dealers in chennai',
          'reliable fire system',
          'reliable fire and safety chennai',
          'reliable automatic sprinkler company chennai',
          // Sprinkler dealer/distributor
          'Sprinkler Dealer in Chennai',
          'sprinkler supplier in chennai',
          'authorized sprinkler distributor in chennai',
          'fire sprinkler distributor in chennai',
          'ESFR Sprinkler Supplier in Chennai',
          'Pendent Sprinkler Dealers in Chennai',
          'pendent sprinkler dealers in chennai near me',
          'Upright Sprinkler Dealers in Chennai',
          'upright sprinkler dealers in chennai near me',
          'Concealed Sprinkler Dealer in Chennai',
          'Extended Coverage Sprinklers Dealer in Chennai',
          'Fire Sprinkler System Wholesalers & Distributors in Chennai',
          'Pendent Sprinkler Wholesalers & Distributors in Chennai',
          'sprinklers at best price in chennai tamil nadu',
          'Fire Sprinkler In Chennai Tamil Nadu At Best Price',
          'Sprinkler System In Chennai Tamil Nadu At Best Price',
          'Top Fire Sprinkler System in Chennai',
          // Technical specification terms
          'Fire Sprinklers K5.6 Distributor in Chennai',
          'K5.6 sprinkler dealer chennai',
          'automatic fire sprinkler system chennai',
          'fire sprinkler 57 140 degree temperature',
          'fire sprinkler 68 degree 155 fahrenheit',
          'fire sprinkler 12 bar working pressure',
          'brass sprinkler heads chennai',
          'pendent type fire sprinkler heads chennai',
          'horizontal sidewall sprinkler dealer chennai',
          'flexible hose connections fire sprinkler',
          'UL FM approved pendent upright sidewall ESFR concealed sprinklers',
          'design and technical assistance fire sprinkler chennai',
          'fire sprinkler system design consultation chennai',
          // General
          'Water Sprinklers in Chennai',
          'Reliable fire sprinklers Chennai',
          'UL Listed fire sprinklers Chennai',
          'FM Approved sprinklers India',
          'fire sprinkler supplier Chennai',
          'ESFR sprinklers Chennai',
          'quick response sprinklers Tamil Nadu',
          'concealed sprinklers Chennai',
          'fire sprinkler system Chennai',
          'Reliable Automatic Sprinkler India',
          'fire sprinkler heads Chennai',
          'sprinkler system supplier Tamil Nadu',
          'buy fire sprinklers India',
          'sprinkler distributors in chennai near me',
        ],
        openGraph: {
          title: 'Reliable Authorized Dealer in Chennai | Sprinkler Dealer at Best Price | Riser Technologies',
          description: 'Reliable Authorized Dealer in Chennai — ESFR, Pendent, Upright, Sidewall, Concealed, K5.6 Sprinklers. UL/FM Approved. 57–140°C ratings. Best price in Tamil Nadu.',
          url: `${baseUrl}/products/sprinklers`,
          type: 'website',
          images: [{ url: `${baseUrl}/images/products/sprinklers/category.jpg`, width: 1200, height: 630, alt: 'Reliable Authorized Sprinkler Dealer Chennai - Riser Technologies' }],
        },
        twitter: {
          card: 'summary_large_image',
          title: 'Reliable Authorized Dealer in Chennai | Sprinkler Dealer at Best Price',
          description: 'Reliable Authorized Dealer — ESFR, Pendent, Upright, Sidewall, Concealed, K5.6 Sprinklers. UL/FM Approved. Best price. Call +91 9787666104.',
        },
        alternates: { canonical: `/products/sprinklers` },
      };
    }

    return {
      title: `${category.name} in Chennai | Fire Safety Products - Riser Technologies`,
      description: `${category.description} Available in Chennai, Tamil Nadu. Expert installation and support. Browse our complete range of ${category.name.toLowerCase()}.`,
      keywords: [
        `${category.name.toLowerCase()} Chennai`,
        `${category.name.toLowerCase()} Tamil Nadu`,
        `fire safety ${category.name.toLowerCase()} Chennai`,
        `buy ${category.name.toLowerCase()} Chennai`,
        `best ${category.name.toLowerCase()} supplier Chennai`,
      ],
      openGraph: {
        title: `${category.name} in Chennai | Riser Technologies`,
        description: `${category.description} Available in Chennai. Expert installation and support.`,
        url: `${baseUrl}/products/${category.slug}`,
        type: 'website',
        images: [
          {
            url: `${baseUrl}/images/products/${category.slug}/category.jpg`,
            width: 1200,
            height: 630,
            alt: `${category.name} - Riser Technologies Chennai`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${category.name} in Chennai | Riser Technologies`,
        description: `${category.description} Available in Chennai.`,
      },
      alternates: {
        canonical: `/products/${category.slug}`,
      },
    };
  }

  // Handle individual product page
  if (slug.length === 2) {
    const product = getProductBySlug(slug);
    const category = getCategoryBySlug(slug[0]);

    if (!product || !category) {
      return {
        title: 'Product Not Found',
      };
    }

    const productTitle = `${product.title} in Chennai | ${product.category} - Riser Technologies`;
    const productDescription = `${product.description} Available in Chennai, Tamil Nadu. Expert installation and support by Riser Technologies. ${product.features.slice(0, 3).join('. ')}.`;

    return {
      title: productTitle,
      description: productDescription,
      keywords: [
        `${product.title} Chennai`,
        `${product.title} Tamil Nadu`,
        `${product.title} dealer in Chennai`,
        `${product.title} supplier in Chennai`,
        `${product.title} distributor in Chennai`,
        `${product.title} dealers in Chennai near me`,
        `buy ${product.title} Chennai`,
        `${product.category} Chennai`,
        `${product.category} dealer in Chennai`,
        `fire safety ${product.title.toLowerCase()} Chennai`,
        `best ${product.title.toLowerCase()} supplier Chennai`,
        `${product.title.toLowerCase()} at best price Chennai`,
        `price ${product.title.toLowerCase()} Chennai`,
      ],
      openGraph: {
        title: `${product.title} in Chennai | Riser Technologies`,
        description: productDescription,
        url: `${baseUrl}/products/${category.slug}/${product.id}`,
        type: 'website',
        images: [
          {
            url: `${baseUrl}/images/products/${category.slug}/${product.id}.jpg`,
            width: 1200,
            height: 630,
            alt: `${product.title} - Riser Technologies Chennai`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${product.title} in Chennai | Riser Technologies`,
        description: productDescription,
      },
      alternates: {
        canonical: `/products/${category.slug}/${product.id}`,
      },
    };
  }

  return {
    title: 'Products - Riser Technologies',
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  
  // Handle category listing page (e.g., /products/fire-extinguishers)
  if (slug.length === 1) {
    const category = getCategoryBySlug(slug[0]);
    if (!category) {
      notFound();
    }
    
    const CategoryIcon = category.icon;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    
    // Breadcrumbs for category page
    const breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: category.name, url: `/products/${category.slug}` },
    ];
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <BreadcrumbSchema items={breadcrumbs} />
        {/* Header */}
        <section className="pt-24 pb-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-amber-900 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 text-white hover:text-amber-200 mb-4 sm:mb-6 transition-all duration-200 text-sm sm:text-base font-medium bg-white/10 hover:bg-white/20 px-4 py-2.5 sm:px-3 sm:py-2 rounded-lg backdrop-blur-sm border border-white/20 active:scale-95 min-h-[44px] sm:min-h-auto"
            >
              <ArrowLeft className="w-5 h-5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Back to Products</span>
            </Link>
            {/* Breadcrumbs */}
            <nav className="mb-4 sm:mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-white/80 flex-wrap">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white font-semibold">{category.name}</li>
              </ol>
            </nav>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <CategoryIcon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 leading-tight break-words">
                  {category.name} in Chennai
                </h1>
                <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
                  {category.description} Available in Chennai, Tamil Nadu. Expert installation and support by Riser Technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products List */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {category.products.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                  No products available in this category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.products.map((product, index) => {
                  const ProductIcon = icons[product.icon] || Flame;
                  return (
                    <div
                      key={product.id}
                    >
                      <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                        <div className="p-4 sm:p-6">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                            <ProductIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <h2 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white leading-tight break-words">
                            {product.title}
                          </h2>
                          <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
                            {product.description}
                          </p>
                          <Link href={`/products/${category.slug}/${product.id}`} aria-label={`View details for ${product.title}`}>
                            <Button3D variant="primary" className="w-full text-sm sm:text-base">
                              View Details
                            </Button3D>
                          </Link>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Sprinkler-specific FAQ section + server-rendered schemas */}
        {category.slug === 'sprinklers' && (
          <>
            <FAQPageSchema faqs={sprinklerFaqs} />
            <StructuredData data={{
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Reliable Fire Sprinklers — Product Range',
              description: 'UL Listed & FM Approved Reliable Automatic Sprinkler range available in Chennai, Tamil Nadu & India via Riser Technologies.',
              url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/products/sprinklers`,
              itemListElement: category.products.map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: p.title,
                description: p.description,
                url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/products/sprinklers/${p.id}`,
              })),
            }} />
            <SprinklerFAQ />
          </>
        )}
      </div>
    );
  }

  // Handle individual product page (e.g., /products/fire-extinguishers/multimax)
  if (slug.length === 2) {
    const product = getProductBySlug(slug);
    if (!product) {
      notFound();
    }
    
    const category = getCategoryBySlug(slug[0]);
    if (!category) {
      notFound();
    }
    
    const ProductIcon = icons[product.icon] || Flame;
    const CategoryIcon = category.icon;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    
    // Breadcrumbs for product page
    const breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: category.name, url: `/products/${category.slug}` },
      { name: product.title, url: `/products/${category.slug}/${product.id}` },
    ];
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <ProductSchema product={product} category={category} />
        <BreadcrumbSchema items={breadcrumbs} />
        {/* Header */}
        <section className="pt-24 pb-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-amber-900 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/products" 
              className="inline-flex items-center gap-2 text-white hover:text-amber-200 mb-4 sm:mb-6 transition-all duration-200 text-sm sm:text-base font-medium bg-white/10 hover:bg-white/20 px-4 py-2.5 sm:px-3 sm:py-2 rounded-lg backdrop-blur-sm border border-white/20 active:scale-95 min-h-[44px] sm:min-h-auto"
            >
              <ArrowLeft className="w-5 h-5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Back to Products</span>
            </Link>
            {/* Breadcrumbs */}
            <nav className="mb-4 sm:mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-white/80 flex-wrap">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href={`/products/${category.slug}`} className="hover:text-white transition-colors">
                    {category.name}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white font-semibold">{product.title}</li>
              </ol>
            </nav>
            
            <Link 
              href={`/products/${category.slug}`} 
              className="inline-flex items-center gap-2 text-white hover:text-amber-200 mb-4 sm:mb-6 transition-all duration-200 text-sm sm:text-base font-medium bg-white/10 hover:bg-white/20 px-4 py-2.5 sm:px-3 sm:py-2 rounded-lg backdrop-blur-sm border border-white/20 active:scale-95 min-h-[44px] sm:min-h-auto"
            >
              <ArrowLeft className="w-5 h-5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Back to {category.name}</span>
            </Link>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <ProductIcon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 leading-tight break-words">
                  {product.title} in Chennai
                </h1>
                <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
                  {product.description} Available in Chennai, Tamil Nadu. Expert installation and support by Riser Technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* SEO Content Section */}
            <div className="mb-6 sm:mb-8 text-gray-700 dark:text-gray-300">
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Looking for <strong>{product.title}</strong> in Chennai? Riser Technologies offers premium quality {product.category.toLowerCase()} 
                with expert installation and comprehensive support. Our {product.title.toLowerCase()} are ideal for commercial, 
                industrial, and residential applications in Chennai and across Tamil Nadu.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                With over 12 years of experience in fire safety solutions, we provide certified products, professional installation, 
                and ongoing maintenance services. Contact us today for a free consultation and quote.
              </p>
            </div>
            
            <Card className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                Key Features of {product.title}
              </h2>
              <ul className="space-y-3 sm:space-y-4" role="list">
                {product.features.map((feature, index) => (
                  <li key={`${product.id}-feature-${index}`} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {product.specifications && product.specifications.length > 0 && (
              <Card className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                  Specifications
                </h2>
                <ul className="space-y-2 sm:space-y-3" role="list">
                  {product.specifications.map((spec, index) => (
                    <li key={`${product.id}-spec-${index}`} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0 mt-1" aria-hidden="true" />
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{spec}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="flex-1 sm:flex-initial">
                <Button3D variant="primary" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  Get a Quote
                </Button3D>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  // Invalid route
  notFound();
}
