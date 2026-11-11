import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema , FAQPageSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Droplet, MapPin, Truck , ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sprinkler Dealer in Coimbatore | Fire Sprinkler Supplier Coimbatore — Riser Technologies',
  description:
    'Riser Technologies — Authorized Sprinkler Dealer & Supplier in Coimbatore, Tamil Nadu. Reliable Automatic Sprinkler Co. (USA) authorized partner. UL Listed, FM Approved fire sprinklers. Best price in Coimbatore. Call +91 9787666104.',
  keywords: [
    'Sprinkler Dealer in Coimbatore',
    'sprinkler dealer in coimbatore',
    'fire sprinkler dealer in coimbatore',
    'sprinkler supplier in coimbatore',
    'sprinkler distributor in coimbatore',
    'authorized sprinkler dealer coimbatore',
    'reliable sprinkler dealer coimbatore',
    'esfr sprinkler dealer coimbatore',
    'fire sprinkler supplier coimbatore',
    'fire protection equipment dealer coimbatore',
    'sprinkler at best price coimbatore',
    'UL FM approved sprinkler coimbatore',
    'fire sprinkler system in coimbatore',
    'fire sprinkler coimbatore',
    'sprinkler system coimbatore',
  ],
  alternates: {
    canonical: '/sprinkler-dealer-in-coimbatore',
  },
  openGraph: {
    title: 'Sprinkler Dealer in Coimbatore | Riser Technologies',
    description:
      'Authorized dealer for Reliable Fire Sprinklers in Coimbatore, Tamil Nadu. UL/FM Approved pendent, upright, ESFR & concealed sprinklers. Call +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sprinkler-dealer-in-coimbatore`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Does Riser Technologies supply sprinklers in Coimbatore?',
    a: 'Yes. Riser Technologies, based in Chennai, supplies genuine Reliable Automatic Sprinkler Co. (USA) fire sprinklers to Coimbatore and across western Tamil Nadu. We serve fire protection contractors, textile mills, cold storage facilities, hospitals, and commercial builders in Coimbatore.',
  },
  {
    q: 'What types of fire sprinklers are available in Coimbatore?',
    a: 'We supply pendent, upright, concealed, sidewall, ESFR, residential, extended coverage, and dry-barrel sprinklers in Coimbatore — the complete Reliable sprinkler range, all UL Listed and/or FM Approved.',
  },
  {
    q: 'What is the delivery time for sprinklers to Coimbatore?',
    a: 'Standard stocked items (pendent, upright sprinklers) ship from Chennai within 2–3 working days to Coimbatore. Special or project-quantity items may take 4–7 days. Contact us at +91 9787666104 for availability.',
  },
  {
    q: 'Do you supply ESFR sprinklers for textile and industrial warehouses in Coimbatore?',
    a: 'Yes. Coimbatore\'s textile mills, logistics warehouses, and industrial plants often require ESFR sprinklers for high-bay storage per NFPA 13. We supply Reliable ESFR P22, M336, and JL14 models to industrial projects across Coimbatore and the Tiruppur belt.',
  },
];

