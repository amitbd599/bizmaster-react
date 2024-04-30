import React from "react";
import Marquee from "react-fast-marquee";
const MarqueeOne = () => {
  return (
    <div className="marquee-area bg-smoke">
      <div className="container-fluid p-0 overflow-hidden">
        <div className="slider__marquee">
          <div className="marquee_mode">
            <Marquee speed={100}>
              <div className="item">
                <a href="#">
                  <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                  <span className="text-stroke">Breaking Barriers</span>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                  <span>Constructing Excellence</span>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                  <span className="text-stroke">Breaking Barriers</span>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                  <span>Constructing Excellence </span>
                </a>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeOne;
