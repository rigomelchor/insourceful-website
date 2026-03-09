'use client'
import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

// Dynamically import Swiper components with no SSR
export const DynamicSwiper = dynamic(
  () => import('swiper/react').then((mod) => mod.Swiper),
  {
    ssr: false,
    loading: () => <div className="swiper-loading" style={{ minHeight: '400px' }}>Loading...</div>
  }
) as ComponentType<any>

export const DynamicSwiperSlide = dynamic(
  () => import('swiper/react').then((mod) => mod.SwiperSlide),
  {
    ssr: false
  }
) as ComponentType<any>

// Export for convenience
export { Autoplay, Navigation, Pagination, FreeMode } from 'swiper/modules'
