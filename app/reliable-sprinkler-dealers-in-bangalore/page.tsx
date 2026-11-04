import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Sprinkler Dealers in Bangalore | Reliable Fire Sprinkler Supplier Bengaluru — Riser Technologies',
  description:
    'Riser Technologies — Authorized Reliable Sprinkler Dealers in Bangalore (Bengaluru), Karnataka. Official partner for Reliable Automatic Sprinkler Co. (USA). Genuine UL Listed, FM Approved fire sprinklers. Call +91 9787666104.',
  keywords: [
    'Reliable Sprinkler Dealers in Bangalore',
    'reliable sprinkler dealer in bangalore',
    'reliable sprinkler dealer in bengaluru',
    'reliable fire sprinkler dealer bangalore',
    'reliable sprinkler supplier bangalore',
    'reliable authorized dealer bangalore',
    'reliable fire sprinkler bangalore',
    'reliable automatic sprinkler bangalore',
    'reliable sprinkler distributor bangalore',
    'genuine reliable sprinkler supplier bangalore',
  ],
  alternates: { canonical: '/reliable-sprinkler-dealers-in-bangalore' },
  openGraph: {
    title: 'Reliable Sprinkler Dealers in Bangalore | Riser Technologies',
    description: 'Official authorized dealer for Reliable Automatic Sprinkler Co. (USA) — supplying genuine Reliable fire sprinklers to Bangalore and Karnataka. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-sprinkler-dealers-in-bangalore`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Who are the authorized Reliable sprinkler dealers in Bangalore?',
    a: 'Riser Technologies (Chennai) is the officially authorized dealer for Reliable Automatic Sprinkler Co. (USA) in India and supplies to Bangalore. We are the only authorized Reliable partner in India, serving contractors, IT campus builders, pharmaceutical companies, and industrial clients in Bengaluru.',
  },
  {
    q: 'Can I get genuine Reliable sprinklers in Bangalore?',
    a: 'Yes. Riser Technologies supplies genuine Reliable sprinklers to Bangalore from our Chennai distribution centre. All products are factory-fresh with UL/FM certifications and manufacturer warranty. Standard items are delivered to Bangalore within 2–3 working days.',
  },
  {
    q: 'What Reliable sprinkler models are popular for Bangalore IT parks?',
    a: 'For Bangalore\'s IT parks and data centres, the most specified Reliable products are: concealed pendent sprinklers (Model G with cover plate) for offices, and the Reliable DDX pre-action system for data centres and server rooms in HITEC corridors like Whitefield, Electronic City, and Manyata Tech Park.',
  },
  {
    q: 'Do you supply Reliable ESFR sprinklers for Bangalore warehouses?',
    a: 'Yes. Reliable ESFR P22, M336, and JL14 models are in high demand for Bangalore\'s growing logistics parks in Hoskote, Bommasandra, and Whitefield industrial corridors. We supply with free NFPA 13 hydraulic design assistance.',
  },
];

export default function ReliableSprinklerDealersBangalorePage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Sprinkler Dealers in Bangalore', url: '/reliable-sprinkler-dealers-in-bangalore' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Supplying Bangalore &amp; Karnataka
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable Sprinkler Dealers in Bangalore
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is India\'s authorized dealer for{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong> — supplying
            genuine Reliable fire sprinklers to Bangalore\'s IT parks, data centres, warehouses, hospitals,
            and residential towers. UL Listed &amp; FM Approved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              Get Bangalore Quote
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
              Riser Technologies (Chennai) is Reliable Automatic Sprinkler Co.'s official Indian distribution partner. We supply to Bangalore with genuine products, UL/FM documentation, and manufacturer warranty — not grey-market imports.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable Sprinkler Dealers in Bangalore — Riser Technologies</h2>
          <p>
            Riser Technologies, the authorized Indian distributor for <strong>Reliable Automatic Sprinkler Co. (USA)</strong>,
            supplies genuine Reliable fire sprinklers to Bangalore and across Karnataka. For fire protection
            consultants, MEP contractors, and builders in Bengaluru who specify Reliable products, Riser Technologies
            is the single authorized source for the complete product range — from standard pendent sprinklers to ESFR,
            DDX pre-action systems, and the LB11 lithium-ion battery sprinkler.
          </p>
          <h3>Reliable Products in High Demand in Bangalore</h3>
          <ul>
            <li><strong>Reliable Model G Pendent &amp; Concealed</strong> — the standard for Bangalore\'s IT parks, corporate offices, and hospitality projects</li>
            <li><strong>Reliable DDX Pre-Action System</strong> — widely specified for Bangalore\'s data centres in Whitefield, Electronic City, and Manyata</li>
            <li><strong>Reliable ESFR P22 &amp; M336</strong> — for logistics parks in Hoskote, Bommasandra, and Dobaspet industrial corridors</li>
            <li><strong>Reliable Residential Sprinklers</strong> — for Bangalore\'s growing apartment and township projects</li>
          </ul>
          <h3>Service Coverage from Chennai to Bangalore</h3>
          <p>
            From our Chennai distribution hub, we supply Reliable products to Bangalore with 2–3 working day
            delivery on stocked items. We serve contractors and projects across Karnataka — Bangalore, Mysore,
            Hubli, Mangalore, and Belgaum.
          </p>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">FAQ — Reliable Sprinkler Dealers in Bangalore</h2>
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
              { label: 'Reliable Dealers Hyderabad', href: '/reliable-sprinkler-dealers-in-hyderabad' },
              { label: 'Reliable Dealers Coimbatore', href: '/reliable-sprinkler-dealers-in-coimbatore' },
              { label: 'Reliable Dealers India', href: '/reliable-sprinkler-dealers-india' },
              { label: 'Sprinkler Dealer Bangalore', href: '/sprinkler-dealer-in-bangalore' },
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
              { label: 'Sprinkler Dealer Bangalore', href: '/sprinkler-dealer-in-bangalore' },
              { label: 'Reliable Sprinkler Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'Sprinkler System Delhi', href: '/sprinkler-system-delhi' },
              { label: 'All Products', href: '/products' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-amber-600 hover:text-amber-700 underline underline-offset-2">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get Genuine Reliable Sprinklers for Your Bangalore Project</h2>
          <p className="text-slate-400 mb-8">From India\'s only authorized Reliable dealer — with manufacturer warranty, UL/FM docs, and free design support.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="mailto:sales@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> sales@risertech.in
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
