import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema, FAQPageSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Shield, Star, Award, CheckCircle, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fire Sprinklers and Accessories in Chennai | Sprinkler System Components Chennai — Riser Technologies',
  description:
    'Riser Technologies — Authorized supplier of fire sprinklers and accessories in Chennai. Sprinkler heads, valves, pipe fittings, guards, gauges for all system types. UL Listed, FM Approved. NFPA 13. Call +91 9787666104.',
  keywords: [
    'fire sprinklers and accessories in Chennai',
    'fire sprinkler accessories Chennai',
    'sprinkler system accessories Chennai',
    'fire sprinkler heads Chennai',
    'sprinkler system components Chennai',
    'sprinkler valves Chennai',
    'sprinkler pipe fittings Chennai',
    'reliable sprinkler accessories Chennai',
    'UL listed sprinkler accessories Chennai',
    'FM approved sprinkler accessories Chennai',
    'NFPA 13 sprinkler accessories Chennai',
    'fire protection accessories Chennai',
    'sprinkler dealer Chennai',
    'fire sprinkler supplier Chennai',
  ],
  alternates: { canonical: '/fire-sprinklers-and-accessories-chennai' },
  openGraph: {
    title: 'Fire Sprinklers and Accessories in Chennai | Riser Technologies',
    description: 'Authorized supplier of fire sprinklers and all accessories in Chennai — sprinkler heads, valves, fittings. UL Listed, FM Approved. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://risertech.in'}/fire-sprinklers-and-accessories-chennai`,
    type: 'website',
  },
};

const accessories = [
  { icon: Shield, title: 'Pendent & Upright Sprinklers', desc: 'Standard response and quick response pendent and upright sprinkler heads for wet and dry pipe systems. Available in brass and chrome finish for all temperature ratings.' },
  { icon: Award, title: 'Concealed Sprinklers', desc: 'Flush-mount concealed sprinkler heads with decorative cover plates for offices, hotels, hospitals, and commercial buildings in Chennai. Maintains ceiling aesthetics.' },
  { icon: CheckCircle, title: 'ESFR Sprinkler Heads', desc: 'Early Suppression Fast Response (ESFR) sprinkler heads for high-piled storage warehouses, logistics parks, and cold storage facilities in Chennai and surrounding areas.' },
  { icon: Shield, title: 'Alarm Check & Control Valves', desc: 'Alarm check valves, OS&Y gate valves, butterfly valves, and complete valve trim assemblies for wet pipe systems across Chennai commercial and industrial projects.' },
  { icon: Award, title: 'Pre-Action & Deluge Valves', desc: 'Reliable DDX double interlock pre-action valves for data centres, single interlock valves for archives, and deluge valves for transformer and process area protection in Chennai.' },
  { icon: CheckCircle, title: 'Gauges, Alarms & Fittings', desc: 'Pressure gauges, waterflow alarm switches, tamper supervision switches, sprinkler pipe grooved fittings, and hangers for complete NFPA 13 installations in Chennai.' },
];

const areas = [
  'Ambattur Industrial Estate',
  'Guindy & Ekkattuthangal',
  'OMR (IT Corridor)',
  'Perungudi & Sholinganallur',
  'Sriperumbudur SEZ',
  'Manali & Ennore Industrial Area',
  'Oragadam Industrial Corridor',
  'Anna Nagar & T. Nagar (Commercial)',
];

const faqs = [
  {
    q: 'Where can I buy fire sprinkler accessories in Chennai?',
    a: 'Riser Technologies, based in Chennai (Krishna Nagar, Periyar Salai), is the authorized dealer for Reliable Automatic Sprinkler Co. (USA) in Tamil Nadu. We stock and supply the complete range of fire sprinkler accessories in Chennai — sprinkler heads, valves, pipe fittings, guards, gauges, and alarm devices. Same-day availability for standard items; call +91 9787666104.',
  },
  {
    q: 'Do you supply sprinkler accessories for industrial projects in Chennai?',
    a: 'Yes. Riser Technologies regularly supplies sprinkler accessories for industrial projects across Chennai — Ambattur, Guindy, Sriperumbudur, Oragadam, Manali, and Ennore. We supply to EPC contractors, MEP consultants, and project management companies with technical support and delivery across Chennai and Tamil Nadu.',
  },
  {
    q: 'What approvals do your sprinkler accessories carry?',
    a: 'All sprinkler accessories supplied by Riser Technologies are UL Listed (Underwriters Laboratories, USA) and FM Approved (FM Global, USA). These are the approvals required by TAC (Tariff Advisory Committee) and insurance underwriters for fire protection systems in Indian commercial and industrial buildings. Products comply with NBC 2016 requirements.',
  },
  {
    q: 'Can you supply accessories for an existing sprinkler system in Chennai?',
    a: 'Yes. We supply accessories for replacement, maintenance, and expansion of existing sprinkler systems. Bring your system specifications or the existing product details and we will match the correct Reliable brand accessory. We also provide annual maintenance contract (AMC) services for sprinkler systems across Chennai.',
  },
];

export default function FireSprinklersAndAccessoriesChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Fire Sprinklers and Accessories Chennai', url: '/fire-sprinklers-and-accessories-chennai' },
      ]} />
      <FAQPageSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-red-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Fire Sprinklers and Accessories in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies the complete range of{' '}
            <strong className="text-amber-400">fire sprinklers and accessories in Chennai</strong>{' '}
            — sprinkler heads, valves, pipe fittings, guards, gauges, and all system components for
            industrial, commercial, and data centre projects. UL Listed &amp; FM Approved. NFPA 13.
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
            Sprinkler Accessories We Supply in Chennai
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Areas We Serve in Chennai
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {areas.map((area) => (
              <div key={area} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Fire Sprinkler Accessories Chennai</h2>
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
              { label: 'Fire Sprinklers & Accessories', href: '/fire-sprinklers-and-accessories' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get Fire Sprinkler Accessories in Chennai</h2>
          <p className="text-slate-400 mb-8">UL Listed · FM Approved · NFPA 13 · Same-day availability · Pan-Tamil Nadu delivery</p>
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
