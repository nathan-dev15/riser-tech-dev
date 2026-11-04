import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, CheckCircle, Star, Droplet , ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fire Fighting Sprinklers Chennai | Fire Fighting Sprinkler Dealer & Supplier Chennai — Riser Technologies',
  description:
    'Riser Technologies — Authorized dealer for Reliable fire fighting sprinklers in Chennai. Pendent, upright, sidewall, concealed, ESFR, residential sprinklers. UL Listed, FM Approved. Call +91 9787666104.',
  keywords: [
    'fire fighting sprinklers Chennai',
    'fire fighting sprinkler dealer Chennai',
    'fire fighting sprinkler supplier Chennai',
    'fire fighting sprinkler price Chennai',
    'fire fighting sprinkler heads Chennai',
    'firefighting sprinklers Chennai',
    'fire fighting sprinkler system Chennai',
    'fire sprinklers Chennai',
    'fire sprinkler heads Chennai',
    'fire sprinkler dealer Chennai',
    'fire sprinkler supplier Chennai',
    'fire sprinkler price Chennai',
    'best fire fighting sprinklers Chennai',
    'UL listed fire sprinklers Chennai',
    'FM approved fire sprinklers Chennai',
    'fire fighting sprinklers Tamil Nadu',
  ],
  alternates: { canonical: '/fire-fighting-sprinklers-chennai' },
  openGraph: {
    title: 'Fire Fighting Sprinklers Chennai | Riser Technologies',
    description: 'Authorized dealer for Reliable fire fighting sprinklers in Chennai — pendent, upright, sidewall, concealed, ESFR. UL Listed, FM Approved. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/fire-fighting-sprinklers-chennai`,
    type: 'website',
  },
};

const sprinklerTypes = [
  { name: 'Reliable Pendent Sprinklers', model: 'Model G / F1 Fres+', desc: 'Standard and quick-response pendent for commercial ceilings. K-5.6, K-8.0, K-11.2. The most widely specified fire fighting sprinkler in Chennai commercial projects.' },
  { name: 'Reliable Upright Sprinklers', model: 'Model B, F1 Upright', desc: 'For unfinished ceilings and industrial areas. Standard response (RTI ≥80) and quick response (RTI ≤50). Fusible link or glass bulb.' },
  { name: 'Reliable Sidewall Sprinklers', model: 'Model H, Extended Coverage', desc: 'For corridors, narrow spaces, and areas where ceiling-mounted heads are not feasible. Standard and extended coverage models.' },
  { name: 'Reliable Concealed Pendent', model: 'Model G Concealed', desc: 'Flush-fit sprinklers for hotels, hospitals, corporate offices, retail, and high-end residential. Multiple cover plate finishes.' },
  { name: 'Reliable ESFR Sprinklers', model: 'P22, M336, JL14, JL17', desc: 'Early Suppression Fast Response for warehouses and high-bay rack storage. K-11.2 to K-19.6.' },
  { name: 'Reliable Residential Sprinklers', model: 'Model C1, HSW', desc: 'Listed to UL 1626 for residential occupancies. Concealed and exposed options for apartments and villas.' },
];

