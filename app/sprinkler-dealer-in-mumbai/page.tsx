import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Droplet, MapPin, Truck , ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sprinkler Dealer in Mumbai | Fire Sprinkler Supplier Mumbai Maharashtra — Riser Technologies',
  description:
    'Riser Technologies — Authorized Sprinkler Dealer & Supplier in Mumbai, Maharashtra. Reliable Automatic Sprinkler Co. (USA) authorized partner. UL Listed, FM Approved pendent, upright, ESFR & concealed sprinklers at best price. Call +91 9787666104.',
  keywords: [
    'Sprinkler Dealer in Mumbai',
    'sprinkler dealer in mumbai',
    'fire sprinkler dealer in mumbai',
    'sprinkler supplier in mumbai',
    'sprinkler distributor in mumbai',
    'authorized sprinkler dealer mumbai',
    'reliable sprinkler dealer mumbai',
    'esfr sprinkler dealer mumbai',
    'fire sprinkler supplier mumbai',
    'fire protection equipment dealer mumbai',
    'sprinkler at best price mumbai',
    'UL FM approved sprinkler mumbai',
    'fire sprinkler system in mumbai',
    'sprinkler system mumbai',
    'fire sprinkler mumbai maharashtra',
    'sprinkler dealer near me mumbai',
    'fire sprinkler dealer pune',
    'sprinkler supplier maharashtra',
  ],
  alternates: {
    canonical: '/sprinkler-dealer-in-mumbai',
  },
  openGraph: {
    title: 'Sprinkler Dealer in Mumbai | Riser Technologies',
    description:
      'Authorized dealer for Reliable Fire Sprinklers in Mumbai. UL/FM Approved pendent, upright, ESFR & concealed sprinklers. Supply across Maharashtra. Call +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sprinkler-dealer-in-mumbai`,
    type: 'website',
  },
};

const products = [
  {
    name: 'Pendent Sprinklers',
    desc: 'Standard & quick-response pendent sprinklers for Mumbai\'s commercial towers, offices, and malls. K5.6 to K11.2, UL Listed.',
  },
  {
    name: 'ESFR Sprinklers',
    desc: 'Reliable ESFR P22, M336, JL14 for Mumbai and Pune\'s high-bay warehouses and logistics parks in Bhiwandi, Panvel, and JNPT corridors.',
  },
  {
    name: 'Concealed Sprinklers',
    desc: 'Flat-plate concealed sprinklers for Mumbai\'s luxury residential towers, hotels, hospitals, and corporate campuses.',
  },
  {
    name: 'Pre-Action Systems (DDX)',
    desc: 'Reliable DDX pre-action system for Mumbai\'s data centres and server rooms in BKC, Powai, and Navi Mumbai.',
  },
  {
    name: 'Upright Sprinklers',
    desc: 'Industrial upright sprinklers for factories, packaging plants, and exposed-pipe systems across Mumbai and Maharashtra.',
  },
  {
    name: 'Residential Sprinklers',
    desc: 'UL Listed residential sprinklers for Mumbai\'s high-rise apartment and township projects. NFPA 13D and NBC compliant.',
  },
];

const faqs = [
  {
    q: 'Does Riser Technologies supply sprinklers in Mumbai?',
    a: 'Yes. Riser Technologies, based in Chennai, supplies genuine Reliable Automatic Sprinkler Co. (USA) fire sprinklers to Mumbai and across Maharashtra. We serve fire protection contractors, builders, industrial clients, and facility managers across Mumbai, Navi Mumbai, Thane, and Pune.',
  },
  {
    q: 'What types of fire sprinklers are available in Mumbai?',
    a: 'We supply pendent, upright, concealed, sidewall, ESFR, residential, extended coverage, and dry-barrel sprinklers in Mumbai — the complete Reliable sprinkler range, all UL Listed and/or FM Approved.',
  },
  {
    q: 'How do I order sprinklers for a Mumbai or Pune project?',
    a: 'Call us at +91 9787666104 or email sanjeevi@risertech.in with your project details — building type, area, occupancy, and ceiling height. Our team will provide a free BOQ, design support, and competitive project pricing within 24 hours.',
  },
  {
    q: 'What is the delivery time for sprinklers to Mumbai?',
    a: 'Standard stocked items ship from our Chennai hub within 2–3 working days to Mumbai. We coordinate with trusted logistics partners for safe, on-time delivery to your project site. Large project quantities can be phased to match your construction schedule.',
  },
  {
    q: 'Do you supply ESFR sprinklers for warehouses near Mumbai (Bhiwandi, Panvel)?',
    a: 'Yes. The Bhiwandi–Panvel–Taloja warehouse belt is one of India\'s most active logistics zones. We supply Reliable ESFR P22, M336, and JL14 models for high-bay warehouses in that corridor, with free NFPA 13 hydraulic design and BOQ support.',
  },
  {
    q: 'Are your sprinklers compliant with Maharashtra fire safety regulations?',
    a: 'Yes. All Reliable sprinklers we supply are UL Listed and FM Approved, meeting NFPA 13 standards. They comply with Maharashtra\'s fire safety regulations, NBC requirements, and TAC (Tariff Advisory Committee) specifications for insurance compliance.',
  },
];

