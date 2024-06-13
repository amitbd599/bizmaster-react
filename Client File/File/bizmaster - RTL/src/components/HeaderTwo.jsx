import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderTwo = () => {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'><i class='fas fa-chevron-down'></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 250) {
        setScroll(false);
      } else if (window.pageYOffset > 250) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };

  const searchControl = (active) => {
    setSearch(active);
  };

  const sidebarControl = (active) => {
    setSidebar(active);
  };
  return (
    <>
      {/* Sidemenu */}
      <div
        className={`sidemenu-wrapper sidemenu-info ${sidebar ? "show" : ""} `}
      >
        <div className="sidemenu-content">
          <button
            className="closeButton sideMenuCls"
            onClick={() => sidebarControl(false)}
          >
            <i className="fas fa-times" />
          </button>
          <div className="widget  ">
            <div className="th-widget-about">
              <div className="about-logo">
                <Link to="https://bizmaster-react.wowtheme7.com">
                  <img src="assets/img/logo.svg" alt="Laun" />
                </Link>
              </div>
              <p className="about-text">
                نحن نقدم خدمات التزود بالشتاء المتخصصة لحماية حمام السباحة الخاص بك خلال موسم الخروج من الخدمة، وعندما يأتي الربيع، نتولى عملية الافتتاح الشاملة.
              </p>
              <div className="social-links">
                <Link to="#">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter" />
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in" />
                </Link>
                <Link to="#">
                  <i className="fab fa-whatsapp" />
                </Link>
              </div>
            </div>
          </div>
          <div className="side-info mb-30">
            <div className="contact-list mb-20">
              <h4>عنوان المكتب</h4>
              <p>1212، لاف فيغاس، شارع فيغ، الولايات المتحدة</p>
            </div>
            <div className="contact-list mb-20">
              <h4>رقم الهاتف</h4>
              <p className="mb-0">+880 123 45 67 89</p>
              <p>+880 765 86 43 85</p>
            </div>
            <div className="contact-list mb-20">
              <h4>عنوان البريد الإلكتروني</h4>
              <p className="mb-0">yourmail@gmail.com</p>
              <p>example.mail@hum.com</p>
            </div>
          </div>
          <ul className="side-instagram list-wrap">
            <li>
              <Link to="#">
                <img src="assets/img/gallery/1.jpg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="assets/img/gallery/2.jpg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="assets/img/gallery/3.jpg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="assets/img/gallery/4.jpg" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`popup-search-box ${search === true ? "show" : ""} `}>
        <button className="searchClose" onClick={() => searchControl(false)}>
          <i className="fas fa-times" />
        </button>
        <form action="#">
          <input type="text" placeholder="ما الذي تبحث عنه؟" />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>

      {/* Mobile Menu */}


      <div className={`mobile-menu-wrapper rtl ${active ? "body-visible" : ""}`}>
        <div className="mobile-menu-area">
          <div className="mobile-logo">
            <Link to="https://bizmaster-react.wowtheme7.com">
              <img src="assets/img/logo.svg" alt="Bizmaster" />
            </Link>
            <button className="menu-toggle" onClick={mobileMenu}>
              <i className="fa fa-times" />
            </button>
          </div>
          <div className="mobile-menu">
            <ul id="offcanvas-navigation">
              <li className="menu-item-has-children submenu-item-has-children">
                <Link to="#">الرئيسية</Link>
                <ul className="sub-menu submenu-class">
                  <li>
                    <Link to="/">الرئيسية 01</Link>
                  </li>
                  <li>
                    <Link to="/home-2">الرئيسية 02</Link>
                  </li>
                  <li>
                    <Link to="/home-3">الرئيسية 03</Link>
                  </li>
                  <li>
                    <Link to="/home-4">الرئيسية 04</Link>
                  </li>
                  <li>
                    <Link to="/home-5">الرئيسية 05</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/about">معلومات عنا</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">الصفحات</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/pricing">صفحة التسعير</Link>
                  </li>
                  <li>
                    <Link to="/team">الفريق</Link>
                  </li>
                  <li>
                    <Link to="/team-details">تفاصيل الفريق</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">المشاريع</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/project">المشاريع</Link>
                  </li>
                  <li>
                    <Link to="/project-details">تفاصيل المشاريع</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">الخدمات</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/service">الخدمات</Link>
                  </li>
                  <li>
                    <Link to="/service-details">تفاصيل الخدمات</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">المدونة</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/blog">المدونة</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">تفاصيل المدونة</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">اتصل بنا</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header Area */}

      <header className="nav-header header-layout2">
        <div className={`sticky-wrapper ${scroll && "sticky"}`}>
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="https://bizmaster-react.wowtheme7.com">
                      <img src="assets/img/logo.svg" alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children">
                        <Link to="#">الرئيسية</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/">الرئيسية 01</Link>
                          </li>
                          <li>
                            <Link to="/home-2">الرئيسية 02</Link>
                          </li>
                          <li>
                            <Link to="/home-3">الرئيسية 03</Link>
                          </li>
                          <li>
                            <Link to="/home-4">الرئيسية 04</Link>
                          </li>
                          <li>
                            <Link to="/home-5">الرئيسية 05</Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to="/about">معلومات عنا</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">الخدمات</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/service">الخدمات</Link>
                          </li>
                          <li>
                            <Link to="/service-details">تفاصيل الخدمات</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">المشاريع</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/project">المشاريع</Link>
                          </li>
                          <li>
                            <Link to="/project-details">تفاصيل المشاريع</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">المدونة</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/blog">المدونة</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">تفاصيل المدونة</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">الصفحات</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/pricing">صفحة التسعير</Link>
                          </li>
                          <li>
                            <Link to="/team">الفريق</Link>
                          </li>
                          <li>
                            <Link to="/team-details">تفاصيل الفريق</Link>
                          </li>
                          <li>
                            <Link to="/contact">صفحة الاتصال</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">اتصل بنا</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button
                      type="button"
                      className="menu-toggle icon-btn"
                      onClick={mobileMenu}
                    >
                      <i className="fas fa-bars" />
                    </button>
                  </div>
                </div>
                <div className="col-auto d-xl-block d-none">
                  <div className="header-button">
                    <Link to="/contact" className="global-btn">
                      احصل على عرض
                      <img src="assets/img/icon/right-icon.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>

  );
};

export default HeaderTwo;
