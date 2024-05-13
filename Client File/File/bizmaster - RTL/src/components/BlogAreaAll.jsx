import React from 'react'
import { Link } from 'react-router-dom'

const BlogAreaAll = () => {
    return (
        <section className="blog-area space-top space-extra-bottom">
            <div className="container">
                <div className="row gx-40">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="blog-single-card">
                            <div className="blog-thumb">
                                <img src="assets/img/blog/blog_s2_1.png" alt="صورة المدونة" />
                                <div className="blog-date">
                                    <Link to="/blog">
                                        <span>31</span>مايو
                                    </Link>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link to="/blog">
                                        <i className="fas fa-user" />
                                        بواسطة المسؤول
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fas fa-folder-open" />
                                        الفئة
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fas fa-comments" />
                                        التعليقات (٠٥)
                                    </Link>
                                </div>
                                <h3 className="blog-title">
                                    <Link to="/blog-details">
                                        الشراكة لنجاح الأعمال
                                    </Link>
                                </h3>
                                <p className="blog-text">
                                    التصميم الويب بطريقة قوية ليس فقط مهنة واحدة، بل في شركة شغف. نحن نميل إلى الاعتقاد بأن الذكاء
                                </p>
                                <Link to="/blog-details" className="global-btn style-border2">
                                    {" "}
                                    اقرأ المزيد <img src="assets/img/icon/right-icon2.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="blog-single-card">
                            <div className="blog-thumb">
                                <img src="assets/img/blog/blog_s2_2.png" alt="صورة المدونة" />
                                <div className="blog-date">
                                    <Link to="/blog">
                                        <span>31</span>مايو
                                    </Link>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link to="/blog">
                                        <i className="fas fa-user" />
                                        بواسطة المسؤول
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fas fa-folder-open" />
                                        الفئة
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fas fa-comments" />
                                        التعليقات (٠٥)
                                    </Link>
                                </div>
                                <h3 className="blog-title">
                                    <Link to="/blog-details">
                                        قم بإطلاق إمكانات عملك المخفية
                                    </Link>
                                </h3>
                                <p className="blog-text">
                                    التصميم الويب بطريقة قوية ليس فقط مهنة واحدة، بل في شركة شغف. نحن نميل إلى الاعتقاد بأن الذكاء
                                </p>
                                <Link to="/blog-details" className="global-btn style-border2">
                                    {" "}
                                    اقرأ المزيد <img src="assets/img/icon/right-icon2.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="blog-single-card">
                            <div className="blog-thumb">
                                <img src="assets/img/blog/blog_s2_3.png" alt="صورة المدونة" />
                                <div className="blog-date">
                                    <Link to="/blog">
                                        <span>31</span>مايو
                                    </Link>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link to="/blog">
                                        <i className="fas fa-user" />
                                        بواسطة المسؤول
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fas fa-folder-open" />
                                        الفئة
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fas fa-comments" />
                                        التعليقات (٠٥)
                                    </Link>
                                </div>
                                <h3 className="blog-title">
                                    <Link to="/blog-details">
                                        تعظيم الربحية من خلال الاستراتيجية
                                    </Link>
                                </h3>
                                <p className="blog-text">
                                    التصميم الويب بطريقة قوية ليس فقط مهنة واحدة، بل في شركة شغف. نحن نميل إلى الاعتقاد بأن الذكاء
                                </p>
                                <Link to="/blog-details" className="global-btn style-border2">
                                    {" "}
                                    اقرأ المزيد <img src="assets/img/icon/right-icon2.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="pagination justify-content-center">
                            <ul>
                                <li>
                                    <Link to="/blog">1</Link>
                                </li>
                                <li>
                                    <Link to="/blog">2</Link>
                                </li>
                                <li>
                                    <Link to="/blog">3</Link>
                                </li>
                                <li>
                                    <Link to="/blog">4</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
                            <div className="widget widget_search">
                                <h3 className="widget_title">ابحث هنا</h3>
                                <form className="search-form">
                                    <input type="text" placeholder="بحث.." />
                                    <button type="submit">
                                        <i className="fas fa-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="widget widget_categories">
                                <h3 className="widget_title">الفئة</h3>
                                <ul>
                                    <li>
                                        <Link to="/blog">
                                            محفز نمو الأعمال{" "}
                                            <img src="assets/img/icon/category-1.svg" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            التحول الرقمي
                                            <img src="assets/img/icon/category-2.svg" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            محفزو النمو المستشارون
                                            <img src="assets/img/icon/category-3.svg" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            شركاء الاستشارات المالية
                                            <img src="assets/img/icon/category-4.svg" alt="" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget">
                                <h3 className="widget_title">أحدث المدونة</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="recent-post-meta">
                                            <Link to="/blog">
                                                <img src="assets/img/icon/calender.svg" alt="" />
                                                ١٠ يناير ٢٠٢٤
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog-details">
                                                    التوجيه التجاري العالمي للشحنة الواحدة
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="recent-post-meta">
                                            <Link to="/blog">
                                                <img src="assets/img/icon/calender.svg" alt="" />
                                                ١٠ يناير ٢٠٢٤
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog-details">
                                                    الحلول الاستراتيجية لنمو الأعمال
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="recent-post-meta">
                                            <Link to="/blog">
                                                <img src="assets/img/icon/calender.svg" alt="" />
                                                ١٠ يناير ٢٠٢٤
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog-details">
                                                    تحقيق أهداف عملك بثقة
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget_tag_cloud">
                                <h3 className="widget_title">العلامات الشائعة</h3>
                                <div className="tagcloud">
                                    <Link to="/blog">خبراء</Link>
                                    <Link to="/blog">كفاءة</Link>
                                    <Link to="/blog">رقمي</Link>
                                    <Link to="/blog">تحول</Link>
                                    <Link to="/blog">سلسلة</Link>
                                    <Link to="/blog">شريك</Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default BlogAreaAll