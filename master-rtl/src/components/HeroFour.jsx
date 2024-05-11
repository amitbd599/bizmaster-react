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
                                العمل هو منظمة مشاركة في إنتاج أو بيع أو توفير السلع والخدمات لتلبية الاحتياجات الأساسية. العمل هو منظمة مشاركة في الإنتاج
                            </p>
                            <div className="btn-wrap">
                                <Link to="/about" className="global-btn style-border3">
                                    تعلم المزيد <i className="fas fa-arrow-left ms-2" />
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HeroFour