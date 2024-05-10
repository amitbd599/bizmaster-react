import React from "react";
import { Link } from "react-router-dom";

const HeroOne = () => {
  return (
    <div
      className="hero-wrapper bg-smoke hero-1"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero_bg_1_1.png)" }}
    >
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6">
            <div className="hero-style1">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                تسارع النمو
              </span>
              <h1 className="hero-title">
                تحويل عملك إلىتسارع النمو في العصر مهنة تسارع النمو في العصرة
              </h1>
              <p className="hero-text">
                الاستشاري التجاري هو محترف يقدم نصائح وإرشادات خبراء للشركات في مجالات مختلفة
              </p>
              <div className="btn-group">
                <Link to="/about" className="global-btn">
                  تعلم المزيد <img src="assets/img/icon/right-icon.svg" alt="" />
                </Link>
                <Link to="/service" className="global-btn style-border">
                  خدماتنا
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="hero-image-wrapp">
              <div className="hero-thumb text-center">
                <img src="assets/img/hero/hero_thumb_1_1.png" alt="img" />
              </div>
              <div className="hero-shape1" />
              <div className="hero-shape2" />
              <div className="hero-shape3" />
              <div className="hero-shape4" />
              <div className="hero-shape5 spin" />
            </div>
          </div>
        </div>
        <div className="hero-item-content">
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
            <div className="hero-card">
              <div className="hero-card_icon">
                <img src="assets/img/icon/2.svg" alt="img" />
              </div>
              <div className="hero-card_content">
                <h4 className="box-title">تسارع النمو</h4>
                <p className="hero-card_text">المستشار المحترف</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HeroOne;
