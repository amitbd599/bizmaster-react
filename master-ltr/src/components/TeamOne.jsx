import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
const TeamOne = () => {
  return (
    <div className="team-area-1 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Our Team
              </span>
              <h2 className="sec-title">
                Your Business with the Professional{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row gx-30 global-carousel team-slider2">
        <Swiper
          loop={true}
          navigation={{
            nextEl: ".team-slider2-next",
            prevEl: ".team-slider2-prev",
          }}
          spaceBetween={20}
          slidesPerView={2}
          slidesPerGroup={1}
          speed={1000}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          className="mySwiper"
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
          breakpoints={{
            0: {
              navigation: false,
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div>
              <div className="team-card">
                <div className="team-card_wrapp">
                  <div className="team-card_img">
                    <img src="assets/img/team/team-1-1.png" alt="img" />
                  </div>
                  <div className="team-social">
                    <div className="plus-btn">
                      <img src="assets/img/icon/share.svg" alt="" />
                    </div>
                    <div className="global-social">
                      <a href="https://www.facebook.com/" tabIndex={0}>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.linkedin.com/" tabIndex={0}>
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="https://www.twitter.com/" tabIndex={0}>
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <img src="assets/img/icon/share2.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-card_content">
                  <h4 className="team-card_title">
                    <a href="team-details.html">Darrell Steward</a>
                  </h4>
                  <span className="team-card_desig">Human Resource</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="team-card">
                <div className="team-card_wrapp">
                  <div className="team-card_img">
                    <img src="assets/img/team/team-1-2.png" alt="img" />
                  </div>
                  <div className="team-social">
                    <div className="plus-btn">
                      <img src="assets/img/icon/share.svg" alt="" />
                    </div>
                    <div className="global-social">
                      <a href="https://www.facebook.com/" tabIndex={0}>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.linkedin.com/" tabIndex={0}>
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="https://www.twitter.com/" tabIndex={0}>
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <img src="assets/img/icon/share2.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-card_content">
                  <h4 className="team-card_title">
                    <a href="team-details.html">Fahad Hossain</a>
                  </h4>
                  <span className="team-card_desig">Efficiency Experts</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="team-card">
                <div className="team-card_wrapp">
                  <div className="team-card_img">
                    <img src="assets/img/team/team-1-3.png" alt="img" />
                  </div>
                  <div className="team-social">
                    <div className="plus-btn">
                      <img src="assets/img/icon/share.svg" alt="" />
                    </div>
                    <div className="global-social">
                      <a href="https://www.facebook.com/" tabIndex={0}>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.linkedin.com/" tabIndex={0}>
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="https://www.twitter.com/" tabIndex={0}>
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <img src="assets/img/icon/share2.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-card_content">
                  <h4 className="team-card_title">
                    <a href="team-details.html">Javed Tanvir</a>
                  </h4>
                  <span className="team-card_desig">
                    Strategic Solutions Pro
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="team-card">
                <div className="team-card_wrapp">
                  <div className="team-card_img">
                    <img src="assets/img/team/team-1-4.png" alt="img" />
                  </div>
                  <div className="team-social">
                    <div className="plus-btn">
                      <img src="assets/img/icon/share.svg" alt="" />
                    </div>
                    <div className="global-social">
                      <a href="https://www.facebook.com/" tabIndex={0}>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.linkedin.com/" tabIndex={0}>
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="https://www.twitter.com/" tabIndex={0}>
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <img src="assets/img/icon/share2.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-card_content">
                  <h4 className="team-card_title">
                    <a href="team-details.html">Nafiz Islam</a>
                  </h4>
                  <span className="team-card_desig">Growth Catalyst</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="team-card">
                <div className="team-card_wrapp">
                  <div className="team-card_img">
                    <img src="assets/img/team/team-1-1.png" alt="img" />
                  </div>
                  <div className="team-social">
                    <div className="plus-btn">
                      <img src="assets/img/icon/share.svg" alt="" />
                    </div>
                    <div className="global-social">
                      <a href="https://www.facebook.com/" tabIndex={0}>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.linkedin.com/" tabIndex={0}>
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="https://www.twitter.com/" tabIndex={0}>
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <img src="assets/img/icon/share2.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-card_content">
                  <h4 className="team-card_title">
                    <a href="team-details.html">Darrell Steward</a>
                  </h4>
                  <span className="team-card_desig">Human Resource</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="icon-box">
          <button
            data-slick-prev=".team-slider2"
            className="team-slider2 slick-arrow style2 default team-slider2-prev"
          >
            <i className="fas fa-arrow-left" />
          </button>
          <button
            data-slick-next=".team-slider2"
            className="slick-arrow style2 default team-slider2-next"
          >
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamOne;
