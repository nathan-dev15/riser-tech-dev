import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema , FAQPageSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Droplet, MapPin, Truck , ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sprinkler Dealer in Bangalore | Fire Sprinkler Supplier Bengaluru — Riser Technologies',
  description:
    'Riser Technologies — Authorized Sprinkler Dealer & Supplier in Bangalore (Bengaluru), Karnataka. Reliable Automatic Sprinkler Co. (USA) authorized partner. UL Listed, FM Approved pendent, upright, ESFR & concealed sprinklers at best price. Call +91 9787666104.',
  keywords: [
    'Sprinkler Dealer in Bangalore',
    'sprinkler dealer in bangalore',
    'sprinkler dealer in bengaluru',
    'fire sprinkler dealer in bangalore',
    'fire sprinkler dealer in bengaluru',
    'sprinkler supplier in bangalore',
    'sprinkler supplier in bengaluru',
    'sprinkler distributor in bangalore',
    'authorized sprinkler dealer bangalore',
    'reliable sprinkler dealer bangalore',
    'esfr sprinkler dealer bangalore',
    'esfr sprinkler supplier bengaluru',
    'concealed sprinkler dealer bangalore',
    'fire sprinkler supplier bangalore',
    'fire protection equipment dealer bangalore',
    'sprinkler dealer near me bangalore',
    'sprinkler at best price bangalore',
    'UL FM approved sprinkler dealer bangalore',
  ],
  alternates: {
    canonical: '/sprinkler-dealer-in-bangalore',
  },
  openGraph: {
    title: 'Sprinkler Dealer in Bangalore | Riser Technologies',
    description:
      'Authorized dealer for Reliable Fire Sprinklers in Bangalore. UL/FM Approved pendent, upright, ESFR & concealed sprinklers. Supply across Karnataka. Call +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sprinkler-dealer-in-bangalore`,
    type: 'website',
  },
};

const products = [
  {
    name: 'Pendent Sprinklers',
    desc: 'Standard & quick-response pendent sprinklers for offices, malls, and commercial buildings in Bangalore. K5.6 to K11.2, UL Listed.',
  },
  {
    name: 'ESFR Sprinklers',
    desc: 'Reliable ESFR P22, M336, JL14 for Bangalore\'s high-bay warehouses and logistics parks. Eliminates in-rack sprinklers.',
  },
  {
    name: 'Concealed Sprinklers',
    desc: 'Flat-plate concealed sprinklers for Bangalore\'s tech parks, hotels, and hospitals where aesthetics matter.',
  },
  {
    name: 'Upright Sprinklers',
    desc: 'Industrial-grade upright sprinklers for factories, manufacturing plants, and exposed-pipe systems in Bangalore.',
  },
  {
    name: 'Extended Coverage Sprinklers',
    desc: 'Covers larger areas per head — ideal for Bangalore\'s large-span open-plan offices and commercial spaces.',
  },
  {
    name: 'Residential Sprinklers',
    desc: 'UL Listed residential sprinklers for Bangalore\'s apartment buildings and gated communities. NFPA 13D compliant.',
  },
];

const faqs = [
  {
    q: 'Does Riser Technologies supply sprinklers in Bangalore?',
    a: 'Yes. Riser Technologies, based in Chennai, supplies genuine Reliable Automatic Sprinkler Co. (USA) products to Bangalore and across Karnataka. We service fire protection contractors, MEP firms, builders, and industrial clients in Bengaluru with same-week delivery on stocked items.',
  },
  {
    q: 'What types of fire sprinklers are available in Bangalore?',
    a: 'We supply pendent, upright, concealed, sidewall, ESFR, residential, extended coverage, and dry-barrel sprinklers in Bangalore — the complete Reliable product portfolio. All UL Listed and/or FM Approved.',
  },
  {
    q: 'How do I order sprinklers for a Bangalore project?',
    a: 'Call us at +91 9787666104 or email sanjeevi@risertech.in with your project requirements — building type, floor area, occupancy class, and ceiling height. Our team will prepare a BOQ, hydraulic design support, and competitive pricing for your Bangalore project.',
  },
  {
    q: 'What is the delivery time for sprinklers to Bangalore?',
    a: 'Standard pendent and upright sprinklers ship from our Chennai stock within 2–3 working days to Bangalore. Special models like ESFR may take 5–7 days depending on stock availability. We coordinate with trusted logistics partners for safe delivery.',
  },
  {
    q: 'Do you supply ESFR sprinklers for warehouses in Bangalore?',
    a: 'Yes. With Bangalore and North Karnataka seeing massive growth in logistics parks and e-commerce warehouses, ESFR sprinklers are in high demand. We supply Reliable ESFR P22, M336, JL14, and JL17 models to warehouse projects across Bengaluru and Karnataka.',
  },
];

