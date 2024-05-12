import React from 'react'
import { Link } from 'react-router-dom'

const ErrorInner = () => {
    return (
        <section className="error-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wrapper">
                            <div
                                className="img-file"

                            >
                                <img
                                    className="img-fluid"
                                    src="/assets/img/error.png"
                                    alt=""
                                />
                            </div>
                            <div className="text-file">
                                <h4 >
                                    الصفحة غير موجودة!
                                </h4>
                                <p >
                                    نعتذر، لا يمكننا العثور على تلك الصفحة! الصفحة التي تبحث عنها
                                    <br />
                                    لم تكن موجودة أبدًا.
                                </p>
                            </div>
                            <div
                                className="d-adjust"
                            >
                                <Link className="global-btn" to="/">
                                    العودة إلى الصفحة الرئيسية
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ErrorInner