import Link from "next/link";
export default function Feature() {
  return (
    <>
      {/*Feature One Start*/}
      <section className="feature-one">
        <h2 className="sr-only">Our Services</h2>
        <div className="container">
          <div className="row">
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-project-management" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">
                    <Link href="service-details">Oracle JD Edwards</Link>
                  </h3>
                  <p className="feature-one__text">
                    Full-lifecycle JDE support — implementations, upgrades, and managed services across EnterpriseOne and World.
                  </p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-supply-chain" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">
                    <Link href="service-details">Oracle Cloud ERP</Link>
                  </h3>
                  <p className="feature-one__text">
                    Cloud migration strategy, Fusion implementation, and integration with legacy Oracle on-premise systems.
                  </p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-coding" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">
                    <Link href="service-details">System Integration</Link>
                  </h3>
                  <p className="feature-one__text">
                    Connect Oracle ERP with third-party platforms, data warehouses, and business intelligence tools.
                  </p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-content-management-1" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">
                    <Link href="service-details">Operational Advisory</Link>
                  </h3>
                  <p className="feature-one__text">
                    Strategic consulting to align Oracle investments with business objectives and drive measurable ROI.
                  </p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
          </div>
        </div>
      </section>
      {/*Feature One End*/}
    </>
  );
}