export default function SprinklerDealerBangalorePage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Sprinkler Dealer in Bangalore', url: '/sprinkler-dealer-in-bangalore' },
        ]}
      />
      <FAQPageSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />


      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Supplying Bangalore &amp; Karnataka · Authorized Reliable Dealer
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Sprinkler Dealer in Bangalore
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong> fire
            sprinklers to contractors, builders, and industrial clients in Bangalore (Bengaluru) and
            across Karnataka. UL Listed &amp; FM Approved — delivered from our Chennai distribution hub.
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
              Get Bangalore Quote
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


      {/* Why choose */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Why Bangalore Clients Choose Riser Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: 'Authorized Reliable Dealer',
                desc: 'Only authorized source for genuine Reliable Fire Sprinklers in India — full manufacturer warranty on every product.',
              },
              {
                icon: Truck,
                title: 'Fast Delivery to Bangalore',
                desc: 'Stocked items dispatched from Chennai within 2–3 working days. Reliable logistics partners for safe delivery to Bengaluru.',
              },
              {
                icon: Shield,
                title: 'UL Listed & FM Approved',
                desc: 'All products meet UL, FM, and NFPA 13 standards required by insurance, building authorities, and fire consultants in Bangalore.',
              },
              {
                icon: Droplet,
                title: 'Full Product Range',
                desc: 'Pendent, upright, ESFR, concealed, sidewall, residential — the complete Reliable sprinkler family for any project in Bangalore.',
              },
              {
                icon: CheckCircle,
                title: 'Technical Support',
                desc: 'Free hydraulic calculations, NFPA 13 design review, and BOQ preparation for your Bangalore project — no charge.',
              },
              {
                icon: MapPin,
                title: 'Pan-Karnataka Supply',
                desc: 'Bangalore, Mysore, Hubli, Mangalore, Belgaum — we supply across Karnataka from our Chennai distribution centre.',
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

      {/* Products */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Sprinklers We Supply in Bangalore
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Genuine Reliable Automatic Sprinkler Co. (USA) products — UL Listed &amp; FM Approved.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link
                key={p.name}
                href="/products/sprinklers"
                className="group p-5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 hover:shadow-md transition-all"
              >
                <Droplet className="w-6 h-6 text-amber-500 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-amber-600 transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{p.desc}</p>
              </Link>
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

      {/* Body content */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Sprinkler Dealer in Bangalore — About Our Supply to Bengaluru</h2>
          <p>
            Riser Technologies, headquartered in Chennai, is the authorized Indian partner for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong> and supplies fire sprinklers to
            Bangalore and across Karnataka. As Bengaluru continues to expand — with new data centres,
            warehouses, tech parks, residential towers, and cold storage facilities — the demand for
            certified fire sprinkler systems has grown dramatically, and Riser Technologies is the
            trusted source for contractors and builders in the city.
          </p>
          <h3>Fire Sprinkler Applications in Bangalore We Serve</h3>
          <ul>
            <li><strong>IT Parks &amp; Tech Campuses</strong> — concealed and standard pendent sprinklers for large commercial office floors</li>
            <li><strong>Warehouses &amp; Logistics Parks</strong> — ESFR sprinklers for high-bay storage in Bangalore\'s growing industrial corridors (Whitefield, Bommasandra, Peenya)</li>
            <li><strong>Data Centres</strong> — Reliable DDX pre-action system to prevent accidental discharge near servers</li>
            <li><strong>Residential Apartments</strong> — UL Listed residential pendent and concealed sprinklers per NFPA 13R</li>
            <li><strong>Hospitals &amp; Healthcare</strong> — quick-response concealed sprinklers for wards, OTs, and corridors</li>
            <li><strong>Hotels &amp; Hospitality</strong> — decorative concealed sprinklers meeting NBC and TAC requirements</li>
            <li><strong>Cold Storage</strong> — dry-barrel ESFR sprinklers for Bangalore\'s growing food processing and pharmaceutical cold chain sector</li>
          </ul>
          <h3>Sprinkler Specifications — What We Supply to Bangalore</h3>
          <ul>
            <li>Temperature ratings: 57°C to 260°C (Orange, Red, Yellow, Green, Blue, Purple, Black)</li>
            <li>K-factors: K-57 (K-2.8), K-80 (K-4.2), K-115 (K-5.6), K-160 (K-8.0), K-200 (K-11.2), K-240 (K-14.0), K-285 (K-16.8)</li>
            <li>Thread: ½&quot; NPT and BSP in ½&quot;, ¾&quot;, 1&quot;</li>
            <li>Finishes: Brass, Chrome, White, RAL custom</li>
            <li>Certifications: UL Listed, FM Approved, LPCB certified</li>
          </ul>
          <h3>How to Order Sprinklers for Your Bangalore Project</h3>
          <p>
            Share your project details — building type, area, occupancy class, and ceiling heights —
            with our sales team. We will prepare a free BOQ, recommended sprinkler models, and project
            pricing within 24 hours. Call <strong>+91 9787666104</strong> or email{' '}
            <strong>sanjeevi@risertech.in</strong>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            FAQ — Sprinkler Dealer in Bangalore
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
      <section className="py-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Sprinkler Dealer in Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Sprinkler Dealer in Coimbatore', href: '/sprinkler-dealer-in-coimbatore' },
              { label: 'Fire Sprinkler Supplier India', href: '/fire-sprinkler-supplier-india' },
              { label: 'ESFR Sprinkler Dealer Chennai', href: '/esfr-sprinkler-dealer-in-chennai' },
              { label: 'Authorized Distributor Chennai', href: '/authorized-sprinkler-distributor-in-chennai' },
              { label: 'All Products', href: '/products' },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Get Sprinklers Delivered to Your Bangalore Project
          </h2>
          <p className="text-slate-400 mb-8">
            Contact Riser Technologies for competitive pricing, fast delivery, and free NFPA 13 design
            support for your Bangalore project.
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
