import React from 'react'
import Slider from "react-slick";
const BlogFive = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
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
        <section className='bg-dark2'>
            <section className="blog-area-4 space position-relative">
                <div className="shadow-shape-left" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="title-area text-center">
                                <span className="sub-title style2">
                                    <img src="assets/img/icon/title_left2.svg" alt="shape" />
                                    Latest Blog
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    Strategic Solutions for Business Growth{" "}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row global-carousel blog-slider5 slider-shadow"

                    >
                        <Slider {...settings}>
                            <div className="px-2">
                                <div className="blog-card style4">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s5_1.png" alt="blog image" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <a href="blog.html">
                                                <i className="fas fa-user" />
                                                Admin
                                            </a>
                                            <a href="blog.html">
                                                <i className="fas fa-comments" />
                                                Comment
                                            </a>
                                            <a href="blog.html">
                                                <i className="fas fa-calendar-alt" />
                                                October 19, 2022
                                            </a>
                                        </div>
                                        <h3 className="blog-title">
                                            <a href="blog-details.html">
                                                Transformation Strategy Advisors Operat
                                            </a>
                                        </h3>
                                        <a className="link-btn" href="blog-details.html">
                                            Read More <i className="fas fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="blog-card style4">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s5_2.png" alt="blog image" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <a href="blog.html">
                                                <i className="fas fa-user" />
                                                Admin
                                            </a>
                                            <a href="blog.html">
                                                <i className="fas fa-comments" />
                                                Comment
                                            </a>
                                            <a href="blog.html">
                                                <i className="fas fa-calendar-alt" />
                                                October 19, 2022
                                            </a>
                                        </div>
                                        <h3 className="blog-title">
                                            <a href="blog-details.html">
                                                Hard Work Always Brings You Success
                                            </a>
                                        </h3>
                                        <a className="link-btn" href="blog-details.html">
                                            Read More <i className="fas fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="blog-card style4">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s5_3.png" alt="blog image" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <a href="blog.html">
                                                <i className="fas fa-user" />
                                                Admin
                                            </a>
                                            <a href="blog.html">
                                                <i className="fas fa-comments" />
                                                Comment
                                            </a>
                                            <a href="blog.html">
                                                <i className="fas fa-calendar-alt" />
                                                October 19, 2022
                                            </a>
                                        </div>
                                        <h3 className="blog-title">
                                            <a href="blog-details.html">
                                                Growth and Innovation the Consultants
                                            </a>
                                        </h3>
                                        <a className="link-btn" href="blog-details.html">
                                            Read More <i className="fas fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="blog-card style4">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s5_2.png" alt="blog image" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <a href="blog.html">
                                                <i className="fas fa-user" />
                                                Admin
                                            </a>
                                            <a href="blog.html">
                                                <i className="fas fa-comments" />
                                                Comment
                                            </a>
                                            <a href="blog.html">
                                                <i className="fas fa-calendar-alt" />
                                                October 19, 2022
                                            </a>
                                        </div>
                                        <h3 className="blog-title">
                                            <a href="blog-details.html">
                                                Hard Work Always Brings You Success
                                            </a>
                                        </h3>
                                        <a className="link-btn" href="blog-details.html">
                                            Read More <i className="fas fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default BlogFive