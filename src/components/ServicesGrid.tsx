'use client';

import React from 'react';

export interface ComprehensiveServiceItem {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  longDescription?: string;
  pricing: string;
  whatWeDo: string[];
  deliverables: string[];
  painPoints: string[];
  faqs: { q: string; a: string }[];
  approach?: string;
  typicalResults?: string;
}

export interface PricingCategory {
  title: string;
  subtitle: string;
  items: { name: string; price: string }[];
}

export const serviceApproachResults: Record<string, { approach: string; typicalResults: string }> = {
  'Social Media Marketing': {
    approach: 'Content-first brand storytelling: we build custom visual grids, write direct-response copy, and schedule at peak-hour traffic slots.',
    typicalResults: 'Clients see an average of 40% organic follower growth and 2.5x increase in DM-to-lead conversion rates.'
  },
  'Graphic Design': {
    approach: 'Share your brief on WhatsApp, choose the design type, and we deliver print- and web-ready files with revisions. Transparent per-design pricing means you know the cost before we start — no surprises.',
    typicalResults: 'Brands get consistent, conversion-focused creatives delivered fast — often within 24–48 hours for standard formats — at a fraction of typical agency rates.'
  },
  'Dashboard & KPI Systems': {
    approach: 'Unified data architecture: we integrate GA4, Shopify, Meta Ads, and CRMs into a single interactive visualization.',
    typicalResults: 'Operational teams save 5+ hours weekly on manual reporting and gain absolute visibility into true blended ROAS.'
  },
  'SEO Services': {
    approach: 'Semantic relevance & speed: technical site audits combined with high-intent keyword maps and digital PR backlink outreach.',
    typicalResults: 'Predictable organic search traffic growth with 60% of target keywords reaching Page 1 of Google in 90 days.'
  },
  'Website Development': {
    approach: 'Design for conversion first: clear CTAs, trust signals and sub-3-second loads — then layer in SEO architecture so the site earns traffic from day one.',
    typicalResults: 'Client websites average 90+ mobile speed scores and 2–3x enquiry rates vs. their old sites.'
  },
  'Personal Branding': {
    approach: 'Founder-led authority storytelling: we define your unique brand narrative, ghostwrite high-engagement executive LinkedIn content, and optimize your visual positioning.',
    typicalResults: 'Founders and executives see up to 5x increase in profile impressions, high-value inbound speaking/partnership inquiries, and industry thought leadership recognition.'
  }
};

export const graphicDesignPricingData: PricingCategory[] = [
  {
    title: "Standard Creatives — $35",
    subtitle: "Single-page social & digital formats.",
    items: [
      { name: "Poster Design", price: "$35" },
      { name: "Flyer Design", price: "$35" },
      { name: "Pamphlet Design", price: "$35" },
      { name: "Leaflet Design", price: "$35" },
      { name: "Social Media Post Design", price: "$35" },
      { name: "Festival Post Design", price: "$35" },
      { name: "Promotional Post Design", price: "$35" },
      { name: "Product Post Design", price: "$35" },
      { name: "Offer Post Design", price: "$35" },
      { name: "Event Poster Design", price: "$35" },
      { name: "School Admission Creative", price: "$35" },
      { name: "Food Promotion Poster", price: "$35" },
      { name: "Meta Ad Creative", price: "$35" },
      { name: "Google Display Ad", price: "$35" },
      { name: "Google Banner Ad", price: "$35" },
      { name: "WhatsApp Marketing Creative", price: "$35" },
      { name: "App Promotion Creative", price: "$35" }
    ]
  },
  {
    title: "Structured Design — $50",
    subtitle: "Layout complexity — cards, certificates, menus.",
    items: [
      { name: "Visiting Card Design", price: "$50" },
      { name: "Letterhead Design", price: "$50" },
      { name: "ID Card Design", price: "$50" },
      { name: "Certificate Design", price: "$50" },
      { name: "Quotation Design", price: "$50" },
      { name: "Carousel Design", price: "$50" },
      { name: "Menu Card Design", price: "$50" },
      { name: "YouTube Banner Design", price: "$50" },
      { name: "Event Invitation Design", price: "$50" }
    ]
  },
  {
    title: "Multi-Page Documents — $25/page",
    subtitle: "Billed per page or per slide.",
    items: [
      { name: "PPT / Presentation Design", price: "$25/page" },
      { name: "Investor Pitch Deck", price: "$25/page" },
      { name: "Sales Presentation", price: "$25/page" },
      { name: "Business Proposal Design", price: "$25/page" },
      { name: "Training Presentation", price: "$25/page" },
      { name: "Catalogue Design", price: "$25/page" },
      { name: "School Magazine Design", price: "$25/page" },
      { name: "Prospectus Design", price: "$25/page" },
      { name: "Annual Report Design", price: "Custom Quote" }
    ]
  }
];

