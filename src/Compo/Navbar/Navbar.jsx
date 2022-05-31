import React from "react";
import Logo from "../../backend/img/logo.svg";

const Navbar = () => {


  return (
    <>
      <header className="sticky-top ">
        <nav className="py-2 py-lg-1 navbar-expand-lg navbar-light">
          <div className="container-fluid px-lg-5">
            <div className="row align-items-center">
              <div className="col-12 col-lg-3 d-flex">
                <a className="navbar-brand" href="index.html">
                  <img src={Logo} alt="" className="logo" />
                </a>
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
                          {" "}
                          Customs warehouse{" "}
                        </a>
                      </li>
                      <li className="nav-item dropdown py-1  py-lg-0">
                        <a className="nav-link link-scroll" href="#">
                          {" "}
                          Precious metals trading{" "}
                        </a>
                      </li>
                      <li className="nav-item dropdown py-1  py-lg-0">
                        <a className="nav-link link-scroll" href="#">
                          {" "}
                          Our Services{" "}
                        </a>
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
                      class="offcanvas offcanvas-end"
                      tabindex="-1"
                      id="side-menu"
                      aria-labelledby="side-menu-label"
                    >
                      {/* Off Canvas  */}
                      <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="side-menu-label">
                          Menu
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="offcanvas-body">
                        <ul class="nav flex-column">
                          <li class="nav-item">
                            <a
                              class="nav-link active"
                              aria-current="page"
                              href="#"
                            >
                              Active
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">
                              Link
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">
                              Link
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                          </li>
                        </ul>
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
