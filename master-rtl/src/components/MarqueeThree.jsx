import React from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
const MarqueeThree = () => {
    return (
        <section className='bg-dark'>
            <div className="marquee-area bg-theme2">
                <div className="container-fluid p-0 overflow-hidden">
                    <div className="slider__marquee">
                        <div className="marquee_mode">
                            <Marquee speed={100}>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                                        <span className="text-stroke">Breaking Barriers</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                                        <span>Constructing Excellence</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                                        <span className="text-stroke">Breaking Barriers</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                                        <span>Constructing Excellence </span>
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

export default MarqueeThree