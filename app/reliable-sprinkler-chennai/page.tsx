import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Droplet, Star, MapPin, Clock, Truck, FileCheck , ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Sprinkler Chennai | Reliable Fire Sprinkler Dealer & Supplier Chennai — Riser Technologies',
  description:
    'Riser Technologies — India\'s only authorized Reliable Automatic Sprinkler Co. dealer in Chennai. Genuine UL Listed, FM Approved Reliable fire sprinklers. Full product range, best price, same-day quotes. Call +91 9787666104.',
  keywords: [
    'Reliable sprinkler Chennai',
    'reliable fire sprinkler Chennai',
    'reliable sprinkler dealer Chennai',
    'reliable sprinkler supplier Chennai',
    'reliable sprinkler price Chennai',
    'reliable automatic sprinkler Chennai',
    'reliable sprinkler authorized dealer Chennai',
    'reliable fire protection Chennai',
    'reliable sprinkler system Chennai',
    'reliable sprinkler buy Chennai',
    'reliable sprinkler quote Chennai',
    'genuine reliable sprinkler Chennai',
    'reliable fire sprinkler systems Chennai',
    'reliable sprinkler model G Chennai',
    'reliable ESFR sprinkler Chennai',
    'reliable concealed sprinkler Chennai',
    'reliable sprinkler UL FM Chennai',
    'reliable automatic sprinkler co Chennai',
  ],
  alternates: { canonical: '/reliable-sprinkler-chennai' },
  openGraph: {
    title: 'Reliable Sprinkler Chennai | Riser Technologies — Authorized Reliable Dealer',
    description: 'India\'s only authorized Reliable Automatic Sprinkler Co. dealer in Chennai. Genuine UL/FM Reliable sprinklers, full product range, best price, same-day quotes. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-sprinkler-chennai`,
    type: 'website',
  },
};

const whyReliable = [
  { icon: Award, title: '100+ Years of Manufacturing', desc: 'Reliable Automatic Sprinkler Co. has manufactured fire sprinklers since 1920 — one of the oldest and most trusted fire protection brands in the world.' },
  { icon: FileCheck, title: 'UL Listed & FM Approved', desc: 'Every Reliable product carries UL Listing and FM Approval — the international certifications required by Indian building authorities, insurance companies, and consulting engineers.' },
  { icon: Shield, title: 'Single Factory Quality', desc: 'All Reliable products are manufactured at one facility in Liberty, South Carolina, USA — with 100% in-process quality control at every stage.' },
  { icon: MapPin, title: 'Pan-India Coverage', desc: 'As the authorized Indian dealer, Riser Technologies supplies Reliable products from Chennai to any location in India — delivered with manufacturer documentation.' },
];

const products = [
  {
    category: 'Standard Sprinklers',
    items: [
      { name: 'Reliable Pendent Sprinklers (Model G)', desc: 'Standard and quick-response pendent for commercial and industrial ceilings. Available in K-5.6, K-8.0, and K-11.2. The most widely specified Reliable sprinkler in Chennai.' },
      { name: 'Reliable Upright Sprinklers', desc: 'For unfinished ceilings and industrial areas — available in standard response (RTI ≥80) and quick response (RTI ≤50). Fusible link or glass bulb options.' },
      { name: 'Reliable Sidewall Sprinklers', desc: 'For corridors, narrow areas, and spaces where ceiling-mounted sprinklers are not feasible. Standard and extended coverage models.' },
    ],
  },
  {
    category: 'Concealed & Aesthetic Sprinklers',
    items: [
      { name: 'Reliable Concealed Pendent Sprinklers', desc: 'Flat cover plate sprinklers that sit flush with the ceiling — specified for hotels, hospitals, corporate offices, retail, and high-end residential in Chennai.' },
      { name: 'Reliable Recessed Sprinklers', desc: 'Partially recessed body for lower ceiling projection — a mid-point between standard pendent and fully concealed.' },
    ],
  },
  {
    category: 'ESFR Sprinklers (Warehouses)',
    items: [
      { name: 'Reliable ESFR P22 (K-11.2)', desc: 'The standard ESFR for Indian warehouse projects — 50 psi minimum, covering storage heights up to ~35 ft. The most widely used ESFR model in Chennai logistics projects.' },
      { name: 'Reliable ESFR M336 (K-14.0)', desc: 'Large-orifice ESFR — lower minimum pressure (25 psi) reduces pump sizing costs. For high-challenge rack storage and high-piled commodity warehouses.' },
      { name: 'Reliable ESFR JL14 (K-16.8) & JL17 (K-19.6)', desc: 'Ultra-large orifice ESFR for extreme hazard — aerosol warehouses, rubber tire storage, cold storage with high-pile arrangements.' },
    ],
  },
  {
    category: 'Specialty Sprinklers & Systems',
    items: [
      { name: 'Reliable Residential Sprinklers', desc: 'Listed under UL 1626 / NFPA 13R & 13D — for apartments, villas, and residential towers in Chennai\'s growing residential market.' },
      { name: 'Reliable DDX Pre-Action Valve', desc: 'Double-interlock pre-action system for data centres, server rooms, archival storage, and clean rooms in Chennai — prevents accidental water discharge.' },
      { name: 'Reliable DDV Deluge Valve', desc: 'Deluge valve for high-hazard areas — aircraft hangars, transformer rooms, chemical stores, and paint booths.' },
      { name: 'Reliable LB11 Lithium-Ion Sprinkler', desc: 'The world\'s first fire sprinkler specifically listed for lithium-ion battery storage — for EV battery storage, BESS facilities, and gigafactories.' },
    ],
  },
];

