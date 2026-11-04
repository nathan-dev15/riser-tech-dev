import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Star, Flame, Droplet, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Deluge System Chennai | Reliable DDV Deluge Valve Dealer Chennai — Riser Technologies',
  description:
    'Riser Technologies — Authorized supplier of Reliable DDV deluge valve systems in Chennai. FM Approved, UL Listed deluge fire suppression for transformers, aircraft hangars, chemical stores, and high-hazard areas. Call +91 9787666104.',
  keywords: [
    'Reliable deluge system Chennai',
    'Reliable DDV deluge valve Chennai',
    'Reliable deluge fire suppression Chennai',
    'deluge sprinkler system Chennai',
    'deluge fire suppression system Chennai',
    'deluge valve dealer Chennai',
    'deluge valve supplier Chennai',
    'Reliable deluge system dealer Chennai',
    'Reliable deluge valve price Chennai',
    'deluge system transformer Chennai',
    'deluge sprinkler system dealer Chennai',
    'open head deluge system Chennai',
    'deluge fire suppression Tamil Nadu',
    'deluge fire system Chennai',
    'FM approved deluge system Chennai',
    'UL listed deluge valve Chennai',
  ],
  alternates: { canonical: '/reliable-deluge-system-chennai' },
  openGraph: {
    title: 'Reliable Deluge System Chennai | Reliable DDV Deluge Valve — Riser Technologies',
    description: 'Authorized supplier of Reliable DDV deluge valve systems in Chennai — FM Approved, UL Listed. Transformers, aircraft hangars, chemical stores, high-hazard areas. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-deluge-system-chennai`,
    type: 'website',
  },
};

const applications = [
  {
    icon: Zap,
    title: 'Oil-Filled Power Transformers',
    desc: 'Transformer deluge systems are mandatory for oil-cooled transformers above a defined MVA rating in Tamil Nadu Electricity Board and private power projects. The Reliable DDV delivers water spray across the transformer tank and conservator, suppressing fire before it spreads to adjacent equipment. NFPA 15 and IEC 61936 compliant designs.',
  },
  {
    icon: Flame,
    title: 'Aircraft Maintenance Hangars',
    desc: 'Chennai International Airport and private MRO facilities require high-challenge deluge systems designed to NFPA 409 for aircraft hangars. Open-head foam-water or water-only deluge systems provide rapid, total-coverage suppression for aviation fuel spill fires.',
  },
  {
    icon: Droplet,
    title: 'LPG & Chemical Storage',
    desc: 'LPG bullet tanks and chemical storage facilities in Chennai\'s Ennore and Manali petrochemical corridor require water spray/deluge systems designed to NFPA 15 or IP 15. The Reliable DDV valve provides the reliable hydraulic operation required for these high-consequence applications.',
  },
  {
    icon: Shield,
    title: 'Paint Booths & Spray Areas',
    desc: 'Automotive and industrial painting facilities with high solvent-load environments require deluge-based fire suppression designed to NFPA 33. Simultaneous discharge ensures rapid flame knockdown across the entire booth area.',
  },
  {
    icon: Award,
    title: 'Conveyor Tunnels & Process Lines',
    desc: 'Rubber conveyor belt tunnels and continuous process lines in Chennai\'s industrial estates require deluge protection to limit fire spread along the belt length. NFPA 13 and FM Global data sheets govern deluge spacing and density requirements.',
  },
  {
    icon: Zap,
    title: 'Cooling Towers',
    desc: 'Large FRP or timber cooling towers in industrial facilities require deluge fire protection to limit catastrophic loss from a fire in the fill media. Reliable DDV systems are designed to NFPA 214 for cooling tower protection.',
  },
];

const ddvFeatures = [
  'UL Listed and FM Approved hydraulic deluge valve',
  'Available in 1½", 2", 2½", 3", 4", 6", and 8" sizes',
  'Compatible with water-only, foam-water (AFFF), and water-spray systems',
  'Hydraulic, pneumatic, or electric trip options',
  'Resettable after operation — no valve replacement required',
  'Stainless steel trim option for corrosive environments',
  'Full deluge system design support per NFPA 15 and NFPA 13',
  'Factory-tested before dispatch — reduced commissioning time',
  'Genuine manufacturer warranty through Riser Technologies, Chennai',
];

