import React from 'react'
import { Link } from 'react-router-dom'

const PricingTwo = () => {
    return (
        <section className='bg-dark2'>
            <div
                className="pricing-area-3 space-top"
                style={{
                    backgroundImage: "url(assets/img/bg/pricing-bg2-1.png)",
                    backgroundSize: "cover"
                }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="title-area text-center">
                                <span className="sub-title style2">
                                    <img src="assets/img/icon/title_left2.svg" alt="shape" />
                                    أسعارنا
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    عانوا من التغيير في عانوا من التغيير في                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center align-items-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="pricing-card style2">
                                <h4 className="pricing-card_title">استشارة</h4>
                                <div className="pricing-card-price-wrap">
                                    <h3 className="pricing-card_price">
                                        <span className="currency">$</span>32
                                        <span className="duration">/الشهر</span>
                                    </h3>
                                </div>
                                <div className="pricing-card-details">
                                    <div className="checklist">
                                        <ul>
                                            <li>
                                                <i className="fas fa-check" />
                                                الأخطاء التي يجب تجنبها
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                نشاطك التجاري
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                معرفة الخطوط
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                المقياس الفائز لنشاطك التجاري
                                            </li>
                                        </ul>
                                    </div>
                                    <Link className="global-btn" to="/contact">
                                        احصل الآن <img src="assets/img/icon/right-icon2.svg" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="pricing-card style2 active">
                                <h4 className="pricing-card_title">أساسي</h4>
                                <div className="pricing-card-price-wrap">
                                    <h3 className="pricing-card_price">
                                        <span className="currency">$</span>25
                                        <span className="duration">/الشهر</span>
                                    </h3>
                                </div>
                                <div className="pricing-card-details">
                                    <div className="checklist">
                                        <ul>
                                            <li>
                                                <i className="fas fa-check" />
                                                الأخطاء التي يجب تجنبها
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                نشاطك التجاري
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                معرفة الخطوط
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                المقياس الفائز لنشاطك التجاري
                                            </li>
                                        </ul>
                                    </div>
                                    <Link className="global-btn" to="/contact">
                                        احصل الآن <img src="assets/img/icon/right-icon2.svg" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="pricing-card style2">
                                <h4 className="pricing-card_title">محترف</h4>
                                <div className="pricing-card-price-wrap">
                                    <h3 className="pricing-card_price">
                                        <span className="currency">$</span>36
                                        <span className="duration">/الشهر</span>
                                    </h3>
                                </div>
                                <div className="pricing-card-details">
                                    <div className="checklist">
                                        <ul>
                                            <li>
                                                <i className="fas fa-check" />
                                                الأخطاء التي يجب تجنبها
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                نشاطك التجاري
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                معرفة الخطوط
                                            </li>
                                            <li>
                                                <i className="fas fa-check" />
                                                المقياس الفائز لنشاطك التجاري
                                            </li>
                                        </ul>
                                    </div>
                                    <Link className="global-btn" to="/contact">
                                        احصل الآن <img src="assets/img/icon/right-icon2.svg" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default PricingTwo