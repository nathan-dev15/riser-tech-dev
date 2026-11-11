import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema , FAQPageSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Shield, Star, Award, CheckCircle, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Pre-Action System Chennai | Pre-Action Fire Suppression Chennai — Riser Technologies',
  description:
    'Riser Technologies — Authorized supplier of Reliable pre-action sprinkler systems in Chennai. Single interlock, double interlock (DDX), non-interlock for data centres, server rooms, cold storage, archives. NFPA 13. Call +91 9787666104.',
  keywords: [
    'reliable pre-action system Chennai',
    'pre-action sprinkler system Chennai',
    'pre-action fire suppression Chennai',
    'pre-action system supplier Chennai',
    'pre-action system dealer Chennai',
    'reliable pre-action valve Chennai',
    'data centre fire suppression Chennai',
    'server room fire suppression Chennai',
    'pre-action system price Chennai',
    'pre-action system installation Chennai',
    'NFPA 13 pre-action system Chennai',
    'reliable DDX pre-action Chennai',
    'single interlock pre-action Chennai',
    'double interlock pre-action Chennai',
    'pre-action fire protection Chennai',
  ],
  alternates: { canonical: '/reliable-preaction-system-chennai' },
  openGraph: {
    title: 'Reliable Pre-Action System Chennai | Riser Technologies',
    description: 'Authorized supplier of Reliable pre-action sprinkler systems in Chennai — single interlock, double interlock DDX. Data centres, server rooms, archives. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-preaction-system-chennai`,
    type: 'website',
  },
};

const preActionTypes = [
  {
    icon: Shield,
    name: 'Single Interlock Pre-Action',
    desc: 'Requires one supervisory signal (smoke or heat detector) before water enters the system piping. Provides earlier warning than a standard wet pipe system. Used in cold storage, archives, and environments with moderate sensitivity to accidental discharge.',
  },
  {
    icon: Award,
    name: 'Double Interlock Pre-Action (DDX)',
    desc: 'Requires two independent signals — a detector trip AND a sprinkler head activation — before water is released. The highest level of accidental discharge protection. Standard for data centres, server rooms, and telecom equipment rooms.',
  },
  {
    icon: CheckCircle,
    name: 'Non-Interlock Pre-Action',
    desc: 'Water enters the system piping automatically on any supervisory signal — without requiring sprinkler activation. Used where the fastest possible response is needed in a dry-pipe configuration, such as freezer warehouses.',
  },
];

const applications = [
  { title: 'Data Centres', desc: "The Reliable DDX double interlock pre-action system is the global standard for data centre fire protection — protecting IT equipment from both fire damage and accidental water discharge. Chennai's Equinix, NTT, and STT GDC facilities specify double interlock systems." },
  { title: 'Server Rooms & IT Rooms', desc: 'Any room containing critical IT infrastructure benefits from double interlock pre-action — the two-event requirement ensures that a faulty detector or accidentally broken sprinkler cannot flood the room.' },
  { title: 'Archives & Libraries', desc: 'Libraries, document archives, and museum storage rooms specify single interlock pre-action to protect irreplaceable documents from both fire damage and accidental water release.' },
  { title: 'Cold Storage & Freezers', desc: 'Cold storage and blast freezer facilities require dry-pipe or pre-action systems because standing water would freeze. Single or double interlock pre-action systems keep the piping dry until needed.' },
  { title: 'Telecom Exchanges', desc: 'BSNL, Airtel, and telecom exchange buildings specify pre-action systems to protect switching equipment — where water damage from an accidental discharge could be as damaging as a fire.' },
  { title: 'Clean Rooms', desc: 'Pharmaceutical clean rooms require pre-action systems to prevent contamination from accidental sprinkler discharge while still providing rapid fire suppression on confirmed fire events.' },
];

