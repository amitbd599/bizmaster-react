import React from "react";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg1-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-5">
              <div className="widget footer-widget widget-about">
                <div className="about-logo">
                  <Link to="/">
                    <img src="assets/img/logo-white.svg" alt="Bizmaster" />
                  </Link>
                </div>
                <p className="footer-text mb-30">
                  العديد من حزم تحرير صفحات الويب لا عن نص شهير في المطبوعات عبارة نموذجية افتراضية ، والبحث عن
                </p>
                <div className="social-btn style3">
                  <Link to="/https://www.instagram.com/" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="/https://linkedin.com/" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="/https://twitter.com/" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="/https://facebook.com/" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">روابط مفيدة</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/service">زاوية البرمجيات</Link>
                    </li>
                    <li>
                      <Link to="/service">مركز التطبيق</Link>
                    </li>
                    <li>
                      <Link to="/service">قسم البحث</Link>
                    </li>
                    <li>
                      <Link to="/service">زاوية التطوير</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget me-xl-3">
                <h3 className="widget_title">اتصل</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <i className="fas fa-phone-alt" />
                    <div className="contact-grid-details">
                      <h6>
                        <Link to="/tel:+880123456789">+880 123 45 67 89</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <i className="fas fa-envelope" />
                    <div className="contact-grid-details">
                      <h6>
                        <Link to="/mailto:yourmail@gmail.comm">
                          yourmail@gmail.com
                        </Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <i className="fas fa-map-marker-alt" />
                    <div className="contact-grid-details">
                      <h6>
                        1212 ، لاف فيغاس ، شارع الخضار ، الولايات المتحدة الأمريكية
                        <p />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright-wrap">
          <div className="row gy-3 justify-content-lg-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="#">اسم موقعك </Link> 2024 | جميع الحقوق محفوظة
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="/contact">الخصوصية</Link>
                <Link to="/contact">الشروط</Link>
                <Link to="/contact">خريطة الموقع</Link>
                <Link to="/contact">المساعدة</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default FooterOne;
