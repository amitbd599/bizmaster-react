import React from "react";

const FaqTwo = () => {
  return (
    <>
      <section className="faq-area-3 space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="title-area text-center mb-60">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  اطرح السؤال
                </span>
                <h2 className="sec-title style2">
                  الممرات المتاحة للمهندس الممرات المتاحة للمهندس                </h2>
              </div>
            </div>
            <div className="col-xl-10">
              <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card style3 active">
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
                <div className="accordion-card style3">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      كم يستغرق من الوقت لإكمال مشروع؟
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
                        إنه حقيقة مثبتة منذ زمن طويل أن القارئ سينشغل بالمحتوى القابل للقراءة للصفحة عند النظر إلى تخطيطها. العديد من برامج النشر على سطح المكتب ومحرري صفحات الويب الآن يستخدمون لوريم إيبسوم
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style3">
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
                        إنه حقيقة مثبتة منذ زمن طويل أن القارئ سينشغل بالمحتوى القابل للقراءة للصفحة عند النظر إلى تخطيطها. العديد من برامج النشر على سطح المكتب ومحرري صفحات الويب الآن يستخدمون لوريم إيبسوم
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-hidden">
        <div className="bg-max-container bg-smoke radius-50">
          {/*==============================
        Event Area 2  
        ==============================*/}
          <div className="event-area-1 space overflow-hidden">
            <div className="container">
              <div className="row gy-50 align-items-center flex-row-reverse">
                <div className="col-lg-6">
                  <div className="event-thumb-2 text-lg-end">
                    <img
                      src="assets/img/normal/event-thumb-2-1.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="title-area">
                    <span className="sub-title">
                      <img src="assets/img/icon/title_left.svg" alt="shape" />
                      الأحداث القادمة
                    </span>
                    <h2 className="sec-title style2">
                      فتح الإمكانيات تحقيق النمو
                    </h2>
                  </div>
                  <div className="accordion-area accordion" id="eventAccordion" >
                    <div className="accordion-card style4 active" >
                      <div
                        className="accordion-header"
                        id="event-collapse-item-1"
                      >
                        <button
                          className="accordion-button "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#event-collapse-1"
                          aria-expanded="true"
                          aria-controls="event-collapse-1"
                        >
                          إكسبو الابتكار
                          <span className="event-date">October 19, 2022</span>
                        </button>
                      </div>
                      <div
                        id="event-collapse-1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="event-collapse-item-1"
                        data-bs-parent="#eventAccordion"
                      >
                        <div className="accordion-body">
                          <p className="event-text">
                            إيت بوروس دويس سوليسيتودين سد ديجنيس سيم هابي تانت.
                            إيجيستاس نولا كويس فنيناتيس إيت بوروس دويس إيت بوروس دويس
                            سوليسيتودين سد ديجنيس
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card style4">
                      <div
                        className="accordion-header"
                        id="event-collapse-item-2"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#event-collapse-2"
                          aria-expanded="false"
                          aria-controls="event-collapse-2"
                        >
                          منتدى المستقبل المتقدم
                          <span className="event-date">October 19, 2022</span>
                        </button>
                      </div>
                      <div
                        id="event-collapse-2"
                        className="accordion-collapse collapse "
                        aria-labelledby="event-collapse-item-2"
                        data-bs-parent="#eventAccordion"
                      >
                        <div className="accordion-body">
                          <p className="event-text">
                            إيت بوروس دويس سوليسيتودين سد ديجنيس سيم هابي تانت.
                            إيجيستاس نولا كويس فنيناتيس إيت بوروس دويس إيت بوروس دويس
                            سوليسيتودين سد ديجنيس
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card style4">
                      <div
                        className="accordion-header"
                        id="event-collapse-item-3"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#event-collapse-3"
                          aria-expanded="false"
                          aria-controls="event-collapse-3"
                        >
                          قمة اتجاهات التجارة
                          <span className="event-date">October 19, 2022</span>
                        </button>
                      </div>
                      <div
                        id="event-collapse-3"
                        className="accordion-collapse collapse "
                        aria-labelledby="event-collapse-item-3"
                        data-bs-parent="#eventAccordion"
                      >
                        <div className="accordion-body">
                          <p className="event-text">
                            إيت بوروس دويس سوليسيتودين سد ديجنيس سيم هابي تانت.
                            إيجيستاس نولا كويس فنيناتيس إيت بوروس دويس إيت بوروس دويس
                            سوليسيتودين سد ديجنيس
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default FaqTwo;
