import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const ProcessOne = () => {
  return (
    <>
      <section
        className="process-area-1 bg-smoke space-bottom"
        style={{ backgroundImage: "url(assets/img/bg/shape_1.png)" }}
      >

        {/* Client Area   */}

        <div className="client-bg-area-2 space-bottom">
          <div className="client-area-2">
            <div className=" global-carousel">
              <Marquee speed={30}>
                <div>
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-1.png" alt="img" />
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-2.png" alt="img" />
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-3.png" alt="img" />
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-4.png" alt="img" />
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-1.png" alt="img" />
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-2.png" alt="img" />
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-3.png" alt="img" />
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="client-logo">
                    <Link to="/">
                      <img src="assets/img/client/1-4.png" alt="img" />
                    </Link>
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="title-area text-center">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  عملية العمل
                </span>
                <h2 className="sec-title style2">
                  إطلاق الإمكانيات المخفية للأعمال
                </h2>
              </div>
            </div>
          </div>
          <div className="row gy-30">
            <div className="col-lg-6 col-xl-3 process-card-wrap">
              <div className="process-card">
                <div className="process-card_wrapp">
                  <div className="process-card-icon">
                    <img src="assets/img/icon/process-icon-1-1.svg" alt="img" />
                  </div>
                  <h3 className="process-card_number">٠١</h3>
                </div>
                <div className="process-card_content">
                  <span className="process-card-text">العمليات التقنية</span>
                  <h4 className="process-card-title">تسارع النمو</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 process-card-wrap">
              <div className="process-card">
                <div className="process-card_wrapp">
                  <div className="process-card-icon">
                    <img src="assets/img/icon/process-icon-1-2.svg" alt="img" />
                  </div>
                  <h3 className="process-card_number">٠٢</h3>
                </div>
                <div className="process-card_content">
                  <span className="process-card-text">العمليات التقنية</span>
                  <h4 className="process-card-title">تسارع النمو</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 process-card-wrap">
              <div className="process-card">
                <div className="process-card_wrapp">
                  <div className="process-card-icon">
                    <img src="assets/img/icon/process-icon-1-3.svg" alt="img" />
                  </div>
                  <h3 className="process-card_number">٠٣</h3>
                </div>
                <div className="process-card_content">
                  <span className="process-card-text">العمليات التقنية</span>
                  <h4 className="process-card-title">تسارع النمو</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 process-card-wrap">
              <div className="process-card">
                <div className="process-card_wrapp">
                  <div className="process-card-icon">
                    <img src="assets/img/icon/process-icon-1-4.svg" alt="img" />
                  </div>
                  <h3 className="process-card_number">٠٤</h3>
                </div>
                <div className="process-card_content">
                  <span className="process-card-text">العمليات التقنية</span>
                  <h4 className="process-card-title">تسارع النمو</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <div className="goal-area space-top">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="title-area">
                <span className="sub-title">
                  <img src="assets/img/icon/title_left.svg" alt="shape" />
                  هدفنا
                </span>
                <h2 className="sec-title style2">
                  شراكة الأعمال للنجاح
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="goal-title-area">
                <p className="">
                  هناك العديد من التنويعات لمقاطع المهندس المتاحة.
                  تعرضت لتغيير في المهندس المتاح
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="goal-tabs-wrapper">
              <div
                className="nav nav-tabs goal-tabs-tabs"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link"
                  id="nav-step1-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-step1"
                  type="button"
                >
                  سيرة ذاتية
                </button>
                <button
                  className="nav-link"
                  id="nav-step2-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-step2"
                  type="button"
                >
                  التعليم
                </button>
                <button
                  className="nav-link active"
                  id="nav-step3-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-step3"
                  type="button"
                >
                  الخبرة
                </button>
                <button
                  className="nav-link"
                  id="nav-step4-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-step1"
                  type="button"
                >
                  سيرة ذاتية
                </button>
              </div>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade" id="nav-step1" role="tabpanel">
                  <div className="goal-list_wrapper">
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          شركاء تعزيز الأداء
                        </h4>
                        <p>حلول استراتيجية محترفة</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          إتقان الإدارة الاستشارية
                        </h4>
                        <p>محسّنو الربحية</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          حلول التميز التشغيلي
                        </h4>
                        <p>مصمم ومطور إطار العمل</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">استراتيجية التحويل</h4>
                        <p>خبراء الكفاءة</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-step2" role="tabpanel">
                  <div className="goal-list_wrapper">
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          شركاء تعزيز الأداء
                        </h4>
                        <p>حلول استراتيجية محترفة</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          إتقان الإدارة الاستشارية
                        </h4>
                        <p>محسّنو الربحية</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          حلول التميز التشغيلي
                        </h4>
                        <p>مصمم ومطور إطار العمل</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">استراتيجية التحويل</h4>
                        <p>خبراء الكفاءة</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade active show"
                  id="nav-step3"
                  role="tabpanel"
                >
                  <div className="goal-list_wrapper">
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          شركاء تعزيز الأداء
                        </h4>
                        <p>حلول استراتيجية محترفة</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          إتقان الإدارة الاستشارية
                        </h4>
                        <p>محسّنو الربحية</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          حلول التميز التشغيلي
                        </h4>
                        <p>مصمم ومطور إطار العمل</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">استراتيجية التحويل</h4>
                        <p>خبراء الكفاءة</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-step4" role="tabpanel">
                  <div className="goal-list_wrapper">
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          شركاء تعزيز الأداء
                        </h4>
                        <p>حلول استراتيجية محترفة</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          إتقان الإدارة الاستشارية
                        </h4>
                        <p>محسّنو الربحية</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">
                          حلول التميز التشغيلي
                        </h4>
                        <p>مصمم ومطور إطار العمل</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="goal-content_wrapp">
                      <img src="assets/img/icon/angles-left.svg" alt="" />
                      <div className="goal-content">
                        <h4 className="box-title">استراتيجية التحويل</h4>
                        <p>خبراء الكفاءة</p>
                        <div className="checklist">
                          <ul>
                            <li>
                              <i className="fas fa-check" />
                              مسرعات النجاح
                            </li>
                            <li>
                              <i className="fas fa-check" />
                              بدأ نادي السياسيين
                            </li>
                          </ul>
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

export default ProcessOne;
