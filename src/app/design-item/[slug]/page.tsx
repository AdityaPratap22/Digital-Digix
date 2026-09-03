import { redirect } from 'next/navigation';

export function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (let i = 1; i <= 45; i++) {
    params.push({ slug: `card_${i}` });
    params.push({ slug: String(i) });
  }
  return params;
}

export default async function DesignItemSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/services/graphic-design/${slug}`);
}
