import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { CheckCircle, Phone, Mail, MapPin, Award, Shield, Droplet, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sprinkler Distributor in Chennai | Authorized Reliable Sprinkler Distributor — Riser Technologies',
  description:
    'Riser Technologies — Authorized Sprinkler Distributor in Chennai. Official Reliable Automatic Sprinkler Co. (USA) distributor in India. Wholesale supply of UL Listed, FM Approved fire sprinklers across Tamil Nadu. Call +91 9787666104.',
  keywords: [
    'Sprinkler Distributor in Chennai',
    'sprinkler distributor chennai',
    'authorized sprinkler distributor in chennai',
    'authorised sprinkler distributor chennai',
    'fire sprinkler distributor in chennai',
    'fire sprinkler distributor chennai',
    'sprinkler distributors in chennai',
    'sprinkler distributors in chennai near me',
    'Sprinkler Wholesalers & Distributors in Chennai',
    'sprinkler wholesalers in chennai',
    'Fire Sprinkler System Wholesalers & Distributors in Chennai',
    'Pendent Sprinkler Wholesalers & Distributors in Chennai',
    'reliable sprinkler distributor india',
    'reliable sprinkler distributor chennai',
    'authorized distributor for reliable sprinklers',
    'sprinklers at best price in chennai tamil nadu',
    'Sprinkler System In Chennai Tamil Nadu At Best Price',
  ],
  alternates: {
    canonical: '/sprinkler-distributor-in-chennai',
  },
  openGraph: {
    title: 'Sprinkler Distributor in Chennai | Riser Technologies',
    description:
      'Authorized distributor for Reliable Automatic Sprinkler Co. (USA) in Chennai. Wholesale supply of UL/FM Approved sprinklers across Tamil Nadu & India. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sprinkler-distributor-in-chennai`,
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Who is the authorized sprinkler distributor in Chennai?',
    a: 'Riser Technologies is the authorized distributor for Reliable Automatic Sprinkler Co. (USA) in Chennai and across India. We are the official Reliable partner supplying genuine UL Listed and FM Approved fire sprinkler products to contractors, consultants, and project developers across Tamil Nadu.',
  },
  {
    q: 'Do you supply sprinklers wholesale in Chennai?',
    a: 'Yes. As the authorized Reliable distributor in Chennai, Riser Technologies supplies sprinklers at wholesale and distributor pricing for bulk orders. We supply to fire protection contractors, MEP contractors, builders, and developers across Tamil Nadu and India.',
  },
  {
    q: 'What is the minimum order quantity for sprinkler distribution?',
    a: 'We accommodate both small orders for maintenance and large project bulk orders. Contact our sales team at sales@risertech.in or +91 9787666104 for pricing based on your project requirement.',
  },
  {
    q: 'Do you distribute sprinklers outside Chennai in Tamil Nadu?',
    a: 'Yes. From our Chennai distribution centre, we supply fire sprinklers across Tamil Nadu including Coimbatore, Madurai, Trichy, Salem, Tirunelveli, Vellore, Erode, and Tirupur. We also supply nationally.',
  },
  {
    q: 'Are the sprinklers you distribute UL Listed and FM Approved?',
    a: 'All Reliable Automatic Sprinkler Co. products we distribute are UL Listed and/or FM Approved, meeting NFPA 13 standards. We also carry LPCB certified products for projects requiring that standard.',
  },
];

