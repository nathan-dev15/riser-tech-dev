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
    default: 'Reliable Authorized Dealer in Chennai | Sprinkler Dealer & Distributor | Riser Technologies',
    template: '%s | Reliable Sprinkler Dealer Chennai — Riser Technologies',
  },
  description:
    'Reliable Authorized Dealer in Chennai — Top Sprinkler Dealer & Distributor in Tamil Nadu. UL/FM Approved ESFR, Pendent, Upright, Concealed, K5.6 Sprinklers at best price. Fire Extinguisher & Wet Riser dealers. Call +91 9787666104.',
  keywords: [
    // --- Dealer / Distributor / Supplier (exact-match, high priority) ---
    'Sprinkler Dealer in Chennai',
    'sprinkler dealer chennai',
    'fire sprinkler dealer in chennai',
    'sprinkler supplier in chennai',
    'sprinkler supplier chennai',
    'sprinkler distributor in chennai',
    'sprinkler distributors in chennai',
    'sprinkler distributors in chennai near me',
    'authorized sprinkler distributor in chennai',
    'authorised sprinkler distributor chennai',
    'fire sprinkler distributor in chennai',
    'fire sprinkler distributor chennai',
    'Sprinkler Wholesalers & Distributors in Chennai',
    'sprinkler wholesalers in chennai',
    'Fire Sprinkler System Wholesalers & Distributors in Chennai',
    'Sprinkler System In Chennai Tamil Nadu At Best Price',
    'sprinklers at best price in chennai tamil nadu',
    'sprinklers at best price in chennai',
    // --- Product-type Dealer terms ---
    'Concealed Sprinkler Dealer in Chennai',
    'concealed sprinkler supplier in chennai',
    'concealed pendent sprinkler dealer chennai',
    'ESFR Sprinkler Supplier in Chennai',
    'esfr sprinkler dealer in chennai',
    'esfr sprinkler distributor chennai',
    'Pendent Sprinkler Dealers in Chennai',
    'pendent sprinkler dealers in chennai near me',
    'Pendent Sprinkler Wholesalers & Distributors in Chennai',
    'pendent sprinkler supplier in chennai',
    'Upright Sprinkler Dealers in Chennai',
    'upright sprinkler dealers in chennai near me',
    'upright sprinkler supplier in chennai',
    'Extended Coverage Sprinklers Dealer in Chennai',
    'extended coverage sprinkler supplier chennai',
    // --- Top / Best phrases ---
    'Top Fire Sprinkler System in Chennai',
    'top sprinkler dealer in chennai',
    'best fire sprinkler supplier chennai',
    'best sprinkler dealer in chennai',
    // --- Water sprinkler variants ---
    'Water Sprinklers in Chennai',
    'water sprinklers tamil nadu',
    'water sprinkler system chennai',
    // --- System / Equipment ---
    'Fire Sprinkler System in Chennai',
    'fire sprinkler system chennai',
    'fire sprinkler system in tamil nadu',
    'Fire Sprinkler System - Fire alarm system dealers',
    'fire alarm system dealers in chennai',
    'Commercial Sprinkler Solutions',
    'commercial sprinkler solutions chennai',
    'commercial fire sprinkler system chennai',
    // --- Fire extinguisher ---
    'Fire Extinguisher Dealers in Chennai',
    'fire extinguisher supplier in chennai',
    'fire extinguisher distributor chennai',
    'fire extinguisher at best price chennai',
    // --- Fire fighting / wet riser ---
    'Fire Fighting Equipment Supplier',
    'fire fighting equipment supplier chennai',
    'fire fighting equipment distributor tamil nadu',
    'Wet Riser System Dealers in Chennai',
    'wet riser system supplier chennai',
    'wet riser system in chennai',
    // --- Get / Find / Near me ---
    'Get sprinkler in Chennai Tamil Nadu',
    'fire sprinkler near me chennai',
    'sprinkler near me',
    'sprinkler system near me chennai',
    // --- General location-first ---
    'sprinkler in chennai',
    'sprinkler in tamilnadu',
    'sprinkler in india',
    'sprinkler system in chennai',
    'sprinkler system in tamilnadu',
    'sprinkler system in india',
    'fire sprinkler in chennai',
    'fire sprinkler in tamilnadu',
    'fire sprinkler in india',
    'sprinkler company in chennai',
    'sprinkler installation chennai',
    'sprinkler contractor chennai',
    'fire sprinkler supplier india',
    'fire sprinkler supplier chennai',
    'fire sprinkler supplier tamil nadu',
    'fire and safety',
    'fire systems',
    'fire sprinklers',
    'sprinkler system',
    // --- Systems ---
    'suppression system',
    'preaction system',
    'pre pack system',
    'DDX PrePaK system',
    'gas suppression system',
    'tubing system',
    'electric panel tubing system',
    'kitchen suppression system',
    'general valve',
    // --- Sprinkler types ---
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
    // --- Brand ---
    'riser',
    'riser tech',
    'riser technologies',
    // --- Location ---
    'chennai',
    'tamil nadu',
    'tamil nadu india',
    // --- Reliable brand — authorized dealer exact-match ---
    'Reliable Dealer in Chennai',
    'reliable sprinkler dealer in chennai',
    'reliable authorized dealer in chennai',
    'reliable authorised dealer chennai',
    'authorized dealer for reliable sprinklers',
    'authorised dealer reliable sprinkler india',
    'reliable sprinkler authorized dealer',
    'reliable fire sprinkler authorized dealer chennai',
    'reliable fire safety equipment dealers in chennai',
    'reliable fire safety equipment dealers and contractors in chennai',
    'reliable fire sprinkler systems authorized dealers in chennai',
    'reliable fire sprinkler systems dealers india',
    'reliable fire system',
    'reliable fire system chennai',
    'reliable fire and safety',
    'reliable fire and safety chennai',
    'safety equipment reliable',
    'reliable solution fire safety',
    'genuine reliable sprinkler supplier',
    'reliable sprinkler manufacturer authorized partner',
    // --- Reliable brand general ---
    'reliable sprinkler india',
    'reliable fire sprinkler',
    'reliable sprinkler distributor india',
    'reliable sprinkler chennai',
    'reliable automatic sprinkler co india',
    'reliable automatic sprinkler company chennai',
    'reliable sprinkler usa india distributor',
    // --- Technical specification keywords (competitors rank for these) ---
    'Fire Sprinklers K5.6 Distributor in Chennai',
    'K5.6 sprinkler dealer chennai',
    'K5.6 fire sprinkler supplier india',
    'automatic fire sprinkler system chennai',
    'automatic fire sprinkler systems hydrants safety solutions',
    'fire sprinkler 57 degree 140 degree chennai',
    'fire sprinkler 68 degree 155 fahrenheit chennai',
    'fire sprinkler 12 bar working pressure',
    'brass sprinkler heads chennai',
    'brass pendent sprinkler heads',
    'pendent type fire sprinkler heads chennai',
    'flexible hose connections fire sprinkler',
    'horizontal sidewall sprinkler dealer chennai',
    'upright pendent sidewall concealed sprinkler supplier',
    'UL FM approved pendent upright sidewall ESFR concealed sprinklers',
    'design and technical assistance fire sprinkler',
    'sprinkler design consultation chennai',
    'fire sprinkler system design tamil nadu',
    'fire hydrant system chennai',
    'fire hydrant dealer in chennai',
    // --- Generic high-intent ---
    'fire sprinkler systems india',
    'ESFR sprinklers india',
    'UL Listed FM Approved fire sprinklers',
    'UL Listed FM Approved sprinklers and accessories',
    'UL FM approved sprinklers india',
    'commercial fire protection equipment india',
    'pre-action fire suppression system india',
    'warehouse fire protection system india',
    // --- Emerging verticals ---
    'lithium ion battery fire protection india',
    'EV gigafactory fire suppression india',
    'BESS fire protection system india',
    'data centre fire sprinkler system india',
    'cold storage fire protection india',
    // --- Local generic ---
    'fire safety Chennai',
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
