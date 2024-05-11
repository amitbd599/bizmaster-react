import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer
      className="footer-wrapper footer-layout2"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg2-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <div className="about-logo">
                  <Link to="/">
                    <img src="assets/img/logo.svg" alt="Bizmaster" />
                  </Link>
                </div>
                <p className="footer-text mb-30">
                  لوريم إيبسوم دولور آميت، كونسيكتيتور سيل أديبيس إليت فيز
                  فاسيليس
                </p>
                <div className="social-btn style3">
                  <span className="social-title">تابعنا</span>
                  <Link to="/https://facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="/https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="/https://linkedin.com/">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="/https://twitter.com/">
                    <i className="fab fa-twitter" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <h3 className="widget_title">اتصل بنا</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-grid-details">
                      <h6>
                        <Link to="/mailto:infoname@mail.com">
                          debra.holt@example.com
                        </Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <h6>
                        3891 Ranchview Dr. Richardson, California 62639
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="working-time">
                      <span className="title">ساعات العمل</span>
                      <p className="desc">
                        نحن مفتوحون من الاثنين إلى الجمعة من الساعة 09:00 صباحًا حتى الساعة 05:00 مساءً
                      </p>
                    </div>
                  </div>
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
                      <Link to="/service">مركز التطبيقات</Link>
                    </li>
                    <li>
                      <Link to="/service">قسم الأبحاث</Link>
                    </li>
                    <li>
                      <Link to="/service">زاوية التطوير</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">آخر معرض</h3>
                <ul className="side-instagram list-wrap">
                  <li>
                    <Link to="#">
                      <img src="assets/img/gallery/1.jpg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="assets/img/gallery/2.jpg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="assets/img/gallery/3.jpg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="assets/img/gallery/4.jpg" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-lg-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="#">اسم موقعك</Link> 2024 | جميع الحقوق محفوظة
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="/contact">الشروط والأحكام</Link>
                <Link to="/contact">سياسة الخصوصية</Link>
                <Link to="/contact">اتصل بنا</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default FooterTwo;