const faqs = [
  {
    q: 'What is a deluge fire suppression system and how does it work?',
    a: 'A deluge fire suppression system uses open sprinkler heads or spray nozzles connected to a dry pipe filled with air. When a fire detection device (heat, flame, or smoke detector) activates, the deluge valve opens and water (or foam-water) floods all open heads simultaneously — covering the entire protected area with high water density within seconds. This immediate total coverage is essential for fast-spreading, high-hazard fires.',
  },
  {
    q: 'What is the Reliable DDV deluge valve?',
    a: 'The Reliable DDV is a hydraulically operated, resettable deluge valve manufactured by Reliable Automatic Sprinkler Co. (USA). It is FM Approved and UL Listed, available in sizes from 1½" to 8", and used in deluge and water spray systems for transformers, aircraft hangars, chemical stores, cooling towers, and process hazards. Riser Technologies is the authorized Reliable DDV dealer in Chennai.',
  },
  {
    q: 'What is the difference between a deluge system and a wet pipe system?',
    a: 'A wet pipe sprinkler system has closed sprinkler heads and water-filled pipes — only the head over the fire activates. A deluge system has open heads and dry pipes — all heads activate simultaneously when the valve opens. Deluge is used where fast-spreading fires require immediate total coverage; wet pipe is used for standard occupancies where individual sprinkler control is preferred.',
  },
  {
    q: 'What standards govern deluge system design in India?',
    a: 'Deluge water spray systems for specific hazards are governed by: NFPA 15 (water spray fixed systems), NFPA 13 (sprinkler systems including deluge), NFPA 409 (aircraft hangars), NFPA 214 (cooling towers), and FM Global data sheets for specific occupancies. Riser Technologies provides NFPA-compliant hydraulic design for all deluge projects in Chennai.',
  },
  {
    q: 'Can a Reliable deluge system use foam-water (AFFF)?',
    a: 'Yes. The Reliable DDV deluge valve is compatible with foam-water proportioning systems (AFFF, AR-AFFF) for applications where foam suppression is required — aircraft hangars, flammable liquid stores, and LPG facilities. Riser Technologies designs and supplies complete foam-water deluge systems in Chennai.',
  },
  {
    q: 'What is the price of a Reliable DDV deluge system in Chennai?',
    a: 'Deluge system costs depend on the valve size, number of open heads/nozzles, detection system type, and site complexity. As the authorized Reliable dealer in Chennai, Riser Technologies provides accurate project-specific quotations. Contact us at +91 9787666104 or sales@risertech.in for a free estimate.',
  },
];

export default function ReliableDelugeSystemChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Deluge System Chennai', url: '/reliable-deluge-system-chennai' },
      ]} />

      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-orange-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable DDV Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable Deluge System in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies the{' '}
            <strong className="text-amber-400">Reliable DDV deluge valve system</strong>{' '}
            in Chennai — FM Approved, UL Listed open-head deluge fire suppression for
            transformers, aircraft hangars, chemical stores, cooling towers, and
            high-hazard industrial areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="mailto:sales@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> Get a Free Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              Request Design Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Deluge System Applications in Chennai
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Any Chennai facility where fire spreads too fast for a standard sprinkler system.
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

      {/* Body copy */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable DDV Deluge Valve System in Chennai — Authorized Supplier</h2>
          <p>
            A deluge fire suppression system is the correct choice when fire is expected to spread
            rapidly — when flash points are low, fuel loads are high, or when a single fusing
            sprinkler cannot deliver enough water density fast enough to suppress the fire.
            In Chennai&apos;s power, petrochemical, and industrial landscape, deluge systems are
            specified for transformer bays at TNEB substations, cooling towers in process plants
            at Ambattur and SIPCOT, aircraft hangars at Chennai International Airport, and
            LPG/chemical storage facilities at Ennore port and Manali industrial estate.
          </p>
          <p>
            Riser Technologies is the authorized dealer for the{' '}
            <strong>Reliable DDV deluge valve</strong> — a hydraulically operated, FM Approved,
            UL Listed valve that is among the most widely specified deluge valves in Indian industrial
            projects. The DDV is available in sizes from 1½" to 8" and is compatible with
            water-only, water spray, and foam-water (AFFF) suppression systems.
          </p>
          <h3>Transformer Deluge Systems in Chennai</h3>
          <p>
            Oil-cooled power transformers above a specified MVA rating require fixed water spray
            (deluge) fire protection systems as per IS 15105 and NFPA 15. Chennai has a dense
            network of EHV substations, distribution transformers, and generating station step-up
            transformers — all requiring periodic maintenance and upgrade of fire protection.
            Riser Technologies designs and commissions Reliable DDV-based transformer deluge
            systems across Tamil Nadu, with projects delivered to Chennai Electricity Distribution
            Company (CEDC) standards and TNEB requirements.
          </p>
          <h3>NFPA 15 Water Spray System Design for Chennai</h3>
          <p>
            NFPA 15 governs the design and installation of fixed water spray and deluge systems
            for specific hazards. The standard defines discharge density, nozzle selection,
            hydraulic calculation methods, and valve requirements for each application type.
            Riser Technologies provides complete NFPA 15-compliant hydraulic design documentation
            for all deluge projects in Chennai — supporting your AHJ approval, insurance
            underwriter, and FM Global requirements.
          </p>
        </div>
      </section>

      {/* DDV features */}
      <section className="py-14 bg-amber-50 dark:bg-gray-800 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Award className="w-12 h-12 text-amber-500 shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Reliable DDV Deluge Valve — Key Specifications
              </h2>
              <ul className="space-y-2">
                {ddvFeatures.map((f) => (
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
            FAQ — Reliable Deluge Systems Chennai
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
              { label: 'Reliable Fire Suppression Chennai', href: '/reliable-fire-suppression-system-chennai' },
              { label: 'Pre-Action System Chennai', href: '/pre-action-sprinkler-system-chennai' },
              { label: 'Reliable ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
              { label: 'Reliable Sprinkler Chennai', href: '/reliable-sprinkler-chennai' },
              { label: 'Reliable Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
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
            Get a Reliable Deluge System Quote for Chennai
          </h2>
          <p className="text-slate-400 mb-8">
            Authorized Reliable DDV dealer — transformers, hangars, chemical storage, cooling towers.
            NFPA 15 design, supply, installation, and AMC across Tamil Nadu.
          </p>
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
