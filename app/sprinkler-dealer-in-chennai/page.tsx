import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema , FAQPageSchema } from '@/components/seo/StructuredData';
import { CheckCircle, Phone, Mail, MapPin, Award, Shield, Droplet , ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sprinkler Dealer in Chennai | Authorized Reliable Sprinkler Dealer — Riser Technologies',
  description:
    'Riser Technologies — #1 Sprinkler Dealer in Chennai. Authorized dealer for Reliable Automatic Sprinkler Co. (USA). UL Listed, FM Approved pendent, upright, ESFR & concealed sprinklers. Best price in Chennai, Tamil Nadu. Call +91 9787666104.',
  keywords: [
    'Sprinkler Dealer in Chennai',
    'sprinkler dealer chennai',
    'fire sprinkler dealer in chennai',
    'sprinkler dealer near me',
    'sprinkler dealer near me chennai',
    'best sprinkler dealer in chennai',
    'top sprinkler dealer in chennai',
    'reliable sprinkler dealer in chennai',
    'authorized sprinkler dealer chennai',
    'sprinkler supplier in chennai',
    'sprinkler supplier chennai',
    'fire sprinkler supplier chennai',
    'pendent sprinkler dealer chennai',
    'upright sprinkler dealer chennai',
    'concealed sprinkler dealer chennai',
    'esfr sprinkler dealer in chennai',
    'sprinkler at best price chennai',
    'UL FM approved sprinkler dealer chennai',
  ],
  alternates: {
    canonical: '/sprinkler-dealer-in-chennai',
  },
  openGraph: {
    title: 'Sprinkler Dealer in Chennai | Riser Technologies',
    description:
      'Authorized dealer for Reliable Fire Sprinklers (USA) in Chennai. UL/FM Approved pendent, upright, ESFR & concealed sprinklers at best price. Call +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sprinkler-dealer-in-chennai`,
    type: 'website',
  },
};

const products = [
  {
    name: 'Pendent Sprinkler',
    slug: '/products/sprinklers',
    desc: 'Standard & quick-response pendent sprinklers for commercial ceilings. K5.6 to K11.2, UL Listed.',
  },
  {
    name: 'Upright Sprinkler',
    slug: '/products/sprinklers',
    desc: 'Conventional upright sprinklers for exposed pipe systems in warehouses and factories.',
  },
  {
    name: 'Concealed Sprinkler',
    slug: '/products/sprinklers',
    desc: 'Flat-plate concealed pendent sprinklers for offices, hotels and aesthetically sensitive spaces.',
  },
  {
    name: 'ESFR Sprinkler',
    slug: '/products/sprinklers',
    desc: 'Early Suppression Fast Response (ESFR) sprinklers for high-bay warehouse storage protection.',
  },
  {
    name: 'Residential Sprinkler',
    slug: '/products/sprinklers',
    desc: 'UL Listed residential sprinklers for apartments and villas — K4.2, NFPA 13D compliant.',
  },
  {
    name: 'Extended Coverage Sprinkler',
    slug: '/products/sprinklers',
    desc: 'Covers larger areas per head, reducing pipe count and installation cost.',
  },
];

const faqs = [
  {
    q: 'Who is the authorized sprinkler dealer in Chennai?',
    a: 'Riser Technologies is the authorized dealer and distributor for Reliable Automatic Sprinkler Co. (USA) in Chennai and across India. We supply genuine, UL Listed and FM Approved sprinkler heads, system valves, and accessories directly from the manufacturer.',
  },
  {
    q: 'What types of fire sprinklers does Riser Technologies supply in Chennai?',
    a: 'We supply pendent, upright, concealed, sidewall, ESFR (storage), residential, extended coverage, dry-barrel, and intermediate-level sprinklers. All products are UL Listed and/or FM Approved with temperature ratings from 57°C to 260°C.',
  },
  {
    q: 'What is the price of a fire sprinkler in Chennai?',
    a: 'Sprinkler prices in Chennai vary by type, K-factor, temperature rating, and finish. Standard pendent and upright sprinklers start at competitive rates. Contact Riser Technologies at +91 9787666104 for a quotation with the best price in Chennai.',
  },
  {
    q: 'Do you supply sprinklers for warehouses and factories in Chennai?',
    a: 'Yes. We supply ESFR and CMDA storage sprinklers for warehouses, cold storage, and high-bay factories across Chennai and Tamil Nadu, all NFPA 13 compliant.',
  },
  {
    q: 'Can Riser Technologies provide fire sprinkler system design in Chennai?',
    a: 'Yes. Beyond supplying sprinkler heads, we provide technical assistance for sprinkler system design, hydraulic calculations, and BOQ preparation in accordance with NFPA 13 standards.',
  },
];

