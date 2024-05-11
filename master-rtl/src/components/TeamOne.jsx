import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const TeamOne = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="TeamOne-icon-box-next">
        <button
          onClick={onClick}
          className="slick-arrow style2 default team-slider2-next"
        >
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="TeamOne-icon-box-prev">
        <button
          onClick={onClick}
          className="team-slider2 slick-arrow style2 default team-slider2-prev"
        >
          <i className="fas fa-arrow-left" />
        </button>
      </div>
    );
  }
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="team-area-1 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                فريقنا
              </span>
              <h2 className="sec-title">الممرات المتاحة للمهندس الممرات المتاحة للمهندس
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row gx-30 global-carousel team-slider2">
        <Slider {...settings}>
          <div className="p-2">
            <div className="team-card">
              <div className="team-card_wrapp">
                <div className="team-card_img">
                  <img src="assets/img/team/team-1-1.png" alt="img" />
                </div>
                <div className="team-social">
                  <div className="plus-btn">
                    <img src="assets/img/icon/share.svg" alt="" />
                  </div>
                  <div className="global-social">
                    <Link to="/https://www.facebook.com/" tabIndex={0}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="/https://www.linkedin.com/" tabIndex={0}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link to="/https://www.twitter.com/" tabIndex={0}>
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <img src="assets/img/icon/share2.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">داريل ستيوارت</Link>
                </h4>
                <span className="team-card_desig">موارد بشرية</span>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="team-card">
              <div className="team-card_wrapp">
                <div className="team-card_img">
                  <img src="assets/img/team/team-1-2.png" alt="img" />
                </div>
                <div className="team-social">
                  <div className="plus-btn">
                    <img src="assets/img/icon/share.svg" alt="" />
                  </div>
                  <div className="global-social">
                    <Link to="/https://www.facebook.com/" tabIndex={0}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="/https://www.linkedin.com/" tabIndex={0}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link to="/https://www.twitter.com/" tabIndex={0}>
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <img src="assets/img/icon/share2.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">فهد حسين</Link>
                </h4>
                <span className="team-card_desig">خبراء الكفاءة</span>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="team-card">
              <div className="team-card_wrapp">
                <div className="team-card_img">
                  <img src="assets/img/team/team-1-3.png" alt="img" />
                </div>
                <div className="team-social">
                  <div className="plus-btn">
                    <img src="assets/img/icon/share.svg" alt="" />
                  </div>
                  <div className="global-social">
                    <Link to="/https://www.facebook.com/" tabIndex={0}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="/https://www.linkedin.com/" tabIndex={0}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link to="/https://www.twitter.com/" tabIndex={0}>
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <img src="assets/img/icon/share2.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">جاويد تنوير</Link>
                </h4>
                <span className="team-card_desig">محترف حلول استراتيجية</span>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="team-card">
              <div className="team-card_wrapp">
                <div className="team-card_img">
                  <img src="assets/img/team/team-1-4.png" alt="img" />
                </div>
                <div className="team-social">
                  <div className="plus-btn">
                    <img src="assets/img/icon/share.svg" alt="" />
                  </div>
                  <div className="global-social">
                    <Link to="/https://www.facebook.com/" tabIndex={0}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="/https://www.linkedin.com/" tabIndex={0}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link to="/https://www.twitter.com/" tabIndex={0}>
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <img src="assets/img/icon/share2.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">نافذ اسلام</Link>
                </h4>
                <span className="team-card_desig">محفز النمو</span>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="team-card">
              <div className="team-card_wrapp">
                <div className="team-card_img">
                  <img src="assets/img/team/team-1-1.png" alt="img" />
                </div>
                <div className="team-social">
                  <div className="plus-btn">
                    <img src="assets/img/icon/share.svg" alt="" />
                  </div>
                  <div className="global-social">
                    <Link to="/https://www.facebook.com/" tabIndex={0}>
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="/https://www.linkedin.com/" tabIndex={0}>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link to="/https://www.twitter.com/" tabIndex={0}>
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <img src="assets/img/icon/share2.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">داريل ستيوارت</Link>
                </h4>
                <span className="team-card_desig">موارد بشرية</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>

  );
};

export default TeamOne;
