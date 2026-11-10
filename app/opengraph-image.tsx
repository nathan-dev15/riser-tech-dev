import { ImageResponse } from 'next/og';

export const alt = 'Riser Technologies — Authorized Reliable Sprinkler Dealer in Chennai, India';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #451a03 100%)',
          padding: '64px 72px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Amber accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '8px',
            height: '100%',
            background: '#f59e0b',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(245,158,11,0.15)',
            border: '1px solid rgba(245,158,11,0.4)',
            borderRadius: '24px',
            padding: '8px 20px',
            marginBottom: '28px',
          }}
        >
          <span style={{ color: '#f59e0b', fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em' }}>
            AUTHORIZED RELIABLE SPRINKLER DEALER
          </span>
        </div>

        {/* Company name */}
        <div
          style={{
            color: '#ffffff',
            fontSize: '62px',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}
        >
          Riser Technologies
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#94a3b8',
            fontSize: '26px',
            fontWeight: 400,
            marginBottom: '36px',
            lineHeight: 1.4,
          }}
        >
          Fire Sprinkler Systems · Chennai, Tamil Nadu, India
        </div>

        {/* Certifications row */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {['UL Listed', 'FM Approved', 'LPCB Certified', 'NFPA 13'].map((badge) => (
            <div
              key={badge}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px',
                padding: '8px 16px',
                color: '#e2e8f0',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Website URL bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '72px',
            color: '#f59e0b',
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          risertech.in
        </div>
      </div>
    ),
    { ...size },
  );
}
