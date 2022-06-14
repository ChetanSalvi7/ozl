import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../backend/img/logo.svg";
import { SiteData } from "../../App";


const Navbar = () => {
  const SiteDataInfo = useContext(SiteData);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  let timeout;

  function ScrollToServiceTime() {
    timeout = setTimeout(scrollToService, 400);
  }

  const scrollToService = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth'
    });
  };

  function ScrollToCustomerTime() {
    timeout = setTimeout(scrollToBecome, 400);
  }

  const scrollToBecome = () => {
    window.scrollTo({
      top: 1430,
      behavior: 'smooth'
    });
  };


  return (
    <>
      <header className={` sticky-top  ${scroll ? 'sticky-top active' : ''}`}>
        <nav className="py-2 py-lg-1 navbar-expand-lg navbar-light">
          <div className="container-fluid px-lg-5">
            <div className="row align-items-center">
              <div className="col-12 col-lg-3 d-flex">
                <NavLink className="navbar-brand" to="/">
                  <img src={Logo} alt="" className="logo" />
                </NavLink>
                <button className="navbar-toggler ms-auto align-self-center" type="button"
                  data-bs-toggle="offcanvas" data-bs-target="#side-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                        <NavLink className="nav-link link-scroll" to="ourservices" onClick={ScrollToServiceTime}>
                          {SiteDataInfo.outPutArray.header_menu_1}
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown py-1  py-lg-0">
                        <NavLink className="nav-link link-scroll" to="preciousmetals">
                          {SiteDataInfo.outPutArray.header_menu_2}
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown py-1  py-lg-0">
                        <NavLink className="nav-link link-scroll" to="safedepositbox">
                          {SiteDataInfo.outPutArray.header_menu_3}
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown py-1  py-lg-0">
                        <a className="nav-link link-scroll" target="_blank" href="https://ozl.li/fileadmin//user_upload/OZL_Datenschutzerklaerung_Vertrag_EN.pdf">
                          PRIVACY POLICY
                        </a>
                      </li>
                      {/* <li className="nav-item py-1 py-lg-0">
                        <select className="selectpicker selectlanaguePicker" data-width="fit" name="language_id">
                          <option defaultValue value="index.html">EN</option>
                          <option  value="german.html">DE</option>
                        </select>
                      </li> */}
                    </ul>
                    <button className="py-xl-2 btn btn-primary border-0 d-block text-center side-burger"
                      type="button" data-bs-toggle="offcanvas" data-bs-target="#side-menu" aria-controls="side-menu"  >
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Off Canvas  */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="side-menu" aria-labelledby="side-menu-label">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="side-menu-label">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="logistics" data-bs-dismiss="offcanvas" aria-label="Close">{SiteDataInfo.outPutArray.header_menu_4}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="diamonds" data-bs-dismiss="offcanvas" aria-label="Close">{SiteDataInfo.outPutArray.header_menu_5}</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="art" data-bs-dismiss="offcanvas" aria-label="Close">{SiteDataInfo.outPutArray.header_menu_6}</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="loginclient" data-bs-dismiss="offcanvas" aria-label="Close">{SiteDataInfo.outPutArray.header_menu_7}</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://www.rheingold-edelmetall.com/en/portfolio/index/">{SiteDataInfo.outPutArray.header_menu_8}</a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/" data-bs-dismiss="offcanvas" aria-label="Close" onClick={ScrollToCustomerTime}>{SiteDataInfo.outPutArray.header_menu_9}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/gtc" data-bs-dismiss="offcanvas" aria-label="Close">{SiteDataInfo.outPutArray.header_menu_10}</NavLink>
            </li>

          </ul>
        </div>
      </div>

      {/* Off canvas  */}
    </>
  );
};

export default Navbar;