export default function SprinklerDistributorChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Sprinkler Distributor in Chennai', url: '/sprinkler-distributor-in-chennai' },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Award className="w-3.5 h-3.5" />
            Authorized Reliable Sprinkler Distributor · India
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Sprinkler Distributor in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies — Authorized distributor for{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong> in
            Chennai, Tamil Nadu &amp; India. Wholesale supply of UL Listed, FM Approved fire
            sprinklers for contractors, builders and project developers.
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
              Request Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Riser Technologies — Your Authorized Sprinkler Distributor in Chennai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: 'Official Authorized Distributor',
                desc: 'Only authorized distribution partner for Reliable Automatic Sprinkler Co. (USA) in Chennai — guaranteeing genuine products with full manufacturer warranty.',
              },
              {
                icon: Truck,
                title: 'Pan-India Distribution',
                desc: 'From our Chennai hub, we distribute across Tamil Nadu, Karnataka, Andhra Pradesh and all major metro cities in India.',
              },
              {
                icon: Shield,
                title: 'UL Listed & FM Approved Stock',
                desc: 'All distributed sprinklers are UL Listed and/or FM Approved. LPCB certified products also available for international project requirements.',
              },
              {
                icon: Droplet,
                title: 'Complete Product Portfolio',
                desc: 'Full Reliable sprinkler range: pendent, upright, concealed, sidewall, ESFR, residential, dry-barrel, extended coverage and intermediate level.',
              },
              {
                icon: CheckCircle,
                title: 'Wholesale Pricing',
                desc: 'Competitive wholesale prices for bulk orders. Direct distributor pricing for fire protection contractors and MEP firms in Tamil Nadu.',
              },
              {
                icon: MapPin,
                title: 'Technical Support Included',
                desc: 'Hydraulic calculations, NFPA 13 design support, and BOQ preparation provided free for project orders.',
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
          <h2>Authorized Sprinkler Distributor in Chennai — About Riser Technologies</h2>
          <p>
            Riser Technologies is the authorized <strong>sprinkler distributor in Chennai</strong>{' '}
            for Reliable Automatic Sprinkler Co. (USA) — a 100-year-old fire protection manufacturer
            whose products are trusted in warehouses, data centres, hospitals, and high-rise
            buildings worldwide. As the official Reliable distributor in India, we bring
            manufacturer-direct pricing, genuine stock, and technical expertise to every project in
            Chennai and Tamil Nadu.
          </p>
          <p>
            Whether you are a fire protection contractor procuring sprinklers for a large commercial
            project or an MEP consultant specifying equipment for a data centre in Chennai, Riser
            Technologies provides the most competitive sprinkler pricing with same-day availability
            on most standard items.
          </p>
          <h3>Who We Distribute To</h3>
          <ul>
            <li>Fire protection contractors and sub-contractors in Chennai and Tamil Nadu</li>
            <li>MEP (Mechanical, Electrical &amp; Plumbing) contractors</li>
            <li>Builders and real estate developers</li>
            <li>Facility management companies</li>
            <li>Industrial plants, factories, and warehouses</li>
            <li>Government and defence projects</li>
            <li>Hospitals, hotels, and commercial complexes</li>
          </ul>
          <h3>Sprinkler Products Distributed in Chennai</h3>
          <ul>
            <li><strong>Standard &amp; Quick Response Pendent Sprinklers</strong> — K5.6 (K-115) most popular for offices and commercial buildings</li>
            <li><strong>Upright Sprinklers</strong> — for factories and exposed-pipe industrial systems</li>
            <li><strong>ESFR Storage Sprinklers</strong> — P22, M336, JL14, JL17 models for warehouses</li>
            <li><strong>Concealed Sprinklers</strong> — flat-plate for hotels, hospitals and corporate offices</li>
            <li><strong>Extended Coverage</strong> — EC upright and pendent for large-span open-plan spaces</li>
            <li><strong>System Valves</strong> — alarm check valves, dry-pipe valves, deluge, pre-action (DDX)</li>
            <li><strong>Grooved Fittings &amp; Couplings</strong> — compatible with Victaulic and all major grooved systems</li>
          </ul>
          <h3>Distribution Coverage from Chennai</h3>
          <p>
            From our Chennai distribution base, Riser Technologies supplies fire sprinklers to
            contractors and project sites across Tamil Nadu — Chennai, Coimbatore, Madurai, Trichy,
            Salem, Vellore, Erode, Tirupur, Tirunelveli — and nationally to Bengaluru, Hyderabad,
            Mumbai, Pune, and Delhi NCR.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            FAQ — Sprinkler Distributor in Chennai
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Wholesale Sprinkler Pricing for Your Project
          </h2>
          <p className="text-slate-400 mb-8">
            Contact Riser Technologies — Chennai's authorized Reliable sprinkler distributor — for
            project pricing, delivery schedule, and technical documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919787666104"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call +91 9787666104
            </Link>
            <Link
              href="mailto:sales@risertech.in"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors"
            >
              <Mail className="w-4 h-4" />
              sales@risertech.in
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