export const detailed17Services: ComprehensiveServiceItem[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'Design & Branding',
    icon: '🎨',
    description: 'From social posts and logos to packaging, presentations and branding.',
    longDescription: 'Premium, custom visual assets tailored for B2B and D2C brands. We design social media ad creatives, corporate pitch decks, sales brochures, packaging labels, retail banners, and 3D product mockups with transparent bundle pricing and ultra-fast 24-hour turnaround times.',
    pricing: 'From $35',
    whatWeDo: [
      'Custom Social Media Posts, Stories & Ad Creatives',
      'Corporate Pitch Decks, Sales Brochures & Banners',
      'Product Packaging, Labels & Retail Display Designs',
      '3D Product Mockups & Large-Format Flex Printing Assets',
      'Infographic Layouts, Ebook Design & Custom Illustrations',
      'Corporate Stationary, Letterheads & Invoice Design Templates'
    ],
    deliverables: [
      'High-Res PNG/JPEG Files',
      'Print-Ready PDF (CMYK)',
      'Editable Vector Source Files (AI/PSD)',
      'Brand Color Palette Guide',
      'Fonts and Typography Package'
    ],
    painPoints: [
      'Amateur looking designs damaging brand credibility',
      'Slow designer turnaround delaying marketing campaigns',
      'High agency retainers eating into profit margins',
      'Fragmented visual styles across different company channels'
    ],
    faqs: [
      { q: 'How is graphic design priced?', a: 'We offer transparent bundle pricing: Standard Creatives at $35, Structured Design at $50, and Multi-Page Documents at $25/page. No retainers or hidden fees.' },
      { q: 'Do you offer logo design?', a: 'Yes, we design professional, scalable vector logos tailored to your brand identity with revisions and source files included.' },
      { q: 'How fast is delivery?', a: 'Standard social posts and ad creatives take 24–48 hours. Complex brochures, packaging layouts or multi-page pitch decks take 48–72 hours.' },
      { q: 'Do prices include revisions and final files?', a: 'Yes, all packages include revisions to ensure you are happy, and you receive print-ready PDFs as well as editable source files (AI/PSD).' },
      { q: 'Which industries do you design for?', a: 'We design for a wide array of industries including Healthcare, Restaurants & Hospitality, Real Estate, E-commerce, Education, and Professional Services.' }
    ]
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    category: 'Social Growth',
    icon: '📱',
    description: 'Grow on Instagram, Facebook & LinkedIn with content calendars, posting and analytics.',
    longDescription: 'Supercharge your brand presence on Instagram, Facebook, and LinkedIn. We build custom monthly content calendars, write high-converting captions, design scroll-stopping graphics, produce viral reels hooks, and provide comprehensive monthly analytics reports to drive inbound customer leads and sales.',
    pricing: '$750–$4,000/mo',
    whatWeDo: [
      '360° Social Brand Strategy & Monthly Content Planning',
      'High-Engagement Graphic & Reel Content Production',
      'Community Engagement, Comment Moderation & Direct Message Leads',
      'Targeted Hashtag Research, Audience Profiling & Strategic Posting',
      'Monthly Data Analytics & Performance Optimization Audits',
      'Influencer Outreach, Brand Collaboration Setup & UGC Curation'
    ],
    deliverables: [
      'Foundation: $750/mo (12 Posts, 4 Reels, 2 Platforms, 5-Day Turnaround)',
      'Growth: $2,000/mo (20 Posts, 8 Reels, 3–4 Platforms, 3-Day Turnaround)',
      'Premium: $4,000/mo (30 Posts, 16 Reels + Motion Graphics, 48-Hr Turnaround)',
      '2 Revision Rounds Included Across All Tiers',
      'Monthly PDF Analytics Report & Dedicated Account Sync'
    ],
    painPoints: [
      'Inconsistent posting schedule and fragmented brand voice',
      'Low organic reach, engagement rates, and follower growth stagnation',
      'Outdated visual aesthetic failing to attract high-value leads',
      'Lack of time to conceptualize, write, and schedule posts'
    ],
    faqs: [
      { q: 'Which platforms do you cover in Social Media Marketing?', a: 'We handle Instagram, Facebook, LinkedIn, Twitter/X, Pinterest, and YouTube Shorts.' },
      { q: 'Do I get to approve posts before they go live?', a: 'Yes, we provide a 14-day advance content calendar for your review and approval.' },
      { q: 'Do you create original graphics and copy?', a: '100%! All visuals, captions, hashtags, and video scripts are custom created for your brand.' },
      { q: 'Is community engagement included?', a: 'Yes, we actively monitor and reply to comments and DMs during business hours.' }
    ]
  },
  {
    id: 'website-development',
    title: 'Website Development',
    category: 'Web Engineering',
    icon: '💻',
    description: 'Modern, fast, SEO-ready websites with WhatsApp integration, SSL and support.',
    longDescription: 'Custom Next.js, React, and WordPress websites engineered for maximum speed, security, and search engine visibility. Includes mobile-first responsive design, direct WhatsApp instant lead chat integration, SSL security setup, and 1 full year of dedicated cloud hosting maintenance and tech support.',
    pricing: '$3,200–$14,000+',
    whatWeDo: [
      'Custom Mobile-Responsive Next.js / WordPress Engineering',
      'High-Converting Landing Page Layouts & Copywriting',
      'WhatsApp Lead Chatbot & CRM Integration',
      'Speed Optimization & Core Web Vitals Audit (95+ Google Score)',
      'SSL Security, Domain Setup & 1-Year Cloud Hosting Maintenance',
      'Payment Gateway Integration (Stripe, PayPal) & E-commerce Setup'
    ],
    deliverables: [
      'Foundation ($3,200): 5–8 Pages, Brand Customization, Responsive, SEO Setup',
      'Growth ($6,500): 12–15 Pages, Custom UX Flows, Integrations, Speed Tuning',
      'Premium ($14,000+): 15+ Pages or Custom Web App, Dashboards, E-commerce',
      '1 Year Free SSL Cloud Hosting & Tech Support',
      'Full Admin CMS Access & Video Training Walkthrough'
    ],
    painPoints: [
      'Slow loading website speeds causing user drop-offs',
      'Non-mobile friendly layout alienating mobile traffic',
      'High developer costs & hidden post-launch maintenance fees',
      'Outdated design failing to generate direct business leads'
    ],
    faqs: [
      { q: 'Is hosting and domain included?', a: 'Yes, we include 1 year of SSL high-speed cloud hosting and domain setup.' },
      { q: 'Can I edit content myself later?', a: 'Yes, we provide an easy-to-use CMS dashboard and a 15-minute video tutorial.' },
      { q: 'How long does development take?', a: 'Foundation tier takes 2–3 weeks, Growth tier takes 3–4 weeks, and Premium tier takes 4–6 weeks.' },
      { q: 'Is the website optimized for search engines?', a: 'Yes, we build every website with SEO-friendly semantic code, fast loading architecture, and meta tags.' }
    ]
  },
  {
    id: 'personal-branding',
    title: 'Personal Branding',
    category: 'Executive Branding',
    icon: '👑',
    description: 'Transform founders and executives into industry authorities with ghostwritten content and profile growth.',
    longDescription: 'Establish undisputed market authority and command premium pricing. We build comprehensive executive personal branding engines for founders, CEOs, and industry leaders — including strategic LinkedIn ghostwriting, viral hook storytelling, high-end visual headshot branding, media PR placements, and inbound B2B network monetization.',
    pricing: '$1,500–$3,500/mo',
    whatWeDo: [
      'Founder Storytelling, Bio & LinkedIn Profile Optimization',
      'High-Impact Executive Ghostwritten Posts (LinkedIn / Twitter/X)',
      'Thought Leadership Articles, Topic Clusters & Newsletters',
      'Personal Brand Visual Identity, Banners & Featured Graphics',
      'Podcast, PR Media & Keynote Speaking Outreach Placement',
      'Inbound Network Engagement & High-Ticket Lead Nurturing'
    ],
    deliverables: [
      '12-16 Ghostwritten Authority Posts / Month',
      'Complete LinkedIn Profile Revamp',
      'Monthly Personal Brand Growth Analytics',
      'Weekly Strategy & Ideation Sync',
      'Dedicated Content Strategist & Writer'
    ],
    painPoints: [
      'Lack of time to consistently write high-quality thought leadership posts',
      'Low visibility and engagement despite deep domain expertise',
      'Missed high-ticket business opportunities due to lack of personal credibility',
      'Difficulty articulating founder stories and strategic vision'
    ],
    faqs: [
      { q: 'How does personal branding generate business ROI?', a: 'People buy from people. A strong executive personal brand builds immediate trust, driving high-ticket client inbound inquiries, talent recruitment, investor interest, and media opportunities.' },
      { q: 'How much time is required from me each week?', a: 'Only 30–45 minutes per week for a quick voice memo or strategy sync. Our expert ghostwriters handle all researching, writing, and formatting.' },
      { q: 'Do I get to review and approve posts before publishing?', a: 'Yes, 100%! You review and approve every piece of content in advance via a shared editorial calendar.' },
      { q: 'Which platforms do you focus on for Personal Branding?', a: 'We primarily focus on LinkedIn, complemented by Twitter/X, executive newsletters (Substack/Beehiiv), and podcast guest features.' }
    ]
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    category: 'Search Engine Rank',
    icon: '🔍',
    description: 'Rank at the top and get organic leads 24/7 with data-driven SEO.',
    longDescription: 'Dominate search engine results and acquire organic leads 24/7. Our white-hat SEO strategy includes full technical auditing, high-intent keyword mapping, core web vitals optimization, digital PR backlink building, and Google Search Console tracking for predictable traffic growth.',
    pricing: '$1,200–$3,500/mo',
    whatWeDo: [
      'Comprehensive Technical SEO & Site Architecture Audit',
      'High-Intent Commercial Keyword Research & Mapping',
      'High-Authority Backlink Acquisition & Digital PR',
      'On-Page Schema Markup & Core Web Vitals Optimization',
      'Competitor Keyword and Gap Analysis',
      'SEO Content Strategy & Copywriting Planning'
    ],
    deliverables: [
      'Monthly Keyword Rank Reports',
      'Technical Audit Action Plan',
      'High-DA Backlinks Acquisition',
      'SEO Optimized Content Writing',
      'SEO Competitor Comparison sheet'
    ],
    painPoints: [
      'Invisible on Google Search for high-intent queries',
      'High dependence on paid ads driving up marketing costs',
      'Competitors ranking higher on valuable search terms',
      'Broken site links, slow page load speeds, and indexing issues'
    ],
    faqs: [
      { q: 'How long until I see Page 1 rankings?', a: 'Initial keyword movement is visible in 60-90 days.' },
      { q: 'Do you guarantee #1 ranking on Google?', a: 'We follow white-hat SEO practices that consistently drive top 3 rankings.' },
      { q: 'Do you help write blog posts for SEO?', a: 'Yes, we produce SEO-optimized blogs targeting valuable search keywords.' },
      { q: 'Will SEO help my local map ranking?', a: 'Yes, SEO works in tandem with Google Business Profile optimizations to boost maps rankings.' }
    ]
  },
  {
    id: 'dashboard-kpi-systems',
    title: 'Dashboard & KPI Systems',
    category: 'Data & Analytics',
    icon: '📊',
    description: 'Turn business data into clear insights, automated reports and real-time tracking.',
    longDescription: 'Stop guessing your return on ad spend (ROAS). We build custom Google Looker Studio and PowerBI dashboards integrating data from Meta, Google, Amazon, and CRM tools, providing automated daily WhatsApp summaries and real-time visibility into cost-per-lead and pipeline health.',
    pricing: '$1,800–$5,000',
    whatWeDo: [
      'Custom Google Looker Studio & PowerBI Dashboard Setup',
      'Multi-Channel Ad Spend & ROAS Integration (Meta, Google, Amazon)',
      'Automated Daily Email & WhatsApp Performance Summaries',
      'Sales Pipeline & CRM Lead Tracking Real-Time Connectors',
      'Inventory Tracking & Order Management Data Flows',
      'Custom Business Goal Setting & Alert Notifications'
    ],
    deliverables: [
      'Live Real-Time KPI Dashboard',
      'Automated Daily Executive Summaries',
      'Cost-Per-Lead & Profit Analytics',
      'Team Access Permissions',
      'Interactive Training Video tutorial'
    ],
    painPoints: [
      'No visibility into true return on marketing spend',
      'Manual Excel spreadsheet entry errors wasting hours of work',
      'Scattered data across multiple apps (Meta, Shopify, GA4)',
      'Inability to track sales representative response times'
    ],
    faqs: [
      { q: 'Can I view my dashboard on mobile?', a: 'Yes! Dashboards are 100% mobile responsive and update automatically.' },
      { q: 'Is my business data secure?', a: '100% secure. Data connectors use direct encrypted APIs with restricted access.' },
      { q: 'Which platforms can you connect to the dashboard?', a: 'We connect Shopify, Meta Ads, Google Ads, CRM tools, Amazon, and Google Sheets.' },
      { q: 'How often does the data update?', a: 'Data is refreshed automatically in real-time or every hour depending on the API restrictions.' }
    ]
  }
];

