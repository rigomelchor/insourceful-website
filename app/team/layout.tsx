import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team - Oracle Cloud & Enterprise Software Experts',
  description: 'Meet InSourceful\'s team of certified Oracle Cloud consultants, enterprise software developers, and digital transformation experts with 20+ years of combined experience.',
  keywords: ['insourceful team', 'oracle cloud consultants', 'enterprise software experts', 'certified oracle partners', 'technology consulting team'],
  openGraph: {
    title: 'InSourceful Team - Oracle Cloud & Enterprise Software Experts',
    description: 'Certified Oracle Cloud consultants and enterprise software development experts.',
    url: 'https://insourceful.ai/team',
    images: [
      {
        url: '/assets/images/resources/insourceful-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InSourceful Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InSourceful Team - Oracle Cloud & Enterprise Software Experts',
    description: 'Certified Oracle Cloud consultants and enterprise software development experts.',
    images: ['/assets/images/resources/insourceful-og-image.jpg'],
  },
  alternates: {
    canonical: '/team',
  },
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
