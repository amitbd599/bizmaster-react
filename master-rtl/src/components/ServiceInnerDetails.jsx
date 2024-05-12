import React from 'react'
import { Link } from 'react-router-dom'

const ServiceInnerDetails = () => {
    return (
        <section className="space">
            <div className="container">
                <div className="row gx-30">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="page-thumb">
                            <img src="assets/img/service/service-details1-1.jpg" alt="img" />
                        </div>
                        <ul className="service-details-list">
                            <li className="single-service-list">
                                <span className="title">الفئة </span>
                                <h6 className="content">استشارات الأعمال </h6>
                            </li>
                            <li className="single-service-list">
                                <span className="title">العملاء </span>
                                <h6 className="content">فهد حسين </h6>
                            </li>
                            <li className="single-service-list">
                                <span className="title">الإطار الزمني </span>
                                <h6 className="content">10 فبراير 2024 </h6>
                            </li>
                        </ul>
                        <h3 className="page-title mt-40 mb-20">تحقيق الربح القصوى من خلال</h3>
                        <p>
                            تصميم الويب بطريقة قوية ليست مهنة فقط، ولكن في شركة شغف. لديهم ميل للإيمان بفكرة
                            أن النظرة الجيدة لأي موقع ويب
                        </p>
                        <div className="checklist style6 mt-40 mb-60">
                            <ul>
                                <li>
                                    <i className="fas fa-check-circle" />
                                    توجيه الطريق إلى النجاح تحقيق أهداف عملك بثقة
                                </li>
                                <li>
                                    <i className="fas fa-check-circle" />
                                    الاستشاري التجاري هو محترف يقدم نصائح وإرشادات خبراء
                                </li>
                                <li>
                                    <i className="fas fa-check-circle" />
                                    إلى الشركات في مجالات مختلفة مثل الإدارة
                                </li>
                            </ul>
                        </div>
                        <h3 className="page-title mb-20">توجيه الطريق إلى النجاح</h3>
                        <p className="mb-30">
                            تصميم الويب بطريقة قوية ليست مهنة فقط، ولكن في شركة شغف. لديهم ميل للإيمان بفكرة
                            أن النظرة الجيدة لأي موقع ويب هي الانطباع على
                            الزوار. تصميم الويب بطريقة قوية ليست مهنة فقط تصميم الويب بطريقة
                        </p>
                        <div className="row gy-4">
                            <div className="col-lg-6">
                                <div className="page-thumb style2">
                                    <img src="assets/img/service/service-details1-2.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="page-thumb style2">
                                    <img src="assets/img/service/service-details1-3.jpg" alt="img" />
                                </div>
                            </div>
                        </div>
                        <p className="mt-30 mb-n1">
                            تصميم الويب بطريقة قوية ليست مهنة فقط، ولكن في شركة شغف. لديهم ميل للإيمان بفكرة
                            أن النظرة الجيدة لأي موقع ويب هي الانطباع على الزوار. تصميم الويب بطريقة قوية ليست
                            مهنة فقط تصميم الويب بطريقة
                        </p>
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
                            <div className="widget widget_categories widget_service-categories">
                                <ul>
                                    <li>
                                        <Link to="/blog">خدمة شخصية</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">خدمة تعليمية</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">خدمة الطلاب</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">خدمة الزفاف</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">خدمة السيارات</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">خدمة الأعمال</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">خدمة أخرى</Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default ServiceInnerDetails