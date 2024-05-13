import React from 'react'

const Newsletter = () => {
    return (
        <div className="container">
            <div className="footer-top-1 bg-theme">
                <div className="footer-top-content">
                    <h3 className="footer-top-title text-white">النشرة الإخبارية</h3>
                    <p className="footer-top-text">
                        لوريم إيبسوم هو ببساطة نص عن الطباعة والتنضيد
                    </p>
                </div>
                <form className="newsletter-form">
                    <div className="form-group">
                        <button type="submit" className="global-btn">
                            اشتراك
                            <span className="icon">
                                <i className="fa-sharp fas fa-paper-plane ms-2" />
                            </span>
                        </button>
                        <input
                            className="form-control"
                            type="email"
                            placeholder="عنوان البريد الإلكتروني"
                            required=""
                        />

                    </div>
                </form>
            </div>
        </div>


    )
}

export default Newsletter