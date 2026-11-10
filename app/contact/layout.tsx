import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Riser Technologies | Fire Sprinkler Dealer Chennai — +91 9787666104',
  description: 'Contact Riser Technologies — Chennai\'s authorized fire sprinkler dealer. Call +91 9787666104, email sales@risertech.in, or visit us. Get a quote for sprinkler systems, fire extinguishers & wet riser systems across Tamil Nadu.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Riser Technologies | Fire Sprinkler Dealer Chennai',
    description: 'Get in touch for fire sprinkler systems, ESFR sprinklers, fire extinguishers & wet riser systems. Authorized Reliable dealer in Chennai. Call +91 9787666104.',
    url: '/contact',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Contact Riser Technologies Chennai' }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