const trustSignals = [
  { icon: CheckCircle, text: 'Official Reliable Automatic Sprinkler Co. (USA) authorized dealer — India\'s only' },
  { icon: CheckCircle, text: 'Manufacturer authorization letter provided with every project order' },
  { icon: CheckCircle, text: 'Complete UL/FM certification documents with every supply' },
  { icon: CheckCircle, text: 'Factory-fresh stock — not grey market, not used, not recertified' },
  { icon: Truck, text: 'Same-day dispatch on standard stocked items in Chennai' },
  { icon: Clock, text: 'Same-day quotes on all Reliable products — call or email' },
];

const faqs = [
  {
    q: 'Who supplies genuine Reliable sprinklers in Chennai?',
    a: 'Riser Technologies is the only authorized dealer for Reliable Automatic Sprinkler Co. (USA) in Chennai and India. We are Reliable\'s appointed Indian distribution partner. All Reliable products we supply are genuine, factory-fresh, and backed by manufacturer warranty and UL/FM certification documents.',
  },
  {
    q: 'What is the price of Reliable sprinklers in Chennai?',
    a: 'Reliable sprinkler pricing depends on the model, K-factor, response type, and quantity. As the authorized Reliable dealer in Chennai, Riser Technologies provides the most competitive pricing on genuine products — without grey-market risk. Contact us at +91 9787666104 or sanjeevi@risertech.in for a same-day project quote.',
  },
  {
    q: 'How do I verify Riser Technologies is an authorized Reliable dealer?',
    a: 'We provide our official Reliable Automatic Sprinkler Co. authorization letter with every project order. You can also independently verify our authorization by contacting Reliable Automatic Sprinkler Co. directly — their details are available at reliablesprinkler.com.',
  },
  {
    q: 'What is the delivery time for Reliable sprinklers in Chennai?',
    a: 'Standard stocked Reliable sprinkler models are available for same-day or next-day dispatch from our Chennai warehouse. Non-stock specialty items are typically available within 7–14 working days on import order. Contact us for specific model availability.',
  },
  {
    q: 'Do you supply Reliable sprinklers for warehouses in Chennai?',
    a: 'Yes. Reliable ESFR sprinklers — P22, M336, JL14, and JL17 — are widely used in Chennai\'s warehouse and logistics sector, including facilities in Oragadam, Sriperumbudur, MEPZ, Mahindra World City, and the Chennai–Bangalore and Chennai–Kolkata logistics corridors. Riser Technologies supplies all ESFR models with free NFPA 13 hydraulic design support.',
  },
  {
    q: 'What Reliable sprinkler should I specify for a hotel or hospital in Chennai?',
    a: 'For hotels, hospitals, and corporate offices in Chennai, Reliable concealed pendent sprinklers are the standard specification — the flat cover plate sits flush with the ceiling, maintaining aesthetics while providing certified fire protection. Available in multiple cover plate finishes (white, chrome, brass, custom RAL). Contact Riser Technologies for model selection guidance.',
  },
  {
    q: 'Are Reliable sprinklers accepted by Tamil Nadu fire authorities?',
    a: 'Yes. Reliable sprinklers are UL Listed and FM Approved — the two most recognized international certifications in fire protection. These certifications are accepted by Tamil Nadu fire authorities, building approval authorities, and insurance companies for fire sprinkler projects in Chennai and across India.',
  },
  {
    q: 'Can I buy Reliable sprinklers in small quantities in Chennai?',
    a: 'Yes. Riser Technologies supplies Reliable sprinklers to projects of all sizes — from small commercial fit-outs to large industrial and warehouse installations. Contact us at +91 9787666104 with your model, quantity, and project details for a quote.',
  },
];

