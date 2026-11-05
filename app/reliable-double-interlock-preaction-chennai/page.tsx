import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Shield, Star, Award, CheckCircle, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Double Interlock Pre-Action System Chennai | DDX Pre-Action Supplier — Riser Technologies',
  description:
    'Riser Technologies — Authorized supplier of Reliable DDX double interlock pre-action systems in Chennai. The standard for data centres, server rooms, and telecom buildings. UL Listed, FM Approved. NFPA 13. Call +91 9787666104.',
  keywords: [
    'reliable double interlock pre-action system Chennai',
    'double interlock pre-action system Chennai',
    'reliable DDX pre-action Chennai',
    'DDX pre-action system Chennai',
    'double interlock pre-action supplier Chennai',
    'pre-action system data centre Chennai',
    'pre-action system server room Chennai',
    'double interlock pre-action dealer Chennai',
    'NFPA 13 double interlock pre-action Chennai',
    'reliable pre-action valve Chennai',
    'double interlock fire suppression Chennai',
    'data centre fire protection Chennai',
    'server room fire suppression system Chennai',
  ],
  alternates: { canonical: '/reliable-double-interlock-preaction-chennai' },
  openGraph: {
    title: 'Reliable Double Interlock Pre-Action (DDX) System Chennai | Riser Technologies',
    description: 'Authorized supplier of Reliable DDX double interlock pre-action systems in Chennai — data centres, server rooms, telecom. UL Listed, FM Approved. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-double-interlock-preaction-chennai`,
    type: 'website',
  },
};

const howItWorks = [
  { step: '1', title: 'Supervisory Air Pressure', desc: 'The system piping is maintained under low-pressure supervised air. Any piping leak or accidental sprinkler damage triggers a low-air alarm — without releasing water into the protected space.' },
  { step: '2', title: 'Detector Trip (First Event)', desc: 'A fire detector (smoke, heat, or beam) in the protected space activates. This is the first of two required events — but water does not yet enter the piping.' },
  { step: '3', title: 'Sprinkler Activation (Second Event)', desc: 'A sprinkler head activates from heat. This is the second required event. Only with BOTH events confirmed does the DDX valve open and water flow to the activated sprinkler.' },
  { step: '4', title: 'Targeted Water Discharge', desc: 'Only the sprinkler head(s) over the fire discharge water. The double interlock design ensures an accidental sprinkler break or false detector alarm alone cannot release water.' },
];

const features = [
  { icon: Shield, text: 'UL Listed and FM Approved — required by Indian insurance underwriters for data centre fire protection' },
  { icon: Award, text: 'Reliable DDX patented design — lowest pressure differential in the industry for fast response' },
  { icon: CheckCircle, text: 'Air maintenance device included — automatic supervisory pressure without manual intervention' },
  { icon: CheckCircle, text: 'Compatible with all Reliable sprinkler heads — including concealed pendent and standard pendent' },
  { icon: CheckCircle, text: 'Integrated waterflow alarm — audible and visual alarm on valve opening' },
  { icon: Shield, text: 'Tamper supervision — alarm on unauthorized valve closure for continuous protection' },
];

const faqs = [
  {
    q: 'What is a double interlock pre-action system?',
    a: 'A double interlock pre-action system is a type of fire sprinkler system where the control valve will only open and allow water into the piping if two independent events occur: (1) a fire detection device trips and (2) a sprinkler head activates. This design means neither a faulty detector alone nor an accidentally broken sprinkler alone can cause a water discharge — making it the standard for data centres and server rooms.',
  },
  {
    q: 'Why is a double interlock pre-action system used for data centres in Chennai?',
    a: "Data centres house irreplaceable IT equipment worth crores. A single accidental water discharge from a wet pipe sprinkler system could destroy equipment and cause days of downtime. The double interlock pre-action system eliminates this risk by keeping the piping dry and requiring two independent confirmation events before releasing water. It is specified by all major Chennai data centre operators (Equinix, NTT, STT GDC) and required by insurance underwriters.",
  },
  {
    q: 'What is the Reliable DDX and why is it specified?',
    a: "The Reliable DDX (Double Detection Experience) is Reliable's proprietary double interlock pre-action valve, UL Listed and FM Approved. It features the industry's lowest pressure differential across the clapper — allowing faster response than conventional double interlock designs. The DDX comes as a complete trim assembly including air maintenance device, supervisory switches, low-air alarm, and waterflow detector. It is the most widely specified double interlock pre-action system in Indian data centre projects.",
  },
  {
    q: 'Can Riser Technologies design and install a double interlock pre-action system in Chennai?',
    a: 'Yes. Riser Technologies provides complete double interlock pre-action system services in Chennai — NFPA 13 hydraulic design, supply of Reliable DDX valves and all trim components, coordinated fire detection, installation, hydrostatic and functional testing, and commissioning. We also provide annual maintenance contracts for data centre pre-action systems across Chennai and Tamil Nadu.',
  },
];

export default function ReliableDoubleInterlockPreactionChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Double Interlock Pre-Action Chennai', url: '/reliable-double-interlock-preaction-chennai' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable Double Interlock Pre-Action System in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies and installs{' '}
            <strong className="text-amber-400">Reliable DDX double interlock pre-action systems</strong>{' '}
            in Chennai — the global standard for data centre, server room, and telecom building
            fire protection. Two-event activation. No accidental discharge. UL Listed &amp; FM Approved.
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
            How the Double Interlock Pre-Action System Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howItWorks.map((step) => (
              <div key={step.step} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-black font-bold text-lg flex items-center justify-center mx-auto mb-4">{step.step}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Reliable DDX Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.text} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-4 h-4 text-amber-600" />
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable DDX Double Interlock Pre-Action System in Chennai</h2>
          <p>
            The Reliable DDX is designed for applications where both fire damage and accidental
            water discharge are unacceptable risks. Chennai&apos;s data centre market — anchored by
            Equinix BI2, NTT GDC, and STT GDC facilities in Ambattur, Perungudi, and OMR — has
            adopted the double interlock pre-action standard universally. Insurance underwriters
            for data centre facilities require UL Listed and FM Approved pre-action systems,
            making the Reliable DDX the natural specification choice.
          </p>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Double Interlock Pre-Action System Chennai</h2>
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
              { label: 'Reliable Pre-Action System Chennai', href: '/reliable-preaction-system-chennai' },
              { label: 'Single Interlock Pre-Action Chennai', href: '/reliable-single-interlock-preaction-chennai' },
              { label: 'Pre-Action System Chennai', href: '/pre-action-sprinkler-system-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get a Double Interlock Pre-Action System Quote for Chennai</h2>
          <p className="text-slate-400 mb-8">Reliable DDX · Data centres, server rooms, telecom · UL Listed, FM Approved · NFPA 13 design</p>
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
