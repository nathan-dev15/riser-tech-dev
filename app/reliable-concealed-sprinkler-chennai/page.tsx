import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema , FAQPageSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, Droplet, Star , ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Concealed Sprinkler Supplier Chennai | Reliable Concealed Pendent Sprinkler Chennai — Riser Technologies',
  description:
    'Riser Technologies — Authorized supplier of Reliable concealed sprinklers in Chennai. Genuine Reliable concealed pendent sprinklers (Model G with cover plate) for hotels, hospitals, offices. UL Listed, FM Approved. Call +91 9787666104.',
  keywords: [
    'Reliable concealed sprinkler supplier Chennai',
    'reliable concealed sprinkler Chennai',
    'reliable concealed pendent sprinkler Chennai',
    'reliable concealed sprinkler dealer Chennai',
    'reliable concealed sprinkler price Chennai',
    'reliable model G concealed sprinkler Chennai',
    'concealed sprinkler supplier Chennai',
    'aesthetic fire sprinkler Chennai',
    'flush sprinkler supplier Chennai',
    'reliable sprinkler hotel hospital Chennai',
  ],
  alternates: { canonical: '/reliable-concealed-sprinkler-chennai' },
  openGraph: {
    title: 'Reliable Concealed Sprinkler Supplier Chennai | Riser Technologies',
    description: 'Authorized supplier of Reliable concealed pendent sprinklers in Chennai — genuine Model G and specialty concealed models. For hotels, hospitals, offices. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-concealed-sprinkler-chennai`,
    type: 'website',
  },
};

const applications = [
  { name: 'Hotels & Hospitality', desc: 'Concealed sprinklers maintain ceiling aesthetics in guest rooms, lobbies, banquet halls, and F&B outlets. Chennai\'s growing 5-star hotel segment routinely specifies Reliable concealed.' },
  { name: 'Hospitals & Healthcare', desc: 'Smooth, flush cover plates prevent harboring of pathogens — critical in OT suites, ICU, and clean zones in Chennai\'s hospitals.' },
  { name: 'Corporate Offices & IT Parks', desc: 'Concealed sprinklers integrate cleanly with suspended ceiling tile systems in Chennai\'s IT corridor — OMR, Perungudi, Ambattur, and Guindy.' },
  { name: 'Retail & Shopping Malls', desc: 'Mall operators and fitout contractors in Chennai specify concealed sprinklers for store interiors and F&B areas where aesthetics are non-negotiable.' },
  { name: 'Residential High-Rise', desc: 'Concealed pendent sprinklers in apartments and villas where owners want fire protection without exposed hardware.' },
];

const faqs = [
  {
    q: 'What Reliable concealed sprinkler models are available in Chennai?',
    a: 'Riser Technologies supplies the full range of Reliable concealed pendent sprinklers in Chennai, including the widely specified Model G with cover plate (available in multiple finishes — white, chrome, brass, custom RAL colours) in standard response (RTI ≥80) and quick response (RTI ≤50) temperature ratings of 57°C, 68°C, and 74°C.',
  },
  {
    q: 'What cover plate finishes are available for Reliable concealed sprinklers in Chennai?',
    a: 'Reliable concealed sprinkler cover plates are available in white, chrome, brass, and custom painted finishes to match ceiling colours. We supply all standard Reliable cover plate options in Chennai.',
  },
  {
    q: 'Are Reliable concealed sprinklers UL Listed and FM Approved?',
    a: 'Yes. All Reliable concealed sprinklers supplied by Riser Technologies are genuine UL Listed and FM Approved products from Reliable Automatic Sprinkler Co. (USA). Full certification documents are provided with every order.',
  },
  {
    q: 'What is the typical spacing for Reliable concealed sprinklers in Chennai hotel/office projects?',
    a: 'Under NFPA 13, light hazard concealed pendent sprinklers are typically spaced at 130–144 sq ft per sprinkler (K-5.6, minimum 7 psi). Actual spacing depends on the project\'s hydraulic design. Riser Technologies provides free NFPA 13 layout and hydraulic calculation support.',
  },
];

export default function ReliableConcealedSprinklerChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Concealed Sprinkler Chennai', url: '/reliable-concealed-sprinkler-chennai' },
      ]} />
      <FAQPageSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />


      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable Concealed Sprinkler Supplier in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies genuine{' '}
            <strong className="text-amber-400">Reliable concealed pendent sprinklers</strong> in Chennai
            — the preferred aesthetic fire sprinkler for hotels, hospitals, corporate offices, malls, and
            residential towers. India\'s only authorized Reliable dealer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              Request Quote
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Where Reliable Concealed Sprinklers Are Used in Chennai
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            Specified wherever aesthetics and fire protection must coexist.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((a) => (
              <div key={a.name} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <Droplet className="w-6 h-6 text-amber-500 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{a.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable Concealed Sprinkler Supplier in Chennai — Riser Technologies</h2>
          <p>
            Riser Technologies, the authorized Indian distributor for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong>, supplies genuine Reliable concealed
            pendent sprinklers to Chennai\'s architects, MEP consultants, and fire protection contractors.
            Concealed sprinklers — also called flush or recessed pendent sprinklers — have a flat cover
            plate that sits flush with the ceiling, completely hiding the sprinkler body until activation.
          </p>
          <h3>Reliable Concealed vs Standard Pendent: Which to Specify?</h3>
          <p>
            Standard pendent sprinklers are exposed below the ceiling — suitable for industrial, storage,
            and back-of-house areas. Concealed sprinklers are specified for customer-facing or finished
            spaces where the sprinkler must be invisible: hotel rooms, hospital patient areas, corporate
            lobbies, restaurant dining rooms, and residential living spaces.
          </p>
          <h3>Cover Plate Options from Riser Technologies</h3>
          <p>
            Reliable concealed sprinklers are available with cover plates in white (standard), chrome,
            brass, and custom painted finishes. For projects with coloured ceilings, Reliable also
            offers cover plates in a range of RAL colours — available through Riser Technologies in Chennai.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">FAQ — Reliable Concealed Sprinklers Chennai</h2>
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
          <p className="text-sm text-gray-500 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'Reliable ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
              { label: 'Reliable Distributor Chennai', href: '/reliable-automatic-sprinkler-distributor-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get Genuine Reliable Concealed Sprinklers for Your Chennai Project</h2>
          <p className="text-slate-400 mb-8">From India\'s only authorized Reliable dealer — all models and cover plate finishes available. Free NFPA 13 layout support.</p>
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
