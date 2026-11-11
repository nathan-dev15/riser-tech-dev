import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fire Sprinkler Products | ESFR, Pendent, Upright, Concealed Sprinklers — Riser Technologies',
  description: 'Browse Riser Technologies\' full range of Reliable Automatic Sprinkler Co. (USA) products — ESFR, pendent, upright, concealed, sidewall sprinklers, system valves & fire extinguishers. UL Listed, FM Approved. Chennai, Tamil Nadu.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Fire Sprinkler Products | ESFR, Pendent, Upright, Concealed — Riser Technologies',
    description: 'Full range of UL Listed, FM Approved Reliable fire sprinklers — ESFR, pendent, upright, concealed, sidewall & accessories. Authorized dealer in Chennai, India.',
    url: '/products',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Fire Sprinkler Products — Riser Technologies' }],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
