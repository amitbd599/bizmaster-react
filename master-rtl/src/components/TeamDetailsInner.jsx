import React from 'react'
import { Link } from 'react-router-dom'

const TeamDetailsInner = () => {
    return (
        <div className="team-details-area space">
            <div className="container">
                <div className="single-team-details">
                    <div className="team-about-card">
                        <div className="row g-lg-0">
                            <div className="col-lg-6">
                                <div className="team-about-card_img">
                                    <img
                                        className="w-100"
                                        src="assets/img/team/team-details.png"
                                        alt="صورة الفريق"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <div className="team-about-card_box">
                                    <h3 className="team-about-card_title">السيرة الذاتية</h3>
                                    <div className="skill-feature position-relative">
                                        <h3 className="skill-feature_title">التصميم</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: "80%" }}></div>
                                            <div className="progress-value">
                                                <span className="counter-number">80</span>%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-feature position-relative">
                                        <h3 className="skill-feature_title">القيادة</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: "90%" }}></div>
                                            <div className="progress-value">
                                                <span className="counter-number">90</span>%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-feature position-relative">
                                        <h3 className="skill-feature_title">خدمة السيارات</h3>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: "70%" }}></div>
                                            <div className="progress-value">
                                                <span className="counter-number">70</span>%
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        تركز هذه الفئة على تصميم وبناء المباني و
                                        تركيب الأثاث والعناصر الزخرفية في داخلها.
                                    </p>
                                    <p className="mb-n2">
                                        تركز هذه الفئة على تصميم وبناء المباني.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-40">
                        <div className="col-lg-4">
                            <div className="team-details-wrap">
                                <h4 className="team-details-wrap-title">فهد بهيان</h4>
                                <h6 className="team-details-wrap-desig">مدير</h6>
                                <p className="team-details-wrap-text mb-30">
                                    تركز هذه الفئة على تصميم وبناء المباني.
                                </p>
                                <div className="team-details-wrap_info">
                                    <span className="icon">
                                        <i className="fas fa-map-marker-alt" />
                                    </span>
                                    <p>
                                        شارع بورمسيل، MN 55337،
                                        الولايات المتحدة
                                    </p>
                                </div>
                                <div className="team-details-wrap_info">
                                    <span className="icon">
                                        <i className="fas fa-phone-alt" />
                                    </span>
                                    <p>
                                        <Link to="/tel:11234567890">+(1) 123 456 7890</Link> <br />{" "}
                                        <Link to="/tel:10927564321">+(1) 098 765 4321</Link>
                                    </p>
                                </div>
                                <div className="team-details-wrap_info">
                                    <span className="icon">
                                        <i className="fas fa-envelope" />
                                    </span>
                                    <p>
                                        <Link to="/mailto:info@fixturbo.com">info@fixturbo.com</Link> <br />{" "}
                                        <Link to="/mailto:info.example@fixturbo.com">
                                            info.example@fixturbo.com
                                        </Link>
                                    </p>
                                </div>
                                <div className="social-btn style4 mt-35">
                                    <Link to="/https://facebook.com/">
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link to="/https://twitter.com/">
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link to="/https://instagram.com/">
                                        <i className="fab fa-instagram" />
                                    </Link>
                                    <Link to="/https://pinterest.com/">
                                        <i className="fab fa-pinterest" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="team-contact-wrap">
                                <h3 className="mt-n1 mb-30 page-title">نموذج الاتصال</h3>
                                <form
                                    action="mail.php"
                                    method="POST"
                                    className="team-form ajax-contact"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control style-border"
                                                    name="name"
                                                    id="name"
                                                    placeholder="اسمك"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control style-border"
                                                    name="email"
                                                    id="email"
                                                    placeholder="عنوان البريد الإلكتروني"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-12">
                                        <textarea
                                            placeholder="الرسالة هنا.."
                                            id="contactForm"
                                            className="form-control style-border"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="form-btn col-12">
                                        <button className="global-btn">
                                            أرسل الآن <i className="fas fa-arrow-left ms-2" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default TeamDetailsInner