import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Details - Oracle Enterprise Consulting',
  description: 'Detailed overview of InSourceful\'s Oracle consulting services including JD Edwards, Cloud ERP migration, system integration, and enterprise process optimisation.',
  keywords: ['oracle service details', 'JD Edwards consulting', 'ERP implementation details', 'oracle cloud migration', 'enterprise consulting services'],
  openGraph: {
    title: 'Service Details - Oracle Enterprise Consulting | InSourceful',
    description: 'Detailed overview of our Oracle consulting services including JD Edwards, Cloud ERP migration, and system integration.',
    url: 'https://insourceful.ai/service-details',
    images: [
      {
        url: '/assets/images/resources/insourceful-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InSourceful Service Details',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Details - Oracle Enterprise Consulting | InSourceful',
    description: 'Detailed overview of our Oracle consulting services.',
    images: ['/assets/images/resources/insourceful-og-image.jpg'],
  },
  alternates: {
    canonical: '/service-details',
  },
}

export default function ServiceDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
