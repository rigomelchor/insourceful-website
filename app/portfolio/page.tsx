import Layout from "@/components/layout/Layout"
import Newsletter from "@/components/sections/home1/Newsletter"
import Link from "next/link"
export default function Home() {
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Portfolio" breadcrumbTitle="Portfolio" wrapperCls="">
      
        {/*Portfolio Page Start*/}
        <section className="portfolio-page">
            <div className="container">
            <div className="row">
                {/*Portfolio Page Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="portfolio-page__single">
                    <div className="portfolio-page__img-box">
                    <div className="portfolio-page__img">
                        <img loading="lazy"
                        src="assets/images/project/portfolio-page-1-1.webp"
                        alt="Oracle Cloud ERP migration for mining enterprise"
                        />
                    </div>
                    <div className="portfolio-page__content">
                        <div className="portfolio-page__title-box">
                        <h3 className="portfolio-page__title">
                            <Link href="/portfolio-details">Oracle Cloud ERP Migration</Link>
                        </h3>
                        <p className="portfolio-page__sub-title">Mining</p>
                        </div>
                        <div className="portfolio-page__arrow">
                        <Link
                            href="assets/images/project/portfolio-page-1-1.webp"
                            className="img-popup"
                        >
                            <span className="icon-back" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*Portfolio Page Single End*/}
                {/*Portfolio Page Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="portfolio-page__single">
                    <div className="portfolio-page__img-box">
                    <div className="portfolio-page__img">
                        <img loading="lazy"
                        src="assets/images/project/portfolio-page-1-2.webp"
                        alt="JD Edwards optimization for oil and gas operations"
                        />
                    </div>
                    <div className="portfolio-page__content">
                        <div className="portfolio-page__title-box">
                        <h3 className="portfolio-page__title">
                            <Link href="/portfolio-details">JD Edwards Optimization</Link>
                        </h3>
                        <p className="portfolio-page__sub-title">Oil & Gas</p>
                        </div>
                        <div className="portfolio-page__arrow">
                        <Link
                            href="assets/images/project/portfolio-page-1-2.webp"
                            className="img-popup"
                        >
                            <span className="icon-back" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*Portfolio Page Single End*/}
                {/*Portfolio Page Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="portfolio-page__single">
                    <div className="portfolio-page__img-box">
                    <div className="portfolio-page__img">
                        <img loading="lazy"
                        src="assets/images/project/portfolio-page-1-3.webp"
                        alt="Capital asset management system for pharmaceutical company"
                        />
                    </div>
                    <div className="portfolio-page__content">
                        <div className="portfolio-page__title-box">
                        <h3 className="portfolio-page__title">
                            <Link href="/portfolio-details">Capital Asset Management System</Link>
                        </h3>
                        <p className="portfolio-page__sub-title">Pharmaceuticals</p>
                        </div>
                        <div className="portfolio-page__arrow">
                        <Link
                            href="assets/images/project/portfolio-page-1-3.webp"
                            className="img-popup"
                        >
                            <span className="icon-back" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*Portfolio Page Single End*/}
                {/*Portfolio Page Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="portfolio-page__single">
                    <div className="portfolio-page__img-box">
                    <div className="portfolio-page__img">
                        <img loading="lazy"
                        src="assets/images/project/portfolio-page-1-4.webp"
                        alt="Enterprise system integration for energy sector"
                        />
                    </div>
                    <div className="portfolio-page__content">
                        <div className="portfolio-page__title-box">
                        <h3 className="portfolio-page__title">
                            <Link href="/portfolio-details">Enterprise System Integration</Link>
                        </h3>
                        <p className="portfolio-page__sub-title">Energy</p>
                        </div>
                        <div className="portfolio-page__arrow">
                        <Link
                            href="assets/images/project/portfolio-page-1-4.webp"
                            className="img-popup"
                        >
                            <span className="icon-back" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*Portfolio Page Single End*/}
                {/*Portfolio Page Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="portfolio-page__single">
                    <div className="portfolio-page__img-box">
                    <div className="portfolio-page__img">
                        <img loading="lazy"
                        src="assets/images/project/portfolio-page-1-5.webp"
                        alt="MOS platform deployment for mining operations"
                        />
                    </div>
                    <div className="portfolio-page__content">
                        <div className="portfolio-page__title-box">
                        <h3 className="portfolio-page__title">
                            <Link href="/portfolio-details">MOS Platform Deployment</Link>
                        </h3>
                        <p className="portfolio-page__sub-title">Mining</p>
                        </div>
                        <div className="portfolio-page__arrow">
                        <Link
                            href="assets/images/project/portfolio-page-1-5.webp"
                            className="img-popup"
                        >
                            <span className="icon-back" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*Portfolio Page Single End*/}
                {/*Portfolio Page Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="portfolio-page__single">
                    <div className="portfolio-page__img-box">
                    <div className="portfolio-page__img">
                        <img loading="lazy"
                        src="assets/images/project/portfolio-page-1-6.webp"
                        alt="Process excellence program for oil and gas enterprise"
                        />
                    </div>
                    <div className="portfolio-page__content">
                        <div className="portfolio-page__title-box">
                        <h3 className="portfolio-page__title">
                            <Link href="/portfolio-details">Process Excellence Program</Link>
                        </h3>
                        <p className="portfolio-page__sub-title">Oil & Gas</p>
                        </div>
                        <div className="portfolio-page__arrow">
                        <Link
                            href="assets/images/project/portfolio-page-1-6.webp"
                            className="img-popup"
                        >
                            <span className="icon-back" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*Portfolio Page Single End*/}
                {/*Portfolio Page Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="portfolio-page__single">
                    <div className="portfolio-page__img-box">
                    <div className="portfolio-page__img">
                        <img loading="lazy"
                        src="assets/images/project/portfolio-page-1-7.webp"
                        alt="ERP governance framework for pharmaceutical enterprise"
                        />
                    </div>
                    <div className="portfolio-page__content">
                        <div className="portfolio-page__title-box">
                        <h3 className="portfolio-page__title">
                            <Link href="/portfolio-details">ERP Governance Framework</Link>
                        </h3>
                        <p className="portfolio-page__sub-title">Pharmaceuticals</p>
                        </div>
                        <div className="portfolio-page__arrow">
                        <Link
                            href="assets/images/project/portfolio-page-1-7.webp"
                            className="img-popup"
                        >
                            <span className="icon-back" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*Portfolio Page Single End*/}
                {/*Portfolio Page Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="portfolio-page__single">
                    <div className="portfolio-page__img-box">
                    <div className="portfolio-page__img">
                        <img loading="lazy"
                        src="assets/images/project/portfolio-page-1-8.webp"
                        alt="Digital transformation roadmap for mining company"
                        />
                    </div>
                    <div className="portfolio-page__content">
                        <div className="portfolio-page__title-box">
                        <h3 className="portfolio-page__title">
                            <Link href="/portfolio-details">Digital Transformation Roadmap</Link>
                        </h3>
                        <p className="portfolio-page__sub-title">Mining</p>
                        </div>
                        <div className="portfolio-page__arrow">
                        <Link
                            href="assets/images/project/portfolio-page-1-8.webp"
                            className="img-popup"
                        >
                            <span className="icon-back" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*Portfolio Page Single End*/}
                {/*Portfolio Page Single Start*/}
                <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="portfolio-page__single">
                    <div className="portfolio-page__img-box">
                    <div className="portfolio-page__img">
                        <img loading="lazy"
                        src="assets/images/project/portfolio-page-1-9.webp"
                        alt="Training and knowledge transfer program for energy enterprise"
                        />
                    </div>
                    <div className="portfolio-page__content">
                        <div className="portfolio-page__title-box">
                        <h3 className="portfolio-page__title">
                            <Link href="/portfolio-details">Training & Knowledge Transfer</Link>
                        </h3>
                        <p className="portfolio-page__sub-title">Energy</p>
                        </div>
                        <div className="portfolio-page__arrow">
                        <Link
                            href="assets/images/project/portfolio-page-1-9.webp"
                            className="img-popup"
                        >
                            <span className="icon-back" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*Portfolio Page Single End*/}
            </div>
            </div>
        </section>
        {/*Portfolio Page End*/}
        
        <Newsletter />


        </Layout>
        </>
    )
}