import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade, Autoplay } from "swiper";

const TestimonialOne = () => {
  return (
    <div className="testimonial-area-1 space-bottom overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="title-area">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Clients Testimoniall
              </span>
              <h2 className="sec-title style2">
                Your Business Goals a Confidence
              </h2>
            </div>
            <div className="testimonial-thumb1">
              <img src="assets/img/testimonial/testimonial-1-1.png" alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="title-area">
              <p className="testi-desc">
                Dictum ultrices porttitor amet nec sollicitudin mi molestie
                adipiscing netus. Lorem at ac ut morbi ullamcorper molestie
                lacus loren ipsum dummy text provide happy
              </p>
            </div>
            <div className="testi-area-slider">
              <div className="row global-carousel testi-slider-1">
                <Swiper
                  navigation={{
                    nextEl: ".team-slider2-next",
                    prevEl: ".team-slider2-prev",
                  }}
                  spaceBetween={30}
                  loop={true}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  speed={1000}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 6000 }}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                >
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <p className="testi-card_text">
                            Roofing is the process of installin repai, and
                            maintaining roofs on buildings. It involves various
                            materials such shil tiles,metal, and membranes.
                            Roofing services may include inspections repairs,
                            waterproofing, and installation of new roofs. Proper
                            roofing is crucial for protecting
                          </p>
                          <div className="testi-card-profile">
                            <div className="testi-profile_thumb">
                              <img
                                src="assets/img/testimonial/testi-thumb_1.png"
                                alt="img"
                              />
                            </div>
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">
                                Michael Ramirez
                              </h4>
                              <span className="testi-profile-desig">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="quote-icon">
                          <img src="assets/img/icon/quote1-1.svg" alt="img" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <p className="testi-card_text">
                            Roofing is the process of installin repai, and
                            maintaining roofs on buildings. It involves various
                            materials such shil tiles,metal, and membranes.
                            Roofing services may include inspections repairs,
                            waterproofing, and installation of new roofs. Proper
                            roofing is crucial for protecting
                          </p>
                          <div className="testi-card-profile">
                            <div className="testi-profile_thumb">
                              <img
                                src="assets/img/testimonial/testi-thumb_2.png"
                                alt="img"
                              />
                            </div>
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">
                                Starli shaine
                              </h4>
                              <span className="testi-profile-desig">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="quote-icon">
                          <img src="assets/img/icon/quote1-1.svg" alt="img" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <p className="testi-card_text">
                            Roofing is the process of installin repai, and
                            maintaining roofs on buildings. It involves various
                            materials such shil tiles,metal, and membranes.
                            Roofing services may include inspections repairs,
                            waterproofing, and installation of new roofs. Proper
                            roofing is crucial for protecting
                          </p>
                          <div className="testi-card-profile">
                            <div className="testi-profile_thumb">
                              <img
                                src="assets/img/testimonial/testi-thumb_1.png"
                                alt="img"
                              />
                            </div>
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">
                                Michael Ramirez
                              </h4>
                              <span className="testi-profile-desig">
                                Marketing Manager
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="quote-icon">
                          <img src="assets/img/icon/quote1-1.svg" alt="img" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              {/* Icon box */}
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
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
