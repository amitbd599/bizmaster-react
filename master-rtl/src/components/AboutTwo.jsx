import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
const AboutTwo = () => {
  return (
    <div className="space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="title-area mb-30">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                حولنا
              </span>
              <h2 className="sec-title style2">
                تعظيم من خلال الاستراتيجية{" "}
              </h2>
              <p className="sec-text">
                لوريم إيبسوم هو ببساطة نموذج نصي لصناعة الطباعة والتنضيد
                لوريم إيبسوم كان النص القياسي للصناعة منذ القرن الخامس عشر
              </p>
            </div>
            <div className="checklist">
              <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  الأخطاء التي يجب تجنبها في الطباعة الوهمية.
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  صناعتك الناشئة معيار لوريام ساوم.
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  عرفت عن خطوط النص في الطباعة.{" "}
                </li>
              </ul>
            </div>
            <p className="about-desc">
              لوريم إيبسوم هو ببساطة نص عباري غير حقيقي من صناعة الطباعة والتنضيد
            </p>
            <div className="btn-group">
              <Link to="/about" className="global-btn style2">
                استكشاف المزيد <img src="assets/img/icon/right-icon.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-thumb2">
              <div className="about-img-1">
                <img src="assets/img/normal/about_2-1.jpg" alt="img" />
              </div>
              <div className="about-img-2">
                <img src="assets/img/normal/about_2-2.png" alt="img" />
              </div>
              <div className="about-counter-wrap">
                <div className="about-icon">
                  <img src="assets/img/icon/about_icon2-1.svg" alt="img" />
                  <div>
                    <h3 className="about-counter">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter-number">
                              <CountUp delay={0} start={0} end={6} />
                              k+
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h3>
                    <h4 className="about-counter-text">عملاء</h4>
                  </div>
                </div>
                <p className="sec-desc">
                  لوريم إيبسوم هو ببساطة نص عباري غير حقيقي
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AboutTwo;
