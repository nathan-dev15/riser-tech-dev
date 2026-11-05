import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Shield, Star, MapPin, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sprinkler System Hyderabad | Fire Sprinkler System Supplier Hyderabad — Riser Technologies',
  description:
    'Riser Technologies — Authorized Reliable sprinkler system supplier in Hyderabad. Wet pipe, ESFR, pre-action, deluge systems for IT parks, pharma, warehouses, data centres. UL Listed, FM Approved. Call +91 9787666104.',
  keywords: [
    'sprinkler system Hyderabad',
    'fire sprinkler system Hyderabad',
    'sprinkler system supplier Hyderabad',
    'sprinkler system dealer Hyderabad',
    'fire sprinkler dealer Hyderabad',
    'sprinkler system HITEC City',
    'sprinkler system Cyberabad',
    'sprinkler system Gachibowli',
    'ESFR sprinkler Hyderabad',
    'Reliable sprinkler Hyderabad',
    'automatic sprinkler system Hyderabad',
    'fire suppression system Hyderabad',
    'sprinkler system pharma Hyderabad',
    'sprinkler system IT park Hyderabad',
    'sprinkler system warehouse Hyderabad',
    'sprinkler system Telangana',
  ],
  alternates: { canonical: '/sprinkler-system-hyderabad' },
  openGraph: {
    title: 'Sprinkler System Hyderabad | Riser Technologies',
    description: 'Authorized Reliable sprinkler system supplier in Hyderabad — HITEC City, Cyberabad, Gachibowli, Pharma City. UL Listed, FM Approved. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sprinkler-system-hyderabad`,
    type: 'website',
  },
};

const hydAreas = [
  { icon: MapPin, name: 'HITEC City & Cyberabad', desc: "Hyderabad's largest IT hub — multi-storey towers for TCS, Microsoft, Google, Apple. Wet pipe and concealed pendent sprinkler systems with FACP integration." },
  { icon: MapPin, name: 'Gachibowli & Financial District', desc: 'High-rise commercial office and hotel district. NFPA 13 compliant wet pipe sprinkler systems for mixed-use developments and 5-star hotels.' },
  { icon: MapPin, name: 'Genome Valley (Pharma City)', desc: "India's largest pharmaceutical cluster — Bharat Biotech, Dr. Reddy's, Aurobindo. Deluge and special hazard suppression systems for research labs and manufacturing." },
  { icon: MapPin, name: 'Logistics (Shamshabad / NH-44)', desc: "Hyderabad's growing logistics parks near Rajiv Gandhi International Airport — ESFR sprinkler systems for high-bay warehouses and cold chain facilities." },
  { icon: MapPin, name: 'Patancheru Industrial Area', desc: 'Chemical and pharmaceutical manufacturing — Mylan, Hetero, Aurobindo API plants. Deluge and foam-water sprinkler systems for high-hazard occupancies.' },
  { icon: MapPin, name: 'Data Centres (Hyderabad)', desc: 'Hyderabad is a fast-growing data centre market — CtrlS, NTT, Equinix, and global hyperscale facilities requiring pre-action fire suppression systems.' },
];

const faqs = [
  {
    q: 'Does Riser Technologies supply sprinkler systems in Hyderabad?',
    a: 'Yes. Riser Technologies supplies Reliable Automatic Sprinkler Co. (USA) fire sprinkler components across Hyderabad — HITEC City, Cyberabad, Gachibowli, Genome Valley, Shamshabad, and Patancheru. We supply MEP contractors, turnkey builders, and end-users with delivery from our Chennai warehouse via express logistics, typically reaching Hyderabad within 1–2 working days.',
  },
  {
    q: 'What sprinkler system is required for Hyderabad pharma facilities?',
    a: "Pharmaceutical manufacturing and research facilities in Hyderabad's Genome Valley and Patancheru require special hazard sprinkler systems — often deluge or foam-water systems for flammable solvent areas, and pre-action systems for data rooms and archives. NFPA 15 and NFPA 11 govern special hazard applications. Riser Technologies advises on the correct system for your specific Hyderabad pharma application.",
  },
  {
    q: 'What sprinkler system do Hyderabad warehouses need?',
    a: "Hyderabad's logistics parks near Shamshabad, Patancheru, and NH-44 require ESFR sprinkler systems for high-bay and rack storage above 12 ft. Reliable ESFR P22 (K-11.2) is the standard for most applications; M336 (K-14.0) for high-rack, low-pressure scenarios. Riser Technologies provides hydraulic calculations, supply, and project delivery across Hyderabad.",
  },
  {
    q: 'What Indian standards apply to sprinkler systems in Hyderabad?',
    a: 'NBC 2016 (Part 4: Fire and Life Safety), referencing NFPA 13, governs sprinkler system design across India including Hyderabad. GHMC and Telangana fire department approvals require NBC-compliant designs. Insurance underwriters (GIC, New India) require UL Listed and FM Approved components. Riser Technologies provides fully compliant designs for Hyderabad projects.',
  },
];

export default function SprinklerSystemHyderabadPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Sprinkler System Hyderabad', url: '/sprinkler-system-hyderabad' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Hyderabad · Pan-India Supply
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Sprinkler System Supplier in Hyderabad
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies genuine{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong>{' '}
            fire sprinkler systems across{' '}
            <strong className="text-amber-400">Hyderabad, HITEC City, Cyberabad, Genome Valley, and Patancheru</strong>{' '}
            — ESFR, wet pipe, pre-action, and deluge systems. UL Listed &amp; FM Approved.
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

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Areas We Supply Sprinkler Systems in Hyderabad
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hydAreas.map((a) => (
              <div key={a.name} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <a.icon className="w-6 h-6 text-amber-500 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{a.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable Sprinkler System Supplier in Hyderabad</h2>
          <p>
            Hyderabad has emerged as one of India&apos;s fastest-growing cities for IT, pharmaceuticals,
            logistics, and data centres. HITEC City and Cyberabad host the country&apos;s largest
            concentration of tech companies outside Bangalore; Genome Valley is Asia&apos;s largest
            pharma cluster; and the city&apos;s logistics parks are expanding rapidly along NH-44
            and the Outer Ring Road.
          </p>
          <p>
            Riser Technologies is India&apos;s authorized dealer for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong> and supplies the complete
            Reliable range to Hyderabad projects — ESFR sprinklers for Shamshabad logistics parks,
            concealed pendent sprinklers for HITEC City towers, pre-action systems for data centres,
            and deluge systems for Genome Valley pharma facilities. Delivery from our Chennai
            warehouse typically reaches Hyderabad within 1–2 working days.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Sprinkler System Hyderabad</h2>
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
              { label: 'Sprinkler System Chennai', href: '/sprinkler-system-chennai' },
              { label: 'Sprinkler System Bangalore', href: '/sprinkler-system-bangalore' },
              { label: 'Sprinkler System Delhi', href: '/sprinkler-system-delhi' },
              { label: 'Reliable Sprinkler Dealers Hyderabad', href: '/reliable-sprinkler-dealers-in-hyderabad' },
              { label: 'Fire Sprinkler Supplier India', href: '/fire-sprinkler-supplier-india' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get Reliable Sprinkler Systems Delivered to Hyderabad</h2>
          <p className="text-slate-400 mb-8">Pan-India supply · UL Listed, FM Approved · Genuine Reliable components with manufacturer documentation</p>
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
