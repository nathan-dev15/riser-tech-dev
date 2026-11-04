import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, Droplet, Star, MapPin , ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Sprinkler Dealers in India | Authorized Reliable Fire Sprinkler Distributor India — Riser Technologies',
  description:
    'Riser Technologies — India\'s only authorized dealer for Reliable Automatic Sprinkler Co. (USA). Genuine UL Listed, FM Approved Reliable fire sprinklers supplied pan-India. Best price, manufacturer warranty. Call +91 9787666104.',
  keywords: [
    'Reliable Sprinkler Dealers in India',
    'reliable sprinkler dealer india',
    'reliable fire sprinkler dealer india',
    'reliable sprinkler supplier india',
    'reliable authorized dealer india',
    'reliable automatic sprinkler india',
    'reliable sprinkler distributor india',
    'genuine reliable sprinkler india',
    'reliable fire sprinkler systems dealers india',
    'reliable automatic sprinkler co india',
    'reliable sprinkler authorized distributor india',
    'reliable fire sprinkler india price',
  ],
  alternates: { canonical: '/reliable-sprinkler-dealers-india' },
  openGraph: {
    title: 'Reliable Sprinkler Dealers in India | Riser Technologies',
    description: 'India\'s only authorized dealer for Reliable Automatic Sprinkler Co. (USA) — genuine UL/FM Approved Reliable fire sprinklers supplied pan-India. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-sprinkler-dealers-india`,
    type: 'website',
  },
};

const cities = [
  { city: 'Chennai', state: 'Tamil Nadu', href: '/reliable-sprinkler-dealers-in-chennai' },
  { city: 'Bangalore', state: 'Karnataka', href: '/reliable-sprinkler-dealers-in-bangalore' },
  { city: 'Hyderabad', state: 'Telangana', href: '/reliable-sprinkler-dealers-in-hyderabad' },
  { city: 'Coimbatore', state: 'Tamil Nadu', href: '/reliable-sprinkler-dealers-in-coimbatore' },
  { city: 'Mumbai', state: 'Maharashtra', href: '/sprinkler-dealer-in-mumbai' },
  { city: 'Pune', state: 'Maharashtra', href: '/sprinkler-dealer-in-mumbai' },
  { city: 'Delhi NCR', state: 'Delhi', href: '/contact' },
  { city: 'Kolkata', state: 'West Bengal', href: '/contact' },
  { city: 'Ahmedabad', state: 'Gujarat', href: '/contact' },
  { city: 'Visakhapatnam', state: 'Andhra Pradesh', href: '/sprinkler-dealer-in-hyderabad' },
];

const reliableProducts = [
  { name: 'Reliable Pendent Sprinklers', desc: 'Model G, F1 Fres+ — standard & quick-response pendent for commercial ceilings. K5.6, K8.0, K11.2.' },
  { name: 'Reliable ESFR Sprinklers', desc: 'P22 (K-11.2), M336 (K-14.0), JL14 (K-16.8), JL17 (K-19.6) for high-bay warehouses.' },
  { name: 'Reliable Concealed Sprinklers', desc: 'Flat-plate and domed concealed pendent for hotels, hospitals, and corporate offices.' },
  { name: 'Reliable DDX Pre-Action System', desc: 'Double-interlock pre-action for data centres, server rooms, and archives.' },
  { name: 'Reliable DDV Deluge Valve', desc: 'Deluge valve for high-hazard areas — aircraft hangars, transformer rooms, chemical stores.' },
  { name: 'Reliable LB11 Li-Ion Sprinkler', desc: 'World\'s first approved sprinkler for lithium-ion battery storage. EV, BESS & gigafactory applications.' },
];

const faqs = [
  {
    q: 'Who is the authorized Reliable sprinkler dealer in India?',
    a: 'Riser Technologies (Chennai) is Reliable Automatic Sprinkler Co.\'s officially appointed Indian distribution partner. We are the only authorized Reliable dealer in India, supplying genuine products to contractors, builders, and industrial clients across the country.',
  },
  {
    q: 'How can I buy genuine Reliable sprinklers in India?',
    a: 'Contact Riser Technologies at +91 9787666104 or sanjeevi@risertech.in. All Reliable products we supply are genuine, factory-fresh, and come with UL/FM certification documents, manufacturer warranty, and full installation data sheets. Beware of grey-market or uncertified "Reliable" sprinklers — they won\'t have manufacturer support.',
  },
  {
    q: 'Which cities does Riser Technologies supply Reliable sprinklers to in India?',
    a: 'We supply Reliable sprinklers pan-India — Chennai, Bangalore, Hyderabad, Coimbatore, Mumbai, Pune, Delhi, Kolkata, Ahmedabad, Visakhapatnam, and more. Standard stock items are dispatched from Chennai within 2–3 working days.',
  },
  {
    q: 'What is the price of Reliable sprinklers in India?',
    a: 'As the authorized Reliable dealer in India, Riser Technologies offers the most competitive pricing on genuine Reliable products. Contact us for a project-specific quote at +91 9787666104 or sanjeevi@risertech.in.',
  },
  {
    q: 'Is Reliable Automatic Sprinkler Co. a good brand for Indian fire projects?',
    a: 'Reliable Automatic Sprinkler Co. has over 100 years of manufacturing experience and is one of the most specified brands in Indian commercial and industrial fire protection. All products are UL Listed and FM Approved — the gold standard for Indian building authorities, insurance, and consulting engineers.',
  },
];

export default function ReliableSprinklerDealersIndiaPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Sprinkler Dealers in India', url: '/reliable-sprinkler-dealers-india' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-orange-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            India\'s Only Authorized Reliable Dealer · Pan-India Supply
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable Sprinkler Dealers in India
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is India\'s <strong className="text-amber-400">only authorized dealer</strong> for{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong> — the single
            source for genuine, warranty-backed Reliable fire sprinklers across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              Request India Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-amber-500 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: 'Pan-India', label: 'Supply' },
              { value: 'UL / FM', label: 'Approved Products' },
              { value: 'NFPA 13', label: 'Compliant Design' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl sm:text-2xl font-extrabold text-black">{s.value}</div>
                <div className="text-xs font-semibold text-black/70 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-amber-50 dark:bg-gray-800 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <Award className="w-14 h-14 text-amber-500 shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">India\'s Only Authorized Reliable Dealer</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Riser Technologies is Reliable Automatic Sprinkler Co.'s officially appointed distribution partner in India.
              Every product we supply is genuine, comes with manufacturer warranty, and is backed by UL/FM certification
              documentation — the only way to source authentic Reliable sprinklers in India.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Reliable Products We Supply Across India
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            Genuine Reliable Automatic Sprinkler Co. (USA) — UL Listed &amp; FM Approved — pan-India.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reliableProducts.map((p) => (
              <Link key={p.name} href="/products/sprinklers" className="group p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 hover:shadow-md transition-all">
                <Droplet className="w-6 h-6 text-amber-500 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-amber-600 transition-colors">{p.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Supplying Reliable Sprinklers Across India
          </h2>
          <p className="text-center text-gray-500 mb-10">From Chennai, we serve all major metros and industrial hubs nationwide.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {cities.map((c) => (
              <Link key={c.city} href={c.href} className="flex flex-col items-center gap-1 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors text-center group">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-amber-600">{c.city}</span>
                <span className="text-xs text-gray-400">{c.state}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable Sprinkler Dealers in India — Riser Technologies</h2>
          <p>
            Riser Technologies is the authorized Indian distributor for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong> — a 100-year-old American fire
            protection manufacturer trusted in over 60 countries and widely specified in India\'s
            commercial, industrial, and infrastructure projects. As Reliable\'s appointed Indian partner,
            we are the single authorized source for genuine Reliable products across the country, from
            standard pendent sprinklers to ESFR systems, DDX pre-action valves, and the LB11
            lithium-ion battery sprinkler.
          </p>
          <h3>Why Choose Riser Technologies for Reliable Sprinklers in India?</h3>
          <ul>
            <li><strong>Only authorized Reliable dealer in India</strong> — no grey-market risk, genuine manufacturer warranty</li>
            <li><strong>Complete product range</strong> — every Reliable SKU available, from residential to ESFR to specialty</li>
            <li><strong>Pan-India supply</strong> — dispatched from Chennai to all metros and industrial corridors</li>
            <li><strong>UL/FM documentation</strong> — full certification docs with every order, essential for Indian building authorities</li>
            <li><strong>Free NFPA 13 design support</strong> — hydraulic calculations and system design assistance</li>
          </ul>
          <h3>Who Uses Reliable Sprinklers in India?</h3>
          <p>
            Fire protection consultants, MEP contractors, builders, facility managers, and procurement teams
            across India specify Reliable sprinklers for data centres, pharmaceutical plants, logistics warehouses,
            high-rise residential, hospitals, hotels, EV battery facilities, and commercial complexes.
          </p>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">FAQ — Reliable Sprinkler Dealers in India</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  {faq.q}
                  <ChevronDown className="w-4 h-4 text-amber-500 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-4 font-medium">Reliable dealers by city:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Sprinkler Chennai', href: '/reliable-sprinkler-chennai' },
              { label: 'Reliable Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'Reliable ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
              { label: 'Reliable Concealed Sprinkler Chennai', href: '/reliable-concealed-sprinkler-chennai' },
              { label: 'Reliable Distributor Chennai', href: '/reliable-automatic-sprinkler-distributor-chennai' },
              { label: 'Reliable Dealers Tamil Nadu', href: '/reliable-sprinkler-dealer-tamil-nadu' },
              { label: 'Reliable Dealers Bangalore', href: '/reliable-sprinkler-dealers-in-bangalore' },
              { label: 'Reliable Dealers Hyderabad', href: '/reliable-sprinkler-dealers-in-hyderabad' },
              { label: 'Reliable Dealers Coimbatore', href: '/reliable-sprinkler-dealers-in-coimbatore' },
              { label: 'Fire Sprinkler Supplier India', href: '/fire-sprinkler-supplier-india' },
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
              { label: 'Reliable Sprinkler Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'Reliable Sprinkler Dealers Bangalore', href: '/reliable-sprinkler-dealers-in-bangalore' },
              { label: 'Reliable Sprinkler Dealers Hyderabad', href: '/reliable-sprinkler-dealers-in-hyderabad' },
              { label: 'Fire Sprinkler Supplier India', href: '/fire-sprinkler-supplier-india' },
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
          <Shield className="w-10 h-10 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Source Genuine Reliable Sprinklers for Your India Project</h2>
          <p className="text-slate-400 mb-8">From India\'s only authorized Reliable dealer — manufacturer warranty, UL/FM docs, free NFPA 13 design support, pan-India delivery.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="https://wa.me/919787666104" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-lg transition-colors">
              WhatsApp
            </Link>
            <Link href="mailto:sanjeevi@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> Email Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
