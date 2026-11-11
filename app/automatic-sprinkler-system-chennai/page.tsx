import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema , FAQPageSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Shield, Star, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automatic Sprinkler System Chennai | Automatic Fire Sprinkler Supplier Chennai — Riser Technologies',
  description:
    'Riser Technologies — Authorized supplier and installer of automatic fire sprinkler systems in Chennai. Reliable UL Listed sprinklers. NFPA 13 design. Wet pipe, dry pipe, ESFR, pre-action. Call +91 9787666104.',
  keywords: [
    'automatic sprinkler system Chennai',
    'automatic fire sprinkler system Chennai',
    'automatic sprinkler system supplier Chennai',
    'automatic sprinkler system price Chennai',
    'automatic sprinkler system installation Chennai',
    'automatic fire suppression system Chennai',
    'automatic sprinkler dealer Chennai',
    'automatic fire sprinkler dealer Chennai',
    'automatic sprinkler system cost Chennai',
    'automatic sprinkler system company Chennai',
    'automatic fire sprinkler installation Chennai',
    'automatic sprinkler system Tamil Nadu',
    'automatic sprinkler system for warehouse Chennai',
    'automatic fire protection system Chennai',
  ],
  alternates: { canonical: '/automatic-sprinkler-system-chennai' },
  openGraph: {
    title: 'Automatic Sprinkler System Chennai | Riser Technologies',
    description: 'Authorized supplier of automatic fire sprinkler systems in Chennai — Reliable UL Listed, NFPA 13 design. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/automatic-sprinkler-system-chennai`,
    type: 'website',
  },
};

const howItWorks = [
  { step: '1', title: 'Heat Detection', desc: 'Each sprinkler head contains a glass bulb or fusible link rated to a specific temperature (typically 68°C or 93°C). No electrical power or manual activation required.' },
  { step: '2', title: 'Individual Activation', desc: 'Only the sprinkler directly above the fire activates — not the entire system. Typically 1–4 sprinklers control 90% of fires, minimising water damage to the rest of the building.' },
  { step: '3', title: 'Water Discharge', desc: 'The activated sprinkler discharges water in a precisely calibrated pattern at the design flow rate — suppressing the fire before flashover occurs.' },
  { step: '4', title: 'Alarm Signal', desc: 'Water flow through the system triggers the waterflow alarm — alerting occupants and transmitting to the fire brigade. NFPA 13 requires monitoring of all sprinkler systems.' },
];

const faqs = [
  {
    q: 'What is an automatic fire sprinkler system?',
    a: 'An automatic fire sprinkler system is a fixed fire suppression system where each sprinkler head activates independently in response to heat from a fire — without any manual intervention, electrical signal, or external trigger. Only the sprinkler over the fire activates, minimising water damage. It is the most effective and widely specified fixed fire protection system for buildings in India.',
  },
  {
    q: 'How does an automatic sprinkler system work?',
    a: 'Each sprinkler head contains a heat-sensitive element (glass bulb or fusible link). When the air temperature at the ceiling reaches the sprinkler\'s rated activation temperature, the element fails and the sprinkler opens, discharging water. The system is always pressurized — water flows immediately without any manual or electronic activation.',
  },
  {
    q: 'What is the difference between automatic and manual fire suppression?',
    a: 'An automatic sprinkler system activates without human intervention — 24/7 protection even when the building is unoccupied. A manual system (hose reels, extinguishers) requires a person to identify the fire and operate the equipment — which may not happen in time. Automatic sprinkler systems reduce fire death risk by over 85% compared to buildings without sprinklers.',
  },
  {
    q: 'What Indian standards apply to automatic sprinkler systems?',
    a: 'India\'s National Building Code 2016 (Part 4: Fire and Life Safety) references NFPA 13 for the design and installation of automatic sprinkler systems. IS 15105 covers the installation standard. TAC/GIC stipulations govern insurance requirements. Riser Technologies provides NBC and NFPA 13-compliant designs accepted by Chennai building authorities.',
  },
  {
    q: 'What buildings require automatic sprinkler systems in Chennai?',
    a: 'Under NBC 2016 and Tamil Nadu fire regulations, automatic sprinkler systems are mandatory for high-rise buildings (typically above 15 m), hospitals, hotels above a certain star rating, multiplexes, large malls, educational institutions above 3 floors, and certain industrial occupancies. Riser Technologies advises on your specific compliance requirement.',
  },
];

export default function AutomaticSprinklerSystemChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Automatic Sprinkler System Chennai', url: '/automatic-sprinkler-system-chennai' },
      ]} />
      <FAQPageSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />


      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Automatic Sprinkler Systems in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies, designs, and installs{' '}
            <strong className="text-amber-400">automatic fire sprinkler systems</strong>{' '}
            in Chennai — genuine{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong>{' '}
            components, NFPA 13 design, full installation and AMC.
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

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            How an Automatic Sprinkler System Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howItWorks.map((step) => (
              <div key={step.step} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-black font-bold text-lg flex items-center justify-center mx-auto mb-4">{step.step}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Automatic Fire Sprinkler System Supplier in Chennai</h2>
          <p>
            Riser Technologies is Chennai&apos;s authorized dealer for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong> — the company whose very
            name defines the product category. Founded in 1920, Reliable manufactures every
            type of automatic sprinkler at a single facility in Liberty, South Carolina, with
            UL Listing and FM Approval on every product. As the authorized Indian partner,
            Riser Technologies brings the full Reliable range to Chennai — from standard
            commercial pendent sprinklers to ESFR heads for high-bay warehouses to the
            LB11 lithium-ion battery sprinkler, the world&apos;s first sprinkler specifically
            approved for EV battery storage.
          </p>
          <h3>Automatic Sprinkler System for Chennai Warehouses</h3>
          <p>
            Chennai&apos;s industrial and logistics growth — with large warehouse parks in
            Oragadam, Sriperumbudur, MEPZ, Mahindra World City, and Siruseri — has created
            strong demand for automatic ESFR sprinkler systems. NFPA 13 requires ESFR sprinklers
            for high-piled storage above 12 ft, and Reliable&apos;s P22 (K-11.2) and M336 (K-14.0)
            are the market-standard ESFR heads for Indian warehouse projects. Riser Technologies
            provides end-to-end ESFR project delivery — design, supply, installation, and test.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Automatic Sprinkler System Chennai</h2>
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

      <section className="py-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Sprinkler System Chennai', href: '/sprinkler-system-chennai' },
              { label: 'Fire Sprinkler Systems Chennai', href: '/fire-sprinkler-systems-in-chennai' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Reliable Sprinkler Chennai', href: '/reliable-sprinkler-chennai' },
              { label: 'ESFR Sprinkler Dealer Chennai', href: '/esfr-sprinkler-dealer-in-chennai' },
              { label: 'Pre-Action System Chennai', href: '/pre-action-sprinkler-system-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get an Automatic Sprinkler System Quote for Chennai</h2>
          <p className="text-slate-400 mb-8">NFPA 13 design · Genuine Reliable components · Installation &amp; AMC across Tamil Nadu</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
