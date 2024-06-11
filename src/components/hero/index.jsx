import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function HeroSection({ viewRef }) {
  const glowRef = useRef();

  useEffect(() => {
    const handlePointerMove = (e) => {
      const { clientX, clientY } = e;
      if (glowRef.current) {
        glowRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, [glowRef]);

  return (
    <section className="section section--hero" id="hero" ref={viewRef}>
      <div className="hero-content">
        <div id="glow" ref={glowRef}></div>

        <div className="hero-content__text">
          <h1>
            <div className="hero-content__sentence">
              <div className="hero-content__small-text">Hi, my name is</div>
              <div className="hero-content__large-text">Hallvard Benan</div>
            </div>
            <div className="hero-content__sentence">
              <div className="hero-content__small-text">I&apos;m a</div>
              <div className="hero-content__large-text">
                Front-end developer
              </div>
            </div>
          </h1>
        </div>
        <div className="hero-content__mockups">
          <div className="hero-content__mockup hero-content__mockup--pc">
            <img
              className="laptop"
              src="/models/laptop-frame.png"
              alt="laptop displaying images from my projects"
            />
            <Swiper
              modules={[Autoplay]}
              loop
              autoplay={{ delay: 1300 }}
              speed={500}
              slidesPerView={1}
            >
              <SwiperSlide>
                <img src="/images/logo-desktop.jpg" alt="logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/Holiday helper desktop.png"
                  alt="holiday helper desktop"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/Auctionhouse-desktop-.webp"
                  alt="auction house desktop"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/beyond-pace-desktop.webp"
                  alt="screenshot of beyond pace"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/price-club-desktop.png"
                  alt="screenshot of beyond pace"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="hero-content__mockup hero-content__mockup--mobile">
            <img
              src="/models/mobile-model.webp"
              alt="mobile frame"
              className="mobile"
            />
            <Swiper
              modules={[Autoplay]}
              loop
              autoplay={{ delay: 1300 }}
              speed={500}
              slidesPerView={1}
              className="swiper mobile-swiper"
            >
              <SwiperSlide>
                <img src="/images/logo-mobile.jpg" alt="logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/Holiday helper mobile.png"
                  alt="holiday helper mobile screenshot"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/Auctionhouse-mobile.webp"
                  alt="screenshot of mobile site auction house"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="/images/beyond-pace-mobile.webp"
                  alt="screenshot of mobile site beyond pace"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="/images/price-club-mobile.png"
                  alt="screenshot of mobile site price club"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="hero-button">
          <a href="#projects" className="hero-button__link">
            See my projects
          </a>
          <a href="#projects" className="hero-button__link--symbol">
            <FaChevronDown />
          </a>
        </div>
      </div>
    </section>
  );
}
