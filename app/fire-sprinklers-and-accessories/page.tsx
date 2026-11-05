import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema, FAQPageSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Shield, Star, Award, CheckCircle, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fire Sprinklers and Accessories | Fire Sprinkler System Components — Riser Technologies',
  description:
    'Riser Technologies — Authorized supplier of fire sprinklers and accessories including ESFR sprinklers, concealed sprinklers, sprinkler heads, valves, pipe fittings, and all system components. UL Listed, FM Approved. NFPA 13. Call +91 9787666104.',
  keywords: [
    'fire sprinklers and accessories',
    'fire sprinkler accessories',
    'sprinkler system accessories',
    'fire sprinkler heads',
    'sprinkler system components',
    'ESFR sprinkler accessories',
    'concealed sprinkler accessories',
    'fire sprinkler valves',
    'sprinkler pipe fittings',
    'reliable sprinkler accessories',
    'UL listed sprinkler accessories',
    'FM approved sprinkler accessories',
    'NFPA 13 sprinkler accessories',
    'fire protection accessories',
    'sprinkler system parts',
  ],
  alternates: { canonical: '/fire-sprinklers-and-accessories' },
  openGraph: {
    title: 'Fire Sprinklers and Accessories | Riser Technologies',
    description: 'Authorized supplier of fire sprinklers and all accessories — ESFR, concealed, pendent, valves, pipe fittings. UL Listed, FM Approved. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://risertech.in'}/fire-sprinklers-and-accessories`,
    type: 'website',
  },
};

const accessories = [
  { icon: Shield, title: 'Sprinkler Heads', desc: 'Pendent, upright, sidewall, concealed, and ESFR sprinkler heads. UL Listed and FM Approved Reliable brand. K-factors from K5.6 to K25.2 for all hazard classifications.' },
  { icon: Award, title: 'Sprinkler Valves', desc: 'Alarm check valves, pre-action valves, deluge valves, dry pipe valves, and control valves. Complete valve trim assemblies for wet, dry, and pre-action systems.' },
  { icon: CheckCircle, title: 'Pipe & Fittings', desc: 'Schedule 10 and Schedule 40 steel pipe, groove-fit couplings, elbows, tees, and reducers compatible with NFPA 13 sprinkler system installations.' },
  { icon: Shield, title: 'Sprinkler Guards & Escutcheons', desc: 'Protective wire guards for exposed sprinklers in warehouses and industrial areas. Escutcheon plates and cover plates for concealed sprinklers in commercial spaces.' },
  { icon: Award, title: 'Gauges & Alarms', desc: 'Pressure gauges, waterflow alarm switches, tamper switches, and flow indicators for complete sprinkler system monitoring and alarm integration.' },
  { icon: CheckCircle, title: 'Hangers & Bracing', desc: 'Sprinkler pipe hangers, seismic bracing components, and support systems compliant with NFPA 13 installation requirements for all pipe sizes.' },
];

const faqs = [
  {
    q: 'What fire sprinkler accessories does Riser Technologies supply?',
    a: 'Riser Technologies supplies the complete range of fire sprinkler accessories — sprinkler heads (pendent, upright, sidewall, concealed, ESFR), valves (alarm check, pre-action, deluge, dry pipe), pipe and fittings, sprinkler guards, escutcheons, gauges, waterflow alarms, tamper switches, pipe hangers, and seismic bracing. All products are UL Listed and FM Approved from Reliable Automatic Sprinkler Co. (USA).',
  },
  {
    q: 'Are your sprinkler accessories UL Listed and FM Approved?',
    a: 'Yes. All sprinkler heads and system components supplied by Riser Technologies are UL Listed (Underwriters Laboratories) and FM Approved (FM Global), meeting the requirements of NFPA 13 Standard for the Installation of Sprinkler Systems. These approvals are required by Indian insurance underwriters and NBC 2016 for commercial and industrial buildings.',
  },
  {
    q: 'Can you supply sprinkler accessories for a replacement or expansion project?',
    a: 'Yes. Riser Technologies supplies accessories for new installations, expansions of existing systems, and replacement of obsolete or damaged components. We can match existing system specifications and supply individual components or complete accessory kits for any NFPA 13 system type.',
  },
  {
    q: 'Do you supply accessories for all types of sprinkler systems?',
    a: 'Yes — wet pipe, dry pipe, pre-action (single interlock, double interlock DDX), deluge, and foam-water sprinkler systems. We supply all associated accessories including system valves, trim components, detection devices, and alarm devices for each system type.',
  },
];

export default function FireSprinklersAndAccessoriesPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Fire Sprinklers and Accessories', url: '/fire-sprinklers-and-accessories' },
      ]} />
      <FAQPageSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-red-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · UL Listed &amp; FM Approved
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Fire Sprinklers and Accessories
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies the complete range of{' '}
            <strong className="text-amber-400">fire sprinklers and accessories</strong>{' '}
            — sprinkler heads, valves, pipe fittings, guards, gauges, and all system components.
            UL Listed &amp; FM Approved. NFPA 13 compliant. Pan-India supply.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="mailto:sanjeevi@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-amber-500 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '12+', label: 'Years Experience' },
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
            Fire Sprinkler Accessories We Supply
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {accessories.map((a) => (
              <div key={a.title} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                  <a.icon className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{a.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Authorized Supplier of Fire Sprinkler Accessories</h2>
          <p>
            Riser Technologies is the authorized Indian distributor for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong> — one of the world&apos;s largest
            manufacturers of UL Listed and FM Approved fire sprinklers and accessories. Our product
            range covers every component required for a complete NFPA 13 sprinkler system — from
            individual sprinkler heads and valves to full accessory kits for warehouses, data
            centres, commercial buildings, and industrial facilities.
          </p>
          <p>
            All accessories are supplied with manufacturer test certificates and comply with NBC 2016
            (National Building Code of India), TAC (Tariff Advisory Committee), and insurance
            underwriter requirements. We supply to consultants, contractors, and end-users across
            Chennai, Tamil Nadu, and pan-India.
          </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Fire Sprinklers and Accessories</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer [&::-webkit-details-marker]:hidden font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
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
              { label: 'Fire Sprinklers & Accessories Chennai', href: '/fire-sprinklers-and-accessories-chennai' },
              { label: 'Fire Sprinklers & Accessories India', href: '/fire-sprinklers-and-accessories-india' },
              { label: 'Sprinkler System Chennai', href: '/sprinkler-system-chennai' },
              { label: 'Reliable Sprinkler Chennai', href: '/reliable-sprinkler-chennai' },
              { label: 'ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get a Quote for Fire Sprinklers and Accessories</h2>
          <p className="text-slate-400 mb-8">UL Listed · FM Approved · NFPA 13 · Pan-India supply</p>
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
