import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Droplet, Warehouse } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ESFR Sprinkler Dealer in Chennai | ESFR Sprinkler Supplier Tamil Nadu — Riser Technologies',
  description:
    'Riser Technologies — Authorized ESFR Sprinkler Dealer in Chennai, Tamil Nadu. Reliable ESFR P22, M336, JL14 sprinklers for warehouses, cold storage & high-bay facilities. UL Listed, FM Approved. Best price. Call +91 9787666104.',
  keywords: [
    'ESFR Sprinkler Dealer in Chennai',
    'esfr sprinkler dealer in chennai',
    'ESFR Sprinkler Supplier in Chennai',
    'esfr sprinkler supplier in chennai',
    'esfr sprinkler distributor chennai',
    'esfr sprinkler price in chennai',
    'early suppression fast response sprinkler chennai',
    'warehouse sprinkler dealer chennai',
    'storage sprinkler supplier in chennai',
    'high bay warehouse sprinkler dealer chennai',
    'cold storage sprinkler supplier chennai',
    'ESFR sprinklers india',
    'reliable esfr sprinkler india',
    'esfr sprinkler nfpa 13 chennai',
  ],
  alternates: {
    canonical: '/esfr-sprinkler-dealer-in-chennai',
  },
  openGraph: {
    title: 'ESFR Sprinkler Dealer in Chennai | Riser Technologies',
    description:
      'Authorized dealer for Reliable ESFR sprinklers in Chennai. P22, M336, JL14 models for warehouses and cold storage. UL Listed, FM Approved. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/esfr-sprinkler-dealer-in-chennai`,
    type: 'website',
  },
};

const esfrModels = [
  {
    name: 'Reliable ESFR P22',
    desc: 'K-factor K-200 (K-11.2). The most widely used ESFR model in India for general purpose warehouses storing Class I–IV commodities up to 12 m storage height.',
  },
  {
    name: 'Reliable ESFR M336',
    desc: 'K-factor K-240 (K-14.0). High-flow ESFR for warehouses with palletized storage up to 13.7 m. Ideal for high-clearance logistics centres.',
  },
  {
    name: 'Reliable ESFR JL14',
    desc: 'K-factor K-285 (K-16.8). Covers Class IV and Group A plastics in high-rack storage up to 12 m. Reduces pump and pipe sizing costs.',
  },
  {
    name: 'Reliable ESFR JL17',
    desc: 'K-factor K-320 (K-19.6). High-challenge storage. Used for cartoned unexpanded plastic commodities and EV battery storage.',
  },
];

const faqs = [
  {
    q: 'What is an ESFR sprinkler and when is it required?',
    a: 'ESFR (Early Suppression Fast Response) sprinklers are high-flow sprinklers designed to suppress warehouse fires at the point of ignition before they spread. They are required by NFPA 13 for warehouses with storage heights above 4.5 metres. ESFR eliminates the need for expensive in-rack sprinklers.',
  },
  {
    q: 'Which ESFR sprinkler model should I use for my Chennai warehouse?',
    a: 'The right model depends on storage height, commodity class (I–IV, plastics), and ceiling height. The Reliable P22 (K-11.2) covers most general warehouses up to 12 m storage height. For taller or more challenging storage, M336, JL14, or JL17 may be required. Contact Riser Technologies for a free NFPA 13 design review.',
  },
  {
    q: 'What is the price of ESFR sprinklers in Chennai?',
    a: 'ESFR sprinkler prices in Chennai depend on the model (K-factor) and quantity. As the authorized Reliable dealer in Chennai, Riser Technologies offers the most competitive ESFR pricing in Tamil Nadu. Call +91 9787666104 or email sanjeevi@risertech.in for a project quote.',
  },
  {
    q: 'Do ESFR sprinklers work for cold storage in Chennai?',
    a: 'Yes. Reliable Dry Barrel ESFR sprinklers are specifically designed for cold storage and freezer environments where wet-pipe systems would freeze. Riser Technologies supplies dry-barrel ESFR models for cold chain warehouses across Chennai and Tamil Nadu.',
  },
  {
    q: 'Can I replace my in-rack sprinklers with ESFR ceiling sprinklers?',
    a: 'Yes — this is one of the main benefits of ESFR. When correctly specified per NFPA 13, ESFR ceiling sprinklers can protect high-bay racking systems without in-rack sprinkler heads, significantly reducing installation and maintenance costs.',
  },
];

export default function ESFRSprinklerDealerChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'ESFR Sprinkler Dealer in Chennai', url: '/esfr-sprinkler-dealer-in-chennai' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Warehouse className="w-3.5 h-3.5" />
            Warehouse & Cold Storage Specialist · Chennai
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            ESFR Sprinkler Dealer in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies <strong className="text-amber-400">Reliable ESFR sprinklers</strong> — P22, M336, JL14, JL17 — to warehouses, cold storage facilities, and high-bay industrial plants in Chennai and Tamil Nadu. UL Listed, FM Approved, NFPA 13 compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="tel:+919787666104"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 9787666104
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors"
            >
              Get ESFR Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ESFR Models */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Reliable ESFR Sprinkler Models We Supply in Chennai
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            All models are UL Listed and FM Approved. Contact us for model selection assistance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {esfrModels.map((m) => (
              <div
                key={m.name}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <Droplet className="w-6 h-6 text-amber-500 mb-2" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{m.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products/sprinklers"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View All Sprinkler Products
            </Link>
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>ESFR Sprinkler Dealer in Chennai — Riser Technologies</h2>
          <p>
            Riser Technologies is Chennai's authorized <strong>ESFR sprinkler dealer</strong> and
            distributor, supplying Reliable's complete range of Early Suppression Fast Response
            sprinklers for warehouses, logistics parks, cold storage, and high-bay industrial
            facilities across Tamil Nadu and India. As the official Reliable partner in Chennai, we
            offer genuine ESFR models at competitive pricing with NFPA 13 design support.
          </p>
          <h3>What is ESFR and Why Do Warehouses in Chennai Need It?</h3>
          <p>
            ESFR (Early Suppression Fast Response) sprinklers are engineered to deliver a large
            volume of water quickly — suppressing a warehouse fire at its source before it can grow.
            In Chennai and Tamil Nadu, as large logistics parks, cold chain warehouses, and
            e-commerce fulfilment centres continue to expand, ESFR has become the standard for
            buildings with storage exceeding 4.5 metres under NFPA 13.
          </p>
          <p>
            The key advantage: a correctly designed ESFR ceiling system{' '}
            <strong>eliminates the need for in-rack sprinklers</strong>, which are expensive to
            install, maintain, and modify when racking layouts change.
          </p>
          <h3>ESFR Sprinkler Applications in Chennai &amp; Tamil Nadu</h3>
          <ul>
            <li>Logistics and distribution centres (e-commerce, 3PL)</li>
            <li>Cold storage and freezer warehouses</li>
            <li>High-bay pallet rack storage facilities</li>
            <li>Industrial manufacturing plants with high commodity storage</li>
            <li>EV battery manufacturing and storage (LB11 for lithium-ion)</li>
            <li>Automated storage and retrieval systems (ASRS)</li>
            <li>Bonded warehouses and customs storage</li>
          </ul>
          <h3>ESFR Design — Free Technical Assistance in Chennai</h3>
          <p>
            Riser Technologies provides free NFPA 13 hydraulic design assistance for ESFR systems.
            Share your warehouse dimensions, racking height, commodity class, and ceiling height and
            our team will recommend the right ESFR model, density, and system design — at no charge.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            FAQ — ESFR Sprinkler Dealer in Chennai
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
              { label: 'Automatic Sprinkler System Chennai', href: '/automatic-sprinkler-system-chennai' },
              { label: 'Sprinkler System Chennai', href: '/sprinkler-system-chennai' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Reliable Sprinkler Chennai', href: '/reliable-sprinkler-chennai' },
              { label: 'All Products', href: '/products' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-amber-600 hover:text-amber-700 underline underline-offset-2">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need ESFR Sprinklers for Your Warehouse in Chennai?
          </h2>
          <p className="text-slate-400 mb-8">
            Get genuine Reliable ESFR sprinklers with free NFPA 13 design support from Chennai's
            authorized dealer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919787666104"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call +91 9787666104
            </Link>
            <Link
              href="mailto:sanjeevi@risertech.in"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
              sanjeevi@risertech.in
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
