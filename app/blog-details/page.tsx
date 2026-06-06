
import Layout from "@/components/layout/Layout"
import Newsletter from "@/components/sections/home1/Newsletter"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Blog Details" breadcrumbTitle="Blog Details" wrapperCls="">

        {/*BLog Details Start*/}
        <section className="blog-details">
            <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-7">
                <div className="blog-details__left">
                    <div className="blog-details__img-box">
                    <div className="blog-details__img">
                        <img loading="lazy" src="assets/images/blog/blog-details-img-1.webp" alt="Why Asset-Intensive Enterprises Are Moving to Oracle Cloud ERP" />
                    </div>
                    <div className="blog-details__date">
                        <p>
                        15 <br /> Mar
                        </p>
                    </div>
                    </div>
                    <ul className="list-unstyled blog-details__meta">
                    <li>
                        <Link href="/blog-details">
                        <i className="fas fa-user-circle" /> Rigo Melchor
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-details">
                        <i className="fas fa-comments" /> 0 Comment
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog-details">
                        <i className="fas fa-heart" /> 0 Like
                        </Link>
                    </li>
                    </ul>
                    <h3 className="blog-details__title-1">
                    Why Asset-Intensive Enterprises Are Moving to Oracle Cloud ERP
                    </h3>
                    <p className="blog-details__text-1">
                    Mining, oil and gas, and pharmaceutical manufacturers share a common ERP problem. Their operations generate volumes of transactional data across assets, work orders, procurement, and regulatory reporting that on-premise systems were sized for a different era. The business has grown, the regulatory environment has tightened, and the platform has not kept pace.
                    </p>
                    <p className="blog-details__text-2">
                    Most organizations in these sectors have been running JD Edwards or a similar on-premise ERP for 15 to 20 years. The system works, but every upgrade is a project in itself, every integration is a custom build, and every new reporting requirement lands on an IT backlog that never gets shorter. The maintenance burden has become a competitive liability.
                    </p>
                    <div className="blog-details__btn-box">
                    <Link href="#" className="blog-details__btn">
                        Read more
                        <i className="icon-right-arrow1" />
                    </Link>
                    </div>
                    <div className="blog-details__img-2">
                    <img loading="lazy" src="assets/images/blog/blog-details-img-2.webp" alt="Oracle Cloud ERP dashboard showing real-time operational data" />
                    </div>
                    <p className="blog-details__text-3">
                    Oracle Cloud ERP addresses this by moving the infrastructure burden off the enterprise and onto Oracle. Quarterly updates are included. Security patching is handled. The finance, supply chain, project, and maintenance modules share a single data model, which eliminates the reconciliation work that consumes finance teams at month-end close. For a mining company running operations across multiple countries, the difference in reporting speed alone is significant. One client reduced their consolidated close cycle from 12 days to 4 after migrating from JDE to Oracle Cloud Financials.
                    </p>
                    <div className="blog-details__quote-and-text">
                    <div className="blog-details__quote">
                        <span className="icon-left" />
                    </div>
                    <div className="blog-details__quote-text">
                        <p>
                        The organizations that struggle with ERP migrations are not struggling because of the technology. They are struggling because they tried to lift and shift processes that were already broken. The migration is the opportunity to fix them.
                        </p>
                    </div>
                    </div>
                    <p className="blog-details__text-4">
                    The integration story is where cloud ERP becomes most compelling for asset-intensive industries. JDE environments typically carry dozens of point-to-point integrations built over years: connections to SCADA systems, lab information management, mine planning software, trading platforms, and logistics systems. Each of those integrations is a maintenance liability. Oracle Cloud provides pre-built adapters and a unified integration layer through Oracle Integration Cloud, which reduces the custom code surface significantly and makes future system changes far less disruptive.
                    </p>
                    <ul className="blog-details__points list-unstyled">
                    <li>
                        <div className="blog-details__points-shape" />
                        <p className="blog-details__points-text">
                        Reduce maintenance costs by consolidating legacy point-to-point integrations into a managed integration platform
                        </p>
                    </li>
                    <li>
                        <div className="blog-details__points-shape" />
                        <p className="blog-details__points-text">
                        Achieve real-time financial visibility across multi-site, multi-currency operations without custom reporting builds
                        </p>
                    </li>
                    <li>
                        <div className="blog-details__points-shape" />
                        <p className="blog-details__points-text">
                        Simplify regulatory compliance reporting by leveraging Oracle's built-in audit trails and configurable controls
                        </p>
                    </li>
                    <li>
                        <div className="blog-details__points-shape" />
                        <p className="blog-details__points-text">
                        Scale operations and user access without infrastructure investments or lengthy upgrade projects
                        </p>
                    </li>
                    </ul>
                    <p className="blog-details__text-5">
                    Compliance requirements in mining and pharma add another dimension. Newmont, Kinross, and similar producers operate under environmental reporting obligations that span multiple regulatory bodies. Mallinckrodt and other pharmaceutical manufacturers carry FDA and DEA compliance requirements on top of financial controls. Oracle Cloud's audit framework, segregation of duties controls, and configurable approval workflows reduce the manual effort required to demonstrate compliance during audits. These are not features that get retrofitted into on-premise systems easily.
                    </p>
                    <p className="blog-details__text-6">
                    The migration itself requires careful planning. Data quality, chart of accounts harmonization, and process redesign take longer than the technical deployment in most cases. Organizations that treat the migration as a pure IT project consistently underestimate the change management work. The business process owners need to be accountable for the outcome, not just the implementation team. When that accountability is structured correctly from the start, cloud ERP migrations in asset-intensive industries deliver on their promise.
                    </p>
                    <div className="blog-details__bottom">
                    <p className="blog-details__tags">
                        <Link href="#">Oracle</Link>
                        <Link href="#">Cloud ERP</Link>
                        <Link href="#">Mining</Link>
                    </p>
                    <div className="blog-details__social-list">
                        <Link href="#">
                        <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="#">
                        <i className="fab fa-twitter" />
                        </Link>
                        <Link href="#">
                        <i className="fab fa-instagram" />
                        </Link>
                        <Link href="#">
                        <i className="fab fa-pinterest-p" />
                        </Link>
                    </div>
                    </div>
                    <div className="author">
                    <div className="author__img">
                        <img loading="lazy" src="assets/images/blog/author-img.webp" alt="Rigo Melchor" />
                    </div>
                    <div className="author__content">
                        <h4>Rigo Melchor</h4>
                        <p>
                        Enterprise technology consultant with over 20 years of experience in Oracle implementations for asset-intensive industries.
                        </p>
                        <div className="author__social">
                        <Link href="#">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="#">
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link href="#">
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link href="#">
                            <i className="fab fa-pinterest-p" />
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div className="blog-details__comment-and-form">
                    <div className="comment-form">
                        <h3 className="comment-form__title">Leave A Reply</h3>
                        <form
                        action="assets/inc/sendemail.php"
                        className="comment-one__form contact-form-validated"
                        noValidate
                        >
                        <div className="row">
                            <div className="col-xl-12">
                            <div className="comment-form__input-box">
                                <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                                />
                            </div>
                            </div>
                            <div className="col-xl-12">
                            <div className="comment-form__input-box">
                                <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                            <div className="comment-form__input-box text-message-box">
                                <textarea
                                name="message"
                                placeholder="Write Comment"
                                defaultValue={""}
                                />
                            </div>
                            <div className="comment-form__btn-box">
                                <button type="submit" className="comment-form__btn">
                                Post Comment
                                </button>
                            </div>
                            </div>
                        </div>
                        </form>
                        <div className="result" />
                    </div>
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
        {/*BLog Details End*/}
        <Newsletter />

        </Layout>
        </>
    )
}
