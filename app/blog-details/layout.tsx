import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Post - Enterprise Technology Insights',
  description: 'In-depth articles on Oracle ERP, enterprise technology, digital transformation, and best practices for asset-intensive industries.',
  openGraph: {
    title: 'Blog Post - Enterprise Technology Insights | InSourceful',
    description: 'In-depth articles on Oracle ERP, enterprise technology, and digital transformation.',
    url: 'https://insourceful.ai/blog-details',
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
    title: 'Blog Post - Enterprise Technology Insights | InSourceful',
    description: 'In-depth articles on Oracle ERP, enterprise technology, and digital transformation.',
    images: ['/assets/images/resources/insourceful-og-image.jpg'],
  },
  alternates: {
    canonical: '/blog-details',
  },
}

export default function BlogDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
