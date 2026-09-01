import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  category: string;
  rating: number;
}

const row1: Testimonial[] = [
  {
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Vance Luxury Real Estate (Miami, USA)',
    quote: "Digital Digix completely transformed our digital pipeline. Our high-ticket luxury listings in Brickell and Miami Beach are seeing 3x more qualified international buyer inquiries.",
    category: 'Real Estate',
    rating: 5
  },
  {
    name: 'Dr. Rajesh Mehta',
    role: 'Director',
    company: 'Metro Heart Hospital (New Delhi)',
    quote: "Digital Digix transformed our digital presence completely. Our cardiac department is now fully booked 3 weeks in advance. The team's professionalism is unmatched.",
    category: 'Healthcare',
    rating: 5
  },
  {
    name: 'Dr. Arthur Pendelton',
    role: 'Managing Director',
    company: 'Harley Street Dental (London, UK)',
    quote: "Our cosmetic smile makeover bookings surged over 250% since they redesigned our ad funnels and visual assets. The turnaround time and quality are world-class.",
    category: 'Dental & Clinics',
    rating: 5
  },
  {
    name: 'Rohan Desai',
    role: 'Founder',
    company: 'Crave Cloud Kitchens (Mumbai)',
    quote: "Our weekend orders doubled within two months of their festival creatives and Meta Ads. The cost-per-order is the lowest we've ever seen.",
    category: 'Food & Restaurant',
    rating: 5
  },
  {
    name: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Aura Living Interiors (Dubai, UAE)',
    quote: "The visual design catalog and social campaigns they crafted gave us immediate brand prestige in the GCC market. High-ticket villa design leads started coming in within weeks.",
    category: 'Interior Design',
    rating: 5
  },
  {
    name: 'Karan Malhotra',
    role: 'Co-founder',
    company: 'UrbanNest Interiors (Bangalore)',
    quote: "The portfolio reels they produced made us look like a national brand. Premium corporate leads started coming in almost immediately.",
    category: 'Architecture & Design',
    rating: 5
  },
  {
    name: 'Sophie Dubois',
    role: 'Head of E-Commerce',
    company: 'Lumière Botanical Skincare (Toronto, Canada)',
    quote: "Their packaging design, store speed optimization, and retargeting ads increased our repeat customer rate by 65%. A truly phenomenal growth partner.",
    category: 'D2C & E-Commerce',
    rating: 5
  },
  {
    name: 'Suresh Iyer',
    role: 'MD',
    company: 'Pinnacle Realtors (Hyderabad)',
    quote: "Lead quality is what sold me. Their site-visit campaigns bring serious buyers, not just clicks. ROI has been consistently strong.",
    category: 'Real Estate',
    rating: 5
  }
];

