import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema , FAQPageSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Droplet, Star , ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Sprinkler Dealers in Chennai | Reliable Authorized Dealer Chennai — Riser Technologies',
  description:
    'Riser Technologies — Authorized Reliable Sprinkler Dealers in Chennai. Official Indian partner for Reliable Automatic Sprinkler Co. (USA). Genuine UL Listed, FM Approved Reliable fire sprinklers at best price. Call +91 9787666104.',
  keywords: [
    'Reliable Sprinkler Dealers in Chennai',
    'reliable sprinkler dealer in chennai',
    'reliable fire sprinkler dealer chennai',
    'reliable authorized dealer in chennai',
    'reliable authorised dealer chennai',
    'reliable sprinkler authorized dealer chennai',
    'reliable fire sprinkler authorized dealer chennai',
    'reliable fire sprinkler systems authorized dealers in chennai',
    'reliable fire safety equipment dealers in chennai',
    'reliable fire safety equipment dealers and contractors in chennai',
    'reliable fire system chennai',
    'reliable fire and safety chennai',
    'reliable automatic sprinkler co india',
    'reliable automatic sprinkler company chennai',
    'reliable sprinkler india',
    'genuine reliable sprinkler supplier',
    'reliable sprinkler manufacturer authorized partner',
    'reliable fire sprinkler systems dealers india',
    'reliable UL FM sprinkler Chennai',
    'reliable UL listed sprinkler Chennai',
    'reliable FM approved sprinkler Chennai',
    'UL FM approved reliable sprinkler Chennai',
    'reliable fire sprinkler UL FM Chennai',
  ],
  alternates: { canonical: '/reliable-sprinkler-dealers-in-chennai' },
  openGraph: {
    title: 'Reliable Sprinkler Dealers in Chennai | Riser Technologies',
    description:
      'Official authorized dealer for Reliable Automatic Sprinkler Co. (USA) in Chennai. Genuine UL/FM Approved Reliable sprinklers with manufacturer warranty. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-sprinkler-dealers-in-chennai`,
    type: 'website',
  },
};

const reliableProducts = [
  { name: 'Reliable Pendent Sprinklers', desc: 'Model G, F1 Fres+ — standard & quick-response pendent sprinklers for commercial ceilings. K5.6, K8.0, K11.2.' },
  { name: 'Reliable ESFR Sprinklers', desc: 'P22 (K-11.2), M336 (K-14.0), JL14 (K-16.8), JL17 (K-19.6) — for warehouses and high-bay storage.' },
  { name: 'Reliable Concealed Sprinklers', desc: 'Flat-plate and domed concealed pendent sprinklers for hotels, hospitals, and corporate offices.' },
  { name: 'Reliable DDX Pre-Action System', desc: 'Double-interlock pre-action valve system for data centres, server rooms, and archives.' },
  { name: 'Reliable DDV Deluge Valve', desc: 'Deluge valve system for high-hazard areas — aircraft hangars, transformer rooms, chemical stores.' },
  { name: 'Reliable LB11 Li-Ion Sprinkler', desc: 'World\'s first sprinkler specifically approved for lithium-ion battery storage. EV, BESS & gigafactory applications.' },
];

const faqs = [
  {
    q: 'Who are the authorized Reliable sprinkler dealers in Chennai?',
    a: 'Riser Technologies is the official authorized dealer and distributor for Reliable Automatic Sprinkler Co. (USA) in Chennai and across India. We are Reliable\'s appointed Indian partner, supplying genuine products directly from the manufacturer to contractors, builders, and industrial clients in Chennai and Tamil Nadu.',
  },
  {
    q: 'How do I verify Riser Technologies is an authorized Reliable dealer in Chennai?',
    a: 'You can verify our authorization by contacting Reliable Automatic Sprinkler Co. directly at reliablesprinkler.com or requesting our official authorization letter, which we provide with every project order.',
  },
  {
    q: 'What Reliable sprinkler products are available in Chennai?',
    a: 'We supply the complete Reliable portfolio in Chennai: fire sprinkler heads (pendent, upright, concealed, sidewall, ESFR, residential, dry-barrel, LB11 lithium-ion), system valves (alarm check, dry-pipe, DDV deluge, DDX pre-action), grooved fittings, and all accessories.',
  },
  {
    q: 'What is the price of Reliable sprinklers in Chennai?',
    a: 'As the authorized Reliable dealer in Chennai, Riser Technologies offers the most competitive pricing on genuine Reliable products — no grey market markup, no counterfeit risk. Contact us at +91 9787666104 or sanjeevi@risertech.in for a project-specific quote.',
  },
  {
    q: 'What makes Reliable sprinklers better than other brands?',
    a: 'Reliable Automatic Sprinkler Co. has over 100 years of manufacturing experience. All products are made at a single advanced facility in Liberty, South Carolina — with rigorous QA, UL Listing, and FM Approval at every stage. Models like the ESFR P22 and DDX pre-action are among the most widely specified in Indian commercial and industrial projects.',
  },
];

export default function ReliableSprinklerDealersChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Sprinkler Dealers in Chennai', url: '/reliable-sprinkler-dealers-in-chennai' },
      ]} />
      <FAQPageSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />


      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Official Authorized Partner · Reliable Automatic Sprinkler Co. (USA)
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable Sprinkler Dealers in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is Chennai's <strong className="text-amber-400">officially authorized dealer</strong> for{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong> — supplying
            genuine UL Listed &amp; FM Approved Reliable fire sprinklers across Chennai, Tamil Nadu,
            and India at best price.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-amber-500 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '12+', label: 'Years in Chennai' },
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


      {/* Authorization badge */}
      <section className="py-10 bg-amber-50 dark:bg-gray-800 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <Award className="w-14 h-14 text-amber-500 shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Riser Technologies — Authorized Reliable Dealer in Chennai
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                We are the <strong>official authorized dealer and distributor</strong> for Reliable Automatic Sprinkler
                Co. (USA) in India — the only way to purchase genuine, warranty-backed Reliable products in Chennai.
                All products come with manufacturer certification documents, UL/FM test reports, and installation
                data sheets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Reliable Sprinkler Products We Supply in Chennai
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Genuine Reliable Automatic Sprinkler Co. (USA) — UL Listed &amp; FM Approved — directly from the authorized dealer.
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
          <div className="text-center mt-8">
            <Link href="/products" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              View Full Reliable Product Range
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Authorized Reliable Sprinkler Dealers in Chennai — Riser Technologies</h2>
          <p>
            Riser Technologies is Chennai's official authorized dealer for{' '}
            <strong>Reliable Automatic Sprinkler Co.</strong> — a 100-year-old American fire
            protection manufacturer trusted in over 60 countries. As Reliable's appointed Indian
            distribution partner, we bring genuine UL Listed and FM Approved Reliable products to
            projects across Chennai, Tamil Nadu, and India — backed by manufacturer warranty,
            full certification documentation, and expert technical support.
          </p>
          <h3>Why Specify Reliable Sprinklers for Your Chennai Project?</h3>
          <ul>
            <li><strong>100+ years of fire protection excellence</strong> — Reliable has been manufacturing sprinklers since 1920</li>
            <li><strong>Single manufacturing facility</strong> — all products made at their Liberty, South Carolina plant with strict QA</li>
            <li><strong>UL Listed &amp; FM Approved</strong> — the gold standard for insurance, consulting engineers, and building authority approvals</li>
            <li><strong>Full product range</strong> — from residential to ESFR to specialized (LB11 lithium-ion, DDX pre-action)</li>
            <li><strong>LPCB certified</strong> products available for projects requiring British Standards compliance</li>
          </ul>
          <h3>Who Uses Reliable Sprinklers in Chennai?</h3>
          <p>
            Fire protection consultants, MEP contractors, builders, and facility managers in Chennai
            specify Reliable sprinklers for data centres, pharmaceutical plants, logistics warehouses,
            high-rise residential, hospitals, hotels, and commercial complexes. As the authorized
            dealer in Chennai, Riser Technologies is the single source for all Reliable products and
            technical documentation.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">FAQ — Reliable Sprinkler Dealers in Chennai</h2>
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

      {/* Internal links */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Reliable dealers in other cities:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Sprinkler Chennai', href: '/reliable-sprinkler-chennai' },
              { label: 'Reliable ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
              { label: 'Reliable Concealed Sprinkler Chennai', href: '/reliable-concealed-sprinkler-chennai' },
              { label: 'Reliable Distributor Chennai', href: '/reliable-automatic-sprinkler-distributor-chennai' },
              { label: 'Reliable Dealers Tamil Nadu', href: '/reliable-sprinkler-dealer-tamil-nadu' },
              { label: 'Reliable Dealers Bangalore', href: '/reliable-sprinkler-dealers-in-bangalore' },
              { label: 'Reliable Dealers Hyderabad', href: '/reliable-sprinkler-dealers-in-hyderabad' },
              { label: 'Reliable Dealers Coimbatore', href: '/reliable-sprinkler-dealers-in-coimbatore' },
              { label: 'Reliable Dealers India', href: '/reliable-sprinkler-dealers-india' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
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
              { label: 'Reliable ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
              { label: 'Sprinkler System Chennai', href: '/sprinkler-system-chennai' },
              { label: 'Reliable Sprinkler Chennai', href: '/reliable-sprinkler-chennai' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Buy Genuine Reliable Sprinklers in Chennai</h2>
          <p className="text-slate-400 mb-8">Only from the authorized dealer — with manufacturer warranty, UL/FM documentation, and free NFPA 13 design support.</p>
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
