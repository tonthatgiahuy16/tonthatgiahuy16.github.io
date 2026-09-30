import type { Metadata } from 'next';
import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://ton-that-gia-huy-portfolio.gpt-business-6794.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Tôn Thất Gia Huy | Data Engineering & Backend Portfolio',
  description:
    'Portfolio of Tôn Thất Gia Huy, a final-year Data Science student building data pipelines, backend APIs, and document-data systems.',
  authors: [{ name: 'Tôn Thất Gia Huy' }],
  creator: 'Tôn Thất Gia Huy',
  keywords: [
    'Tôn Thất Gia Huy',
    'Data Science Student',
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
      'Final-year Data Science student building traceable data pipelines and backend APIs.',
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
      'Final-year Data Science student building traceable data pipelines and backend APIs.',
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
