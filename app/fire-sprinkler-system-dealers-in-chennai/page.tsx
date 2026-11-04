import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Droplet, Flame , ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fire Sprinkler System Dealers in Chennai | Fire Sprinkler System in Chennai — Riser Technologies',
  description:
    'Riser Technologies — Fire Sprinkler System Dealers in Chennai. Supply, design & installation of UL Listed, FM Approved fire sprinkler systems in Chennai, Tamil Nadu. Wet pipe, dry pipe, pre-action, deluge systems. NFPA 13 compliant. Call +91 9787666104.',
  keywords: [
    'Fire Sprinkler System Dealers in Chennai',
    'fire sprinkler system dealers in chennai',
    'fire sprinkler system in chennai',
    'fire sprinkler system chennai',
    'fire sprinkler dealers in chennai',
    'fire sprinkler dealers chennai',
    'fire sprinkler system dealer near me',
    'fire sprinkler system supplier in chennai',
    'fire sprinkler system distributor in chennai',
    'fire sprinkler system price in chennai',
    'automatic fire sprinkler system chennai',
    'UL FM approved fire sprinkler system chennai',
    'NFPA 13 fire sprinkler system chennai',
    'wet pipe fire sprinkler system chennai',
    'pre-action fire sprinkler system chennai',
    'fire sprinkler system in tamil nadu',
    'fire sprinkler system in india',
    'Top Fire Sprinkler System in Chennai',
  ],
  alternates: {
    canonical: '/fire-sprinkler-system-dealers-in-chennai',
  },
  openGraph: {
    title: 'Fire Sprinkler System Dealers in Chennai | Riser Technologies',
    description:
      'Authorized fire sprinkler system dealers in Chennai — wet pipe, dry pipe, pre-action & deluge systems. UL/FM Approved, NFPA 13 compliant. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/fire-sprinkler-system-dealers-in-chennai`,
    type: 'website',
  },
};

const systems = [
  {
    name: 'Wet Pipe Fire Sprinkler System',
    desc: 'The most common system in Chennai. Pipes are filled with water at all times. Fastest response — sprinklers activate individually when heat opens the glass bulb. Ideal for offices, malls, hotels, and hospitals.',
  },
  {
    name: 'Dry Pipe Fire Sprinkler System',
    desc: 'Pipes filled with pressurized air or nitrogen. Used for cold storage, freezers, and unheated buildings where wet-pipe systems would freeze. Riser Technologies supplies dry-pipe valves and all components.',
  },
  {
    name: 'Pre-Action Fire Sprinkler System',
    desc: 'Requires two signals to activate (smoke detection + heat). Used in data centres, server rooms, museums, and archives where accidental discharge must be prevented. Riser Technologies supplies the Reliable DDX Pre-Action system.',
  },
  {
    name: 'Deluge Fire Sprinkler System',
    desc: 'All open sprinkler heads discharge simultaneously when activated. Used for high-hazard areas: aircraft hangars, transformer rooms, chemical stores. Riser Technologies supplies Reliable DDV Deluge valves.',
  },
];

const faqs = [
  {
    q: 'Who are the top fire sprinkler system dealers in Chennai?',
    a: 'Riser Technologies is Chennai\'s leading fire sprinkler system dealer, as the authorized distributor for Reliable Automatic Sprinkler Co. (USA). We supply, design, and support fire sprinkler systems for commercial, industrial, and institutional projects across Chennai, Tamil Nadu, and India.',
  },
  {
    q: 'What types of fire sprinkler systems are available in Chennai?',
    a: 'We supply wet pipe, dry pipe, pre-action, and deluge fire sprinkler systems in Chennai. The right system depends on your occupancy type, temperature environment, and risk level. Contact Riser Technologies for a free system recommendation.',
  },
  {
    q: 'What is the cost of a fire sprinkler system in Chennai?',
    a: 'The cost of a fire sprinkler system in Chennai depends on the building size, occupancy class, system type (wet/dry/pre-action/deluge), and pipe sizing. Riser Technologies provides free BOQ and budgetary estimates for projects. Call +91 9787666104.',
  },
  {
    q: 'Are your fire sprinkler systems NFPA 13 compliant?',
    a: 'Yes. All fire sprinkler systems we supply and design follow NFPA 13 (Standard for the Installation of Sprinkler Systems). Our team provides hydraulic calculation reports and system design documentation for building authority submissions.',
  },
  {
    q: 'Do you supply fire sprinkler systems for high-rise buildings in Chennai?',
    a: 'Yes. We supply and support fire sprinkler system design for high-rise residential and commercial buildings in Chennai in compliance with NBC (National Building Code) and NFPA 13 standards.',
  },
];

export default function FireSprinklerSystemDealersChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Fire Sprinkler System Dealers in Chennai', url: '/fire-sprinkler-system-dealers-in-chennai' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Flame className="w-3.5 h-3.5" />
            UL Listed · FM Approved · NFPA 13 Compliant · Chennai
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Fire Sprinkler System Dealers in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies — Authorized dealers and suppliers of{' '}
            <strong className="text-amber-400">fire sprinkler systems in Chennai</strong>. Wet pipe,
            dry pipe, pre-action and deluge systems for commercial, industrial and residential
            projects across Tamil Nadu and India.
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
              Get System Quote
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


      {/* Systems */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Fire Sprinkler Systems Available in Chennai
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            All systems use Reliable Automatic Sprinkler Co. (USA) components — UL Listed &amp; FM
            Approved.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {systems.map((s) => (
              <div
                key={s.name}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <Droplet className="w-6 h-6 text-amber-500 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{s.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Fire Sprinkler System Dealers in Chennai — Riser Technologies</h2>
          <p>
            Riser Technologies is among the top <strong>fire sprinkler system dealers in Chennai</strong>,
            serving commercial, industrial, and residential projects across Tamil Nadu. As the
            authorized distributor for Reliable Automatic Sprinkler Co. (USA), we supply genuine
            UL Listed and FM Approved fire sprinkler components for all system types: wet pipe, dry
            pipe, pre-action, and deluge.
          </p>
          <p>
            From office buildings and shopping malls to warehouses, data centres, hotels, and
            high-rise apartments, Riser Technologies has the sprinkler products, technical expertise,
            and Chennai-based support to make your fire protection project a success.
          </p>
          <h3>Fire Sprinkler System Supply — What We Provide in Chennai</h3>
          <ul>
            <li>Fire sprinkler heads (all types: pendent, upright, concealed, sidewall, ESFR)</li>
            <li>Alarm check valves and trim kits (wet pipe systems)</li>
            <li>Dry-pipe valves and accelerators (cold storage, freezers)</li>
            <li>Pre-action valve systems — Reliable DDX (data centres, server rooms)</li>
            <li>Deluge valves — Reliable DDV (high-hazard applications)</li>
            <li>Grooved pipe fittings and couplings</li>
            <li>Gate valves, butterfly valves, OS&amp;Y valves (UL/FM)</li>
            <li>Pressure gauges, test &amp; drain valves, flow switches</li>
          </ul>
          <h3>Fire Sprinkler System Projects in Chennai &amp; Tamil Nadu</h3>
          <p>
            Riser Technologies has supplied fire sprinkler systems for projects across Chennai including
            commercial office parks, residential high-rises, cold chain warehouses, pharmaceutical
            plants, hospitals, and IT parks. Our team provides BOQ preparation, hydraulic calculation
            support, and product documentation for all project types.
          </p>
          <h3>Standards Compliance — Fire Sprinkler Systems in Chennai</h3>
          <ul>
            <li>NFPA 13 — Standard for the Installation of Sprinkler Systems</li>
            <li>NFPA 13R — Residential Sprinkler Systems</li>
            <li>NFPA 13D — Dwelling Units</li>
            <li>IS 15105 — Indian Standard for Fire Sprinkler Systems</li>
            <li>NBC (National Building Code of India)</li>
            <li>TAC (Tariff Advisory Committee) requirements</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            FAQ — Fire Sprinkler System Dealers in Chennai
          </h2>
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
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Sprinkler Dealer in Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Sprinkler Distributor in Chennai', href: '/sprinkler-distributor-in-chennai' },
              { label: 'ESFR Sprinkler Dealer in Chennai', href: '/esfr-sprinkler-dealer-in-chennai' },
              { label: 'Authorized Sprinkler Distributor', href: '/authorized-sprinkler-distributor-in-chennai' },
              { label: 'All Products', href: '/products' },
              { label: 'Services', href: '/services' },
              { label: 'Contact Us', href: '/contact' },
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

      {/* CTA */}
      <section className="py-14 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need a Fire Sprinkler System in Chennai?
          </h2>
          <p className="text-slate-400 mb-8">
            Contact Riser Technologies — Chennai's authorized fire sprinkler system dealer — for
            pricing, system design, and technical support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Link
              href="tel:+919787666104"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 9787666104
            </Link>
            <Link href="https://wa.me/919787666104" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-lg transition-colors">
              WhatsApp
            </Link>
            <Link
              href="mailto:sanjeevi@risertech.in"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
