import Link from "next/link"

export default function Newsletter() {
  return (
    <>
      {/*CTA Banner Start*/}
      <section className="newsletter-one">
        <div className="container">
          <div className="newsletter-one__inner">
            <div
              className="newsletter-one__bg float-bob-y"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/newsletter-one-bg.webp)",
              }}
            />
            <h3 className="newsletter-one__title">Ready to Get Started?</h3>
            <p className="newsletter-one__sub-title">Let&apos;s discuss your next project</p>
            <div className="newsletter-one__form" style={{ gap: "10px", marginTop: "28px" }}>
              <Link href="mailto:info@insourceful.ai" className="newsletter-one__btn" style={{ textDecoration: "none", display: "inline-block" }}>
                <i className="fa fa-envelope" style={{ marginRight: "8px" }} />Send an Email
              </Link>
              <Link href="tel:+17208788654" className="newsletter-one__btn" style={{ textDecoration: "none", display: "inline-block" }}>
                <i className="fa fa-phone-alt" style={{ marginRight: "8px" }} />+1 (720) 878-8654
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*CTA Banner End*/}
    </>
  );
}
