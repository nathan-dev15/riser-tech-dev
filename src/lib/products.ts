import {
  Flame,
  PanelTop,
  Droplet,
  UtensilsCrossed,
  Building2,
  Layers,
  Shield,
  GitMerge,
} from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  features: string[];
  specifications?: string[];
  icon: string;
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  icon: any;
  description: string;
  products: Product[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  // ── Reliable Automatic Sprinkler Co. product families ─────────────────────
  {
    id: 'sprinklers',
    slug: 'sprinklers',
    name: 'Sprinklers',
    icon: Droplet,
    description: 'Reliable Automatic Sprinkler — UL Listed & FM Approved fire sprinklers in Chennai, Tamil Nadu & India. Full range: Quick Response pendent, upright, concealed, sidewall, ESFR storage, residential, extended coverage, and LB11 lithium-ion battery sprinklers. Authorised supply by Riser Technologies.',
    products: [
      {
        id: 'residential',
        title: 'Residential Sprinklers',
        category: 'Sprinklers',
        categorySlug: 'sprinklers',
        description: 'Reliable UL Listed residential fire sprinklers for apartments, villas, and homes — Upright, Pendent, Horizontal Sidewall, Flat Plate Concealed, and Domed Concealed orientations. Low K-factor (K-4.2 / K-57) design for low-pressure residential systems per NFPA 13D. Glass bulb temperature ratings: 57 °C (Orange) and 68 °C (Red). Available in white, chrome, and brass finishes. Supplied across Chennai, Tamil Nadu, and India by Riser Technologies.',
        features: ['UL Listed', 'K-4.2 low pressure', 'Concealed & pendent options', 'NFPA 13D compliant'],
        icon: 'droplet',
      },
      {
        id: 'standard-response',
        title: 'Standard Coverage — Standard Response',
        category: 'Sprinklers',
        categorySlug: 'sprinklers',
        description: 'Reliable Standard Response fire sprinklers (RTI ≥80) for ordinary and extra-hazard occupancies — factories, warehouses, and industrial plants. Available as Upright, Conventional, Pendent, Sidewall, Stainless Steel, Fusible Link, Flat Plate Concealed, and Flexible Sprinkler Series. K-factor options: K-57 (K-2.8), K-80 (K-4.2), K-115 (K-5.6). UL/FM Approved. Temperature ratings from 57 °C to 260 °C. Standard for industrial fire sprinkler systems in Chennai, Tamil Nadu, and India.',
        features: ['UL/FM Approved', 'RTI ≥80 standard response', 'Fusible link & glass bulb', 'Industrial grade'],
        icon: 'droplet',
      },
      {
        id: 'quick-response',
        title: 'Standard Coverage — Quick Response',
        category: 'Sprinklers',
        categorySlug: 'sprinklers',
        description: 'Reliable Quick Response fire sprinklers (3 mm bulb, RTI ≤50) — NFPA 13 mandated for light hazard occupancies: offices, hotels, hospitals, schools, and shopping malls. Available in Upright, Pendent, Horizontal Sidewall, Stainless Steel, Flat Plate Concealed, and Flexible Series. K-factor K-115 (K-5.6) standard; K-80 (K-4.2) and K-162 (K-8.0) also available. Temperature ratings 57 °C (Orange) and 68 °C (Red) for air-conditioned commercial spaces in Chennai and Tamil Nadu.',
        features: ['UL/FM Approved', 'RTI ≤50 quick response', '3 mm glass bulb', 'Light hazard occupancies'],
        icon: 'droplet',
      },
      {
        id: 'esfr-storage',
        title: 'ESFR Storage Sprinklers',
        category: 'Sprinklers',
        categorySlug: 'sprinklers',
        description: 'Reliable ESFR (Early Suppression Fast Response) warehouse sprinklers — P22 (K-22.4), M336 (K-22.4), JL14 (K-25.2), and JL17 (K-25.2) models. Eliminates in-rack sprinkler requirements for palletised storage up to 12 m high. UL/FM Approved. Minimum operating pressure 1.7–3.4 bar. Designed for high-bay logistics warehouses, cold storage, and distribution centres in Chennai, Tamil Nadu, and India. Hydraulic design and supply by Riser Technologies.',
        features: ['UL/FM Approved', 'K-22.4 to K-25.2', 'No in-rack sprinklers needed', 'Storage up to 12 m'],
        icon: 'droplet',
      },
      {
        id: 'lb11-lithium-battery',
        title: 'LB11 Lithium Battery Sprinkler',
        category: 'Sprinklers',
        categorySlug: 'sprinklers',
        description: 'Reliable LB11 (Bulletin 083) — the world\'s first UL Listed fire sprinkler engineered specifically for lithium-ion battery thermal runaway suppression. High-density water application for EV gigafactories, BESS energy storage plants, data centres, and battery assembly facilities. Glass bulb, pendent orientation, K-factor K-162 (K-8.0). The only sprinkler tested and listed for Li-ion battery storage protection. Available in India via Riser Technologies, Chennai.',
        features: ['UL Listed', 'Li-ion thermal runaway', 'K-162 (K-8.0)', 'EV & BESS plants'],
        icon: 'droplet',
      },
      {
        id: 'extended-coverage',
        title: 'Extended Coverage Sprinklers',
        category: 'Sprinklers',
        categorySlug: 'sprinklers',
        description: 'Reliable Extended Coverage (EC) fire sprinklers covering up to 5.4 m × 5.4 m per head — reducing total sprinkler count and installation cost by up to 40 % compared to standard coverage. Available in Upright, Pendent, and Horizontal Sidewall. K-factor K-115 (K-5.6) and K-162 (K-8.0). UL/FM Approved per NFPA 13. Ideal for open-plan offices, retail spaces, and light industrial buildings in Chennai and Tamil Nadu where minimising pipework is a design priority.',
        features: ['UL/FM Approved', '5.4 m × 5.4 m coverage', 'Fewer heads & less pipework', 'NFPA 13 compliant'],
        icon: 'droplet',
      },
    ],
  },
  {
    id: 'pre-action',
    slug: 'pre-action',
    name: 'Pre-Action Systems',
    icon: Shield,
    description: 'Reliable DDX double-interlock and single-interlock pre-action fire suppression systems for data centres, IT parks, cold storage, and mission-critical facilities requiring zero-accidental-discharge protection.',
    products: [
      {
        id: 'ddx-double-interlock',
        title: 'DDX Double-Interlock Pre-Action System',
        category: 'Pre-Action Systems',
        categorySlug: 'pre-action',
        description: 'Reliable Bulletin 749 DDX valve — requires both detection signal AND sprinkler activation before releasing water. The preferred pre-action solution for data centres and IT parks in India.',
        features: ['UL/FM Listed', 'Double-interlock', 'Zero accidental discharge', 'Data centres & IT parks'],
        icon: 'shield',
      },
      {
        id: 'single-interlock',
        title: 'Single-Interlock Pre-Action System',
        category: 'Pre-Action Systems',
        categorySlug: 'pre-action',
        description: 'Single-interlock pre-action valve requiring a detection signal before water enters the dry piping. Suitable for freezer warehouses, cold storage, and areas where accidental discharge must be minimised.',
        features: ['UL/FM Listed', 'Single-interlock', 'Cold storage suitable', 'NFPA 13 compliant'],
        icon: 'shield',
      },
      {
        id: 'non-interlock',
        title: 'Non-Interlock Pre-Action System',
        category: 'Pre-Action Systems',
        categorySlug: 'pre-action',
        description: 'Non-interlock pre-action system where either detection or sprinkler activation fills the piping with water. Provides faster response in areas with high fire risk and deluge-like response needs.',
        features: ['UL/FM Listed', 'Faster response', 'High-risk areas', 'NFPA 13 compliant'],
        icon: 'shield',
      },
    ],
  },
  // ── Other fire protection categories ──────────────────────────────────────
  {
    id: 'in-panel',
    slug: 'in-panel',
    name: 'In-Panel Systems',
    icon: PanelTop,
    description: 'Specialized fire suppression systems for electrical panels and control cabinets.',
    products: [
      {
        id: 'mini',
        title: 'Mini Systems',
        category: 'In-Panel Systems',
        categorySlug: 'in-panel',
        description: 'Compact fire suppression systems designed for small electrical panels and control cabinets.',
        features: [
          'Compact design',
          'Easy installation',
          'Reliable detection',
          'Quick suppression',
        ],
        icon: 'panel',
      },
      {
        id: 'tube-based',
        title: 'Tube Based Systems',
        category: 'In-Panel Systems',
        categorySlug: 'in-panel',
        description: 'Tube-based fire suppression systems providing targeted protection for electrical equipment.',
        features: [
          'Targeted protection',
          'Tube detection',
          'Automatic activation',
          'Minimal space requirement',
        ],
        icon: 'panel',
      },
    ],
  },
  {
    id: 'suppression',
    slug: 'suppression',
    name: 'Suppression Systems',
    icon: Droplet,
    description: 'Advanced fire suppression systems for total flooding and specialized applications.',
    products: [
      {
        id: 'clean-gas',
        title: 'Clean Gas Based Systems',
        category: 'Suppression Systems',
        categorySlug: 'suppression',
        description: 'Clean agent gas suppression systems for critical facilities and sensitive equipment.',
        features: [
          'Clean discharge',
          'No residue',
          'Safe for equipment',
          'Environmentally responsible',
        ],
        icon: 'droplet',
      },
      {
        id: 'watermist',
        title: 'Watermist Based Systems',
        category: 'Suppression Systems',
        categorySlug: 'suppression',
        description: 'Advanced watermist suppression systems providing effective fire protection with minimal water usage.',
        features: [
          'Minimal water usage',
          'Fast suppression',
          'Safe for electronics',
          'Environmentally friendly',
        ],
        icon: 'droplet',
      },
      {
        id: 'retrofittable',
        title: 'Retrofittable Fire Suppression',
        category: 'Suppression Systems',
        categorySlug: 'suppression',
        description: 'Retrofittable fire suppression systems that can be installed in existing facilities without major modifications.',
        features: [
          'Easy retrofitting',
          'Minimal disruption',
          'Cost-effective',
          'Flexible installation',
        ],
        icon: 'droplet',
      },
      {
        id: 'transport',
        title: 'Transport Suppression',
        category: 'Suppression Systems',
        categorySlug: 'suppression',
        description: 'Fire suppression systems designed for transportation applications including vehicles and mobile equipment.',
        features: [
          'Mobile applications',
          'Vibration resistant',
          'Compact design',
          'Reliable operation',
        ],
        icon: 'droplet',
      },
    ],
  },
  {
    id: 'kitchen',
    slug: 'kitchen',
    name: 'Kitchen Systems',
    icon: UtensilsCrossed,
    description: 'Specialized fire suppression systems for commercial and residential kitchens.',
    products: [
      {
        id: 'commercial',
        title: 'Commercial Kitchen Systems',
        category: 'Kitchen Systems',
        categorySlug: 'kitchen',
        description: 'Complete fire suppression systems for commercial kitchens including hoods, ducts, and cooking equipment.',
        features: [
          'UL listed',
          'Automatic activation',
          'Complete coverage',
          'Kitchen specific',
        ],
        icon: 'utensils',
      },
      {
        id: 'residential',
        title: 'Residential Kitchen Systems',
        category: 'Kitchen Systems',
        categorySlug: 'kitchen',
        description: 'Residential kitchen fire suppression systems for home safety and protection.',
        features: [
          'Home friendly',
          'Easy installation',
          'Affordable',
          'Reliable protection',
        ],
        icon: 'utensils',
      },
    ],
  },
  {
    id: 'standalone',
    slug: 'standalone',
    name: 'Standalone Systems',
    icon: Building2,
    description: 'Standalone fire protection systems including hydrants and specialized solutions.',
    products: [
      {
        id: 'hydrant',
        title: 'Hydrant Systems',
        category: 'Standalone Systems',
        categorySlug: 'standalone',
        description: 'Fire hydrant systems for buildings and facilities providing reliable water supply for firefighting.',
        features: [
          'Reliable water supply',
          'Building integration',
          'Compliance ready',
          'Professional installation',
        ],
        icon: 'building',
      },
      {
        id: 'tetra-quad',
        title: 'Ceasefire Tetra Quad',
        category: 'Standalone Systems',
        categorySlug: 'standalone',
        description: 'Advanced Tetra Quad fire suppression system providing comprehensive protection for multiple areas.',
        features: [
          'Multi-zone protection',
          'Advanced technology',
          'Centralized control',
          'Scalable solution',
        ],
        icon: 'building',
      },
    ],
  },
  {
    id: 'valves',
    slug: 'valves',
    name: 'Valves',
    icon: GitMerge,
    description: 'UL Listed & FM Approved Reliable Valves in Chennai, Tamil Nadu & India — alarm check valves, deluge valves, gate valves, butterfly valves, OS&Y valves, check valves, preaction valves, post indicators, and test & drain valves for fire sprinkler systems.',
    products: [
      {
        id: 'alarm-check-valve',
        title: 'Alarm Check Valve (Wet Alarm Valve)',
        category: 'Valves',
        categorySlug: 'valves',
        description: 'UL Listed wet alarm check valve for automatic water flow detection and alarm activation in wet pipe fire sprinkler systems. Widely used in commercial buildings, warehouses, and industrial facilities across Chennai and Tamil Nadu.',
        features: ['UL Listed', 'Automatic alarm activation', 'Wet pipe systems', 'Water flow detection'],
        icon: 'layers',
      },
      {
        id: 'deluge-valve',
        title: 'Deluge System Valve (DDV)',
        category: 'Valves',
        categorySlug: 'valves',
        description: 'FM Approved DDV deluge valve for open-head fire suppression systems, providing rapid simultaneous discharge across all nozzles. Ideal for high-hazard areas, transformer bays, and aircraft hangars.',
        features: ['FM Approved', 'Open-head systems', 'Rapid simultaneous discharge', 'High-hazard areas'],
        icon: 'layers',
      },
      {
        id: 'gate-valve',
        title: 'Gate Valve / Sluice Valve',
        category: 'Valves',
        categorySlug: 'valves',
        description: 'Heavy-duty UL/FM approved gate valves and sluice valves for fire protection pipelines. Available in flanged and grooved ends for reliable isolation and flow control in fire sprinkler systems.',
        features: ['UL/FM Approved', 'Flanged & grooved ends', 'Full bore flow', 'Corrosion resistant'],
        icon: 'layers',
      },
      {
        id: 'butterfly-valve',
        title: 'Butterfly Valve',
        category: 'Valves',
        categorySlug: 'valves',
        description: 'Compact UL Listed butterfly valves for fire sprinkler systems with tamper-indicating switches. Lightweight, quarter-turn operation ideal for tight spaces in commercial and industrial fire protection installations.',
        features: ['UL Listed', 'Tamper-indicating switch', 'Quarter-turn operation', 'Lightweight design'],
        icon: 'layers',
      },
      {
        id: 'osy-valve',
        title: 'OS&Y Gate Valve (UL/FM)',
        category: 'Valves',
        categorySlug: 'valves',
        description: 'UL/FM approved Outside Screw and Yoke (OS&Y) gate valves meeting NFPA 13 requirements. The open/closed position is visually identifiable at all times — standard on fire riser rooms across India.',
        features: ['UL/FM Listed', 'Visual open/close indicator', 'NFPA 13 compliant', 'Flanged ends'],
        icon: 'layers',
      },
      {
        id: 'check-valve',
        title: 'Check Valve (Flanged Swing Check)',
        category: 'Valves',
        categorySlug: 'valves',
        description: 'Flanged swing check valve for fire protection systems preventing backflow and ensuring unidirectional water flow. Critical for pump discharge headers, boosters, and gravity-fed fire sprinkler systems.',
        features: ['Backflow prevention', 'Flanged ends', 'Low pressure drop', 'Gravity & pump systems'],
        icon: 'layers',
      },
      {
        id: 'preaction-alarm-valve',
        title: 'Preaction Alarm Valve',
        category: 'Valves',
        categorySlug: 'valves',
        description: 'Preaction alarm valve for single and double-interlock fire suppression systems. Combines electronic detection with sprinkler activation for zero-accidental-discharge protection in data centres, server rooms, and cold storage.',
        features: ['Single & double interlock', 'Zero accidental discharge', 'Data centre use', 'NFPA 13 compliant'],
        icon: 'layers',
      },
      {
        id: 'post-indicator',
        title: 'Post Indicator Valve (Wall Type)',
        category: 'Valves',
        categorySlug: 'valves',
        description: 'Post indicator wall-type valve providing visual open/closed confirmation for buried or wall-mounted fire protection gate valves. Essential for fire service access and NFPA compliance in multi-storey buildings.',
        features: ['Visual status indicator', 'Wall & post mount', 'Fire service access', 'NFPA compliant'],
        icon: 'layers',
      },
      {
        id: 'test-drain-valve',
        title: 'Test and Drain Valve',
        category: 'Valves',
        categorySlug: 'valves',
        description: 'Combined test and drain valve for inspecting, testing flow rates, and draining wet and dry fire sprinkler systems. Simplifies annual inspections and compliance testing per NFPA 25 requirements.',
        features: ['System testing', 'NFPA 25 inspection', 'Flow rate testing', 'Easy drain'],
        icon: 'layers',
      },
      {
        id: 'y-strainer',
        title: 'Y-Type Strainer',
        category: 'Valves',
        categorySlug: 'valves',
        description: 'High-quality Y-type strainers for fire protection pipelines filtering debris and protecting downstream valves, sprinkler heads, and nozzles from blockage in fire sprinkler and hydrant systems.',
        features: ['Debris filtration', 'Protects sprinkler heads', 'Easy to clean', 'Multiple sizes'],
        icon: 'layers',
      },
      {
        id: 'pressure-gauge',
        title: 'Pressure Gauge',
        category: 'Valves',
        categorySlug: 'valves',
        description: 'Accurate pressure gauges for monitoring fire protection system pressure. Required on all wet, dry, deluge, and preaction valve trim assemblies per NFPA 13 and TAC fire safety standards in Tamil Nadu.',
        features: ['NFPA 13 required', 'Wet & dry systems', 'High accuracy', 'Glycerine filled'],
        icon: 'layers',
      },
      {
        id: 'pressure-switch',
        title: 'Pressure Switch',
        category: 'Valves',
        categorySlug: 'valves',
        description: 'Automatic pressure switches for fire protection systems triggering pump start, alarm panels, and supervisory signals on pressure drop or flow. UL Listed for fire sprinkler and hydrant applications.',
        features: ['UL Listed', 'Pump start signal', 'Alarm panel integration', 'Adjustable set point'],
        icon: 'layers',
      },
    ],
  },
  {
    id: 'fire-extinguishers',
    slug: 'fire-extinguishers',
    name: 'Fire Extinguishers',
    icon: Flame,
    description: 'Comprehensive range of fire extinguishers for all fire classes and applications.',
    products: [
      {
        id: 'abc-powder',
        title: 'ABC Powder Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Versatile ABC powder extinguishers effective against Class A, B, and C fires. Ideal for general purpose use.',
        features: ['Multi-class protection', 'Quick fire suppression', 'Long shelf life', 'Cost-effective solution'],
        icon: 'flame',
      },
      {
        id: 'water-foam',
        title: 'Water & Foam Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Water and foam based extinguishers for Class A and B fires. Environmentally friendly and effective.',
        features: ['Class A and B protection', 'Environmentally safe', 'High effectiveness', 'Easy to refill'],
        icon: 'flame',
      },
      {
        id: 'co2',
        title: 'CO2 Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Carbon dioxide extinguishers for Class B and electrical fires. Clean discharge with no residue.',
        features: ['No residue', 'Safe for electrical equipment', 'Fast acting', 'Ideal for server rooms'],
        icon: 'flame',
      },
      {
        id: 'clean-agent',
        title: 'Clean Agent Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Clean agent fire suppression systems using environmentally safe agents. Perfect for sensitive environments.',
        features: ['Environmentally safe', 'No residue', 'Safe for sensitive equipment', 'Fast suppression'],
        icon: 'flame',
      },
      {
        id: 'watermist',
        title: 'Watermist Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Advanced watermist technology for safe and effective fire suppression. Suitable for multiple fire classes.',
        features: ['Multi-class protection', 'Safe for electrical fires', 'Minimal water damage', 'Advanced technology'],
        icon: 'flame',
      },
      {
        id: 'wet-chemical',
        title: 'Wet Chemical Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Wet chemical extinguishers for Class F cooking oil fires. Perfect for commercial kitchens.',
        features: ['Class F protection', 'Kitchen specific', 'Saponification process', 'Prevents re-ignition'],
        icon: 'flame',
      },
      {
        id: 'lithium-battery',
        title: 'Lithium Battery Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Specialized extinguishers designed for lithium battery fires. Essential for modern electronics and vehicles.',
        features: ['Battery fire specific', 'Advanced technology', 'Safe for electronics', 'Modern solution'],
        icon: 'flame',
      },
      {
        id: 'automatic',
        title: 'Automatic Fire Extinguishers',
        category: 'Fire Extinguishers',
        categorySlug: 'fire-extinguishers',
        description: 'Automatic fire suppression systems that activate without human intervention. Ideal for unattended areas.',
        features: ['Automatic activation', '24/7 protection', 'No human intervention', 'Reliable detection'],
        icon: 'flame',
      },
    ],
  },
];

// Helper function to get product by slug path
export function getProductBySlug(slugs: string[]): Product | null {
  if (slugs.length < 2) return null;
  
  const categorySlug = slugs[0];
  const productSlug = slugs[1];
  
  const category = PRODUCT_CATEGORIES.find(cat => cat.slug === categorySlug);
  if (!category) return null;
  
  return category.products.find(prod => prod.id === productSlug) || null;
}

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): ProductCategory | null {
  return PRODUCT_CATEGORIES.find(cat => cat.slug === slug) || null;
}

// Helper function to get all products
export function getAllProducts(): Product[] {
  return PRODUCT_CATEGORIES.flatMap(category => 
    category.products.map(product => product)
  );
}












