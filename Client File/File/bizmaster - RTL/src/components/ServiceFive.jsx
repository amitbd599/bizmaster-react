import React from 'react'
import { Link } from 'react-router-dom'

const ServiceFive = () => {
    return (
        <section className='bg-dark2'>
            <div className="service-area-4 space-top position-relative">
                <div className="shadow-shape-right" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="title-area text-center">
                                <span className="sub-title style2">
                                    <img src="assets/img/icon/title_left2.svg" alt="shape" />
                                    خدماتنا
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    اتالم تاحة للم هندس ات المتاحة للمه ندس ات المتاحة للمهندس                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gx-30 gy-30 justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card-4">
                                <div className="service-card-thumb">
                                    <img src="assets/img/service/service-5-1.jpg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">محفز نمو الأعمال</Link>
                                    </h4>
                                    <p className="service-card_text">
                                        ات المتاحة للم هندس ات المتاحة للمهندس ات المتاحة للمهندس ات المتاحة للمهندس</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card-4">
                                <div className="service-card-thumb">
                                    <img src="assets/img/service/service-5-2.jpg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">مزيّزي الربحية</Link>
                                    </h4>
                                    <p className="service-card_text">
                                        ات المتاحة للم هندس ات المتاحة للمهندس ات المتاحة للمهندس ات المتاحة للمهندس</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="service-card-4">
                                <div className="service-card-thumb">
                                    <img src="assets/img/service/service-5-3.jpg" alt="img" />
                                </div>
                                <div className="service-card_content">
                                    <h4 className="service-card_title">
                                        <Link to="/service-details">خبراء الكفاءة</Link>
                                    </h4>
                                    <p className="service-card_text">
                                        ات المتاحة للم هندس ات المتاحة للمهندس ات المتاحة للمهندس ات المتاحة للمهندس</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default ServiceFive