import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BlogOne = () => {
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
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="blog-area-1 space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  أحدث المدونات
                </span>
                <h2 className="sec-title">
                  الحلول الاستراتيجية لنمو الأعمال
                </h2>
              </div>
            </div>
          </div>
          <div className="row global-carousel blog-slider slider-shadow">
            <Slider {...settings}>
              <div className="blog-card p-3" dir="rtl">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s1_1.png" alt="صورة المدونة" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="fas fa-user" />
                      بواسطة المسؤول
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-comments" />
                      تعليقات
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details"> المتاحة للمهندس الممرات الممرات المتاحة للمهندس الممرات</Link>
                  </h3>
                </div>
              </div>

              <div className="blog-card p-3" dir="rtl">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s1_2.png" alt="صورة المدونة" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="fas fa-user" />
                      بواسطة المسؤول
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-comments" />
                      تعليقات
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details"> المتاحة للمهندس الممرات الممرات المتاحة للمهندس الممرات</Link>
                  </h3>
                </div>
              </div>

              <div className="blog-card p-3" dir="rtl">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s1_3.png" alt="صورة المدونة" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="fas fa-user" />
                      بواسطة المسؤول
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-comments" />
                      تعليقات
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details"> المتاحة للمهندس الممرات الممرات المتاحة للمهندس الممرات</Link>
                  </h3>
                </div>
              </div>

              <div className="blog-card p-3" dir="rtl">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_s1_1.png" alt="صورة المدونة" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="fas fa-user" />
                      بواسطة المسؤول
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-comments" />
                      تعليقات
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link to="/blog-details"> المتاحة للمهندس الممرات الممرات المتاحة للمهندس الممرات</Link>
                  </h3>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="footer-top-1 bg-theme">
          <div className="footer-top-content">
            <h3 className="footer-top-title text-white">النشرة الإخبارية</h3>
            <p className="footer-top-text">
              لوريم إيبسوم هو نص عبارة عن نص شهير في المطبوعات
            </p>
          </div>
          <form className="newsletter-form">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="عنوان البريد الإلكتروني"
                required=""
              />
              <button type="submit" className="global-btn">
                اشتراك
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
