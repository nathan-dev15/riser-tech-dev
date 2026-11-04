import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Star, Droplet, Building2, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sprinkler System Chennai | Fire Sprinkler System Supplier & Installer Chennai — Riser Technologies',
  description:
    'Riser Technologies — Leading sprinkler system supplier and installer in Chennai. Wet pipe, dry pipe, ESFR, pre-action sprinkler systems. Authorized Reliable dealer. NFPA 13 design. Call +91 9787666104.',
  keywords: [
    'sprinkler system Chennai',
    'sprinkler system supplier Chennai',
    'sprinkler system installer Chennai',
    'sprinkler system company Chennai',
    'sprinkler system price Chennai',
    'sprinkler system cost Chennai',
    'fire sprinkler system Chennai',
    'automatic sprinkler system Chennai',
    'sprinkler system design Chennai',
    'sprinkler system installation Chennai',
    'best sprinkler system Chennai',
    'sprinkler system dealer Chennai',
    'sprinkler system contractor Chennai',
    'sprinkler system Tamil Nadu',
    'fire protection sprinkler system Chennai',
    'NFPA 13 sprinkler system Chennai',
  ],
  alternates: { canonical: '/sprinkler-system-chennai' },
  openGraph: {
    title: 'Sprinkler System Chennai | Riser Technologies',
    description: 'Leading sprinkler system supplier and installer in Chennai — wet pipe, dry pipe, ESFR, pre-action. Authorized Reliable dealer. NFPA 13 design. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sprinkler-system-chennai`,
    type: 'website',
  },
};

const systemTypes = [
  { icon: Droplet, name: 'Wet Pipe Sprinkler System', desc: 'Water-filled pipes with closed heads — the standard choice for offices, hotels, hospitals, and commercial buildings. Fastest response, lowest maintenance.' },
  { icon: Shield, name: 'Dry Pipe Sprinkler System', desc: 'Air-pressurized pipes for unheated or freeze-risk areas — cold storage, car parks, and outdoor canopies.' },
  { icon: Award, name: 'ESFR Sprinkler System', desc: 'Early Suppression Fast Response for warehouses and high-bay rack storage in Chennai\'s Oragadam and Sriperumbudur corridors.' },
  { icon: FileCheck, name: 'Pre-Action Sprinkler System', desc: 'Double interlock dry systems for data centres, server rooms, and archives — prevents accidental water discharge.' },
  { icon: Building2, name: 'Deluge System', desc: 'Open-head systems for transformers, aircraft hangars, chemical stores, and high-hazard industrial areas.' },
  { icon: CheckCircle, name: 'Concealed Sprinkler System', desc: 'Flush-ceiling sprinklers for hotels, hospitals, corporate offices, and luxury residential in Chennai.' },
];

const whyUs = [
  'Authorized dealer for Reliable Automatic Sprinkler Co. (USA) — the world\'s leading sprinkler brand',
  'Complete sprinkler system design per NFPA 13 and NBC 2016',
  'UL Listed and FM Approved products accepted by all Chennai building authorities',
  'In-house installation and commissioning teams based in Chennai',
  'Projects completed across all sectors: warehouses, offices, hotels, hospitals, pharma, data centres',
  'Annual maintenance contracts (AMC) for all system types',
  'Same-day project quotations for standard buildings',
];

const faqs = [
  {
    q: 'What types of sprinkler systems are available in Chennai?',
    a: 'The main sprinkler system types available in Chennai are: wet pipe (most common), dry pipe (for cold or freeze-risk areas), pre-action (for data centres and archives), deluge (for high-hazard areas), and ESFR (for warehouses). Riser Technologies supplies, designs, and installs all types using genuine Reliable Automatic Sprinkler Co. components.',
  },
  {
    q: 'What is the cost of a sprinkler system in Chennai?',
    a: 'Sprinkler system costs in Chennai range from approximately ₹60–120 per sq ft for a standard wet pipe system in a commercial building, depending on the occupancy, design density, and pipe routing. ESFR and pre-action systems cost more. Riser Technologies provides accurate project-specific quotations — contact us at +91 9787666104.',
  },
  {
    q: 'Is a sprinkler system mandatory in Chennai?',
    a: 'Under the National Building Code 2016 and Tamil Nadu fire safety regulations, automatic sprinkler systems are mandatory for high-rise buildings (above 15 m in some occupancy categories), large malls, multiplexes, hospitals, hotels, and certain industrial occupancies. Riser Technologies advises on your specific compliance requirement.',
  },
  {
    q: 'How long does sprinkler system installation take in Chennai?',
    a: 'A typical commercial floor of 10,000 sq ft can be installed in 3–5 working days once materials are on site. Larger projects are phased floor by floor. Riser Technologies manages procurement, delivery, and scheduling to match your construction programme.',
  },
  {
    q: 'Does Riser Technologies maintain sprinkler systems in Chennai?',
    a: 'Yes. Riser Technologies provides annual maintenance contracts (AMC) covering quarterly inspection visits, annual hydrostatic testing, flow testing, and alarm verification for all sprinkler system types across Chennai and Tamil Nadu.',
  },
];

