import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Star, Droplet } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable System Valves Chennai | Reliable Fire Sprinkler Valves Dealer Chennai — Riser Technologies',
  description:
    'Riser Technologies — Authorized supplier of Reliable system valves in Chennai. Alarm check valves, dry pipe valves, DDV deluge valves, DDX pre-action valves, check valves. UL Listed, FM Approved. Call +91 9787666104.',
  keywords: [
    'Reliable system valves Chennai',
    'Reliable fire sprinkler valves Chennai',
    'Reliable alarm check valve Chennai',
    'Reliable dry pipe valve Chennai',
    'Reliable deluge valve Chennai',
    'Reliable pre-action valve Chennai',
    'Reliable DDV deluge valve Chennai',
    'Reliable DDX pre-action valve Chennai',
    'fire sprinkler valve dealer Chennai',
    'fire sprinkler valve supplier Chennai',
    'alarm check valve price Chennai',
    'sprinkler system valve Chennai',
    'Reliable valve distributor Chennai',
    'Reliable fire valve Chennai',
    'UL FM fire valve Chennai',
  ],
  alternates: { canonical: '/reliable-system-valves-chennai' },
  openGraph: {
    title: 'Reliable System Valves Chennai | Riser Technologies',
    description: 'Authorized supplier of Reliable system valves in Chennai — alarm check, dry pipe, DDV deluge, DDX pre-action. UL Listed, FM Approved. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-system-valves-chennai`,
    type: 'website',
  },
};

const valves = [
  {
    name: 'Reliable Alarm Check Valve',
    code: 'Model A, Series A',
    desc: 'The control valve for wet pipe sprinkler systems — provides check-valve function, waterflow alarm initiation, and drain/test connections in one assembly. Available in 2", 3", 4", 6", and 8" sizes. FM Approved and UL Listed.',
    use: 'Wet pipe sprinkler systems — commercial, industrial, and high-rise buildings.',
  },
  {
    name: 'Reliable Dry Pipe Valve',
    code: 'Model D',
    desc: 'Air or nitrogen-pressurized system valve for dry pipe sprinkler systems. Latching design prevents accidental trip; integral priming chamber for quick fill. Available in 2", 3", 4", 6", and 8" sizes. FM Approved and UL Listed.',
    use: 'Dry pipe sprinkler systems — cold storage, unheated warehouses, car parks.',
  },
  {
    name: 'Reliable DDV Deluge Valve',
    code: 'Model DDV',
    desc: 'Hydraulically operated resettable deluge valve for open-head deluge and water spray systems. Compatible with water-only and foam-water systems. Available in 1½" to 8". FM Approved and UL Listed.',
    use: 'Deluge systems — transformers, aircraft hangars, chemical stores, cooling towers.',
  },
  {
    name: 'Reliable DDX Pre-Action Valve',
    code: 'Model DDX',
    desc: 'Double interlock pre-action valve with patented compact trim. Requires simultaneous detector and sprinkler activation before water enters pipes. Auto-reset after false alarm. FM Approved and UL Listed.',
    use: 'Pre-action systems — data centres, server rooms, archives, museums.',
  },
  {
    name: 'Reliable Check Valves & Accessories',
    code: 'OS&Y, Ball Drips, Tamper Switches',
    desc: 'OS&Y gate valves, butterfly valves, ball drip valves, pressure gauges, tamper switches, flow switches, and trim packages for all Reliable valve assemblies.',
    use: 'All system types — riser trim, control valves, monitoring.',
  },
];

const faqs = [
  {
    q: 'What system valves does Riser Technologies supply in Chennai?',
    a: 'Riser Technologies supplies the complete Reliable Automatic Sprinkler Co. system valve range in Chennai: alarm check valves for wet pipe systems, dry pipe valves for dry systems, DDV deluge valves for deluge and water spray systems, DDX pre-action valves for pre-action systems, and all associated trim and accessories. All are UL Listed and FM Approved.',
  },
  {
    q: 'What is the difference between an alarm check valve and a deluge valve?',
    a: 'An alarm check valve is used in wet pipe sprinkler systems — the pipes are always water-filled and individual sprinkler heads activate independently. A deluge valve is used in open-head deluge systems — the pipes are dry until the valve opens on a detection signal, then all heads discharge simultaneously. The alarm check valve has a clapper that opens under water demand; the deluge valve is externally tripped by a detection circuit.',
  },
  {
    q: 'What sizes are Reliable alarm check valves available in?',
    a: 'Reliable alarm check valves are available in 2", 3", 4", 6", and 8" nominal pipe sizes. The correct size depends on the sprinkler system\'s calculated water demand and the pipe sizing in the NFPA 13 hydraulic design. Riser Technologies provides valve sizing support as part of every project in Chennai.',
  },
  {
    q: 'What is the price of a Reliable alarm check valve in Chennai?',
    a: 'Reliable alarm check valve prices vary by size — 2" valves are significantly less expensive than 6" or 8" risers. As the authorized Reliable dealer in Chennai, Riser Technologies offers the most competitive pricing on genuine Reliable valves. Contact us at +91 9787666104 for a quotation.',
  },
];

export default function ReliableSystemValvesChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable System Valves Chennai', url: '/reliable-system-valves-chennai' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Valve Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable System Valves in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is Chennai&apos;s authorized supplier for{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. system valves</strong>{' '}
            — alarm check valves, dry pipe valves, DDV deluge valves, DDX pre-action valves,
            and all trim accessories. UL Listed &amp; FM Approved.
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
            Reliable System Valves Available in Chennai
          </h2>
          <div className="space-y-5">
            {valves.map((v) => (
              <div key={v.name} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <div className="flex items-start gap-4">
                  <Droplet className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-900 dark:text-white">{v.name}</h3>
                      <span className="text-xs font-semibold text-amber-600 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded">{v.code}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{v.desc}</p>
                    <p className="text-xs text-gray-500"><span className="font-medium text-gray-700 dark:text-gray-300">Application:</span> {v.use}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable Fire Sprinkler Valve Supplier in Chennai</h2>
          <p>
            System valves are the operational heart of any sprinkler or fire suppression system —
            they control water supply, provide alarm initiation, and determine system behaviour
            in a fire event. Using the correct valve type, size, and listing is mandatory under
            NFPA 13 and directly impacts insurance compliance.
          </p>
          <p>
            As Chennai&apos;s authorized dealer for Reliable Automatic Sprinkler Co. (USA), Riser
            Technologies supplies genuine Reliable system valves with full UL Listing and FM
            Approval documentation — including product data sheets, installation instructions,
            and pressure ratings. We stock the most common valve sizes in Chennai for fast
            project delivery.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Reliable System Valves Chennai</h2>
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
              { label: 'Reliable Deluge System Chennai', href: '/reliable-deluge-system-chennai' },
              { label: 'Pre-Action System Chennai', href: '/pre-action-sprinkler-system-chennai' },
              { label: 'Reliable Fire Suppression Chennai', href: '/reliable-fire-suppression-system-chennai' },
              { label: 'Reliable Sprinkler Chennai', href: '/reliable-sprinkler-chennai' },
              { label: 'Reliable Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get Genuine Reliable System Valves in Chennai</h2>
          <p className="text-slate-400 mb-8">Authorized dealer — alarm check, dry pipe, DDV deluge, DDX pre-action. UL Listed, FM Approved, manufacturer documentation.</p>
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
