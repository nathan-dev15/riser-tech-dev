import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Star, FileCheck, Droplet, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Fire Suppression System Chennai | Reliable Fire Suppression Dealer Chennai — Riser Technologies',
  description:
    'Riser Technologies — Authorized dealer for Reliable Automatic Sprinkler Co. fire suppression systems in Chennai. Reliable DDV deluge, DDX pre-action, dry pipe, alarm check valve. UL Listed, FM Approved. Call +91 9787666104.',
  keywords: [
    'Reliable fire suppression system Chennai',
    'Reliable fire suppression dealer Chennai',
    'Reliable fire suppression supplier Chennai',
    'Reliable fire suppression system price Chennai',
    'Reliable fire suppression system Tamil Nadu',
    'Reliable fire protection system Chennai',
    'Reliable DDV deluge system Chennai',
    'Reliable DDX pre-action system Chennai',
    'Reliable dry pipe system Chennai',
    'Reliable alarm check valve Chennai',
    'fire suppression system dealer Chennai',
    'fire suppression system supplier Chennai',
    'Reliable fire suppression system India',
    'authorized Reliable fire suppression Chennai',
    'Reliable fire suppression authorized dealer India',
    'Reliable fire suppression UL FM Chennai',
  ],
  alternates: { canonical: '/reliable-fire-suppression-system-chennai' },
  openGraph: {
    title: 'Reliable Fire Suppression System Chennai | Riser Technologies',
    description: 'Authorized dealer for Reliable Automatic Sprinkler Co. fire suppression systems in Chennai — DDV deluge, DDX pre-action, dry pipe, alarm check valve. UL Listed, FM Approved. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-fire-suppression-system-chennai`,
    type: 'website',
  },
};

const systems = [
  {
    icon: Droplet,
    name: 'Reliable DDV Deluge System',
    tag: 'High-hazard suppression',
    desc: 'The Reliable DDV is a hydraulically operated deluge valve for open-head deluge systems. All sprinkler heads discharge simultaneously on detection — delivering maximum water density instantly. Used in aircraft hangars, transformer rooms, chemical stores, and paint booths.',
    href: '/reliable-deluge-system-chennai',
  },
  {
    icon: Shield,
    name: 'Reliable DDX Double Interlock Pre-Action',
    tag: 'Mission-critical protection',
    desc: 'The Reliable DDX double interlock pre-action valve keeps pipes dry until both a detector and a sprinkler head activate simultaneously — preventing accidental discharge in data centres, server rooms, archives, and museums.',
    href: '/pre-action-sprinkler-system-chennai',
  },
  {
    icon: FileCheck,
    name: 'Reliable Dry Pipe Sprinkler System',
    tag: 'Freeze-zone protection',
    desc: 'Air or nitrogen-pressurized pipes for unheated warehouses, cold storage facilities, and outdoor areas. The Reliable dry pipe valve releases water only when a sprinkler head opens — preventing freeze damage to pipes.',
    href: '/reliable-sprinkler-chennai',
  },
  {
    icon: Building2,
    name: 'Reliable Alarm Check Valve',
    tag: 'Wet pipe systems',
    desc: 'The Reliable alarm check valve is the control valve for standard wet-pipe sprinkler systems — providing flow detection, waterflow alarm initiation, and check-valve function in a single assembly. The backbone of most Chennai commercial sprinkler installations.',
    href: '/reliable-sprinkler-chennai',
  },
];

const credentials = [
  'Official authorized dealer for Reliable Automatic Sprinkler Co. (USA) in India',
  'UL Listed and FM Approved products — required by Indian insurers and building authorities',
  'Complete Reliable fire suppression system range in stock in Chennai',
  'Free NFPA 13 hydraulic design and system selection support',
  'Installation, testing, commissioning, and AMC services across Tamil Nadu',
  'Manufacturer certification documents and technical data sheets with every order',
  'Pan-India supply — Chennai warehouse with same-day dispatch capability',
  'Technical team trained by Reliable Automatic Sprinkler Co.',
];

