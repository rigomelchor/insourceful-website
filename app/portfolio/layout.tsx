import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Enterprise Solutions & Success Stories',
  description: 'Explore InSourceful\'s portfolio of successful Oracle Cloud implementations, enterprise software projects, and digital transformation case studies across Mining, Oil & Gas, and Pharmaceuticals.',
  keywords: ['insourceful portfolio', 'oracle cloud case studies', 'enterprise software projects', 'digital transformation success stories', 'jd edwards implementations'],
  openGraph: {
    title: 'InSourceful Portfolio - Enterprise Solutions & Success Stories',
    description: 'Oracle Cloud implementations and enterprise software projects across asset-intensive industries.',
    url: 'https://insourceful.ai/portfolio',
    images: [
      {
        url: '/assets/images/resources/insourceful-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InSourceful Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InSourceful Portfolio - Enterprise Solutions & Success Stories',
    description: 'Oracle Cloud implementations and enterprise software projects.',
    images: ['/assets/images/resources/insourceful-og-image.jpg'],
  },
  alternates: {
    canonical: '/portfolio',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
