import React from "react";
import { Link } from "react-router-dom";

const ServiceOne = () => {
  return (
    <div className="service-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                أحدث الخدمات
              </span>
              <h2 className="sec-title style2">
                تمكين الأعمال للتميز
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gx-30 gy-30 justify-content-center">
          <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-1.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">خبراء الكفاءة</Link>
                </h4>
                <p className="service-card_text">
                  العديد من حزم تحرير صفحات الويب الآن تستخدم Lorem Ipsum كنموذج نص افتراضي، وبحثًا
                </p>
                <Link to="/service-details" className="link-btn">
                  قراءة المزيد <i className="fas fa-arrow-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-2.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">إتقان الإدارة</Link>
                </h4>
                <p className="service-card_text">
                  العديد من حزم تحرير صفحات الويب الآن تستخدم Lorem Ipsum كنموذج نص افتراضي، وبحثًا
                </p>
                <Link to="/service-details" className="link-btn">
                  قراءة المزيد <i className="fas fa-arrow-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-3.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">مسرعات النجاح</Link>
                </h4>
                <p className="service-card_text">
                  العديد من حزم تحرير صفحات الويب الآن تستخدم Lorem Ipsum كنموذج نص افتراضي، وبحثًا
                </p>
                <Link to="/service-details" className="link-btn">
                  قراءة المزيد <i className="fas fa-arrow-left" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card">
              <div className="service-card_img">
                <img src="assets/img/service/service-1-4.jpg" alt="img" />
              </div>
              <div className="service-card_content">
                <h4 className="service-card_title">
                  <Link to="/service-details">النمو والابتكار</Link>
                </h4>
                <p className="service-card_text">
                  العديد من حزم تحرير صفحات الويب الآن تستخدم Lorem Ipsum كنموذج نص افتراضي، وبحثًا
                </p>
                <Link to="/service-details" className="link-btn">
                  قراءة المزيد <i className="fas fa-arrow-left" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ServiceOne;
