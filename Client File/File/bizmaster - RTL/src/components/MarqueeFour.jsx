import React from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
const MarqueeFour = () => {
    return (
        <section className='bg-dark2'>
            <div className="marquee-area bg-theme">
                <div className="container-fluid p-0 overflow-hidden">
                    <div className="slider__marquee style2">
                        <div className="marquee_mode">
                            <Marquee speed={100}>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                                        <span className="text-stroke">كسر الحواجز</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                                        <span>بناء التميز</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                                        <span className="text-stroke">كسر الحواجز</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                                        <span>بناء التميز</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                                        <span className="text-stroke">كسر الحواجز</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                                        <span>بناء التميز</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                                        <span className="text-stroke">كسر الحواجز</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                                        <span>بناء التميز</span>
                                    </Link>
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default MarqueeFour