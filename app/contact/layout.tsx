import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Schedule Your Technology Consultation',
  description: 'Get in touch with InSourceful for Oracle Cloud consulting, enterprise software development, and digital transformation services. Schedule a free consultation today.',
  keywords: ['contact insourceful', 'technology consultation', 'oracle cloud consultation', 'enterprise software inquiry', 'schedule consultation'],
  openGraph: {
    title: 'Contact InSourceful - Schedule Your Technology Consultation',
    description: 'Get expert Oracle Cloud consulting and enterprise software development. Contact us for a free consultation.',
    url: 'https://insourceful.ai/contact',
    images: [
      {
        url: '/assets/images/resources/insourceful-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact InSourceful',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact InSourceful - Schedule Your Technology Consultation',
    description: 'Get expert Oracle Cloud consulting and enterprise software development.',
    images: ['/assets/images/resources/insourceful-og-image.jpg'],
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
