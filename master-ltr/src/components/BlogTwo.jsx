import React from "react";
import Slider from "react-slick";
const BlogTwo = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="blog-area space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Latest Blog
              </span>
              <h2 className="sec-title style2">
                Empowering Business The Excellence
              </h2>
            </div>
          </div>
        </div>
        <div className="row global-carousel blog-slider slider-shadow">
          <Slider {...settings}>
            <div className="p-3">
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s3_1.png" alt="blog image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <img src="assets/img/icon/calender.svg" alt="" />
                      april 10, 2024
                    </a>
                    <a href="blog.html">
                      <i className="fas fa-comments" />
                      Comments (05)
                    </a>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Transformational Strategy main a Advisors
                    </a>
                  </h3>
                  <p className="blog-desc">
                    Lorem ipsum dolo consectetur. Posue sem ultrice feugiat diam
                    eleme
                  </p>
                  <a
                    className="global-btn style-border"
                    href="blog-details.html"
                  >
                    Read More{" "}
                    <img src="assets/img/icon/right-icon2.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s3_2.png" alt="blog image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <img src="assets/img/icon/calender.svg" alt="" />
                      april 10, 2024
                    </a>
                    <a href="blog.html">
                      <i className="fas fa-comments" />
                      Comments (05)
                    </a>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Market and Strategy the Consultants
                    </a>
                  </h3>
                  <p className="blog-desc">
                    Lorem ipsum dolo consectetur. Posue sem ultrice feugiat diam
                    eleme
                  </p>
                  <a
                    className="global-btn style-border"
                    href="blog-details.html"
                  >
                    Read More{" "}
                    <img src="assets/img/icon/right-icon2.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s3_3.png" alt="blog image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <img src="assets/img/icon/calender.svg" alt="" />
                      april 10, 2024
                    </a>
                    <a href="blog.html">
                      <i className="fas fa-comments" />
                      Comments (05)
                    </a>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Customer Expe the Consultants
                    </a>
                  </h3>
                  <p className="blog-desc">
                    Lorem ipsum dolo consectetur. Posue sem ultrice feugiat diam
                    eleme
                  </p>
                  <a
                    className="global-btn style-border"
                    href="blog-details.html"
                  >
                    Read More{" "}
                    <img src="assets/img/icon/right-icon2.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s3_1.png" alt="blog image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <img src="assets/img/icon/calender.svg" alt="" />
                      april 10, 2024
                    </a>
                    <a href="blog.html">
                      <i className="fas fa-comments" />
                      Comments (05)
                    </a>
                  </div>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Transformational Strategy main a Advisors
                    </a>
                  </h3>
                  <p className="blog-desc">
                    Lorem ipsum dolo consectetur. Posue sem ultrice feugiat diam
                    eleme
                  </p>
                  <a
                    className="global-btn style-border"
                    href="blog-details.html"
                  >
                    Read More{" "}
                    <img src="assets/img/icon/right-icon2.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BlogTwo;
