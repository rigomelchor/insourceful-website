'use client'
import { usePathname } from 'next/navigation'

const BASE_URL = 'https://insourceful.ai'

export default function StructuredData() {
  const pathname = usePathname()

  // --- Global schemas (every page) ---

  const organization = {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": "InSourceful",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "@id": `${BASE_URL}/#logo`,
      "url": `${BASE_URL}/assets/images/resources/insourceful-og-image.jpg`,
      "width": 1200,
      "height": 630
    },
    "image": { "@id": `${BASE_URL}/#logo` },
    "description": "Enterprise technology consulting specializing in Oracle JD Edwards and Cloud ERP implementations for asset-intensive industries.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6558 Tuscany Ridge Dr",
      "addressLocality": "El Paso",
      "addressRegion": "TX",
      "postalCode": "79912",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+17208788654",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      "https://linkedin.com/company/insourceful",
      "https://twitter.com/insourceful",
      "https://facebook.com/insourceful",
      "https://youtube.com/@insourceful"
    ]
  }

  const website = {
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "name": "InSourceful",
    "url": BASE_URL,
    "publisher": { "@id": `${BASE_URL}/#organization` }
  }

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#professionalservice`,
    "name": "InSourceful",
    "url": BASE_URL,
    "description": "Enterprise technology consulting specializing in Oracle JD Edwards implementations for asset-intensive industries.",
    "provider": { "@id": `${BASE_URL}/#organization` },
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
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Operational Advisory",
            "description": "Strategic consulting to align Oracle investments with business goals."
          }
        }
      ]
    }
  }

  // --- Breadcrumb (non-homepage) ---

  const getBreadcrumb = () => {
    const segments = pathname.split('/').filter(Boolean)
    const items = [{
      "@type": "ListItem" as const,
      "position": 1,
      "name": "Home",
      "item": BASE_URL
    }]

    let currentPath = BASE_URL
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      items.push({
        "@type": "ListItem" as const,
        "position": index + 2,
        "name": segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        "item": currentPath
      })
    })

    return {
      "@type": "BreadcrumbList",
      "itemListElement": items
    }
  }

  // --- Page-specific schemas ---

  const getPageSchemas = (): object[] => {
    switch (pathname) {
      case '/':
        return []

      case '/about':
        return [{
          "@type": "AboutPage",
          "@id": `${BASE_URL}/about/#webpage`,
          "name": "About InSourceful",
          "description": "Learn about InSourceful — enterprise technology consulting specializing in Oracle Cloud, JD Edwards, and digital transformation for asset-intensive industries.",
          "url": `${BASE_URL}/about`,
          "isPartOf": { "@id": `${BASE_URL}/#website` },
          "about": { "@id": `${BASE_URL}/#organization` }
        }]

      case '/services':
        return [{
          "@type": "WebPage",
          "@id": `${BASE_URL}/services/#webpage`,
          "name": "Our Services - InSourceful",
          "description": "Enterprise consulting services: Oracle JD Edwards implementation, Oracle Cloud ERP migration, system integration, and operational advisory.",
          "url": `${BASE_URL}/services`,
          "isPartOf": { "@id": `${BASE_URL}/#website` }
        }]

      case '/service-details':
        return [{
          "@type": "WebPage",
          "@id": `${BASE_URL}/service-details/#webpage`,
          "name": "Service Details - InSourceful",
          "description": "Detailed overview of InSourceful enterprise technology consulting services.",
          "url": `${BASE_URL}/service-details`,
          "isPartOf": { "@id": `${BASE_URL}/#website` }
        }]

      case '/contact':
        return [{
          "@type": "ContactPage",
          "@id": `${BASE_URL}/contact/#webpage`,
          "name": "Contact InSourceful",
          "description": "Get in touch with InSourceful for enterprise technology consulting. Located in El Paso, TX with global reach.",
          "url": `${BASE_URL}/contact`,
          "isPartOf": { "@id": `${BASE_URL}/#website` },
          "mainEntity": { "@id": `${BASE_URL}/#organization` }
        }]

      case '/blog':
        return [{
          "@type": "CollectionPage",
          "@id": `${BASE_URL}/blog/#webpage`,
          "name": "Blog - InSourceful",
          "description": "Insights on Oracle Cloud ERP, JD Edwards, system integration, and digital transformation for asset-intensive industries.",
          "url": `${BASE_URL}/blog`,
          "isPartOf": { "@id": `${BASE_URL}/#website` }
        }]

      case '/blog-details':
        return [{
          "@type": "Article",
          "@id": `${BASE_URL}/blog-details/#article`,
          "headline": "Why Asset-Intensive Enterprises Are Moving to Oracle Cloud ERP",
          "description": "Mining, oil and gas, and pharmaceutical manufacturers share a common ERP problem. Learn why asset-intensive enterprises are moving to Oracle Cloud ERP.",
          "image": `${BASE_URL}/assets/images/blog/blog-details-img-1.webp`,
          "datePublished": "2025-03-15",
          "dateModified": "2025-03-15",
          "author": {
            "@type": "Person",
            "@id": `${BASE_URL}/rigo-melchor/#person`,
            "name": "Rigo Melchor"
          },
          "publisher": { "@id": `${BASE_URL}/#organization` },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${BASE_URL}/blog-details`
          },
          "keywords": ["Oracle Cloud ERP", "Asset-Intensive Industries", "Mining", "ERP Migration", "JD Edwards"]
        }]

      case '/portfolio':
        return [{
          "@type": "CollectionPage",
          "@id": `${BASE_URL}/portfolio/#webpage`,
          "name": "Portfolio - InSourceful",
          "description": "Enterprise technology consulting projects: Oracle Cloud ERP migrations, JD Edwards optimizations, and system integrations for global organizations.",
          "url": `${BASE_URL}/portfolio`,
          "isPartOf": { "@id": `${BASE_URL}/#website` }
        }]

      case '/portfolio-details':
        return [{
          "@type": "WebPage",
          "@id": `${BASE_URL}/portfolio-details/#webpage`,
          "name": "Oracle Cloud ERP Migration - InSourceful Portfolio",
          "description": "Case study: Oracle Cloud ERP migration for a multinational mining corporation, delivering system integration and streamlined operations.",
          "url": `${BASE_URL}/portfolio-details`,
          "isPartOf": { "@id": `${BASE_URL}/#website` }
        }]

      case '/case-single':
        return [{
          "@type": "WebPage",
          "@id": `${BASE_URL}/case-single/#webpage`,
          "name": "Enterprise System Integration - InSourceful Case Study",
          "description": "Case study: Enterprise system integration for a global energy enterprise, improving operational efficiency and data consolidation.",
          "url": `${BASE_URL}/case-single`,
          "isPartOf": { "@id": `${BASE_URL}/#website` }
        }]

      case '/team':
        return [{
          "@type": "WebPage",
          "@id": `${BASE_URL}/team/#webpage`,
          "name": "Our Team - InSourceful",
          "description": "Meet the InSourceful team of enterprise technology consultants and Oracle specialists.",
          "url": `${BASE_URL}/team`,
          "isPartOf": { "@id": `${BASE_URL}/#website` }
        }]

      case '/rigo-melchor':
        return [{
          "@type": "ProfilePage",
          "@id": `${BASE_URL}/rigo-melchor/#webpage`,
          "name": "Rigoberto Melchor - Senior Consultant",
          "description": "Enterprise technology consultant with over 25 years of experience in Oracle implementations for asset-intensive industries.",
          "url": `${BASE_URL}/rigo-melchor`,
          "isPartOf": { "@id": `${BASE_URL}/#website` },
          "mainEntity": { "@id": `${BASE_URL}/rigo-melchor/#person` }
        }, {
          "@type": "Person",
          "@id": `${BASE_URL}/rigo-melchor/#person`,
          "name": "Rigoberto Melchor",
          "givenName": "Rigoberto",
          "familyName": "Melchor",
          "alternateName": "Rigo Melchor",
          "jobTitle": "Senior Consultant",
          "description": "Enterprise technology consultant with over 25 years of experience leading digital transformation projects for asset-intensive and life science industries globally.",
          "image": `${BASE_URL}/assets/images/team/rigo-melchor-1.webp`,
          "url": `${BASE_URL}/rigo-melchor`,
          "email": "rigo.melchor@gmail.com",
          "telephone": "+17208788654",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Denver",
            "addressRegion": "Colorado",
            "addressCountry": "US"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "IESE Business School Barcelona"
          },
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "Oracle JD Edwards Implementation Expert"
          },
          "knowsAbout": [
            "Oracle JD Edwards",
            "Oracle Cloud ERP",
            "Digital Transformation",
            "Enterprise System Integration",
            "Mining Industry",
            "Pharmaceutical Manufacturing",
            "Oil and Gas",
            "Capital Asset Management"
          ],
          "worksFor": { "@id": `${BASE_URL}/#organization` },
          "nationality": { "@type": "Country", "name": "United States" }
        }]

      case '/privacy-policy':
        return [{
          "@type": "WebPage",
          "@id": `${BASE_URL}/privacy-policy/#webpage`,
          "name": "Privacy Policy - InSourceful",
          "description": "InSourceful privacy policy: how we collect, use, and protect your personal information.",
          "url": `${BASE_URL}/privacy-policy`,
          "isPartOf": { "@id": `${BASE_URL}/#website` }
        }]

      case '/terms':
        return [{
          "@type": "WebPage",
          "@id": `${BASE_URL}/terms/#webpage`,
          "name": "Terms & Conditions - InSourceful",
          "description": "InSourceful terms and conditions for enterprise technology consulting services.",
          "url": `${BASE_URL}/terms`,
          "isPartOf": { "@id": `${BASE_URL}/#website` }
        }]

      case '/gdpr':
        return [{
          "@type": "WebPage",
          "@id": `${BASE_URL}/gdpr/#webpage`,
          "name": "GDPR Compliance - InSourceful",
          "description": "InSourceful GDPR compliance notice: your rights under the General Data Protection Regulation.",
          "url": `${BASE_URL}/gdpr`,
          "isPartOf": { "@id": `${BASE_URL}/#website` }
        }]

      default:
        return []
    }
  }

  // Build the @graph
  const graph: object[] = [organization, website, professionalService]

  if (pathname !== '/') {
    graph.push(getBreadcrumb())
  }

  graph.push(...getPageSchemas())

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
