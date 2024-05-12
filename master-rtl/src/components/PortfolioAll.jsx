import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioAll = () => {
    return (
        <div className="portfolio-area-1 space">
            <div className="container">
                <div className="row gx-30 gy-60">
                    <div className="col-lg-6">
                        <div className="portfolio-card">
                            <div className="portfolio-card-thumb">
                                <img src="assets/img/portfolio/1-5.png" alt="img" />
                            </div>
                            <div className="portfolio-card-details">
                                <div className="media-left">
                                    <span className="portfolio-card-details_subtitle">
                                        مدربو التطوير
                                    </span>
                                    <h4 className="portfolio-card-details_title">
                                        <Link to="/project-details">
                                            مستشارو التحول الرقمي
                                        </Link>
                                    </h4>
                                </div>
                                <Link to="/project-details" className="icon-btn">
                                    <img src="assets/img/icon/arrow-up-right.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="portfolio-card">
                            <div className="portfolio-card-thumb">
                                <img src="assets/img/portfolio/1-6.png" alt="img" />
                            </div>
                            <div className="portfolio-card-details">
                                <div className="media-left">
                                    <span className="portfolio-card-details_subtitle">
                                        مسرعو النجاح
                                    </span>
                                    <h4 className="portfolio-card-details_title">
                                        <Link to="/project-details">
                                            مستشارو استراتيجية التحول
                                        </Link>
                                    </h4>
                                </div>
                                <Link to="/project-details" className="icon-btn">
                                    <img src="assets/img/icon/arrow-up-right.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="portfolio-card">
                            <div className="portfolio-card-thumb">
                                <img src="assets/img/portfolio/1-7.png" alt="img" />
                            </div>
                            <div className="portfolio-card-details">
                                <div className="media-left">
                                    <span className="portfolio-card-details_subtitle">
                                        خبراء الكفاءة
                                    </span>
                                    <h4 className="portfolio-card-details_title">
                                        <Link to="/project-details">
                                            مستشارو التسويق والعلامة التجارية
                                        </Link>
                                    </h4>
                                </div>
                                <Link to="/project-details" className="icon-btn">
                                    <img src="assets/img/icon/arrow-up-right.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="portfolio-card">
                            <div className="portfolio-card-thumb">
                                <img src="assets/img/portfolio/1-8.png" alt="img" />
                            </div>
                            <div className="portfolio-card-details">
                                <div className="media-left">
                                    <span className="portfolio-card-details_subtitle">
                                        معززو الربحية
                                    </span>
                                    <h4 className="portfolio-card-details_title">
                                        <Link to="/project-details">تحليل السوق والاستراتيجية</Link>
                                    </h4>
                                </div>
                                <Link to="/project-details" className="icon-btn">
                                    <img src="assets/img/icon/arrow-up-right.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="portfolio-card">
                            <div className="portfolio-card-thumb">
                                <img src="assets/img/portfolio/1-9.png" alt="img" />
                            </div>
                            <div className="portfolio-card-details">
                                <div className="media-left">
                                    <span className="portfolio-card-details_subtitle">
                                        معززو الربحية
                                    </span>
                                    <h4 className="portfolio-card-details_title">
                                        <Link to="/project-details">تحليل السوق والاستراتيجية</Link>
                                    </h4>
                                </div>
                                <Link to="/project-details" className="icon-btn">
                                    <img src="assets/img/icon/arrow-up-right.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="portfolio-card">
                            <div className="portfolio-card-thumb">
                                <img src="assets/img/portfolio/1-10.png" alt="img" />
                            </div>
                            <div className="portfolio-card-details">
                                <div className="media-left">
                                    <span className="portfolio-card-details_subtitle">
                                        معززو الربحية
                                    </span>
                                    <h4 className="portfolio-card-details_title">
                                        <Link to="/project-details">تحليل السوق والاستراتيجية</Link>
                                    </h4>
                                </div>
                                <Link to="/project-details" className="icon-btn">
                                    <img src="assets/img/icon/arrow-up-right.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default PortfolioAll