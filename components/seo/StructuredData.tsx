'use client'
import { usePathname } from 'next/navigation'

export default function StructuredData() {
  const pathname = usePathname()
  const baseUrl = 'https://insourceful.ai'

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InSourceful",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/assets/images/resources/insourceful-consulting-white.webp`
    },
    "description": "Expert technology consulting services for enterprise businesses. We provide Oracle system integration, process optimization, and digital transformation solutions.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "InSourceful Team"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Denver",
      "addressRegion": "CO",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+17208788654",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://linkedin.com/company/insourceful",
      "https://twitter.com/insourceful",
      "https://facebook.com/insourceful",
      "https://youtube.com/@insourceful"
    ],
    "serviceType": [
      "Technology Consulting",
      "Oracle System Integration",
      "Business Process Optimization",
      "Digital Transformation",
      "Enterprise Software Solutions"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  }

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "InSourceful",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  // BreadcrumbList Schema
  const getBreadcrumbSchema = () => {
    const pathSegments = pathname.split('/').filter(Boolean)

    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ]

    let currentPath = baseUrl
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.split('-').map(word =>
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        "item": currentPath
      })
    })

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    }
  }

  // Combine all schemas
  const schemas: any[] = [organizationSchema, websiteSchema]

  // Add breadcrumb for non-homepage
  if (pathname !== '/') {
    schemas.push(getBreadcrumbSchema())
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
