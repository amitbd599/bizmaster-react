import React from "react";

const ServiceOne = () => {
  return (
    <div className="service-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Latest service
              </span>
              <h2 className="sec-title style2">
                Empowering Business The Excellence
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
                  <a href="service-details.html">Efficiency Experts</a>
                </h4>
                <p className="service-card_text">
                  Many desktop publishing packages web page editors now use
                  Lorem Ipsum a default model text, and a search
                </p>
                <a href="service-details.html" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </a>
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
                  <a href="service-details.html">Management Mastery</a>
                </h4>
                <p className="service-card_text">
                  Many desktop publishing packages web page editors now use
                  Lorem Ipsum a default model text, and a search
                </p>
                <a href="service-details.html" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </a>
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
                  <a href="service-details.html">Success Accelerators</a>
                </h4>
                <p className="service-card_text">
                  Many desktop publishing packages web page editors now use
                  Lorem Ipsum a default model text, and a search
                </p>
                <a href="service-details.html" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </a>
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
                  <a href="service-details.html">Growth and Innovation</a>
                </h4>
                <p className="service-card_text">
                  Many desktop publishing packages web page editors now use
                  Lorem Ipsum a default model text, and a search
                </p>
                <a href="service-details.html" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
