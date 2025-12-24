import HomePage from '@/components/pages/home/HomePage';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || '',
    languages: {
      en: process.env.NEXT_PUBLIC_SITE_URL || '',
    },
  },
};

export default function page() {
  return <HomePage />;
}
