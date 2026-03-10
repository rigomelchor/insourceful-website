import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GDPR Compliance',
  description: 'InSourceful\'s GDPR compliance policy. Learn about our data protection practices and your rights under the General Data Protection Regulation.',
  alternates: {
    canonical: '/gdpr',
  },
}

export default function GdprLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
