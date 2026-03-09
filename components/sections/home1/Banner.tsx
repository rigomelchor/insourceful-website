"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  return (
    <>
      {/* Main Slider Start */}
      <section className="main-slider">
        <Swiper
          {...swiperOptions}
          className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel"
        >
          <SwiperSlide>
            <div className="item main-slider__slide-1">
              <div className="main-slider__bg">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet="/assets/images/backgrounds/hero-mobile.webp"
                  />
                  <img
                    src="/assets/images/backgrounds/hero.webp"
                    alt="Engineering Excellence for Asset-Intensive Enterprises"
                    fetchPriority="high"
                    decoding="sync"
                    style={{ position: "absolute", width: "100%", height: "100%", inset: 0, objectFit: "cover" }}
                  />
                </picture>
              </div>
              <div className="main-slider__shape-1" />
              <div className="container">
                <div className="main-slider__content">
                  <p className="main-slider__sub-title">
                    Oracle JD Edwards | Enterprise Consulting
                  </p>
                  <h1 className="main-slider__title">
                    Engineering Excellence <br /> for Asset-Intensive Enterprises
                  </h1>
                  <p className="main-slider__text">
                    Expert Oracle JD Edwards consulting for Mining, Oil & Gas, Pharmaceuticals, and Utilities.
                  </p>
                  <div className="main-slider__btn-box">
                    <a href="contact" className="thm-btn main-slider__btn">
                      Schedule Consultation
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item main-slider__slide-2">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/hero.webp)",
                }}
              ></div>
              <div className="main-slider__shape-1" />
              <div className="container">
                <div className="main-slider__content">
                  <p className="main-slider__sub-title">
                    Oracle JD Edwards | Enterprise Consulting
                  </p>
                  <h2 className="main-slider__title">
                    Engineering Excellence <br /> for Asset-Intensive Enterprises
                  </h2>
                  <p className="main-slider__text">
                    Expert Oracle JD Edwards consulting for Mining, Oil & Gas, Pharmaceuticals, and Utilities.
                  </p>
                  <div className="main-slider__btn-box">
                    <a href="contact" className="thm-btn main-slider__btn">
                      Schedule Consultation
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* Main Slider End */}
    </>
  );
}
