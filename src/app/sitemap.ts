import PAGES from '@/shared/config/pages.config';
import type {MetadataRoute} from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}${PAGES.home}`,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
