import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../backend/img/logo.svg";

const Navbar = () => {

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  // const navSlide = () => {
  //   const burger = document.querySelector('.side-burger');
  //   const burgerClose = document.querySelector('.offcanvas-header .btn-close');
  //   const nav = document.querySelector('.offcanvas-body .nav');
  //   const navLink = document.querySelectorAll('.offcanvas-body .nav .nav-item')

  //   burger.addEventListener('click', () => {
  //     nav.classList.add('nav-active');

  //     navLink.forEach((link, index) => {
  //       if (link.style.animation) {
  //         link.style.animation = ''
  //       } else {
  //         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
  //       }
  //     });

  //     //burger.classList.toggle('toggle');
  //   });
  //   burgerClose.addEventListener('click', () => {
  //     nav.classList.remove('nav-active');
  //     navLink.forEach((link, index) => {
  //       if (link.style.animation) {
  //         link.style.animation = ''
  //       }
  //     });
  //   });
  // }




  return (
    <>
      <header className={` sticky-top  ${scroll ? 'sticky-top active' : ''}`}>
        <nav className="py-2 py-lg-1 navbar-expand-lg navbar-light">
          <div className="container-fluid px-lg-5">
            <div className="row align-items-center">
              <div className="col-12 col-lg-3 d-flex">
                <NavLink className="navbar-brand" to="/#">
                  <img src={Logo} alt="" className="logo" />
                </NavLink>
                <button
                  className="navbar-toggler ms-auto align-self-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#side-menu"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="col-12 col-lg-9">
                <div className="navigation py-lg-2 mt-2 mt-lg-0 d-flex flex-fill">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-lg-3 ms-auto mb-2 mb-lg-0 ">
                      <li className="nav-item dropdown py-1  py-lg-0">
                        <a className="nav-link link-scroll" href="#">
                          Customs warehouse
                        </a>
                      </li>
                      <li className="nav-item dropdown py-1  py-lg-0">
                        <NavLink className="nav-link link-scroll" to="preciousmetals">
                          Precious metals trading
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown py-1  py-lg-0">
                        <NavLink className="nav-link link-scroll" to="ourservices">

                          Our Services
                        </NavLink>
                      </li>
                      <li className="nav-item py-1 py-lg-0">
                        <select className="form-select">
                          <option defaultValue value="index.html">EN</option>
                          <option value="german.html">DE</option>
                        </select>
                      </li>
                    </ul>
                    <button
                      className="py-xl-2 btn btn-primary-light border-0 d-block text-center"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#side-menu"
                      aria-controls="side-menu"
                    >
                      <i className="fa-solid fa-bars"></i>
                    </button>
                    <div
                      className="offcanvas offcanvas-end"
                      tabIndex="-1"
                      id="side-menu"
                      aria-labelledby="side-menu-label"
                    >
                      {/* Off Canvas  */}
                      <div className="offcanvas offcanvas-end" tabIndex="-1" id="side-menu" aria-labelledby="side-menu-label">
                        <div className="offcanvas-header">
                          <h5 className="offcanvas-title" id="side-menu-label">
                            Menu
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="offcanvas-body">
                          <ul className="nav flex-column">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                              >
                                Active
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Link
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Link
                              </a>
                            </li>

                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Off canvas  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
