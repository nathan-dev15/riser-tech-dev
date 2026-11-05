import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Star , ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Authorized Sprinkler Distributor in Chennai | Reliable Authorised Dealer — Riser Technologies',
  description:
    'Riser Technologies — Authorized Sprinkler Distributor & Dealer in Chennai for Reliable Automatic Sprinkler Co. (USA). Official authorised Indian partner. UL Listed, FM Approved fire sprinklers at best price. Call +91 9787666104.',
  keywords: [
    'Authorized Sprinkler Distributor in Chennai',
    'authorised sprinkler distributor chennai',
    'authorized dealer for reliable sprinklers',
    'authorised dealer reliable sprinkler india',
    'reliable authorized dealer in chennai',
    'reliable authorised dealer chennai',
    'reliable sprinkler authorized dealer',
    'reliable fire sprinkler authorized dealer chennai',
    'reliable fire sprinkler systems authorized dealers in chennai',
    'genuine reliable sprinkler supplier',
    'reliable sprinkler manufacturer authorized partner',
    'authorized sprinkler supplier in chennai',
    'official sprinkler dealer chennai',
  ],
  alternates: {
    canonical: '/authorized-sprinkler-distributor-in-chennai',
  },
  openGraph: {
    title: 'Authorized Sprinkler Distributor in Chennai | Riser Technologies',
    description:
      'Official authorized distributor for Reliable Automatic Sprinkler Co. (USA) in Chennai. Genuine UL/FM Approved products with manufacturer warranty. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/authorized-sprinkler-distributor-in-chennai`,
    type: 'website',
  },
};

const credentials = [
  'Official Authorized Partner — Reliable Automatic Sprinkler Co. (USA)',
  'UL Listed & FM Approved products only — no grey market stock',
  'Full manufacturer warranty on all Reliable products',
  'Factory-direct pricing — no price inflation from middlemen',
  '12+ years of fire protection industry experience',
  'NFPA 13 design support and hydraulic calculation assistance',
  'Serving 100+ clients across Chennai, Tamil Nadu and India',
];

const faqs = [
  {
    q: 'What does "authorized sprinkler distributor" mean?',
    a: 'An authorized distributor is an officially appointed sales and distribution partner of the sprinkler manufacturer — in this case, Reliable Automatic Sprinkler Co. (USA). Authorization means we receive genuine products directly from the factory, offer manufacturer warranty, and are trained on the full product range. This is different from a re-seller or trader who may stock products of uncertain origin.',
  },
  {
    q: 'Why buy from an authorized distributor instead of a trader?',
    a: 'Buying from an authorized distributor like Riser Technologies guarantees: (1) genuine, factory-fresh products with manufacturer warranty; (2) current product certifications (UL, FM) for NFPA 13 compliance; (3) technical support from trained staff; (4) proper documentation including test certificates, data sheets, and installation manuals.',
  },
  {
    q: 'How can I verify that Riser Technologies is an authorized Reliable dealer?',
    a: 'You can verify our authorization by contacting Reliable Automatic Sprinkler Co. directly at reliablesprinkler.com or requesting our authorization letter, which we provide with all orders.',
  },
  {
    q: 'Do you supply to fire protection contractors in Chennai?',
    a: 'Yes. We work with fire protection contractors, MEP firms, builders, and consultants across Chennai and Tamil Nadu. We provide project-specific pricing, technical documentation, and delivery coordination.',
  },
];

export default function AuthorizedSprinklerDistributorChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Authorized Sprinkler Distributor in Chennai', url: '/authorized-sprinkler-distributor-in-chennai' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Award className="w-3.5 h-3.5" />
            Officially Authorized · Reliable Automatic Sprinkler Co. (USA)
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Authorized Sprinkler Distributor in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is the{' '}
            <strong className="text-amber-400">officially authorized distributor</strong> for
            Reliable Automatic Sprinkler Co. (USA) in Chennai and India. Buy genuine, warranty-backed
            UL Listed &amp; FM Approved fire sprinklers directly from the authorized partner.
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
              Verify Authorization
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


      {/* Authorization credentials */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Our Authorization Credentials
          </h2>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 border border-amber-200 dark:border-amber-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-7 h-7 text-amber-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Riser Technologies — Authorized Reliable Partner
              </h3>
            </div>
            <ul className="space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Authorized Sprinkler Distributor in Chennai — Why It Matters</h2>
          <p>
            Riser Technologies holds official authorization from{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong> as their Indian distribution
            partner. This means every fire sprinkler, system valve, and accessory we supply in
            Chennai is a genuine factory product with current UL and FM certifications — not a
            counterfeit or grey-market import.
          </p>
          <p>
            For fire protection engineers, consultants, and contractors specifying sprinklers for
            projects in Chennai, buying from an{' '}
            <strong>authorized sprinkler distributor</strong> ensures:
          </p>
          <ul>
            <li>Products are covered by manufacturer warranty</li>
            <li>Test certificates and UL/FM approval documents are genuine and current</li>
            <li>Products match the specifications in the data sheets exactly</li>
            <li>No compliance risk during building inspections or insurance audits</li>
            <li>Technical support from staff trained by Reliable's engineering team</li>
          </ul>
          <h3>What Makes Reliable Sprinklers the Right Choice for Chennai Projects?</h3>
          <p>
            Reliable Automatic Sprinkler Co. has over 100 years of manufacturing experience.{' '}
            Their sprinklers are manufactured at a single advanced facility in Liberty, South
            Carolina, USA, with rigorous quality control at every stage. Models like the{' '}
            <strong>Reliable ESFR P22</strong> and <strong>Reliable Model G pendent</strong> are
            among the most widely specified in India's commercial and industrial projects.
          </p>
          <h3>Sprinkler Products We Distribute as the Authorized Partner in Chennai</h3>
          <ul>
            <li>Fire sprinkler heads (all types: pendent, upright, concealed, sidewall, ESFR)</li>
            <li>Alarm check valves and trim kits</li>
            <li>Dry-pipe valves and accelerators</li>
            <li>Deluge valves (DDV series)</li>
            <li>Pre-action valve systems (DDX series)</li>
            <li>Grooved couplings and fittings</li>
            <li>Gate valves, butterfly valves, OS&amp;Y valves (UL/FM)</li>
            <li>LB11 Lithium-ion battery protection sprinklers</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            FAQ — Authorized Sprinkler Distributor in Chennai
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
              { label: 'Fire Sprinkler System Dealers', href: '/fire-sprinkler-system-dealers-in-chennai' },
              { label: 'All Products', href: '/products' },
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
            Buy Genuine Sprinklers from the Authorized Distributor
          </h2>
          <p className="text-slate-400 mb-8">
            Get factory-backed Reliable sprinklers with full UL/FM documentation. Riser Technologies
            — Chennai's official authorized distributor.
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
