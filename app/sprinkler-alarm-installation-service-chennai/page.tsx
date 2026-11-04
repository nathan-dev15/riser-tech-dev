import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Star, Bell, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sprinkler Alarm Installation Service Chennai | Sprinkler System Installation Chennai — Riser Technologies',
  description:
    'Riser Technologies — Sprinkler alarm installation and maintenance service in Chennai. Waterflow alarms, tamper switches, flow detectors, sprinkler system installation and AMC. Call +91 9787666104.',
  keywords: [
    'sprinkler alarm installation service Chennai',
    'sprinkler alarm installation Chennai',
    'sprinkler system installation Chennai',
    'sprinkler alarm service Chennai',
    'waterflow alarm installation Chennai',
    'sprinkler alarm maintenance Chennai',
    'fire sprinkler installation service Chennai',
    'sprinkler installation contractor Chennai',
    'sprinkler system service Chennai',
    'sprinkler alarm company Chennai',
    'sprinkler AMC Chennai',
    'fire sprinkler AMC Chennai',
    'sprinkler system maintenance Chennai',
    'sprinkler alarm testing Chennai',
    'NFPA 25 sprinkler inspection Chennai',
    'sprinkler installation Tamil Nadu',
  ],
  alternates: { canonical: '/sprinkler-alarm-installation-service-chennai' },
  openGraph: {
    title: 'Sprinkler Alarm Installation Service Chennai | Riser Technologies',
    description: 'Sprinkler alarm installation and maintenance service in Chennai — waterflow alarms, tamper switches, AMC. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sprinkler-alarm-installation-service-chennai`,
    type: 'website',
  },
};

const services = [
  { icon: Bell, title: 'Sprinkler Alarm Installation', desc: 'Supply and installation of waterflow alarm devices, retard chambers, alarm gongs, and electronic flow switches for all sprinkler system types. NFPA 72 and NBC 2016 compliant.' },
  { icon: CheckCircle, title: 'Tamper Switch Installation', desc: 'OS&Y gate valve tamper switches and butterfly valve supervisory switches — monitoring that all control valves remain in the open position and transmitting alerts to the fire alarm panel.' },
  { icon: Clock, title: 'Sprinkler System Installation', desc: 'Complete new sprinkler system installation in Chennai — pipe hanging, sprinkler head fitting, riser assembly, valve trim, and final commissioning. All work per NFPA 13 and NBC 2016.' },
  { icon: Award, title: 'Annual Maintenance Contract (AMC)', desc: 'NFPA 25-compliant inspection, testing, and maintenance for all sprinkler system types — quarterly visits, annual flow testing, 5-year internal pipe inspection. Full documentation provided.' },
  { icon: Shield, title: 'Sprinkler Alarm Testing & Certification', desc: 'Waterflow alarm testing, inspector\'s test valve flow tests, air pressure decay testing for dry/pre-action systems, and system certification documentation for insurance and building authority.' },
  { icon: Bell, title: 'Integration with Fire Alarm Panel', desc: 'Interface of sprinkler waterflow and supervisory signals with conventional and addressable fire alarm control panels — Notifier, Honeywell, Siemens, and others.' },
];

const faqs = [
  {
    q: 'What is a sprinkler waterflow alarm and how does it work?',
    a: 'A sprinkler waterflow alarm is a device that detects flow of water through a sprinkler system — indicating that one or more sprinkler heads have activated. It can be a mechanical alarm (watermotor gong or alarm bell driven by water flow through the retard chamber) or an electronic flow switch that sends a signal to the fire alarm panel. NFPA 13 requires waterflow alarm devices on all sprinkler systems, and NFPA 72 governs their monitoring.',
  },
  {
    q: 'What does NFPA 25 require for sprinkler alarm maintenance in Chennai?',
    a: 'NFPA 25 (Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) requires: monthly visual inspection of sprinkler heads and gauges; quarterly flow testing of waterflow alarm devices; annual main drain test, inspector\'s test valve flow test, and control valve inspection; 5-year full flow main drain test and internal pipe inspection. Riser Technologies provides NFPA 25-compliant AMC services in Chennai.',
  },
  {
    q: 'How long does sprinkler system installation take in a Chennai commercial building?',
    a: 'Installation time depends on building size, floor area, and system type. A typical 10,000 sq ft commercial floor takes 3–5 working days once materials are on site. Riser Technologies manages procurement, delivery, and installation scheduling to meet your construction programme, working floor-by-floor or zone-by-zone as the building progresses.',
  },
  {
    q: 'What certifications does Riser Technologies provide after sprinkler installation?',
    a: 'Riser Technologies provides: installation certification letter confirming NFPA 13 and NBC 2016 compliance; hydraulic design documentation; material certificates and product data sheets for all Reliable components; test reports for hydrostatic pressure test and waterflow alarm test; and all documentation required for building authority and insurance acceptance.',
  },
];

export default function SprinklerAlarmInstallationServiceChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Sprinkler Alarm Installation Service Chennai', url: '/sprinkler-alarm-installation-service-chennai' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Sprinkler Installation &amp; Service · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Sprinkler Alarm Installation Service in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies provides{' '}
            <strong className="text-amber-400">sprinkler alarm installation, testing, and maintenance services</strong>{' '}
            in Chennai — waterflow alarms, tamper switches, complete system installation,
            and NFPA 25 annual maintenance contracts.
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
            Sprinkler Alarm &amp; Installation Services in Chennai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <s.icon className="w-6 h-6 text-amber-500 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Sprinkler System Installation &amp; Alarm Services in Chennai</h2>
          <p>
            A correctly installed and maintained sprinkler alarm is as important as the
            sprinkler heads themselves — it is the signal that alerts building occupants,
            triggers evacuation, and notifies the fire brigade that a sprinkler has activated.
            An incorrectly installed or unmaintained waterflow alarm may fail to transmit
            at the critical moment, or generate false alarms that lead to alarm fatigue
            and ignored signals.
          </p>
          <p>
            Riser Technologies provides complete sprinkler alarm installation and maintenance
            services in Chennai — from new system commissioning to retrofit alarm upgrades on
            existing systems. Our installation teams work per NFPA 13 and NBC 2016, and our
            AMC services follow NFPA 25 inspection and testing frequencies. All test reports
            and certification documents are provided in a format accepted by Chennai building
            authorities and insurance underwriters.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Sprinkler Alarm Installation Chennai</h2>
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
              { label: 'Automatic Sprinkler System Chennai', href: '/automatic-sprinkler-system-chennai' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Reliable System Valves Chennai', href: '/reliable-system-valves-chennai' },
              { label: 'Fire Sprinkler Systems Chennai', href: '/fire-sprinkler-systems-in-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get a Sprinkler Alarm Installation Quote for Chennai</h2>
          <p className="text-slate-400 mb-8">Installation · Testing · AMC · NFPA 25 compliant · Tamil Nadu-wide service</p>
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