const faqs = [
  {
    q: 'What is a pre-action sprinkler system and how does it differ from a wet pipe system?',
    a: "A pre-action sprinkler system uses dry piping (no water) with a pre-action valve that holds water back until a supervisory signal is received. Unlike a wet pipe system (always filled with pressurized water), a pre-action system won't discharge water from a broken sprinkler head or damaged pipe — making it safe for sensitive electronics and irreplaceable contents.",
  },
  {
    q: 'What is the difference between single interlock and double interlock pre-action?',
    a: 'A single interlock pre-action system opens the pre-action valve when a fire detector trips — water enters the piping but only discharges when a sprinkler head also activates. A double interlock (DDX) system requires BOTH a detector trip AND a sprinkler head activation to open the valve — providing the highest protection against accidental discharge. Double interlock is the standard for data centres; single interlock is used in cold storage, archives, and other dry environments.',
  },
  {
    q: 'What is the Reliable DDX pre-action system?',
    a: "The Reliable DDX (Double Detection Experience) is Reliable Automatic Sprinkler Co.'s double interlock pre-action valve system. It uses a patented design that requires two independent inputs — a detected condition AND a sprinkler operation — before water is released. The DDX is UL Listed and FM Approved and is specified for data centres, server rooms, and telecom buildings globally. Riser Technologies is the authorized Indian supplier.",
  },
  {
    q: 'Can Riser Technologies design and install pre-action systems in Chennai?',
    a: 'Yes. Riser Technologies provides complete pre-action system services in Chennai — NFPA 13 hydraulic design, supply of Reliable DDX pre-action valves and all associated components, installation, testing, and commissioning. We also provide integrated fire detection and annual maintenance contracts for pre-action systems across Tamil Nadu and India.',
  },
];

export default function ReliablePreactionSystemChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Pre-Action System Chennai', url: '/reliable-preaction-system-chennai' },
      ]} />
      <FAQPageSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />


      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable Pre-Action System in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies and installs{' '}
            <strong className="text-amber-400">Reliable pre-action sprinkler systems</strong>{' '}
            in Chennai — single interlock, double interlock (DDX), and non-interlock designs
            for data centres, server rooms, archives, cold storage, and telecom facilities.
            NFPA 13 design. UL Listed &amp; FM Approved.
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

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Pre-Action System Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {preActionTypes.map((t) => (
              <div key={t.name} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <t.icon className="w-7 h-7 text-amber-500 mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Pre-Action System Applications in Chennai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((a) => (
              <div key={a.title} className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{a.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable Pre-Action System Supplier in Chennai</h2>
          <p>
            A pre-action sprinkler system is the right choice for any space where the contents
            are more sensitive to water damage than the fire risk justifies a standard wet pipe
            system. The defining characteristic is that water does not enter the system piping
            until a supervisory signal is received — meaning a broken pipe, a mechanically
            damaged sprinkler, or a faulty head will not flood the protected space.
          </p>
          <p>
            Riser Technologies is the authorized Indian supplier for{' '}
            <strong>Reliable Automatic Sprinkler Co. (USA)</strong>, including the{' '}
            <strong>Reliable DDX double interlock pre-action valve</strong> — the most widely
            specified pre-action system in India for data centres and server rooms. The DDX
            is UL Listed and FM Approved, with a fail-safe design that prevents inadvertent
            water release and provides a full supervisory trim including air maintenance device,
            low air switch, and waterflow alarm.
          </p>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Pre-Action System Chennai</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
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
              { label: 'Pre-Action System Chennai', href: '/pre-action-sprinkler-system-chennai' },
              { label: 'Double Interlock Pre-Action Chennai', href: '/reliable-double-interlock-preaction-chennai' },
              { label: 'Single Interlock Pre-Action Chennai', href: '/reliable-single-interlock-preaction-chennai' },
              { label: 'Reliable Deluge System Chennai', href: '/reliable-deluge-system-chennai' },
              { label: 'Sprinkler System Chennai', href: '/sprinkler-system-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get a Pre-Action System Quote for Chennai</h2>
          <p className="text-slate-400 mb-8">Reliable DDX · Single &amp; double interlock · Data centres, server rooms, archives · NFPA 13 design</p>
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
