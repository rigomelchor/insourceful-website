import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Enterprise Technology Consulting Experts',
  description: 'Learn about InSourceful\'s Oracle Cloud expertise and enterprise software development services. 20+ years of experience delivering scalable solutions for asset-intensive industries.',
  keywords: ['about insourceful', 'oracle consulting team', 'enterprise software experts', 'technology consulting company', 'oracle cloud partners'],
  openGraph: {
    title: 'About InSourceful - Enterprise Technology Consulting Experts',
    description: 'Oracle Cloud experts with 20+ years of experience in enterprise software development and digital transformation.',
    url: 'https://insourceful.ai/about',
    images: [
      {
        url: '/assets/images/resources/insourceful-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InSourceful About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About InSourceful - Enterprise Technology Consulting Experts',
    description: 'Oracle Cloud experts with 20+ years of experience in enterprise software development.',
    images: ['/assets/images/resources/insourceful-og-image.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
