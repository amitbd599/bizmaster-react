import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const CTA_One = () => {
  return (
    <div className="cta-area-1 space-bottom">
      <div className="container">
        <div className="cta-wrap1">
          <div className="row gy-4 justify-content-md-between align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="title-area mb-md-0">
                <h2 className="sec-title style2 ">لنقم بعظيم!</h2>
                <p className="cta-desc text-white mb-0">
                  الأمر ultrices porttitor يعمل عندما يكون هناك اهتمام mi molestie
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="client-box mb-sm-0 mb-5">
                <div className="client-thumb">
                  <div className="client-thumb-group">
                    <div className="thumb">
                      <img
                        src="assets/img/client/client-img-1-1.png"
                        alt="avater"
                      />
                    </div>
                    <div className="thumb">
                      <img
                        src="assets/img/client/client-img-1-2.png"
                        alt="avater"
                      />
                    </div>
                    <div className="thumb">
                      <img
                        src="assets/img/client/client-img-1-3.png"
                        alt="avater"
                      />
                    </div>
                    <div className="thumb icon">
                      <i className="fas fa-plus" />
                    </div>
                  </div>
                  <div className="client-box-content">
                    <h4 className="cilent-box_counter">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter-number">
                              <CountUp delay={0} start={0} end={200} />
                              <span> ألف</span>
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h4>
                    <span className="cilent-box_title">عملاء في جميع أنحاء العالم</span>
                  </div>
                </div>
                <div className="cta-btn">
                  <Link className="global-btn style-border" to="/contact">
                    اتصل بنا
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CTA_One;
