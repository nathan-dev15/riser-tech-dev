import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Shield, Star, Award, CheckCircle, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fire Sprinklers and Accessories India | Pan-India Sprinkler Supplier — Riser Technologies',
  description:
    'Riser Technologies — Pan-India supplier of fire sprinklers and accessories. UL Listed, FM Approved Reliable brand sprinkler heads, valves, pipe fittings, and all system components. Supply to Mumbai, Delhi, Bangalore, Hyderabad, Chennai. NFPA 13. Call +91 9787666104.',
  keywords: [
    'fire sprinklers and accessories India',
    'fire sprinkler accessories India',
    'sprinkler system accessories India',
    'fire sprinkler supplier India',
    'UL listed sprinkler accessories India',
    'FM approved sprinkler India',
    'reliable sprinkler India',
    'NFPA 13 sprinkler accessories India',
    'fire sprinkler heads India',
    'sprinkler valves India',
    'ESFR sprinkler India',
    'concealed sprinkler India',
    'fire protection accessories India',
    'sprinkler distributor India',
    'pan India sprinkler supply',
  ],
  alternates: { canonical: '/fire-sprinklers-and-accessories-india' },
  openGraph: {
    title: 'Fire Sprinklers and Accessories India | Pan-India Supplier — Riser Technologies',
    description: 'Pan-India supplier of UL Listed, FM Approved fire sprinklers and accessories. Reliable brand. Supply to all major cities. NFPA 13. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/fire-sprinklers-and-accessories-india`,
    type: 'website',
  },
};

const products = [
  { icon: Shield, title: 'Standard Sprinkler Heads', desc: 'Pendent, upright, and sidewall sprinkler heads in standard response and quick response. Brass and chrome finish. All temperature ratings. For wet and dry pipe systems.' },
  { icon: Award, title: 'ESFR Sprinklers', desc: 'Early Suppression Fast Response sprinklers (K14, K17, K22, K25) for high-piled storage warehouses and logistics centres. Eliminate in-rack sprinklers for large storage heights.' },
  { icon: CheckCircle, title: 'Concealed Sprinklers', desc: 'Flush-mounted concealed sprinklers with decorative cover plates for offices, hotels, hospitals, malls, and commercial buildings requiring clean ceiling aesthetics.' },
  { icon: Shield, title: 'System Valves', desc: 'Alarm check valves, pre-action valves (single and double interlock DDX), deluge valves, dry pipe valves, OS&Y gate valves, and butterfly valves with complete trim assemblies.' },
  { icon: Award, title: 'Pipe & Grooved Fittings', desc: 'Schedule 10 and 40 black steel pipe, roll-grooved and cut-grooved couplings, elbows, tees, and reducers for fast-track NFPA 13 installations across India.' },
  { icon: CheckCircle, title: 'Alarm & Supervisory Devices', desc: 'Waterflow alarm switches, tamper supervision switches, pressure gauges, air maintenance devices, and low-air alarms for complete system monitoring.' },
];

const cities = [
  { city: 'Chennai', desc: 'HQ & primary stock location' },
  { city: 'Bangalore', desc: 'IT parks, data centres, warehouses' },
  { city: 'Hyderabad', desc: 'Pharma, HITEC City, logistics' },
  { city: 'Mumbai', desc: 'Industrial, commercial, high-rise' },
  { city: 'Delhi / NCR', desc: 'Industrial estates, logistics parks' },
  { city: 'Pune', desc: 'Auto, pharma, IT parks' },
  { city: 'Coimbatore', desc: 'Textile, engineering industries' },
  { city: 'All India', desc: 'Pan-India logistics supply' },
];

const faqs = [
  {
    q: 'Does Riser Technologies supply fire sprinkler accessories across India?',
    a: 'Yes. Riser Technologies supplies UL Listed and FM Approved fire sprinklers and accessories pan-India — to Chennai, Bangalore, Hyderabad, Mumbai, Delhi NCR, Pune, Coimbatore, and other cities. We supply to EPC contractors, MEP consultants, project management companies, and direct end-users. For bulk orders, we arrange logistics delivery to your project site anywhere in India.',
  },
  {
    q: 'What brand of sprinkler accessories do you supply?',
    a: 'Riser Technologies is the authorized Indian distributor for Reliable Automatic Sprinkler Co. (USA) — one of the world\'s largest manufacturers of UL Listed and FM Approved fire sprinklers. The Reliable brand is specified by insurance underwriters, data centre operators, and major EPC contractors across India for its UL/FM approvals and NFPA 13 compliance.',
  },
  {
    q: 'Can you supply sprinkler accessories for large-scale industrial projects in India?',
    a: 'Yes. We supply to warehouses, data centres, pharmaceutical plants, cold storage facilities, automotive plants, and high-rise commercial buildings across India. We provide technical support for NFPA 13 hydraulic design, product selection, and submittal documentation. For large projects, we provide project-specific pricing and staggered delivery schedules.',
  },
  {
    q: 'What certifications do your sprinkler accessories carry for use in India?',
    a: 'All products are UL Listed (Underwriters Laboratories, USA) and FM Approved (FM Global, USA) — the two approvals required by TAC (Tariff Advisory Committee), Indian insurance underwriters, and NBC 2016 (National Building Code of India). Products come with manufacturer test certificates. We can provide full submittal documentation for project approvals and insurance compliance.',
  },
];

export default function FireSprinklersAndAccessoriesIndiaPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Fire Sprinklers and Accessories India', url: '/fire-sprinklers-and-accessories-india' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-red-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Pan-India Supply
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Fire Sprinklers and Accessories — Pan-India Supplier
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies{' '}
            <strong className="text-amber-400">fire sprinklers and accessories across India</strong>{' '}
            — UL Listed, FM Approved Reliable brand sprinkler heads, valves, pipe fittings, and all
            system components to Chennai, Bangalore, Hyderabad, Mumbai, Delhi, and all major cities.
            NFPA 13 compliant.
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
              { value: 'Pan-India', label: 'Supply Network' },
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
            Products We Supply Pan-India
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <div key={p.title} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                  <p.icon className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Cities We Supply Across India
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cities.map((c) => (
              <div key={c.city} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center hover:border-amber-400 transition-colors">
                <div className="font-bold text-gray-900 dark:text-white mb-1">{c.city}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Authorized Pan-India Supplier of Fire Sprinklers and Accessories</h2>
          <p>
            Riser Technologies is the authorized Indian distributor for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong>, supplying UL Listed and
            FM Approved fire sprinklers and accessories to projects across India. Our supply
            network covers all major cities — Chennai, Bangalore, Hyderabad, Mumbai, Delhi NCR,
            Pune, Coimbatore, and beyond.
          </p>
          <p>
            We serve EPC contractors, MEP consultants, project management companies, facility
            managers, and end-users requiring NFPA 13 compliant sprinkler components. All products
            comply with NBC 2016 requirements and carry TAC-recognized UL and FM approvals required
            by Indian insurance underwriters.
          </p>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Fire Sprinkler Accessories India</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
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
              { label: 'Fire Sprinklers & Accessories Chennai', href: '/fire-sprinklers-and-accessories-chennai' },
              { label: 'Fire Sprinkler Supplier India', href: '/fire-sprinkler-supplier-india' },
              { label: 'Reliable Sprinkler Dealers India', href: '/reliable-sprinkler-dealers-india' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get Fire Sprinkler Accessories Anywhere in India</h2>
          <p className="text-slate-400 mb-8">UL Listed · FM Approved · NFPA 13 · Pan-India logistics delivery</p>
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
