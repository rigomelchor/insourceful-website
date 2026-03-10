
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Contact" breadcrumbTitle="Contact" wrapperCls="">

            {/*Google Map Start*/}
            <section className="google-map-one">
                <div className="container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.2!2d-106.4291!3d31.7587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6558+Tuscany+Ridge+Dr%2C+El+Paso%2C+TX+79912%2C+USA!5e0!3m2!1sen!2sus!4v1697000000000!5m2!1sen!2sus"
                    className="google-map__one"
                    allowFullScreen
                />
                </div>
            </section>
            {/*Google Map End*/}

            {/*Contact Page Start*/}
            <section className="feature-one" style={{ marginTop: 0, padding: "80px 0 300px" }}>
                <div className="container">
                    <div className="section-title text-center" style={{ marginBottom: "50px" }}>
                        <h2 className="section-title__title">Get In Touch</h2>
                    </div>
                    <div className="row" style={{ justifyContent: "center" }}>
                        <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <span className="icon-location" />
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">Address</h3>
                                    <p className="feature-one__text">
                                        6558 Tuscany Ridge Dr
                                        <br /> El Paso TX, USA
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <span className="icon-telephone" />
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">Phone</h3>
                                    <p className="feature-one__text">
                                        <Link href="tel:+17208788654">+1.720.878.8654</Link>
                                    </p>
                                    <p className="feature-one__text">
                                        <Link href="tel:+34671445275">+34.671.445.275</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <span className="icon-open-mail" />
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">Email</h3>
                                    <p className="feature-one__text">
                                        <Link href="mailto:info@insourceful.ai">
                                            info@insourceful.ai
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Contact Page End*/}
            {/*CTA Start*/}
            <section className="cta-one">
                <div className="container">
                <div className="cta-one__inner">
                    <h3 className="cta-one__title">Ready to Start a Conversation?</h3>
                    <div className="cta-one__btn-box">
                    <Link href="mailto:info@insourceful.ai" className="thm-btn cta-one__btn">
                        Email Us <span className="icon-open-mail" />
                    </Link>
                    </div>
                </div>
                </div>
            </section>
            {/*CTA End*/}

        </Layout>
        </>
    )
}
