export interface PricingCategory {
  title: string;
  subtitle: string;
  items: { name: string; price: string }[];
}

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

export function getGraphicServiceName(rawSlug: string): string {
  const slug = decodeURIComponent(rawSlug).toLowerCase().trim();

  const categoryMap: Record<string, string> = {
    'standard-creatives': 'Standard Creatives',
    'structured-design': 'Structured Design',
    'multi-page-documents': 'Multi-Page Documents',
    'social-media': 'Social Media Creatives',
    'branding-identity': 'Brand Identity & Stationery',
    'print-collateral': 'Print Collateral & Marketing',
    'packaging-labels': 'Packaging & Label Design',
    'digital-ads': 'Digital Ad Creatives',
    'illustrations': 'Custom Illustrations',
    'all': 'All Graphic Design Services',
  };

  if (categoryMap[slug]) {
    return categoryMap[slug];
  }

  for (const cat of graphicDesignPricingData) {
    const matchedItem = cat.items.find((i) => {
      const itemSlug = i.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
      return itemSlug === slug || slug.includes(itemSlug) || itemSlug.includes(slug);
    });
    if (matchedItem) {
      return matchedItem.name;
    }
  }

  const cardMatch = slug.match(/^(?:card_)?(\d+)$/);
  if (cardMatch) {
    const idx = parseInt(cardMatch[1], 10) - 1;
    const allItems = graphicDesignPricingData.flatMap((c) => c.items);
    if (allItems[idx]) {
      return allItems[idx].name;
    }
  }

  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