const industries = [
  { name: 'Oil & Gas / Petrochemical', system: 'Reliable DDV Deluge', reason: 'Open-head deluge for high-flash-point liquid hazards — OISD 116 and NFPA 15 compliant systems.' },
  { name: 'Power Generation & Transformers', system: 'Reliable DDV Deluge', reason: 'Oil-filled transformer protection per NFPA 15 — deluge systems prevent transformer fire spread in Chennai power plants and substations.' },
  { name: 'Data Centres & Telecom', system: 'Reliable DDX Pre-Action', reason: 'Double interlock pre-action prevents accidental water discharge in IT-critical environments on the OMR and TIDEL Park corridor.' },
  { name: 'Cold Storage & Logistics', system: 'Reliable Dry Pipe', reason: 'Dry pipe systems prevent pipe freeze in refrigerated warehouses serving Chennai port and airport cargo.' },
  { name: 'Pharmaceutical Manufacturing', system: 'Reliable Dry Pipe / Pre-Action', reason: 'GMP-compliant systems for Ambattur and Irungattukottai pharma facilities requiring Schedule M compliance.' },
  { name: 'Commercial & Hospitality', system: 'Reliable Alarm Check Valve (Wet Pipe)', reason: 'Standard wet-pipe systems with Reliable pendent and concealed sprinklers for hotels, malls, offices, and hospitals across Chennai.' },
];

const faqs = [
  {
    q: 'What Reliable fire suppression systems are available in Chennai?',
    a: 'Riser Technologies supplies the complete Reliable Automatic Sprinkler Co. fire suppression range in Chennai: DDV deluge valve systems, DDX double interlock pre-action systems, dry pipe systems, and alarm check valve wet pipe systems. All products are UL Listed and FM Approved with full manufacturer documentation.',
  },
  {
    q: 'What is the difference between a deluge system and a pre-action system?',
    a: 'A deluge system uses open sprinkler heads — when the deluge valve opens on detection, all heads discharge simultaneously for maximum suppression. A pre-action system uses closed sprinkler heads with a dry pipe — water fills the pipe on detection (single interlock) or on combined detection and sprinkler opening (double interlock). Deluge is for high-hazard areas requiring instant total coverage; pre-action is for sensitive environments where accidental discharge must be prevented.',
  },
  {
    q: 'Which Reliable fire suppression system is right for a Chennai warehouse?',
    a: 'Most Chennai warehouses use a wet-pipe sprinkler system with Reliable alarm check valve and pendent or ESFR sprinklers. For cold storage or refrigerated sections, a Reliable dry pipe system is used to prevent freeze damage. For high-rack storage, Reliable ESFR P22 or M336 sprinklers are specified. Riser Technologies provides free system selection support — call +91 9787666104.',
  },
  {
    q: 'Is the Reliable DDV deluge system FM Approved?',
    a: 'Yes. The Reliable DDV deluge valve is FM Approved and UL Listed. It is widely specified in Indian petrochemical, power, and high-hazard industrial projects where FM Global or insurance underwriter approval is required.',
  },
  {
    q: 'What does NFPA 13 say about fire suppression system selection in India?',
    a: 'NFPA 13 (Installation of Sprinkler Systems) governs the design and installation of all sprinkler-based fire suppression systems. India\'s National Building Code 2016 references NFPA 13 for fire protection design. Riser Technologies provides full NFPA 13-compliant hydraulic design as part of every project in Chennai.',
  },
  {
    q: 'Can Riser Technologies install and maintain Reliable fire suppression systems in Chennai?',
    a: 'Yes. Riser Technologies is a full-service Reliable fire suppression partner in Chennai — covering design, supply, installation, testing, commissioning, and annual maintenance contracts (AMC) for all Reliable system types across Chennai and Tamil Nadu.',
  },
];

export default function ReliableFireSuppressionSystemChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Fire Suppression System Chennai', url: '/reliable-fire-suppression-system-chennai' },
      ]} />

      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-red-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Fire Suppression Dealer · Chennai &amp; India
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable Fire Suppression Systems in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is Chennai&apos;s{' '}
            <strong className="text-amber-400">authorized dealer for Reliable Automatic Sprinkler Co. (USA)</strong>{' '}
            — supplying the complete Reliable fire suppression system range including{' '}
            <strong className="text-amber-400">DDV deluge, DDX pre-action, dry pipe, and alarm check valve</strong>{' '}
            systems. UL Listed &amp; FM Approved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="mailto:sanjeevi@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> Get a Free Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              Request Design Support
            </Link>
          </div>
        </div>
      </section>

      {/* System range */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Reliable Fire Suppression Systems We Supply in Chennai
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Complete Reliable Automatic Sprinkler Co. suppression range — genuine UL Listed &amp; FM Approved.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((s) => (
              <Link key={s.name} href={s.href} className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <s.icon className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-amber-600 transition-colors">{s.name}</h3>
                    <span className="text-xs font-semibold text-amber-600 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded">{s.tag}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable Fire Suppression Systems in Chennai — Complete Range from the Authorized Dealer</h2>
          <p>
            Riser Technologies is the only authorized dealer for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong> in India and supplies
            the complete Reliable fire suppression system range in Chennai — from standard
            wet-pipe alarm check valve assemblies to DDV deluge systems for the most demanding
            industrial hazards.
          </p>
          <p>
            Reliable Automatic Sprinkler Co. has been manufacturing fire suppression products
            since 1920 at a single facility in Liberty, South Carolina, USA. Every Reliable
            system component is UL Listed and FM Approved — the certifications required by
            Indian insurance underwriters, building authorities, and project consultants for
            commercial, industrial, and infrastructure projects.
          </p>
          <h3>Reliable DDV Deluge Fire Suppression System in Chennai</h3>
          <p>
            The Reliable DDV deluge valve is specified for the highest-hazard environments in
            Chennai and across India — transformer rooms in power plants, aircraft maintenance
            hangars, LPG storage facilities, and paint booths. A deluge system uses open sprinkler
            or spray nozzle heads: when the deluge valve trips on a fire detection signal, all
            heads discharge simultaneously to deliver maximum water density across the entire
            protected area. This simultaneous coverage is essential where rapid fire spread
            is expected.
          </p>
          <h3>Reliable DDX Pre-Action Fire Suppression in Chennai</h3>
          <p>
            For Chennai&apos;s data centres — concentrated on the OMR, Siruseri IT Park, and
            Sholinganallur — the Reliable DDX double interlock pre-action system is the
            industry-standard choice. The dry pipe state eliminates the risk of water damage
            from pipe leaks or accidental sprinkler activation, while the double interlock
            design means water cannot enter the system without both a detector and a sprinkler
            head confirming a real fire event simultaneously.
          </p>
          <h3>Who Uses Reliable Fire Suppression Systems in Chennai?</h3>
          <p>
            Fire protection consultants, MEP contractors, plant engineers, and facilities
            managers across Chennai specify Reliable fire suppression systems for data centres,
            pharmaceutical plants, chemical processing facilities, logistics warehouses,
            power generation infrastructure, and commercial high-rises. As the authorized
            Reliable dealer in Chennai, Riser Technologies provides system design, supply,
            installation, and ongoing maintenance — a single point of accountability for
            your Reliable fire suppression project.
          </p>
        </div>
      </section>

      {/* Industry use table */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Reliable Fire Suppression — Industry Applications in Chennai
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-amber-50 dark:bg-amber-900/20 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Industry</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Reliable System</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white hidden sm:table-cell">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {industries.map((r) => (
                  <tr key={r.name} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">{r.name}</td>
                    <td className="px-4 py-3 text-amber-600 font-medium whitespace-nowrap">{r.system}</td>
                    <td className="px-4 py-3 text-gray-500 dark:text-gray-400 hidden sm:table-cell">{r.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-14 bg-amber-50 dark:bg-gray-800 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Award className="w-12 h-12 text-amber-500 shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Riser Technologies for Reliable Fire Suppression in Chennai?
              </h2>
              <ul className="space-y-2">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            FAQ — Reliable Fire Suppression Systems Chennai
          </h2>
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

      {/* Internal links */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Deluge System Chennai', href: '/reliable-deluge-system-chennai' },
              { label: 'Pre-Action System Chennai', href: '/pre-action-sprinkler-system-chennai' },
              { label: 'Reliable ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
              { label: 'Reliable Sprinkler Chennai', href: '/reliable-sprinkler-chennai' },
              { label: 'Reliable Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'Fire Sprinkler Systems Chennai', href: '/fire-sprinkler-system-dealers-in-chennai' },
              { label: 'Fire Suppression Dealer Chennai', href: '/fire-suppression-system-dealer-chennai' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
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
          <Shield className="w-10 h-10 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Get a Reliable Fire Suppression System Quote for Chennai
          </h2>
          <p className="text-slate-400 mb-8">
            Authorized Reliable dealer — DDV deluge, DDX pre-action, dry pipe, wet pipe.
            Free NFPA 13 design support. Supply, installation, and AMC across Tamil Nadu.
          </p>
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
