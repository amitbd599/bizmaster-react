import React from 'react'
import { Link } from 'react-router-dom';
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
                                    آخر المدونات
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    عانوا من التغ يير فيعانوا من التغ يير فيعا نوا من التغيير في                                </h2>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row global-carousel blog-slider5 slider-shadow"

                    >
                        <Slider {...settings}>
                            <div className="px-2" dir="rtl">
                                <div className="blog-card style4">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s5_1.png" alt=" Bizmaster" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <Link to="/blog">
                                                <i className="fas fa-user" />
                                                المسؤول
                                            </Link>
                                            <Link to="/blog">
                                                <i className="fas fa-comments" />
                                                تعليق
                                            </Link>
                                            <Link to="/blog">
                                                <i className="fas fa-calendar-alt" />
                                                19 أكتوبر 2022
                                            </Link>
                                        </div>
                                        <h3 className="blog-title">
                                            <Link to="/blog-details">
                                                التغ يير فيعا نواالتغ يير فيعا نوا التغ يير فيعا نواالتغ يير فيعا نوا</Link>
                                        </h3>
                                        <Link className="link-btn" to="/blog-details">
                                            اقرأ المزيد <i className="fas fa-arrow-left ms-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2" dir="rtl">
                                <div className="blog-card style4">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s5_2.png" alt=" Bizmaster" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <Link to="/blog">
                                                <i className="fas fa-user" />
                                                المسؤول
                                            </Link>
                                            <Link to="/blog">
                                                <i className="fas fa-comments" />
                                                تعليق
                                            </Link>
                                            <Link to="/blog">
                                                <i className="fas fa-calendar-alt" />
                                                19 أكتوبر 2022
                                            </Link>
                                        </div>
                                        <h3 className="blog-title">
                                            <Link to="/blog-details">
                                                التغ يير فيعا نواالتغ يير فيعا نوا التغ يير فيعا نواالتغ يير فيعا نوا</Link>
                                        </h3>
                                        <Link className="link-btn" to="/blog-details">
                                            اقرأ المزيد <i className="fas fa-arrow-left ms-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2" dir="rtl">
                                <div className="blog-card style4">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s5_3.png" alt=" Bizmaster" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <Link to="/blog">
                                                <i className="fas fa-user" />
                                                المسؤول
                                            </Link>
                                            <Link to="/blog">
                                                <i className="fas fa-comments" />
                                                تعليق
                                            </Link>
                                            <Link to="/blog">
                                                <i className="fas fa-calendar-alt" />
                                                19 أكتوبر 2022
                                            </Link>
                                        </div>
                                        <h3 className="blog-title">
                                            <Link to="/blog-details">
                                                التغ يير فيعا نواالتغ يير فيعا نوا التغ يير فيعا نواالتغ يير فيعا نوا</Link>
                                        </h3>
                                        <Link className="link-btn" to="/blog-details">
                                            اقرأ المزيد <i className="fas fa-arrow-left ms-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2" dir="rtl">
                                <div className="blog-card style4">
                                    <div className="blog-img">
                                        <img src="assets/img/blog/blog_s5_2.png" alt=" Bizmaster" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <Link to="/blog">
                                                <i className="fas fa-user" />
                                                المسؤول
                                            </Link>
                                            <Link to="/blog">
                                                <i className="fas fa-comments" />
                                                تعليق
                                            </Link>
                                            <Link to="/blog">
                                                <i className="fas fa-calendar-alt" />
                                                19 أكتوبر 2022
                                            </Link>
                                        </div>
                                        <h3 className="blog-title">
                                            <Link to="/blog-details">
                                                التغ يير فيعا نواالتغ يير فيعا نوا التغ يير فيعا نواالتغ يير فيعا نوا</Link>
                                        </h3>
                                        <Link className="link-btn" to="/blog-details">
                                            اقرأ المزيد <i className="fas fa-arrow-left ms-2" />
                                        </Link>
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