export default function ReliableSprinklerChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Sprinkler Chennai', url: '/reliable-sprinkler-chennai' },
      ]} />

      {/* Hero */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            India\'s Only Authorized Reliable Dealer · Chennai Headquarters
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable Sprinkler in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies — Chennai\'s <strong className="text-amber-400">officially authorized dealer</strong> for{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong>. Genuine UL Listed &amp;
            FM Approved Reliable fire sprinklers for every application: warehouses, hotels, hospitals, data centres,
            apartments, and industrial facilities. Same-day quotes. Fast dispatch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors text-lg">
              <Phone className="w-5 h-5" /> +91 9787666104
            </Link>
            <Link href="mailto:sanjeevi@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> sanjeevi@risertech.in
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-amber-700/40 hover:bg-amber-700/60 text-amber-200 font-semibold px-6 py-3 rounded-lg border border-amber-700/40 transition-colors">
              Request Quote
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


      {/* Trust strip */}
      <section className="py-10 bg-amber-50 dark:bg-gray-800 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustSignals.map((t) => (
              <div key={t.text} className="flex items-start gap-3">
                <t.icon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Reliable */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Why Reliable Automatic Sprinkler Co.?
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            The choice of leading fire protection consultants, MEP contractors, and builders across Chennai and India.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyReliable.map((w) => (
              <div key={w.title} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <w.icon className="w-7 h-7 text-amber-500 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{w.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full product range */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
            Reliable Sprinkler Products Available in Chennai
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Complete Reliable Automatic Sprinkler Co. product range — genuine, authorized, UL Listed &amp; FM Approved.
          </p>
          <div className="space-y-10">
            {products.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-amber-500" />
                  {cat.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item) => (
                    <Link key={item.name} href="/products/sprinklers" className="group p-5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 hover:shadow-md transition-all">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-amber-600 transition-colors text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              View Full Product Range
            </Link>
          </div>
        </div>
      </section>

      {/* Long-form body content */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Reliable Sprinkler in Chennai — The Complete Guide</h2>
          <p>
            When fire protection consultants, MEP contractors, and procurement managers in Chennai specify
            Reliable Automatic Sprinkler Co. products, they come to one place: <strong>Riser Technologies</strong> —
            the official authorized dealer and distributor for Reliable Automatic Sprinkler Co. (USA) in India.
            Based in Chennai, Riser Technologies is the single authorized source for genuine Reliable fire sprinklers
            across India — the only supplier that can provide manufacturer warranty, UL/FM certification documents,
            and factory-direct pricing.
          </p>

          <h3>What Is Reliable Automatic Sprinkler Co.?</h3>
          <p>
            Reliable Automatic Sprinkler Co. is a 100-year-old American fire protection manufacturer headquartered in
            Liberty, South Carolina, USA. Founded in 1920, Reliable manufactures the complete range of fire sprinkler
            products at a single state-of-the-art facility — from standard residential pendent sprinklers to specialist
            ESFR warehouse sprinklers, pre-action valves for data centres, deluge valves for high-hazard areas, and the
            world\'s first sprinkler listed for lithium-ion battery storage (LB11). All Reliable products are UL Listed
            and FM Approved — the two most recognized certifications in global fire protection.
          </p>
          <p>
            In India, Reliable products are specified by some of the country\'s leading fire protection consultants and
            building developers — across data centres, pharmaceutical plants, logistics warehouses, high-rise residential,
            hotels, hospitals, and commercial complexes in Chennai, Bangalore, Hyderabad, Mumbai, and beyond.
          </p>

          <h3>Reliable Sprinklers for Chennai Warehouses and Logistics</h3>
          <p>
            Chennai is one of India\'s most important logistics and manufacturing hubs — with the Oragadam auto corridor,
            Sriperumbudur electronics manufacturing zone, MEPZ, Mahindra World City, and Chennai\'s rapidly growing
            e-commerce and cold chain warehouse sector. ESFR (Early Suppression Fast Response) sprinklers are the
            mandatory standard for high-piled storage and rack storage warehouses in these areas.
          </p>
          <p>
            Reliable\'s ESFR range — the P22 (K-11.2), M336 (K-14.0), JL14 (K-16.8), and JL17 (K-19.6) — is among
            the most widely specified in Indian warehouse projects. The P22 is the standard choice for most applications;
            the M336 offers a lower minimum operating pressure (25 psi vs. 50 psi for the P22), which can significantly
            reduce pump sizing and infrastructure costs. Riser Technologies provides free NFPA 13 hydraulic design and
            ESFR model selection support for warehouse projects in Chennai and across India.
          </p>

          <h3>Reliable Sprinklers for Chennai Hotels, Hospitals, and Corporate Offices</h3>
          <p>
            Chennai\'s hotel, healthcare, and IT office sector has a consistent requirement for concealed pendent sprinklers
            — sprinklers with a flat cover plate that sits flush with the finished ceiling, making the sprinkler essentially
            invisible until it activates. Reliable\'s concealed pendent range (Model G with cover plate) is the standard
            specification for these applications, available in white, chrome, brass, and custom painted finishes to match
            any ceiling colour.
          </p>
          <p>
            For Chennai\'s growing data centre market — in OMR, Ambattur, and the emerging data centre corridor along
            the NH-48 — the Reliable DDX double-interlock pre-action valve is the preferred system. Pre-action systems
            prevent accidental water discharge in environments where water damage could be catastrophic; the
            double-interlock design requires both a fire detection signal and a sprinkler activation before water enters
            the pipes.
          </p>

          <h3>Reliable Sprinklers for Chennai\'s Pharmaceutical and Chemical Industries</h3>
          <p>
            Chennai\'s pharmaceutical manufacturing cluster — including facilities in Ambattur Industrial Estate, Poonamallee,
            and the emerging biopharma corridor — requires certified fire sprinklers that can withstand corrosive environments
            and meet stringent insurance requirements. Reliable\'s stainless steel and corrosion-resistant sprinkler options,
            combined with their comprehensive UL/FM documentation, make them the preferred choice for pharmaceutical and
            chemical fire protection projects in Chennai.
          </p>

          <h3>Why Buy Reliable Sprinklers Only from an Authorized Dealer in Chennai?</h3>
          <p>
            The Chennai fire protection market, like many Indian markets, has grey-market and uncertified products that
            may be labelled "Reliable" but are not genuine. Purchasing from an unauthorized source carries serious risks:
          </p>
          <ul>
            <li><strong>No manufacturer warranty</strong> — grey-market products have no Reliable Automatic Sprinkler Co. support</li>
            <li><strong>No valid UL/FM certification</strong> — unauthorized products may carry invalid or forged certification numbers</li>
            <li><strong>Insurance risk</strong> — insurance companies may void fire coverage if non-genuine sprinklers are discovered</li>
            <li><strong>No technical support</strong> — Reliable\'s engineering and technical support is available only through authorized channels</li>
            <li><strong>Liability risk</strong> — in the event of a fire, non-genuine sprinklers expose the building owner, contractor, and consultant to serious liability</li>
          </ul>
          <p>
            Riser Technologies, as the officially authorized dealer, eliminates all these risks. Every supply comes with
            Reliable\'s manufacturer authorization letter, UL test certificates, FM approval data, and installation data
            sheets — the complete documentation set required for Indian building authority approvals and insurance.
          </p>

          <h2>Reliable® Automatic Sprinkler Systems — Brand, Not an Adjective</h2>
          <p>
            When MEP consultants, fire protection contractors, and facility managers in Chennai specify{' '}
            <strong>Reliable® Automatic Sprinkler</strong> components, they are naming a manufacturer — not
            describing a product quality. Reliable Automatic Sprinkler Co. has manufactured fire sprinklers
            since 1920, and every <strong>Reliable brand sprinkler head</strong>, valve, and system component
            carries a UL Listing and FM Approval earned at the point of manufacture — not retrofitted through
            a third-party test house.
          </p>
          <p>
            Authorized Reliable Sprinkler components cannot be substituted with products labelled
            &ldquo;reliable quality&rdquo; or sourced from unauthorized channels. When your hydraulic design
            calls for a <strong>Reliable K-factor sprinkler</strong> — whether a K-5.6 pendent for a commercial
            ceiling or a K-11.2 ESFR head for a Sriperumbudur warehouse — Riser Technologies supplies the
            identical UL Listed model with the exact activation temperature, orifice size, and deflector
            geometry called for in the NFPA 13 design. The UL Listing and FM Approval are model-specific
            and K-factor-specific; substitution invalidates the system certification.
          </p>

          <h3>Reliable® Fire Protection Systems — Full Product Range for Chennai Projects</h3>
          <p>
            Riser Technologies stocks and supplies the complete{' '}
            <strong>Reliable Automatic Sprinkler</strong> portfolio for Chennai and PAN-India delivery:
          </p>
          <ul>
            <li><strong>Reliable brand sprinkler heads</strong> — pendent, upright, sidewall, concealed, ESFR, residential, dry-barrel, and the LB11 lithium-ion battery sprinkler</li>
            <li><strong>Reliable K-factor sprinklers</strong> from K-2.8 to K-19.6 for all hazard classifications under NFPA 13</li>
            <li><strong>Reliable fire protection systems</strong> — alarm check valves (Model A), dry pipe valves (Model D), DDV deluge valves, DDX double-interlock pre-action systems</li>
            <li><strong>Authorized Reliable Sprinkler components</strong> — grooved fittings, escutcheons, cover plates, tamper switches, flow switches, and trim packages</li>
          </ul>
          <p>
            For Chennai-based projects, materials are available same-day from our local warehouse. For
            contractors and consultants in Bangalore, Hyderabad, Delhi NCR, Mumbai, and Pune,{' '}
            <strong>Authorized Reliable Sprinkler components</strong> are dispatched via express logistics
            with manufacturer documentation — UL/FM test reports, product data sheets, and authorization
            letters — included with every consignment.
          </p>

          <h3>Riser Technologies — Your Reliable Sprinkler Partner in Chennai</h3>
          <p>
            Riser Technologies is a Chennai-based fire protection company specializing in Reliable Automatic Sprinkler Co.
            products. We serve fire protection contractors, MEP consultants, architects, builders, and procurement teams
            across Chennai, Tamil Nadu, and India. Our services include:
          </p>
          <ul>
            <li>Supply of the complete Reliable sprinkler and valve product range</li>
            <li>Same-day quotes on all standard models</li>
            <li>Free NFPA 13 hydraulic design and product selection support</li>
            <li>Project-specific pricing for large-volume orders</li>
            <li>Technical documentation for building authority submissions</li>
            <li>Pan-India supply from our Chennai distribution hub</li>
          </ul>
          <p>
            For genuine Reliable sprinklers in Chennai — with manufacturer warranty, UL/FM documentation, and expert
            technical support — contact Riser Technologies at <strong>+91 9787666104</strong> or{' '}
            <strong>sanjeevi@risertech.in</strong>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            Frequently Asked Questions — Reliable Sprinkler Chennai
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
      <section className="py-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 font-medium">More Reliable sprinkler pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'Reliable Distributor Chennai', href: '/reliable-automatic-sprinkler-distributor-chennai' },
              { label: 'Reliable ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
              { label: 'Reliable Concealed Sprinkler Chennai', href: '/reliable-concealed-sprinkler-chennai' },
              { label: 'Reliable Dealers Tamil Nadu', href: '/reliable-sprinkler-dealer-tamil-nadu' },
              { label: 'Reliable Dealers Bangalore', href: '/reliable-sprinkler-dealers-in-bangalore' },
              { label: 'Reliable Dealers Hyderabad', href: '/reliable-sprinkler-dealers-in-hyderabad' },
              { label: 'Reliable Dealers Coimbatore', href: '/reliable-sprinkler-dealers-in-coimbatore' },
              { label: 'Reliable Dealers India', href: '/reliable-sprinkler-dealers-india' },
              { label: 'All Products', href: '/products' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-amber-600 hover:text-amber-700 underline underline-offset-2">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Sprinkler Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'Reliable ESFR Sprinkler Chennai', href: '/reliable-esfr-sprinkler-chennai' },
              { label: 'Reliable Concealed Sprinkler Chennai', href: '/reliable-concealed-sprinkler-chennai' },
              { label: 'Sprinkler System Chennai', href: '/sprinkler-system-chennai' },
              { label: 'Pre-Action System Chennai', href: '/pre-action-sprinkler-system-chennai' },
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
            Get Genuine Reliable Sprinklers in Chennai — Same-Day Quote
          </h2>
          <p className="text-slate-400 mb-8">
            India\'s only authorized Reliable dealer · Manufacturer warranty · UL/FM docs · Free NFPA 13 design support · Fast dispatch
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
