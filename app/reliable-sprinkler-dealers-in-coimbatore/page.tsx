import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Sprinkler Dealers in Coimbatore | Reliable Fire Sprinkler Supplier Coimbatore — Riser Technologies',
  description:
    'Riser Technologies — Authorized Reliable Sprinkler Dealers in Coimbatore, Tamil Nadu. Official partner for Reliable Automatic Sprinkler Co. (USA). Genuine UL Listed, FM Approved fire sprinklers. Best price. Call +91 9787666104.',
  keywords: [
    'Reliable Sprinkler Dealers in Coimbatore',
    'reliable sprinkler dealer in coimbatore',
    'reliable fire sprinkler dealer coimbatore',
    'reliable sprinkler supplier coimbatore',
    'reliable authorized dealer coimbatore',
    'reliable fire sprinkler coimbatore',
    'reliable automatic sprinkler coimbatore',
    'reliable sprinkler distributor coimbatore',
    'genuine reliable sprinkler supplier coimbatore',
    'reliable sprinkler tamil nadu',
  ],
  alternates: { canonical: '/reliable-sprinkler-dealers-in-coimbatore' },
  openGraph: {
    title: 'Reliable Sprinkler Dealers in Coimbatore | Riser Technologies',
    description: 'Official authorized dealer for Reliable Automatic Sprinkler Co. (USA) — supplying genuine Reliable fire sprinklers to Coimbatore and western Tamil Nadu. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-sprinkler-dealers-in-coimbatore`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Who are the authorized Reliable sprinkler dealers in Coimbatore?',
    a: 'Riser Technologies (Chennai) is the officially authorized dealer for Reliable Automatic Sprinkler Co. (USA) in India and supplies to Coimbatore and western Tamil Nadu. We serve fire protection contractors, textile mills, cold storage facilities, and commercial builders in Coimbatore.',
  },
  {
    q: 'Can I buy genuine Reliable sprinklers in Coimbatore?',
    a: 'Yes. Riser Technologies supplies genuine Reliable sprinklers from our Chennai distribution centre. All products are factory-fresh with UL/FM certifications and manufacturer warranty, delivered to Coimbatore in 2–3 working days on standard stocked items.',
  },
  {
    q: 'What Reliable sprinkler models are used in Coimbatore textile mills?',
    a: 'Coimbatore\'s textile mills typically use Reliable Standard Response upright and pendent sprinklers for high-hazard environments, with K-factor selections based on hydraulic design. Standard Response (RTI ≥80) models in fusible link or glass bulb with temperature ratings of 68°C–93°C are most common.',
  },
  {
    q: 'Do you supply Reliable ESFR sprinklers for Coimbatore industrial estates?',
    a: 'Yes. ESFR sprinklers are increasingly required for high-bay warehouses in Coimbatore\'s SIPCOT, Peelamedu, and Kurichi industrial estates. Reliable ESFR P22 (K-11.2) and M336 (K-14.0) are the standard models we supply.',
  },
];

export default function ReliableSprinklerDealersCoimbatorePage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Sprinkler Dealers in Coimbatore', url: '/reliable-sprinkler-dealers-in-coimbatore' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Supplying Coimbatore &amp; Western Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable Sprinkler Dealers in Coimbatore
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is India\'s authorized dealer for{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong> — supplying
            genuine Reliable fire sprinklers to Coimbatore\'s textile mills, industrial estates, cold storage
            facilities, hospitals, and commercial projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              Get Coimbatore Quote
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
              Riser Technologies is Reliable Automatic Sprinkler Co.'s official Indian distribution partner. Chennai–Coimbatore
              route allows fast delivery — standard items in 2–3 working days with manufacturer warranty and full UL/FM documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable Sprinkler Dealers in Coimbatore — Riser Technologies</h2>
          <p>
            Riser Technologies, the authorized Indian distributor for <strong>Reliable Automatic Sprinkler Co. (USA)</strong>,
            supplies genuine Reliable fire sprinklers to Coimbatore and across western Tamil Nadu including Tiruppur,
            Erode, Salem, and Pollachi. As the industrial capital of Tamil Nadu — with its textile mills, engineering
            companies, cold chain facilities, and growing IT sector — Coimbatore has sustained demand for the highest-quality,
            certified fire sprinklers, and Reliable through Riser Technologies is the standard choice.
          </p>
          <h3>Reliable Products in Demand in Coimbatore</h3>
          <ul>
            <li><strong>Reliable Standard Response Pendent &amp; Upright</strong> — for textile mills, spinning units, and manufacturing in Coimbatore</li>
            <li><strong>Reliable ESFR P22 &amp; M336</strong> — for SIPCOT, Peelamedu, and Kurichi warehouse projects</li>
            <li><strong>Reliable Concealed Sprinklers</strong> — for Coimbatore\'s hospitals, hotels, and IT offices</li>
            <li><strong>Reliable Residential Sprinklers</strong> — for Coimbatore\'s growing apartment market</li>
          </ul>
          <h3>Also Covering Tiruppur, Erode &amp; Salem</h3>
          <p>
            From our Chennai base, we supply Reliable sprinklers to the entire western Tamil Nadu industrial belt —
            Coimbatore, Tiruppur\'s knitwear factories, Erode\'s textile mills, and Salem\'s steel and manufacturing sector.
          </p>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">FAQ — Reliable Sprinkler Dealers in Coimbatore</h2>
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
              { label: 'Reliable Dealers Hyderabad', href: '/reliable-sprinkler-dealers-in-hyderabad' },
              { label: 'Reliable Dealers India', href: '/reliable-sprinkler-dealers-india' },
              { label: 'Sprinkler Dealer Coimbatore', href: '/sprinkler-dealer-in-coimbatore' },
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
              { label: 'Reliable Sprinkler Dealer Tamil Nadu', href: '/reliable-sprinkler-dealer-tamil-nadu' },
              { label: 'Sprinkler Dealer Coimbatore', href: '/sprinkler-dealer-in-coimbatore' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get Genuine Reliable Sprinklers for Your Coimbatore Project</h2>
          <p className="text-slate-400 mb-8">From India\'s only authorized Reliable dealer — manufacturer warranty, UL/FM docs, free NFPA 13 design support.</p>
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
