
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
            <section className="contact-page">
                <div className="container">
                <h3 className="contact-page__title">Get In Touch</h3>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="contact-page__left">
                        <ul className="contact-page__points list-unstyled">
                        <li>
                            <div className="icon">
                            <span className="icon-location" />
                            </div>
                            <div className="content">
                            <h3>Address</h3>
                            <p>
                                6558 Tuscany Ridge Dr
                                <br /> El Paso TX, USA
                            </p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="contact-page__left">
                        <ul className="contact-page__points list-unstyled">
                        <li>
                            <div className="icon">
                            <span className="icon-telephone" />
                            </div>
                            <div className="content">
                            <h3>Phone</h3>
                            <p>
                                <Link href="tel:+17208788654">+1.720.878.8654</Link>
                            </p>
                            <p>
                                <Link href="tel:+34671445275">+34.671.445.275</Link>
                            </p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="contact-page__left">
                        <ul className="contact-page__points list-unstyled">
                        <li>
                            <div className="icon">
                            <span className="icon-open-mail" />
                            </div>
                            <div className="content">
                            <h3>Email</h3>
                            <p>
                                <Link href="mailto:info@insourceful.ai">
                                info@insourceful.ai
                                </Link>
                            </p>
                            </div>
                        </li>
                        </ul>
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
