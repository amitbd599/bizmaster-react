import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const BlogTwo = () => {
  let settings = {
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
                آخر المدونات
              </span>
              <h2 className="sec-title style2">
                تمكين الأعمال بالتميز
              </h2>
            </div>
          </div>
        </div>
        <div className="row global-carousel blog-slider slider-shadow">
          <Slider {...settings}>
            <div className="p-3" dir="rtl">
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s3_1.png" alt="blog " />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <img src="assets/img/icon/calender.svg" alt="" />
                      10 أبريل 2024
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-comments" />
                      التعليقات (05)
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      الاستراتيجية التحولية الرئيسية للمستشارين
                    </Link>
                  </h3>
                  <p className="blog-desc">
                    المتاحة للمهندس الممرات المتاحة المتاحة للمهندس الممرات المتاحة المتاحة للم
                  </p>
                  <Link
                    className="global-btn style-border"
                    to="/blog-details"
                  >
                    اقرأ المزيد{" "}
                    <img src="assets/img/icon/right-icon2.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3" dir="rtl">
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s3_2.png" alt="blog " />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <img src="assets/img/icon/calender.svg" alt="" />
                      10 أبريل 2024
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-comments" />
                      التعليقات (05)
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      السوق والاستراتيجية للمستشارين
                    </Link>
                  </h3>
                  <p className="blog-desc">
                    المتاحة للمهندس الممرات المتاحة المتاحة للمهندس الممرات المتاحة المتاحة للم
                  </p>
                  <Link
                    className="global-btn style-border"
                    to="/blog-details"
                  >
                    اقرأ المزيد{" "}
                    <img src="assets/img/icon/right-icon2.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3" dir="rtl">
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s3_3.png" alt="blog " />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <img src="assets/img/icon/calender.svg" alt="" />
                      10 أبريل 2024
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-comments" />
                      التعليقات (05)
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      تجربة العميل للمستشارين
                    </Link>
                  </h3>
                  <p className="blog-desc">
                    المتاحة للمهندس الممرات المتاحة المتاحة للمهندس الممرات المتاحة المتاحة للم
                  </p>
                  <Link
                    className="global-btn style-border"
                    to="/blog-details"
                  >
                    اقرأ المزيد{" "}
                    <img src="assets/img/icon/right-icon2.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3" dir="rtl">
              <div className="blog-box">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s3_1.png" alt="blog " />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <img src="assets/img/icon/calender.svg" alt="" />
                      10 أبريل 2024
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-comments" />
                      التعليقات (05)
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details">
                      الاستراتيجية التحولية الرئيسية للمستشارين
                    </Link>
                  </h3>
                  <p className="blog-desc">
                    المتاحة للمهندس الممرات المتاحة المتاحة للمهندس الممرات المتاحة المتاحة للم
                  </p>
                  <Link
                    className="global-btn style-border"
                    to="/blog-details"
                  >
                    اقرأ المزيد{" "}
                    <img src="assets/img/icon/right-icon2.svg" alt="" />
                  </Link>
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
