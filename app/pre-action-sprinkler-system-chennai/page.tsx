import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Star, FileCheck, Server, Building2, Archive } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pre-Action Sprinkler System Chennai | Pre-Action Fire Suppression Dealer Chennai — Riser Technologies',
  description:
    'Riser Technologies supplies and installs pre-action sprinkler systems in Chennai — single interlock and double interlock (Reliable DDX). Ideal for data centres, server rooms, archives, and museums. UL Listed, FM Approved. Call +91 9787666104.',
  keywords: [
    'pre-action sprinkler system Chennai',
    'pre-action fire suppression system Chennai',
    'pre-action fire protection system Chennai',
    'double interlock pre-action system Chennai',
    'single interlock pre-action system Chennai',
    'pre-action system dealer Chennai',
    'pre-action system supplier Chennai',
    'Reliable DDX pre-action system Chennai',
    'pre-action valve Chennai',
    'pre-action sprinkler system data centre Chennai',
    'pre-action sprinkler system server room Chennai',
    'pre-action fire system price Chennai',
    'pre-action fire protection Chennai',
    'dry pipe pre-action sprinkler Chennai',
    'pre-action sprinkler system Tamil Nadu',
    'pre-action fire suppression dealer Chennai',
  ],
  alternates: { canonical: '/pre-action-sprinkler-system-chennai' },
  openGraph: {
    title: 'Pre-Action Sprinkler System Chennai | Riser Technologies',
    description: 'Authorized supplier and installer of pre-action sprinkler systems in Chennai — Reliable DDX double interlock, single interlock. Data centres, server rooms, archives. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/pre-action-sprinkler-system-chennai`,
    type: 'website',
  },
};

const systemTypes = [
  {
    icon: Shield,
    title: 'Single Interlock Pre-Action',
    trigger: 'Detection-only interlock',
    desc: 'Water enters the dry pipe system when a fire detection device (smoke, heat, or flame detector) activates. The sprinkler head still must fuse before water discharges. One layer of protection — faster water delivery than double interlock.',
    bestFor: 'Cold storage, freezer warehouses, areas with risk of pipe leaks but lower false-discharge sensitivity.',
  },
  {
    icon: Server,
    title: 'Double Interlock Pre-Action (DDX)',
    trigger: 'Detection + open sprinkler required',
    desc: 'Water cannot enter the system unless BOTH a fire detection device activates AND a sprinkler head fuses simultaneously. The highest protection against accidental discharge — preferred for mission-critical environments.',
    bestFor: 'Data centres, server rooms, telecom exchanges, museums, art galleries, archives, and irreplaceable asset storage.',
  },
];

const applications = [
  {
    icon: Server,
    title: 'Data Centres & Server Rooms',
    desc: 'Chennai\'s IT parks — TIDEL Park, Siruseri, OMR corridor — host hundreds of data centres where water damage from an accidental sprinkler discharge would be catastrophic. The Reliable DDX double interlock pre-action system provides fire protection without the risk of inadvertent activation. NFPA 75 recommends pre-action systems for IT equipment rooms.',
  },
  {
    icon: Building2,
    title: 'Telecom & Network Infrastructure',
    desc: 'Switching rooms, NOC centres, and cable distribution frames are sensitive to moisture. A double interlock pre-action system ensures protection without risk to live network equipment — critical for telecom operators, ISPs, and enterprise network hubs across Chennai and Tamil Nadu.',
  },
  {
    icon: Archive,
    title: 'Museums, Libraries & Archives',
    desc: 'Chennai\'s government archives, university libraries, and private document storage facilities require fire suppression that will not destroy irreplaceable records. Pre-action systems provide the safety of a sprinkler system with near-zero risk of accidental water discharge onto paper, art, or artefacts.',
  },
  {
    icon: Award,
    title: 'Pharmaceutical Clean Rooms',
    desc: 'Pharmaceutical manufacturing facilities in Chennai\'s Ambattur, Guindy, and Irungattukottai industrial estates require fire protection systems that meet GMP requirements and minimise contamination risk. Pre-action systems prevent moisture ingress from condensation that dry pipe systems can experience.',
  },
  {
    icon: FileCheck,
    title: 'Cold Storage & Refrigerated Warehouses',
    desc: 'Sub-zero environments in Chennai\'s cold chain logistics sector require dry systems to prevent pipe freezing. Single interlock pre-action systems combine dry-pipe operation with the faster water delivery of a preprimed system.',
  },
];

