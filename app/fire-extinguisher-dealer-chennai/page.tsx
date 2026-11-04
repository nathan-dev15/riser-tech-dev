import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Star, Flame, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fire Extinguisher Dealer Chennai | New Age Fire Extinguisher Supplier Chennai — Riser Technologies',
  description:
    'Riser Technologies — Authorized New Age fire extinguisher dealer in Chennai. CO2, ABC dry powder, clean agent, foam extinguishers. ISI marked. AMC services. Call +91 9787666104.',
  keywords: [
    'fire extinguisher dealer Chennai',
    'fire extinguisher supplier Chennai',
    'fire extinguisher price Chennai',
    'New Age fire extinguisher Chennai',
    'fire extinguisher company Chennai',
    'CO2 fire extinguisher Chennai',
    'ABC fire extinguisher Chennai',
    'dry powder fire extinguisher Chennai',
    'clean agent fire extinguisher Chennai',
    'foam fire extinguisher Chennai',
    'fire extinguisher refilling Chennai',
    'fire extinguisher maintenance Chennai',
    'ISI marked fire extinguisher Chennai',
    'fire extinguisher AMC Chennai',
    'best fire extinguisher dealer Chennai',
    'fire extinguisher Tamil Nadu',
  ],
  alternates: { canonical: '/fire-extinguisher-dealer-chennai' },
  openGraph: {
    title: 'Fire Extinguisher Dealer Chennai | New Age Fire Extinguisher — Riser Technologies',
    description: 'Authorized New Age fire extinguisher dealer in Chennai — CO2, ABC dry powder, clean agent, foam. ISI marked. AMC services. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/fire-extinguisher-dealer-chennai`,
    type: 'website',
  },
};

const extinguisherTypes = [
  {
    icon: Flame,
    name: 'CO₂ Fire Extinguisher',
    type: 'Class B & C fires',
    desc: 'Carbon dioxide extinguishers for electrical fires, server rooms, control panels, and liquid fires. No residue — suitable for sensitive equipment. Available in 2 kg, 4.5 kg, 6.5 kg, and 22.5 kg. ISI marked per IS 2878.',
  },
  {
    icon: Award,
    name: 'ABC Dry Powder Extinguisher',
    type: 'Class A, B & C fires',
    desc: 'Multi-purpose dry chemical extinguishers for solid, liquid, and electrical fires. Standard choice for offices, factories, and vehicles. Available in 1 kg, 2 kg, 4 kg, 6 kg, 9 kg, and 25 kg. ISI marked per IS 15683.',
  },
  {
    icon: FileCheck,
    name: 'Clean Agent Extinguisher',
    type: 'Class B & C fires',
    desc: 'Halocarbon (HFC-236fa, HFC-227ea) or inert gas extinguishers for data centres, server rooms, museums, and sensitive equipment where no residue is acceptable. Zero ozone depletion potential.',
  },
  {
    icon: Flame,
    name: 'Foam (AFFF) Extinguisher',
    type: 'Class A & B fires',
    desc: 'Aqueous Film Forming Foam extinguishers for flammable liquid fires — petrol, diesel, solvents. Standard choice for fuel storage, workshops, and industrial areas. Available in 9 L and 50 L. ISI marked per IS 13386.',
  },
  {
    icon: Shield,
    name: 'Water CO₂ Extinguisher',
    type: 'Class A fires',
    desc: 'Stored pressure water-based extinguisher for solid material fires — paper, wood, fabric. Suitable for offices, warehouses, schools, and commercial kitchens. Available in 9 L. ISI marked per IS 940.',
  },
  {
    icon: CheckCircle,
    name: 'Trolley-Mounted Extinguisher',
    type: 'Large-capacity mobile units',
    desc: 'Wheeled extinguishers (25 kg, 50 kg, 75 kg) for factories, industrial plants, aircraft hangars, and outdoor fuel storage. CO₂, dry powder, and foam types available.',
  },
];

