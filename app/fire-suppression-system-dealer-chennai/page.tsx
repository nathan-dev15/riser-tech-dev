import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Star, Droplet, Building2, Flame, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fire Suppression System Dealer Chennai | Fire Suppression System Supplier Chennai — Riser Technologies',
  description:
    'Riser Technologies — Leading fire suppression system dealer and supplier in Chennai. Wet pipe, dry pipe, deluge, pre-action, and ESFR systems. Authorized Reliable dealer. UL Listed, FM Approved. Call +91 9787666104.',
  keywords: [
    'fire suppression system dealer Chennai',
    'fire suppression system supplier Chennai',
    'fire suppression system Chennai',
    'fire suppression dealer Chennai',
    'fire suppression supplier Chennai',
    'fire suppression system price Chennai',
    'fire suppression system installation Chennai',
    'fire suppression system company Chennai',
    'fire suppression system contractor Chennai',
    'best fire suppression system dealer Chennai',
    'fire suppression system Tamil Nadu',
    'fire suppression system dealer Tamil Nadu',
    'automatic fire suppression system Chennai',
    'fire suppression system for warehouse Chennai',
    'fire suppression system for data centre Chennai',
    'fire suppression system manufacturer authorized dealer Chennai',
  ],
  alternates: { canonical: '/fire-suppression-system-dealer-chennai' },
  openGraph: {
    title: 'Fire Suppression System Dealer Chennai | Riser Technologies',
    description: 'Leading fire suppression system dealer and supplier in Chennai — wet pipe, dry pipe, deluge, pre-action, ESFR. Authorized Reliable dealer. UL Listed, FM Approved. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/fire-suppression-system-dealer-chennai`,
    type: 'website',
  },
};

const systemTypes = [
  {
    icon: Droplet,
    name: 'Wet Pipe Sprinkler Systems',
    desc: 'The most common fire suppression system — water-filled pipes with closed sprinkler heads. Only the head(s) over the fire activate. Fast, reliable, low-maintenance. Used in offices, hotels, hospitals, residential, and most commercial buildings in Chennai.',
    link: '/sprinkler-dealer-in-chennai',
  },
  {
    icon: Shield,
    name: 'Dry Pipe Sprinkler Systems',
    desc: 'Air or nitrogen pressurized pipes for unheated or freeze-risk areas — cold storage, car park decks, and outdoor canopies. The dry pipe valve releases water when a sprinkler head opens.',
    link: '/reliable-sprinkler-chennai',
  },
  {
    icon: Flame,
    name: 'Deluge Fire Suppression Systems',
    desc: 'Open-head systems where all nozzles discharge simultaneously on detection — for transformers, aircraft hangars, chemical storage, and high-hazard process areas requiring instant total coverage.',
    link: '/reliable-deluge-system-chennai',
  },
  {
    icon: Building2,
    name: 'Pre-Action Fire Suppression Systems',
    desc: 'Dry pipes with a detection interlock — single or double interlock — for data centres, server rooms, archives, and museums where accidental water discharge must be prevented.',
    link: '/pre-action-sprinkler-system-chennai',
  },
  {
    icon: Award,
    name: 'ESFR Sprinkler Systems',
    desc: 'Early Suppression Fast Response sprinklers for high-bay warehouses, rack storage, and logistics facilities in Chennai\'s Oragadam, Sriperumbudur, and MEPZ industrial corridors.',
    link: '/reliable-esfr-sprinkler-chennai',
  },
  {
    icon: Droplet,
    name: 'Foam-Water Deluge Systems',
    desc: 'AFFF or AR-AFFF foam-water systems for flammable liquid hazards, aircraft hangars, and LPG/petrochemical storage in Chennai\'s Ennore and Manali industrial belt.',
    link: '/reliable-deluge-system-chennai',
  },
];

const whyUs = [
  'Authorized dealer for Reliable Automatic Sprinkler Co. (USA) — only genuine UL Listed, FM Approved products',
  'Complete system range: wet pipe, dry pipe, deluge, pre-action, ESFR, foam-water',
  'In-house NFPA 13, NFPA 15, and NBC 2016 hydraulic design capability',
  'Installation and commissioning teams based in Chennai',
  'Annual maintenance contract (AMC) services across Tamil Nadu',
  'Projects delivered to MEP contractors, turnkey builders, and end-users',
  'Technical documentation: UL/FM test reports, installation data sheets, operation manuals',
  'Same-day quotation for standard projects',
];

