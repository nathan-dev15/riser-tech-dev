import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Sprinkler Systems Chennai Tamil Nadu — Riser Technologies',
  description: 'Contact Riser Technologies for fire sprinkler systems in Chennai, Tamil Nadu & across India. Call +91 9787666104 or email sanjeevi@risertech.in for a free consultation.',
  keywords: [
    'contact sprinkler supplier chennai',
    'fire sprinkler company contact tamil nadu',
    'sprinkler installation enquiry india',
    'fire safety contact chennai',
    'get sprinkler quote chennai',
    'fire protection enquiry tamil nadu',
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
