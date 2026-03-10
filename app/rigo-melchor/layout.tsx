import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rigo Melchor - Oracle Enterprise Consulting Lead',
  description: 'Meet Rigo Melchor, InSourceful\'s enterprise technology consulting lead with extensive experience in Oracle JD Edwards, ERP implementations, and digital transformation.',
  openGraph: {
    title: 'Rigo Melchor - Oracle Enterprise Consulting Lead | InSourceful',
    description: 'Enterprise technology consulting lead with extensive Oracle JD Edwards and ERP implementation experience.',
    url: 'https://insourceful.ai/rigo-melchor',
    images: [
      {
        url: '/assets/images/resources/insourceful-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rigo Melchor - InSourceful',
      },
    ],
  },
  alternates: {
    canonical: '/rigo-melchor',
  },
}

export default function RigoMelchorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
