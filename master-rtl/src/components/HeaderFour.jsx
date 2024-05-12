import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderFour = () => {
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
                نحن نقدم خدمات التحضير الخاصة للشتاء لحماية حمام السباحة الخاص بك خلال موسم الخريف، وعندما يأتي الربيع، نتعامل مع عملية الافتتاح الشاملة.
              </p>
              <div className="social-links">
                <Link to="/https://www.facebook.com/">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link to="/https://www.twitter.com/">
                  <i className="fab fa-twitter" />
                </Link>
                <Link to="/https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in" />
                </Link>
                <Link to="/https://www.whatsapp.com/">
                  <i className="fab fa-whatsapp" />
                </Link>
              </div>
            </div>
          </div>
          <div className="side-info mb-30">
            <div className="contact-list mb-20">
              <h4>عنوان المكتب</h4>
              <p>1212، لاف فيجاس، شارع الخضر، الولايات المتحدة الأمريكية</p>
            </div>
            <div className="contact-list mb-20">
              <h4>رقم الهاتف</h4>
              <p className="mb-0">+880 123 45 67 89</p>
              <p>+880 765 86 43 85</p>
            </div>
            <div className="contact-list mb-20">
              <h4>البريد الإلكتروني</h4>
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

      {/* Mobile menu */}
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
                <Link to="#">الصفحة الرئيسية</Link>
                <ul className="sub-menu submenu-class">
                  <li>
                    <Link to="/home-1">الصفحة الرئيسية 01</Link>
                  </li>
                  <li>
                    <Link to="/home-2">الصفحة الرئيسية 02</Link>
                  </li>
                  <li>
                    <Link to="/home-3">الصفحة الرئيسية 03</Link>
                  </li>
                  <li>
                    <Link to="/home-4">الصفحة الرئيسية 04</Link>
                  </li>
                  <li>
                    <Link to="/home-5">الصفحة الرئيسية 05</Link>
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
                    <Link to="/service-details">تفاصيل الخدمة</Link>
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
                    <Link to="/project-details">تفاصيل المشروع</Link>
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
          </div>
        </div>
      </div>
      {/* header */}
      <header className="nav-header header-layout4">
        <div className="header-top d-none d-lg-block">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-phone-alt" />
                      <Link to="/tel:6295550129">(629) 555-0129</Link>
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      <Link to="/mailto:info@example.com">info@example.com</Link>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      6391 شارع اليجين. سيلينا، 10299
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-links ps-0">
                  <ul>
                    <li>
                      <div className="social-links">
                        <Link to="/https://www.facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="/https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link to="/https://www.twitter.com/">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link to="/https://www.linkedin.com/">
                          <i className="fab fa-linkedin" />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header-top-bg-shape"></div>
        </div>
        <div className={`sticky-wrapper ${scroll && "sticky"}`}>
          {/* منطقة القائمة الرئيسية */}
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link to="https://bizmaster-react.wowtheme7.com">
                    <img src="assets/img/logo-white2.svg" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li className="menu-item-has-children">
                      <Link to="#">الصفحة الرئيسية</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/home-1">الصفحة الرئيسية 01</Link>
                        </li>
                        <li>
                          <Link to="/home-2">الصفحة الرئيسية 02</Link>
                        </li>
                        <li>
                          <Link to="/home-3">الصفحة الرئيسية 03</Link>
                        </li>
                        <li>
                          <Link to="/home-4">الصفحة الرئيسية 04</Link>
                        </li>
                        <li>
                          <Link to="/home-5">الصفحة الرئيسية 05</Link>
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
                          <Link to="/service-details">تفاصيل الخدمة</Link>
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
                          <Link to="/project-details">تفاصيل المشروع</Link>
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
                  <button type="button" className="menu-toggle icon-btn" onClick={mobileMenu}>
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
              <div className="col-auto ms-xxl-4 d-xl-block d-none">
                <div className="header-wrapper">
                  <div className="header-button">
                    <button type="button" className="simple-icon searchBoxToggler" onClick={() => searchControl(true)}>
                      <i className="fas fa-search" />
                    </button>
                    <button
                      onClick={() => sidebarControl(true)}
                      className="simple-icon sideMenuToggler d-none d-lg-block"
                    >
                      <img src="assets/img/icon/bars.svg" alt="" />{" "}
                    </button>
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

export default HeaderFour;
