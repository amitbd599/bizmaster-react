import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";

const BlogOne = () => {
  return (
    <>
      <section className="blog-area-1 space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  Latest Blog
                </span>
                <h2 className="sec-title">
                  Strategic Solutions for Business Growth
                </h2>
              </div>
            </div>
          </div>
          <div className="row global-carousel blog-slider slider-shadow">
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
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s1_1.png" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Transformation Strategy Advisors Operat
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s1_2.png" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Hard Work Always Brings You Success
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s1_3.png" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Growth and Innovation the Consultants
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s1_1.png" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Transformation Strategy Advisors Operat
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s1_1.png" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Transformation Strategy Advisors Operat
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s1_2.png" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Hard Work Always Brings You Success
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s1_3.png" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Growth and Innovation the Consultants
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s1_1.png" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Transformation Strategy Advisors Operat
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="footer-top-1 bg-theme">
          <div className="footer-top-content">
            <h3 className="footer-top-title text-white">Newsletter</h3>
            <p className="footer-top-text">
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>
          <form className="newsletter-form">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email Address"
                required=""
              />
              <button type="submit" className="global-btn">
                Subscribe
                <span className="icon">
                  <i className="fa-sharp fas fa-paper-plane ms-2" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogOne;
