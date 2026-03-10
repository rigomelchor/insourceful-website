import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Study - Enterprise Technology Projects',
  description: 'Detailed case studies of Oracle ERP implementations, system integrations, and digital transformation projects across mining, pharmaceutical, and energy industries.',
  openGraph: {
    title: 'Case Study - Enterprise Technology Projects | InSourceful',
    description: 'Detailed case studies of Oracle ERP implementations and digital transformation projects.',
    url: 'https://insourceful.ai/portfolio-details',
    images: [
      {
        url: '/assets/images/resources/insourceful-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InSourceful Case Study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Study - Enterprise Technology Projects | InSourceful',
    description: 'Detailed case studies of Oracle ERP implementations and digital transformation projects.',
    images: ['/assets/images/resources/insourceful-og-image.jpg'],
  },
  alternates: {
    canonical: '/portfolio-details',
  },
}

export default function PortfolioDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