const row2: Testimonial[] = [
  {
    name: 'Liam O\'Connor',
    role: 'Co-Founder',
    company: 'CloudScale SaaS (Austin, USA)',
    quote: "Their B2B SEO and executive personal branding strategy positioned our leadership as recognized domain authorities. Enterprise demo requests doubled within 90 days.",
    category: 'SaaS & Tech',
    rating: 5
  },
  {
    name: 'Sneha Kapoor',
    role: 'Founder',
    company: 'Bloom Luxury Salon & Spa (Pune)',
    quote: "Their KPI dashboard changed how we run the business. We finally see daily revenue, staff performance and repeat-client rates at a glance. Worth every rupee.",
    category: 'Wellness',
    rating: 5
  },
  {
    name: 'Alexander Wright',
    role: 'Principal Architect',
    company: 'Wright Architectural Studio (New York, USA)',
    quote: "Finding an agency that understands modern architectural aesthetics and B2B client acquisition was difficult until we partnered with Digital Digix. Outstanding visual storytelling.",
    category: 'Architecture',
    rating: 5
  },
  {
    name: 'Dr. Kavita Rao',
    role: 'Chief Surgeon',
    company: 'Apex ENT & Facial Clinics (Chennai)',
    quote: "The pre-monsoon campaign was perfectly timed. We were booked solid for two months. They understand healthcare patient acquisition deeply.",
    category: 'Healthcare',
    rating: 5
  },
  {
    name: 'Chloe Kensington',
    role: 'Founder',
    company: 'Verve Wellness Studios (Singapore)',
    quote: "Our studio membership inquiries tripled within 60 days of their social media marketing campaign launch. Seamless communication and remarkable results.",
    category: 'Fitness & Wellness',
    rating: 5
  },
  {
    name: 'Amit Verma',
    role: 'CEO',
    company: 'EdVantage Coaching (Noida)',
    quote: "From posters to a full website and Meta Ads — everything delivered on time, every time. The performance showed real confidence in their own work.",
    category: 'Education',
    rating: 5
  },
  {
    name: 'Rachel Sterling',
    role: 'Managing Director',
    company: 'Sterling Wealth Management (London, UK)',
    quote: "Their executive personal branding engine established our leadership team as trusted voices in financial planning. An invaluable partnership for our growth.",
    category: 'Wealth Management',
    rating: 5
  },
  {
    name: 'Neha Joshi',
    role: 'Founder',
    company: 'GreenLeaf Organics (Jaipur)',
    quote: "They turned our D2C brand around with sharp packaging design and retargeting ads. Repeat purchases are up 60% this quarter.",
    category: 'D2C & E-commerce',
    rating: 5
  }
];

interface ClientVoicesProps {
  backgroundColor?: string;
}

export const ClientVoices: React.FC<ClientVoicesProps> = ({ backgroundColor }) => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="section-tag" style={{ color: '#D97706', background: 'rgba(217, 119, 6, 0.1)' }}>VERIFIED CLIENT TESTIMONIALS</span>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 900, fontFamily: 'Outfit, sans-serif', color: 'var(--secondary)', marginTop: '0.5rem', marginBottom: '1rem' }}>
          Trusted by High-Growth Founders & Global Enterprises
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
          Direct reviews from executive leaders, medical directors, and business founders scaling with our growth infrastructure.
        </p>
      </div>

      {/* TRACK 1 - SCROLLS LEFT */}
      <div className="marquee-container" style={{ marginBottom: '1.75rem' }}>
        <div className="marquee-track-left">
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="testimonial-marquee-card"
              style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '2.25rem 2rem',
                width: '350px',
                marginRight: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0,
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Quote Mark Icon */}
              <span
                style={{
                  fontSize: '4.5rem',
                  color: '#D97706',
                  opacity: 0.12,
                  position: 'absolute',
                  top: '0.25rem',
                  left: '1.5rem',
                  fontFamily: 'serif',
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}
              >
                “
              </span>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '1.75rem',
                  flexGrow: 1,
                  zIndex: 2
                }}
              >
                {item.quote}
              </p>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--secondary)', margin: 0 }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    {item.role}, {item.company}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.05rem', color: '#F59E0B', fontSize: '0.75rem' }}>
                    {'★'.repeat(item.rating)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#D97706',
                      backgroundColor: 'rgba(217, 119, 6, 0.08)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px'
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRACK 2 - SCROLLS RIGHT */}
      <div className="marquee-container">
        <div className="marquee-track-right">
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="testimonial-marquee-card"
              style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '2.25rem 2rem',
                width: '350px',
                marginRight: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0,
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Quote Mark Icon */}
              <span
                style={{
                  fontSize: '4.5rem',
                  color: '#D97706',
                  opacity: 0.12,
                  position: 'absolute',
                  top: '0.25rem',
                  left: '1.5rem',
                  fontFamily: 'serif',
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}
              >
                “
              </span>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '1.75rem',
                  flexGrow: 1,
                  zIndex: 2
                }}
              >
                {item.quote}
              </p>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--secondary)', margin: 0 }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    {item.role}, {item.company}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.05rem', color: '#F59E0B', fontSize: '0.75rem' }}>
                    {'★'.repeat(item.rating)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#D97706',
                      backgroundColor: 'rgba(217, 119, 6, 0.08)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px'
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
