import React from 'react'
import { Link } from 'react-router-dom'

const AboutFive = () => {
    return (
        <section className='bg-dark2'>
            <div className="about-area-5 space-bottom">
                <div className="shadow-shape-left" />
                <div className="container">
                    <div className="row gy-40 gx-60 align-items-center justify-content-between">
                        <div className="col-xl-5">
                            <div className="about-thumb5">
                                <div className="img1">
                                    <img src="assets/img/normal/about_5-1.png" alt="img" />
                                </div>
                                <div className="about-counter-wrap jump-reverse">
                                    <h3 className="about-counter">
                                        <span className="counter-number">10k</span>+
                                    </h3>
                                    <p className="sec-desc">مراجعة العملاء</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="title-area mb-40">
                                <span className="sub-title style2">
                                    <img src="assets/img/icon/title_left2.svg" alt="shape" />
                                    من نحن
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    عانوا من في عانوامن التغيير في عانوا من التغييرفي                                </h2>
                                <p className="sec-text text-white mb-30">
                                    النص الوهمي هو ببساطة نص شكلي في صناعة الطباعة والتنضيد. كان النص
                                    الوهمي المعياري في الصناعة منذ القرن الخامس عشر
                                    النص الوهمي هو ببساطة نص شكلي في صناعة الطباعة والتنضيد. كان النص
                                    الوهمي المعياري في الصناعة منذ القرن الخامس عشر
                                </p>
                                <p className="sec-text text-white">
                                    النص الوهمي هو ببساطة نص شكلي في صناعة الطباعة والتنضيد. كان النص
                                    الوهمي المعياري في الصناعة منذ القرن الخامس عشر
                                </p>
                            </div>
                            <div className="btn-wrap">
                                <Link to="/about" className="global-btn style3">
                                    استكشاف المزيد <i className="fas fa-arrow-left ms-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default AboutFive