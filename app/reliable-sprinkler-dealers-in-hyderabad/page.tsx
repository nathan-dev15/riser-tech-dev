import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Sprinkler Dealers in Hyderabad | Reliable Fire Sprinkler Supplier Hyderabad — Riser Technologies',
  description:
    'Riser Technologies — Authorized Reliable Sprinkler Dealers in Hyderabad, Telangana. Official partner for Reliable Automatic Sprinkler Co. (USA). Genuine UL Listed, FM Approved fire sprinklers. Best price. Call +91 9787666104.',
  keywords: [
    'Reliable Sprinkler Dealers in Hyderabad',
    'reliable sprinkler dealer in hyderabad',
    'reliable fire sprinkler dealer hyderabad',
    'reliable sprinkler supplier hyderabad',
    'reliable authorized dealer hyderabad',
    'reliable fire sprinkler hyderabad',
    'reliable automatic sprinkler hyderabad',
    'reliable sprinkler distributor hyderabad',
    'genuine reliable sprinkler supplier hyderabad',
    'reliable sprinkler telangana',
  ],
  alternates: { canonical: '/reliable-sprinkler-dealers-in-hyderabad' },
  openGraph: {
    title: 'Reliable Sprinkler Dealers in Hyderabad | Riser Technologies',
    description: 'Official authorized dealer for Reliable Automatic Sprinkler Co. (USA) — supplying genuine Reliable fire sprinklers to Hyderabad and Telangana. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-sprinkler-dealers-in-hyderabad`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Who are the authorized Reliable sprinkler dealers in Hyderabad?',
    a: 'Riser Technologies (Chennai) is the officially authorized dealer for Reliable Automatic Sprinkler Co. (USA) in India and supplies to Hyderabad and Telangana. We serve fire protection contractors, pharmaceutical companies, IT campus builders, and industrial clients in Hyderabad.',
  },
  {
    q: 'Can I get genuine Reliable sprinklers in Hyderabad?',
    a: 'Yes. Riser Technologies supplies genuine Reliable sprinklers to Hyderabad from our Chennai distribution centre. All products are factory-fresh with UL/FM certifications and manufacturer warranty. Standard items are delivered to Hyderabad within 2–3 working days.',
  },
  {
    q: 'What Reliable sprinkler models are popular for Hyderabad pharmaceutical plants?',
    a: 'For Hyderabad\'s Genome Valley and Patancheru pharma facilities, the most specified Reliable products are: standard response pendent and upright sprinklers for general areas, quick-response concealed for clean rooms and offices, and the Reliable DDX pre-action system for sensitive lab and server environments.',
  },
  {
    q: 'Do you supply Reliable ESFR sprinklers for Hyderabad warehouses?',
    a: 'Yes. Reliable ESFR P22 and M336 models are in demand for Hyderabad\'s industrial corridors in Patancheru, Nandigama, Fab City, and Zaheerabad. We supply with free NFPA 13 hydraulic design support.',
  },
];

export default function ReliableSprinklerDealersHyderabadPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Sprinkler Dealers in Hyderabad', url: '/reliable-sprinkler-dealers-in-hyderabad' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Supplying Hyderabad &amp; Telangana
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable Sprinkler Dealers in Hyderabad
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is India\'s authorized dealer for{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong> — supplying
            genuine Reliable fire sprinklers to Hyderabad\'s pharma plants, IT campuses, data centres, warehouses,
            and high-rise projects. UL Listed &amp; FM Approved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              Get Hyderabad Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-amber-50 dark:bg-gray-800 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <Award className="w-14 h-14 text-amber-500 shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">India\'s Only Authorized Reliable Dealer</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Riser Technologies is Reliable Automatic Sprinkler Co.'s official Indian distribution partner. We supply genuine products to Hyderabad with manufacturer warranty and full UL/FM certification documentation — the only way to source authentic Reliable sprinklers in India.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable Sprinkler Dealers in Hyderabad — Riser Technologies</h2>
          <p>
            Riser Technologies, the authorized Indian distributor for <strong>Reliable Automatic Sprinkler Co. (USA)</strong>,
            supplies genuine Reliable fire sprinklers to Hyderabad and across Telangana and Andhra Pradesh. As one
            of India\'s most dynamic industrial and technology cities, Hyderabad\'s fire protection market demands the
            highest-quality, certified sprinkler products — and Reliable, supplied through Riser Technologies, is
            the preferred choice for discerning consultants and contractors in the city.
          </p>
          <h3>Reliable Products in High Demand in Hyderabad</h3>
          <ul>
            <li><strong>Reliable DDX Pre-Action System</strong> — for HITEC City, Gachibowli, and Cyberabad data centres and server rooms</li>
            <li><strong>Reliable ESFR P22 &amp; M336</strong> — for Patancheru, Fab City, and Nandigama warehouse and industrial projects</li>
            <li><strong>Reliable Standard Response Pendent &amp; Upright</strong> — for pharmaceutical plants in Genome Valley</li>
            <li><strong>Reliable Concealed Sprinklers</strong> — for hotels, hospitals, and corporate campuses across Hyderabad</li>
          </ul>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">FAQ — Reliable Sprinkler Dealers in Hyderabad</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-4 font-medium">Reliable dealers in other cities:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'Reliable Dealers Bangalore', href: '/reliable-sprinkler-dealers-in-bangalore' },
              { label: 'Reliable Dealers Coimbatore', href: '/reliable-sprinkler-dealers-in-coimbatore' },
              { label: 'Reliable Dealers India', href: '/reliable-sprinkler-dealers-india' },
              { label: 'Sprinkler Dealer Hyderabad', href: '/sprinkler-dealer-in-hyderabad' },
              { label: 'All Products', href: '/products' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-amber-600 hover:text-amber-700 underline underline-offset-2">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Dealers India', href: '/reliable-sprinkler-dealers-india' },
              { label: 'Sprinkler Dealer Hyderabad', href: '/sprinkler-dealer-in-hyderabad' },
              { label: 'Reliable Sprinkler Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'Sprinkler System Chennai', href: '/sprinkler-system-chennai' },
              { label: 'All Products', href: '/products' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-amber-600 hover:text-amber-700 underline underline-offset-2">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Get Genuine Reliable Sprinklers for Your Hyderabad Project</h2>
          <p className="text-slate-400 mb-8">From India\'s only authorized Reliable dealer — manufacturer warranty, UL/FM docs, free NFPA 13 design support.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="mailto:sanjeevi@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> sanjeevi@risertech.in
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