export default function SprinklerDealerChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Sprinkler Dealer in Chennai', url: '/sprinkler-dealer-in-chennai' },
        ]}
      />
      <FAQPageSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />


      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Award className="w-3.5 h-3.5" />
            Authorized Reliable Sprinkler Dealer · Chennai
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Sprinkler Dealer in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies — Authorized Indian dealer for{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong>. UL
            Listed &amp; FM Approved pendent, upright, ESFR and concealed sprinklers supplied across
            Chennai, Tamil Nadu and India at best price.
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
              Get a Quote
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


      {/* Why choose us */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Why Choose Riser Technologies as Your Sprinkler Dealer in Chennai?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: 'Authorized Dealer',
                desc: 'Official authorized dealer for Reliable Automatic Sprinkler Co. (USA) — the only way to get genuine, warranty-backed Reliable products in India.',
              },
              {
                icon: Shield,
                title: 'UL Listed & FM Approved',
                desc: 'Every sprinkler we supply is UL Listed and/or FM Approved, meeting NFPA 13, IS 15105, and international fire safety standards.',
              },
              {
                icon: Droplet,
                title: 'Full Product Range',
                desc: 'Pendent, upright, sidewall, concealed, ESFR, residential, extended coverage — the complete Reliable sprinkler portfolio in one place.',
              },
              {
                icon: CheckCircle,
                title: 'Best Price in Chennai',
                desc: 'As a direct authorized dealer, we offer competitive pricing on all Reliable sprinkler products with no middlemen.',
              },
              {
                icon: MapPin,
                title: 'Chennai & Tamil Nadu',
                desc: 'Serving Chennai, Coimbatore, Madurai, Trichy, Salem and all major cities across Tamil Nadu and India.',
              },
              {
                icon: Phone,
                title: 'Technical Support',
                desc: 'Free design assistance, hydraulic calculations, and NFPA 13 BOQ preparation for your fire sprinkler system project.',
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
            Sprinklers We Supply in Chennai
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            All products are genuine Reliable Automatic Sprinkler Co. (USA) — UL Listed & FM
            Approved.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link
                key={p.name}
                href={p.slug}
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

      {/* About content — keyword-rich body text */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Authorized Sprinkler Dealer in Chennai — Riser Technologies</h2>
          <p>
            Riser Technologies is Chennai's leading authorized <strong>sprinkler dealer</strong> and
            distributor, supplying genuine{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong> products across Tamil Nadu and
            India. As an authorized Reliable dealer in Chennai, we stock the full range of UL Listed
            and FM Approved fire sprinkler heads — from standard pendent and upright sprinklers to
            specialized ESFR storage sprinklers for warehouses.
          </p>
          <p>
            When you buy fire sprinklers from Riser Technologies, you get genuine Reliable products
            backed by manufacturer warranty, competitive pricing, and technical support. Our team
            provides hydraulic design, BOQ preparation, and NFPA 13 compliance guidance — making us
            more than just a supplier, but your fire protection partner in Chennai.
          </p>
          <h3>Fire Sprinkler Types Available in Chennai</h3>
          <ul>
            <li>
              <strong>Pendent Sprinklers</strong> — the most common type for commercial buildings,
              offices, and malls in Chennai. Available in Standard Response and Quick Response.
            </li>
            <li>
              <strong>Upright Sprinklers</strong> — ideal for exposed-pipe systems in factories and
              warehouses across Tamil Nadu.
            </li>
            <li>
              <strong>Concealed Sprinklers</strong> — flat-plate concealed pendent sprinklers for
              aesthetically sensitive spaces like hotels, hospitals, and corporate offices.
            </li>
            <li>
              <strong>ESFR Sprinklers</strong> — Early Suppression Fast Response sprinklers for
              high-bay warehouses and cold storage facilities in Chennai. Eliminates in-rack
              sprinklers.
            </li>
            <li>
              <strong>Extended Coverage Sprinklers</strong> — covers larger areas per head, reducing
              system cost for open-plan spaces.
            </li>
            <li>
              <strong>Residential Sprinklers</strong> — UL Listed sprinklers for apartments, villas,
              and housing projects in Chennai per NFPA 13D.
            </li>
          </ul>
          <h3>Sprinkler Specifications — What We Supply</h3>
          <ul>
            <li>Temperature ratings: 57°C (Orange), 68°C (Red), 79°C (Yellow), 93°C (Green), 141°C (Blue), 182°C (Purple), 227°C (Black)</li>
            <li>K-factors: K-57 (K-2.8), K-80 (K-4.2), K-115 (K-5.6), K-160 (K-8.0), K-200 (K-11.2)</li>
            <li>Working pressure: Up to 12 bar (175 PSI)</li>
            <li>Finishes: Brass, Chrome, White, RAL custom</li>
            <li>Thread: 1/2&quot; NPT and BSP (1/2&quot;, 3/4&quot;, 1&quot;)</li>
            <li>Certifications: UL Listed, FM Approved, LPCB certified</li>
          </ul>
          <h3>Service Areas — Sprinkler Dealer Near You</h3>
          <p>
            From our Chennai base, Riser Technologies supplies fire sprinklers across Tamil Nadu
            including Chennai, Coimbatore, Madurai, Trichy, Salem, Tirunelveli, Vellore, and all
            major industrial and commercial hubs. We also supply nationally to Mumbai, Bengaluru,
            Hyderabad, Pune, and Delhi NCR.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            Frequently Asked Questions — Sprinkler Dealer in Chennai
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

      <section className="py-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Sprinkler Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'Sprinkler Distributor Chennai', href: '/sprinkler-distributor-in-chennai' },
              { label: 'Sprinkler System Chennai', href: '/sprinkler-system-chennai' },
              { label: 'ESFR Sprinkler Dealer Chennai', href: '/esfr-sprinkler-dealer-in-chennai' },
              { label: 'Fire Sprinkler System Dealers Chennai', href: '/fire-sprinkler-system-dealers-in-chennai' },
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
            Get a Quote from Chennai's Authorized Sprinkler Dealer
          </h2>
          <p className="text-slate-400 mb-8">
            Need fire sprinklers for your project in Chennai? Contact Riser Technologies today for
            pricing, technical specs, and free design support.
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
