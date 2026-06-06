
import Layout from "@/components/layout/Layout"
import Newsletter from "@/components/sections/home1/Newsletter"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Blog" breadcrumbTitle="Blog" wrapperCls="">

        {/*Blog Page Start */}
        <section className="blog-page">
            <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-7">
                <div className="blog-page__left">
                    <div className="blog-page__content-box">
                    {/*Blog Page Single Start */}
                    <div className="blog-page__single">
                        <div className="blog-page__img-box">
                        <div className="blog-page__img">
                            <img loading="lazy" src="assets/images/blog/blog-page-1-1.webp" alt="Why Asset-Intensive Enterprises Are Moving to Oracle Cloud ERP" />
                        </div>
                        <div className="blog-page__date">
                            <p>
                            15 <br /> Mar
                            </p>
                        </div>
                        </div>
                        <div className="blog-page__content">
                        <ul className="list-unstyled blog-page__meta">
                            <li>
                            <Link href="/blog-details">
                                <i className="far fa-user-circle" />
                                Rigo Melchor
                            </Link>
                            </li>
                            <li>
                            <Link href="/blog-details">
                                <i className="far fa-comments" />0 Comment
                            </Link>
                            </li>
                            <li>
                            <Link href="/blog-details">
                                <i className="far fa-heart" />0 Like
                            </Link>
                            </li>
                        </ul>
                        <h3 className="blog-page__title">
                            <Link href="/blog-details">
                            Why Asset-Intensive Enterprises Are Moving to Oracle Cloud ERP
                            </Link>
                        </h3>
                        <p className="blog-page__text-1">
                            Mining and energy companies carry a level of operational complexity that on-premise ERP systems were never designed to handle at scale. Maintenance backlogs, multi-site asset tracking, regulatory reporting across jurisdictions, and fluctuating commodity cycles create pressure that legacy platforms absorb poorly.
                        </p>
                        <p className="blog-page__text-2">
                            Oracle Cloud ERP gives these organizations a path to consolidate that complexity into a single platform with real-time visibility across operations, finance, and supply chain.
                        </p>
                        <Link href="/blog-details" className="blog-page__read-more" aria-label="Read more about Oracle Cloud ERP for asset-intensive industries">
                            Read more <span className="icon-right-arrow1" />
                        </Link>
                        </div>
                    </div>
                    {/*Blog Page Single End */}
                    {/*Blog Page Single Start */}
                    <div className="blog-page__single">
                        <div className="blog-page__img-box">
                        <div className="blog-page__img">
                            <img loading="lazy" src="assets/images/blog/blog-page-1-2.webp" alt="JD Edwards vs Oracle Cloud: Choosing the Right ERP Path" />
                        </div>
                        <div className="blog-page__date">
                            <p>
                            02 <br /> Feb
                            </p>
                        </div>
                        </div>
                        <div className="blog-page__content">
                        <ul className="list-unstyled blog-page__meta">
                            <li>
                            <Link href="/blog-details">
                                <i className="far fa-user-circle" />
                                Rigo Melchor
                            </Link>
                            </li>
                            <li>
                            <Link href="/blog-details">
                                <i className="far fa-comments" />0 Comment
                            </Link>
                            </li>
                            <li>
                            <Link href="/blog-details">
                                <i className="far fa-heart" />0 Like
                            </Link>
                            </li>
                        </ul>
                        <h3 className="blog-page__title">
                            <Link href="/blog-details">
                            JD Edwards vs Oracle Cloud: Choosing the Right ERP Path
                            </Link>
                        </h3>
                        <p className="blog-page__text-1">
                            JD Edwards remains a strong platform for companies with highly customized processes, deep manufacturing requirements, or environments where the business case for cloud migration does not yet close. The honest answer is that not every organization needs to move.
                        </p>
                        <p className="blog-page__text-2">
                            This article walks through the criteria that actually matter when evaluating JDE versus Oracle Cloud, including total cost of ownership, upgrade cycles, integration surface area, and long-term vendor support commitments.
                        </p>
                        <Link href="/blog-details" className="blog-page__read-more" aria-label="Read more about JD Edwards vs Oracle Cloud comparison">
                            Read more <span className="icon-right-arrow1" />
                        </Link>
                        </div>
                    </div>
                    {/*Blog Page Single End */}
                    {/*Blog Page Single Start */}
                    <div className="blog-page__single">
                        <div className="blog-page__img-box">
                        <div className="blog-page__img">
                            <img loading="lazy" src="assets/images/blog/blog-page-1-3.webp" alt="5 Signs Your Enterprise Needs a System Integration Overhaul" />
                        </div>
                        <div className="blog-page__date">
                            <p>
                            18 <br /> Jan
                            </p>
                        </div>
                        </div>
                        <div className="blog-page__content">
                        <ul className="list-unstyled blog-page__meta">
                            <li>
                            <Link href="/blog-details">
                                <i className="far fa-user-circle" />
                                Rigo Melchor
                            </Link>
                            </li>
                            <li>
                            <Link href="/blog-details">
                                <i className="far fa-comments" />0 Comment
                            </Link>
                            </li>
                            <li>
                            <Link href="/blog-details">
                                <i className="far fa-heart" />0 Like
                            </Link>
                            </li>
                        </ul>
                        <h3 className="blog-page__title">
                            <Link href="/blog-details">
                            5 Signs Your Enterprise Needs a System Integration Overhaul
                            </Link>
                        </h3>
                        <p className="blog-page__text-1">
                            Point-to-point integrations accumulate over years of incremental IT decisions. Each connection made sense when it was built, but the aggregate result is a brittle web that slows down every new initiative and puts data quality at risk across the business.
                        </p>
                        <p className="blog-page__text-2">
                            If your teams are reconciling reports manually, waiting days for data to sync between systems, or dreading the impact of any platform upgrade, the integration layer is likely the root cause.
                        </p>
                        <Link href="/blog-details" className="blog-page__read-more" aria-label="Read more about system integration overhaul">
                            Read more <span className="icon-right-arrow1" />
                        </Link>
                        </div>
                    </div>
                    {/*Blog Page Single End */}
                    {/*Blog Page Single Start */}
                    <div className="blog-page__single">
                        <div className="blog-page__img-box">
                        <div className="blog-page__img">
                            <img loading="lazy" src="assets/images/blog/blog-page-1-4.webp" alt="Digital Transformation in Mining: Lessons from the Field" />
                        </div>
                        <div className="blog-page__date">
                            <p>
                            05 <br /> Dec
                            </p>
                        </div>
                        </div>
                        <div className="blog-page__content">
                        <ul className="list-unstyled blog-page__meta">
                            <li>
                            <Link href="/blog-details">
                                <i className="far fa-user-circle" />
                                Rigo Melchor
                            </Link>
                            </li>
                            <li>
                            <Link href="/blog-details">
                                <i className="far fa-comments" />0 Comment
                            </Link>
                            </li>
                            <li>
                            <Link href="/blog-details">
                                <i className="far fa-heart" />0 Like
                            </Link>
                            </li>
                        </ul>
                        <h3 className="blog-page__title">
                            <Link href="/blog-details">
                            Digital Transformation in Mining: Lessons from the Field
                            </Link>
                        </h3>
                        <p className="blog-page__text-1">
                            Mining companies face a version of digital transformation that other industries do not. Remote operations, harsh environments, strict safety reporting requirements, and assets that cost hundreds of millions to replace mean that technology decisions carry consequences that go well beyond a failed software rollout.
                        </p>
                        <p className="blog-page__text-2">
                            After working with major gold and precious metals producers, a consistent pattern emerges: the projects that succeed prioritize process discipline before platform selection, not after.
                        </p>
                        <Link href="/blog-details" className="blog-page__read-more" aria-label="Read more about digital transformation in mining">
                            Read more <span className="icon-right-arrow1" />
                        </Link>
                        </div>
                    </div>
                    {/*Blog Page Single End */}
                    </div>
                    <div className="blog-page__pagination">
                    <ul className="pg-pagination list-unstyled">
                        <li className="Prev">
                        <Link href="#" aria-label="Next">
                            <i className="icon-back1" />
                        </Link>
                        </li>
                        <li className="count">
                        <Link href="#">01</Link>
                        </li>
                        <li className="count">
                        <Link href="#">02</Link>
                        </li>
                        <li className="count">
                        <Link href="#">3</Link>
                        </li>
                        <li className="next">
                        <Link href="#" aria-label="Next">
                            <i className="icon-back" />
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                <div className="sidebar">
                    <div className="sidebar__single sidebar__search">
                    <form action="#" className="sidebar__search-form">
                        <input type="search" placeholder="Search..." />
                        <button type="submit">
                        <i className="icon-search" />
                        </button>
                    </form>
                    </div>
                    <div className="sidebar__single sidebar__category">
                    <div className="sidebar__title-box">
                        <h3 className="sidebar__title">Category</h3>
                    </div>
                    <ul className="sidebar__category-list list-unstyled">
                        <li>
                        <Link href="/blog-details">
                            Oracle Cloud ERP<span>(12)</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="/blog-details">
                            JD Edwards<span>(15)</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="/blog-details">
                            System Integration<span>(08)</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="/blog-details">
                            Digital Transformation<span>(20)</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="/blog-details">
                            Process Excellence<span>(14)</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="/blog-details">
                            Industry Insights<span>(05)</span>
                        </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="sidebar__single sidebar__post">
                    <div className="sidebar__title-box">
                        <h3 className="sidebar__title">Recent Post</h3>
                    </div>
                    <ul className="sidebar__post-list list-unstyled">
                        <li>
                        <div className="sidebar__post-image">
                            <img loading="lazy" src="assets/images/blog/blog-lp-1.webp" alt="Why Asset-Intensive Enterprises Are Moving to Oracle Cloud ERP" />
                        </div>
                        <h3 className="sidebar__post-title">
                            <Link href="/blog-details">
                            Why Asset-Intensive Enterprises Are Moving to Oracle Cloud ERP
                            </Link>
                        </h3>
                        </li>
                        <li>
                        <div className="sidebar__post-image">
                            <img loading="lazy" src="assets/images/blog/blog-lp-2.webp" alt="JD Edwards vs Oracle Cloud: Choosing the Right ERP Path" />
                        </div>
                        <h3 className="sidebar__post-title">
                            <Link href="/blog-details">
                            JD Edwards vs Oracle Cloud: Choosing the Right ERP Path
                            </Link>
                        </h3>
                        </li>
                        <li>
                        <div className="sidebar__post-image">
                            <img loading="lazy" src="assets/images/blog/blog-lp-3.webp" alt="5 Signs Your Enterprise Needs a System Integration Overhaul" />
                        </div>
                        <h3 className="sidebar__post-title">
                            <Link href="/blog-details">
                            5 Signs Your Enterprise Needs a System Integration Overhaul
                            </Link>
                        </h3>
                        </li>
                    </ul>
                    </div>
                    <div className="sidebar__single sidebar__tag">
                    <div className="sidebar__title-box">
                        <h3 className="sidebar__title">Tags Cloud</h3>
                    </div>
                    <div className="sidebar__tag-list">
                        <Link href="/blog-details">Oracle</Link>
                        <Link href="/blog-details">ERP</Link>
                        <Link href="/blog-details">Cloud</Link>
                        <Link href="/blog-details">Mining</Link>
                        <Link href="/blog-details">JDE</Link>
                        <Link href="/blog-details">Integration</Link>
                        <Link href="/blog-details">Advisory</Link>
                        <Link href="/blog-details">Enterprise</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*Blog Page End */}

        <Newsletter />

        </Layout>
        </>
    )
}
