import Layout from "@/components/layout/Layout"
import Newsletter from "@/components/sections/home1/Newsletter"
import Link from "next/link"
export default function Home() {
   
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Case Single" breadcrumbTitle="Case Single" wrapperCls="">
        
        {/*Case Single Start*/}
        <section className="case-single">
            <div className="container">
            <div className="case-single__img">
                <img loading="lazy" src="assets/images/resources/case-single-img-1.webp" alt="Case study main image" />
            </div>
            <div className="case-single__details">
                <div className="case-single__details-inner">
                <div className="case-single__shape-1">
                    <img loading="lazy" src="assets/images/shapes/case-single-shape-1.webp" alt="Decorative shape" />
                </div>
                <div className="case-single__shape-2">
                    <img loading="lazy" src="assets/images/shapes/case-single-shape-2.webp" alt="Decorative shape" />
                </div>
                <ul className="list-unstyled case-single__details-list">
                    <li>
                    <div className="case-single__details-content">
                        <p>Clients:</p>
                        <h4>Global Energy Enterprise</h4>
                    </div>
                    </li>
                    <li>
                    <div className="case-single__details-content">
                        <p>Category:</p>
                        <h4>System Integration, ERP</h4>
                    </div>
                    </li>
                    <li>
                    <div className="case-single__details-content">
                        <p>Date:</p>
                        <h4>January 2025</h4>
                    </div>
                    </li>
                    <li>
                    <div className="case-single__social">
                        <Link href="#">
                        <i className="fab fa-twitter" />
                        </Link>
                        <Link href="#">
                        <i className="fab fa-facebook" />
                        </Link>
                        <Link href="#">
                        <i className="fab fa-pinterest-p" />
                        </Link>
                        <Link href="#">
                        <i className="fab fa-instagram" />
                        </Link>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            <div className="case-single__content">
                <h3 className="case-single__content-title">Enterprise System Integration for Global Energy Operations</h3>
                <p className="case-single__content-text-1">
                A global energy company operating across 8 countries had built up a portfolio of disconnected systems over two decades of acquisitions and regional IT decisions. Field operations ran on one platform, asset management on another, and finance on a third. Consolidating month-end close required manual data exports between five systems, and reporting for regulatory submissions in each jurisdiction had to be assembled by hand. When a compliance audit flagged gaps in audit trail integrity across their upstream and midstream operations, leadership committed to a full systems consolidation.
                </p>
                <p className="case-single__content-text-2">
                InSourceful designed a unified Oracle Cloud platform connecting field operations, asset lifecycle management, project finance, and regulatory compliance reporting under a single data model. The integration architecture used Oracle Integration Cloud to bridge remaining on-premise systems during the transition period, ensuring no operational disruption at producing assets. A formal data governance framework was established before any migration began, assigning data stewardship responsibilities across business units and defining golden-record rules for equipment, supplier, and cost center master data. The change management program ran alongside the technical build, embedding functional leads from each country operation into the design process. By go-live, the client had eliminated four redundant systems, reduced month-end close from 14 days to 6, and established a real-time compliance dashboard covering all 8 jurisdictions from a single Oracle Analytics instance.
                </p>
            </div>
            <div className="case-details__pagination-box">
                <ul className="case-details__pagination list-unstyled clearfix">
                <li className="next">
                    <Link href="#" aria-label="Previous">
                    <i className="icon-right-arrow" />
                    Previous
                    </Link>
                </li>
                <li className="count">
                    <Link href="#" />
                </li>
                <li className="count">
                    <Link href="#" />
                </li>
                <li className="count">
                    <Link href="#" />
                </li>
                <li className="count">
                    <Link href="#" />
                </li>
                <li className="previous">
                    <Link href="#" aria-label="Next">
                    Next
                    <i className="icon-right-arrow1" />
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </section>
        {/*Case Single End*/}
        
        <Newsletter />

        </Layout>
        </>
    )
}