const faqs = [
  {
    q: 'What are fire fighting sprinklers and how are they different from decorative sprinklers?',
    a: 'Fire fighting sprinklers are UL Listed and FM Approved automatic fire suppression devices that activate in response to heat from a fire. They are tested and certified to precise activation temperature, K-factor (flow coefficient), and discharge pattern standards. Decorative or non-listed sprinklers may look similar but lack the certification needed for fire protection compliance — and may not perform correctly in a fire.',
  },
  {
    q: 'What types of fire fighting sprinklers does Riser Technologies supply in Chennai?',
    a: 'Riser Technologies supplies the complete Reliable Automatic Sprinkler Co. range: pendent, upright, sidewall, concealed, ESFR, residential, dry-barrel, dry pendent, in-rack, and specialty sprinklers including the LB11 lithium-ion battery sprinkler. All are UL Listed and FM Approved.',
  },
  {
    q: 'What is the price of fire fighting sprinklers in Chennai?',
    a: 'Standard Reliable pendent sprinkler heads (Model G) range from approximately ₹200–500 per head depending on the temperature rating, response type, and K-factor. ESFR heads and specialty types are priced higher. As the authorized Reliable dealer, Riser Technologies offers the most competitive pricing on genuine Reliable sprinklers — contact us at +91 9787666104.',
  },
  {
    q: 'How do I know if fire fighting sprinklers are genuine Reliable products?',
    a: 'Genuine Reliable sprinklers have the Reliable brand mark, model designation, temperature rating, and UL/FM markings stamped on the sprinkler frame and deflector. Riser Technologies provides manufacturer certification documents, UL/FM test reports, and product data sheets with every order.',
  },
];

export default function FireFightingSprinklersChennaiPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Fire Fighting Sprinklers Chennai', url: '/fire-fighting-sprinklers-chennai' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Chennai &amp; Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Fire Fighting Sprinklers in Chennai
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies supplies genuine{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong>{' '}
            fire fighting sprinklers in Chennai — pendent, upright, sidewall, concealed, ESFR,
            and residential. All UL Listed &amp; FM Approved. Best price guaranteed.
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
            Reliable Fire Fighting Sprinklers Available in Chennai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sprinklerTypes.map((s) => (
              <div key={s.name} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors">
                <Droplet className="w-6 h-6 text-amber-500 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{s.name}</h3>
                <span className="text-xs text-amber-600 font-medium">{s.model}</span>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert prose-headings:font-bold prose-a:text-amber-600 max-w-none">
          <h2>Fire Fighting Sprinkler Dealer in Chennai — Genuine Reliable Products</h2>
          <p>
            Fire fighting sprinklers are the most critical component of any automatic fire
            suppression system — their activation temperature, K-factor, and discharge pattern
            must match the NFPA 13 design exactly. Substituting non-listed or counterfeit
            sprinklers into a certified system invalidates the system approval and creates
            serious fire risk.
          </p>
          <p>
            As Chennai&apos;s authorized dealer for Reliable Automatic Sprinkler Co., Riser
            Technologies supplies only genuine UL Listed and FM Approved Reliable fire fighting
            sprinklers — with manufacturer certification documents and full product data sheets
            for every model. We stock the most common models in our Chennai warehouse for fast
            delivery to contractors and projects across Tamil Nadu.
          </p>
          <h3>Choosing the Right Fire Fighting Sprinkler for Your Chennai Project</h3>
          <ul>
            <li><strong>Standard commercial ceiling:</strong> Reliable Model G pendent (K-5.6 or K-8.0, standard or quick response)</li>
            <li><strong>Hotel, hospital, office:</strong> Reliable concealed pendent for aesthetic installation</li>
            <li><strong>Warehouse above 12 ft:</strong> Reliable ESFR P22 (K-11.2) or M336 (K-14.0)</li>
            <li><strong>Cold storage:</strong> Reliable dry-barrel pendent or dry sidewall</li>
            <li><strong>Residential:</strong> Reliable Model C1 or HSW (UL 1626 listed)</li>
          </ul>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ — Fire Fighting Sprinklers Chennai</h2>
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

      <section className="py-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Related pages:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Sprinkler System Chennai', href: '/sprinkler-system-chennai' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Reliable Sprinkler Chennai', href: '/reliable-sprinkler-chennai' },
              { label: 'ESFR Sprinkler Dealer Chennai', href: '/esfr-sprinkler-dealer-in-chennai' },
              { label: 'Reliable Concealed Sprinkler Chennai', href: '/reliable-concealed-sprinkler-chennai' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Buy Genuine Reliable Fire Fighting Sprinklers in Chennai</h2>
          <p className="text-slate-400 mb-8">Only from the authorized dealer — UL Listed, FM Approved, manufacturer warranty.</p>
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
