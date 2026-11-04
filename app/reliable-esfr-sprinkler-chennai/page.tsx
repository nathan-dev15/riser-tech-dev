import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, Droplet, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable ESFR Sprinkler Chennai | Reliable ESFR Dealer & Supplier Chennai — Riser Technologies',
  description:
    'Riser Technologies — Authorized supplier of Reliable ESFR sprinklers in Chennai. Genuine Reliable P22, M336, JL14, JL17 ESFR models. UL Listed, FM Approved. Best price, free NFPA 13 design. Call +91 9787666104.',
  keywords: [
    'Reliable ESFR sprinkler Chennai',
    'reliable ESFR sprinkler dealer Chennai',
    'reliable ESFR sprinkler supplier Chennai',
    'reliable ESFR sprinkler price Chennai',
    'reliable P22 sprinkler Chennai',
    'reliable M336 sprinkler Chennai',
    'reliable JL14 sprinkler Chennai',
    'reliable JL17 sprinkler Chennai',
    'ESFR sprinkler Chennai warehouse',
    'reliable ESFR early suppression fast response Chennai',
    'reliable K-factor 11.2 sprinkler Chennai',
    'reliable K-factor 14 sprinkler Chennai',
  ],
  alternates: { canonical: '/reliable-esfr-sprinkler-chennai' },
  openGraph: {
    title: 'Reliable ESFR Sprinkler Chennai | Riser Technologies',
    description: 'Authorized supplier of Reliable ESFR sprinklers in Chennai — P22, M336, JL14, JL17 models. UL Listed, FM Approved. Free NFPA 13 design support. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-esfr-sprinkler-chennai`,
    type: 'website',
  },
};

const esfrModels = [
  {
    model: 'Reliable ESFR P22',
    kFactor: 'K-11.2',
    pressure: '50 psi min.',
    temp: '165°F / 74°C, 212°F / 100°C',
    use: 'Standard ESFR for warehouses up to 35 ft storage height. The most widely used ESFR in Indian warehouse projects.',
  },
  {
    model: 'Reliable ESFR M336',
    kFactor: 'K-14.0',
    pressure: '25 psi min.',
    temp: '165°F / 74°C, 212°F / 100°C',
    use: 'Large orifice ESFR for rack storage and high-challenge occupancies. Lower operating pressure than P22.',
  },
  {
    model: 'Reliable ESFR JL14',
    kFactor: 'K-16.8',
    pressure: '15 psi min.',
    temp: '165°F / 74°C',
    use: 'Ultra-large orifice ESFR — high-piled storage, aerosol warehouses, and cold storage facilities.',
  },
  {
    model: 'Reliable ESFR JL17',
    kFactor: 'K-19.6',
    pressure: '15 psi min.',
    temp: '165°F / 74°C',
    use: 'Highest flow ESFR for extreme hazard environments — rubber tire warehouses, roll paper storage.',
  },
];

const faqs = [
  {
    q: 'Where can I buy Reliable ESFR sprinklers in Chennai?',
    a: 'Riser Technologies is the only authorized dealer for Reliable Automatic Sprinkler Co. (USA) in India and supplies genuine Reliable ESFR sprinklers (P22, M336, JL14, JL17) in Chennai. All models are UL Listed and FM Approved with manufacturer warranty.',
  },
  {
    q: 'What is the difference between Reliable ESFR P22 and M336?',
    a: 'The P22 is K-11.2 requiring 50 psi minimum operating pressure — suitable for most warehouse applications up to 35 ft storage height. The M336 is K-14.0 at a lower 25 psi minimum — better for high-challenge rack storage because the larger K-factor delivers more water at lower pressure, reducing pump costs.',
  },
  {
    q: 'What ceiling heights are covered by Reliable ESFR sprinklers?',
    a: 'Reliable ESFR P22 and M336 are listed for ceiling heights up to approximately 45 ft (13.7 m). JL14 and JL17 extend this further for specific storage configurations. Exact ceiling height limits depend on the NFPA 13 design category, storage commodity, and rack arrangement — Riser Technologies provides free hydraulic design support.',
  },
  {
    q: 'Is free NFPA 13 design support available for Reliable ESFR projects in Chennai?',
    a: 'Yes. Riser Technologies provides free NFPA 13 hydraulic design and ESFR model selection assistance for projects in Chennai and across India. Contact us at +91 9787666104.',
  },
];

export default function ReliableEsfrSprinklerChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable ESFR Sprinkler Chennai', url: '/reliable-esfr-sprinkler-chennai' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable ESFR Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable ESFR Sprinklers in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies genuine{' '}
            <strong className="text-amber-400">Reliable ESFR (Early Suppression Fast Response)</strong>{' '}
            sprinklers in Chennai — P22, M336, JL14, and JL17 models. India's only authorized
            Reliable dealer. UL Listed &amp; FM Approved. Free NFPA 13 design support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              Request ESFR Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Reliable ESFR Models Available in Chennai
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            All models genuine Reliable Automatic Sprinkler Co. (USA) — UL Listed &amp; FM Approved.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {esfrModels.map((m) => (
              <div key={m.model} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <Droplet className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{m.model}</h3>
                    <span className="text-xs font-semibold text-amber-600 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded">{m.kFactor}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-3">
                  <p><span className="font-medium text-gray-700 dark:text-gray-300">Min. pressure:</span> {m.pressure}</p>
                  <p><span className="font-medium text-gray-700 dark:text-gray-300">Temperature:</span> {m.temp}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{m.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable ESFR Sprinklers in Chennai — What You Need to Know</h2>
          <p>
            ESFR (Early Suppression Fast Response) sprinklers are the standard of protection for
            Chennai's growing logistics, cold storage, and industrial warehouse sector. Unlike
            conventional sprinklers that control a fire, ESFR sprinklers suppress it at the point of
            origin — delivering large droplets at high velocity to penetrate the fire plume and reach
            the burning commodity directly.
          </p>
          <h3>When Are Reliable ESFR Sprinklers Required in Chennai?</h3>
          <ul>
            <li>High-piled storage warehouses above 12 ft (3.7 m)</li>
            <li>Rack storage facilities in MEPZ, Mahindra World City, and Chennai's logistics corridors</li>
            <li>Cold storage and refrigerated warehouse facilities</li>
            <li>E-commerce fulfilment centres with mixed commodity storage</li>
            <li>Aerosol product warehouses where NFPA 30B applies</li>
          </ul>
          <h3>Why Reliable ESFR for Chennai Warehouse Projects?</h3>
          <p>
            Reliable ESFR models are among the most widely specified in Indian warehouse projects because
            of their broad listing coverage, extensive hydraulic data, and the technical support available
            through Riser Technologies. The P22 (K-11.2) is a standard choice for most applications; the
            M336 (K-14.0) is preferred when lower operating pressures are needed to reduce pump sizing.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">FAQ — Reliable ESFR Sprinklers Chennai</h2>
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
          <p className="text-sm text-gray-500 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'ESFR Sprinkler Dealer Chennai', href: '/esfr-sprinkler-dealer-in-chennai' },
              { label: 'Reliable Distributor Chennai', href: '/reliable-automatic-sprinkler-distributor-chennai' },
              { label: 'Reliable Dealers India', href: '/reliable-sprinkler-dealers-india' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get Genuine Reliable ESFR Sprinklers for Your Chennai Warehouse</h2>
          <p className="text-slate-400 mb-8">India's only authorized Reliable dealer — P22, M336, JL14, JL17 in stock. Free NFPA 13 hydraulic design support.</p>
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
