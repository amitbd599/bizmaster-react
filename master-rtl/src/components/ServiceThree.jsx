import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const ServiceThree = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="service-area-2 space-bottom">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-5">
            <div className="title-area">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                خدماتنا
              </span>
              <h2 className="sec-title style2">توجه إلى طريق النجاح</h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="service-title-area">
              <p className="">
                استخدم استقبال عدد متزايد من العملات واحصل على استخدم
                استقبال عدد متزايد من العملات واحصل على المدفوعات مثل
                designpaid
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row gx-30 global-carousel service-slider2">
          <Slider {...settings}>
            <div className="p-3" dir="rtl">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-1.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/service-details">حلول استراتيجية احترافية</Link>
                  </h4>
                  <p className="service-box_text">
                    استخدم استقبال الحساب المتزايد عدد العملات واحصل على الدفع
                    مثل
                  </p>
                  <Link
                    to="/service-details"
                    className="global-btn style-border"
                  >
                    اقرأ المزيد{" "}
                    <img src="assets/img/icon/right-icon2.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3" dir="rtl">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-2.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/service-details">محفز نمو الأعمال</Link>
                  </h4>
                  <p className="service-box_text">
                    استخدم استقبال الحساب المتزايد عدد العملات واحصل على الدفع
                    مثل
                  </p>
                  <Link
                    to="/service-details"
                    className="global-btn style-border"
                  >
                    اقرأ المزيد
                    <img src="assets/img/icon/right-icon2.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3" dir="rtl">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-3.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/service-details">معززو الربحية</Link>
                  </h4>
                  <p className="service-box_text">
                    استخدم استقبال الحساب المتزايد عدد العملات واحصل على الدفع
                    مثل
                  </p>
                  <Link
                    to="/service-details"
                    className="global-btn style-border"
                  >
                    اقرأ المزيد
                    <img src="assets/img/icon/right-icon2.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3" dir="rtl">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-4.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/service-details">خبراء الكفاءة</Link>
                  </h4>
                  <p className="service-box_text">
                    استخدم استقبال الحساب المتزايد عدد العملات واحصل على الدفع
                    مثل
                  </p>
                  <Link
                    to="/service-details"
                    className="global-btn style-border"
                  >
                    اقرأ المزيد
                    <img src="assets/img/icon/right-icon2.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3" dir="rtl">
              <div className="service-box">
                <div className="service-box_content">
                  <div className="service-box_icon">
                    <img src="assets/img/icon/service-icon_1-1.svg" alt="img" />
                  </div>
                  <h4 className="service-box_title h5">
                    <Link to="/service-details">حلول استراتيجية احترافية</Link>
                  </h4>
                  <p className="service-box_text">
                    استخدم استقبال الحساب المتزايد عدد العملات واحصل على الدفع
                    مثل
                  </p>
                  <Link
                    to="/service-details"
                    className="global-btn style-border"
                  >
                    اقرأ المزيد
                    <img src="assets/img/icon/right-icon2.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>

  );
};

export default ServiceThree;
