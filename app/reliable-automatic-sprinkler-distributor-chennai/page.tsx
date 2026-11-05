import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Star , ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Automatic Sprinkler Distributor Chennai | Authorized Reliable Distributor India — Riser Technologies',
  description:
    'Riser Technologies — Authorized distributor for Reliable Automatic Sprinkler Co. (USA) in Chennai and India. Genuine UL Listed, FM Approved Reliable fire sprinklers at best price. Manufacturer warranty. Call +91 9787666104.',
  keywords: [
    'Reliable Automatic Sprinkler distributor Chennai',
    'reliable automatic sprinkler distributor in chennai',
    'reliable automatic sprinkler co distributor india',
    'reliable automatic sprinkler co chennai',
    'reliable automatic sprinkler company chennai',
    'reliable automatic sprinkler co india distributor',
    'reliable fire sprinkler distributor chennai',
    'reliable sprinkler authorized distributor chennai',
    'reliable automatic sprinkler supplier chennai',
    'reliable sprinkler distributor india',
  ],
  alternates: { canonical: '/reliable-automatic-sprinkler-distributor-chennai' },
  openGraph: {
    title: 'Reliable Automatic Sprinkler Distributor Chennai | Riser Technologies',
    description: 'Authorized distributor for Reliable Automatic Sprinkler Co. (USA) in Chennai — genuine Reliable fire sprinklers with manufacturer warranty and UL/FM docs. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-automatic-sprinkler-distributor-chennai`,
    type: 'website',
  },
};

const credentials = [
  'Official Reliable Automatic Sprinkler Co. (USA) authorized distribution partner',
  'Manufacturer authorization letter provided with every project order',
  'Genuine UL Listed & FM Approved products — full certification documents supplied',
  'Complete Reliable product range: sprinklers, valves, fittings, and accessories',
  'Factory-fresh stock from Reliable\'s Liberty, South Carolina manufacturing facility',
  'Free NFPA 13 hydraulic design and technical support',
];

const faqs = [
  {
    q: 'Who is the authorized Reliable Automatic Sprinkler Co. distributor in Chennai?',
    a: 'Riser Technologies is the officially authorized distributor for Reliable Automatic Sprinkler Co. (USA) in Chennai and India. As Reliable\'s appointed Indian distribution partner, we are the only authorized source for genuine Reliable products in the country.',
  },
  {
    q: 'What does "authorized distributor" mean for Reliable sprinklers?',
    a: 'An authorized distributor is directly appointed by the manufacturer — Reliable Automatic Sprinkler Co. (USA) — to distribute their products. This means every product we supply is genuine, comes with manufacturer warranty, and is backed by full UL/FM certification documentation. It is the only way to purchase authentic Reliable sprinklers in India.',
  },
  {
    q: 'What Reliable Automatic Sprinkler Co. products does Riser Technologies distribute in Chennai?',
    a: 'We distribute the complete Reliable Automatic Sprinkler Co. portfolio: fire sprinkler heads (pendent, upright, concealed, sidewall, ESFR, residential, dry-barrel, LB11 lithium-ion), system valves (alarm check, dry-pipe, DDV deluge, DDX double-interlock pre-action), grooved fittings, and all accessories.',
  },
  {
    q: 'Can I buy Reliable sprinklers directly from the factory in India?',
    a: 'No. Reliable Automatic Sprinkler Co. (USA) sells in India exclusively through Riser Technologies, their authorized Indian distribution partner. All other sellers offer either grey-market imports or uncertified products. For genuine Reliable sprinklers with manufacturer warranty in India, contact Riser Technologies.',
  },
];

export default function ReliableAutomaticSprinklerDistributorChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Automatic Sprinkler Distributor Chennai', url: '/reliable-automatic-sprinkler-distributor-chennai' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Distribution Partner · Reliable Automatic Sprinkler Co. (USA)
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable Automatic Sprinkler Distributor in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is the <strong className="text-amber-400">authorized Indian distributor</strong> for{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong> — supplying
            genuine Reliable fire sprinklers to Chennai, Tamil Nadu, and pan-India with manufacturer
            warranty and full UL/FM certification documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              Request Distributor Quote
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

      <section className="py-12 bg-amber-50 dark:bg-gray-800 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Award className="w-14 h-14 text-amber-500 shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Authorization Credentials — Riser Technologies
              </h2>
              <ul className="space-y-2">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable Automatic Sprinkler Co. Authorized Distributor in Chennai</h2>
          <p>
            Riser Technologies is the officially appointed distributor for{' '}
            <strong>Reliable Automatic Sprinkler Co.</strong> (Liberty, South Carolina, USA) in India.
            As Reliable\'s Indian distribution partner, we bring the complete Reliable product range to
            Chennai and across India — from standard commercial sprinklers to specialist products like
            ESFR, DDX pre-action, DDV deluge, and the LB11 lithium-ion battery sprinkler.
          </p>
          <p>
            Reliable Automatic Sprinkler Co. is one of the world\'s leading fire sprinkler manufacturers,
            with over 100 years of manufacturing history and a single state-of-the-art production facility
            in Liberty, South Carolina. All Reliable products are UL Listed and FM Approved — the
            internationally recognized certifications required for Indian building authority approvals,
            insurance, and engineer specifications.
          </p>
          <h3>Why Source from the Authorized Distributor?</h3>
          <ul>
            <li><strong>Genuine products</strong> — only the authorized distributor can supply factory-direct, warranty-backed Reliable sprinklers in India</li>
            <li><strong>Full documentation</strong> — UL/FM test certificates, installation data sheets, and manufacturer warranty with every order</li>
            <li><strong>Technical support</strong> — NFPA 13 hydraulic design assistance, product selection guidance, and project support</li>
            <li><strong>No grey-market risk</strong> — unauthorized "Reliable" products may lack certification and void insurance coverage</li>
          </ul>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">FAQ — Reliable Automatic Sprinkler Distributor Chennai</h2>
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

      <section className="py-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'Reliable ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
              { label: 'Authorized Distributor Chennai', href: '/authorized-sprinkler-distributor-in-chennai' },
              { label: 'Reliable Dealers India', href: '/reliable-sprinkler-dealers-india' },
              { label: 'Sprinkler Distributor Chennai', href: '/sprinkler-distributor-in-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Source Genuine Reliable Sprinklers from the Authorized Distributor</h2>
          <p className="text-slate-400 mb-8">Manufacturer warranty · UL/FM certification documents · Free NFPA 13 design support · Pan-India supply</p>
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
