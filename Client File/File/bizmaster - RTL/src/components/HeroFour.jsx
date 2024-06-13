import React from 'react'
import { Link } from 'react-router-dom'

const HeroFour = () => {
    return (
        <div
            className="hero-wrapper hero-4"
            id="hero"
            style={{ backgroundImage: "url(assets/img/hero/hero_bg_4_1.png)" }}
        >
            <div className="hero-thumb4-1">
                <img src="assets/img/hero/hero_thumb_4_1.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-style4">
                            <h1 className="hero-title text-white">
                                الممرات المتاحة<span className="text-theme2"> للمهندس </span> للمهندس الممرات
                            </h1>
                            <p className="hero-text">
                                إنتاج أو بيع أو توفير السلع والخدمات لتلبية العمل هو منظمة مشاركة في إنتاج أو بيع أو توفير السلع والخدمات لتلبية الاحتياجات الأساسية. العمل هو منظمة مشاركة في الإنتاجإنتاج أو بيع أو توفير السلع والخدمات لتلبية
                            </p>
                            <div className="btn-wrap">
                                <Link to="/about" className="global-btn style-border3">
                                    تعلم المزيد <i className="fas fa-arrow-left ms-2" />
                                </Link>
                                <div className="hero-tag">
                                    <div className="about-experience-tag">
                                        <span className="circle-title-anime">
                                            <span className="char1">أ</span>
                                            <span className="char2">ف</span>
                                            <span className="char3">ض</span>
                                            <span className="char4">ل</span>
                                            <span className="char5"> </span>
                                            <span className="char6">ا</span>
                                            <span className="char7">ل</span>
                                            <span className="char8">ع</span>
                                            <span className="char9">م</span>
                                            <span className="char10">ل</span>
                                            <span className="char11">ا</span>
                                            <span className="char12">ل</span>
                                            <span className="char13"> </span>
                                            <span className="char14">ف</span>
                                            <span className="char15">ي</span>
                                            <span className="char16"> </span>
                                            <span className="char17">1</span>
                                            <span className="char18">9</span>
                                            <span className="char19">9</span>
                                            <span className="char20">7</span>

                                        </span>
                                    </div>
                                    <div className="hero-tag_icon">
                                        <i className="fas fa-arrow-right" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HeroFour