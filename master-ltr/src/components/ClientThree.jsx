import React from 'react'
import Slider from "react-slick";
const ClientThree = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <section className='bg-dark2'>
            <div className="client-area-4 space">
                <div className="shadow-shape-right" />
                <div className="container">
                    <div
                        className="row gx-90 d-flex justify-content-between global-carousel"

                    >
                        <Slider {...settings}>
                            <div className="px-3">
                                <div className="client-logo">
                                    <a href="index.html">
                                        <img src="assets/img/client/4-1.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="client-logo">
                                    <a href="index.html">
                                        <img src="assets/img/client/4-2.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="client-logo">
                                    <a href="index.html">
                                        <img src="assets/img/client/4-3.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="client-logo">
                                    <a href="index.html">
                                        <img src="assets/img/client/4-4.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="client-logo">
                                    <a href="index.html">
                                        <img src="assets/img/client/4-5.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="client-logo">
                                    <a href="index.html">
                                        <img src="assets/img/client/4-1.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="client-logo">
                                    <a href="index.html">
                                        <img src="assets/img/client/4-2.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="client-logo">
                                    <a href="index.html">
                                        <img src="assets/img/client/4-3.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="client-logo">
                                    <a href="index.html">
                                        <img src="assets/img/client/4-4.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="client-logo">
                                    <a href="index.html">
                                        <img src="assets/img/client/4-5.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ClientThree