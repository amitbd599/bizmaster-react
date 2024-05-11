import React from 'react'

const CTA_Three = () => {
    return (
        <section className='bg-dark2'>
            <div className="container pt-1">
                <div className="cta-area-3 bg-title">
                    <div className="row justify-content-md-between align-items-center">
                        <div className="col-lg-5">
                            <div className="title-area mb-lg-0 text-lg-start text-center">
                                <h2 className="sec-title text-white">الاشتراك في النشرة الإخبارية لدينا</h2>
                                <p className="sec-text text-white">
                                    لوريم إيبسوم هو نص دمية ببساطة للطباعة
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <form className="newsletter-form style2">
                                <div className="form-group">
                                    <button type="submit" className="global-btn">
                                        الاشتراك الآن{" "}
                                    </button>
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="عنوان بريدك الإلكتروني"
                                        required=""
                                    />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CTA_Three