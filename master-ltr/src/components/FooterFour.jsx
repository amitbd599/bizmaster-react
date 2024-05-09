import React from 'react'

const FooterFour = () => {
    return (
        <section className='bg-dark'>
            <footer
                className="footer-wrapper footer-layout4"
                style={{ backgroundImage: "url(assets/img/bg/footer-bg4-1.png)" }}
            >
                <div className="container">
                    <div className="widget-area">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xl-3">
                                <div className="widget footer-widget widget-about">
                                    <div className="about-logo">
                                        <a href="index.html">
                                            <img src="assets/img/logo-white.svg" alt="Bizmaster" />
                                        </a>
                                    </div>
                                    <p className="footer-text mb-30 mt-30">
                                        It is a long established fact that a reader will be distracted
                                    </p>
                                    <div className="social-btn">
                                        <a href="https://facebook.com/" tabIndex={-1}>
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="https://twitter.com/" tabIndex={-1}>
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="https://www.instagram.com/" tabIndex={-1}>
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a href="https://linkedin.com/" tabIndex={-1}>
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">About Company</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li>
                                                <a href="service.html">Service</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="blog.html">Testimonial</a>
                                            </li>
                                            <li>
                                                <a href="about.html">About Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Services</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li>
                                                <a href="service.html">Reliable Rentals</a>
                                            </li>
                                            <li>
                                                <a href="service.html">Golden Key Properties</a>
                                            </li>
                                            <li>
                                                <a href="service.html">Swift Home Sales</a>
                                            </li>
                                            <li>
                                                <a href="service.html">Elite Realty Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Our Office</h3>
                                    <div className="widget-contact2">
                                        <div className="widget-contact-grid">
                                            <i className="fas fa-phone-alt text-white" />
                                            <div className="contact-grid-details">
                                                <h6>
                                                    <a href="tel:0123456789">+880 123 45 67 89</a>
                                                    <p />
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="widget-contact-grid">
                                            <i className="fas fa-envelope text-white" />
                                            <div className="contact-grid-details">
                                                <h6>
                                                    <a href="mailto:yourmail@gmail.comm">yourmail@gmail.com</a>
                                                    <p />
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="widget-contact-grid">
                                            <i className="fas fa-map-marker-alt text-white" />
                                            <div className="contact-grid-details">
                                                <h6>
                                                    1212, Lav Vegas, The Veg <br /> Street, USA
                                                    <p />
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright-wrap">
                        <div className="row gy-3 justify-content-lg-between justify-content-center">
                            <div className="col-auto align-self-center">
                                <p className="copyright-text text-center">
                                    © <a href="#">Yoursitename </a> 2024 | All Rights Reserved
                                </p>
                            </div>
                            <div className="col-auto">
                                <div className="footer-links">
                                    <a href="contact.html">Trams &amp; Condition</a>
                                    <a href="contact.html">Privacy Policy</a>
                                    <a href="contact.html">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </section>
    )
}

export default FooterFour