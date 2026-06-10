'use client'
import Layout from "@/components/layout/Layout"
import Newsletter from "@/components/sections/home1/Newsletter"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Portfolio Details" breadcrumbTitle="Portfolio Details" wrapperCls="">
      
        {/*Portfolio Details Start */}
        <section className="portfolio-details">
            <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-7">
                <div className="portfolio-details__left">
                    <div className="portfolio-details__content-box-one">
                    <div className="portfolio-details__content-one-img">
                        <img loading="lazy"
                        src="assets/images/project/portfolio-details-content-one-img-1.webp"
                        alt="Oracle Cloud ERP Migration project"
                        />
                    </div>
                    <div className="portfolio-details__content-one">
                        <h3 className="portfolio-details__content-one-title">
                        Oracle Cloud ERP Migration
                        </h3>
                        <p className="portfolio-details__content-one-text-1">
                        A multinational mining corporation operating across four continents engaged InSourceful to migrate off a JD Edwards EnterpriseOne environment that had accumulated 15+ years of site-specific customizations. The existing system was deeply embedded in plant maintenance, procurement, and project accounting workflows. The client needed to consolidate 12 operational sites onto a single Oracle Cloud ERP instance without disrupting active production schedules.
                        </p>
                        <p className="portfolio-details__content-one-text-2">
                        The core challenge was not the technology itself but the layer of custom business logic built on top of JDE over more than a decade. Orchestrations, user-defined codes, processing options, and direct database modifications had to be catalogued, assessed for equivalence in Oracle Cloud, and either retired or rebuilt as standard configurations. Data quality across sites was inconsistent, requiring a dedicated remediation workstream before any migration could proceed.
                        </p>
                    </div>
                    </div>
                    <div className="portfolio-details__planing">
                    <div className="row">
                        <div className="col-xl-5">
                        <div className="portfolio-details__planing-left">
                            <div className="portfolio-details__planing-img">
                            <img loading="lazy"
                                src="assets/images/project/portfolio-details-planing-img-1.webp"
                                alt="Oracle ERP migration strategy"
                            />
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-7">
                        <div className="portfolio-details__planing-right">
                            <h3 className="portfolio-details__planing-title">
                            Migration Strategy
                            </h3>
                            <p className="portfolio-details__planing-text">
                            InSourceful structured the migration as a phased rollout, moving sites in waves based on complexity and production schedules. Each wave ran parallel operations for 60 days before cutover, giving site controllers time to validate outputs and reconcile balances against the legacy system.
                            </p>
                            <ul className="list-unstyled portfolio-details__planing-points">
                            <li>
                                <div className="icon">
                                <span className="icon-check" />
                                </div>
                                <div className="text">
                                <p>Full assessment of existing JDE customizations and data migration requirements</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                <span className="icon-check" />
                                </div>
                                <div className="text">
                                <p>Phased rollout across 12 operational sites with zero production downtime</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                <span className="icon-check" />
                                </div>
                                <div className="text">
                                <p>Integration of Oracle Cloud with existing SCADA and maintenance systems</p>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <p className="portfolio-details__text-1">
                    The completed migration delivered a 34% reduction in monthly close cycle time and eliminated the cost of maintaining a dedicated JDE support team across each site. Procurement consolidation through Oracle Cloud Procurement enabled group-level purchasing visibility for the first time, resulting in negotiated savings of approximately 11% on category spend within the first year. The SCADA integration layer, built using Oracle Integration Cloud, now feeds real-time equipment utilization data directly into project costing and asset management modules.
                    </p>
                </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                <div className="portfolio-details__sidebar">
                    <div className="portfolio-details__info">
                    <h3 className="portfolio-details__info-title">Project Details</h3>
                    <ul className="portfolio-details__info-list list-unstyled">
                        <li>
                        <div className="portfolio-details__info-left">
                            <p>Clients :</p>
                        </div>
                        <div className="portfolio-details__info-right">
                            <span>Multinational Mining Corporation</span>
                        </div>
                        </li>
                        <li>
                        <div className="portfolio-details__info-left">
                            <p>Project :</p>
                        </div>
                        <div className="portfolio-details__info-right">
                            <span>Oracle Cloud ERP Migration</span>
                        </div>
                        </li>
                        <li>
                        <div className="portfolio-details__info-left">
                            <p>Service :</p>
                        </div>
                        <div className="portfolio-details__info-right">
                            <span>System Integration &amp; ERP</span>
                        </div>
                        </li>
                        <li>
                        <div className="portfolio-details__info-left">
                            <p>Category :</p>
                        </div>
                        <div className="portfolio-details__info-right">
                            <span>Mining &amp; Resources</span>
                        </div>
                        </li>
                        <li>
                        <div className="portfolio-details__info-left">
                            <p>Date :</p>
                        </div>
                        <div className="portfolio-details__info-right">
                            <span>March 2025</span>
                        </div>
                        </li>
                        <li>
                        <div className="portfolio-details__info-left">
                            <p>Share :</p>
                        </div>
                        <div className="portfolio-details__info-right">
                            <span>Fb Tw In Be</span>
                        </div>
                        </li>
                    </ul>
                    </div>
                    <div className="portfolio-details__sidebar-img">
                    <img loading="lazy"
                        src="assets/images/project/portfolio-details-sidebar-img.webp"
                        alt="Project details sidebar"
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*Portfolio Details End */}
        {/*Gallery One Start */}
        <section className="gallery-one">
            <div className="container">
            <Swiper {...swiperOptions}
                className="gallery-one__carousel thm-owl__carousel owl-theme owl-carousel"
            >
                <SwiperSlide>
                {/*Gallery One Single Start */}
                <div className="item">
                <div className="gallery-one__single">
                    <div className="gallery-one__img">
                    <img loading="lazy" src="assets/images/project/portfolio-1-1.webp" alt="System architecture diagram for Oracle Cloud ERP migration" />
                    <div className="gallery-one__title-box">
                        <h4>System Architecture</h4>
                    </div>
                    </div>
                </div>
                </div>
                {/*Gallery One Single End */}
                </SwiperSlide>
                <SwiperSlide>
                {/*Gallery One Single Start */}
                <div className="item">
                <div className="gallery-one__single">
                    <div className="gallery-one__img">
                    <img loading="lazy" src="assets/images/project/portfolio-1-2.webp" alt="Data migration process for legacy JDE to Oracle Cloud" />
                    <div className="gallery-one__title-box">
                        <h4>Data Migration</h4>
                    </div>
                    </div>
                </div>
                </div>
                {/*Gallery One Single End */}
                </SwiperSlide>
                <SwiperSlide>
                {/*Gallery One Single Start */}
                <div className="item">
                <div className="gallery-one__single">
                    <div className="gallery-one__img">
                    <img loading="lazy" src="assets/images/project/portfolio-1-3.webp" alt="Go-live support and cutover coordination across mining sites" />
                    <div className="gallery-one__title-box">
                        <h4>Go-Live Support</h4>
                    </div>
                    </div>
                </div>
                </div>
                {/*Gallery One Single End */}
                </SwiperSlide>
            </Swiper>
            </div>
        </section>
        {/*Gallery One End */}
        <Newsletter />

        </Layout>
        </>
    )
}