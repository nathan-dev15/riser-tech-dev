import { Metadata } from 'next';
import { OrganizationSchema, LocalBusinessSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Sprinkler Dealer & Distributor in Chennai | Fire Safety Products at Best Price — Riser Technologies',
  description:
    'Authorised Sprinkler Dealer & Distributor in Chennai. ESFR, Pendent, Upright, Concealed Sprinklers. Fire Extinguishers, Suppression Systems, Wet Riser at best price in Chennai, Tamil Nadu. Call +91 9787666104.',
  keywords: [
    // Dealer / distributor / wholesaler
    'sprinkler dealer in chennai',
    'sprinkler distributor in chennai',
    'sprinkler wholesalers in chennai',
    'authorized sprinkler distributor in chennai',
    'fire sprinkler distributor in chennai',
    'Fire Sprinkler System Wholesalers & Distributors in Chennai',
    'Pendent Sprinkler Wholesalers & Distributors in Chennai',
    'sprinklers at best price in chennai tamil nadu',
    'Sprinkler System In Chennai Tamil Nadu At Best Price',
    // Product-type dealers
    'Concealed Sprinkler Dealer in Chennai',
    'ESFR Sprinkler Supplier in Chennai',
    'Pendent Sprinkler Dealers in Chennai',
    'pendent sprinkler dealers in chennai near me',
    'Upright Sprinkler Dealers in Chennai',
    'upright sprinkler dealers in chennai near me',
    'Extended Coverage Sprinklers Dealer in Chennai',
    // Fire extinguisher
    'Fire Extinguisher Dealers in Chennai',
    'fire extinguisher supplier in chennai',
    'fire extinguisher at best price chennai',
    // Fire fighting / wet riser
    'Fire Fighting Equipment Supplier',
    'fire fighting equipment supplier chennai',
    'Wet Riser System Dealers in Chennai',
    'wet riser system supplier chennai',
    // General products
    'fire safety products Chennai',
    'fire safety products Tamil Nadu',
    'fire extinguishers Chennai',
    'fire sprinklers Chennai',
    'fire suppression systems Chennai',
    'fire hydrants Chennai',
    'fire alarms Chennai',
    'fire safety equipment Chennai',
    'buy fire safety products Chennai',
    'best fire safety products Chennai',
    'Commercial Sprinkler Solutions',
  ],
  openGraph: {
    title: 'Sprinkler Dealer & Distributor in Chennai | Fire Safety Products — Riser Technologies',
    description:
      'Authorised Sprinkler Dealer & Distributor in Chennai. ESFR, Pendent, Upright, Concealed Sprinklers. Fire Extinguishers, Suppression Systems at best price in Tamil Nadu.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/products`,
    type: 'website',
  },
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      {children}
    </>
  );
}



