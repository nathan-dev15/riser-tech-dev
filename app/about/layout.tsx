import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Fire Sprinkler Supplier Chennai Tamil Nadu — Riser Technologies',
  description: 'Riser Technologies — Chennai-based fire sprinkler system supplier with 12+ years of experience. Authorised distributor of Reliable Fire Sprinklers (USA) serving Tamil Nadu and India.',
  keywords: [
    'about riser technologies',
    'fire sprinkler company chennai',
    'sprinkler supplier tamil nadu',
    'fire safety company india',
    'sprinkler distributor chennai',
    'reliable fire sprinklers india',
    'fire protection company tamil nadu',
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
