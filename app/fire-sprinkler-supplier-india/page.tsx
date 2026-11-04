import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Droplet, Globe, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fire Sprinkler Supplier India | Authorized Reliable Sprinkler Dealer India — Riser Technologies',
  description:
    'Riser Technologies — Authorized Fire Sprinkler Supplier in India for Reliable Automatic Sprinkler Co. (USA). UL Listed, FM Approved fire sprinklers supplied pan-India. ESFR, pendent, upright, concealed sprinklers. Best price. Call +91 9787666104.',
  keywords: [
    'fire sprinkler supplier india',
    'fire sprinkler supplier in india',
    'sprinkler dealer in india',
    'sprinkler supplier india',
    'fire sprinkler systems india',
    'reliable sprinkler india',
    'reliable fire sprinkler india',
    'reliable automatic sprinkler co india',
    'reliable sprinkler authorized dealer india',
    'authorized reliable sprinkler dealer india',
    'authorised dealer reliable sprinkler india',
    'reliable sprinkler distributor india',
    'fire sprinkler distributor india',
    'ESFR sprinklers india',
    'UL Listed FM Approved fire sprinklers india',
    'UL FM approved sprinklers india',
    'commercial fire protection equipment india',
    'fire sprinkler systems in india',
    'fire sprinkler supplier chennai',
    'fire sprinkler supplier tamil nadu',
  ],
  alternates: {
    canonical: '/fire-sprinkler-supplier-india',
  },
  openGraph: {
    title: 'Fire Sprinkler Supplier India | Riser Technologies',
    description:
      'Authorized Indian supplier of Reliable Fire Sprinklers (USA). Pan-India supply of UL Listed, FM Approved fire sprinklers. Chennai base, nationwide reach. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/fire-sprinkler-supplier-india`,
    type: 'website',
  },
};

const cities = [
  'Chennai', 'Bangalore', 'Hyderabad', 'Mumbai', 'Pune',
  'Delhi NCR', 'Coimbatore', 'Ahmedabad', 'Kolkata', 'Surat',
  'Madurai', 'Trichy', 'Kochi', 'Mysore', 'Visakhapatnam',
];

const products = [
  {
    name: 'Pendent Sprinklers',
    desc: 'Standard & quick-response pendent sprinklers for offices, malls, and commercial buildings across India. K5.6, K8.0, K11.2.',
  },
  {
    name: 'ESFR Sprinklers',
    desc: 'P22, M336, JL14, JL17 models for India\'s high-bay warehouses and logistics parks. The standard for NFPA 13 warehouse protection.',
  },
  {
    name: 'Concealed Sprinklers',
    desc: 'Flat-plate concealed pendent sprinklers for hotels, hospitals, corporate campuses, and high-end residential in India.',
  },
  {
    name: 'Pre-Action Systems (DDX)',
    desc: 'Reliable DDX pre-action valve for data centres, server rooms, and archives across India where accidental discharge must be prevented.',
  },
  {
    name: 'Residential Sprinklers',
    desc: 'UL Listed residential sprinklers for India\'s growing apartment and township market. NFPA 13D and NBC compliant.',
  },
  {
    name: 'LB11 Lithium-Ion Sprinkler',
    desc: 'Reliable LB11 — the world\'s first sprinkler approved specifically for lithium-ion battery storage. EV, BESS & gigafactory applications.',
  },
];

const faqs = [
  {
    q: 'Who is the authorized Reliable fire sprinkler supplier in India?',
    a: 'Riser Technologies, based in Chennai, is the authorized Indian distribution partner for Reliable Automatic Sprinkler Co. (USA). We are the official Reliable dealer supplying genuine UL Listed and FM Approved sprinklers to contractors, builders, and industrial clients across India.',
  },
  {
    q: 'Which cities in India does Riser Technologies supply fire sprinklers to?',
    a: 'From our Chennai distribution hub, we supply fire sprinklers to all major cities across India — Chennai, Bangalore, Hyderabad, Mumbai, Pune, Delhi NCR, Ahmedabad, Kolkata, Coimbatore, Kochi, Visakhapatnam, and all industrial corridors and special economic zones.',
  },
  {
    q: 'What Reliable sprinkler products are available in India?',
    a: 'We supply the full Reliable product portfolio in India: fire sprinkler heads (pendent, upright, concealed, sidewall, ESFR, residential, dry-barrel), system valves (alarm check, dry-pipe, deluge DDV, pre-action DDX), grooved fittings, OS&Y and butterfly valves, and the LB11 lithium-ion battery sprinkler.',
  },
  {
    q: 'Are Reliable sprinklers compliant with Indian building codes?',
    a: 'Yes. Reliable sprinklers are UL Listed and FM Approved, meeting the fire protection requirements of NFPA 13, NBC (National Building Code of India), IS 15105, and TAC (Tariff Advisory Committee) specifications for insurance compliance.',
  },
  {
    q: 'How can I get a price quote for fire sprinklers in India?',
    a: 'Contact Riser Technologies at +91 9787666104 or sales@risertech.in with your project details — building type, area, occupancy, and city. We provide free BOQ preparation and competitive project pricing across India.',
  },
  {
    q: 'Do you supply ESFR sprinklers for warehouses across India?',
    a: 'Yes. With logistics parks and warehouses growing in every major Indian city, ESFR sprinkler demand has surged. We supply Reliable ESFR models to warehouse projects across India and provide free NFPA 13 hydraulic design for ESFR systems.',
  },
];

export default function FireSprinklerSupplierIndiaPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Fire Sprinkler Supplier India', url: '/fire-sprinkler-supplier-india' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Globe className="w-3.5 h-3.5" />
            Authorized Reliable Sprinkler Co. (USA) Partner · Pan-India Supply
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Fire Sprinkler Supplier in India
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is India\'s authorized supplier for{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong> —
            supplying genuine UL Listed &amp; FM Approved fire sprinklers to contractors, builders,
            and industrial clients across the country. Chennai-based, pan-India reach.
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
              Get India-wide Quote
            </Link>
          </div>
        </div>
      </section>

      {/* City coverage */}
      <section className="py-10 bg-amber-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-black font-semibold mb-4 text-sm">
            Supplying fire sprinklers across India — cities we serve:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map((city) => (
              <span
                key={city}
                className="bg-black/10 text-black font-medium text-sm px-3 py-1 rounded-full"
              >
                {city}
              </span>
            ))}
            <span className="bg-black/10 text-black font-medium text-sm px-3 py-1 rounded-full">
              + All India
            </span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Fire Sprinkler Products Supplied Across India
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Genuine Reliable Automatic Sprinkler Co. (USA) — UL Listed &amp; FM Approved.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link
                key={p.name}
                href="/products/sprinklers"
                className="group p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 hover:shadow-md transition-all"
              >
                <Droplet className="w-6 h-6 text-amber-500 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-amber-600 transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{p.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View Full Product Range
            </Link>
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Authorized Fire Sprinkler Supplier in India — Riser Technologies</h2>
          <p>
            Riser Technologies is India\'s authorized distribution partner for{' '}
            <strong>Reliable Automatic Sprinkler Co.</strong> — a 100-year-old American fire
            protection manufacturer with a global reputation for UL Listed and FM Approved sprinkler
            products. From our Chennai headquarters, we supply the complete Reliable product range to
            fire protection contractors, MEP firms, builders, and industrial clients across all major
            Indian cities.
          </p>
          <p>
            India\'s construction boom — in warehousing, data centres, pharmaceuticals, EV
            manufacturing, and high-rise residential — has dramatically increased demand for
            certified, international-grade fire sprinkler systems. Riser Technologies brings the
            world\'s best sprinkler technology to Indian projects, backed by manufacturer
            authorization, technical expertise, and competitive pricing.
          </p>
          <h3>Why Reliable Sprinklers for India?</h3>
          <ul>
            <li>100+ years of manufacturing experience — trusted in 60+ countries</li>
            <li>All products UL Listed and FM Approved — the gold standard for fire protection</li>
            <li>Manufactured at a single advanced facility in Liberty, South Carolina, USA — strict quality control</li>
            <li>Full product range: residential to industrial to specialized (LB11 for lithium-ion, DDX for data centres)</li>
            <li>Compliant with NFPA 13, IS 15105, NBC, and TAC requirements in India</li>
          </ul>
          <h3>Fire Sprinkler Applications We Supply to Across India</h3>
          <ul>
            <li><strong>IT Parks &amp; Data Centres</strong> — concealed sprinklers, DDX pre-action systems (Bangalore, Hyderabad, Pune, Chennai)</li>
            <li><strong>Warehouses &amp; Logistics Parks</strong> — ESFR sprinklers for high-bay storage (all major industrial corridors)</li>
            <li><strong>EV Manufacturing &amp; BESS</strong> — LB11 lithium-ion sprinklers for Gigafactories and battery storage</li>
            <li><strong>Residential High-Rise</strong> — residential pendent and concealed sprinklers for apartment projects</li>
            <li><strong>Hospitals &amp; Pharma</strong> — quick-response concealed sprinklers for sensitive environments</li>
            <li><strong>Cold Storage</strong> — dry-barrel ESFR and standard dry-pipe systems for refrigerated warehouses</li>
            <li><strong>Hotels &amp; Hospitality</strong> — decorative concealed sprinklers for hospitality projects</li>
          </ul>
          <h3>How We Supply Fire Sprinklers Across India</h3>
          <p>
            From our Chennai distribution hub, Riser Technologies coordinates delivery to project
            sites across India via trusted logistics partners. Standard stocked items ship within
            2–3 working days. For large project orders, we provide staging and phased delivery to
            match your construction schedule. Our sales team can be reached 6 days a week for
            pricing, availability, and technical queries.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            FAQ — Fire Sprinkler Supplier in India
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

      {/* Internal links */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">City-specific pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Sprinkler Dealer in Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Sprinkler Dealer in Bangalore', href: '/sprinkler-dealer-in-bangalore' },
              { label: 'Sprinkler Dealer in Coimbatore', href: '/sprinkler-dealer-in-coimbatore' },
              { label: 'ESFR Sprinkler Dealer Chennai', href: '/esfr-sprinkler-dealer-in-chennai' },
              { label: 'Authorized Distributor Chennai', href: '/authorized-sprinkler-distributor-in-chennai' },
              { label: 'Fire Sprinkler System Dealers Chennai', href: '/fire-sprinkler-system-dealers-in-chennai' },
              { label: 'All Products', href: '/products' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-amber-600 hover:text-amber-700 underline underline-offset-2"
              >
                {l.label}
              </Link>
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
              { label: 'Sprinkler System Chennai', href: '/sprinkler-system-chennai' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Fire Sprinkler System Dealers Chennai', href: '/fire-sprinkler-system-dealers-in-chennai' },
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
            India\'s Authorized Reliable Sprinkler Supplier
          </h2>
          <p className="text-slate-400 mb-8">
            Get genuine UL Listed fire sprinklers for your project anywhere in India. Fast delivery,
            competitive pricing, free NFPA 13 design support.
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
              href="mailto:sales@risertech.in"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
              sales@risertech.in
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
