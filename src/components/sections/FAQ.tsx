'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { LensHeading } from '@/components/ui/LensHeading';
import { FAQPageSchema } from '@/components/seo/StructuredData';


const faqs = [
  {
    question: 'Is Riser Technologies an authorised distributor of Reliable Sprinkler in India?',
    answer:
      'Yes. Riser Technologies is an authorised Indian distribution partner for Reliable Fire Sprinklers (USA) — one of the world\'s leading manufacturers of UL Listed and FM Approved fire sprinkler systems. We supply genuine Reliable Fire Sprinklers products including sprinkler heads, system valves, grooved connections, and pre-action systems across India from our base in Chennai, Tamil Nadu.',
  },
  {
    question: 'How long has Reliable Automatic Sprinkler been a leader in fire protection?',
    answer:
      'Reliable Automatic Sprinkler Co. has been a leader in the fire protection industry for over 100 years. They manufacture all their fire protection valves and sprinklers at their flagship advanced manufacturing facility in Liberty, South Carolina — housing Product Development, Engineering, Quality Assurance, Manufacturing, Product Technology, and Shipping teams under one roof. With regional sales and distribution centres across the U.S. and worldwide, Reliable combines precision engineering and cutting-edge technology to produce UL Listed and FM Approved fire sprinkler systems trusted globally. Riser Technologies is proud to be the authorised distributor of Reliable Fire Sprinklers in India. Learn more: https://www.reliablesprinkler.com/about-us/',
  },
  {
    question: 'What Reliable Sprinkler products does Riser Technologies supply in India?',
    answer:
      'Riser Technologies supplies the complete Reliable Fire Sprinklers product portfolio in India: fire sprinkler heads (Quick Response, Standard Response, ESFR, residential), system valves (alarm check valves, deluge, dry-pipe, pre-action), grooved pipe connections (couplings, fittings, flanges), general purpose valves (OS&Y gate, butterfly, check), and the LB11 lithium-ion battery storage sprinkler. All products are UL Listed and/or FM Approved. Full product range: https://www.reliablesprinkler.com/products/sprinklers/',
  },
  {
    question: 'What is an ESFR sprinkler and do I need it for my warehouse in India?',
    answer:
      'ESFR (Early Suppression Fast Response) sprinklers are high-flow sprinklers designed to suppress fires at the point of ignition in high-bay warehouses and storage facilities — eliminating the need for in-rack sprinklers. If your warehouse stores goods more than 4.5 metres high, ESFR sprinklers are typically required under NFPA 13. Riser Technologies supplies Reliable\'s P22, M336, JL14, and JL17 ESFR models, which are among the most widely used in India\'s logistics and cold-storage sector.',
  },
  {
    question: 'What is the LB11 sprinkler and is it available in India?',
    answer:
      'The Reliable LB11 (Bulletin 083) is the world\'s first UL Listed sprinkler specifically designed to suppress lithium-ion battery fires — used in EV gigafactories, BESS energy storage plants, and data centres. It delivers a high-density water application pattern engineered for the unique thermal runaway characteristics of Li-ion batteries. Riser Technologies is able to source and supply the LB11 sprinkler in India. Contact us at 9787666104 to discuss your project.',
  },
  {
    question: 'What is a DDX pre-action fire suppression system?',
    answer:
      'The Reliable DDX (Bulletin 749) is a double-interlock pre-action valve that requires both a detection signal and sprinkler activation before water is released — making it ideal for data centres, IT parks, server rooms, and cold storage facilities where accidental water discharge must be avoided. Riser Technologies designs and supplies complete DDX pre-action systems including the valve, detection, and control panel in India.',
  },
  {
    question: 'Are Reliable Sprinkler products UL Listed and FM Approved?',
    answer:
      'Yes. Reliable Automatic Sprinkler Co. products are independently tested and listed by Underwriters Laboratories (UL), Factory Mutual (FM), LPCB (Loss Prevention Certification Board), and VdS (German fire standard). These are the highest internationally recognised fire protection certifications. All products supplied by Riser Technologies in India carry the relevant listings and approvals.',
  },
  {
    question: 'How often should fire sprinkler systems be inspected in Chennai?',
    answer:
      'Under NFPA 25 (the standard for inspection, testing and maintenance of water-based fire protection systems), wet-pipe sprinkler systems require quarterly inspections of gauges, annual inspector\'s test, and a 5-year internal inspection. In Chennai and Tamil Nadu, the Tamil Nadu Fire and Rescue Services Department may also mandate inspections as part of your building\'s fire NOC renewal. Riser Technologies offers Annual Maintenance Contracts (AMC) for all Reliable Sprinkler systems.',
  },
  {
    question: 'Can Riser Technologies design and install a complete fire sprinkler system in Chennai?',
    answer:
      'Yes. Riser Technologies provides end-to-end fire sprinkler services in Chennai — from hydraulic design and product supply to installation and commissioning. Our team handles wet-pipe, dry-pipe, deluge, and pre-action sprinkler systems for warehouses, data centres, commercial buildings, industrial plants, and cold-storage facilities. We ensure NFPA 13 compliance and assist with fire NOC documentation for Tamil Nadu authorities.',
  },
  {
    question: 'What is the cost of a fire sprinkler system installation in Chennai?',
    answer:
      'The cost varies significantly based on system type (wet, dry, ESFR, pre-action), area to be protected, ceiling height, and occupancy hazard classification. Typically, a wet-pipe system for a commercial building starts from ₹80–120 per sq. ft. ESFR warehouse systems and DDX pre-action systems are priced based on hydraulic design. Contact Riser Technologies at 9787666104 for a free site assessment and detailed quotation.',
  },
  {
    question: 'Does Riser Technologies serve locations outside Chennai?',
    answer:
      'Yes. While Riser Technologies is headquartered in Chennai, Tamil Nadu, we supply Reliable Sprinkler products and provide fire protection services across India — including Bengaluru, Hyderabad, Pune, Mumbai, Delhi NCR, Ahmedabad, and Kolkata. For large infrastructure, logistics, and industrial projects across India, reach out to us at 9787666104 or through our contact page.',
  },
  {
    question: 'What fire safety regulations apply to sprinkler systems in Tamil Nadu?',
    answer:
      'Fire sprinkler systems in Tamil Nadu must comply with the National Building Code of India (NBC 2016), NFPA 13 (for sprinkler design), and the Tamil Nadu Fire Services Act. Commercial, industrial, and high-rise buildings require a fire NOC from the Tamil Nadu Fire and Rescue Services Department. Riser Technologies helps clients navigate compliance, prepare documentation, and obtain fire safety clearances.',
  },
  {
    question: 'Can I get a free consultation for Reliable Sprinkler products in India?',
    answer:
      'Yes. Riser Technologies offers free technical consultations for fire sprinkler system design, product selection, and compliance guidance across India. Whether you are specifying ESFR for a new warehouse, DDX for a data centre, or LB11 for an EV battery plant, our team will help you select the right Reliable Sprinkler solution. Call 9787666104 or submit a request through our Contact page.',
  },
  {
    question: 'What do the glass bulb colours on a Reliable sprinkler mean?',
    answer:
      'Glass bulb colour on a Reliable fire sprinkler indicates its temperature rating per NFPA 13: Orange = 57 °C (135 °F), Red = 68 °C (155 °F), Yellow = 79 °C (174 °F), Green = 93 °C (200 °F), Blue = 141 °C (286 °F), Mauve/Purple = 182 °C (360 °F), Black = 227–260 °C (440–500 °F). For typical office and commercial buildings in Chennai where ambient temperatures are 25–35 °C, Ordinary temperature rated sprinklers (Orange 57 °C or Red 68 °C) are standard. Higher-rated bulbs are selected for boiler rooms, cooking areas, or heat-generating industrial processes.',
  },
  {
    question: 'What is the K-factor of a fire sprinkler and which K-factor does Reliable offer?',
    answer:
      'The K-factor determines how much water a sprinkler discharges at a given pressure, using the formula Q = K√P (where Q = flow in LPM, K = K-factor, P = pressure in bar). Reliable Automatic Sprinkler offers a full K-factor range: K-57 (K-2.8), K-80 (K-4.2 residential), K-115 (K-5.6 standard), K-162 (K-8.0 large orifice), K-202 (K-11.2 extra large), K-242 (K-14.0 CMSA), K-363 (K-22.4 ESFR). Higher K-factors deliver more water at lower pressures — critical for ESFR warehouse protection and high-rack storage applications in India.',
  },
  {
    question: 'What is the difference between Quick Response and Standard Response Reliable sprinklers?',
    answer:
      'Quick Response (QR) Reliable sprinklers have a 3 mm glass bulb and a Response Time Index (RTI) of ≤50 (m·s)½ — they activate faster in a developing fire, reducing heat and smoke damage. Standard Response (SR) sprinklers use a 5 mm bulb with RTI ≥80 (m·s)½. NFPA 13 mandates Quick Response sprinklers in light hazard occupancies such as offices, hotels, hospitals, and schools. Standard Response is used in ordinary and extra hazard occupancies like warehouses and factories. Riser Technologies supplies both QR and SR Reliable sprinklers across Chennai, Tamil Nadu, and India.',
  },
  {
    question: 'What sprinkler orientations does Reliable offer — pendent, upright, or sidewall?',
    answer:
      'Reliable Automatic Sprinkler manufactures all standard orientations: Pendent (deflector faces down, most common in false-ceiling buildings), Upright (deflector faces up, used in open industrial ceilings and storage racks), Horizontal Sidewall (mounts on a wall, ideal for corridors and narrow rooms), Concealed Pendent (recessed behind a decorative cover plate for aesthetic spaces), and Vertical Sidewall. For most commercial buildings in Chennai — offices, malls, hotels — pendent concealed sprinklers are specified. Upright sprinklers are standard in warehouses and manufacturing plants.',
  },
  {
    question: 'What is the difference between concealed and recessed Reliable sprinklers?',
    answer:
      'A Concealed Reliable sprinkler sits fully flush behind a flat cover plate that falls away at 57 °C before the sprinkler activates — invisible when installed and preferred for hotel lobbies, corporate offices, and high-end residential buildings in Chennai. A Recessed sprinkler has the deflector and body partially recessed into an escutcheon but the sprinkler head remains slightly visible. Both meet NFPA 13, with concealed models offering the cleanest aesthetic finish.',
  },
  {
    question: 'What is the minimum operating pressure for Reliable fire sprinklers?',
    answer:
      'Most Reliable pendent, upright, and sidewall sprinklers require a minimum operating pressure of 0.5 bar (7 psi) at the sprinkler head. Residential Reliable sprinklers may operate as low as 0.34 bar (5 psi). ESFR sprinklers such as the P22 and JL17 require higher minimum pressures — typically 1.7 to 3.4 bar — to achieve the high-density discharge needed to suppress storage fires. Hydraulic calculations per NFPA 13 determine the exact system demand pressure for each installation.',
  },
  {
    question: 'What is a Sprinkler Identification Number (SIN) on a Reliable sprinkler?',
    answer:
      'A Sprinkler Identification Number (SIN) is a unique alphanumeric code stamped on every UL Listed Reliable sprinkler — for example, R3511 (standard pendent), RC1 (concealed residential), or F1FR (ESFR storage). The SIN identifies the exact model, K-factor, temperature rating, and finish. NFPA 13 and NFPA 25 require that replacement sprinklers match the original SIN precisely — never substitute a different SIN even if the external appearance looks identical. Riser Technologies stocks a wide range of Reliable SINs for maintenance and replacement across India.',
  },
  {
    question: 'What is the difference between a glass bulb and fusible link Reliable sprinkler?',
    answer:
      'A glass bulb Reliable sprinkler uses a small sealed glass ampule filled with glycerine that shatters at its rated temperature, releasing the cap and deflector to allow water flow. A fusible link (or solder element) sprinkler uses a bi-metallic strip or soldered link that separates at the rated temperature. Glass bulb sprinklers are more common today — they offer precise temperature response, are corrosion-resistant, and are available in a wide K-factor and temperature range. Fusible link Reliable sprinklers are used in specialised industrial environments where glass bulbs may be exposed to vibration or chemical contamination.',
  },
  {
    question: 'Which Reliable sprinkler is best for a data centre or server room in India?',
    answer:
      'For data centres and server rooms, a Pre-Action Reliable system using the DDX double-interlock valve with Quick Response pendent sprinklers is the gold standard — water only enters the pipe when both a detection signal AND a sprinkler activates, eliminating accidental discharge risk. The sprinkler itself is typically a QR pendent with a 68 °C (Red bulb) rating. Where ceiling aesthetics matter, Reliable concealed pendent sprinklers with decorative cover plates are specified. Riser Technologies designs and supplies complete DDX pre-action systems for data centres, IT parks, and server rooms across Chennai and India.',
  },
  {
    question: 'How do I select the right Reliable sprinkler temperature rating for my building in Chennai?',
    answer:
      'NFPA 13 temperature selection is based on the maximum expected ambient temperature at the ceiling. In Chennai, where ambient temperatures can reach 38–40 °C in summer, Ordinary temperature rating (57 °C Orange or 68 °C Red bulb) is standard for air-conditioned spaces. Intermediate rating (79 °C Yellow or 93 °C Green) is used in non-air-conditioned warehouses, corridors, and rooftop plant rooms where ceiling temperatures may exceed 38 °C. High-temperature ratings (141 °C Blue) are used near boilers, industrial ovens, or steam rooms. As a rule: the maximum ceiling temperature should not exceed 38 °C below the sprinkler\'s rated temperature.',
  },
  {
    question: 'Does Reliable supply sprinkler storage cabinets and spare sprinkler heads in India?',
    answer:
      'Yes. NFPA 13 requires every sprinkler installation to maintain a minimum number of spare sprinkler heads of each type and a sprinkler wrench for replacement — typically 6 spare heads for systems with fewer than 300 sprinklers, and 24 heads for larger systems. Riser Technologies supplies Reliable sprinkler storage cabinets and spare head kits for all installed models in India. Regular spare stock ensures fast replacement after a fire event or accidental damage without waiting for import shipments.',
  },
];

// Show only top 6 in UI — all remain in FAQPageSchema for Google rich results
const VISIBLE_FAQS = faqs.slice(0, 6);

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      {/* All 12 FAQs sent as JSON-LD structured data for Google — not rendered in UI */}
      <FAQPageSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <LensHeading as="h2" className="text-4xl font-bold mb-4" magnify={2.5}>
            Riser Technologies Chennai — Reliable Sprinkler India FAQs
          </LensHeading>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Riser Technologies, Chennai's authorised Reliable Sprinkler distributor — answers to common questions about fire sprinkler systems, products, and services across India
          </p>
        </div>

        <div className="space-y-4">
          {VISIBLE_FAQS.map((faq, index) => (
            <Card key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 dark:text-gray-400">{faq.answer}</p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