const ddxFeatures = [
  'UL Listed and FM Approved double interlock pre-action valve',
  'Compatible with addressable and conventional fire detection systems',
  'Automatic reset after false alarm — no need to drain and refill the system',
  'Air supervision for pipe integrity monitoring between detection and discharge',
  'Factory-tested valve assembly — reduced on-site commissioning time',
  'Full spare parts and technical support through Riser Technologies, Chennai',
  'Available in 2", 3", 4", 6", and 8" valve sizes',
  'Wet pilot, pneumatic, or electric trip options',
];

const faqs = [
  {
    q: 'What is a pre-action sprinkler system and how does it work?',
    a: 'A pre-action sprinkler system holds the sprinkler pipes dry (filled with air or nitrogen under pressure) until a fire is detected. When a detector activates, the pre-action valve opens and water fills the pipes — but water does not discharge until an individual sprinkler head also fuses from heat. This two-stage process prevents accidental water discharge in sensitive areas such as data centres, server rooms, and archives.',
  },
  {
    q: 'What is the difference between single interlock and double interlock pre-action?',
    a: 'A single interlock system releases water into the pipes when EITHER a detector activates OR a sprinkler opens. A double interlock system (such as the Reliable DDX) requires BOTH a detector activation AND a sprinkler head opening simultaneously before water enters the pipes. Double interlock provides the highest protection against false discharge and is specified for data centres, telecom rooms, and mission-critical environments.',
  },
  {
    q: 'What is the Reliable DDX pre-action system?',
    a: 'The Reliable DDX is a double interlock pre-action valve system manufactured by Reliable Automatic Sprinkler Co. (USA). It is UL Listed and FM Approved, available in sizes from 2" to 8", and designed for data centres, server rooms, archives, and museums. Riser Technologies is the authorized Reliable dealer in Chennai and supplies, installs, and commissions the DDX system.',
  },
  {
    q: 'Is a pre-action system required by NFPA for data centres in Chennai?',
    a: 'NFPA 75 (Standard for the Fire Protection of Information Technology Equipment) recommends pre-action sprinkler systems for IT equipment rooms. While Indian building codes (NBC 2016) reference NFPA standards, the specific requirement depends on your insurer, consultant, and building authority. Riser Technologies provides free consultancy on the appropriate system type for your project.',
  },
  {
    q: 'Can a pre-action system be integrated with an existing BMS or fire alarm panel?',
    a: 'Yes. The Reliable DDX pre-action system is compatible with addressable and conventional fire detection systems and can be integrated with building management systems (BMS) via relay outputs. Riser Technologies provides the full integration design and commissioning support in Chennai.',
  },
  {
    q: 'How much does a pre-action sprinkler system cost in Chennai?',
    a: 'Pre-action system costs vary based on the valve size, pipe run length, detection system type, and site conditions. As the authorized Reliable dealer in Chennai, Riser Technologies provides accurate project-specific quotations. Contact us at +91 9787666104 or sanjeevi@risertech.in for a free estimate.',
  },
  {
    q: 'Who installs pre-action fire suppression systems in Chennai?',
    a: 'Riser Technologies designs, supplies, and installs pre-action fire suppression systems in Chennai and across Tamil Nadu. Our team has experience with Reliable DDX installations in data centres, pharmaceutical plants, and cold storage facilities. We provide NFPA 13-compliant hydraulic design, full installation, testing, and commissioning.',
  },
  {
    q: 'Does a pre-action system require annual maintenance in Chennai?',
    a: 'Yes. NFPA 25 requires annual inspection, testing, and maintenance of pre-action systems — including trip testing the pre-action valve, verifying air pressure, and testing detection devices. Riser Technologies provides annual maintenance contracts (AMC) for pre-action systems across Chennai and Tamil Nadu.',
  },
];

export default function PreActionSprinklerSystemChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Pre-Action Sprinkler System Chennai', url: '/pre-action-sprinkler-system-chennai' },
      ]} />

      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable DDX Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Pre-Action Sprinkler Systems in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies designs, supplies, and installs{' '}
            <strong className="text-amber-400">pre-action fire suppression systems</strong>{' '}
            in Chennai — single interlock and{' '}
            <strong className="text-amber-400">Reliable DDX double interlock</strong>{' '}
            systems for data centres, server rooms, archives, and cold storage.
            UL Listed &amp; FM Approved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="mailto:sanjeevi@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> Get a Free Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              Request Design Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* System types */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Pre-Action System Types We Supply in Chennai
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Single interlock for cold storage and freezer facilities — double interlock (Reliable DDX) for data centres and mission-critical environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systemTypes.map((s) => (
              <div key={s.title} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <s.icon className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{s.title}</h3>
                    <span className="text-xs font-semibold text-amber-600 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded">{s.trigger}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{s.desc}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500"><span className="font-semibold text-gray-700 dark:text-gray-300">Best for:</span> {s.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Pre-Action Fire Suppression Systems in Chennai — Why They Matter</h2>
          <p>
            A standard wet-pipe sprinkler system is the right choice for most occupancies — but
            certain environments in Chennai demand a higher level of protection against accidental
            water discharge. Data centres on the OMR, pharmaceutical clean rooms in Ambattur, archival
            vaults in government buildings, and cold chain warehouses in Sriperumbudur are examples
            where the risk from an inadvertent sprinkler activation is as serious as the fire risk itself.
          </p>
          <p>
            Pre-action sprinkler systems solve this problem by keeping the pipes dry until a confirmed
            fire condition exists. The dry pipe state means that even if a sprinkler head is physically
            damaged — from a forklift strike, maintenance accident, or seismic event — no water will
            discharge until the detection system also activates (single interlock) or until both detection
            and a fused sprinkler head are confirmed simultaneously (double interlock).
          </p>
          <h3>Reliable DDX Double Interlock Pre-Action System in Chennai</h3>
          <p>
            Riser Technologies is the authorized dealer for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong> in India and supplies the
            Reliable DDX double interlock pre-action system in Chennai. The DDX is a factory-tested,
            UL Listed and FM Approved double interlock pre-action valve designed specifically for
            data centres, server rooms, telecom rooms, museums, and archives.
          </p>
          <p>
            The DDX uses a patented trim arrangement that eliminates the separate air supply valve
            required by most pre-action systems — reducing the valve trim footprint and simplifying
            installation. The system automatically resets after a false alarm without the need to
            drain and refill the piping network — a critical operational advantage for 24/7 data
            centre environments in Chennai where downtime is unacceptable.
          </p>
          <h3>NFPA 13 &amp; NFPA 75 Compliance for Chennai Data Centres</h3>
          <p>
            NFPA 75 (Standard for the Fire Protection of Information Technology Equipment) recommends
            pre-action sprinkler systems for IT equipment rooms. NFPA 13 provides the installation
            standard for all sprinkler systems including pre-action. Riser Technologies provides
            full NFPA 13-compliant hydraulic design, pipe sizing, and system documentation — supporting
            your authority having jurisdiction (AHJ) approval process and insurance underwriter requirements.
          </p>
          <h3>Who Specifies Pre-Action Systems in Chennai?</h3>
          <p>
            Fire protection consultants, MEP engineers, and facilities managers across Chennai specify
            pre-action systems for Tier III and Tier IV data centres, government record offices,
            university libraries, pharmaceutical manufacturing facilities under Schedule M compliance,
            and cold chain distribution hubs serving Chennai port and airport cargo. As the authorized
            Reliable DDX dealer in Chennai, Riser Technologies is the single source for supply,
            installation, testing, and ongoing maintenance.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Where We Install Pre-Action Systems in Chennai
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Any Chennai facility where accidental water discharge poses as much risk as fire.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((app) => (
              <div key={app.title} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <app.icon className="w-6 h-6 text-amber-500 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{app.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DDX features */}
      <section className="py-14 bg-amber-50 dark:bg-gray-800 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Award className="w-12 h-12 text-amber-500 shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Reliable DDX Double Interlock Pre-Action System — Key Features
              </h2>
              <ul className="space-y-2">
                {ddxFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    {f}
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
            FAQ — Pre-Action Sprinkler Systems Chennai
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
              { label: 'Reliable Sprinkler Chennai', href: '/reliable-sprinkler-chennai' },
              { label: 'Reliable ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
              { label: 'Reliable Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'ESFR Sprinkler Dealer Chennai', href: '/esfr-sprinkler-dealer-in-chennai' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Fire Sprinkler Systems Chennai', href: '/fire-sprinkler-system-dealers-in-chennai' },
              { label: 'Authorized Sprinkler Distributor Chennai', href: '/authorized-sprinkler-distributor-in-chennai' },
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
            Get a Pre-Action System Quote for Your Chennai Project
          </h2>
          <p className="text-slate-400 mb-8">
            Authorized Reliable DDX dealer in Chennai — NFPA 13 design, supply, installation, and AMC.
            Free consultation for data centres, server rooms, cold storage, and archives.
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
