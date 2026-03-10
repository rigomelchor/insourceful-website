import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Study Details - Project Results & Outcomes',
  description: 'Detailed project outcomes, methodologies, and results from InSourceful\'s Oracle consulting engagements across enterprise industries.',
  openGraph: {
    title: 'Case Study Details | InSourceful',
    description: 'Project outcomes, methodologies, and results from our Oracle consulting engagements.',
    url: 'https://insourceful.ai/case-single',
    images: [
      {
        url: '/assets/images/resources/insourceful-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InSourceful Case Study',
      },
    ],
  },
  alternates: {
    canonical: '/case-single',
  },
}

export default function CaseSingleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
