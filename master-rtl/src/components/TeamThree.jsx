import React from 'react'
import { Link } from 'react-router-dom'

const TeamThree = () => {
    return (
        <section className='bg-dark'>
            <div className="team-area-4 space">
                <div className="container">
                    <div className="row justify-content-between align-items-end">
                        <div className="col-xxl-6 col-xl-5 col-lg-6">
                            <div className="title-area text-lg-start text-center">
                                <span className="sub-title text-white">
                                    <img src="assets/img/icon/title_left.svg" alt="shape" />
                                    فرص العمل
                                </span>
                                <h2 className="sec-title style2 text-white">
                                    فكّر بإمكانيات العمل الخفية
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <div className="btn-wrap mb-60 justify-content-center">
                                <Link to="/project" className="global-btn style-border5">
                                    عرض المزيد <i className="fas fa-arrow-right ms-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30 gx-30">
                        <div className="col-xl-6">
                            <div className="team-card style3">
                                <div className="team-card-bg-shape">
                                    <img src="assets/img/team/team-card-bg4-1.png" alt="img" />
                                </div>
                                <div className="team-card_content">
                                    <h4 className="team-card_title">
                                        <Link to="/team-details">الممرات المتاحة للمهندس الممرات المتاحة للمهندس</Link>
                                    </h4>
                                    <span className="team-card_text">
                                        الممرات المتاحة للمهندس الممرات المتاحة للمهندس الممرات للمهندس الممرات المتاحة للمهندس الممرات المتاحة للمهندس
                                    </span>
                                </div>
                                <div className="team-card_img">
                                    <img src="assets/img/team/team-4-1.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="team-card style3">
                                <div className="team-card-bg-shape">
                                    <img src="assets/img/team/team-card-bg4-2.png" alt="img" />
                                </div>
                                <div className="team-card_content">
                                    <h4 className="team-card_title">
                                        <Link to="/team-details">الممرات المتاحة للمهندس الممرات المتاحة للمهندس</Link>
                                    </h4>
                                    <span className="team-card_text">
                                        الممرات المتاحة للمهندس الممرات المتاحة للمهندس الممرات للمهندس الممرات المتاحة للمهندس الممرات المتاحة للمهندس
                                    </span>
                                </div>
                                <div className="team-card_img">
                                    <img src="assets/img/team/team-4-2.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 order-xl-4">
                            <div className="team-card style3">
                                <div className="team-card-bg-shape">
                                    <img src="assets/img/team/team-card-bg4-1.png" alt="img" />
                                </div>
                                <div className="team-card_content">
                                    <h4 className="team-card_title">
                                        <Link to="/team-details">الممرات المتاحة للمهندس الممرات المتاحة للمهندس</Link>
                                    </h4>
                                    <span className="team-card_text">
                                        الممرات المتاحة للمهندس الممرات المتاحة للمهندس الممرات للمهندس الممرات المتاحة للمهندس الممرات المتاحة للمهندس
                                    </span>
                                </div>
                                <div className="team-card_img">
                                    <img src="assets/img/team/team-4-4.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 order-xl-3">
                            <div className="team-card style3">
                                <div className="team-card-bg-shape">
                                    <img src="assets/img/team/team-card-bg4-2.png" alt="img" />
                                </div>
                                <div className="team-card_content">
                                    <h4 className="team-card_title">
                                        <Link to="/team-details">الممرات المتاحة للمهندس الممرات المتاحة للمهندس</Link>
                                    </h4>
                                    <span className="team-card_text">
                                        الممرات المتاحة للمهندس الممرات المتاحة للمهندس الممرات للمهندس الممرات المتاحة للمهندس الممرات المتاحة للمهندس
                                    </span>
                                </div>
                                <div className="team-card_img">
                                    <img src="assets/img/team/team-4-3.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default TeamThree