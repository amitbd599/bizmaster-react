import React from "react";

const CTA_Two = () => {
  return (
    <div
      className="cta-area-2 bg-theme"
      style={{ backgroundImage: "url(assets/img/bg/cta_bg_1.png)" }}
    >
      <div className="container">
        <div className="row justify-content-md-between align-items-center flex-row-reverse">
          <div className="col-lg-7">
            <div className="cta-wrap2">
              <div className="title-area">
                <h2 className="sec-title text-white style2">
                  حةاحةاحةاحةال حةاحةال                </h2>
                <p className="sec-text text-white">
                  الممرات المتاحة للمهندس الممرات المتاحة للمهندس الممرات المتاحة للمهندس الممرات المتاحة للمهندس الممرات المتاحة للمهندس الممرات المتاحة للمهندس
                </p>
              </div>
              <form className="newsletter-form style2">
                <div className="form-group">
                  <button type="submit" className="global-btn">
                    اشترك الآن{" "}
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
          <div className="col-lg-5">
            <div className="cta2-bg-thumb">
              <img src="assets/img/normal/cta-thumb-2-1.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CTA_Two;
