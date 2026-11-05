import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Shield, Star, MapPin, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sprinkler System Bangalore | Fire Sprinkler System Supplier Bengaluru — Riser Technologies',
  description:
    'Riser Technologies — Authorized Reliable sprinkler system supplier in Bangalore (Bengaluru). Wet pipe, ESFR, pre-action, deluge systems for IT parks, warehouses, data centres, pharma. UL Listed, FM Approved. Call +91 9787666104.',
  keywords: [
    'sprinkler system Bangalore',
    'fire sprinkler system Bangalore',
    'sprinkler system Bengaluru',
    'sprinkler system supplier Bangalore',
    'sprinkler system dealer Bangalore',
    'fire sprinkler dealer Bangalore',
    'sprinkler system Whitefield',
    'sprinkler system Electronic City',
    'sprinkler system Manyata Tech Park',
    'ESFR sprinkler Bangalore',
    'Reliable sprinkler Bangalore',
    'fire sprinkler system Bengaluru',
    'automatic sprinkler system Bangalore',
    'fire suppression system Bangalore',
    'sprinkler system IT park Bangalore',
    'sprinkler system warehouse Bangalore',
  ],
  alternates: { canonical: '/sprinkler-system-bangalore' },
  openGraph: {
    title: 'Sprinkler System Bangalore | Riser Technologies',
    description: 'Authorized Reliable sprinkler system supplier in Bangalore — Whitefield, Electronic City, Manyata, Hoskote. UL Listed, FM Approved. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sprinkler-system-bangalore`,
    type: 'website',
  },
};

const bangaloreAreas = [
  { icon: MapPin, name: 'Whitefield & ITPL', desc: "Bangalore's largest IT and tech hub — ITPL, Prestige Tech Park, EPIP Zone. Wet pipe and concealed pendent sprinkler systems for multi-storey IT buildings." },
  { icon: MapPin, name: 'Electronic City', desc: 'Infosys, Wipro, HCL campuses and industrial estates. NFPA 13 compliant sprinkler systems for large campus buildings and manufacturing facilities.' },
  { icon: MapPin, name: 'Manyata Tech Park (Hebbal)', desc: "North Bangalore's premier IT park — multi-storey commercial towers requiring wet pipe sprinkler systems with concealed heads and FACP integration." },
  { icon: MapPin, name: 'Hoskote & Bommasandra', desc: 'Growing logistics and industrial corridor — ESFR sprinkler systems for high-bay warehouses serving e-commerce, automotive, and 3PL clients.' },
  { icon: MapPin, name: 'Devanahalli & Aerospace SEZ', desc: 'Bangalore International Airport zone — aerospace manufacturing, hotels, and commercial development. Wet pipe and special hazard suppression systems.' },
  { icon: MapPin, name: 'Data Centres (Bangalore)', desc: "Bangalore is India's second-largest data centre market — Equinix, NTT, CtrlS, and STT GDC facilities requiring pre-action fire suppression." },
];

const faqs = [
  {
    q: 'Does Riser Technologies supply sprinkler systems in Bangalore?',
    a: 'Yes. Riser Technologies supplies Reliable Automatic Sprinkler Co. (USA) fire sprinkler components across Bangalore — including Whitefield, Electronic City, Manyata Tech Park, Hoskote, Bommasandra, and Devanahalli. We supply MEP contractors, turnkey builders, and end-users with delivery from our Chennai warehouse via express logistics, typically reaching Bangalore within 1–2 working days.',
  },
  {
    q: 'What sprinkler system is required for Bangalore IT parks?',
    a: "Bangalore's IT park buildings (Whitefield, Electronic City, Manyata) typically require wet pipe sprinkler systems with concealed pendent heads for occupied floors and exposed pendent heads in plant rooms, basements, and car parks. NFPA 13 design is the standard, and insurance underwriters (GIC, New India, Bajaj Allianz) require UL Listed and FM Approved components. Reliable concealed sprinklers (Model G) are the most specified for Bangalore IT interiors.",
  },
  {
    q: 'What sprinkler system do Bangalore warehouses and logistics parks need?',
    a: "Bangalore's logistics parks in Hoskote, Bommasandra, and Whitefield industrial area require ESFR sprinkler systems for high-bay and rack storage above 12 ft. Reliable ESFR P22 (K-11.2) is the standard for most applications; M336 (K-14.0) is used where lower operating pressures are needed with high storage. Riser Technologies provides complete ESFR project delivery across Bangalore.",
  },
  {
    q: 'What Indian standards apply to sprinkler systems in Bangalore?',
    a: 'The same national standards apply — NBC 2016 (Part 4: Fire and Life Safety), referencing NFPA 13 for design and installation. BBMP, BDA, and Karnataka fire department approvals require NBC-compliant designs. Insurance underwriter stipulations also apply. Riser Technologies provides compliant designs accepted by Bangalore building authorities and insurance underwriters.',
  },
];

export default function SprinklerSystemBangalorePage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Sprinkler System Bangalore', url: '/sprinkler-system-bangalore' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Bangalore · Pan-India Supply
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Sprinkler System Supplier in Bangalore
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies genuine{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong>{' '}
            fire sprinkler systems across{' '}
            <strong className="text-amber-400">Bangalore, Whitefield, Electronic City, Manyata, and Hoskote</strong>{' '}
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
            Areas We Supply Sprinkler Systems in Bangalore
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bangaloreAreas.map((a) => (
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
          <h2>Reliable Sprinkler System Supplier in Bangalore</h2>
          <p>
            Bangalore (Bengaluru) is India&apos;s technology capital and one of its fastest-growing
            commercial and industrial cities. The city&apos;s IT parks, data centres, logistics hubs,
            pharmaceutical campuses, and aerospace facilities each demand fire sprinkler systems
            designed to international standards — with UL Listed and FM Approved components
            that satisfy insurance underwriters and building authority approvals.
          </p>
          <p>
            Riser Technologies is India&apos;s authorized dealer for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong> and supplies the complete
            Reliable range to Bangalore projects — ESFR sprinklers for Hoskote logistics parks,
            concealed pendent sprinklers for Whitefield IT towers, pre-action systems for data
            centres, and deluge systems for special hazard areas. Delivery from our Chennai
            warehouse typically reaches Bangalore within 1–2 working days.
          </p>
          <h3>ESFR Sprinkler Systems for Bangalore Warehouses</h3>
          <p>
            Bangalore&apos;s logistics and industrial corridors — Hoskote, Bommasandra, Bidadi, and
            the Devanahalli aerospace SEZ — have seen significant warehouse growth. NFPA 13
            mandates ESFR sprinklers for high-piled storage and rack storage above 12 ft.
            Reliable&apos;s ESFR P22 (K-11.2) and M336 (K-14.0) are the most widely specified
            heads for Karnataka logistics projects, and Riser Technologies provides complete
            ESFR project delivery including hydraulic design and supply.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Sprinkler System Bangalore</h2>
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
              { label: 'Sprinkler System Hyderabad', href: '/sprinkler-system-hyderabad' },
              { label: 'Sprinkler System Delhi', href: '/sprinkler-system-delhi' },
              { label: 'Reliable Sprinkler Dealers Bangalore', href: '/reliable-sprinkler-dealers-in-bangalore' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get Reliable Sprinkler Systems Delivered to Bangalore</h2>
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
