import "../public/assets/css/zeena.min.css"
import "../public/assets/css/logo-sizing.css"
import "../public/assets/css/contact-form.css"
import "../public/assets/css/sticky-header-fix.css"
// ACCESSIBILITY FIXES - MUST BE LAST TO OVERRIDE ALL OTHER STYLES
import "../public/assets/css/accessibility-fixes.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { openSans, poppins } from '@/lib/font'
import StructuredData from '@/components/seo/StructuredData'
import Script from 'next/script'

export const metadata = {
    title: {
        default: 'InSourceful - Enterprise Technology Consulting Services',
        template: '%s | InSourceful'
    },
    description: 'Enterprise technology consulting: Oracle system integration, process optimisation, and digital transformation solutions.',
    keywords: ['technology consulting', 'enterprise software', 'Oracle consulting', 'business process optimization', 'digital transformation', 'system integration'],
    authors: [{ name: 'InSourceful' }],
    creator: 'InSourceful',
    publisher: 'InSourceful',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://insourceful.ai'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'InSourceful - Enterprise Technology Consulting Services',
        description: 'Expert technology consulting services for enterprise businesses. Oracle system integration, process optimization, and digital transformation solutions.',
        url: 'https://insourceful.ai',
        siteName: 'InSourceful',
        images: [
            {
                url: '/assets/images/resources/insourceful-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'InSourceful - Enterprise Technology Consulting',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'InSourceful - Enterprise Technology Consulting Services',
        description: 'Expert technology consulting services for enterprise businesses. Oracle system integration, process optimization, and digital transformation solutions.',
        images: ['/assets/images/resources/insourceful-og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${openSans.variable} ${poppins.variable}`}>
            <head>
                {/* Preload icon fonts to avoid CSS→font waterfall */}
                <link
                    rel="preload"
                    as="font"
                    type="font/woff2"
                    href="/assets/vendors/fontawesome/webfonts/fa-solid-900.woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="font"
                    type="font/woff2"
                    href="/assets/vendors/fontawesome/webfonts/fa-brands-400.woff2"
                    crossOrigin="anonymous"
                />
                {/* Preload LCP hero image — mobile gets small version */}
                <link
                    rel="preload"
                    as="image"
                    href="/assets/images/backgrounds/hero-mobile.webp"
                    media="(max-width: 768px)"
                />
                <link
                    rel="preload"
                    as="image"
                    href="/assets/images/backgrounds/hero.webp"
                    media="(min-width: 769px)"
                />
                {/* Performance optimization meta */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#0066cc" />

            </head>
            <body>
                <StructuredData />
                {children}

                {/* Google Analytics */}
                {GA_MEASUREMENT_ID && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                            strategy="lazyOnload"
                        />
                        <Script id="google-analytics" strategy="lazyOnload">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_MEASUREMENT_ID}');
                            `}
                        </Script>
                    </>
                )}
            </body>
        </html>
    )
}
