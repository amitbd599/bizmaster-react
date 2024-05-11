import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

const FaqOne = () => {
  return (
    <section>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6">
            <div className="title-area me-xl-5 mb-20">
              <span className="sub-title">
                <img src="assets/img/icon/title_left.svg" alt="shape" />
                اسأل السؤال
              </span>
              <h2 className="sec-title style2">الابتكار يحركك للأمام</h2>
            </div>
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card active">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    ما هي الخدمات التي تقدمونها؟
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      نحن نقدم مجموعة واسعة من الخدمات الرقمية، بما في ذلك تصميم وتطوير المواقع الإلكترونية، حلول التجارة الإلكترونية، تحسين محركات البحث، إدارة وسائل التواصل الاجتماعي، الإعلان بالدفع مقابل النقر، هوية العلامة التجارية
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    كم من الوقت يستغرق لإكمال مشروع؟
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      من المعروف منذ زمن طويل أن القارئ سيشتته النص المقروء للصفحة عند النظر إلى تخطيطها. العديد من حزم برامج معالجة النصوص على سطح المكتب ومحرري صفحات الويب الآن يستخدمون لوريم إيبسوم
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    كم يكلف العمل مع وكالتكم؟
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      من المعروف منذ زمن طويل أن القارئ سيشتته النص المقروء للصفحة عند النظر إلى تخطيطها. العديد من حزم برامج معالجة النصوص على سطح المكتب ومحرري صفحات الويب الآن يستخدمون لوريم إيبسوم
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ms-xl-5">
              <p className="counter-text">
                الأمر الذي سيتسبب في إلهامك وإثارة انتباهك يتمثل في أن تكون هنا. نحن هنا لمساعدتك في تحقيق أحلامك.
              </p>
              <div className="counter-box_wrapper">
                <div className="counter-box">
                  <div className="counter-box_icon">
                    <img
                      src="assets/img/icon/counter-icon_1-1.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="counter-box_number">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter-number">
                              <CountUp delay={0} start={0} end={200} />
                              K</span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p className="counter-box_text">فرد فريق</p>
                  </div>
                </div>
                <div className="counter-box">
                  <div className="counter-box_icon">
                    <img
                      src="assets/img/icon/counter-icon_1-2.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="counter-box_number">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter-number">
                              <CountUp delay={0} start={0} end={10} />K
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p className="counter-box_text">مشروع منجز</p>
                  </div>
                </div>
                <div className="counter-box">
                  <div className="counter-box_icon">
                    <img
                      src="assets/img/icon/counter-icon_1-3.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="counter-box_number">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter-number">
                              <CountUp delay={0} start={0} end={20} />K
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p className="counter-box_text">جائزة حاصلة عليها</p>
                  </div>
                </div>
                <div className="counter-box">
                  <div className="counter-box_icon">
                    <img
                      src="assets/img/icon/counter-icon_1-4.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="media-body">
                    <h2 className="counter-box_number">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter-number">
                              <CountUp delay={0} start={0} end={900} />K
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p className="counter-box_text">مراجعة العملاء</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default FaqOne;
