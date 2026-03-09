# CLAUDE.md - InSourceful Website

## Stack
- Next.js 14.2.33, React 18.3.1, TypeScript, App Router
- Animation: AOS (Animate On Scroll) — NEVER use WOW.js
- AOS init in `/components/layout/Layout.tsx`, config in `/lib/aos.ts`

## File Map

### Pages (`/app/`)
about, blog, blog-details, case-single, contact, gdpr, portfolio, portfolio-details, privacy-policy, rigo-melchor, service-details, services, team, terms
- `page.tsx` — Homepage (uses sections from `/components/sections/home1/`)
- `layout.tsx`, `loading.tsx`, `not-found.tsx`, `robots.ts`, `sitemap.ts`
- `/app/api/` — API routes

### Homepage Sections (`/components/sections/home1/`)
About, Banner, Blog, Brand, Cta, Faq, Feature, Funfact, Newsletter, Portfolio, Pricing, Process, Service, Team, Testimonial, Video, Working

### Layout (`/components/layout/`)
Layout, Breadcrumb, Menu, MobileMenu, SearchPopup, Sidebar, `footer/`, `header/`

### Elements (`/components/elements/`)
BackToTop, CookieConsent, Counter, CounterUp, DataBg, DynamicSwiper, OptimizedImage, PortfolioFilter1, Preloader

### Lib (`/lib/`)
`aos.ts` (AOS config), `email.ts`, `font.tsx`

### Assets (`/public/assets/`)
- Images: `/images/`, brand logos: `/images/brand/` (SVG, white variants)
- CSS: `/css/`

## Rules
1. Use AOS: `data-aos="fade-up" data-aos-delay="100"` (no "ms" suffix)
2. `'use client'` for components with browser APIs
3. Cache issues → `rm -rf .next && npm run dev`
4. Don't repeat failed fixes — reassess after 2 attempts
5. Brand logos: Pfizer, Kinross Gold, ExxonMobil, Mallinckrodt, Newmont

## Commands
- `npm run dev` — dev server (port 3000+)
- `npm run build` — production build
- `rm -rf .next` — clear cache
