import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Droplet, MapPin, Truck , ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sprinkler Dealer in Hyderabad | Fire Sprinkler Supplier Hyderabad — Riser Technologies',
  description:
    'Riser Technologies — Authorized Sprinkler Dealer & Supplier in Hyderabad, Telangana. Reliable Automatic Sprinkler Co. (USA) authorized partner. UL Listed, FM Approved pendent, upright, ESFR & concealed sprinklers at best price. Call +91 9787666104.',
  keywords: [
    'Sprinkler Dealer in Hyderabad',
    'sprinkler dealer in hyderabad',
    'fire sprinkler dealer in hyderabad',
    'sprinkler supplier in hyderabad',
    'sprinkler distributor in hyderabad',
    'authorized sprinkler dealer hyderabad',
    'reliable sprinkler dealer hyderabad',
    'esfr sprinkler dealer hyderabad',
    'fire sprinkler supplier hyderabad',
    'fire protection equipment dealer hyderabad',
    'sprinkler at best price hyderabad',
    'UL FM approved sprinkler hyderabad',
    'fire sprinkler system in hyderabad',
    'sprinkler system hyderabad',
    'fire sprinkler hyderabad telangana',
    'sprinkler dealer near me hyderabad',
  ],
  alternates: {
    canonical: '/sprinkler-dealer-in-hyderabad',
  },
  openGraph: {
    title: 'Sprinkler Dealer in Hyderabad | Riser Technologies',
    description:
      'Authorized dealer for Reliable Fire Sprinklers in Hyderabad. UL/FM Approved pendent, upright, ESFR & concealed sprinklers. Supply across Telangana & AP. Call +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sprinkler-dealer-in-hyderabad`,
    type: 'website',
  },
};

const products = [
  {
    name: 'Pendent Sprinklers',
    desc: 'Standard & quick-response pendent sprinklers for Hyderabad\'s IT parks, offices, and commercial buildings. K5.6 to K11.2, UL Listed.',
  },
  {
    name: 'ESFR Sprinklers',
    desc: 'Reliable ESFR P22, M336, JL14 for Hyderabad\'s high-bay warehouses and logistics parks in Patancheru, Nandigama, and Fab City corridors.',
  },
  {
    name: 'Concealed Sprinklers',
    desc: 'Flat-plate concealed sprinklers for Hyderabad\'s pharma campuses, data centres, hotels, and hospitals where aesthetics matter.',
  },
  {
    name: 'Pre-Action Systems (DDX)',
    desc: 'Reliable DDX pre-action system for Hyderabad\'s data centres and server rooms where accidental water discharge must be prevented.',
  },
  {
    name: 'Upright Sprinklers',
    desc: 'Industrial-grade upright sprinklers for factories, pharmaceutical plants, and exposed-pipe systems across Hyderabad.',
  },
  {
    name: 'Residential Sprinklers',
    desc: 'UL Listed residential sprinklers for Hyderabad\'s high-rise apartments and gated communities. NFPA 13D and NBC compliant.',
  },
];

const faqs = [
  {
    q: 'Does Riser Technologies supply sprinklers in Hyderabad?',
    a: 'Yes. Riser Technologies, based in Chennai, supplies genuine Reliable Automatic Sprinkler Co. (USA) fire sprinklers to Hyderabad and across Telangana and Andhra Pradesh. We serve fire protection contractors, pharmaceutical companies, IT campus builders, and industrial clients in Hyderabad.',
  },
  {
    q: 'What types of fire sprinklers are available in Hyderabad?',
    a: 'We supply pendent, upright, concealed, sidewall, ESFR, residential, extended coverage, and dry-barrel sprinklers in Hyderabad — the complete Reliable sprinkler range, all UL Listed and/or FM Approved.',
  },
  {
    q: 'How do I order sprinklers for a Hyderabad project?',
    a: 'Call us at +91 9787666104 or email sanjeevi@risertech.in with your project details — building type, floor area, occupancy class, and ceiling height. Our team prepares a free BOQ, hydraulic design support, and competitive pricing for your Hyderabad project.',
  },
  {
    q: 'What is the delivery time for sprinklers to Hyderabad?',
    a: 'Standard stocked items ship from Chennai within 2–3 working days to Hyderabad. Special or large-quantity items may take 5–7 days. We coordinate with trusted logistics partners for safe, on-time delivery.',
  },
  {
    q: 'Do you supply ESFR sprinklers for pharmaceutical warehouses in Hyderabad?',
    a: 'Yes. Hyderabad\'s pharma city and industrial corridors have high demand for ESFR and control-mode sprinklers. We supply Reliable ESFR P22, M336, and JL14 models with full NFPA 13 design support for pharmaceutical and manufacturing projects in Hyderabad.',
  },
];

export default function SprinklerDealerHyderabadPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Sprinkler Dealer in Hyderabad', url: '/sprinkler-dealer-in-hyderabad' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Supplying Hyderabad &amp; Telangana · Authorized Reliable Dealer
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Sprinkler Dealer in Hyderabad
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong> fire
            sprinklers to contractors, pharma companies, IT campus builders, and industrial clients
            in Hyderabad and across Telangana &amp; Andhra Pradesh. UL Listed &amp; FM Approved.
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
              Get Hyderabad Quote
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
            Why Hyderabad Clients Choose Riser Technologies
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
                title: 'Fast Delivery to Hyderabad',
                desc: 'Standard items dispatched from Chennai within 2–3 working days to Hyderabad. Reliable logistics for safe delivery to any Hyderabad project site.',
              },
              {
                icon: Shield,
                title: 'UL Listed & FM Approved',
                desc: 'All products meet NFPA 13, NBC, and TAC standards required by insurance, building authorities, and fire consultants in Hyderabad.',
              },
              {
                icon: Droplet,
                title: 'Full Product Range',
                desc: 'Pendent, upright, ESFR, concealed, sidewall, pre-action, residential — the complete Reliable sprinkler family for any Hyderabad project type.',
              },
              {
                icon: CheckCircle,
                title: 'Technical Support',
                desc: 'Free hydraulic calculations, NFPA 13 design review, and BOQ preparation for your Hyderabad project — at no charge.',
              },
              {
                icon: MapPin,
                title: 'Telangana & AP Coverage',
                desc: 'Hyderabad, Secunderabad, Visakhapatnam, Vijayawada, Warangal — we supply across Telangana and Andhra Pradesh.',
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
            Sprinklers We Supply in Hyderabad
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
          <h2>Sprinkler Dealer in Hyderabad — Our Supply to Telangana &amp; Andhra Pradesh</h2>
          <p>
            Riser Technologies, the authorized Indian dealer for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong>, supplies fire sprinklers to
            Hyderabad and across Telangana and Andhra Pradesh. As one of India\'s fastest-growing
            cities — driven by IT, pharmaceuticals, aerospace, data centres, and logistics —
            Hyderabad has strong and growing demand for certified fire sprinkler systems, and Riser
            Technologies is the trusted source for projects in the city.
          </p>
          <h3>Fire Sprinkler Applications in Hyderabad We Serve</h3>
          <ul>
            <li><strong>IT Parks &amp; HITEC City</strong> — concealed and standard pendent sprinklers for large commercial office floors and campuses</li>
            <li><strong>Pharmaceutical Manufacturing</strong> — standard and quick-response sprinklers for Genome Valley and Patancheru pharma facilities</li>
            <li><strong>Data Centres</strong> — Reliable DDX pre-action system to protect server infrastructure from accidental discharge</li>
            <li><strong>Warehouses &amp; Logistics</strong> — ESFR sprinklers for high-bay storage in Hyderabad\'s industrial corridors (Patancheru, Nandigama, Fab City)</li>
            <li><strong>Residential High-Rise</strong> — residential pendent and concealed sprinklers for Hyderabad\'s apartment and township projects</li>
            <li><strong>Hospitals &amp; Healthcare</strong> — quick-response concealed sprinklers meeting NBC and NABH requirements</li>
            <li><strong>Hotels &amp; Hospitality</strong> — decorative concealed sprinklers for hotels across Hyderabad</li>
            <li><strong>Cold Storage</strong> — dry-barrel sprinklers for cold chain and food processing facilities</li>
          </ul>
          <h3>How to Order Sprinklers for Your Hyderabad Project</h3>
          <p>
            Share your project details — building type, area, occupancy class, and ceiling heights —
            with our sales team. We will prepare a free BOQ, recommended sprinkler models, and
            pricing within 24 hours. Call <strong>+91 9787666104</strong> or email{' '}
            <strong>sanjeevi@risertech.in</strong>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            FAQ — Sprinkler Dealer in Hyderabad
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
              { label: 'Sprinkler Dealer in Mumbai', href: '/sprinkler-dealer-in-mumbai' },
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
              { label: 'Reliable Sprinkler Dealers Hyderabad', href: '/reliable-sprinkler-dealers-in-hyderabad' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Reliable Dealers India', href: '/reliable-sprinkler-dealers-india' },
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
            Get Sprinklers Delivered to Your Hyderabad Project
          </h2>
          <p className="text-slate-400 mb-8">
            Contact Riser Technologies for competitive pricing, fast delivery, and free NFPA 13
            design support for your Hyderabad or Telangana project.
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
