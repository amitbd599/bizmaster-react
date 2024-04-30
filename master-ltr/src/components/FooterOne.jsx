import React from "react";

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
                  <a href="index.html">
                    <img src="assets/img/logo-white.svg" alt="Bizmaster" />
                  </a>
                </div>
                <p className="footer-text mb-30">
                  Many desktop ublishing packages web page editors no Lorem
                  Ipsum a default model text, and a search for
                </p>
                <div className="social-btn style3">
                  <a href="https://www.instagram.com/" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://linkedin.com/" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="https://twitter.com/" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://facebook.com/" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Useful Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="service.html">Software Corner</a>
                    </li>
                    <li>
                      <a href="service.html">Application Center</a>
                    </li>
                    <li>
                      <a href="service.html">Research Section</a>
                    </li>
                    <li>
                      <a href="service.html">Developing Corner</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget me-xl-3">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <i className="fas fa-phone-alt" />
                    <div className="contact-grid-details">
                      <h6>
                        <a href="tel:+880123456789">+880 123 45 67 89</a>
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <i className="fas fa-envelope" />
                    <div className="contact-grid-details">
                      <h6>
                        <a href="mailto:yourmail@gmail.comm">
                          yourmail@gmail.com
                        </a>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <i className="fas fa-map-marker-alt" />
                    <div className="contact-grid-details">
                      <h6>
                        1212, Lav Vegas, The Veg Street, USA
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
                © <a href="#">Yoursitename </a> 2024 | All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <a href="contact.html">Privacy</a>
                <a href="contact.html">Terms</a>
                <a href="contact.html">Sitemap</a>
                <a href="contact.html">Help</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
