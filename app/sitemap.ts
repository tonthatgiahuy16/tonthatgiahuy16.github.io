import type { MetadataRoute } from 'next';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://ton-that-gia-huy-portfolio.gpt-business-6794.chatgpt.site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-08-26'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