export default function SprinklerDealerMumbaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Sprinkler Dealer in Mumbai', url: '/sprinkler-dealer-in-mumbai' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Supplying Mumbai &amp; Maharashtra · Authorized Reliable Dealer
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Sprinkler Dealer in Mumbai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong> fire
            sprinklers to contractors, builders, and industrial clients across Mumbai, Navi Mumbai,
            Thane, Pune, and Maharashtra. UL Listed &amp; FM Approved — delivered from our Chennai
            distribution hub.
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
              Get Mumbai Quote
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
            Why Mumbai Clients Choose Riser Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: 'Authorized Reliable Dealer',
                desc: 'Only authorized source for genuine Reliable Fire Sprinklers in India — full manufacturer warranty and genuine UL/FM certifications on every product.',
              },
              {
                icon: Truck,
                title: 'Pan-India Delivery',
                desc: 'Standard items dispatched from Chennai within 2–3 working days to Mumbai. Phased delivery available for large project orders.',
              },
              {
                icon: Shield,
                title: 'UL Listed & FM Approved',
                desc: 'All products meet NFPA 13, NBC, Maharashtra fire safety regulations, and TAC standards required for insurance compliance.',
              },
              {
                icon: Droplet,
                title: 'Full Product Range',
                desc: 'Pendent, upright, ESFR, concealed, pre-action, residential — the complete Reliable sprinkler family for any Mumbai project type.',
              },
              {
                icon: CheckCircle,
                title: 'Technical Support',
                desc: 'Free hydraulic calculations, NFPA 13 design review, and BOQ preparation for your Mumbai or Pune project — at no charge.',
              },
              {
                icon: MapPin,
                title: 'Maharashtra-Wide Coverage',
                desc: 'Mumbai, Navi Mumbai, Thane, Pune, Nashik, Aurangabad, Nagpur — we supply across Maharashtra.',
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
            Sprinklers We Supply in Mumbai
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Genuine Reliable Automatic Sprinkler Co. (USA) — UL Listed &amp; FM Approved.
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
          <h2>Sprinkler Dealer in Mumbai — Our Supply Across Maharashtra</h2>
          <p>
            Riser Technologies, the authorized Indian dealer for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong>, supplies fire sprinklers to
            Mumbai and across Maharashtra. As India\'s financial capital and home to its largest
            port, Mumbai\'s diverse building stock — high-rise residential towers, logistics
            warehouses, luxury hotels, data centres, hospitals, and commercial towers — creates
            constant demand for certified fire sprinkler systems. Riser Technologies brings
            manufacturer-direct Reliable products, competitive pricing, and technical expertise to
            every project in Mumbai and Maharashtra.
          </p>
          <h3>Fire Sprinkler Applications in Mumbai We Serve</h3>
          <ul>
            <li><strong>High-Rise Residential Towers</strong> — residential and concealed pendent sprinklers for Mumbai\'s luxury and mid-range apartment projects</li>
            <li><strong>Commercial &amp; Corporate Offices</strong> — concealed and standard response sprinklers for BKC, Nariman Point, Powai, and Navi Mumbai IT hubs</li>
            <li><strong>Warehouses &amp; Logistics</strong> — ESFR sprinklers for Bhiwandi, Panvel, Taloja, and JNPT warehouse corridors</li>
            <li><strong>Data Centres</strong> — DDX pre-action system for data centres in Navi Mumbai and Mumbai\'s tech parks</li>
            <li><strong>Hospitals &amp; Healthcare</strong> — quick-response concealed sprinklers meeting NBC and NABH requirements</li>
            <li><strong>Hotels &amp; Hospitality</strong> — decorative concealed sprinklers for Mumbai\'s five-star and business hotels</li>
            <li><strong>Industrial &amp; Manufacturing</strong> — industrial sprinklers for Thane, Ambernath, Taloja, and MIDC industrial estates</li>
          </ul>
          <h3>Also Supplying Pune &amp; Rest of Maharashtra</h3>
          <p>
            From our Chennai hub, Riser Technologies supplies fire sprinklers to Pune\'s IT parks and
            manufacturing clusters, Nashik\'s industrial and wine belt, Nagpur\'s logistics hub,
            Aurangabad\'s auto ancillary sector, and all major Maharashtra cities. One supplier,
            pan-Maharashtra coverage.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            FAQ — Sprinkler Dealer in Mumbai
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
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">More locations:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Sprinkler Dealer in Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Sprinkler Dealer in Bangalore', href: '/sprinkler-dealer-in-bangalore' },
              { label: 'Sprinkler Dealer in Hyderabad', href: '/sprinkler-dealer-in-hyderabad' },
              { label: 'Sprinkler Dealer in Coimbatore', href: '/sprinkler-dealer-in-coimbatore' },
              { label: 'Fire Sprinkler Supplier India', href: '/fire-sprinkler-supplier-india' },
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

      <section className="py-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Dealers India', href: '/reliable-sprinkler-dealers-india' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Fire Sprinkler Supplier India', href: '/fire-sprinkler-supplier-india' },
              { label: 'Sprinkler System Delhi', href: '/sprinkler-system-delhi' },
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
            Get Sprinklers Delivered to Your Mumbai Project
          </h2>
          <p className="text-slate-400 mb-8">
            Contact Riser Technologies for competitive pricing, fast delivery, and free NFPA 13
            design support for your Mumbai or Maharashtra project.
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
