import React from "react";

const CTA_One = () => {
  return (
    <div className="cta-area-1 space-bottom">
      <div className="container">
        <div className="cta-wrap1">
          <div className="row gy-4 justify-content-md-between align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="title-area mb-md-0">
                <h2 className="sec-title style2 ">Let’s Do Great!</h2>
                <p className="cta-desc text-white mb-0">
                  Dictum ultrices porttitor amet nec sollicitudin mi molestie
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
                      <span className="counter-number">2.8 </span> million+
                    </h4>
                    <span className="cilent-box_title">Worldwide clients</span>
                  </div>
                </div>
                <div className="cta-btn">
                  <a className="global-btn style-border" href="contact.html">
                    contact us
                  </a>
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
