import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Fire Sprinkler System Installations Chennai — Riser Technologies',
  description: 'Completed fire protection projects by Riser Technologies across Chennai and Tamil Nadu. Hospitals, warehouses, commercial buildings & industrial facilities fitted with NFPA 13 compliant sprinkler systems.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | Fire Sprinkler Installations Chennai — Riser Technologies',
    description: 'See our completed fire sprinkler system projects across Chennai — hospitals, warehouses, commercial & industrial buildings. 500+ projects delivered.',
    url: '/projects',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Riser Technologies Projects Chennai' }],
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
