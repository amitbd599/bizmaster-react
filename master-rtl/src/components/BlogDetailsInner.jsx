import React from 'react'
import { Link } from 'react-router-dom'

const BlogDetailsInner = () => {
    return (
        <section className="blog-area space-top space-extra-bottom">
            <div className="container">
                <div className="row gx-30">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="blog-details-card">
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
                                    التعليقات (05)
                                </Link>
                            </div>
                            <h2 className="blog-title">الشراكة للأعمال والنجاح</h2>
                            <div className="blog-thumb">
                                <img src="assets/img/blog/blog_s2_4.png" alt="صورة المدونة" />
                            </div>
                            <div className="blog-content">
                                <p className="mt-n2 mb-15">
                                    التصميم على الويب بطريقة قوية ليس مجرد مهنة، بل في شركة شغف. لدينا
                                    تميل إلى الاعتقاد بأن الفكرة الذكية لأي موقع على الويب هي الانطباع على
                                    الزوار. التصميم على الويب بطريقة قوية{" "}
                                </p>
                                <p className="mb-25">
                                    التصميم على الويب بطريقة قوية ليس مجرد مهنة، بل في شركة شغف. لدينا
                                    تميل إلى الاعتقاد بأن الفكرة الذكية
                                </p>
                                <div className="row gy-4">
                                    <div className="col-sm-6">
                                        <div className="blog-thumb style2 mb-sm-0 mb-30">
                                            <img src="assets/img/blog/blog_details1_1.png" alt="صورة" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="blog-thumb style2 mb-sm-0 mb-30">
                                            <img src="assets/img/blog/blog_details1_2.png" alt="صورة" />
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-xs-25">
                                    التصميم على الويب بطريقة قوية ليس مجرد مهنة، بل في شركة شغف. لدينا
                                    تميل إلى الاعتقاد بأن الفكرة الذكية
                                </p>
                                <blockquote>
                                    <h4 className="h4">بريت لي</h4>
                                    <cite>مصمم واجهة المستخدم / المستخدم</cite>
                                    <p>
                                        إنها حقيقة مقررة منذ زمن طويل أن القارئ سيشتت انتباهه بمحتوى
                                        قابل للقراءة عند النظر في تصميمه. الهدف من استخدام Lorem
                                        Ipsum هو أنه يحتوي على توزيع حرفي أكثر أو أقل عاديًا مقارنة
                                        بالنصوص
                                    </p>
                                </blockquote>
                                <h3 className="blog-inner-title">احفظ وقتك الحر!</h3>
                                <p className="mt-20">
                                    التصميم على الويب بطريقة قوية ليس مجرد مهنة، بل في شركة شغف. لدينا
                                    تميل إلى الاعتقاد بأن الفكرة الذكية لأي موقع على الويب هي الانطباع
                                    على الزوار. التصميم على الويب بطريقة قوية
                                </p>
                                <div className="share-links clearfix ">
                                    <div className="row justify-content-between">
                                        <div className="col-sm-auto">
                                            <span className="share-links-title">الوسوم:</span>
                                            <div className="tagcloud">
                                                <Link to="/blog">تكنولوجيا البيانات</Link>
                                                <Link to="/blog">خدمات التحسين</Link>
                                            </div>
                                        </div>
                                        <div className="col-sm-auto text-xl-end">
                                            <ul className="social-links">
                                                <li>
                                                    <Link to="/https://facebook.com/" target="_blank">
                                                        <i className="fab fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/https://twitter.com/" target="_blank">
                                                        <i className="fab fa-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/https://linkedin.com/" target="_blank">
                                                        <i className="fab fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/https://instagram.com/" target="_blank">
                                                        <i className="fab fa-instagram" />
                                                    </Link>
                                                </li>
                                            </ul>
                                            {/* End Social Share */}
                                        </div>
                                        {/* Share Links Area end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comments-wrap style2  ">
                            <h2 className="blog-inner-title h3">01 تعليق</h2>
                            <ul className="comment-list">
                                <li className="comment-item">
                                    <div className="post-comment">
                                        <p className="text">
                                            على عكس الاعتقاد الشائع، ليس لدى Lorem Ipsum أصول في نص لاتيني
                                            كلاسيكي منذ عام 45 قبل الميلاد، مما جعله
                                        </p>
                                    </div>
                                    <div className="comment-content">
                                        <h3 className="name">سافانا نغوين</h3>
                                        <span className="commented-on">23 ديسمبر 2022 الساعة 8:50 مساءً</span>
                                        <div className="reply_and_edit">
                                            <Link to="/blog-details" className="reply-btn">
                                                الرد
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="comments-wrap">
                            {/* Comment Form */}
                            <h3 className="blog-inner-title text-capitalize"> اترك تعليقًا</h3>
                            <div className="comment-form mb-30">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="اسمك"
                                            className="form-control style-white"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="بريدك الإلكتروني"
                                            className="form-control style-white"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="رقم الهاتف"
                                            className="form-control style-white"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <select
                                            name="subject"
                                            id="subject"
                                            className="form-select style-white"
                                        >
                                            <option value="" disabled="" selected="" hidden="">
                                                اختر خيارًا
                                            </option>
                                            <option value={1}>01</option>
                                            <option value={2}>02</option>
                                            <option value={3}>03</option>
                                        </select>
                                        <i className="fas fa-angle-down" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <textarea
                                            placeholder="الرسالة هنا.."
                                            className="form-control style-white"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button className="global-btn">
                                            أرسل الآن
                                            <img src="assets/img/icon/right-icon.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        {/* Comment end */}
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
                                            محفز النمو للأعمال
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
                                <h3 className="widget_title">أحدث المدونات</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="recent-post-meta">
                                            <Link to="/blog">
                                                <img src="assets/img/icon/calender.svg" alt="" />
                                                10 يناير 2024
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog-details">
                                                    تصفح التجارة العالمية الواحدة
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="recent-post-meta">
                                            <Link to="/blog">
                                                <img src="assets/img/icon/calender.svg" alt="" />
                                                10 يناير 2024
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog-details">
                                                    حلول استراتيجية لنمو الأعمال
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="recent-post-meta">
                                            <Link to="/blog">
                                                <img src="assets/img/icon/calender.svg" alt="" />
                                                10 يناير 2024
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog-details">
                                                    تحقيق أهداف الأعمال الخاصة بك بثقة
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget_tag_cloud">
                                <h3 className="widget_title">الكلمات الشائعة</h3>
                                <div className="tagcloud">
                                    <Link to="/blog">الخبراء</Link>
                                    <Link to="/blog">الكفاءة</Link>
                                    <Link to="/blog">رقمي</Link>
                                    <Link to="/blog">تحويل</Link>
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

export default BlogDetailsInner