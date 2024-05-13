import React from "react";
import { Link } from "react-router-dom";

const HeroThree = () => {
  return (
    <div
      className="hero-wrapper bg-smoke hero-3"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero_bg_3_1.png)" }}
    >
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-6">
            <div className="hero-image-wrapp">
              <div className="hero-thumb text-center">
                <img src="assets/img/hero/hero_thumb_3_1.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="hero-style3">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                تسارع النمو
              </span>
              <h1 className="hero-title">
                الممرات المتاح  الممرات المتاحة الممرات للمهندس                <span className="fw-normal">خبرتنا</span>
              </h1>
              <p className="hero-text">
                الممرات المتاح الممرات المتاحة الممرات المتاحة الممرات للمهندس  الممرات المتاح الممرات المتاحة الممرات المتاحة الممرات للمهندس            </p>
              <div className="btn-wrap">
                <div className="hero-card_wrapper">
                  <div className="hero-card">
                    <div className="hero-card_icon">
                      <img src="assets/img/icon/1.svg" alt="img" />
                    </div>
                    <div className="hero-card_content">
                      <h4 className="box-title">تسارع النمو</h4>
                      <p className="hero-card_text">الاستشاري التجاري</p>
                    </div>
                  </div>
                </div>
                <div className="feature-wrapper">
                  <div className="feature-icon">
                    <Link to="/tel:3195550115">
                      <img src="assets/img/icon/call.svg" alt="" />
                    </Link>
                  </div>
                  <div className="media-body">
                    <span className="header-info_label">هل تحتاج إلى مساعدة؟</span>
                    <p className="header-info_link">
                      <Link to="/tel:3195550115">(319) 555-0115</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HeroThree;
