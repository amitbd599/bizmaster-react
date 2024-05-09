import React from 'react'

const BlogDetailsInner = () => {
    return (
        <section className="blog-area space-top space-extra-bottom">
            <div className="container">
                <div className="row gx-30">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="blog-details-card">
                            <div className="blog-meta">
                                <a href="blog.html">
                                    <i className="fas fa-user" />
                                    By admin
                                </a>
                                <a href="blog.html">
                                    <i className="fas fa-folder-open" />
                                    Category
                                </a>
                                <a href="blog.html">
                                    <i className="fas fa-comments" />
                                    Comments (05)
                                </a>
                            </div>
                            <h2 className="blog-title">Partnering for Business an the Success</h2>
                            <div className="blog-thumb">
                                <img src="assets/img/blog/blog_s2_4.png" alt="blog image" />
                            </div>
                            <div className="blog-content">
                                <p className="mt-n2 mb-15">
                                    Web designing in a powerful way of just not an only professions,
                                    however, in a passion Company. have a to a tendency to believe the
                                    idea that smart looking of any website is the impression on
                                    visitors.Web designing in a powerful{" "}
                                </p>
                                <p className="mb-25">
                                    Web designing in a powerful way of just not an only professions,
                                    however, in a passion Company. We have a to a tendency to believe
                                    the idea that smart
                                </p>
                                <div className="row gy-4">
                                    <div className="col-sm-6">
                                        <div className="blog-thumb style2 mb-sm-0 mb-30">
                                            <img src="assets/img/blog/blog_details1_1.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="blog-thumb style2 mb-sm-0 mb-30">
                                            <img src="assets/img/blog/blog_details1_2.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-xs-25">
                                    Web designing in a powerful way of just not an only professions,
                                    however, in a passion Company. We have a to a tendency to believe
                                    the idea that smart
                                </p>
                                <blockquote>
                                    <h4 className="h4">Bret Lee</h4>
                                    <cite>UI/UX Designer</cite>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readablcontent of a page a when looking at its layout.
                                        The point of using Lorem Ipsum is that it has a more-or less
                                        normal distribution of letters as opposed
                                    </p>
                                </blockquote>
                                <h3 className="blog-inner-title">Keep your free time free!</h3>
                                <p className="mt-20">
                                    Web designing in a powerful way of just not an only professions,
                                    however, in a passion Company. have a to a tendency to believe the
                                    idea that smart looking of any website is the impression on
                                    visitors.Web designing in a powerful
                                </p>
                                <div className="share-links clearfix ">
                                    <div className="row justify-content-between">
                                        <div className="col-sm-auto">
                                            <span className="share-links-title">Tags:</span>
                                            <div className="tagcloud">
                                                <a href="blog.html">Data Tech</a>
                                                <a href="blog.html">Optimization Services</a>
                                            </div>
                                        </div>
                                        <div className="col-sm-auto text-xl-end">
                                            <ul className="social-links">
                                                <li>
                                                    <a href="https://facebook.com/" target="_blank">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <i className="fab fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://linkedin.com/" target="_blank">
                                                        <i className="fab fa-linkedin-in" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://instagram.com/" target="_blank">
                                                        <i className="fab fa-instagram" />
                                                    </a>
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
                            <h2 className="blog-inner-title h3">01 Comment</h2>
                            <ul className="comment-list">
                                <li className="comment-item">
                                    <div className="post-comment">
                                        <p className="text">
                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                            text. It has roots in a piece of classical Latin literature
                                            from 45 BC, making
                                        </p>
                                    </div>
                                    <div className="comment-content">
                                        <h3 className="name">Savannah Nguyen</h3>
                                        <span className="commented-on">
                                            December 23,2022 at 8:50 P.M
                                        </span>
                                        <div className="reply_and_edit">
                                            <a href="blog-details.html" className="reply-btn">
                                                Reply
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="comments-wrap">
                            {/* Comment Form */}
                            <h3 className="blog-inner-title text-capitalize"> Leave a comment</h3>
                            <div className="comment-form mb-30">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="form-control style-white"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Email"
                                            className="form-control style-white"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
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
                                                Choose a Option
                                            </option>
                                            <option value={1}>01</option>
                                            <option value={2}>02</option>
                                            <option value={3}>03</option>
                                        </select>
                                        <i className="fas fa-angle-down" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <textarea
                                            placeholder="Message here.."
                                            className="form-control style-white"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button className="global-btn">
                                            Submit Now
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
                                <h3 className="widget_title">Search Here</h3>
                                <form className="search-form">
                                    <input type="text" placeholder="Search.." />
                                    <button type="submit">
                                        <i className="fas fa-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="widget widget_categories">
                                <h3 className="widget_title">Category</h3>
                                <ul>
                                    <li>
                                        <a href="blog.html">
                                            Business Growth Catalyst{" "}
                                            <img src="assets/img/icon/category-1.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog.html">
                                            Digital Transformation
                                            <img src="assets/img/icon/category-2.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog.html">
                                            Advisors Growth Catalyst
                                            <img src="assets/img/icon/category-3.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog.html">
                                            Financial Advisory Partners
                                            <img src="assets/img/icon/category-4.svg" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget">
                                <h3 className="widget_title">Latest Blog</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="recent-post-meta">
                                            <a href="blog.html">
                                                <img src="assets/img/icon/calender.svg" alt="" />
                                                Jan 10, 2024
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <a className="text-inherit" href="blog-details.html">
                                                    Navigating Global Trade One Shipmen
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="recent-post-meta">
                                            <a href="blog.html">
                                                <img src="assets/img/icon/calender.svg" alt="" />
                                                Jan 10, 2024
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <a className="text-inherit" href="blog-details.html">
                                                    Strategic Solutions for the a Business Growth
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="recent-post-meta">
                                            <a href="blog.html">
                                                <img src="assets/img/icon/calender.svg" alt="" />
                                                Jan 10, 2024
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <a className="text-inherit" href="blog-details.html">
                                                    Achieve Your Business Goals with Confidence
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget_tag_cloud">
                                <h3 className="widget_title">Popular Tags</h3>
                                <div className="tagcloud">
                                    <a href="blog.html">Experts</a>
                                    <a href="blog.html">Efficiency</a>
                                    <a href="blog.html">Digital</a>
                                    <a href="blog.html">Transform</a>
                                    <a href="blog.html">Chain</a>
                                    <a href="blog.html">Partner</a>
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