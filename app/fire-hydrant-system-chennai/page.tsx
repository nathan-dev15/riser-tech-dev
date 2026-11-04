import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Star, Droplet, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fire Hydrant System Chennai | Fire Hydrant Dealer & Supplier Chennai — Riser Technologies',
  description:
    'Riser Technologies — Fire hydrant system dealer and supplier in Chennai. External and internal fire hydrant systems, landing valves, hose reels, pumps. NBC 2016 compliant design. Call +91 9787666104.',
  keywords: [
    'fire hydrant system Chennai',
    'fire hydrant dealer Chennai',
    'fire hydrant supplier Chennai',
    'fire hydrant system price Chennai',
    'fire hydrant system installation Chennai',
    'fire hydrant system company Chennai',
    'internal fire hydrant system Chennai',
    'external fire hydrant system Chennai',
    'fire hydrant pump Chennai',
    'landing valve Chennai',
    'hose reel cabinet Chennai',
    'fire hydrant accessories Chennai',
    'fire hydrant system design Chennai',
    'NBC 2016 fire hydrant system Chennai',
    'fire hydrant system Tamil Nadu',
    'fire hydrant system contractor Chennai',
  ],
  alternates: { canonical: '/fire-hydrant-system-chennai' },
  openGraph: {
    title: 'Fire Hydrant System Chennai | Riser Technologies',
    description: 'Fire hydrant system dealer and supplier in Chennai — internal, external, landing valves, hose reels, pumps. NBC 2016 compliant design. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/fire-hydrant-system-chennai`,
    type: 'website',
  },
};

const components = [
  { icon: Droplet, name: 'External Fire Hydrants', desc: 'Pillar hydrants and underground hydrants for external firefighting operations — connecting fire brigade vehicles to the building water supply. Installed per NBC 2016 Part 4 spacing and pressure requirements.' },
  { icon: Building2, name: 'Internal Hydrant System', desc: 'Wet riser mains and landing valve assemblies for multi-storey buildings — enabling fire brigade operations on upper floors. Mandatory for high-rise buildings in Chennai above 15 m.' },
  { icon: Droplet, name: 'Hose Reel Cabinets', desc: 'First-aid firefighting equipment for building occupants — 25 mm hose reels with 36 m reach, mounted in cabinets at each floor level. Required by NBC 2016 for most occupancies.' },
  { icon: Award, name: 'Landing Valves & Breeching Inlets', desc: 'Instantaneous pattern or gunmetal landing valves for internal hydrant risers, plus 4-way breeching inlets for fire brigade connections at ground level.' },
  { icon: Shield, name: 'Fire Hydrant Pumps', desc: 'Main pumps, standby diesel pumps, and jockey pumps sized per the NFPA 20 hydraulic design — ensuring correct pressure and flow for the hydrant system.' },
  { icon: CheckCircle, name: 'Hydrant Hose & Nozzles', desc: 'Type A and Type B fire hoses, branch pipes, and nozzles for use with internal hydrant systems — stocked in Chennai for fast project delivery.' },
];

const faqs = [
  {
    q: 'What is a fire hydrant system and when is it required in Chennai?',
    a: 'A fire hydrant system provides water supply points for manual firefighting by building occupants (hose reels) and fire brigade operations (landing valves and external hydrants). Under NBC 2016 (Part 4: Fire and Life Safety), fire hydrant systems are required for high-rise buildings (above 15 m), hospitals, hotels, malls, multiplexes, and certain industrial occupancies in Chennai.',
  },
  {
    q: 'What is the difference between an internal and external hydrant system?',
    a: 'An internal hydrant system consists of wet risers running vertically through a building with landing valves at each floor — used by the fire brigade for upper-floor firefighting. An external hydrant system comprises pillar or underground hydrants around the building perimeter — used to connect fire brigade appliances. Both are typically required for high-rise buildings.',
  },
  {
    q: 'What standards govern fire hydrant system design in Chennai?',
    a: 'Fire hydrant systems in Chennai are designed per NBC 2016 (Part 4), IS 3844 (installation of internal fire hydrants), and IS 908 (fire hydrant specification). Pump systems are designed per NFPA 20. Tamil Nadu fire department and Chennai building authority approvals require NBC-compliant designs.',
  },
  {
    q: 'Can Riser Technologies design and install fire hydrant systems in Chennai?',
    a: 'Yes. Riser Technologies provides complete fire hydrant system services in Chennai — hydraulic design per NBC 2016 and IS 3844, supply of all components (hydrants, landing valves, hose reels, pumps), installation, testing, and commissioning. We also provide annual maintenance contracts for hydrant systems across Tamil Nadu.',
  },
];

export default function FireHydrantSystemChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Fire Hydrant System Chennai', url: '/fire-hydrant-system-chennai' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Fire Protection Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Fire Hydrant Systems in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies, designs, and installs{' '}
            <strong className="text-amber-400">fire hydrant systems</strong>{' '}
            in Chennai — internal wet risers, external hydrants, landing valves,
            hose reel cabinets, and fire pumps. NBC 2016 compliant design.
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

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Fire Hydrant System Components We Supply in Chennai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {components.map((c) => (
              <div key={c.name} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <c.icon className="w-6 h-6 text-amber-500 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{c.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Fire Hydrant System Dealer in Chennai — NBC 2016 Compliant</h2>
          <p>
            A fire hydrant system is a mandatory requirement under NBC 2016 and Tamil Nadu fire
            regulations for high-rise buildings, large commercial complexes, hotels, hospitals,
            and industrial facilities in Chennai. It provides the water supply infrastructure
            that the Tamil Nadu Fire and Rescue Services needs to fight a fire in a large
            building — independent of the municipal water supply and pressurized to meet
            the design flow rate at any floor.
          </p>
          <p>
            Riser Technologies provides end-to-end fire hydrant system services in Chennai —
            hydraulic design per NBC 2016 and IS 3844, supply of ISI-marked components,
            complete installation, hydrostatic testing, and commissioning. We also supply
            and install the fire pump sets (main electric pump, standby diesel pump, and
            jockey pump) designed per NFPA 20 to meet the hydrant system demand.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Fire Hydrant System Chennai</h2>
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
              { label: 'Fire Suppression System Chennai', href: '/fire-suppression-system-dealer-chennai' },
              { label: 'Fire Fighting Sprinklers Chennai', href: '/fire-fighting-sprinklers-chennai' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get a Fire Hydrant System Quote for Chennai</h2>
          <p className="text-slate-400 mb-8">NBC 2016 design · Internal &amp; external hydrants · Landing valves · Hose reels · Fire pumps</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="mailto:sanjeevi@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> sanjeevi@risertech.in
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
