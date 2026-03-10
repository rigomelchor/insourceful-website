import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Brand from "@/components/sections/home1/Brand"
import Feature from "@/components/sections/home1/Feature"
import Process from "@/components/sections/home1/Process"
import Service from "@/components/sections/home1/Service"
import Newsletter from "@/components/sections/home1/Newsletter"

export default function Services() {
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Our Services" breadcrumbTitle="Our Services">

        <Brand />

        <Feature />

        {/*Services Four Start*/}
        <section className="services-four services-five">
            <div className="services-four__bg" />
            <div className="container">
            <div className="section-title text-center">
                <div className="section-title__tagline-box">
                <div className="section-title__tagline-icon">
                    <img loading="lazy" src="assets/images/icon/section-title-icon.webp" alt="Section title icon" width={20} height={30} />
                </div>
                <p className="section-title__tagline">What We Offering</p>
                </div>
                <h2 className="section-title__title">Core Service Areas</h2>
            </div>
            <div className="row">
                {/*Services Four Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
                >
                <div className="services-four__single">
                    <div className="services-four__shape-1" />
                    <div className="services-four__shape-2" />
                    <div className="services-four__icon">
                    <span className="icon-coding" />
                    </div>
                    <h3 className="services-four__title">
                    <Link href="/service-details">
                        ERP <br /> Implementations
                    </Link>
                    </h3>
                    <p className="services-four__text">
                    From JD Edwards to cloud-native platforms, we handle end-to-end implementation with minimal disruption to your operations.
                    </p>
                    <Link href="/service-details" className="services-four__arrow">
                    <span className="icon-back" />
                    </Link>
                </div>
                </div>
                {/*Services Four Single End*/}
                {/*Services Four Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
                >
                <div className="services-four__single">
                    <div className="services-four__shape-1" />
                    <div className="services-four__shape-2" />
                    <div className="services-four__icon">
                    <span className="icon-cloud-database" />
                    </div>
                    <h3 className="services-four__title">
                    <Link href="/service-details">
                        Capital Asset <br /> Management
                    </Link>
                    </h3>
                    <p className="services-four__text">
                    Optimize asset lifecycle, maintenance scheduling, and cost tracking across your enterprise portfolio.
                    </p>
                    <Link href="/service-details" className="services-four__arrow">
                    <span className="icon-back" />
                    </Link>
                </div>
                </div>
                {/*Services Four Single End*/}
                {/*Services Four Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
                >
                <div className="services-four__single">
                    <div className="services-four__shape-1" />
                    <div className="services-four__shape-2" />
                    <div className="services-four__icon">
                    <span className="icon-event-management" />
                    </div>
                    <h3 className="services-four__title">
                    <Link href="/service-details">
                        System <br /> Integration
                    </Link>
                    </h3>
                    <p className="services-four__text">
                    Seamlessly connect disparate systems, data sources, and workflows to create a unified enterprise ecosystem.
                    </p>
                    <Link href="/service-details" className="services-four__arrow">
                    <span className="icon-back" />
                    </Link>
                </div>
                </div>
                {/*Services Four Single End*/}
                {/*Services Four Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
                >
                <div className="services-four__single">
                    <div className="services-four__shape-1" />
                    <div className="services-four__shape-2" />
                    <div className="services-four__icon">
                    <span className="icon-project-management" />
                    </div>
                    <h3 className="services-four__title">
                    <Link href="/service-details">
                        Operational <br /> Advisory
                    </Link>
                    </h3>
                    <p className="services-four__text">
                    Strategic consulting to align technology investments with business objectives and industry best practices.
                    </p>
                    <Link href="/service-details" className="services-four__arrow">
                    <span className="icon-back" />
                    </Link>
                </div>
                </div>
                {/*Services Four Single End*/}
            </div>
            </div>
        </section>
        {/*Services Four End*/}

        <Process />

        <Service />

        <Newsletter />

        </Layout>
        </>
    )
}
