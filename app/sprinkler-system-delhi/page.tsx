import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Shield, Star, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sprinkler System Delhi | Fire Sprinkler System Supplier Delhi NCR — Riser Technologies',
  description:
    'Riser Technologies — Authorized Reliable sprinkler system supplier in Delhi NCR. Wet pipe, dry pipe, ESFR, pre-action systems for Noida, Gurgaon, Faridabad, Manesar. UL Listed, FM Approved. Call +91 9787666104.',
  keywords: [
    'sprinkler system Delhi',
    'fire sprinkler system Delhi',
    'sprinkler system Delhi NCR',
    'sprinkler system supplier Delhi',
    'sprinkler system dealer Delhi',
    'fire sprinkler dealer Delhi',
    'sprinkler system Noida',
    'sprinkler system Gurgaon',
    'sprinkler system Faridabad',
    'sprinkler system Manesar',
    'Reliable sprinkler Delhi',
    'Reliable sprinkler Delhi NCR',
    'ESFR sprinkler Delhi',
    'fire sprinkler system Noida',
    'automatic sprinkler system Delhi',
    'fire suppression system Delhi',
  ],
  alternates: { canonical: '/sprinkler-system-delhi' },
  openGraph: {
    title: 'Sprinkler System Delhi NCR | Riser Technologies',
    description: 'Authorized Reliable sprinkler system supplier in Delhi NCR — Noida, Gurgaon, Faridabad, Manesar. UL Listed, FM Approved. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sprinkler-system-delhi`,
    type: 'website',
  },
};

const delhiAreas = [
  { icon: MapPin, name: 'Noida & Greater Noida', desc: 'Industrial and logistics parks — NSEZ, Noida SEZ, Greater Noida industrial area. ESFR sprinkler systems for warehouses and manufacturing facilities.' },
  { icon: MapPin, name: 'Gurgaon (Gurugram)', desc: 'Commercial office towers, IT parks, hotels, and malls on NH-48 and Golf Course Road. Wet pipe and concealed sprinkler systems for high-rise commercial.' },
  { icon: MapPin, name: 'Faridabad', desc: 'Industrial manufacturing facilities in Faridabad industrial belt — automotive, engineering, and FMCG plants requiring NFPA 13 sprinkler systems.' },
  { icon: MapPin, name: 'Manesar', desc: 'Automotive and industrial zone — Maruti Suzuki, Hero MotoCorp, and tier-1 supplier facilities. ESFR and special hazard suppression systems.' },
  { icon: MapPin, name: 'Delhi NCR Warehousing', desc: 'Large logistics and 3PL warehouses in Bilaspur, Kundli, and NH-58 corridor. ESFR sprinkler systems to NFPA 13 Chapter 12 requirements.' },
  { icon: MapPin, name: 'Data Centres (NCR)', desc: 'Delhi NCR is India\'s largest data centre market — Noida and Gurgaon host major Tier III and Tier IV data centres requiring pre-action fire suppression systems.' },
];

const faqs = [
  {
    q: 'Does Riser Technologies supply sprinkler systems in Delhi?',
    a: 'Yes. Riser Technologies supplies Reliable Automatic Sprinkler Co. (USA) fire sprinkler components across Delhi NCR — including Noida, Greater Noida, Gurgaon, Faridabad, Manesar, and Delhi. We supply to MEP contractors, turnkey builders, and end-users with delivery from our Chennai warehouse or through logistics partners for pan-India delivery.',
  },
  {
    q: 'What sprinkler system is required for Delhi warehouses?',
    a: 'Delhi NCR\'s large logistics and warehousing parks in Noida, Greater Noida, and Manesar require ESFR (Early Suppression Fast Response) sprinkler systems for high-bay and rack storage above 12 ft. Reliable ESFR P22 (K-11.2) is the standard for most applications; M336 (K-14.0) is used where lower operating pressures are needed. Riser Technologies provides complete ESFR project delivery across Delhi NCR.',
  },
  {
    q: 'What Indian standards apply to sprinkler systems in Delhi?',
    a: 'The same national standards apply across India — NBC 2016 (Part 4: Fire and Life Safety), referencing NFPA 13 for design. Delhi\'s building authority (MCD, DDA, DUSIB) and fire department approvals require NFPA 13-compliant designs. GIC/New India insurance stipulations also apply. Riser Technologies provides compliant designs for Delhi NCR projects.',
  },
];

export default function SprinklerSystemDelhiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Sprinkler System Delhi', url: '/sprinkler-system-delhi' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Delhi NCR · Pan-India Supply
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Sprinkler System Supplier in Delhi NCR
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies genuine{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong>{' '}
            fire sprinkler systems across{' '}
            <strong className="text-amber-400">Delhi, Noida, Gurgaon, Faridabad, and Manesar</strong>{' '}
            — ESFR, wet pipe, pre-action, and deluge systems. UL Listed &amp; FM Approved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="mailto:sales@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Areas We Supply Sprinkler Systems in Delhi NCR
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {delhiAreas.map((a) => (
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
          <h2>Reliable Sprinkler System Supplier in Delhi NCR</h2>
          <p>
            Delhi NCR is India&apos;s largest commercial and industrial market — with the country&apos;s
            highest concentration of data centres, the largest warehouse and logistics hub,
            and a dense network of manufacturing facilities across Noida, Gurgaon, Faridabad,
            and Manesar. Each sector demands a different sprinkler system specification, and
            the common factor is the need for genuine UL Listed and FM Approved components
            accepted by insurance underwriters and building authorities.
          </p>
          <p>
            Riser Technologies is India&apos;s authorized dealer for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong> and supplies the complete
            Reliable range to Delhi NCR projects — ESFR sprinklers for Noida logistics parks,
            pre-action systems for Gurgaon data centres, wet pipe systems for high-rise
            commercial towers, and deluge systems for Manesar industrial facilities. Supply
            is from our Chennai warehouse via express logistics for pan-India delivery.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Sprinkler System Delhi</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
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
              { label: 'Sprinkler System Hyderabad', href: '/sprinkler-system-hyderabad' },
              { label: 'Reliable Dealers India', href: '/reliable-sprinkler-dealers-india' },
              { label: 'Fire Sprinkler Supplier India', href: '/fire-sprinkler-supplier-india' },
              { label: 'Reliable ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get Reliable Sprinkler Systems Delivered to Delhi NCR</h2>
          <p className="text-slate-400 mb-8">Pan-India supply · UL Listed, FM Approved · Genuine Reliable components with manufacturer documentation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="mailto:sales@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> sales@risertech.in
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
