import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProviders } from '@/components/providers/AppProviders';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Performance: swap fonts for better loading
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Sprinkler Systems in Chennai | Fire Sprinkler Tamil Nadu India | Riser Technologies',
    template: '%s | Sprinkler Systems Chennai — Riser Technologies',
  },
  description:
    'Top sprinkler system supplier in Chennai, Tamil Nadu & India. Authorised distributor of Reliable Fire Sprinklers (USA). UL/FM/LPCB certified — ESFR, DDX pre-action, kitchen suppression. Call +91 9787666104.',
  keywords: [
    // General — location-first for ranking
    'sprinkler',
    'sprinkler in chennai',
    'sprinkler in tamilnadu',
    'sprinkler in india',
    'sprinkler system in chennai',
    'sprinkler system in tamilnadu',
    'sprinkler system in india',
    'fire sprinkler in chennai',
    'fire sprinkler in tamilnadu',
    'fire sprinkler in india',
    'sprinkler supplier in chennai',
    'sprinkler dealer in chennai',
    'sprinkler company in chennai',
    'sprinkler installation chennai',
    'sprinkler contractor chennai',
    'fire sprinkler supplier india',
    'fire and safety',
    'fire systems',
    'fire sprinklers',
    'sprinkler system',
    // Systems
    'suppression system',
    'preaction system',
    'pre pack system',
    'DDX PrePaK system',
    'gas suppression system',
    'tubing system',
    'electric panel tubing system',
    'kitchen suppression system',
    'general valve',
    // Sprinkler types
    'esfr sprinkler',
    'pendent sprinkler',
    'upright sprinkler',
    'quick response sprinklers',
    'conventional sprinklers',
    'concealed pendent sprinklers',
    'horizontal sidewall sprinkler',
    'recessed pendent sprinkler',
    'flat concealed sprinkler',
    'intermediate level sprinkler',
    'K factor sprinkler',
    // Brand
    'riser',
    'riser tech',
    'riser technologies',
    // Location
    'chennai',
    'tamil nadu india',
    // Branded product
    'reliable sprinkler india',
    'reliable fire sprinkler',
    'reliable sprinkler distributor india',
    'reliable sprinkler chennai',
    'reliable automatic sprinkler co india',
    // Generic high-intent
    'fire sprinkler systems india',
    'ESFR sprinklers india',
    'UL Listed FM Approved fire sprinklers',
    'UL Listed FM Approved sprinklers and accessories',
    'UL FM approved sprinklers india',
    'commercial fire protection equipment india',
    'pre-action fire suppression system india',
    'warehouse fire protection system india',
    // Emerging vertical
    'lithium ion battery fire protection india',
    'EV gigafactory fire suppression india',
    'BESS fire protection system india',
    'data centre fire sprinkler system india',
    'cold storage fire protection india',
    // Local
    'fire safety Chennai',
    'fire sprinkler supplier Chennai',
    'fire protection Tamil Nadu',
    'fire safety solutions India',
  ],
  authors: [{ name: 'Riser Technologies' }],
  creator: 'Riser Technologies',
  publisher: 'Riser Technologies',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Riser Technologies — Reliable Sprinkler Distributor India',
    title: 'Sprinkler Systems Chennai | UL/FM Fire Sprinklers Tamil Nadu India — Riser Technologies',
    description:
      'Authorised Indian distributor of Reliable Fire Sprinklers (USA). UL/FM/LPCB certified fire sprinkler systems, ESFR storage, DDX pre-action & LB11 Li-ion sprinklers. Chennai.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Riser Technologies — Reliable Sprinkler Distributor India, Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sprinkler Systems Chennai | UL/FM Fire Sprinklers Tamil Nadu India — Riser Technologies',
    description: 'Expert fire safety solutions in Chennai. Fire alarms, extinguishers, emergency lighting & more.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
