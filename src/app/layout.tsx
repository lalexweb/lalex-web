import Layout from '@/components/layout/Layout';
import generalData from '@/shared/data/general.data';
import type {Metadata} from 'next';
import {Teko} from 'next/font/google';
import '../styles/globals.css';

const teko = Teko({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  display: 'swap',
  preload: true,
});

export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ''),

  title: generalData.metaInfo.title,
  description: generalData.metaInfo.description,
  keywords: generalData.metaInfo.keywords,

  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    images: {
      width: 1200,
      height: 630,
      url: generalData.metaInfo.image,
    },

    locale: 'en',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${teko.className} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
