import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Newsletter from "@/components/sections/home1/Newsletter"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Our Team" breadcrumbTitle="Our Team" wrapperCls="">

        {/*Team One Start*/}
        <section className="team-one team-page">
            <div className="container">
            <div className="row">
                {/*Team One Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="100"
                >
                <div className="team-one__single">
                    <div className="team-one__img-box">
                    <div className="team-one__img">
                        <img loading="lazy" src="assets/images/team/team-1-1.webp" alt="Jecika Brown" />
                        <div className="team-one__name-box">
                        <h3 className="team-one__name">
                            <Link href="/team">Jecika Brown</Link>
                        </h3>
                        <p className="team-one__sub-title">Web Designer</p>
                        </div>
                    </div>
                    <ul className="list-unstyled team-one__social">
                        <li>
                        <Link href="#">
                            <i className="fab fa-facebook" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-twitter" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-pinterest-p" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-instagram" />
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="200"
                >
                <div className="team-one__single">
                    <div className="team-one__img-box">
                    <div className="team-one__img">
                        <img loading="lazy" src="assets/images/team/team-1-2.webp" alt="Jhon Smith" />
                        <div className="team-one__name-box">
                        <h3 className="team-one__name">
                            <Link href="/team">Jhon Smith</Link>
                        </h3>
                        <p className="team-one__sub-title">Web Designer</p>
                        </div>
                    </div>
                    <ul className="list-unstyled team-one__social">
                        <li>
                        <Link href="#">
                            <i className="fab fa-facebook" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-twitter" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-pinterest-p" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-instagram" />
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="300"
                >
                <div className="team-one__single">
                    <div className="team-one__img-box">
                    <div className="team-one__img">
                        <img loading="lazy" src="assets/images/team/team-1-3.webp" alt="Alisha Martin" />
                        <div className="team-one__name-box">
                        <h3 className="team-one__name">
                            <Link href="/team">Alisha Martin</Link>
                        </h3>
                        <p className="team-one__sub-title">Web Designer</p>
                        </div>
                    </div>
                    <ul className="list-unstyled team-one__social">
                        <li>
                        <Link href="#">
                            <i className="fab fa-facebook" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-twitter" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-pinterest-p" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-instagram" />
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="400"
                >
                <div className="team-one__single">
                    <div className="team-one__img-box">
                    <div className="team-one__img">
                        <img loading="lazy" src="assets/images/team/team-1-4.webp" alt="David Kapor" />
                        <div className="team-one__name-box">
                        <h3 className="team-one__name">
                            <Link href="/team">David Kapor</Link>
                        </h3>
                        <p className="team-one__sub-title">Web Designer</p>
                        </div>
                    </div>
                    <ul className="list-unstyled team-one__social">
                        <li>
                        <Link href="#">
                            <i className="fab fa-facebook" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-twitter" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-pinterest-p" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-instagram" />
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="500"
                >
                <div className="team-one__single">
                    <div className="team-one__img-box">
                    <div className="team-one__img">
                        <img loading="lazy" src="assets/images/team/team-1-5.webp" alt="David Warner" />
                        <div className="team-one__name-box">
                        <h3 className="team-one__name">
                            <Link href="/team">David Warner</Link>
                        </h3>
                        <p className="team-one__sub-title">Web Designer</p>
                        </div>
                    </div>
                    <ul className="list-unstyled team-one__social">
                        <li>
                        <Link href="#">
                            <i className="fab fa-facebook" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-twitter" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-pinterest-p" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-instagram" />
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="600"
                >
                <div className="team-one__single">
                    <div className="team-one__img-box">
                    <div className="team-one__img">
                        <img loading="lazy" src="assets/images/team/team-1-6.webp" alt="David Piter" />
                        <div className="team-one__name-box">
                        <h3 className="team-one__name">
                            <Link href="/team">David Piter</Link>
                        </h3>
                        <p className="team-one__sub-title">Web Designer</p>
                        </div>
                    </div>
                    <ul className="list-unstyled team-one__social">
                        <li>
                        <Link href="#">
                            <i className="fab fa-facebook" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-twitter" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-pinterest-p" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-instagram" />
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="700"
                >
                <div className="team-one__single">
                    <div className="team-one__img-box">
                    <div className="team-one__img">
                        <img loading="lazy" src="assets/images/team/team-1-7.webp" alt="Herny Mate" />
                        <div className="team-one__name-box">
                        <h3 className="team-one__name">
                            <Link href="/team">Herny Mate</Link>
                        </h3>
                        <p className="team-one__sub-title">Web Designer</p>
                        </div>
                    </div>
                    <ul className="list-unstyled team-one__social">
                        <li>
                        <Link href="#">
                            <i className="fab fa-facebook" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-twitter" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-pinterest-p" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-instagram" />
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="800"
                >
                <div className="team-one__single">
                    <div className="team-one__img-box">
                    <div className="team-one__img">
                        <img loading="lazy" src="assets/images/team/team-1-8.webp" alt="David Wiese" />
                        <div className="team-one__name-box">
                        <h3 className="team-one__name">
                            <Link href="/team">David Wiese</Link>
                        </h3>
                        <p className="team-one__sub-title">Web Designer</p>
                        </div>
                    </div>
                    <ul className="list-unstyled team-one__social">
                        <li>
                        <Link href="#">
                            <i className="fab fa-facebook" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-twitter" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-pinterest-p" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fab fa-instagram" />
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/*Team One Single End*/}
            </div>
            </div>
        </section>
        {/*Team One End*/}
        <Newsletter />

        </Layout>
        </>
    )
}