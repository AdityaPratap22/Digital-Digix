import { redirect } from 'next/navigation';

export function generateStaticParams() {
  return [
    { slug: 'social-media' },
    { slug: 'branding-identity' },
    { slug: 'print-collateral' },
    { slug: 'packaging-labels' },
    { slug: 'digital-ads' },
    { slug: 'illustrations' },
    { slug: 'standard-creatives' },
    { slug: 'structured-design' },
    { slug: 'multi-page-documents' },
    { slug: 'all' },
  ];
}

export default async function GraphicCategorySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/services/graphic-design/${slug}`);
}
