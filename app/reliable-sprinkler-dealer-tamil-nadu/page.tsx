import { Metadata } from 'next';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Phone, Mail, Award, Shield, Star, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reliable Sprinkler Authorized Dealer Tamil Nadu | Reliable Sprinkler Dealer TN — Riser Technologies',
  description:
    'Riser Technologies — Authorized dealer for Reliable Automatic Sprinkler Co. (USA) across Tamil Nadu. Genuine UL Listed, FM Approved Reliable fire sprinklers supplied to Chennai, Coimbatore, Madurai, Trichy, Salem & across TN. Call +91 9787666104.',
  keywords: [
    'Reliable sprinkler authorized dealer Tamil Nadu',
    'reliable sprinkler dealer Tamil Nadu',
    'reliable fire sprinkler Tamil Nadu',
    'reliable sprinkler supplier Tamil Nadu',
    'reliable automatic sprinkler Tamil Nadu',
    'reliable sprinkler authorized dealer TN',
    'reliable sprinkler Chennai Coimbatore Madurai',
    'reliable fire sprinkler dealer south india',
    'reliable sprinkler distributor south india',
    'authorized reliable dealer south india',
  ],
  alternates: { canonical: '/reliable-sprinkler-dealer-tamil-nadu' },
  openGraph: {
    title: 'Reliable Sprinkler Authorized Dealer Tamil Nadu | Riser Technologies',
    description: 'Authorized Reliable Automatic Sprinkler Co. dealer across Tamil Nadu — Chennai, Coimbatore, Madurai, Trichy, Salem & all TN cities. Genuine UL/FM products. +91 9787666104.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/reliable-sprinkler-dealer-tamil-nadu`,
    type: 'website',
  },
};

const tnCities = [
  { city: 'Chennai', note: 'Head office & distribution hub', href: '/reliable-sprinkler-dealers-in-chennai' },
  { city: 'Coimbatore', note: 'Textile mills, industrial estates', href: '/reliable-sprinkler-dealers-in-coimbatore' },
  { city: 'Madurai', note: 'Commercial & healthcare projects', href: '/contact' },
  { city: 'Trichy', note: 'Industrial & institutional', href: '/contact' },
  { city: 'Salem', note: 'Steel & manufacturing sector', href: '/contact' },
  { city: 'Tiruppur', note: 'Knitwear & textile factories', href: '/contact' },
  { city: 'Erode', note: 'Textile mills & industrial', href: '/contact' },
  { city: 'Vellore', note: 'Healthcare & educational', href: '/contact' },
  { city: 'Thanjavur', note: 'Commercial & hospitality', href: '/contact' },
  { city: 'Dindigul', note: 'Industrial & storage', href: '/contact' },
];

const faqs = [
  {
    q: 'Who is the authorized Reliable sprinkler dealer in Tamil Nadu?',
    a: 'Riser Technologies (Chennai) is the officially authorized dealer for Reliable Automatic Sprinkler Co. (USA) in Tamil Nadu and across India. We supply genuine Reliable fire sprinklers to contractors, builders, and industrial clients in Chennai, Coimbatore, Madurai, Trichy, Salem, and all Tamil Nadu cities.',
  },
  {
    q: 'Can I buy Reliable sprinklers outside Chennai in Tamil Nadu?',
    a: 'Yes. Riser Technologies dispatches Reliable sprinklers from our Chennai distribution centre to any location in Tamil Nadu — standard stocked items are delivered within 1–2 working days to Coimbatore, Madurai, Trichy, and Salem; and 2–3 working days to other TN locations.',
  },
  {
    q: 'Are there Reliable sprinkler dealers in Coimbatore, Madurai, or Trichy?',
    a: 'Riser Technologies is the single authorized Reliable dealer in Tamil Nadu. We supply to Coimbatore, Madurai, Trichy, Salem, and all other TN cities from our Chennai hub. Local contractors and builders in these cities receive the same genuine products, documentation, and pricing as Chennai projects.',
  },
  {
    q: 'What Reliable products are most used in Tamil Nadu industrial projects?',
    a: 'Tamil Nadu\'s industrial base — textiles in Coimbatore, Tiruppur, and Erode; automotive in Chennai; steel in Salem — requires a range of Reliable products: standard response upright and pendent sprinklers for factory areas, ESFR P22 and M336 for warehouses, and concealed sprinklers for offices, hotels, and healthcare facilities.',
  },
];

export default function ReliableSprinklerDealerTamilNaduPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reliable Sprinkler Dealer Tamil Nadu', url: '/reliable-sprinkler-dealer-tamil-nadu' },
      ]} />

      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-green-950 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <Star className="w-3.5 h-3.5" />
            Authorized Reliable Dealer · Supplying All Tamil Nadu
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Reliable Sprinkler Authorized Dealer in Tamil Nadu
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Riser Technologies is Tamil Nadu's{' '}
            <strong className="text-amber-400">officially authorized dealer</strong> for{' '}
            <strong className="text-amber-400">Reliable Automatic Sprinkler Co. (USA)</strong> — supplying
            genuine Reliable fire sprinklers to Chennai, Coimbatore, Madurai, Trichy, Salem, and all TN cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+919787666104" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> +91 9787666104
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors">
              Request TN Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-amber-50 dark:bg-gray-800 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <Award className="w-14 h-14 text-amber-500 shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Tamil Nadu\'s Only Authorized Reliable Dealer</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Riser Technologies is Reliable Automatic Sprinkler Co.'s officially appointed Indian distribution partner.
              All products supplied across Tamil Nadu are genuine, factory-fresh, with UL/FM certification documents
              and manufacturer warranty — the only way to source authentic Reliable sprinklers in Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-3 text-gray-900 dark:text-white">Tamil Nadu Cities We Serve</h2>
          <p className="text-center text-gray-500 mb-10">Supplying Reliable sprinklers from our Chennai hub to all Tamil Nadu locations.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {tnCities.map((c) => (
              <Link key={c.city} href={c.href} className="flex flex-col items-center gap-1 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-400 transition-colors text-center group">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-amber-600">{c.city}</span>
                <span className="text-xs text-gray-400 leading-tight">{c.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">FAQ — Reliable Sprinkler Dealer Tamil Nadu</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-4 font-medium">Reliable dealer pages by city:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Reliable Dealers Chennai', href: '/reliable-sprinkler-dealers-in-chennai' },
              { label: 'Reliable Dealers Coimbatore', href: '/reliable-sprinkler-dealers-in-coimbatore' },
              { label: 'Reliable Dealers India', href: '/reliable-sprinkler-dealers-india' },
              { label: 'Reliable ESFR Chennai', href: '/reliable-esfr-sprinkler-chennai' },
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
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
              { label: 'Sprinkler Dealer Chennai', href: '/sprinkler-dealer-in-chennai' },
              { label: 'Reliable Sprinkler Dealers Coimbatore', href: '/reliable-sprinkler-dealers-in-coimbatore' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Get Genuine Reliable Sprinklers Anywhere in Tamil Nadu</h2>
          <p className="text-slate-400 mb-8">From the authorized Reliable dealer in Tamil Nadu — manufacturer warranty, UL/FM docs, free NFPA 13 design support.</p>
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