interface ServicesGridProps {
  onOpenStrategyModal: (serviceName?: string) => void;
  onNavigate?: (page: any, slug?: string) => void;
  backgroundColor?: string;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ 
  onOpenStrategyModal, 
  onNavigate,
  backgroundColor
}) => {
  if (false && onOpenStrategyModal) onOpenStrategyModal();

  return (
    <section id="services" style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)' }}>
      <div className="container">
        {/* HEADER & SUBTITLE */}
        <div className="section-header services-section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-tag" style={{ color: 'var(--primary)', background: 'rgba(255, 78, 39, 0.1)', marginBottom: '0.75rem' }}>
            CAPABILITIES & TRANSPARENT PRICING
          </div>
          <h2 className="services-heading" style={{ color: '#0F172A', fontSize: '2.8rem', fontWeight: 900, fontFamily: 'Outfit, sans-serif' }}>
            Full-Stack Growth Solutions & Transparent Pricing
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Founder-led execution with zero lock-in terms and verified milestone deliverables. Explore full capabilities, ROI frameworks, and technical specifications below.
          </p>
        </div>

        {/* SERVICE CARDS GRID - 3x3 STYLE */}
        <div className="responsive-3-grid" style={{ marginBottom: '3rem', maxWidth: '1200px', margin: '0 auto 3rem auto' }}>
          {detailed17Services.map((service) => (
            <div
              key={service.id}
              style={{
                background: '#FFFFFF',
                borderTop: '4px solid #FF4E27',
                borderLeft: '1px solid #E2E8F0',
                borderRight: '1px solid #E2E8F0',
                borderBottom: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '1.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 8px 25px rgba(11, 19, 42, 0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(11, 19, 42, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 19, 42, 0.04)';
              }}
              onClick={() => {
                if (onNavigate) {
                  if (service.title === 'Social Media Marketing') {
                    onNavigate('smm');
                  } else {
                    onNavigate('service-details', service.id);
                  }
                } else {
                  window.location.href = `/services/${service.id}`;
                }
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: '#0F172A', fontFamily: 'Outfit, serif', lineHeight: 1.25 }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1rem', lineHeight: 1.45, flexGrow: 1 }}>
                {service.description}
              </p>

              {/* PRICE TAG & FULL DETAILS LINK */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', marginTop: 'auto' }}>
                <div style={{ fontFamily: 'Outfit', fontSize: '1.05rem', fontWeight: 800, color: '#3B82F6' }}>
                  {service.pricing}
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '0.05em' }}>
                  FULL DETAILS →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL SERVICES & PRICING PILL BUTTON */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('services');
              } else {
                window.location.href = '/services';
              }
            }}
            style={{
              backgroundColor: '#FDFBF7',
              color: '#0F172A',
              border: '1px solid #CBD5E1',
              borderRadius: '999px',
              padding: '0.85rem 2.2rem',
              fontSize: '0.95rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0F172A';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#0F172A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FDFBF7';
              e.currentTarget.style.color = '#0F172A';
              e.currentTarget.style.borderColor = '#CBD5E1';
            }}
          >
            View All Services & Pricing →
          </button>
        </div>
      </div>
    </section>
  );
};