const faqs = [
  {
    q: 'Which fire extinguisher is best for a data centre or server room in Chennai?',
    a: 'CO₂ or clean agent (HFC-227ea) extinguishers are recommended for data centres and server rooms — they discharge without leaving residue that damages sensitive equipment. CO₂ extinguishers are the most common first-aid choice; clean agent extinguishers are preferred where equipment protection is critical. Riser Technologies advises on the correct type for your application.',
  },
  {
    q: 'What is a New Age fire extinguisher?',
    a: 'New Age is an Indian fire protection equipment brand known for ISI-marked fire extinguishers manufactured to Bureau of Indian Standards specifications. New Age extinguishers are widely specified in Indian commercial and industrial projects for their compliance with IS standards and competitive pricing. Riser Technologies is an authorized New Age dealer in Chennai.',
  },
  {
    q: 'How often should fire extinguishers be refilled or maintained in Chennai?',
    a: 'Under IS standards and NBC 2016, fire extinguishers must be inspected monthly (by building staff) and annually serviced by a qualified agency. CO₂ extinguishers require a hydraulic test every 5 years; dry powder extinguishers every 3–5 years depending on type. Riser Technologies provides fire extinguisher AMC (annual maintenance contracts) covering servicing, refilling, and hydraulic testing across Chennai and Tamil Nadu.',
  },
  {
    q: 'How many fire extinguishers are required per floor in a Chennai office?',
    a: 'NBC 2016 (Part 4) requires portable fire extinguishers to be positioned so no travel distance to an extinguisher exceeds 15 m for Class A hazards and 9 m for Class B hazards. The number per floor depends on floor area and occupancy classification. Riser Technologies provides NBC-compliant extinguisher layout plans as part of fire protection design services.',
  },
];

export default function FireExtinguisherDealerChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Fire Extinguisher Dealer Chennai', url: '/fire-extinguisher-dealer-chennai' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-red-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized New Age Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Fire Extinguisher Dealer in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is an authorized{' '}
            <strong className="text-amber-400">New Age fire extinguisher dealer in Chennai</strong>{' '}
            — CO₂, ABC dry powder, clean agent, foam, and water extinguishers.
            ISI marked. AMC and refilling services across Tamil Nadu.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="mailto:sales@risertech.in" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              <Mail className="w-4 h-4" /> Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Fire Extinguisher Types Available in Chennai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {extinguisherTypes.map((e) => (
              <div key={e.name} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <e.icon className="w-6 h-6 text-amber-500 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{e.name}</h3>
                <span className="text-xs font-medium text-amber-600">{e.type}</span>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Fire Extinguisher Supplier &amp; AMC Services in Chennai</h2>
          <p>
            Portable fire extinguishers are the first line of defence in a fire — enabling
            building occupants to suppress a small fire before it grows to a size that
            requires sprinkler or brigade intervention. Under NBC 2016 and IS standards,
            every commercial, industrial, and residential building in Chennai is required
            to maintain portable fire extinguishers in serviceable condition, positioned
            at the specified travel distances.
          </p>
          <p>
            Riser Technologies supplies ISI-marked fire extinguishers from New Age and
            other leading Indian manufacturers — CO₂, ABC dry powder, clean agent, foam,
            and water types in all sizes. We also provide annual maintenance contracts
            (AMC) covering monthly checks, annual servicing, refilling, and hydraulic
            pressure testing for the entire extinguisher inventory in your Chennai facility.
          </p>
          <h3>Choosing the Right Fire Extinguisher for Your Chennai Building</h3>
          <ul>
            <li><strong>Office / commercial:</strong> ABC dry powder (general) + CO₂ (electrical panels)</li>
            <li><strong>Data centre / server room:</strong> CO₂ or clean agent (HFC-227ea)</li>
            <li><strong>Industrial / factory:</strong> ABC dry powder + foam (flammable liquid areas)</li>
            <li><strong>Kitchen / canteen:</strong> K-class (wet chemical) for cooking oil fires</li>
            <li><strong>Generator room / transformer:</strong> CO₂ or clean agent</li>
          </ul>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Fire Extinguisher Dealer Chennai</h2>
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
              { label: 'Fire Hydrant System Chennai', href: '/fire-hydrant-system-chennai' },
              { label: 'Sprinkler System Chennai', href: '/sprinkler-system-chennai' },
              { label: 'Fire Suppression System Chennai', href: '/fire-suppression-system-dealer-chennai' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get Fire Extinguishers Delivered in Chennai</h2>
          <p className="text-slate-400 mb-8">New Age authorized dealer · CO₂, ABC, clean agent, foam · ISI marked · AMC across Tamil Nadu</p>
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
