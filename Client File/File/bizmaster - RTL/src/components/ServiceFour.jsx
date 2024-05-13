import React from 'react'
import { Link } from 'react-router-dom'

const ServiceFour = () => {
    return (
        <section className='bg-dark'>
            <div className="service-area-3 space-bottom overflow-hidden">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="title-area text-center">
                                <span className="sub-title text-white">
                                    <img src="assets/img/icon/title_left.svg" alt="shape" />
                                    آخر الخدمات
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    الحد الأقصى من خلال الاستراتيجية{" "}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gx-30 gy-30 justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card-3">
                                <div className="service-card-icon">
                                    <img src="assets/img/icon/service-icon_1-1.svg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">خبراء الكفاءة</Link>
                                    </h4>
                                    <p className="service-card_text">
                                        إت بوروس دويس سوليسيتودين سيد ديغنيس سيم هابي تانت. إجستاس نولا
                                        كويس إيتس فينيناتيس إت بوروس دويس
                                    </p>
                                    <Link to="/service-details" className="link-btn">
                                        تعلم المزيد <i className="fas fa-arrow-left" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card-3">
                                <div className="service-card-icon">
                                    <img src="assets/img/icon/service-icon_1-2.svg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">هيكل الشبكة</Link>
                                    </h4>
                                    <p className="service-card_text">
                                        إت بوروس دويس سوليسيتودين سيد ديغنيس سيم هابي تانت. إجستاس نولا
                                        كويس إيتس فينيناتيس إت بوروس دويس
                                    </p>
                                    <Link to="/service-details" className="link-btn">
                                        تعلم المزيد <i className="fas fa-arrow-left" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card-3">
                                <div className="service-card-icon">
                                    <img src="assets/img/icon/service-icon_1-3.svg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">تدريب تقنية المعلومات</Link>
                                    </h4>
                                    <p className="service-card_text">
                                        إت بوروس دويس سوليسيتودين سيد ديغنيس سيم هابي تانت. إجستاس نولا
                                        كويس إيتس فينيناتيس إت بوروس دويس
                                    </p>
                                    <Link to="/service-details" className="link-btn">
                                        تعلم المزيد <i className="fas fa-arrow-left" />
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

export default ServiceFour