import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema , FAQPageSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Shield, Star, Award, CheckCircle, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Single Interlock Pre-Action System Chennai | Single Interlock Pre-Action Supplier — Riser Technologies',
  description:
    'Riser Technologies — Authorized supplier of Reliable single interlock pre-action sprinkler systems in Chennai. For cold storage, archives, libraries, and environments sensitive to accidental discharge. NFPA 13. Call +91 9787666104.',
  keywords: [
    'reliable single interlock pre-action system Chennai',
    'single interlock pre-action system Chennai',
    'single interlock pre-action supplier Chennai',
    'single interlock pre-action dealer Chennai',
    'pre-action system cold storage Chennai',
    'pre-action system archive Chennai',
    'pre-action system library Chennai',
    'NFPA 13 single interlock pre-action Chennai',
    'reliable pre-action valve Chennai',
    'single interlock fire suppression Chennai',
    'cold storage fire protection Chennai',
    'archive fire suppression Chennai',
    'pre-action system price Chennai',
    'pre-action system installation Chennai',
  ],
  alternates: { canonical: '/reliable-single-interlock-preaction-chennai' },
  openGraph: {
    title: 'Reliable Single Interlock Pre-Action System Chennai | Riser Technologies',
    description: 'Authorized supplier of Reliable single interlock pre-action systems in Chennai — cold storage, archives, libraries. NFPA 13. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-single-interlock-preaction-chennai`,
    type: 'website',
  },
};

const howItWorks = [
  { step: '1', title: 'Dry Piping at Rest', desc: 'The system piping is maintained under low-pressure supervised air or nitrogen. The protected space stays completely dry — no water in the piping until needed.' },
  { step: '2', title: 'Detector Trip Opens Valve', desc: 'A single fire detection device (smoke, heat, or beam detector) trips and sends a signal to the pre-action panel. This one event is sufficient to open the pre-action valve.' },
  { step: '3', title: 'Water Fills Piping', desc: 'The pre-action valve opens and water fills the system piping — converting it to a wet pipe system. No water is yet discharged, as sprinkler heads remain closed.' },
  { step: '4', title: 'Sprinkler Activates', desc: 'A sprinkler head activates from heat above the fire. Water discharges only from that activated sprinkler, suppressing the fire while other heads remain closed.' },
];

const applications = [
  { icon: Shield, title: 'Cold Storage & Freezer Warehouses', desc: 'Freezer and cold store facilities require dry-pipe or pre-action systems — standing water in the piping would freeze. Single interlock pre-action keeps piping dry while providing automatic fire protection.' },
  { icon: Award, title: 'Document Archives & Records Rooms', desc: 'Archives, records rooms, and legal document stores specify single interlock pre-action to prevent accidental water discharge from damaging irreplaceable paper records.' },
  { icon: CheckCircle, title: 'Libraries & Museums', desc: 'Public libraries, university libraries, and museum artifact storage use single interlock pre-action — the detector trip provides early warning while keeping piping dry to protect collections.' },
  { icon: Shield, title: 'Pharmaceutical Warehouses', desc: 'Temperature-controlled pharmaceutical warehouses and cold chain facilities benefit from single interlock pre-action — protecting medicines from accidental discharge while providing rapid fire response.' },
  { icon: Award, title: 'Heritage Buildings', desc: "Chennai's heritage buildings, churches, and cultural institutions specify single interlock pre-action to protect irreplaceable structures and contents from both fire and accidental water discharge." },
  { icon: CheckCircle, title: 'Sensitive Manufacturing', desc: 'Electronics assembly and sensitive manufacturing areas where water damage from an accidental discharge would destroy in-process components benefit from single interlock pre-action.' },
];

const faqs = [
  {
    q: 'What is a single interlock pre-action system?',
    a: 'A single interlock pre-action system is a type of fire sprinkler system where the pre-action valve (which holds water out of the piping) opens when a single supervisory signal is received — typically from a smoke or heat detector. Water enters the piping and converts it to a wet pipe system, but only discharges when a sprinkler head also activates from heat. The "single interlock" means only one detection event (detector trip) is required to admit water to the piping.',
  },
  {
    q: 'What is the difference between single interlock and double interlock pre-action?',
    a: 'A single interlock system opens the pre-action valve on a single detector trip — water enters the piping immediately on detection. A double interlock (DDX) system requires BOTH a detector trip AND a sprinkler activation before water enters the piping — providing a higher level of accidental discharge protection. Single interlock is specified for cold storage, archives, and libraries; double interlock is specified for data centres, server rooms, and telecom buildings where any water discharge is unacceptable.',
  },
  {
    q: 'Why is single interlock pre-action used for cold storage in Chennai?',
    a: 'Cold storage and freezer facilities operate at temperatures below freezing. A standard wet pipe sprinkler system (always filled with pressurized water) cannot be used because the water would freeze in the piping. A single interlock pre-action system solves this by keeping the piping dry under supervised air pressure — water is only admitted when a fire detector activates, and only discharged when a sprinkler head opens. This allows full fire protection in sub-zero environments.',
  },
  {
    q: 'Can Riser Technologies design and install a single interlock pre-action system in Chennai?',
    a: 'Yes. Riser Technologies provides complete single interlock pre-action system services in Chennai — NFPA 13 hydraulic design, supply of Reliable pre-action valves and all trim components, coordinated fire detection (smoke detectors and panels), installation, hydrostatic and functional testing, and commissioning. We also provide annual maintenance contracts for pre-action systems across Chennai and Tamil Nadu.',
  },
];

export default function ReliableSingleInterlockPreactionChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Single Interlock Pre-Action Chennai', url: '/reliable-single-interlock-preaction-chennai' },
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
            Reliable Single Interlock Pre-Action System in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies and installs{' '}
            <strong className="text-amber-400">Reliable single interlock pre-action systems</strong>{' '}
            in Chennai — for cold storage, document archives, libraries, pharmaceutical warehouses,
            and environments where dry piping is required. NFPA 13 design. UL Listed &amp; FM Approved.
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
            How Single Interlock Pre-Action Works
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
            Applications in Chennai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((a) => (
              <div key={a.title} className="p-5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                  <a.icon className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{a.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Single Interlock vs Double Interlock Pre-Action: Choosing the Right System</h2>
          <p>
            The choice between single interlock and double interlock pre-action depends on the
            consequence of an accidental water discharge in the protected space.
          </p>
          <ul>
            <li><strong>Single interlock</strong> — suitable when accidental discharge from a faulty detector
            is acceptable (the sprinkler still needs to open), but the space cannot have standing water in the piping.
            Typical applications: cold storage, archives, pharmaceutical warehouses.</li>
            <li><strong>Double interlock (DDX)</strong> — required when any water entry into the piping —
            even without sprinkler activation — is unacceptable. Typical applications: data centres, server rooms,
            telecom buildings, control rooms.</li>
          </ul>
          <p>
            Riser Technologies advises on the correct pre-action system for your specific Chennai application
            and provides complete NFPA 13 design, supply, and installation services.
          </p>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Single Interlock Pre-Action System Chennai</h2>
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
              { label: 'Double Interlock Pre-Action Chennai', href: '/reliable-double-interlock-preaction-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get a Single Interlock Pre-Action System Quote for Chennai</h2>
          <p className="text-slate-400 mb-8">Cold storage, archives, libraries · Dry piping · UL Listed, FM Approved · NFPA 13 design</p>
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