const faqs = [
  {
    q: 'What types of fire suppression systems does Riser Technologies supply in Chennai?',
    a: 'Riser Technologies supplies wet pipe, dry pipe, deluge, pre-action (single and double interlock), ESFR, and foam-water fire suppression systems in Chennai. All systems use genuine Reliable Automatic Sprinkler Co. (USA) components — UL Listed and FM Approved.',
  },
  {
    q: 'Which fire suppression system is best for a warehouse in Chennai?',
    a: 'For standard Chennai warehouses, a wet pipe sprinkler system with NFPA 13 design is the most common and cost-effective choice. For high-bay or rack storage above 12 ft, Reliable ESFR P22 or M336 sprinklers are recommended. For cold storage or refrigerated sections, a dry pipe system prevents pipe freezing. Riser Technologies provides free system selection support — call +91 9787666104.',
  },
  {
    q: 'What standards govern fire suppression system installation in Chennai?',
    a: 'India\'s National Building Code 2016 (NBC) references NFPA 13 for sprinkler-based suppression systems. NFPA 15 governs water spray and deluge systems. TAC (now GIC) stipulations govern insurance requirements. Riser Technologies provides NBC and NFPA-compliant designs accepted by Tamil Nadu building authorities and insurance underwriters.',
  },
  {
    q: 'What is the cost of a fire suppression system in Chennai?',
    a: 'Fire suppression system costs vary widely based on the system type, floor area, occupancy, and hydraulic design requirements. Riser Technologies provides fast, accurate project-specific quotations. Contact us at +91 9787666104 or sanjeevi@risertech.in for a same-day quote.',
  },
  {
    q: 'Does Riser Technologies install fire suppression systems in Chennai?',
    a: 'Yes. Riser Technologies is a full-service fire suppression system dealer and contractor in Chennai — covering system design (NFPA 13/15 hydraulic design), supply of all components, installation, hydrostatic testing, and commissioning. We also provide annual maintenance contracts (AMC) for installed systems across Chennai and Tamil Nadu.',
  },
  {
    q: 'What is the difference between a fire suppression system and a fire sprinkler system?',
    a: 'A fire sprinkler system is a type of fire suppression system — it uses water delivered through sprinkler heads to suppress fire. Fire suppression systems is the broader category that includes water-based systems (wet pipe, dry pipe, deluge, pre-action, ESFR) as well as gaseous systems (FM-200, CO2, inert gas), foam systems, and mist systems. Riser Technologies specializes in water-based fire suppression systems using genuine Reliable Automatic Sprinkler Co. components.',
  },
  {
    q: 'How long does it take to install a fire suppression system in Chennai?',
    a: 'Installation timelines depend on the building size, system type, and construction stage. A standard commercial floor of 10,000 sq ft can typically be installed in 3–5 working days once materials are on site. Riser Technologies manages procurement, delivery, and installation scheduling to meet your project timeline.',
  },
];

export default function FireSuppressionSystemDealerChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Fire Suppression System Dealer Chennai', url: '/fire-suppression-system-dealer-chennai' },
      ]} />

      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Fire Suppression System Dealer in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is Chennai&apos;s leading{' '}
            <strong className="text-amber-400">fire suppression system dealer and supplier</strong>{' '}
            — supplying, designing, installing, and maintaining wet pipe, dry pipe,{' '}
            <strong className="text-amber-400">deluge, pre-action, and ESFR</strong>{' '}
            systems using genuine{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong>{' '}
            components. UL Listed &amp; FM Approved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="mailto:sanjeevi@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> Get a Free Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              Request Site Survey
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

      {/* System types */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Fire Suppression Systems We Supply in Chennai
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Complete range — from standard wet pipe to high-hazard deluge — all using genuine Reliable components.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {systemTypes.map((s) => (
              <Link key={s.name} href={s.link} className="group p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 hover:shadow-md transition-all">
                <s.icon className="w-6 h-6 text-amber-500 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 transition-colors">{s.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Fire Suppression System Dealer in Chennai — Riser Technologies</h2>
          <p>
            Choosing the right fire suppression system for your Chennai project requires matching the
            system type to the occupancy, fire hazard, and regulatory requirements — not just picking
            the lowest-cost option. A warehouse in Oragadam needs ESFR sprinklers, not standard
            pendent heads. A data centre on the OMR needs a double interlock pre-action system,
            not a wet pipe. A transformer bay in a Chennai substation needs an NFPA 15-compliant
            deluge water spray system.
          </p>
          <p>
            Riser Technologies has the technical depth to recommend the right system and the supply
            chain to deliver it. As the{' '}
            <strong>authorized Indian dealer for Reliable Automatic Sprinkler Co. (USA)</strong>,
            we supply genuine UL Listed and FM Approved Reliable components — the most widely
            specified fire suppression products in Indian commercial and industrial construction.
          </p>
          <h3>Fire Suppression System Design in Chennai — NFPA 13 Compliant</h3>
          <p>
            Every Riser Technologies fire suppression project in Chennai is backed by a complete
            NFPA 13 or NFPA 15 hydraulic design — including pipe sizing, sprinkler layout,
            water demand calculations, pump duty point, and riser design. Our designs are accepted
            by Chennai building authorities, Tamil Nadu fire department, and insurance underwriters
            including GIC and New India Assurance. We provide the design documentation as part of
            every project supply.
          </p>
          <h3>Fire Suppression Systems for Every Chennai Sector</h3>
          <p>
            Riser Technologies has delivered fire suppression systems to commercial office parks
            on the OMR, pharmaceutical plants in Ambattur Industrial Estate, automotive factories
            in Oragadam, cold storage hubs at Chennai port, hotels and resorts in ECR, hospitals
            in Nungambakkam and Adyar, and logistics warehouses in Sriperumbudur. If your Chennai
            project needs a fire suppression system, Riser Technologies is your single source for
            design, supply, and installation.
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-14 bg-amber-50 dark:bg-gray-800 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Award className="w-12 h-12 text-amber-500 shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Why Riser Technologies — Fire Suppression Dealer Chennai
              </h2>
              <ul className="space-y-2">
                {whyUs.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    {w}
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
            FAQ — Fire Suppression System Dealer Chennai
          </h2>
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

      {/* Internal links */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Fire Suppression Chennai', href: '/reliable-fire-suppression-system-chennai' },
              { label: 'Reliable Deluge System Chennai', href: '/reliable-deluge-system-chennai' },
              { label: 'Pre-Action System Chennai', href: '/pre-action-sprinkler-system-chennai' },
              { label: 'Reliable ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
              { label: 'Fire Sprinkler Systems Chennai', href: '/fire-sprinkler-system-dealers-in-chennai' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Reliable Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
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
            Get a Fire Suppression System Quote for Chennai
          </h2>
          <p className="text-slate-400 mb-8">
            Authorized Reliable dealer — wet pipe, dry pipe, deluge, pre-action, ESFR.
            Free NFPA 13 design. Supply, installation, testing, and AMC across Tamil Nadu.
          </p>
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
