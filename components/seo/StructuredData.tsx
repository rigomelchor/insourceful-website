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
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6558 Tuscany Ridge Dr",
      "addressLocality": "El Paso",
      "addressRegion": "TX",
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
    "areaServed": "Worldwide"
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "InSourceful",
    "url": baseUrl
  }

  // ProfessionalService Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "InSourceful",
    "url": baseUrl,
    "description": "Enterprise technology consulting specializing in Oracle JD Edwards implementations for asset-intensive industries.",
    "serviceType": [
      "Oracle JD Edwards Consulting",
      "Oracle Cloud ERP Implementation",
      "System Integration",
      "Operational Advisory"
    ],
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Enterprise Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Oracle JD Edwards Implementation",
            "description": "Full lifecycle JDE implementation including finance, distribution, and manufacturing modules."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Oracle Cloud ERP Migration",
            "description": "Migration from legacy systems to Oracle Cloud ERP with minimal business disruption."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "System Integration",
            "description": "Integration of Oracle systems with third-party platforms and enterprise applications."
          }
        }
      ]
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
  const schemas: any[] = [organizationSchema, websiteSchema, serviceSchema]

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