export default function SprinklerSystemChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Sprinkler System Chennai', url: '/sprinkler-system-chennai' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Sprinkler Systems in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is Chennai&apos;s leading{' '}
            <strong className="text-amber-400">fire sprinkler system supplier, designer, and installer</strong>{' '}
            — supplying all system types using genuine{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong>{' '}
            components. NFPA 13 design. UL Listed &amp; FM Approved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="mailto:sanjeevi@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Sprinkler System Types We Supply in Chennai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {systemTypes.map((s) => (
              <div key={s.name} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <s.icon className="w-6 h-6 text-amber-500 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{s.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Sprinkler System Supplier &amp; Installer in Chennai — Riser Technologies</h2>
          <p>
            A fire sprinkler system is the most effective fixed fire protection measure for any
            building in Chennai — activating only at the point of fire, suppressing it before
            flashover, and protecting life and property with no manual intervention required.
            Riser Technologies has delivered sprinkler systems across Chennai for warehouses
            in Oragadam, pharmaceutical plants in Ambattur, hotels on the ECR, hospitals in
            Nungambakkam, data centres on the OMR, and high-rise residential towers across the city.
          </p>
          <h3>Why Genuine Reliable Sprinkler Components Matter</h3>
          <p>
            As Chennai&apos;s authorized dealer for Reliable Automatic Sprinkler Co. (USA), Riser
            Technologies supplies only genuine UL Listed and FM Approved sprinkler components.
            Grey-market or counterfeit sprinklers — widely available in Chennai at artificially
            low prices — may not activate at the correct temperature, may have incorrect K-factors,
            and will not carry UL/FM certification required by insurance underwriters and building
            authorities. Every Riser Technologies sprinkler system uses genuine Reliable components
            with manufacturer certification documents.
          </p>
          <h3>NFPA 13 Sprinkler System Design in Chennai</h3>
          <p>
            India&apos;s National Building Code 2016 references NFPA 13 as the design standard
            for all sprinkler systems. Riser Technologies provides complete NFPA 13 hydraulic
            design documentation — including pipe sizing, sprinkler layout, water demand
            calculations, and riser design — for every project. Our designs are accepted by
            Tamil Nadu building authorities, the fire department, and insurance underwriters.
          </p>
        </div>
      </section>

      <section className="py-14 bg-amber-50 dark:bg-gray-800 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Award className="w-12 h-12 text-amber-500 shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Riser Technologies for Sprinkler Systems in Chennai?</h2>
              <ul className="space-y-2">
                {whyUs.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Sprinkler System Chennai</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
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
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Automatic Sprinkler System Chennai', href: '/automatic-sprinkler-system-chennai' },
              { label: 'Fire Sprinkler Systems Chennai', href: '/fire-sprinkler-systems-in-chennai' },
              { label: 'ESFR Sprinkler Dealer Chennai', href: '/esfr-sprinkler-dealer-in-chennai' },
              { label: 'Reliable Sprinkler Chennai', href: '/reliable-sprinkler-chennai' },
              { label: 'Pre-Action System Chennai', href: '/pre-action-sprinkler-system-chennai' },
              { label: 'Fire Suppression System Chennai', href: '/fire-suppression-system-dealer-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get a Sprinkler System Quote for Chennai</h2>
          <p className="text-slate-400 mb-8">All system types — NFPA 13 design, supply, installation, and AMC across Tamil Nadu.</p>
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