export default function SprinklerDealerCoimbatorePage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Sprinkler Dealer in Coimbatore', url: '/sprinkler-dealer-in-coimbatore' },
        ]}
      />
      <FAQPageSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />


      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Supplying Coimbatore &amp; Western Tamil Nadu · Authorized Reliable Dealer
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Sprinkler Dealer in Coimbatore
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong>{' '}
            fire sprinklers to contractors, industrial clients, and builders in Coimbatore and across
            western Tamil Nadu. UL Listed &amp; FM Approved — fast delivery from Chennai.
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
              Get Coimbatore Quote
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
              { value: 'Pan-India', label: 'Supply' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl sm:text-2xl font-extrabold text-black">{s.value}</div>
                <div className="text-xs font-semibold text-black/70 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Benefits */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Why Coimbatore Clients Choose Riser Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: 'Authorized Reliable Dealer',
                desc: 'Official authorized dealer for Reliable Automatic Sprinkler Co. (USA). Genuine products, full warranty, genuine UL/FM certifications.',
              },
              {
                icon: Truck,
                title: 'Fast Delivery to Coimbatore',
                desc: 'Chennai–Coimbatore is a well-connected route. Standard items delivered in 2–3 working days. Project quantities on schedule.',
              },
              {
                icon: Shield,
                title: 'UL Listed & FM Approved',
                desc: 'All products meet NFPA 13, NBC, and TAC standards required for insurance compliance and building authority approval in Tamil Nadu.',
              },
              {
                icon: Droplet,
                title: 'Full Product Range',
                desc: 'Pendent, upright, ESFR, concealed, sidewall — the complete Reliable sprinkler family for industrial, commercial and residential projects.',
              },
              {
                icon: CheckCircle,
                title: 'Technical Support',
                desc: 'Free hydraulic design, NFPA 13 BOQ, and system layout assistance for your Coimbatore project.',
              },
              {
                icon: MapPin,
                title: 'Coimbatore & Beyond',
                desc: 'Coimbatore, Tiruppur, Erode, Salem, Pollachi — we supply across the western Tamil Nadu industrial belt.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              >
                <item.icon className="w-7 h-7 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Sprinkler Dealer in Coimbatore — Our Supply to Western Tamil Nadu</h2>
          <p>
            Riser Technologies, the authorized Indian dealer for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong>, supplies fire sprinklers to
            Coimbatore and the broader western Tamil Nadu industrial belt including Tiruppur, Erode,
            Salem, and Pollachi. As one of India\'s major industrial cities — home to textile mills,
            engineering companies, cold chain facilities, IT campuses, and hospitals — Coimbatore has
            strong demand for certified fire sprinkler systems.
          </p>
          <h3>Fire Sprinkler Applications in Coimbatore We Supply</h3>
          <ul>
            <li><strong>Textile Mills &amp; Spinning Units</strong> — standard response upright and pendent sprinklers for high-hazard textile environments</li>
            <li><strong>Industrial Warehouses</strong> — ESFR sprinklers for high-bay storage in Coimbatore\'s industrial estates (Peelamedu, Kurichi, SIPCOT)</li>
            <li><strong>Cold Storage</strong> — dry-barrel sprinklers and dry-pipe systems for cold chain and food processing facilities</li>
            <li><strong>IT Parks &amp; Offices</strong> — concealed sprinklers and pre-action systems for Coimbatore\'s growing tech sector</li>
            <li><strong>Hospitals &amp; Healthcare</strong> — quick-response concealed sprinklers for wards, operation theatres, and corridors</li>
            <li><strong>Residential Apartments</strong> — residential pendent sprinklers for Coimbatore\'s growing housing market</li>
            <li><strong>Hotels &amp; Hospitality</strong> — decorative concealed sprinklers for hotels across the city</li>
          </ul>
          <h3>Sprinkler Products Available for Coimbatore Projects</h3>
          <ul>
            <li>Pendent sprinklers — standard &amp; quick response, K5.6 (K-115), K8.0 (K-160)</li>
            <li>Upright sprinklers — conventional, standard response, fusible link options</li>
            <li>ESFR sprinklers — P22 (K-200), M336 (K-240) for high-bay warehouses</li>
            <li>Concealed sprinklers — flat plate pendent, domed concealed</li>
            <li>Residential sprinklers — K4.2 (K-80), NFPA 13D compliant</li>
            <li>System valves — alarm check valves, dry-pipe valves, deluge, pre-action</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            FAQ — Sprinkler Dealer in Coimbatore
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
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">More locations:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Sprinkler Dealer in Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Sprinkler Dealer in Bangalore', href: '/sprinkler-dealer-in-bangalore' },
              { label: 'Fire Sprinkler Supplier India', href: '/fire-sprinkler-supplier-india' },
              { label: 'ESFR Sprinkler Dealer Chennai', href: '/esfr-sprinkler-dealer-in-chennai' },
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

      <section className="py-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Sprinkler Dealers Coimbatore', href: '/reliable-sprinkler-dealers-in-coimbatore' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Reliable Sprinkler Dealer Tamil Nadu', href: '/reliable-sprinkler-dealer-tamil-nadu' },
              { label: 'Sprinkler System Chennai', href: '/sprinkler-system-chennai' },
              { label: 'All Products', href: '/products' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-amber-600 hover:text-amber-700 underline underline-offset-2">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need Sprinklers for Your Coimbatore Project?
          </h2>
          <p className="text-slate-400 mb-8">
            Contact Riser Technologies for competitive pricing, fast delivery, and free NFPA 13
            design support for projects in Coimbatore and western Tamil Nadu.
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
