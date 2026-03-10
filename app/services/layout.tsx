import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Oracle Consulting & Enterprise Solutions',
  description: 'Oracle JD Edwards, Cloud ERP, system integration, and operational advisory services. End-to-end enterprise technology consulting for asset-intensive industries.',
  keywords: ['oracle consulting services', 'JD Edwards implementation', 'oracle cloud ERP', 'enterprise system integration', 'ERP deployment services'],
  openGraph: {
    title: 'Our Services - Oracle Consulting & Enterprise Solutions',
    description: 'Oracle JD Edwards, Cloud ERP, system integration, and operational advisory. Enterprise technology consulting for asset-intensive industries.',
    url: 'https://insourceful.ai/services',
    images: [
      {
        url: '/assets/images/resources/insourceful-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InSourceful Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Oracle Consulting & Enterprise Solutions',
    description: 'Oracle JD Edwards, Cloud ERP, system integration, and operational advisory services.',
    images: ['/assets/images/resources/insourceful-og-image.jpg'],
  },
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
