import type { Metadata } from 'next';
import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://tonthatgiahuy16.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Tôn Thất Gia Huy | Data Engineering & Backend Portfolio',
  description:
    'Portfolio of Tôn Thất Gia Huy, focused on reliable data pipelines, backend APIs, lifecycle, recovery, and document-data systems.',
  authors: [{ name: 'Tôn Thất Gia Huy' }],
  creator: 'Tôn Thất Gia Huy',
  keywords: [
    'Tôn Thất Gia Huy',
    'Data Engineering',
    'Backend Engineering',
    'Python',
    'SQL',
    'PySpark',
    'FastAPI',
    'PostgreSQL',
    'RAG',
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Tôn Thất Gia Huy | Data Engineering & Backend',
    description:
      'Building traceable data pipelines and reliable backend systems with explicit lifecycle, recovery, and verification.',
    url: '/',
    siteName: 'Tôn Thất Gia Huy Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Tôn Thất Gia Huy - Data Engineering and Backend Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tôn Thất Gia Huy | Data Engineering & Backend',
    description:
      'Building traceable data pipelines and reliable backend systems with explicit lifecycle, recovery, and verification.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
