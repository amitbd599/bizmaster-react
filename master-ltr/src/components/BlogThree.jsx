import React from "react";

const BlogThree = () => {
  return (
    <section className="blog-area-1 space">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                Latest Blog
              </span>
              <h2 className="sec-title style2">
                Strategies Tailored to Elevate
              </h2>
            </div>
          </div>
          <div className="col-lg-auto align-self-end">
            <div className="icon-box mb-60">
              <button
                data-slick-prev=".blog-slider3"
                className="slick-arrow default"
              >
                <i className="fas fa-arrow-left" />
              </button>
              <button
                data-slick-next=".blog-slider3"
                className="slick-arrow default"
              >
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <div
          className="row global-carousel blog-slider3 slider-shadow"
          data-slide-show={3}
          data-lg-slide-show={2}
          data-md-slide-show={1}
          data-sm-slide-show={1}
          data-xs-slide-show={1}
          data-dots="false"
        >
          <div className="col-md-6 col-lg-4">
            <div className="blog-card style2">
              <div className="blog-img">
                <img src="assets/img/blog/blog_s1_1.png" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    October 19, 2022
                  </a>
                  <a href="blog.html">
                    <i className="fas fa-user" />
                    Admin
                  </a>
                </div>
                <h3 className="blog-title">
                  <a href="blog-details.html">
                    Transformation Strategy Advisors Operat
                  </a>
                </h3>
                <a
                  className="global-btn style-border4"
                  href="blog-details.html"
                >
                  Read More <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-card style2">
              <div className="blog-img">
                <img src="assets/img/blog/blog_s1_2.png" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    October 19, 2022
                  </a>
                  <a href="blog.html">
                    <i className="fas fa-user" />
                    Admin
                  </a>
                </div>
                <h3 className="blog-title">
                  <a href="blog-details.html">
                    Hard Work Always Brings You Success
                  </a>
                </h3>
                <a
                  className="global-btn style-border4"
                  href="blog-details.html"
                >
                  Read More <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-card style2">
              <div className="blog-img">
                <img src="assets/img/blog/blog_s1_3.png" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    October 19, 2022
                  </a>
                  <a href="blog.html">
                    <i className="fas fa-user" />
                    Admin
                  </a>
                </div>
                <h3 className="blog-title">
                  <a href="blog-details.html">
                    Growth and Innovation the Consultants
                  </a>
                </h3>
                <a
                  className="global-btn style-border4"
                  href="blog-details.html"
                >
                  Read More <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-card style2">
              <div className="blog-img">
                <img src="assets/img/blog/blog_s1_1.png" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="fas fa-calendar-alt" />
                    October 19, 2022
                  </a>
                  <a href="blog.html">
                    <i className="fas fa-user" />
                    Admin
                  </a>
                </div>
                <h3 className="blog-title">
                  <a href="blog-details.html">
                    Hard Work Always Brings You Success
                  </a>
                </h3>
                <a
                  className="global-btn style-border4"
                  href="blog-details.html"
                >
                  Read More <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogThree;
