import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Technology Insights & Industry Expertise',
  description: 'Read InSourceful\'s latest articles on Oracle Cloud, JD Edwards, enterprise software development, and digital transformation strategies for asset-intensive industries.',
  keywords: ['technology blog', 'oracle cloud insights', 'jd edwards tips', 'enterprise software articles', 'digital transformation blog'],
  openGraph: {
    title: 'InSourceful Blog - Technology Insights & Industry Expertise',
    description: 'Latest articles on Oracle Cloud, enterprise software, and digital transformation.',
    url: 'https://insourceful.ai/blog',
    images: [
      {
        url: '/assets/images/resources/insourceful-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InSourceful Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InSourceful Blog - Technology Insights & Industry Expertise',
    description: 'Latest articles on Oracle Cloud, enterprise software, and digital transformation.',
    images: ['/assets/images/resources/insourceful-og-image.jpg'],
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
